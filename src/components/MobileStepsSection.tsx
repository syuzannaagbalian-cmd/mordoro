/* eslint-disable @next/next/no-img-element */

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

function StepDivider({ src, nodeId }: { src: string; nodeId: string }) {
  return (
    <div className="absolute flex h-[23.022px] w-0 items-center justify-center" data-node-id={nodeId}>
      <div className="-rotate-90 flex-none">
        <div className="relative h-0 w-[23.022px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <AssetImg src={src} alt="" className="block size-full max-w-none" width={23.022} height={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileStepsSection() {
  return (
    <section
      className="relative mx-auto h-[438px] w-[390px] max-w-full overflow-x-clip bg-gradient-to-b from-[#c6c8e2] to-[#e1e0e7]"
      data-node-id="312:1103"
      data-name="блок 2"
      aria-label="How it works steps"
    >
      {/* Ellipse — 312:1104 */}
      <div className="pointer-events-none absolute left-[-45px] top-[-80px] h-[190px] w-[443px]" data-node-id="312:1104">
        <div className="absolute inset-[-18.68%_-8.01%]">
          <AssetImg src={ASSETS.ellipse} alt="" className="block size-full max-w-none" />
        </div>
      </div>

      {/* Steps group — 312:1105 */}
      <div
        className="absolute left-[48px] top-[84px] h-[255.922px] w-[291.25px]"
        data-node-id="312:1105"
      >
        {/* Bubbles — 312:1125 */}
        <div className="pointer-events-none absolute inset-0" aria-hidden data-node-id="312:1125">
          <div
            className="absolute left-[-61px] top-[-56px] h-[106.827px] w-[111.213px] rounded-[259.55px] blur-[0.689px]"
            data-node-id="312:1126"
            data-name="Firefly (12) 2"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[259.55px] opacity-70">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_LARGE} />
            </div>
          </div>
          <div
            className="absolute left-[-23px] top-[96px] h-[35px] w-[36px] rounded-[259.55px]"
            data-node-id="312:1128"
            data-name="Firefly (12) 6"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[259.55px] opacity-80">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_SMALL} />
            </div>
          </div>
          <div
            className="absolute left-[44.213px] top-[20px] h-[31px] w-[32px] rounded-[259.55px]"
            data-node-id="312:1127"
            data-name="Firefly (12) 5"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[259.55px] opacity-80">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_SMALL} />
            </div>
          </div>
        </div>

        {/* Step 1 — 312:1106 */}
        <div
          className="absolute left-[112px] top-0 flex h-[45.925px] w-[178.25px] items-center gap-[8px] [word-break:break-word]"
          data-node-id="312:1106"
        >
          <p
            className="font-helvetica-neue-cyr--thin m-0 h-[45.925px] w-[63px] shrink-0 text-[56.766px] not-italic leading-[1.02] tracking-[-3.4059px] text-white"
            data-node-id="312:1107"
          >
            01
          </p>
          <div
            className="flex h-[40.45px] w-[107.25px] shrink-0 flex-col items-start gap-[3px]"
            data-node-id="312:1108"
          >
            <p
              className="font-sf-pro--medium m-0 flex h-[21.45px] w-full items-center text-[16.5px] font-[510] leading-[1.02] tracking-[-0.66px] text-black"
              style={SF_VARIATION}
              data-node-id="312:1109"
            >
              ВІДКРИЙ
            </p>
            <p
              className="font-helvetica-neue-cyr--roman m-0 flex h-[16px] w-full items-center text-[13.2px] not-italic leading-[118.11%] text-[#5c5c5c]"
              data-node-id="312:1110"
            >
              Дістань цигарку
            </p>
          </div>
        </div>

        {/* Step 2 — 312:1112 */}
        <div
          className="absolute left-0 top-[104.921875px] flex h-[47px] w-[173px] items-center justify-between [word-break:break-word]"
          data-node-id="312:1112"
        >
          <div
            className="flex h-[36px] w-[94px] shrink-0 flex-col items-start text-right"
            data-node-id="312:1113"
          >
            <p
              className="font-sf-pro--medium m-0 flex h-[21px] w-full items-center justify-end text-[16.5px] font-[510] leading-[1.02] tracking-[-0.66px] text-black"
              style={SF_VARIATION}
              data-node-id="312:1114"
            >
              ВМОЧИ
            </p>
            <p
              className="font-helvetica-neue-cyr--roman m-0 flex h-[15px] w-full items-center justify-end text-[13.2px] not-italic leading-[118.11%] text-[#5c5c5c]"
              data-node-id="312:1115"
            >
              Занур у рідину
            </p>
          </div>
          <p
            className="font-helvetica-neue-cyr--thin m-0 h-[47px] w-[63px] shrink-0 text-[56.77px] not-italic leading-[1.02] tracking-[-3.4062px] text-white"
            data-node-id="312:1116"
          >
            02
          </p>
        </div>

        {/* Step 3 — 312:1118 */}
        <div
          className="absolute left-[113px] top-[210.921875px] flex h-[45px] w-[178.25px] items-end justify-between [word-break:break-word]"
          data-node-id="312:1118"
        >
          <p
            className="font-helvetica-neue-cyr--thin m-0 h-[45px] w-[63px] shrink-0 text-[56.77px] not-italic leading-[1.02] tracking-[-3.4062px] text-white"
            data-node-id="312:1119"
          >
            03
          </p>
          <div
            className="flex h-[40.45px] w-[107.25px] shrink-0 flex-col items-start gap-[3px]"
            data-node-id="312:1120"
          >
            <p
              className="font-sf-pro--medium m-0 flex h-[21.45px] w-full items-center text-[16.5px] font-[510] leading-[1.02] tracking-[-0.66px] text-black"
              style={SF_VARIATION}
              data-node-id="312:1121"
            >
              ВИДУЙ
            </p>
            <p
              className="font-helvetica-neue-cyr--roman m-0 flex h-[16px] w-full items-center text-[13.2px] not-italic leading-[118.11%] text-[#5c5c5c]"
              data-node-id="312:1122"
            >
              Та насолоджуйся
            </p>
          </div>
        </div>

        {/* Divider lines — 312:1124, 312:1123 */}
        <div className="absolute left-[142px] top-[86.0234375px]">
          <StepDivider src={ASSETS.line32} nodeId="312:1124" />
        </div>
        <div className="absolute left-[142px] top-[197.0234375px]">
          <StepDivider src={ASSETS.line33} nodeId="312:1123" />
        </div>
      </div>
    </section>
  );
}
