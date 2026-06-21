/* eslint-disable @next/next/no-img-element */

import MobileFluidSection from '@/components/MobileFluidSection';
import './mobile-steps.css';

const ASSETS = {
  bubble: '/assets/mobile-block2-bubble.png',
  ellipse: '/assets/mobile-block2-ellipse.svg',
  line32: '/assets/mobile-block2-line-32.svg',
  line33: '/assets/mobile-block2-line-33.svg',
} as const;

const SF_VARIATION = { fontVariationSettings: '"wdth" 100' } as const;

const BUBBLE_IMAGE_LARGE =
  'absolute h-[485.92%] left-[-2.05%] top-[-224.22%] w-[470.99%] max-w-none';
const BUBBLE_IMAGE_SMALL =
  'absolute h-[620.6%] left-[-457.54%] top-[-297.35%] w-[612.45%] max-w-none';

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

function StepConnector({ src, top, nodeId }: { src: string; top: string; nodeId: string }) {
  return (
    <div className="mobile-steps-connector" style={{ top }} data-node-id={nodeId}>
      <AssetImg src={src} alt="" width={23.022} height={1} />
    </div>
  );
}

export default function MobileStepsSection() {
  return (
    <MobileFluidSection
      as="section"
      designHeight={438}
      data-node-id="312:1103"
      data-name="блок 2"
      aria-label="How it works steps"
      canvasClassName="relative overflow-hidden bg-gradient-to-b from-[#c6c8e2] to-[#e1e0e7]"
    >
      {/* Ellipse — 312:1104 */}
      <div className="pointer-events-none absolute left-[calc(-45*var(--mf))] top-[calc(-80*var(--mf))] h-[calc(190*var(--mf))] w-[calc(443*var(--mf))]" data-node-id="312:1104">
        <div className="absolute inset-[-18.68%_-8.01%]">
          <AssetImg src={ASSETS.ellipse} alt="" className="block size-full max-w-none" />
        </div>
      </div>

      {/* Steps group — 312:1105 */}
      <div
        className="mobile-steps-group absolute left-[calc(48*var(--mf))] top-[calc(84*var(--mf))] h-[calc(255.922*var(--mf))] w-[calc(291.25*var(--mf))]"
        data-node-id="312:1105"
      >
        {/* Bubbles — 312:1125 */}
        <div className="pointer-events-none absolute inset-0" aria-hidden data-node-id="312:1125">
          <div
            className="absolute left-[calc(-61*var(--mf))] top-[calc(-56*var(--mf))] h-[calc(106.827*var(--mf))] w-[calc(111.213*var(--mf))] rounded-[calc(259.55*var(--mf))] blur-[calc(0.689*var(--mf))]"
            data-node-id="312:1126"
            data-name="Firefly (12) 2"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[calc(259.55*var(--mf))] opacity-70">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_LARGE} />
            </div>
          </div>
          <div
            className="absolute left-[calc(-23*var(--mf))] top-[calc(96*var(--mf))] h-[calc(35*var(--mf))] w-[calc(36*var(--mf))] rounded-[calc(259.55*var(--mf))]"
            data-node-id="312:1128"
            data-name="Firefly (12) 6"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[calc(259.55*var(--mf))] opacity-80">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_SMALL} />
            </div>
          </div>
          <div
            className="absolute left-[calc(44.213*var(--mf))] top-[calc(20*var(--mf))] h-[calc(31*var(--mf))] w-[calc(32*var(--mf))] rounded-[calc(259.55*var(--mf))]"
            data-node-id="312:1127"
            data-name="Firefly (12) 5"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[calc(259.55*var(--mf))] opacity-80">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_SMALL} />
            </div>
          </div>
        </div>

        {/* Step 1 — 312:1106 */}
        <div
          className="absolute left-[calc(112*var(--mf))] top-0 flex h-[calc(45.925*var(--mf))] w-[calc(178.25*var(--mf))] items-center gap-[calc(8*var(--mf))] [word-break:break-word]"
          data-node-id="312:1106"
        >
          <p
            className="font-helvetica-neue-cyr--thin m-0 h-[calc(45.925*var(--mf))] w-[calc(63*var(--mf))] shrink-0 text-[calc(56.766*var(--mf))] not-italic leading-[1.02] tracking-[calc(-3.4059*var(--mf))] text-white"
            data-node-id="312:1107"
          >
            01
          </p>
          <div
            className="flex h-[calc(40.45*var(--mf))] w-[calc(107.25*var(--mf))] shrink-0 flex-col items-start gap-[calc(3*var(--mf))]"
            data-node-id="312:1108"
          >
            <p
              className="font-sf-pro--medium m-0 flex h-[calc(21.45*var(--mf))] w-full items-center text-[calc(16.5*var(--mf))] font-[510] leading-[1.02] tracking-[calc(-0.66*var(--mf))] text-black"
              style={SF_VARIATION}
              data-node-id="312:1109"
            >
              ВІДКРИЙ
            </p>
            <p
              className="font-helvetica-neue-cyr--roman m-0 flex h-[calc(16*var(--mf))] w-full items-center text-[calc(13.2*var(--mf))] not-italic leading-[118.11%] text-[#5c5c5c]"
              data-node-id="312:1110"
            >
              Дістань цигарку
            </p>
          </div>
        </div>

        {/* Step 2 — 312:1112 */}
        <div
          className="absolute left-0 top-[calc(104.921875*var(--mf))] flex h-[calc(47*var(--mf))] w-[calc(173*var(--mf))] items-center justify-between [word-break:break-word]"
          data-node-id="312:1112"
        >
          <div
            className="flex h-[calc(36*var(--mf))] w-[calc(94*var(--mf))] shrink-0 flex-col items-start text-right"
            data-node-id="312:1113"
          >
            <p
              className="font-sf-pro--medium m-0 flex h-[calc(21*var(--mf))] w-full items-center justify-end text-[calc(16.5*var(--mf))] font-[510] leading-[1.02] tracking-[calc(-0.66*var(--mf))] text-black"
              style={SF_VARIATION}
              data-node-id="312:1114"
            >
              ВМОЧИ
            </p>
            <p
              className="font-helvetica-neue-cyr--roman m-0 flex h-[calc(15*var(--mf))] w-full items-center justify-end text-[calc(13.2*var(--mf))] not-italic leading-[118.11%] text-[#5c5c5c]"
              data-node-id="312:1115"
            >
              Занур у рідину
            </p>
          </div>
          <p
            className="font-helvetica-neue-cyr--thin m-0 h-[calc(47*var(--mf))] w-[calc(63*var(--mf))] shrink-0 text-[calc(56.77*var(--mf))] not-italic leading-[1.02] tracking-[calc(-3.4062*var(--mf))] text-white"
            data-node-id="312:1116"
          >
            02
          </p>
        </div>

        {/* Step 3 — 312:1118 */}
        <div
          className="absolute left-[calc(113*var(--mf))] top-[calc(210.921875*var(--mf))] flex h-[calc(45*var(--mf))] w-[calc(178.25*var(--mf))] items-end justify-between [word-break:break-word]"
          data-node-id="312:1118"
        >
          <p
            className="font-helvetica-neue-cyr--thin m-0 h-[calc(45*var(--mf))] w-[calc(63*var(--mf))] shrink-0 text-[calc(56.77*var(--mf))] not-italic leading-[1.02] tracking-[calc(-3.4062*var(--mf))] text-white"
            data-node-id="312:1119"
          >
            03
          </p>
          <div
            className="flex h-[calc(40.45*var(--mf))] w-[calc(107.25*var(--mf))] shrink-0 flex-col items-start gap-[calc(3*var(--mf))]"
            data-node-id="312:1120"
          >
            <p
              className="font-sf-pro--medium m-0 flex h-[calc(21.45*var(--mf))] w-full items-center text-[calc(16.5*var(--mf))] font-[510] leading-[1.02] tracking-[calc(-0.66*var(--mf))] text-black"
              style={SF_VARIATION}
              data-node-id="312:1121"
            >
              ВИДУЙ
            </p>
            <p
              className="font-helvetica-neue-cyr--roman m-0 flex h-[calc(16*var(--mf))] w-full items-center text-[calc(13.2*var(--mf))] not-italic leading-[118.11%] text-[#5c5c5c]"
              data-node-id="312:1122"
            >
              Та насолоджуйся
            </p>
          </div>
        </div>

        {/* Divider lines — shared vertical axis at --steps-connector-x */}
        <div className="mobile-steps-connectors" aria-hidden>
          <StepConnector
            src={ASSETS.line32}
            top="calc(86.0234375 * var(--mf))"
            nodeId="312:1124"
          />
          <StepConnector
            src={ASSETS.line33}
            top="calc(197.0234375 * var(--mf))"
            nodeId="312:1123"
          />
        </div>
      </div>
    </MobileFluidSection>
  );
}
