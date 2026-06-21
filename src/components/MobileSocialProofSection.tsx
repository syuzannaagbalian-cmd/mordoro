'use client';

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from 'react';
import MobileScaleFrame from '@/components/MobileScaleFrame';
import { useCustomerCounter } from '@/hooks/useCustomerCounter';
import { scrollToSection } from '@/utils/scrollToSection';
import './mobile-block5.css';

const ASSETS = {
  ctaCircle: '/assets/mobile-block5-cta-circle.svg',
} as const;

const SF_VARIATION = { fontVariationSettings: '"wdth" 100' } as const;
const SF_VARIATION_YAXS = { fontVariationSettings: '"YAXS" 400' } as const;

const SLIDE_COUNT = 5;
const DOT_COUNT = 4;
const CARD_WIDTH = 173.683;
const CARD_HEIGHT = 308.77;
const CARD_GAP = 5.146;
const TRACK_PADDING_LEFT = 251;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;
const INITIAL_SLIDE = 1;

const SLIDE_NODE_IDS = ['312:1404', '312:1405', '312:1406', '312:1407', '312:1408'] as const;

function slideScrollLeft(index: number) {
  return TRACK_PADDING_LEFT + index * SCROLL_STEP;
}

function nearestSlideIndex(scrollLeft: number) {
  let closest = 0;
  let minDistance = Infinity;
  for (let index = 0; index < SLIDE_COUNT; index += 1) {
    const distance = Math.abs(scrollLeft - slideScrollLeft(index));
    if (distance < minDistance) {
      minDistance = distance;
      closest = index;
    }
  }
  return closest;
}

