'use client';

import { useEffect, useState } from 'react';
import MobileScaleFrame from '@/components/MobileScaleFrame';
import {
  MOBILE_NOVA_POSHTA_BRANCHES,
  MOBILE_UKRAINIAN_CITIES,
  type MobileUkrainianCity,
} from '@/data/mobileNovaPoshtaBranches';

const ASSETS = {
  product: '/assets/mobile-block3-product.png',
  discountIcon: '/assets/mobile-block3-discount-icon.svg',
  quantityPlus: '/assets/mobile-block3-quantity-plus.svg',
  quantityMinus: '/assets/mobile-block3-quantity-minus.svg',
  ctaIcon: '/assets/mobile-block3-cta-icon.svg',
  dropdownArrowCity: '/assets/mobile-block3-dropdown-arrow-city.svg',
  dropdownArrowBranch: '/assets/mobile-block3-dropdown-arrow-branch.svg',
  applePayIcon: '/assets/mobile-block3-apple-pay-icon.svg',
  googlePayIcon: '/assets/mobile-block3-google-pay-icon.svg',
  mastercard: '/assets/mobile-block3-mastercard.svg',
  visa: '/assets/mobile-block3-visa.svg',
} as const;

const SF_VARIATION = { fontVariationSettings: '"wdth" 100' } as const;

type FormErrors = Partial<Record<'name' | 'phone' | 'city' | 'branch', string>>;

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

function MobileDropdownChevron({ nodeId, src }: { nodeId: string; src: string }) {
  return (
    <div
      className="pointer-events-none absolute right-[26.324px] top-1/2 flex h-[0.823px] w-0 -translate-y-1/2 items-center justify-center"
      aria-hidden
    >
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-[0.823px]" data-node-id={nodeId}>
          <div className="absolute inset-[-4.54px_-75%_-4.54px_-452.3%]">
            <AssetImg src={src} className="block max-w-none size-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mobile-order-error font-helvetica-neue-cyr--roman absolute left-0 top-[64.17px] m-0 h-[11px] text-[9px] not-italic leading-[1.175] text-[#d93025]">
      {message}
    </p>
  );
}

