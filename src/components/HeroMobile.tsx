'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import MobileFluidSection from '@/components/MobileFluidSection';
import { scrollToSection } from '@/utils/scrollToSection';

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
      className="flex size-[calc(42.943*var(--mf))] shrink-0 items-center justify-center rounded-[calc(21.471*var(--mf))] border-[calc(0.682*var(--mf))] border-solid border-[#bdbec9] bg-[rgba(255,255,255,0.5)]"
      data-node-id={nodeId}
    >
      <div className="relative h-[calc(13.633*var(--mf))] w-[calc(14.995*var(--mf))]">
        <div className="absolute inset-[-3.74%_-3.4%_-3.76%_-3.41%]">
          <AssetImg src={src} alt="" className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

export default function HeroMobile() {
  return (
    <MobileFluidSection
      as="div"
      designHeight={961}
      className="hero-mobile"
      data-node-id="295:405"
      data-name="Херо блок"
      aria-label="Morldoro hero mobile"
      canvasClassName="relative overflow-hidden bg-[#e1e0e7]"
    >
      {/* Background — 312:1024 */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[calc(934*var(--mf))] w-[calc(525*var(--mf))]"
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
      <div className="pointer-events-none absolute bottom-[calc(-38*var(--mf))] left-1/2 h-[calc(190*var(--mf))] w-[calc(526*var(--mf))] -translate-x-1/2" data-node-id="312:1025">
        <div className="absolute inset-[-18.68%_-6.75%]">
          <AssetImg src={ASSETS.ellipseBottom} alt="" className="block size-full max-w-none" />
        </div>
      </div>

      {/* Content — 312:1100 */}
      <div
        className="absolute left-[calc(16*var(--mf))] top-[calc(20*var(--mf))] flex w-[calc(358*var(--mf))] flex-col items-center gap-[calc(103*var(--mf))]"
        data-node-id="312:1100"
      >
        <div className="flex w-full flex-col items-start gap-[calc(38*var(--mf))]" data-node-id="312:1099">
          <div className="flex w-full flex-col items-start gap-[calc(41*var(--mf))]" data-node-id="312:1098">
            {/* Header — 312:1027 */}
            <header className="flex w-full shrink-0 items-center justify-between" data-node-id="312:1027">
              <Link
                href="/"
                className="relative block h-[calc(21.836*var(--mf))] w-[calc(83.458*var(--mf))] shrink-0"
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
                <span className="relative col-start-1 row-start-1 ml-[calc(73.14*var(--mf))] mt-[calc(0.72*var(--mf))] size-[calc(10.359*var(--mf))]" data-node-id="312:1030">
                  <AssetImg
                    src={ASSETS.supportIcon}
                    alt=""
                    className="absolute inset-0 block size-full max-w-none"
                    width={10.359}
                    height={10.359}
                  />
                </span>
                <span
                  className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-0 mt-0 flex h-[calc(11*var(--mf))] w-[calc(64*var(--mf))] items-center justify-center text-center text-[calc(12*var(--mf))] not-italic leading-[1.1] text-black"
                  data-node-id="312:1031"
                >
                  Підтримка
                </span>
              </a>
            </header>

            {/* Badge + headline — 312:1096 */}
            <div
              className="flex w-full flex-col items-center gap-[calc(17*var(--mf))] leading-[0]"
              data-node-id="312:1096"
            >
              {/* Badge — 312:1032 / 322:156 */}
              <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start" data-node-id="312:1032">
                <div
                  className="col-start-1 row-start-1 ml-0 mt-0 flex h-[calc(30.4*var(--mf))] w-[calc(209*var(--mf))] flex-col items-start justify-center rounded-[calc(14.44*var(--mf))] border-[calc(0.76*var(--mf))] border-solid border-[rgba(0,25,160,0.73)] pb-[calc(8*var(--mf))] pl-[calc(13*var(--mf))] pr-[calc(18*var(--mf))] pt-[calc(9*var(--mf))]"
                  data-node-id="322:156"
                >
                  <div className="flex shrink-0 items-center gap-[calc(11*var(--mf))]" data-node-id="322:155">
                    <span className="relative h-[calc(13.6*var(--mf))] w-[calc(12.92*var(--mf))] shrink-0" data-node-id="312:1035">
                      <AssetImg
                        src={ASSETS.badgeIcon}
                        alt=""
                        className="absolute inset-0 block size-full max-w-none"
                        width={12.92}
                        height={13.6}
                      />
                    </span>
                    <p
                      className="font-helvetica-neue-cyr--roman m-0 flex h-[calc(7.2*var(--mf))] w-[calc(154.28*var(--mf))] items-center text-[calc(9.12*var(--mf))] not-italic uppercase leading-normal text-[#001ba5]"
                      data-node-id="312:1033"
                    >
                      антистрес нового покоління
                    </p>
                  </div>
                </div>
              </div>

              {/* Headline block — 312:1095 */}
              <div
                className="flex w-full flex-col items-start gap-[calc(17*var(--mf))] text-center text-[calc(0*var(--mf))] [word-break:break-word]"
                data-node-id="312:1095"
              >
                <div
                  className="flex w-full flex-col items-start gap-[calc(10*var(--mf))] font-sf-pro--medium font-[510] text-[#3e67dc]"
                  data-node-id="312:1094"
                >
                  <div className="relative w-full shrink-0 whitespace-pre-wrap" data-node-id="312:1026" style={SF_VARIATION}>
                    <p className="font-sf-pro--semibold m-0 mb-0 text-[calc(58*var(--mf))] font-[590] leading-[0.95] text-black" style={SF_VARIATION}>
                      {`Пузиріння `}
                    </p>
                    <p className="font-sf-pro--semibold m-0 text-[calc(58*var(--mf))] font-[590]" style={SF_VARIATION}>
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
                    <span className="font-sf-pro--semibold text-[calc(36*var(--mf))] font-[590] leading-[0.97] text-black" style={SF_VARIATION}>
                      {`вашому здоров'ю`}
                    </span>
                    <span className="font-sf-pro--semibold text-[calc(36*var(--mf))] font-[590] leading-[0.97] text-[#033ecf]" style={SF_VARIATION}>
                      .
                    </span>
                  </p>
                </div>

                <p
                  className="font-montserrat m-0 h-[calc(33*var(--mf))] w-full shrink-0 text-[calc(14*var(--mf))] font-normal leading-[1.45] tracking-[calc(-0.56*var(--mf))] text-[#212121] whitespace-pre-wrap"
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
          <div className="flex w-[calc(183.004*var(--mf))] flex-col items-start gap-[calc(47*var(--mf))]" data-node-id="312:1097">
            <div className="flex w-full items-center gap-[calc(10*var(--mf))]" data-node-id="312:1038">
              <div className="flex w-[calc(122.062*var(--mf))] shrink-0 flex-col items-start" data-node-id="312:1039">
                <div
                  className="flex w-full flex-col items-start gap-[calc(2.42*var(--mf))] text-right font-helvetica-neue-cyr--roman not-italic leading-[1.45] [word-break:break-word]"
                  data-node-id="312:1040"
                >
                  <p className="m-0 h-[calc(17.32*var(--mf))] w-full text-[calc(12*var(--mf))] tracking-[calc(-0.48*var(--mf))] text-black" data-node-id="312:1041">
                    Справжнє клацання
                  </p>
                  <p className="m-0 h-[calc(13*var(--mf))] w-full text-[calc(11*var(--mf))] tracking-[calc(-0.44*var(--mf))] text-[#5b5b5b]" data-node-id="312:1042">
                    Як в оригінальної пачки
                  </p>
                </div>
              </div>
              <FeatureIconCircle src={ASSETS.featureIconClick} nodeId="312:1043" />
            </div>

            <div className="flex items-center gap-[calc(10*var(--mf))]" data-node-id="312:1058">
              <div
                className="flex w-[calc(109*var(--mf))] shrink-0 flex-col items-end gap-[calc(2*var(--mf))] text-right font-helvetica-neue-cyr--roman not-italic leading-[1.45] [word-break:break-word]"
                data-node-id="312:1059"
              >
                <p className="m-0 h-[calc(14*var(--mf))] w-[calc(114*var(--mf))] text-[calc(12*var(--mf))] tracking-[calc(-0.48*var(--mf))] text-black" data-node-id="312:1060">
                  Повна герметичність
                </p>
                <p className="m-0 h-[calc(13*var(--mf))] w-[calc(109*var(--mf))] text-[calc(11*var(--mf))] tracking-[calc(-0.44*var(--mf))] text-[#5b5b5b]" data-node-id="312:1061">
                  Гарантує чисті кишені
                </p>
              </div>
              <div className="relative size-[calc(42.943*var(--mf))] shrink-0" data-node-id="312:1062">
                <div className="absolute inset-[-1.59%]">
                  <AssetImg src={ASSETS.featureIconSeal} alt="" className="block size-full max-w-none" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[calc(10*var(--mf))]" data-node-id="312:1048">
              <div
                className="relative h-[calc(27*var(--mf))] w-[calc(104*var(--mf))] shrink-0 text-right font-helvetica-neue-cyr--roman not-italic leading-[1.45] [word-break:break-word]"
                data-node-id="312:1049"
              >
                <p
                  className="absolute left-[calc(103.53*var(--mf))] top-[calc(0.18*var(--mf))] m-0 h-[calc(14.314*var(--mf))] w-[calc(69.526*var(--mf))] -translate-x-full text-[calc(12*var(--mf))] tracking-[calc(-0.48*var(--mf))] text-black"
                  data-node-id="312:1050"
                >
                  Багаторазові
                </p>
                <p
                  className="absolute left-[calc(104*var(--mf))] top-[calc(17*var(--mf))] m-0 h-[calc(10*var(--mf))] w-[calc(104*var(--mf))] -translate-x-full text-[calc(11*var(--mf))] tracking-[calc(-0.44*var(--mf))] text-[#5b5b5b]"
                  data-node-id="312:1051"
                >
                  Просто залий розчин
                </p>
              </div>
              <div className="relative size-[calc(42.943*var(--mf))] shrink-0" data-node-id="312:1052">
                <div className="absolute left-0 top-0 size-[calc(42.943*var(--mf))]" data-node-id="312:1053">
                  <div className="absolute inset-[-1.59%]">
                    <AssetImg src={ASSETS.featureIconReuse} alt="" className="block size-full max-w-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA + social — 312:1067 */}
        <div className="flex w-[calc(268.388*var(--mf))] flex-col items-center gap-[calc(33*var(--mf))]" data-node-id="312:1067">
          <button
            type="button"
            className="hero-mobile-cta relative inline-grid shrink-0 cursor-pointer border-0 bg-transparent p-0 leading-[0] grid-cols-[max-content] grid-rows-[max-content] place-items-start"
            data-node-id="312:1068"
            data-name="button hero block"
            aria-label="Замовити"
            onClick={() => scrollToSection('mobile-order-section')}
          >
            <span className="col-start-1 row-start-1 ml-0 mt-0 h-[calc(52*var(--mf))] w-[calc(236*var(--mf))] rounded-[calc(29.5*var(--mf))] bg-[#022ec9]" data-node-id="312:1069" />
            <span className="relative col-start-1 row-start-1 ml-[calc(186*var(--mf))] mt-[calc(9*var(--mf))] size-[calc(33*var(--mf))]" data-node-id="312:1070">
              <AssetImg
                src={ASSETS.buttonCircle}
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                width={33}
                height={33}
              />
            </span>
            <span className="relative col-start-1 row-start-1 ml-[calc(195.71*var(--mf))] mt-[calc(25.5*var(--mf))] h-0 w-[calc(12.618*var(--mf))]" data-node-id="312:1071">
              <div className="absolute inset-[calc(-7.15*var(--mf))_-7.69%_calc(-7.15*var(--mf))_0]">
                <AssetImg src={ASSETS.arrow} alt="" className="block size-full max-w-none" width={12.618} height={14.3} />
              </div>
            </span>
            <span
              className="font-helvetica-neue-cyr--medium col-start-1 row-start-1 ml-[calc(28*var(--mf))] mt-[calc(20*var(--mf))] flex h-[calc(15*var(--mf))] w-[calc(102*var(--mf))] items-center text-[calc(14*var(--mf))] not-italic leading-normal text-white"
              data-node-id="312:1072"
            >
              Замовити
            </span>
          </button>

          <div className="flex w-full flex-col items-center gap-[calc(16*var(--mf))]" data-node-id="312:1073">
            <div
              className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
              data-node-id="312:1074"
            >
              <div className="col-start-1 row-start-1 ml-0 mt-[calc(57*var(--mf))] flex items-center gap-[calc(18*var(--mf))]" data-node-id="312:1075">
                <div className="relative h-[calc(17.194*var(--mf))] w-[calc(106.388*var(--mf))] shrink-0" data-node-id="312:1076">
                  <AssetImg
                    src={ASSETS.stars}
                    alt=""
                    className="absolute inset-0 block size-full max-w-none"
                    width={106.388}
                    height={17.194}
                  />
                </div>
                <p
                  className="font-helvetica-neue-cyr--roman m-0 shrink-0 whitespace-nowrap text-[calc(14*var(--mf))] not-italic leading-normal text-[#484848]"
                  data-node-id="312:1083"
                >
                  Вибір 1000+ українців
                </p>
              </div>

              <div className="col-start-1 row-start-1 ml-[calc(62*var(--mf))] mt-0 inline-grid place-items-start">
                <div className="relative col-start-1 row-start-1 ml-0 mt-0 size-[calc(44.863*var(--mf))]" data-node-id="312:1085">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar1} alt="" className="block size-full max-w-none rounded-full object-cover" width={48.765} height={48.765} />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[calc(31.83*var(--mf))] mt-0 size-[calc(44.863*var(--mf))]" data-node-id="312:1086">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar2} alt="" className="block size-full max-w-none rounded-full object-cover" width={48.765} height={48.765} />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[calc(65.18*var(--mf))] mt-0 size-[calc(44.863*var(--mf))]" data-node-id="312:1087">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar3} alt="" className="block size-full max-w-none rounded-full object-cover" width={48.765} height={48.765} />
                  </div>
                </div>
                <div className="relative col-start-1 row-start-1 ml-[calc(98.62*var(--mf))] mt-0 size-[calc(44.863*var(--mf))]" data-node-id="312:1088">
                  <div className="absolute inset-[-4.35%]">
                    <AssetImg src={ASSETS.avatar4} alt="" className="block size-full max-w-none rounded-full object-cover" width={48.765} height={48.765} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[calc(22*var(--mf))]" data-node-id="312:1089">
              <p
                className="font-helvetica-neue-cyr--roman m-0 flex h-[calc(10*var(--mf))] w-[calc(134*var(--mf))] items-center text-[calc(12*var(--mf))] not-italic leading-normal text-[#353535]"
                data-node-id="312:1090"
              >
                Приєднуйся до трендів
              </p>
              <div className="relative h-[calc(17.146*var(--mf))] w-[calc(14.706*var(--mf))] shrink-0" data-node-id="312:1091">
                <AssetImg src={ASSETS.tiktok} alt="" className="absolute inset-0 block size-full max-w-none" width={14.706} height={17.146} />
              </div>
              <div className="relative size-[calc(19.118*var(--mf))] shrink-0" data-node-id="312:1092">
                <AssetImg src={ASSETS.instagram} alt="" className="absolute inset-0 block size-full max-w-none" width={19.118} height={19.118} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileFluidSection>
  );
}
