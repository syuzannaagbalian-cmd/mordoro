'use client';

import { useEffect, useState } from 'react';

const INITIAL_COUNT = 1398;
const STORAGE_KEY = 'morldoro-customer-counter';
const MIN_INTERVAL_MS = 3 * 60 * 1000;
const MAX_INTERVAL_MS = 8 * 60 * 1000;

type CounterState = {
  count: number;
  lastUpdated: number;
};

type CounterSnapshot = {
  count: number;
  isAnimating: boolean;
};

type Listener = (snapshot: CounterSnapshot) => void;

function randomIntervalMs() {
  return MIN_INTERVAL_MS + Math.floor(Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS + 1));
}

function readStoredState(): CounterState {
  if (typeof window === 'undefined') {
    return { count: INITIAL_COUNT, lastUpdated: Date.now() };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { count: INITIAL_COUNT, lastUpdated: Date.now() };
    }

    const parsed = JSON.parse(raw) as Partial<CounterState>;
    if (typeof parsed.count !== 'number' || typeof parsed.lastUpdated !== 'number') {
      return { count: INITIAL_COUNT, lastUpdated: Date.now() };
    }

    return { count: parsed.count, lastUpdated: parsed.lastUpdated };
  } catch {
    return { count: INITIAL_COUNT, lastUpdated: Date.now() };
  }
}

function writeStoredState(state: CounterState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function catchUpCount(state: CounterState): CounterState {
  const now = Date.now();
  let { count, lastUpdated } = state;

  while (true) {
    const interval = randomIntervalMs();
    if (lastUpdated + interval > now) break;
    count += 1;
    lastUpdated += interval;
  }

  return { count, lastUpdated };
}

const listeners = new Set<Listener>();
let engineState: CounterState = { count: INITIAL_COUNT, lastUpdated: Date.now() };
let timeoutRef: ReturnType<typeof setTimeout> | null = null;
let animTimeoutRef: ReturnType<typeof setTimeout> | null = null;
let engineStarted = false;
let subscriberCount = 0;

function notify(isAnimating: boolean) {
  const snapshot = { count: engineState.count, isAnimating };
  listeners.forEach((listener) => listener(snapshot));
}

function persist(next: CounterState, animate: boolean) {
  engineState = next;
  writeStoredState(next);
  if (animate) {
    notify(true);
    if (animTimeoutRef) clearTimeout(animTimeoutRef);
    animTimeoutRef = setTimeout(() => notify(false), 500);
  } else {
    notify(false);
  }
}

function scheduleNextTick() {
  if (timeoutRef) clearTimeout(timeoutRef);
  timeoutRef = setTimeout(() => {
    persist(
      {
        count: engineState.count + 1,
        lastUpdated: Date.now(),
      },
      true,
    );
    scheduleNextTick();
  }, randomIntervalMs());
}

function startEngine() {
  if (engineStarted || typeof window === 'undefined') return;
  engineStarted = true;
  engineState = catchUpCount(readStoredState());
  writeStoredState(engineState);
  notify(false);
  scheduleNextTick();
}

function stopEngine() {
  if (timeoutRef) {
    clearTimeout(timeoutRef);
    timeoutRef = null;
  }
  if (animTimeoutRef) {
    clearTimeout(animTimeoutRef);
    animTimeoutRef = null;
  }
  engineStarted = false;
}

export function useCustomerCounter() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const listener: Listener = ({ count: nextCount, isAnimating: nextAnimating }) => {
      setCount(nextCount);
      setIsAnimating(nextAnimating);
    };

    listeners.add(listener);
    subscriberCount += 1;
    startEngine();
    listener({ count: engineState.count, isAnimating: false });

    return () => {
      listeners.delete(listener);
      subscriberCount -= 1;
      if (subscriberCount <= 0) {
        stopEngine();
      }
    };
  }, []);

  return { count, isAnimating };
}