export default function MobileOrderSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+38 095');
  const [city, setCity] = useState('');
  const [branch, setBranch] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});

  const branches = city ? MOBILE_NOVA_POSHTA_BRANCHES[city as MobileUkrainianCity] ?? [] : [];

  useEffect(() => {
    setBranch('');
  }, [city]);

  const decreaseQuantity = () => setQuantity((value) => Math.max(1, value - 1));
  const increaseQuantity = () => setQuantity((value) => value + 1);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = "Введіть ім'я";
    if (!phone.trim() || phone.trim() === '+38 095') next.phone = 'Введіть телефон';
    if (!city) next.city = 'Оберіть місто';
    if (!branch) next.branch = 'Оберіть відділення';
    return next;
  };

  const handleOrder = () => {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    console.log('Order submitted', { name, phone, city, branch, quantity });
  };

  const handleApplePay = () => {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    console.log('Apple Pay clicked', { name, phone, city, branch, quantity });
  };

  const handleGooglePay = () => {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    console.log('Google Pay clicked', { name, phone, city, branch, quantity });
  };

  return (
    <MobileScaleFrame
      as="section"
      id="mobile-order-section"
      designHeight={891}
      data-node-id="312:1129"
      data-name="блок 3"
      aria-label="Morldoro mobile order"
      canvasClassName="relative overflow-x-clip bg-[#e1e0e7]"
    >
      {/* Product image — 312:1130 */}
      <div
        className="pointer-events-none absolute left-[-248px] top-[8px] h-[364px] w-[781px]"
        data-node-id="312:1130"
        data-name="a pack with bubbles (1) 2"
      >
        <AssetImg
          src={ASSETS.product}
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
        />
      </div>

      {/* Pricing column — 312:1132 */}
      <div
        className="absolute left-[212px] top-[46px] flex w-[161px] flex-col items-center gap-[16px]"
        data-node-id="312:1132"
      >
        {/* Discount badge — 312:1133 */}
        <div
          className="flex h-[27.961px] w-full shrink-0 items-center justify-center gap-[7.767px] rounded-[14.757px] border-[0.777px] border-solid border-[#022ec9] px-[24.854px] pb-[8.544px] pt-[7.767px]"
          data-node-id="312:1133"
          data-name="discount"
        >
          <div className="relative h-[11.653px] w-[10.01px] shrink-0" data-node-id="312:1134">
            <AssetImg
              src={ASSETS.discountIcon}
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              width={10.01}
              height={11.653}
            />
          </div>
          <p
            className="font-helvetica-neue-cyr--roman m-0 flex h-[6.99px] w-[92.427px] shrink-0 items-center text-[9.32px] not-italic uppercase leading-[0] text-[#13151a] [word-break:break-word]"
            data-node-id="312:1137"
          >
            <span className="leading-normal">{`Знижка `}</span>
            <span className="leading-normal text-[#022ec9]">{`сьогодні `}</span>
          </p>
        </div>

        {/* Price block — 312:1138 */}
        <div className="flex w-full shrink-0 flex-col items-start gap-[7.156px] [word-break:break-word]" data-node-id="312:1138">
          <div
            className="font-sf-pro--medium flex w-full shrink-0 items-end leading-[1.02] text-black"
            data-node-id="312:1139"
            data-name="new price"
          >
            <p
              className="m-0 h-[67.978px] w-[99.283px] shrink-0 text-[69.316px]"
              style={SF_VARIATION}
              data-node-id="312:1140"
            >
              99
            </p>
            <p
              className="m-0 h-[37.567px] w-[61.717px] shrink-0 text-[35.503px] tracking-[-0.7101px]"
              style={SF_VARIATION}
              data-node-id="312:1141"
            >
              грн
            </p>
          </div>
          <p
            className="font-helvetica-neue-cyr--light m-0 h-[33.381px] w-full shrink-0 text-center text-[#636363] not-italic leading-[0] [word-break:break-word]"
            data-node-id="312:1142"
          >
            <span className="text-[34.201px] leading-[1.02] line-through decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]">{`139 `}</span>
            <span className="text-[31.052px] leading-[1.02]">грн</span>
          </p>
        </div>

        {/* Quantity — 312:1143 */}
        <div className="flex shrink-0 flex-col items-center gap-[16px]" data-node-id="312:1143">
          <div className="relative h-[42.698px] w-[125px] shrink-0" data-node-id="312:1144" data-name="quantity">
            <div
              className="absolute inset-0 rounded-[21.349px] border-[0.619px] border-solid border-[#c1c5d1] bg-[rgba(255,255,255,0.46)]"
              data-node-id="312:1145"
            />
            <p
              className="font-idealist-sans absolute left-[53.356px] top-[11.943px] m-0 flex h-[19.901px] w-[8.624px] items-center justify-center text-[21.228px] not-italic leading-[1.02] text-[#323232]"
              data-node-id="312:1146"
            >
              {quantity}
            </p>
            <button
              type="button"
              className="mobile-order-qty-btn absolute left-[97.138px] top-[16.591px] size-[12.604px] cursor-pointer border-0 bg-transparent p-0"
              onClick={increaseQuantity}
              aria-label="Збільшити кількість"
              data-node-id="312:1147"
            >
              <AssetImg
                src={ASSETS.quantityPlus}
                alt=""
                className="block size-full max-w-none"
                width={12.604}
                height={12.604}
              />
            </button>
            <button
              type="button"
              className="mobile-order-qty-btn absolute left-[6.921px] top-[23.219px] h-0 w-[12.604px] cursor-pointer border-0 bg-transparent p-0"
              onClick={decreaseQuantity}
              aria-label="Зменшити кількість"
              data-node-id="312:1148"
            >
              <div className="absolute inset-[-1.33px_0_0_0]">
                <AssetImg
                  src={ASSETS.quantityMinus}
                  alt=""
                  className="block size-full max-w-none"
                  width={12.604}
                  height={1}
                />
              </div>
            </button>
          </div>
          <p
            className="font-helvetica-neue-cyr--roman m-0 flex h-[11px] w-[114px] shrink-0 items-center justify-center text-center text-[12px] not-italic leading-[1.175] text-[#676767] [word-break:break-word]"
            data-node-id="312:1149"
          >
            Собі й товаришу!
          </p>
        </div>
      </div>

      {/* Order form — 312:1150 */}
      <div
        className="absolute left-[16px] top-[331.96px] flex w-[357px] flex-col items-center gap-[19.743px]"
        data-node-id="312:1150"
      >
        <div className="flex w-full shrink-0 flex-col items-start gap-[28.45px]" data-node-id="312:1151">
          <div className="flex w-full shrink-0 flex-col items-start gap-[25.402px]" data-node-id="312:1152">
            {/* Name — 312:1153 */}
            <div className="relative h-[64.165px] w-full shrink-0" data-node-id="312:1153">
              <label
                htmlFor="mobile-order-name"
                className="font-helvetica-neue-cyr--roman absolute left-[19.722px] top-0 m-0 flex h-[14.807px] items-center text-[11.517px] not-italic leading-[1.175] text-[#2a2a2a] [word-break:break-word]"
                data-node-id="312:1154"
              >
                Ім&apos;я*
              </label>
              <div className="absolute left-0 top-[16.46px] h-[47.713px] w-[356.199px]" data-node-id="312:1155">
                <input
                  id="mobile-order-name"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="|"
                  aria-invalid={Boolean(errors.name)}
                  className={`mobile-order-field-input font-helvetica-neue-cyr--roman absolute inset-0 flex h-[47.713px] w-[356.199px] items-center rounded-[24.679px] border-0 bg-white pl-[18.898px] pr-[18.898px] text-[11.517px] not-italic leading-[1.175] text-[#393939] outline-none ${errors.name ? 'ring-1 ring-[#d93025]' : ''}`}
                  data-node-id="312:1156"
                />
              </div>
              <FieldError message={errors.name} />
            </div>

            {/* Phone — 312:1158 */}
            <div className="relative h-[64.165px] w-full shrink-0" data-node-id="312:1158">
              <label
                htmlFor="mobile-order-phone"
                className="font-helvetica-neue-cyr--roman absolute left-[20.544px] top-0 m-0 flex h-[14.807px] items-center text-[11.517px] not-italic leading-[1.175] text-[#2a2a2a] [word-break:break-word]"
                data-node-id="312:1159"
              >
                Телефон*
              </label>
              <div className="absolute left-0 top-[16.46px] h-[47.713px] w-[356.199px]" data-node-id="312:1160">
                <input
                  id="mobile-order-phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  aria-invalid={Boolean(errors.phone)}
                  className={`mobile-order-field-input font-helvetica-neue-cyr--roman absolute inset-0 flex h-[47.713px] w-[356.199px] items-center rounded-[24.679px] border-0 bg-white pl-[22.191px] pr-[18.898px] text-[11.517px] not-italic leading-[1.175] text-[#393939] outline-none ${errors.phone ? 'ring-1 ring-[#d93025]' : ''}`}
                  data-node-id="312:1161"
                />
              </div>
              <FieldError message={errors.phone} />
            </div>

            {/* City + branch — 312:1163 */}
            <div className="flex w-full shrink-0 items-center gap-[16.453px]" data-node-id="312:1163">
              <div className="relative h-[64.165px] w-[169.462px] shrink-0" data-node-id="312:1164">
                <label
                  htmlFor="mobile-order-city"
                  className="font-helvetica-neue-cyr--roman absolute left-[18.898px] top-0 m-0 flex h-[14.807px] items-center text-[11.517px] not-italic leading-[1.175] text-[#2a2a2a] [word-break:break-word]"
                  data-node-id="312:1165"
                >
                  Місто*
                </label>
                <div className="absolute left-0 top-[16.44px] h-[47.713px] w-[169.462px]" data-node-id="312:1166">
                  <select
                    id="mobile-order-city"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                      if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                    }}
                    aria-invalid={Boolean(errors.city)}
                    className={`mobile-order-field-select font-helvetica-neue-cyr--roman absolute inset-0 flex h-[47.713px] w-[169.462px] cursor-pointer appearance-none items-center rounded-[24.679px] border-0 bg-white pb-[17.275px] pl-[18.921px] pr-[26.324px] pt-[18.098px] text-[11.517px] not-italic leading-[1.175] text-[#393939] outline-none ${errors.city ? 'ring-1 ring-[#d93025]' : ''}`}
                    data-node-id="312:1167"
                  >
                    <option value="">Ваше місто</option>
                    {MOBILE_UKRAINIAN_CITIES.map((cityName) => (
                      <option key={cityName} value={cityName}>
                        {cityName}
                      </option>
                    ))}
                  </select>
                  <MobileDropdownChevron nodeId="312:1168" src={ASSETS.dropdownArrowCity} />
                </div>
                <FieldError message={errors.city} />
              </div>

              <div className="relative h-[64.165px] w-[171.085px] shrink-0" data-node-id="312:1169">
                <label
                  htmlFor="mobile-order-branch"
                  className="font-helvetica-neue-cyr--roman absolute left-[14.787px] top-0 m-0 flex h-[14.807px] items-center text-[11.517px] not-italic leading-[1.175] text-[#2a2a2a] [word-break:break-word]"
                  data-node-id="312:1170"
                >
                  Нова Пошта (відділення)*
                </label>
                <div className="absolute left-0 top-[16.44px] h-[47.713px] w-[169.462px]" data-node-id="312:1171">
                  <select
                    id="mobile-order-branch"
                    value={branch}
                    onChange={(event) => {
                      setBranch(event.target.value);
                      if (errors.branch) setErrors((prev) => ({ ...prev, branch: undefined }));
                    }}
                    disabled={!city}
                    aria-invalid={Boolean(errors.branch)}
                    className={`mobile-order-field-select font-helvetica-neue-cyr--roman absolute inset-0 flex h-[47.713px] w-[169.462px] cursor-pointer appearance-none items-center rounded-[24.679px] border-0 bg-white pb-[17.275px] pl-[18.897px] pr-[26.324px] pt-[18.098px] text-[11.517px] not-italic leading-[1.175] text-[#393939] outline-none disabled:cursor-not-allowed disabled:opacity-60 ${errors.branch ? 'ring-1 ring-[#d93025]' : ''}`}
                    data-node-id="312:1174"
                  >
                    <option value="">№ Відділення</option>
                    {branches.map((branchName) => (
                      <option key={branchName} value={branchName}>
                        {branchName}
                      </option>
                    ))}
                  </select>
                  <MobileDropdownChevron nodeId="312:1173" src={ASSETS.dropdownArrowBranch} />
                </div>
                <FieldError message={errors.branch} />
              </div>
            </div>
          </div>

          {/* CTA — 312:1175 */}
          <button
            type="button"
            onClick={handleOrder}
            className="mobile-order-cta-btn flex h-[52.835px] w-full shrink-0 cursor-pointer items-center gap-[66.633px] rounded-[30.026px] border-0 bg-[#022ec9] pb-[10.694px] pl-[98.716px] pr-[16.453px] pt-[11.517px]"
            data-node-id="312:1175"
          >
            <span
              className="font-helvetica-neue-cyr--roman flex h-[12.339px] w-[148.896px] shrink-0 items-center justify-center text-center text-[14.807px] not-italic leading-normal text-white [word-break:break-word]"
              data-node-id="312:1176"
            >
              Замовити зараз
            </span>
            <span className="flex size-[25.405px] shrink-0 items-center justify-center" data-node-id="312:1177">
              <AssetImg
                src={ASSETS.ctaIcon}
                alt=""
                width={25.405}
                height={25.405}
                className="block max-w-none"
              />
            </span>
          </button>

          {/* Payment buttons — 312:1180 */}
          <div className="flex w-full shrink-0 items-center gap-[17.275px]" data-node-id="312:1180">
            <button
              type="button"
              onClick={handleApplePay}
              className="mobile-order-pay-btn flex h-[46.067px] w-[169.462px] shrink-0 cursor-pointer items-center justify-center rounded-[24.679px] border-0 bg-[#f3f3f3] py-[13.985px] pl-[58.407px] pr-[60.875px]"
              data-node-id="312:1181"
            >
              <span className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                <span
                  className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-[23.05px] mt-[3.29px] flex h-[14.807px] w-[27.147px] items-center text-[14.807px] not-italic leading-[1.02] text-black [word-break:break-word]"
                  data-node-id="312:1183"
                >
                  Pay
                </span>
                <span className="col-start-1 row-start-1 ml-0 mt-0 flex h-[17.275px] w-[14.555px] items-center justify-center" data-node-id="312:1184">
                  <AssetImg
                    src={ASSETS.applePayIcon}
                    alt=""
                    width={14.555}
                    height={17.275}
                    className="block max-w-none"
                  />
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={handleGooglePay}
              className="mobile-order-pay-btn flex h-[46.067px] w-[169.462px] shrink-0 cursor-pointer items-center justify-center rounded-[24.679px] border-0 bg-[#f3f3f3] pb-[13.985px] pl-[53.471px] pr-[57.584px] pt-[13.162px]"
              data-node-id="312:1185"
            >
              <span className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                <span
                  className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-[26.35px] mt-[4.11px] flex h-[13.985px] w-[32.083px] items-center text-[14.807px] not-italic leading-[1.02] text-black [word-break:break-word]"
                  data-node-id="312:1187"
                >
                  Pay
                </span>
                <span className="col-start-1 row-start-1 ml-0 mt-0 flex size-[18.921px] items-center justify-center" data-node-id="312:1188">
                  <AssetImg
                    src={ASSETS.googlePayIcon}
                    alt=""
                    width={18.921}
                    height={18.921}
                    className="block max-w-none"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Footer — 312:1193 */}
        <div
          className="flex w-[312.599px] shrink-0 items-start justify-between"
          data-node-id="312:1193"
        >
          <div className="flex shrink-0 items-center gap-[18.098px]" data-node-id="312:1194">
            <div className="relative h-[25.093px] w-[32.32px] shrink-0" data-node-id="312:1195" data-name="mastercard logo">
              <AssetImg
                src={ASSETS.mastercard}
                alt="Mastercard"
                className="absolute inset-0 block size-full max-w-none"
                width={32.32}
                height={25.093}
              />
            </div>
            <div className="relative h-[16.756px] w-[51.89px] shrink-0" data-node-id="312:1200" data-name="visa logo">
              <AssetImg
                src={ASSETS.visa}
                alt="Visa"
                className="absolute inset-0 block size-full max-w-none"
                width={51.89}
                height={16.756}
              />
            </div>
          </div>
          <p
            className="font-helvetica-neue-cyr--roman m-0 h-[26.324px] w-[180.156px] shrink-0 text-[#272727] not-italic leading-[0] [word-break:break-word]"
            data-node-id="312:1202"
          >
            <span className="text-[10.161px] leading-[1.175]">{`Натискаючи кнопку, ви погоджуєтесь з `}</span>
            <span className="text-[10.161px] leading-[1.175] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]">
              політикою конфіденційності
            </span>
          </p>
        </div>
      </div>
    </MobileScaleFrame>
  );
}
