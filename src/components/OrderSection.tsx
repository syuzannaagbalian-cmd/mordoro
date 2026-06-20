'use client';

import { useEffect, useState } from 'react';
import {
  NOVA_POSHTA_BRANCHES,
  UKRAINIAN_CITIES,
  type UkrainianCity,
} from '@/data/novaPoshtaBranches';

const ASSETS = {
  productPack: '/assets/order-product-pack.png',
  discountIcon: '/assets/order-discount-icon.svg',
  quantityPlus: '/assets/order-quantity-plus.svg',
  quantityMinus: '/assets/order-quantity-minus.svg',
  ctaIcon: '/assets/order-cta-icon.svg',
  dropdownArrowCity: '/assets/order-dropdown-arrow-city.svg',
  dropdownArrowBranch: '/assets/order-dropdown-arrow-branch.svg',
  applePayIcon: '/assets/order-apple-pay-icon.svg',
  googlePayIcon: '/assets/order-google-pay-icon.svg',
  visa: '/assets/order-visa.svg',
  mastercard: '/assets/order-mastercard.svg',
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

function DropdownChevron({ nodeId, src }: { nodeId: string; src: string }) {
  return (
    <div
      className="pointer-events-none absolute right-[32px] top-1/2 flex h-px w-0 -translate-y-1/2 items-center justify-center"
      aria-hidden
    >
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-px" data-node-id={nodeId}>
          <div className="absolute inset-[-5.52px_-75%_-5.52px_-452.3%]">
            <AssetImg src={src} className="block max-w-none size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+38 095');
  const [city, setCity] = useState('');
  const [branch, setBranch] = useState('');
  const [quantity, setQuantity] = useState(1);

  const branches = city ? NOVA_POSHTA_BRANCHES[city as UkrainianCity] ?? [] : [];

  useEffect(() => {
    setBranch('');
  }, [city]);

  const decreaseQuantity = () => setQuantity((value) => Math.max(1, value - 1));
  const increaseQuantity = () => setQuantity((value) => value + 1);

  const handleOrder = () => {
    console.log('Order submitted', { name, phone, city, branch, quantity });
  };

  const handleApplePay = () => {
    console.log('Apple Pay clicked', { name, phone, city, branch, quantity });
  };

  const handleGooglePay = () => {
    console.log('Google Pay clicked', { name, phone, city, branch, quantity });
  };

  return (
    <section
      className="relative mx-auto h-[809px] w-[1440px] overflow-hidden bg-[#e1e0e7]"
      data-node-id="278:378"
      aria-label="Morldoro order"
    >
      <div
        className="pointer-events-none absolute left-[-432px] right-[41px] top-[36px] aspect-[4096/1907]"
        data-node-id="278:527"
      >
        <AssetImg
          src={ASSETS.productPack}
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
        />
      </div>

      <div className="absolute left-[597px] top-[153px] contents" data-node-id="294:126">
        {/* Pricing column */}
        <div
          className="absolute left-[597px] top-[171px] flex w-[206px] flex-col items-start gap-[33px]"
          data-node-id="294:124"
        >
          <div
            className="flex h-[36px] w-full shrink-0 items-center justify-center rounded-[19px] border border-solid border-[#022ec9] px-[32px]"
            data-node-id="278:457"
          >
            <div className="flex items-center gap-[10px] -translate-y-[2px]">
              <AssetImg
                src={ASSETS.discountIcon}
                alt=""
                width={12.888}
                height={15.002}
                className="order-icon block h-[15.002px] w-[12.888px] shrink-0 object-contain"
                data-node-id="278:460"
              />
              <p
                className="font-helvetica-neue-cyr--roman m-0 h-[9px] w-[119px] shrink-0 text-[12px] not-italic uppercase leading-[0] text-[#13151a] [word-break:break-word]"
                data-node-id="278:459"
              >
                <span className="leading-normal">{`Знижка `}</span>
                <span className="leading-normal text-[#022ec9]">{`сьогодні `}</span>
              </p>
            </div>
          </div>

          <div className="flex w-[180px] shrink-0 flex-col items-start gap-[8px] [word-break:break-word]" data-node-id="294:122">
            <div
              className="font-sf-pro--medium flex w-full shrink-0 items-end leading-[1.02] text-black"
              data-node-id="278:454"
            >
              <p
                className="m-0 h-[76px] w-[111px] shrink-0 text-[77.496px]"
                style={SF_VARIATION}
                data-node-id="278:455"
              >
                99
              </p>
              <p
                className="m-0 h-[42px] w-[69px] shrink-0 text-[39.692px] tracking-[-0.7938px]"
                style={SF_VARIATION}
                data-node-id="278:456"
              >
                грн
              </p>
            </div>
            <p
              className="font-helvetica-neue-cyr--light m-0 h-[37.321px] w-full shrink-0 text-[#636363] not-italic leading-[0] [word-break:break-word]"
              data-node-id="278:453"
            >
              <span className="text-[38.237px] leading-[1.02] line-through decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]">{`139 `}</span>
              <span className="text-[34.717px] leading-[1.02]">грн</span>
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col items-center gap-[23px]" data-node-id="294:123">
            <div className="relative h-[69px] w-[202px] shrink-0" data-node-id="278:463">
              <div
                className="absolute inset-0 rounded-[34.5px] border border-solid border-[#c1c5d1] bg-[rgba(255,255,255,0.2)]"
                data-node-id="278:464"
              />
              <p
                className="font-idealist-sans absolute left-[94px] top-[18px] m-0 h-[30px] w-[13px] text-[32px] not-italic leading-[1.02] text-[#323232]"
                data-node-id="278:465"
              >
                {quantity}
              </p>
              <button
                type="button"
                className="order-qty-btn absolute left-[160px] top-[25px] size-[19px] cursor-pointer border-0 bg-transparent p-0"
                onClick={increaseQuantity}
                aria-label="Збільшити кількість"
                data-node-id="278:466"
              >
                <AssetImg src={ASSETS.quantityPlus} className="block size-full max-w-none" width={19} height={19} />
              </button>
              <button
                type="button"
                className="order-qty-btn absolute left-[24px] top-[35px] h-[2px] w-[19px] cursor-pointer border-0 bg-transparent p-0"
                onClick={decreaseQuantity}
                aria-label="Зменшити кількість"
                data-node-id="278:467"
              >
                <AssetImg src={ASSETS.quantityMinus} className="block size-full max-w-none" width={19} height={2} />
              </button>
            </div>
            <p
              className="font-helvetica-neue-cyr--roman m-0 h-[18px] min-w-full w-[min-content] shrink-0 text-center text-[16px] not-italic leading-[118.11000061035156%] text-[#676767] [word-break:break-word]"
              data-node-id="278:468"
            >
              Собі й товаришу!
            </p>
          </div>
        </div>

        {/* Order form */}
        <div
          className="absolute left-[894px] top-[153px] flex w-[433.974px] flex-col items-center gap-[24px]"
          data-node-id="294:121"
        >
          <div className="flex w-full shrink-0 flex-col items-start gap-[23px]" data-node-id="294:118">
            <div className="flex w-full shrink-0 flex-col items-start gap-[14px]" data-node-id="294:116">
              {/* Name */}
              <div className="relative h-[78px] w-full shrink-0" data-node-id="294:109">
                <label
                  htmlFor="order-name"
                  className="font-helvetica-neue-cyr--roman absolute right-[410px] top-0 h-[18px] w-[138px] translate-x-full text-[14px] not-italic leading-[1.175] text-[#7e7e7e] [word-break:break-word]"
                  data-node-id="278:470"
                >
                  Ім&apos;я*
                </label>
                <div className="absolute left-0 top-[20px] h-[58px] w-[433px]" data-node-id="294:102">
                  <input
                    id="order-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="|"
                    className="order-field-input font-helvetica-neue-cyr--roman absolute right-0 top-0 h-[58px] w-[433px] rounded-[30px] border-0 bg-white pl-[23px] pr-[23px] text-[14px] not-italic leading-[1.175] text-[#565656] outline-none"
                    data-node-id="278:475"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative h-[78px] w-full shrink-0" data-node-id="294:110">
                <label
                  htmlFor="order-phone"
                  className="font-helvetica-neue-cyr--roman absolute right-[409px] top-0 h-[18px] w-[138px] translate-x-full text-[14px] not-italic leading-[1.175] text-[#7e7e7e] [word-break:break-word]"
                  data-node-id="278:471"
                >
                  Телефон*
                </label>
                <div className="absolute left-0 top-[20px] h-[58px] w-[433px]" data-node-id="294:103">
                  <input
                    id="order-phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="order-field-input font-helvetica-neue-cyr--roman absolute right-0 top-0 h-[58px] w-[433px] rounded-[30px] border-0 bg-white pl-[27px] pr-[23px] text-[14px] not-italic leading-[1.175] text-[#565656] outline-none"
                    data-node-id="278:476"
                  />
                </div>
              </div>

              {/* City + Nova Poshta */}
              <div className="flex w-full shrink-0 items-center gap-[20px]" data-node-id="294:115">
                <div className="relative h-[78px] w-[206px] shrink-0" data-node-id="294:111">
                  <label
                    htmlFor="order-city"
                    className="font-helvetica-neue-cyr--roman absolute right-[183.03px] top-0 w-[54px] translate-x-full text-[14px] not-italic leading-[1.175] text-[#7e7e7e] [word-break:break-word]"
                    data-node-id="278:472"
                  >
                    Місто*
                  </label>
                  <div className="absolute left-0 top-[20px] h-[58px] w-[206px]" data-node-id="294:104">
                    <select
                      id="order-city"
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                      className="order-field-select font-helvetica-neue-cyr--roman absolute left-0 top-0 flex h-[58px] w-[206px] cursor-pointer appearance-none items-center rounded-[30px] border-0 bg-white pl-[23px] pr-[32px] text-[14px] not-italic leading-[1.175] text-[#565656] outline-none"
                      data-node-id="278:499"
                    >
                      <option value="">Ваше місто</option>
                      {UKRAINIAN_CITIES.map((cityName) => (
                        <option key={cityName} value={cityName}>
                          {cityName}
                        </option>
                      ))}
                    </select>
                    <DropdownChevron nodeId="278:487" src={ASSETS.dropdownArrowCity} />
                  </div>
                </div>

                <div className="relative h-[78px] w-[207.974px] shrink-0" data-node-id="294:112">
                  <label
                    htmlFor="order-branch"
                    className="font-helvetica-neue-cyr--roman absolute right-[190px] top-0 w-[190px] translate-x-full text-[14px] not-italic leading-[1.175] text-[#7e7e7e] [word-break:break-word]"
                    data-node-id="278:473"
                  >
                    Нова Пошта (відділення)*
                  </label>
                  <div className="absolute left-0 top-[20px] h-[58px] w-[206px]" data-node-id="294:106">
                    <select
                      id="order-branch"
                      value={branch}
                      onChange={(event) => setBranch(event.target.value)}
                      disabled={!city}
                      className="order-field-select font-helvetica-neue-cyr--roman absolute right-0 top-0 flex h-[58px] w-[206px] cursor-pointer appearance-none items-center rounded-[30px] border-0 bg-white pl-[23px] pr-[32px] text-[14px] not-italic leading-[1.175] text-[#565656] outline-none disabled:cursor-not-allowed disabled:opacity-60"
                      data-node-id="278:480"
                    >
                      <option value="">№ Відділення</option>
                      {branches.map((branchName) => (
                        <option key={branchName} value={branchName}>
                          {branchName}
                        </option>
                      ))}
                    </select>
                    <DropdownChevron nodeId="278:486" src={ASSETS.dropdownArrowBranch} />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleOrder}
              className="order-cta-btn flex h-[58px] w-full shrink-0 cursor-pointer content-stretch items-center gap-[81px] rounded-[36.5px] border-0 bg-[#022ec9] pb-[13px] pl-[120px] pr-[20px] pt-[14px]"
              data-node-id="294:107"
            >
              <span
                className="font-helvetica-neue-cyr--roman flex h-[15px] w-[181px] shrink-0 items-center justify-center text-center text-[18px] not-italic leading-normal text-white [word-break:break-word]"
                data-node-id="278:485"
              >
                Замовити зараз
              </span>
              <span className="flex size-[30.883px] shrink-0 items-center justify-center" data-node-id="294:101">
                <AssetImg
                  src={ASSETS.ctaIcon}
                  alt=""
                  width={30.883}
                  height={30.883}
                  className="order-icon block h-auto w-auto max-h-full max-w-full object-contain"
                />
              </span>
            </button>

            {/* Payment buttons */}
            <div className="flex w-full shrink-0 items-center gap-[21px]" data-node-id="294:117">
              <button
                type="button"
                onClick={handleApplePay}
                className="order-pay-btn flex h-[56px] w-[206px] shrink-0 cursor-pointer items-center rounded-[30px] border-0 bg-[#f3f3f3] py-[17px] pl-[71px] pr-[74px]"
                data-node-id="294:113"
              >
                <span className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                  <span
                    className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-[28.03px] mt-[4px] flex h-[18px] w-[33px] items-center text-[18px] not-italic leading-[1.02] text-black [word-break:break-word]"
                    data-node-id="278:489"
                  >
                    Pay
                  </span>
                  <span className="col-start-1 row-start-1 ml-0 mt-0 flex h-[21px] w-[17.693px] items-center justify-center" data-node-id="278:490">
                    <AssetImg
                      src={ASSETS.applePayIcon}
                      alt=""
                      width={17.693}
                      height={21}
                      className="order-icon block h-auto w-auto max-h-[21px] max-w-[17.693px] object-contain"
                    />
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={handleGooglePay}
                className="order-pay-btn flex h-[56px] w-[206px] shrink-0 cursor-pointer items-center rounded-[30px] border-0 bg-[#f3f3f3] pb-[17px] pl-[65px] pr-[70px] pt-[16px]"
                data-node-id="294:114"
              >
                <span className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                  <span
                    className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-[32.03px] mt-[5px] flex h-[17px] w-[39px] items-center text-[18px] not-italic leading-[1.02] text-black [word-break:break-word]"
                    data-node-id="278:492"
                  >
                    Pay
                  </span>
                  <span className="col-start-1 row-start-1 ml-0 mt-0 flex size-[23px] items-center justify-center" data-node-id="278:493">
                    <AssetImg
                      src={ASSETS.googlePayIcon}
                      alt=""
                      width={23}
                      height={23}
                      className="order-icon block h-auto w-auto max-h-[23px] max-w-[23px] object-contain"
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex w-[379.999px] shrink-0 items-start justify-between" data-node-id="294:120">
            <div className="flex shrink-0 items-center gap-[22px]" data-node-id="294:119">
              <div className="flex h-[30.493px] w-[39.289px] shrink-0 items-center justify-center" data-node-id="278:504">
                <AssetImg
                  src={ASSETS.mastercard}
                  alt="Mastercard"
                  width={39.289}
                  height={30.493}
                  className="order-icon block h-auto w-auto max-h-[30.493px] max-w-[39.289px] object-contain"
                />
              </div>
              <div className="flex h-[20.369px] w-[63.078px] shrink-0 items-center justify-center" data-node-id="278:502">
                <AssetImg
                  src={ASSETS.visa}
                  alt="Visa"
                  width={63.078}
                  height={20.369}
                  className="order-icon block h-auto w-auto max-h-[20.369px] max-w-[63.078px] object-contain"
                />
              </div>
            </div>
            <p
              className="font-helvetica-neue-cyr--roman m-0 h-[32px] w-[219px] shrink-0 text-[#272727] not-italic leading-[0] [word-break:break-word]"
              data-node-id="278:474"
            >
              <span className="text-[12px] leading-[1.175]">{`Натискаючи кнопку, ви погоджуєтесь з `}</span>
              <span className="text-[12px] leading-[1.175] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]">
                політикою конфіденційності
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
