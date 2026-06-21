/* eslint-disable @next/next/no-img-element */
'use client';

import { useCallback } from 'react';
import { useCustomerCounter } from '@/hooks/useCustomerCounter';
import { scrollToSection } from '@/utils/scrollToSection';

const ASSETS = {
  bubble: '/assets/block4-bubble.png',
  line: '/assets/block4-line.svg',
  dot: '/assets/block4-dot.svg',
  ctaCircle: '/assets/block4-cta-circle.svg',
} as const;

const GALLERY_CARD_IDS = ['284:255', '284:256', '284:257', '284:258', '284:259'] as const;

const SF_VARIATION = { fontVariationSettings: '"wdth" 100' } as const;
const SF_VARIATION_YAXS = { fontVariationSettings: '"YAXS" 400' } as const;

const BUBBLE_IMAGE_CLASS =
  'absolute h-[620.6%] left-[-457.54%] top-[-297.35%] w-[612.45%] max-w-none';

function AssetImg({
  src,
  alt = '',
  className,
  width,
  height,
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}) {
  if (width && height) {
    return <img alt={alt} className={className} src={src} width={width} height={height} style={style} />;
  }
  return <img alt={alt} className={className} src={src} style={style} />;
}

function BubbleCard({
  nodeId,
  className,
  imageClassName,
}: {
  nodeId: string;
  className: string;
  imageClassName?: string;
}) {
  return (
    <div className={className} data-node-id={nodeId}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[828.5px] opacity-80">
        <AssetImg src={ASSETS.bubble} alt="" className={imageClassName ?? BUBBLE_IMAGE_CLASS} />
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  const { count, isAnimating } = useCustomerCounter();

  const scrollToOrderForm = useCallback(() => {
    scrollToSection('desktop-order-section');
  }, []);

  return (
    <section
      className="relative mx-auto h-[592px] w-[1440px] overflow-hidden bg-[#e1e0e7]"
      data-node-id="284:243"
      aria-label="Morldoro social proof"
    >
      {/* Decorative bubbles */}
      <div className="pointer-events-none absolute left-[31px] top-[72px] h-[467px] w-[857px]" data-node-id="284:244">
        <BubbleCard
          nodeId="284:245"
          className="absolute left-[625px] top-[316px] h-[121px] w-[124px] rounded-[828.5px]"
        />
        <BubbleCard
          nodeId="284:246"
          className="absolute left-[451px] top-[243px] h-[121px] w-[124px] rounded-[828.5px] blur-[2px]"
        />
        <BubbleCard
          nodeId="284:247"
          className="absolute left-[641px] top-[72px] h-[242px] w-[247px] rounded-[828.5px] blur-[10.1px]"
        />
        <BubbleCard
          nodeId="284:248"
          className="absolute left-[31px] top-[297px] h-[242px] w-[247px] rounded-[828.5px] blur-[10.1px]"
        />
      </div>

      {/* Decorative line + dot */}
      <div className="pointer-events-none absolute left-[845px] top-[474px] flex h-[14px] w-0 items-center justify-center">
        <div className="flex-none rotate-90">
          <div className="relative h-0 w-[14px]" data-node-id="284:249">
            <div className="absolute inset-[-1px_0_0_0]">
              <AssetImg src={ASSETS.line} className="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-[837px] top-[468px] size-[6px]" data-node-id="284:250">
        <AssetImg src={ASSETS.dot} className="absolute inset-0 block size-full max-w-none object-contain" width={6} height={6} />
      </div>

      {/* Gallery + counter + CTA */}
      <div className="absolute left-[-163px] top-[124px] h-[426px] w-[1506.5px]" data-node-id="284:251">
        <p
          className="font-sf-pro--light-italic absolute left-[251px] top-[383px] h-[43px] w-[173px] text-[36px] italic leading-[1.08] text-[#022ec9]"
          style={SF_VARIATION_YAXS}
          data-node-id="284:252"
        >
          #morldoro
        </p>

        <div className="absolute left-0 top-0 flex items-center gap-[69px]" data-node-id="284:253">
          {/* Instagram gallery */}
          <div className="flex shrink-0 items-center gap-[27px]" data-node-id="284:254">
            {GALLERY_CARD_IDS.map((nodeId) => (
              <div
                key={nodeId}
                className="relative h-[360px] w-[202.5px] shrink-0 overflow-clip rounded-[15px] bg-[#d9d9d9]"
                data-node-id={nodeId}
              />
            ))}
          </div>

          {/* Counter + CTA */}
          <div className="flex w-[317px] shrink-0 flex-col items-end gap-[129px]" data-node-id="284:260">
            <div
              className="flex w-full shrink-0 flex-col items-start gap-[25px] text-right text-black [word-break:break-word]"
              data-node-id="284:261"
            >
              <p
                className={`font-sf-pro--medium block4-counter-value m-0 h-[119px] w-full shrink-0 text-[130px] uppercase leading-[1.08] tracking-[-3.9px] transition-opacity duration-500 ease-out ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
                style={SF_VARIATION}
                data-node-id="284:262"
              >
                {count}
              </p>
              <p
                className="font-sf-pro--light m-0 h-[35px] w-full shrink-0 whitespace-pre-wrap text-[30px] leading-[1.21] tracking-[-1.2px]"
                style={SF_VARIATION}
                data-node-id="284:263"
              >{`українців  вже в темі!`}</p>
            </div>

            <button
              type="button"
              className="block4-cta-btn ml-[59px] flex w-[258px] shrink-0 cursor-pointer items-center gap-[24px] border-0 bg-transparent p-0"
              data-node-id="284:264"
              aria-label="Стань наступним"
              onClick={scrollToOrderForm}
            >
              <span
                className="font-helvetica-neue-cyr--roman h-[15px] w-[186px] shrink-0 text-left text-[18px] not-italic uppercase leading-normal text-[#022ec9] [word-break:break-word]"
                data-node-id="284:265"
              >
                Стань наступним
              </span>
              <span className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                <span className="relative col-start-1 row-start-1 ml-0 mt-0 flex size-[48px] items-center justify-center" data-node-id="284:267">
                  <AssetImg
                    src={ASSETS.ctaCircle}
                    alt=""
                    width={48}
                    height={48}
                    className="block4-icon block size-full max-w-none object-contain"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
