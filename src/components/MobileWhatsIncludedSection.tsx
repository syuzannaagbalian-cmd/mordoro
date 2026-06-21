/* eslint-disable @next/next/no-img-element */

import MobileFluidSection from '@/components/MobileFluidSection';

const ASSETS = {
  composition: '/assets/mobile-block4-composition.png',
  headingArrow: '/assets/mobile-block4-heading-arrow.svg',
  iconPack: '/assets/mobile-block4-icon-pack.svg',
  iconCigarettes: '/assets/mobile-block4-icon-cigarettes.svg',
  iconJar: '/assets/mobile-block4-icon-jar.svg',
  featureDivider: '/assets/mobile-block4-feature-divider.svg',
  iconSolution: '/assets/mobile-block4-icon-solution.svg',
} as const;

const SF_VARIATION = { fontVariationSettings: '"wdth" 100' } as const;

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

function FeatureIcon({ src, nodeId }: { src: string; nodeId: string }) {
  return (
    <div className="relative size-[calc(63*var(--mf))] shrink-0" data-node-id={nodeId}>
      <div className="absolute inset-[-1.59%]">
        <AssetImg src={src} alt="" className="block size-full max-w-none object-contain" width={63} height={63} />
      </div>
    </div>
  );
}

function HeadingArrow({ nodeId }: { nodeId: string }) {
  return (
    <div
      className="absolute left-[calc(284*var(--mf))] top-[calc(115*var(--mf))] flex h-[calc(18.5*var(--mf))] w-0 items-center justify-center"
      data-node-id={nodeId}
    >
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-[calc(18.5*var(--mf))]">
          <div className="absolute inset-[calc(-11.05*var(--mf))_-8.11%_calc(-11.05*var(--mf))_0]">
            <AssetImg src={ASSETS.headingArrow} alt="" className="block size-full max-w-none" width={18.5} height={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileWhatsIncludedSection() {
  return (
    <MobileFluidSection
      as="section"
      designHeight={923}
      data-node-id="312:1204"
      data-name="блок 4"
      aria-label="Що ви отримуєте"
      canvasClassName="relative overflow-hidden bg-[#e1e0e7]"
    >
      {/* Product composition — 312:1396 */}
      <div className="pointer-events-none absolute left-[calc(-112*var(--mf))] top-[calc(150*var(--mf))] flex h-[calc(439.897*var(--mf))] w-[calc(1244.732*var(--mf))] items-center justify-center">
        <div className="flex-none rotate-[3.17deg]">
          <div className="relative h-[calc(372.647*var(--mf))] w-[calc(1225.995*var(--mf))]" data-node-id="312:1396" data-name="Group 3876 1">
            <AssetImg
              src={ASSETS.composition}
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
            />
          </div>
        </div>
      </div>

      {/* Heading group — 312:1205 */}
      <div className="absolute left-[calc(15*var(--mf))] top-[calc(45*var(--mf))] h-[calc(157*var(--mf))] w-[calc(269*var(--mf))]" data-node-id="312:1205">
        <p
          className="font-sf-pro--semibold absolute left-0 top-0 m-0 h-[calc(109*var(--mf))] w-[calc(265*var(--mf))] text-[calc(50*var(--mf))] font-[590] leading-[1.01] tracking-[calc(-1.5*var(--mf))] text-black [word-break:break-word]"
          style={SF_VARIATION}
          data-node-id="312:1206"
        >
          Що ви отримуєте
        </p>
        <p
          className="font-montserrat absolute left-0 top-[calc(118*var(--mf))] m-0 h-[calc(39*var(--mf))] w-[calc(255*var(--mf))] text-[calc(14*var(--mf))] font-normal leading-[1.45] tracking-[calc(-0.56*var(--mf))] text-[#212121] [word-break:break-word]"
          data-node-id="312:1207"
        >
          Пак містить все, що необхідно для мильної насолоди
        </p>
        <HeadingArrow nodeId="312:1208" />
      </div>

      {/* Feature list — 312:1209 */}
      <div
        className="absolute left-[calc(15*var(--mf))] top-[calc(488*var(--mf))] flex w-[calc(303*var(--mf))] flex-col items-start gap-[calc(41*var(--mf))]"
        data-node-id="312:1209"
      >
        {/* Feature 1 — 312:1210 */}
        <div className="flex shrink-0 items-center gap-[calc(20*var(--mf))]" data-node-id="312:1210">
          <FeatureIcon src={ASSETS.iconPack} nodeId="312:1211" />
          <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[calc(27.35*var(--mf))] flex h-[calc(38.118*var(--mf))] w-[calc(172*var(--mf))] items-center text-[calc(12*var(--mf))] not-italic leading-[1.38] tracking-[calc(-0.48*var(--mf))] text-[#5b5b5b] [word-break:break-word]"
              data-node-id="312:1220"
            >
              Те саме соковите клацання кришки, що заспокоює
            </p>
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 flex h-[calc(24.353*var(--mf))] w-[calc(103*var(--mf))] items-center text-[calc(16*var(--mf))] not-italic leading-[1.45] tracking-[calc(-0.64*var(--mf))] text-black [word-break:break-word]"
              data-node-id="312:1223"
            >
              Фірмова пачка
            </p>
          </div>
        </div>

        {/* Feature 2 — 312:1224 */}
        <div className="flex shrink-0 items-end gap-[calc(20*var(--mf))]" data-node-id="312:1224">
          <FeatureIcon src={ASSETS.iconCigarettes} nodeId="312:1225" />
          <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[calc(26*var(--mf))] flex h-[calc(39*var(--mf))] w-[calc(183*var(--mf))] items-center text-[calc(12*var(--mf))] not-italic leading-[1.38] tracking-[calc(-0.48*var(--mf))] text-[#5b5b5b] [word-break:break-word]"
              data-node-id="312:1232"
            >
              Створені для видування сотень ідеальних бульбашок
            </p>
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 flex items-center whitespace-nowrap text-[calc(16*var(--mf))] not-italic leading-[1.45] tracking-[calc(-0.64*var(--mf))] text-black"
              data-node-id="312:1234"
            >
              Цигарки, 2 шт
            </p>
          </div>
        </div>

        {/* Feature 3 + divider — 312:1235 */}
        <div className="relative h-[calc(63*var(--mf))] w-[calc(303*var(--mf))] shrink-0" data-node-id="312:1235">
          <div className="absolute left-0 top-0 flex items-center gap-[calc(20*var(--mf))]" data-node-id="312:1236">
            <FeatureIcon src={ASSETS.iconJar} nodeId="312:1237" />
            <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[calc(26*var(--mf))] flex h-[calc(34*var(--mf))] w-[calc(220*var(--mf))] items-center whitespace-pre-wrap text-[calc(12*var(--mf))] not-italic leading-[1.38] tracking-[calc(-0.48*var(--mf))] text-[#5b5b5b] [word-break:break-word]"
                data-node-id="312:1241"
              >{`Для мильного розчину,  зручно занурювати цигарки прямо на ходу`}</p>
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[calc(1.5*var(--mf))] flex h-[calc(23*var(--mf))] items-center whitespace-nowrap text-[calc(16*var(--mf))] not-italic leading-[1.45] tracking-[calc(-0.64*var(--mf))] text-black"
                data-node-id="312:1243"
              >
                Герметична баночка
              </p>
            </div>
          </div>
          <div
            className="absolute left-[calc(21*var(--mf))] top-[calc(18.365*var(--mf))] h-[calc(26.269*var(--mf))] w-[calc(21*var(--mf))]"
            data-node-id="312:1244"
            data-name="Group"
          >
            <AssetImg
              src={ASSETS.featureDivider}
              alt=""
              width={21}
              height={26.269}
              className="absolute inset-0 block size-full max-w-none object-contain"
            />
          </div>
        </div>

        {/* Feature 4 — 312:1247 */}
        <div className="flex shrink-0 items-center gap-[calc(18*var(--mf))]" data-node-id="312:1247">
          <FeatureIcon src={ASSETS.iconSolution} nodeId="312:1248" />
          <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[calc(26*var(--mf))] flex h-[calc(39*var(--mf))] w-[calc(183*var(--mf))] items-center text-[calc(12*var(--mf))] not-italic leading-[1.45] tracking-[calc(-0.48*var(--mf))] text-[#5b5b5b] [word-break:break-word]"
              data-node-id="312:1253"
            >
              Не залишає плям на одязі та дає максимум пузиріння
            </p>
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 flex items-center whitespace-nowrap text-[calc(16*var(--mf))] not-italic leading-[1.45] tracking-[calc(-0.64*var(--mf))] text-black"
              data-node-id="312:1255"
            >
              Мильний розчин (10 мл)
            </p>
          </div>
        </div>
      </div>
    </MobileFluidSection>
  );
}
