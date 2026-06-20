/* eslint-disable @next/next/no-img-element */

const ASSETS = {
  productComposition: '/assets/block3-product-composition.png',
  bgEllipse: '/assets/block3-bg-ellipse.svg',
  headingArrow: '/assets/block3-heading-arrow.svg',
  featureIconPack: '/assets/block3-feature-icon-pack.svg',
  featureIconCigarettes: '/assets/block3-feature-icon-cigarettes.svg',
  featureIconJar: '/assets/block3-feature-icon-jar.svg',
  featureDivider: '/assets/block3-feature-divider.svg',
  featureIconSolution: '/assets/block3-feature-icon-solution.svg',
} as const;

const SF_VARIATION = { fontVariationSettings: '"wdth" 100' } as const;

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

function FeatureIcon({ src, nodeId }: { src: string; nodeId: string }) {
  return (
    <div className="relative size-[63px] shrink-0" data-node-id={nodeId}>
      <div className="absolute inset-[-1.59%]">
        <AssetImg src={src} className="block3-icon block size-full max-w-none object-contain" width={63} height={63} />
      </div>
    </div>
  );
}

export default function WhatsIncludedSection() {
  return (
    <section
      className="relative mx-auto h-[652px] w-[1440px] overflow-hidden bg-[#e1e0e7]"
      data-node-id="280:102"
      aria-label="Що ви отримуєте"
    >
      {/* Background ellipse */}
      <div className="pointer-events-none absolute left-[-443px] top-[-145px] flex h-[244.864px] w-[1892.274px] items-center justify-center">
        <div className="flex-none rotate-[1.17deg] skew-x-[-3.8deg]">
          <div className="relative h-[207.352px] w-[1874.695px]" data-node-id="284:121">
            <div className="absolute inset-[-24.11%_-2.67%]">
              <AssetImg src={ASSETS.bgEllipse} className="block size-full max-w-none object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Product composition */}
      <div
        className="pointer-events-none absolute left-[370px] top-[-74px] h-[663px] w-[2181px]"
        data-node-id="303:110"
      >
        <AssetImg
          src={ASSETS.productComposition}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
        />
      </div>

      {/* Content */}
      <div
        className="absolute left-[90px] top-[164px] flex w-[1259px] flex-col items-start gap-[93px]"
        data-node-id="284:291"
      >
        {/* Heading + subtext + arrow */}
        <div className="relative h-[223px] w-[369px] shrink-0" data-node-id="284:122">
          <p
            className="font-sf-pro--semibold absolute left-0 top-0 h-[143px] w-[346px] text-[70px] font-[590] leading-[1.01] tracking-[-2.1px] text-black"
            style={SF_VARIATION}
            data-node-id="284:123"
          >
            {`Що ви `}
            <span className="whitespace-nowrap">отримуєте</span>
          </p>
          <p
            className="font-montserrat absolute left-0 top-[166px] h-[57px] w-[307px] text-[20px] font-normal leading-[1.45] tracking-[-0.8px] text-[#212121] [word-break:break-word]"
            data-node-id="284:124"
          >
            Пак містить все, що необхідно для мильного задоволення
          </p>
          <div className="absolute left-[373px] top-[112px] h-0 w-[23px]" data-node-id="284:125">
            <div className="absolute inset-[-17.69px_-10.44%_-17.69px_0]">
              <AssetImg src={ASSETS.headingArrow} className="block size-full max-w-none" width={23} height={35.375} />
            </div>
          </div>
        </div>

        {/* Feature row */}
        <div className="relative flex w-full shrink-0 items-start gap-[57px]" data-node-id="284:135">
          {/* Feature 1 */}
          <div className="flex shrink-0 items-center gap-[20px]" data-node-id="284:136">
            <FeatureIcon src={ASSETS.featureIconPack} nodeId="284:137" />
            <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[27.35px] h-[38.118px] w-[172px] text-[14px] not-italic leading-[1.38] tracking-[-0.56px] text-[#5b5b5b] [word-break:break-word]"
                data-node-id="284:146"
              >
                Те саме соковите клацання кришки, що заспокоює
              </p>
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 h-[24.353px] w-[103px] text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black [word-break:break-word]"
                data-node-id="284:149"
              >
                Фірмова пачка
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex shrink-0 items-end gap-[20px]" data-node-id="284:150">
            <FeatureIcon src={ASSETS.featureIconCigarettes} nodeId="284:151" />
            <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[26px] h-[39px] w-[183px] text-[14px] not-italic leading-[1.38] tracking-[-0.56px] text-[#5b5b5b] [word-break:break-word]"
                data-node-id="284:158"
              >
                Створені для видування сотень ідеальних бульбашок
              </p>
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 whitespace-nowrap text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black"
                data-node-id="284:160"
              >
                Цигарки, 2 шт
              </p>
            </div>
          </div>

          {/* Feature 3 + divider */}
          <div
            className="relative flex h-[63px] w-[303px] shrink-0 items-center gap-[10px] px-[21px] py-[17px]"
            data-node-id="284:161"
          >
            <div className="absolute left-0 top-0 flex items-center gap-[20px]" data-node-id="284:162">
              <FeatureIcon src={ASSETS.featureIconJar} nodeId="284:163" />
              <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                <p
                  className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[26px] h-[34px] w-[220px] whitespace-pre-wrap text-[14px] not-italic leading-[1.38] tracking-[-0.56px] text-[#5b5b5b] [word-break:break-word]"
                  data-node-id="284:167"
                >{`Для мильного розчину,  зручно занурювати цигарки прямо на ходу`}</p>
                <p
                  className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 whitespace-nowrap text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black"
                  data-node-id="284:169"
                >
                  Герметична баночка
                </p>
              </div>
            </div>
            <div className="relative h-[26.269px] w-[21px] shrink-0" data-node-id="284:170">
              <AssetImg
                src={ASSETS.featureDivider}
                alt=""
                width={21}
                height={26.269}
                className="block3-icon absolute inset-0 block size-full max-w-none object-contain"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex shrink-0 items-center gap-[18px]" data-node-id="284:173">
            <FeatureIcon src={ASSETS.featureIconSolution} nodeId="284:174" />
            <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-[26px] h-[39px] w-[183px] text-[14px] not-italic leading-[1.45] tracking-[-0.56px] text-[#5b5b5b] [word-break:break-word]"
                data-node-id="284:179"
              >
                Не залишає плям на одязі та дає максимум пузиріння
              </p>
              <p
                className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 whitespace-nowrap text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black"
                data-node-id="284:181"
              >
                Мильний розчин (10 мл)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
