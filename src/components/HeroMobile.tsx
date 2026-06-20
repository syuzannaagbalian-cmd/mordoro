/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

const ASSETS = {
  background: '/assets/mobile-background.png',
  ellipseBottom: '/assets/mobile-ellipse-bottom.svg',
  logo: '/assets/mobile-logo.svg',
  supportIcon: '/assets/mobile-support-icon.svg',
  badgeIcon: '/assets/mobile-badge-icon.svg',
  featureIconClick: '/assets/mobile-feature-icon-click.svg',
  featureIconSeal: '/assets/mobile-feature-icon-seal.svg',
  featureIconReuse: '/assets/mobile-feature-icon-reuse.svg',
  buttonCircle: '/assets/mobile-button-circle.svg',
  arrow: '/assets/mobile-arrow.svg',
  stars: '/assets/mobile-stars.svg',
  tiktok: '/assets/mobile-tiktok.svg',
  instagram: '/assets/mobile-instagram.svg',
  avatar1: '/assets/mobile-avatar-1.png',
  avatar2: '/assets/mobile-avatar-2.png',
  avatar3: '/assets/mobile-avatar-3.png',
  avatar4: '/assets/mobile-avatar-4.png',
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

function FeatureIconCircle({ src, nodeId }: { src: string; nodeId: string }) {
  return (
    <div
      className="flex size-[42.943px] shrink-0 items-center justify-center rounded-[21.471px] border-[0.682px] border-solid border-[#bdbec9] bg-[rgba(255,255,255,0.5)]"
      data-node-id={nodeId}
    >
      <div className="relative h-[13.633px] w-[14.995px]">
        <div className="absolute inset-[-3.74%_-3.4%_-3.76%_-3.41%]">
          <AssetImg src={src} alt="" className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

export default function HeroMobile() {
  return (
    <div
      className="hero-mobile relative mx-auto h-[961px] w-[390px] max-w-full overflow-x-clip bg-[#e1e0e7]"
      data-node-id="295:405"
      data-name="Херо блок"
      aria-label="Morldoro hero mobile"
    >
      {/* Background — 312:1024 */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[934px] w-[525px]"
        data-node-id="312:1024"
        data-name="ChatGPT Image 19 июн. 2026 г., 18_56_36 1"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <AssetImg
            src={ASSETS.background}
            alt=""
            className="pointer-events-none absolute left-[-0.06%] top-0 h-full w-[100.12%] max-w-none"
          />
        </div>
      </div>

      {/* Bottom ellipse — 312:1025 */}
      <div className="pointer-events-none absolute bottom-[-38px] left-1/2 h-[190px] w-[526px] -translate-x-1/2" data-node-id="312:1025">
        <div className="absolute inset-[-18.68%_-6.75%]">
          <AssetImg src={ASSETS.ellipseBottom} alt="" className="block size-full max-w-none" />
        </div>
      </div>

      {/* Content — 312:1100 */}
      <div
        className="absolute left-[16px] top-[20px] flex w-[358px] flex-col items-center gap-[103px]"
        data-node-id="312:1100"
      >
        <div className="flex w-full flex-col items-start gap-[38px]" data-node-id="312:1099">
          <div className="flex w-full flex-col items-start gap-[41px]" data-node-id="312:1098">
            {/* Header — 312:1027 */}
            <header className="flex w-full shrink-0 items-center justify-between" data-node-id="312:1027">
              <Link
                href="/"
                className="relative block h-[21.836px] w-[83.458px] shrink-0"
                data-node-id="322:154"
                data-name="Morldoro"
                aria-label="Morldoro"
              >
                <AssetImg
                  src={ASSETS.logo}
                  alt="Morldoro"
                  className="absolute inset-0 block size-full max-w-none"
                  width={83.458}
                  height={21.836}
                />
              </Link>

              <a
                href="/support"
                className="hero-mobile-support relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
                data-node-id="312:1029"
                data-name="support"
              >
                <span className="relative col-start-1 row-start-1 ml-[73.14px] mt-[0.72px] size-[10.359px]" data-node-id="312:1030">
                  <AssetImg
                    src={ASSETS.supportIcon}
                    alt=""
                    className="absolute inset-0 block size-full max-w-none"
                    width={10.359}
                    height={10.359}
                  />
                </span>
                <span
                  className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 flex h-[11px] w-[64px] items-center justify-center text-center text-[12px] not-italic leading-[1.1] text-black"
                  data-node-id="312:1031"
                >
                  Підтримка
                </span>
              </a>
            </header>

            {/* Badge + headline — 312:1096 */}
            <div
              className="flex w-full flex-col items-center gap-[17px] leading-[0]"
              data-node-id="312:1096"
            >
              {/* Badge — 312:1032 / 322:156 */}
              <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start" data-node-id="312:1032">
                <div
                  className="col-start-1 row-start-1 ml-0 mt-0 flex h-[30.4px] w-[209px] flex-col items-start justify-center rounded-[14.44px] border-[0.76px] border-solid border-[rgba(0,25,160,0.73)] pb-[8px] pl-[13px] pr-[18px] pt-[9px]"
                  data-node-id="322:156"
                >
                  <div className="flex shrink-0 items-center gap-[11px]" data-node-id="322:155">
                    <span className="relative h-[13.6px] w-[12.92px] shrink-0" data-node-id="312:1035">
                      <AssetImg
                        src={ASSETS.badgeIcon}
                        alt=""
                        className="absolute inset-0 block size-full max-w-none"
                        width={12.92}
                        height={13.6}
                      />
                    </span>
                    <p
                      className="font-helvetica-neue-cyr--roman m-0 flex h-[7.2px] w-[154.28px] items-center text-[9.12px] not-italic uppercase leading-normal text-[#001ba5]"
                      data-node-id="312:1033"
                    >
                      антистрес нового покоління
                    </p>
                  </div>
                </div>
              </div>

              {/* Headline block — 312:1095 */}
              <div
                className="flex w-full flex-col items-start gap-[17px] text-center text-[0px] [word-break:break-word]"
                data-node-id="312:1095"
              >
                <div
                  className="flex w-full flex-col items-start gap-[10px] font-sf-pro--medium font-[510] text-[#3e67dc]"
                  data-node-id="312:1094"
                >
                  <div className="relative w-full shrink-0 whitespace-pre-wrap" data-node-id="312:1026" style={SF_VARIATION}>
                    <p className="font-sf-pro--semibold m-0 mb-0 text-[58px] font-[590] leading-[0.95] text-black" style={SF_VARIATION}>
                      {`Пузиріння `}
                    </p>
                    <p className="font-sf-pro--semibold m-0 text-[58px] font-[590]" style={SF_VARIATION}>
                      <span className="leading-[0.95] text-[#013bc4]" style={SF_VARIATION}>
                        не
                      </span>
                      <span className="leading-[0.95]" style={SF_VARIATION}>
                        {` `}
                      </span>
                      <span className="leading-[0.95] text-[#033ecf]" style={SF_VARIATION}>
                        {`шкодить `}
                      </span>
                    </p>
                  </div>
                  <p className="relative m-0 w-full shrink-0" data-node-id="312:1037" style={SF_VARIATION}>
                    <span className="font-sf-pro--semibold text-[36px] font-[590] leading-[0.97] text-black" style={SF_VARIATION}>
                      {`вашому здоров'ю`}
                    </span>
                    <span className="font-sf-pro--semibold text-[36px] font-[590] leading-[0.97] text-[#033ecf]" style={SF_VARIATION}>
                      .
                    </span>
                  </p>
                </div>

                <p
                  className="font-montserrat m-0 h-[33px] w-full shrink-0 text-[14px] font-normal leading-[1.45] tracking-[-0.56px] text-[#212121] whitespace-pre-wrap"
                  data-node-id="312:1036"
                >
                  <span className="font-montserrat--medium">Г</span>
                  <span>оловний хедлайнер </span>
                  <span>{` `}</span>
                  <span>будь-якої вечірки.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Feature callouts — 312:1097 */}
          <div className="flex w-[183.004px] flex-col items-start gap-[47px]" data-node-id="312:1097">
            <div className="flex w-full items-center gap-[10px]" data-node-id="312:1038">
              <div className="flex w-[122.062px] shrink-0 flex-col items-start" data-node-id="312:1039">
                <div
                  className="flex w-full flex-col items-start gap-[2.42px] text-right font-helvetica-neue-cyr--roman not-italic leading-[1.45] [word-break:break-word]"
                  data-node-id="312:1040"
                >
                  <p className="m-0 h-[17.32px] w-full text-[12px] tracking-[-0.48px] text-black" data-node-id="312:1041">
                    Справжнє клацання
                  </p>
                  <p className="m-0 h-[13px] w-full text-[11px] tracking-[-0.44px] text-[#5b5b5b]" data-node-id="312:1042">
                    Як в оригінальної пачки
                  </p>
                </div>
              </div>
              <FeatureIconCircle src={ASSETS.featureIconClick} nodeId="312:1043" />
            </div>

            <div className="flex items-center gap-[10px]" data-node-id="312:1058">
              <div
                className="flex w-[109px] shrink-0 flex-col items-end gap-[2px] text-right font-helvetica-neue-cyr--roman not-italic leading-[1.45] [word-break:break-word]"
                data-node-id="312:1059"
              >
                <p className="m-0 h-[14px] w-[114px] text-[12px] tracking-[-0.48px] text-black" data-node-id="312:1060">
                  Повна герметичність
                </p>
                <p className="m-0 h-[13px] w-[109px] text-[11px] tracking-[-0.44px] text-[#5b5b5b]" data-node-id="312:1061">
                  Гарантує чисті кишені
                </p>
              </div>
              <div className="relative size-[42.943px] shrink-0" data-node-id="312:1062">
                <div className="absolute inset-[-1.59%]">
                  <AssetImg src={ASSETS.featureIconSeal} alt="" className="block size-full max-w-none" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[10px]" data-node-id="312:1048">
              <div
                className="relative h-[27px] w-[104px] shrink-0 text-right font-helvetica-neue-cyr--roman not-italic leading-[1.45] [word-break:break-word]"
                data-node-id="312:1049"
              >
                <p
                  className="absolute left-[103.53px] top-[0.18px] m-0 h-[14.314px] w-[69.526px] -translate-x-full text-[12px] tracking-[-0.48px] text-black"
                  data-node-id="312:1050"
                >
                  Багаторазові
                </p>
                <p
                  className="absolute left-[104px] top-[17px] m-0 h-[10px] w-[104px] -translate-x-full text-[11px] tracking-[-0.44px] text-[#5b5b5b]"
                  data-node-id="312:1051"
                >
                  Просто залий розчин
                </p>
              </div>
              <div className="relative size-[42.943px] shrink-0" data-node-id="312:1052">
                <div className="absolute left-0 top-0 size-[42.943px]" data-node-id="312:1053">
                  <div className="absolute inset-[-1.59%]">
                    <AssetImg src={ASSETS.featureIconReuse} alt="" className="block size-full max-w-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA + social — 312:1067 */}
        <div className="flex w-[268.388px] flex-col items-center gap-[33px]" data-node-id="312:1067">
          <button
            type="button"
            className="hero-mobile-cta relative inline-grid shrink-0 cursor-pointer border-0 bg-transparent p-0 leading-[0] grid-cols-[max-content] grid-rows-[max-content] place-items-start"
            data-node-id="312:1068"
            data-name="button hero block"
          >
            <span className="col-start-1 row-start-1 ml-0 mt-0 h-[52px] w-[236px] rounded-[29.5px] bg-[#022ec9]" data-node-id="312:1069" />
            <span className="relative col-start-1 row-start-1 ml-[186px] mt-[9px] size-[33px]" data-node-id="312:1070">
              <AssetImg
                src={ASSETS.buttonCircle}
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                width={33}
                height={33}
              />
            </span>
            <span className="relative col-start-1 row-start-1 ml-[195.71px] mt-[25.5px] h-0 w-[12.618px]" data-node-id="312:1071">
              <div className="absolute inset-[-7.15px_-7.69%_-7.15px_0]">
                <AssetImg src={ASSETS.arrow} alt="" className="block size-full max-w-none" width={12.618} height={14.3} />
              </div>
            </span>
            <span
              className="font-helvetica-neue-cyr--medium col-start-1 row-start-1 ml-[28px] mt-[20px] flex h-[15px] w-[102px] items-center text-[14px] not-italic leading-normal text-white"
              data-node-id="312:1072"
            >
              Замовити
            </span>
          </button>

          <div className="flex w-full flex-col items-center gap-[16px]" data-node-id="312:1073">
            <div
              className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
              data-node-id="312:1074"
            >
              <div className="col-start-1 row-start-1 ml-0 mt-[57px] flex items-center gap-[18px]" data-node-id="312:1075">
                <div className="relative h-[17.194px] w-[106.388px] shrink-0" data-node-id="312:1076">
                  <AssetImg
                    src={ASSETS.stars}
                    alt=""
                    className="absolute inset-0 block size-full max-w-none"
                    width={106.388}
                    height={17.194}
                  />
                </div>
                <p
                  className="font-helvetica-neue-cyr--roman m-0 shrink-0 whitespace-nowrap text-[14px] not-italic leading-normal text-[#484848]"
                  data-node-id="312:1083"
                >
                  Вибір 1000+ українців
                </p>
              </div>

              <div className="col-start-1 row-start-1 ml-[62px] mt-0 inline-grid place-items-start">
                <div className="relative col-start-1 row-start-1 ml-0 mt-0 size-[44.863px]" data-node-id="312:1085">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar1} alt="" className="block size-full max-w-none rounded-full object-cover" width={48.765} height={48.765} />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[31.83px] mt-0 size-[44.863px]" data-node-id="312:1086">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar2} alt="" className="block size-full max-w-none rounded-full object-cover" width={48.765} height={48.765} />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[65.18px] mt-0 size-[44.863px]" data-node-id="312:1087">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar3} alt="" className="block size-full max-w-none rounded-full object-cover" width={48.765} height={48.765} />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[98.62px] mt-0 size-[44.863px]" data-node-id="312:1088">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar4} alt="" className="block size-full max-w-none rounded-full object-cover" width={48.765} height={48.765} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[22px]" data-node-id="312:1089">
              <p
                className="font-helvetica-neue-cyr--roman m-0 flex h-[10px] w-[134px] items-center text-[12px] not-italic leading-normal text-[#353535]"
                data-node-id="312:1090"
              >
                Приєднуйся до трендів
              </p>
              <div className="relative h-[17.146px] w-[14.706px] shrink-0" data-node-id="312:1091">
                <AssetImg src={ASSETS.tiktok} alt="" className="absolute inset-0 block size-full max-w-none" width={14.706} height={17.146} />
              </div>
              <div className="relative size-[19.118px] shrink-0" data-node-id="312:1092">
                <AssetImg src={ASSETS.instagram} alt="" className="absolute inset-0 block size-full max-w-none" width={19.118} height={19.118} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
