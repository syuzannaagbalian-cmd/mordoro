'use client';

/* eslint-disable @next/next/no-img-element */

import { scrollToSection } from '@/utils/scrollToSection';

const ASSETS = {
  background: '/assets/background.png',
  logo: '/assets/morldoro-logo.svg',
  badgeIcon: '/assets/badge-icon.svg',
  supportIcon: '/assets/support-icon.svg',
  buttonCircle: '/assets/button-circle.svg',
  arrow: '/assets/arrow.svg',
  starFull: '/assets/star-full.svg',
  starHalf: '/assets/star-half.svg',
  tiktok: '/assets/tiktok.svg',
  instagram: '/assets/instagram.svg',
  stepDivider: '/assets/step-divider.svg',
  avatar1: '/assets/avatar-1.png',
  avatar2: '/assets/avatar-2.png',
  avatar3: '/assets/avatar-3.png',
  avatar4: '/assets/avatar-4.png',
  featureLineClick: '/assets/feature-line-click.svg',
  featureIconClick: '/assets/feature-icon-click.svg',
  featureLineSeal: '/assets/feature-line-seal.svg',
  featureIconSeal: '/assets/feature-icon-seal.svg',
  featureLineReuse: '/assets/feature-line-reuse.svg',
  featureIconReuse: '/assets/feature-icon-reuse.svg',
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

export default function HeroDesktop() {
  return (
    <div className="hero-frame-bg relative left-1/2 w-screen min-h-[1032px] -translate-x-1/2">
      {/* Full-bleed background — viewport-wide clip, image scaled from Figma 1782×1101 @ −288 */}
      <div className="hero-bg-layer" data-node-id="273:437">
        <AssetImg src={ASSETS.background} className="hero-bg-image" />
      </div>

      <section
        className="relative z-10 mx-auto box-border flex min-h-[1032px] w-[1440px] max-w-[1440px] flex-col items-start gap-[112px] pb-[72px] pl-[88px] pr-[61px] pt-[57px]"
        data-node-id="210:1322"
        aria-label="Morldoro hero"
      >

      {/* Badge */}
      <div
        className="absolute left-[87.66px] top-[154px] z-20 flex h-[40px] w-[275px] items-center gap-[15px] rounded-[19px] border border-solid border-[rgba(39,74,185,0.65)] bg-transparent pl-[17px]"
        data-node-id="210:1336"
      >
        <div className="h-[17.895px] w-[17px] shrink-0" data-node-id="210:1337">
          <AssetImg src={ASSETS.badgeIcon} className="block size-full max-w-none" width={17} height={18} />
        </div>
        <p
          className="font-helvetica-neue-cyr--roman text-[12px] not-italic uppercase leading-normal text-[#063ec0] [word-break:break-word]"
          data-node-id="210:1335"
        >
          антистрес нового покоління
        </p>
      </div>

      {/* Header */}
      <header
        className="relative z-10 flex w-full shrink-0 items-center justify-between"
        data-node-id="210:1397"
      >
        <div className="shrink-0" data-node-id="257:428">
          <AssetImg
            src={ASSETS.logo}
            alt="Morldoro"
            width={153}
            height={40}
            className="hero-logo block h-[40.051px] w-[153.079px] max-w-none"
          />
        </div>
        <div className="relative shrink-0" data-node-id="210:1399">
          <div
            className="hero-support-btn relative flex h-[40px] w-[166px] items-center rounded-[30px] border border-solid border-black pl-[15px] pr-[36px]"
            data-node-id="210:1404"
          >
            <p
              className="font-helvetica-neue-cyr--roman w-[98px] text-center text-[14px] not-italic leading-[1.1] text-black [word-break:break-word]"
              data-node-id="210:1405"
            >
              Підтримка
            </p>
            <div className="absolute right-[20px] top-1/2 size-[19px] -translate-y-1/2" data-node-id="210:1401">
              <AssetImg src={ASSETS.supportIcon} className="block size-full max-w-none" width={19} height={19} />
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="relative z-10 flex w-full shrink-0 items-start" data-node-id="210:1437">
        <div
          className="relative mr-[-0.125px] flex min-w-px flex-[1_0_0] flex-col items-start gap-[61px]"
          data-node-id="210:1434"
        >
          <div className="flex w-[407px] flex-col gap-[34px]" data-node-id="210:1358">
            <div
              className="font-sf-pro--semibold h-[261px] w-[407px] tracking-[-0.64px] text-[64px] leading-[1.01]"
              style={SF_VARIATION}
              data-node-id="210:1359"
            >
              <p className="m-0 text-black" style={SF_VARIATION}>
                Пузиріння
              </p>
              <p className="m-0" style={SF_VARIATION}>
                <span className="text-[#013bc4]">не</span>
                <span>{` `}</span>
                <span className="text-[#033ecf]">шкодить</span>
                <span className="text-black">{` вашому здоров'ю`}</span>
                <span className="text-[#033ecf]">.</span>
              </p>
            </div>
            <p
              className="font-montserrat m-0 h-[57px] w-[273px] text-[18px] font-normal tracking-[-0.72px] text-[#212121] [word-break:break-word]"
              data-node-id="210:1360"
            >
              <span className="font-montserrat--medium leading-[1.45]">{`Morldoro `}</span>
              <span className="leading-[1.45]">{`-  головний хедлайнер будь-якої вечірки.`}</span>
            </p>
          </div>

          <div className="relative flex w-full shrink-0 flex-col items-start gap-[42.88px]" data-node-id="210:1433">
            <div className="relative flex w-[357px] shrink-0 flex-col items-start gap-[31px] leading-[0]" data-node-id="210:1431">
              <button
                type="button"
                className="hero-cta-btn relative h-[57px] w-[236px] cursor-pointer border-0 bg-transparent p-0"
                data-node-id="210:1338"
                aria-label="Замовити"
                onClick={() => scrollToSection('desktop-order-section')}
              >
                <div
                  className="absolute inset-0 rounded-[29.5px] bg-[#022ec9]"
                  data-node-id="210:1339"
                />
                <div className="relative flex h-full w-full items-center justify-between pl-[27px] pr-[17px]">
                  <p
                    className="font-helvetica-neue-cyr--medium m-0 text-[16px] not-italic leading-normal text-white [word-break:break-word]"
                    data-node-id="210:1342"
                  >
                    Замовити
                  </p>
                  <div className="relative flex size-[34px] shrink-0 items-center justify-center" data-node-id="210:1340">
                    <AssetImg src={ASSETS.buttonCircle} className="absolute inset-0 block size-full max-w-none" width={34} height={34} />
                    <div className="relative flex items-center justify-center" data-node-id="210:1341">
                      <AssetImg src={ASSETS.arrow} className="block max-w-none" width={13} height={15} />
                    </div>
                  </div>
                </div>
              </button>

              <div
                className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start"
                data-node-id="210:1343"
              >
                <p
                  className="font-helvetica-neue-cyr--roman relative col-start-1 row-start-1 ml-[185px] mt-[39px] h-[15px] w-[172px] text-[14px] not-italic leading-normal text-[#484848] [word-break:break-word]"
                  data-node-id="210:1344"
                >
                  Вибір 1000+ українців
                </p>
                <div className="relative col-start-1 row-start-1 ml-[185px] mt-[9px] h-[17.194px] w-[18.078px]" data-node-id="210:1345">
                  <AssetImg src={ASSETS.starFull} className="absolute inset-0 block size-full max-w-none" />
                </div>
                <div className="relative col-start-1 row-start-1 ml-[207.08px] mt-[9px] h-[17.194px] w-[18.078px]" data-node-id="210:1346">
                  <AssetImg src={ASSETS.starFull} className="absolute inset-0 block size-full max-w-none" />
                </div>
                <div className="relative col-start-1 row-start-1 ml-[251.23px] mt-[9px] h-[17.194px] w-[18.078px]" data-node-id="210:1347">
                  <AssetImg src={ASSETS.starFull} className="absolute inset-0 block size-full max-w-none" />
                </div>
                <div className="relative col-start-1 row-start-1 ml-[273.31px] mt-[9px] h-[17.194px] w-[18.078px]" data-node-id="210:1348">
                  <AssetImg src={ASSETS.starHalf} className="absolute inset-0 block size-full max-w-none" />
                </div>
                <div className="relative col-start-1 row-start-1 ml-[229.16px] mt-[9px] h-[17.194px] w-[18.078px]" data-node-id="210:1349">
                  <AssetImg src={ASSETS.starFull} className="absolute inset-0 block size-full max-w-none" />
                </div>
                <div className="relative col-start-1 row-start-1 ml-0 mt-0 size-[56.12px]" data-node-id="210:1350">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar1} width={61} height={61} className="hero-avatar block size-full max-w-none" />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[37.82px] mt-0 size-[56.12px]" data-node-id="210:1351">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar2} width={61} height={61} className="hero-avatar block size-full max-w-none" />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[72.54px] mt-0 size-[56.12px]" data-node-id="210:1352">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar3} width={61} height={61} className="hero-avatar block size-full max-w-none" />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[111.36px] mt-0 size-[56.12px]" data-node-id="210:1353">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar4} width={61} height={61} className="hero-avatar block size-full max-w-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full shrink-0 flex-col items-start gap-[47px]" data-node-id="210:1432">
              <div className="flex items-end" data-node-id="210:1354">
                <p
                  className="font-helvetica-neue-cyr--roman m-0 w-[174px] shrink-0 text-[16px] not-italic leading-normal text-[#353535] [word-break:break-word]"
                  data-node-id="210:1355"
                >
                  Приєднуйся до трендів
                </p>
                <div className="ml-[33px] h-[23.318px] w-[20px] shrink-0" data-node-id="210:1356">
                  <AssetImg src={ASSETS.tiktok} className="block size-full max-w-none" width={20} height={24} />
                </div>
                <div className="ml-[39px] size-[26px] shrink-0" data-node-id="210:1357">
                  <AssetImg src={ASSETS.instagram} className="block size-full max-w-none" width={26} height={26} />
                </div>
              </div>

              <div className="relative flex w-full shrink-0 items-center gap-[57px]" data-node-id="210:1406">
                <StepBlock
                  nodeId="210:1407"
                  numberNodeId="210:1410"
                  titleNodeId="210:1408"
                  descriptionNodeId="210:1409"
                  number="01"
                  title="ВІДКРИЙ"
                  titleMl={115.13}
                  description="Дістань цигарку з пачки"
                  descriptionMl={115.13}
                  descriptionMt={41}
                  descriptionH={32}
                />
                <StepDivider nodeId="210:1411" />
                <StepBlock
                  nodeId="210:1412"
                  numberNodeId="210:1415"
                  titleNodeId="210:1413"
                  descriptionNodeId="210:1414"
                  number="02"
                  title="ВМОЧИ"
                  titleMl={130}
                  description="Занур у рідину"
                  descriptionMl={130}
                  descriptionMt={39}
                  descriptionH={18}
                />
                <StepDivider nodeId="210:1416" />
                <StepBlock
                  nodeId="210:1417"
                  numberNodeId="210:1420"
                  titleNodeId="210:1418"
                  descriptionNodeId="210:1419"
                  number="03"
                  title="ДУЙ"
                  titleMl={125}
                  description="Отримуй мильне задоволення!"
                  descriptionMl={125}
                  descriptionMt={41}
                  descriptionH={37}
                  descriptionW={150}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative flex w-[283px] shrink-0 flex-col items-center gap-[136px] leading-[0]"
          data-node-id="210:1436"
        >
          <div className="relative flex w-full shrink-0 flex-col items-center gap-[122px]" data-node-id="210:1435">
            <div
              className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start"
              data-node-id="210:1384"
            >
              <div className="relative col-start-1 row-start-1 ml-0 mt-[71px] h-[17px] w-[51px]" data-node-id="210:1385">
                <AssetImg src={ASSETS.featureLineClick} className="absolute inset-0 block size-full max-w-none" />
              </div>
              <p
                className="font-helvetica-neue-cyr--roman relative col-start-1 row-start-1 ml-[100px] mt-[9px] h-[21px] w-[148px] text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black [word-break:break-word]"
                data-node-id="210:1389"
              >
                Справжнє клацання
              </p>
              <p
                className="font-helvetica-neue-cyr--roman relative col-start-1 row-start-1 ml-[100px] mt-[33px] h-[21px] w-[148px] text-[14px] not-italic leading-[1.45] tracking-[-0.56px] text-[#5b5b5b] [word-break:break-word]"
                data-node-id="210:1390"
              >
                Як в оригінальної пачки
              </p>
              <div className="relative col-start-1 row-start-1 ml-[19px] mt-0 size-[63px]" data-node-id="210:1391">
                <div className="absolute inset-[-1.59%]">
                  <AssetImg src={ASSETS.featureIconClick} className="block size-full max-w-none" />
                </div>
              </div>
            </div>

            <div
              className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start"
              data-node-id="210:1373"
            >
              <div className="relative col-start-1 row-start-1 ml-0 mt-[29px] h-[6px] w-[49px]" data-node-id="210:1374">
                <AssetImg src={ASSETS.featureLineSeal} className="absolute inset-0 block size-full max-w-none" />
              </div>
              <p
                className="font-helvetica-neue-cyr--roman relative col-start-1 row-start-1 ml-[135px] mt-[9px] h-[21px] w-[148px] text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black [word-break:break-word]"
                data-node-id="210:1377"
              >
                Повна герметичність
              </p>
              <p
                className="font-helvetica-neue-cyr--roman relative col-start-1 row-start-1 ml-[135px] mt-[33px] h-[19px] w-[135px] text-[14px] not-italic leading-[1.45] tracking-[-0.56px] text-[#5b5b5b] [word-break:break-word]"
                data-node-id="210:1378"
              >
                Гарантує чисті кишені
              </p>
              <div className="relative col-start-1 row-start-1 ml-[61px] mt-0 size-[63px]" data-node-id="210:1379">
                <div className="absolute inset-[-1.59%]">
                  <AssetImg src={ASSETS.featureIconSeal} className="block size-full max-w-none" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start"
            data-node-id="210:1361"
          >
            <div className="relative col-start-1 row-start-1 ml-0 mt-0 h-[16px] w-[51px]" data-node-id="210:1362">
              <AssetImg src={ASSETS.featureLineReuse} className="absolute inset-0 block size-full max-w-none" />
            </div>
            <p
              className="font-helvetica-neue-cyr--roman relative col-start-1 row-start-1 ml-[102px] mt-[37px] h-[21px] w-[102px] text-[16px] not-italic leading-[1.45] tracking-[-0.64px] text-black [word-break:break-word]"
              data-node-id="210:1366"
            >
              Багаторазові
            </p>
            <p
              className="font-helvetica-neue-cyr--roman relative col-start-1 row-start-1 ml-[102px] mt-[61px] h-[15px] w-[132px] text-[14px] not-italic leading-[1.45] tracking-[-0.56px] text-[#5b5b5b] [word-break:break-word]"
              data-node-id="210:1367"
            >
              Просто залий розчин
            </p>
            <div className="relative col-start-1 row-start-1 ml-[22px] mt-[25px] size-[63px]" data-node-id="210:1368">
              <div className="absolute inset-[-1.59%]">
                <AssetImg src={ASSETS.featureIconReuse} className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

function StepDivider({ nodeId }: { nodeId: string }) {
  return (
    <div className="relative flex h-[57px] w-0 shrink-0 items-center justify-center">
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-[57px]" data-node-id={nodeId}>
          <div className="absolute inset-[-1px_0_0_0]">
            <AssetImg src={ASSETS.stepDivider} className="block size-full max-w-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

type StepBlockProps = {
  nodeId: string;
  numberNodeId: string;
  titleNodeId: string;
  descriptionNodeId: string;
  number: string;
  title: string;
  titleMl: number;
  description: string;
  descriptionMl: number;
  descriptionMt: number;
  descriptionH: number;
  descriptionW?: number;
};

function StepBlock({
  nodeId,
  numberNodeId,
  titleNodeId,
  descriptionNodeId,
  number,
  title,
  titleMl,
  description,
  descriptionMl,
  descriptionMt,
  descriptionH,
  descriptionW = 122,
}: StepBlockProps) {
  return (
    <div
      className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0] [word-break:break-word]"
      data-node-id={nodeId}
    >
      <p
        className="font-sf-pro--medium relative col-start-1 row-start-1 mt-[13px] h-[26px] w-[130px] text-[20px] tracking-[-0.8px] text-black leading-[1.02]"
        style={{ marginLeft: `${titleMl}px`, ...SF_VARIATION }}
        data-node-id={titleNodeId}
      >
        {title}
      </p>
      <p
        className="font-helvetica-neue-cyr--roman relative col-start-1 row-start-1 text-[16px] not-italic text-[#5c5c5c] leading-[118.11000061035156%]"
        style={{
          marginLeft: `${descriptionMl}px`,
          marginTop: `${descriptionMt}px`,
          height: `${descriptionH}px`,
          width: `${descriptionW}px`,
        }}
        data-node-id={descriptionNodeId}
      >
        {description}
      </p>
      <p
        className="font-helvetica-neue-cyr--thin relative col-start-1 row-start-1 ml-0 mt-0 h-[78px] w-[107px] text-[96.412px] not-italic tracking-[-5.7847px] text-[#98a6df] leading-[1.02]"
        data-node-id={numberNodeId}
      >
        {number}
      </p>
    </div>
  );
}
