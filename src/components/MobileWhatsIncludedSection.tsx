/* eslint-disable @next/next/no-img-element */

import MobileScaleFrame from '@/components/MobileScaleFrame';

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
    <div className="relative size-[63px] shrink-0" data-node-id={nodeId}>
      <div className="absolute inset-[-1.59%]">
        <AssetImg src={src} alt="" className="block size-full max-w-none object-contain" width={63} height={63} />
      </div>
    </div>
  );
}

function HeadingArrow({ nodeId }: { nodeId: string }) {
  return (
    <div
      className="absolute left-[284px] top-[115px] flex h-[18.5px] w-0 items-center justify-center"
      data-node-id={nodeId}
    >
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-[18.5px]">
          <div className="absolute inset-[-11.05px_-8.11%_-11.05px_0]">
            <AssetImg src={ASSETS.headingArrow} alt="" className="block size-full max-w-none" width={18.5} height={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileWhatsIncludedSection() {
  return (
    <MobileScaleFrame
      as="section"
      designHeight={923}
      data-node-id="312:1204"
      data-name="блок 4"
      aria-label="Що ви отримуєте"
      canvasClassName="relative overflow-x-clip bg-[#e1e0e7]"
    >
      {/* Product composition — 312:1396 */}
      <div className="pointer-events-none absolute left-[-112px] top-[150px] flex h-[439.897px] w-[1244.732px] items-center justify-center">
        <div className="flex-none rotate-[3.17deg]">
          <div className="relative h-[372.647px] w-[1225.995px]" data-node-id="312:1396" data-name="Group 3876 1">
            <AssetImg
              src={ASSETS.composition}
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
            />
          </div>
        </div>
      </div>

      {/* Heading group — 312:1205 */}
      <div className="absolute left-[15px] top-[45px] h-[157px] w-[269px]" data-node-id="312:1205">
        <p
          className="font-sf-pro--semibold absolute left-0 top-0 m-0 h-[109px] w-[265px] text-[50px] font-[590] leading-[1.01] tracking-[-1.5px] text-black [word-break:break-word]"
          style={SF_VARIATION}
          data-node-id="312:1206"
        >
          Що ви отримуєте
        </p>
        <p
          className="font-montserrat absolute left-0 top-[118px] m-0 h-[39px] w-[255px] text-[14px] font-normal leading-[1.45] tracking-[-0.56px] text-[#212121] [word-break:break-word]"
          data-node-id="312:1207"
        >
          Пак містить все, що необхідно для мильної насолоди
        </p>
        <HeadingArrow nodeId="312:1208" />
      </div>

      {/* Feature list — 312:1209 */}
      <div
        className="absolute left-[15px] top-[488px] flex w-[303px] flex-col items-start gap-[41px]"
        data-node-id="312:1209"
      >
        {/* Feature 1 — 312:1210 */}
        <div className="flex shrink-0 items-center gap-[20px]" data-node-id="312:1210">
          <FeatureIcon src={ASSETS.iconPack} nodeId="312:1211" />
          <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[27.35px] flex h-[38.118px] w-[172px] items-center text-[12px] not-italic leading-[1.38] tracking-[-0.48px] text-[#5b5b5b] [word-break:break-word]"
              data-node-id="312:1220"
            >
              Те саме соковите клацання кришки, що заспокоює
            </p>
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 flex h-[24.353px] w-[103px] items-center text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black [word-break:break-word]"
              data-node-id="312:1223"
            >
              Фірмова пачка
            </p>
          </div>
        </div>

        {/* Feature 2 — 312:1224 */}
        <div className="flex shrink-0 items-end gap-[20px]" data-node-id="312:1224">
          <FeatureIcon src={ASSETS.iconCigarettes} nodeId="312:1225" />
          <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[26px] flex h-[39px] w-[183px] items-center text-[12px] not-italic leading-[1.38] tracking-[-0.48px] text-[#5b5b5b] [word-break:break-word]"
              data-node-id="312:1232"
            >
              Створені для видування сотень ідеальних бульбашок
            </p>
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 flex items-center whitespace-nowrap text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black"
              data-node-id="312:1234"
            >
              Цигарки, 2 шт
            </p>
          </div>
        </div>

        {/* Feature 3 + divider — 312:1235 */}
        <div className="relative h-[63px] w-[303px] shrink-0" data-node-id="312:1235">
          <div className="absolute left-0 top-0 flex items-center gap-[20px]" data-node-id="312:1236">
            <FeatureIcon src={ASSETS.iconJar} nodeId="312:1237" />
            <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[26px] flex h-[34px] w-[220px] items-center whitespace-pre-wrap text-[12px] not-italic leading-[1.38] tracking-[-0.48px] text-[#5b5b5b] [word-break:break-word]"
                data-node-id="312:1241"
              >{`Для мильного розчину,  зручно занурювати цигарки прямо на ходу`}</p>
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[1.5px] flex h-[23px] items-center whitespace-nowrap text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black"
                data-node-id="312:1243"
              >
                Герметична баночка
              </p>
            </div>
          </div>
          <div
            className="absolute left-[21px] top-[18.365px] h-[26.269px] w-[21px]"
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
        <div className="flex shrink-0 items-center gap-[18px]" data-node-id="312:1247">
          <FeatureIcon src={ASSETS.iconSolution} nodeId="312:1248" />
          <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[26px] flex h-[39px] w-[183px] items-center text-[12px] not-italic leading-[1.45] tracking-[-0.48px] text-[#5b5b5b] [word-break:break-word]"
              data-node-id="312:1253"
            >
              Не залишає плям на одязі та дає максимум пузиріння
            </p>
            <p
              className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 flex items-center whitespace-nowrap text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black"
              data-node-id="312:1255"
            >
              Мильний розчин (10 мл)
            </p>
          </div>
        </div>
      </div>
    </MobileScaleFrame>
  );
}