function AssetImg({
  src,
  alt = '',
  className,
  width,
  height,
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  if (width != null && height != null) {
    return <img alt={alt} className={className} src={src} width={width} height={height} />;
  }
  return <img alt={alt} className={className} src={src} />;
}

export default function MobileSocialProofSection() {
  const { count, isAnimating } = useCustomerCounter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const [activeSlide, setActiveSlide] = useState(INITIAL_SLIDE);
  const activeDot = Math.min(activeSlide, DOT_COUNT - 1);

  const syncActiveSlide = useCallback(() => {
    const element = scrollRef.current;
    if (!element) return;
    setActiveSlide(nearestSlideIndex(element.scrollLeft));
  }, []);

  const scrollToSlide = useCallback((index: number) => {
    const element = scrollRef.current;
    if (!element) return;
    const clamped = Math.max(0, Math.min(SLIDE_COUNT - 1, index));
    element.scrollTo({ left: slideScrollLeft(clamped), behavior: 'smooth' });
    setActiveSlide(clamped);
  }, []);

  const scrollToOrderForm = useCallback(() => {
    scrollToSection('mobile-order-section');
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollLeft = slideScrollLeft(INITIAL_SLIDE);
    setActiveSlide(INITIAL_SLIDE);
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleScrollEnd = () => syncActiveSlide();
    element.addEventListener('scrollend', handleScrollEnd);
    return () => element.removeEventListener('scrollend', handleScrollEnd);
  }, [syncActiveSlide]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = scrollRef.current;
    if (!element) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: element.scrollLeft,
    };
    element.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = scrollRef.current;
    if (!element || !dragRef.current.active) return;
    element.scrollLeft = dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = scrollRef.current;
    if (!element) return;
    dragRef.current.active = false;
    element.releasePointerCapture(event.pointerId);
    syncActiveSlide();
  };

  return (
    <MobileScaleFrame
      as="section"
      designHeight={819}
      className="mobile-block5-root"
      data-node-id="312:1398"
      data-name="блок 5"
      aria-label="Morldoro social proof"
      canvasClassName="relative bg-[#e1e0e7]"
    >
      <p
        className="font-sf-pro--light-italic absolute left-0 top-[113px] m-0 flex h-[43px] w-[390px] items-center justify-center text-center text-[32px] italic leading-[1.08] text-[#022ec9] [word-break:break-word]"
        style={SF_VARIATION_YAXS}
        data-node-id="312:1401"
      >
        #morldoro
      </p>

      <div
        className="mobile-block5-gallery-viewport absolute left-0 top-[172px] h-[308.77px] w-[390px]"
        data-node-id="312:1402"
      >
        <div
          ref={scrollRef}
          className="mobile-block5-gallery-track h-full w-full cursor-grab overflow-x-auto overflow-y-hidden active:cursor-grabbing"
          style={{ scrollSnapType: 'x mandatory' }}
          data-node-id="312:1403"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onScroll={syncActiveSlide}
        >
          <div
            className="flex h-[308.77px] shrink-0 items-stretch gap-[5.146px] pl-[251px]"
            style={{ width: TRACK_PADDING_LEFT + SLIDE_COUNT * CARD_WIDTH + (SLIDE_COUNT - 1) * CARD_GAP }}
          >
            {SLIDE_NODE_IDS.map((nodeId) => (
              <div
                key={nodeId}
                className="mobile-block5-slide rounded-[5.146px] bg-[#4968b0]"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
                data-node-id={nodeId}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute left-1/2 top-[510.77px] flex h-[6px] w-[39px] -translate-x-1/2 items-center gap-[5px]"
        data-node-id="312:1409"
        role="tablist"
        aria-label="Галерея слайдів"
      >
        {Array.from({ length: DOT_COUNT }, (_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={activeDot === index}
            aria-label={`Слайд ${index + 1}`}
            onClick={() => scrollToSlide(index)}
            className={`mobile-block5-dot size-[6px] shrink-0 rounded-full border-0 p-0 ${
              activeDot === index ? 'bg-[#022ec9]' : 'bg-[#c5c5c5]'
            }`}
            data-node-id={`312:${1410 + index}`}
          />
        ))}
      </div>

      <div
        className="absolute left-1/2 top-[566.77px] flex w-[273px] -translate-x-1/2 flex-col items-center gap-[38px]"
        data-node-id="312:1414"
      >
        <div
          className="flex w-full shrink-0 flex-col items-center gap-[8px] text-center text-black [word-break:break-word]"
          data-node-id="312:1415"
        >
          <p
            className={`mobile-block5-counter font-sf-pro--medium m-0 flex h-[81px] w-full items-center justify-center text-[80px] font-[510] uppercase leading-[1.08] tracking-[-2.4px] ${isAnimating ? 'mobile-block5-counter--animating' : ''}`}
            style={SF_VARIATION}
            data-node-id="312:1416"
            suppressHydrationWarning
          >
            {count}
          </p>
          <p
            className="font-sf-pro--light m-0 flex h-[29px] w-full items-center justify-center whitespace-pre-wrap text-[24px] font-[274] leading-[1.21] tracking-[-0.96px]"
            style={SF_VARIATION}
            data-node-id="312:1417"
          >{`українців  вже в темі`}</p>
        </div>

        <button
          type="button"
          onClick={scrollToOrderForm}
          className="mobile-block5-cta-btn flex h-[48px] w-[258px] shrink-0 cursor-pointer items-center gap-[24px] border-0 bg-transparent p-0"
          data-node-id="312:1418"
        >
          <span
            className="font-helvetica-neue-cyr--roman flex h-[15px] w-[186px] shrink-0 items-center text-[18px] not-italic leading-normal text-[#022ec9] [word-break:break-word]"
            data-node-id="312:1419"
          >
            Стань наступним
          </span>
          <span className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
            <span className="col-start-1 row-start-1 ml-0 mt-0 flex size-[48px] items-center justify-center" data-node-id="312:1421">
              <AssetImg
                src={ASSETS.ctaCircle}
                alt=""
                width={48}
                height={48}
                className="block size-full max-w-none object-contain"
              />
            </span>
          </span>
        </button>
      </div>
    </MobileScaleFrame>
  );
}
