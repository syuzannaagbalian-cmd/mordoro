'use client';

import { useEffect, useState } from 'react';
import MobileFluidSection from '@/components/MobileFluidSection';
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
      className="pointer-events-none absolute right-[calc(26.324*var(--mf))] top-1/2 flex h-[calc(0.823*var(--mf))] w-0 -translate-y-1/2 items-center justify-center"
      aria-hidden
    >
      <div className="flex-none rotate-90">
        <div className="relative h-0 w-[calc(0.823*var(--mf))]" data-node-id={nodeId}>
          <div className="absolute inset-[calc(-4.54*var(--mf))_-75%_calc(-4.54*var(--mf))_-452.3%]">
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
    <p className="mobile-order-error font-helvetica-neue-cyr--roman absolute left-0 top-[calc(64.17*var(--mf))] m-0 h-[calc(11*var(--mf))] text-[calc(9*var(--mf))] not-italic leading-[1.175] text-[#d93025]">
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
    <MobileFluidSection
      as="section"
      id="mobile-order-section"
      designHeight={891}
      data-node-id="312:1129"
      data-name="блок 3"
      aria-label="Morldoro mobile order"
      canvasClassName="relative overflow-hidden bg-[#e1e0e7]"
    >
      {/* Product image — 312:1130 */}
      <div
        className="pointer-events-none absolute left-[calc(-248*var(--mf))] top-[calc(8*var(--mf))] h-[calc(364*var(--mf))] w-[calc(781*var(--mf))]"
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
        className="absolute left-[calc(212*var(--mf))] top-[calc(46*var(--mf))] flex w-[calc(161*var(--mf))] flex-col items-center gap-[calc(16*var(--mf))]"
        data-node-id="312:1132"
      >
        {/* Discount badge — 312:1133 */}
        <div
          className="flex h-[calc(27.961*var(--mf))] w-full shrink-0 items-center justify-center gap-[calc(7.767*var(--mf))] rounded-[calc(14.757*var(--mf))] border-[calc(0.777*var(--mf))] border-solid border-[#022ec9] px-[calc(24.854*var(--mf))] pb-[calc(8.544*var(--mf))] pt-[calc(7.767*var(--mf))]"
          data-node-id="312:1133"
          data-name="discount"
        >
          <div className="relative h-[calc(11.653*var(--mf))] w-[calc(10.01*var(--mf))] shrink-0" data-node-id="312:1134">
            <AssetImg
              src={ASSETS.discountIcon}
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              width={10.01}
              height={11.653}
            />
          </div>
          <p
            className="font-helvetica-neue-cyr--roman m-0 flex h-[calc(6.99*var(--mf))] w-[calc(92.427*var(--mf))] shrink-0 items-center text-[calc(9.32*var(--mf))] not-italic uppercase leading-[0] text-[#13151a] [word-break:break-word]"
            data-node-id="312:1137"
          >
            <span className="leading-normal">{`Знижка `}</span>
            <span className="leading-normal text-[#022ec9]">{`сьогодні `}</span>
          </p>
        </div>

        {/* Price block — 312:1138 */}
        <div className="flex w-full shrink-0 flex-col items-start gap-[calc(7.156*var(--mf))] [word-break:break-word]" data-node-id="312:1138">
          <div
            className="font-sf-pro--medium flex w-full shrink-0 items-end leading-[1.02] text-black"
            data-node-id="312:1139"
            data-name="new price"
          >
            <p
              className="m-0 h-[calc(67.978*var(--mf))] w-[calc(99.283*var(--mf))] shrink-0 text-[calc(69.316*var(--mf))]"
              style={SF_VARIATION}
              data-node-id="312:1140"
            >
              99
            </p>
            <p
              className="m-0 h-[calc(37.567*var(--mf))] w-[calc(61.717*var(--mf))] shrink-0 text-[calc(35.503*var(--mf))] tracking-[calc(-0.7101*var(--mf))]"
              style={SF_VARIATION}
              data-node-id="312:1141"
            >
              грн
            </p>
          </div>
          <p
            className="font-helvetica-neue-cyr--light m-0 h-[calc(33.381*var(--mf))] w-full shrink-0 text-center text-[#636363] not-italic leading-[0] [word-break:break-word]"
            data-node-id="312:1142"
          >
            <span className="text-[calc(34.201*var(--mf))] leading-[1.02] line-through decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]">{`139 `}</span>
            <span className="text-[calc(31.052*var(--mf))] leading-[1.02]">грн</span>
          </p>
        </div>

        {/* Quantity — 312:1143 */}
        <div className="flex shrink-0 flex-col items-center gap-[calc(16*var(--mf))]" data-node-id="312:1143">
          <div className="relative h-[calc(42.698*var(--mf))] w-[calc(125*var(--mf))] shrink-0" data-node-id="312:1144" data-name="quantity">
            <div
              className="absolute inset-0 rounded-[calc(21.349*var(--mf))] border-[calc(0.619*var(--mf))] border-solid border-[#c1c5d1] bg-[rgba(255,255,255,0.46)]"
              data-node-id="312:1145"
            />
            <p
              className="font-idealist-sans absolute left-[calc(53.356*var(--mf))] top-[calc(11.943*var(--mf))] m-0 flex h-[calc(19.901*var(--mf))] w-[calc(8.624*var(--mf))] items-center justify-center text-[calc(21.228*var(--mf))] not-italic leading-[1.02] text-[#323232]"
              data-node-id="312:1146"
            >
              {quantity}
            </p>
            <button
              type="button"
              className="mobile-order-qty-btn absolute left-[calc(97.138*var(--mf))] top-[calc(16.591*var(--mf))] size-[calc(12.604*var(--mf))] cursor-pointer border-0 bg-transparent p-0"
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
              className="mobile-order-qty-btn absolute left-[calc(6.921*var(--mf))] top-[calc(23.219*var(--mf))] h-0 w-[calc(12.604*var(--mf))] cursor-pointer border-0 bg-transparent p-0"
              onClick={decreaseQuantity}
              aria-label="Зменшити кількість"
              data-node-id="312:1148"
            >
              <div className="absolute inset-[calc(-1.33*var(--mf))_0_0_0]">
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
            className="font-helvetica-neue-cyr--roman m-0 flex h-[calc(11*var(--mf))] w-[calc(114*var(--mf))] shrink-0 items-center justify-center text-center text-[calc(12*var(--mf))] not-italic leading-[1.175] text-[#676767] [word-break:break-word]"
            data-node-id="312:1149"
          >
            Собі й товаришу!
          </p>
        </div>
      </div>

      {/* Order form — 312:1150 */}
      <div
        className="absolute left-[calc(16*var(--mf))] top-[calc(331.96*var(--mf))] flex w-[calc(357*var(--mf))] flex-col items-center gap-[calc(19.743*var(--mf))]"
        data-node-id="312:1150"
      >
        <div className="flex w-full shrink-0 flex-col items-start gap-[calc(28.45*var(--mf))]" data-node-id="312:1151">
          <div className="flex w-full shrink-0 flex-col items-start gap-[calc(25.402*var(--mf))]" data-node-id="312:1152">
            {/* Name — 312:1153 */}
            <div className="relative h-[calc(64.165*var(--mf))] w-full shrink-0" data-node-id="312:1153">
              <label
                htmlFor="mobile-order-name"
                className="font-helvetica-neue-cyr--roman absolute left-[calc(19.722*var(--mf))] top-0 m-0 flex h-[calc(14.807*var(--mf))] items-center text-[calc(11.517*var(--mf))] not-italic leading-[1.175] text-[#2a2a2a] [word-break:break-word]"
                data-node-id="312:1154"
              >
                Ім&apos;я*
              </label>
              <div className="absolute left-0 top-[calc(16.46*var(--mf))] h-[calc(47.713*var(--mf))] w-[calc(356.199*var(--mf))]" data-node-id="312:1155">
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
                  className={`mobile-order-field-input font-helvetica-neue-cyr--roman absolute inset-0 flex h-[calc(47.713*var(--mf))] w-[calc(356.199*var(--mf))] items-center rounded-[calc(24.679*var(--mf))] border-0 bg-white pl-[calc(18.898*var(--mf))] pr-[calc(18.898*var(--mf))] text-[calc(11.517*var(--mf))] not-italic leading-[1.175] text-[#393939] outline-none ${errors.name ? 'ring-1 ring-[#d93025]' : ''}`}
                  data-node-id="312:1156"
                />
              </div>
              <FieldError message={errors.name} />
            </div>

            {/* Phone — 312:1158 */}
            <div className="relative h-[calc(64.165*var(--mf))] w-full shrink-0" data-node-id="312:1158">
              <label
                htmlFor="mobile-order-phone"
                className="font-helvetica-neue-cyr--roman absolute left-[calc(20.544*var(--mf))] top-0 m-0 flex h-[calc(14.807*var(--mf))] items-center text-[calc(11.517*var(--mf))] not-italic leading-[1.175] text-[#2a2a2a] [word-break:break-word]"
                data-node-id="312:1159"
              >
                Телефон*
              </label>
              <div className="absolute left-0 top-[calc(16.46*var(--mf))] h-[calc(47.713*var(--mf))] w-[calc(356.199*var(--mf))]" data-node-id="312:1160">
                <input
                  id="mobile-order-phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  aria-invalid={Boolean(errors.phone)}
                  className={`mobile-order-field-input font-helvetica-neue-cyr--roman absolute inset-0 flex h-[calc(47.713*var(--mf))] w-[calc(356.199*var(--mf))] items-center rounded-[calc(24.679*var(--mf))] border-0 bg-white pl-[calc(22.191*var(--mf))] pr-[calc(18.898*var(--mf))] text-[calc(11.517*var(--mf))] not-italic leading-[1.175] text-[#393939] outline-none ${errors.phone ? 'ring-1 ring-[#d93025]' : ''}`}
                  data-node-id="312:1161"
                />
              </div>
              <FieldError message={errors.phone} />
            </div>

            {/* City + branch — 312:1163 */}
            <div className="flex w-full shrink-0 items-center gap-[calc(16.453*var(--mf))]" data-node-id="312:1163">
              <div className="relative h-[calc(64.165*var(--mf))] w-[calc(169.462*var(--mf))] shrink-0" data-node-id="312:1164">
                <label
                  htmlFor="mobile-order-city"
                  className="font-helvetica-neue-cyr--roman absolute left-[calc(18.898*var(--mf))] top-0 m-0 flex h-[calc(14.807*var(--mf))] items-center text-[calc(11.517*var(--mf))] not-italic leading-[1.175] text-[#2a2a2a] [word-break:break-word]"
                  data-node-id="312:1165"
                >
                  Місто*
                </label>
                <div className="absolute left-0 top-[calc(16.44*var(--mf))] h-[calc(47.713*var(--mf))] w-[calc(169.462*var(--mf))]" data-node-id="312:1166">
                  <select
                    id="mobile-order-city"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                      if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                    }}
                    aria-invalid={Boolean(errors.city)}
                    className={`mobile-order-field-select font-helvetica-neue-cyr--roman absolute inset-0 flex h-[calc(47.713*var(--mf))] w-[calc(169.462*var(--mf))] cursor-pointer appearance-none items-center rounded-[calc(24.679*var(--mf))] border-0 bg-white pb-[calc(17.275*var(--mf))] pl-[calc(18.921*var(--mf))] pr-[calc(26.324*var(--mf))] pt-[calc(18.098*var(--mf))] text-[calc(11.517*var(--mf))] not-italic leading-[1.175] text-[#393939] outline-none ${errors.city ? 'ring-1 ring-[#d93025]' : ''}`}
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

              <div className="relative h-[calc(64.165*var(--mf))] w-[calc(171.085*var(--mf))] shrink-0" data-node-id="312:1169">
                <label
                  htmlFor="mobile-order-branch"
                  className="font-helvetica-neue-cyr--roman absolute left-[calc(14.787*var(--mf))] top-0 m-0 flex h-[calc(14.807*var(--mf))] items-center text-[calc(11.517*var(--mf))] not-italic leading-[1.175] text-[#2a2a2a] [word-break:break-word]"
                  data-node-id="312:1170"
                >
                  Нова Пошта (відділення)*
                </label>
                <div className="absolute left-0 top-[calc(16.44*var(--mf))] h-[calc(47.713*var(--mf))] w-[calc(169.462*var(--mf))]" data-node-id="312:1171">
                  <select
                    id="mobile-order-branch"
                    value={branch}
                    onChange={(event) => {
                      setBranch(event.target.value);
                      if (errors.branch) setErrors((prev) => ({ ...prev, branch: undefined }));
                    }}
                    disabled={!city}
                    aria-invalid={Boolean(errors.branch)}
                    className={`mobile-order-field-select font-helvetica-neue-cyr--roman absolute inset-0 flex h-[calc(47.713*var(--mf))] w-[calc(169.462*var(--mf))] cursor-pointer appearance-none items-center rounded-[calc(24.679*var(--mf))] border-0 bg-white pb-[calc(17.275*var(--mf))] pl-[calc(18.897*var(--mf))] pr-[calc(26.324*var(--mf))] pt-[calc(18.098*var(--mf))] text-[calc(11.517*var(--mf))] not-italic leading-[1.175] text-[#393939] outline-none disabled:cursor-not-allowed disabled:opacity-60 ${errors.branch ? 'ring-1 ring-[#d93025]' : ''}`}
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
            className="mobile-order-cta-btn flex h-[calc(52.835*var(--mf))] w-full shrink-0 cursor-pointer items-center gap-[calc(66.633*var(--mf))] rounded-[calc(30.026*var(--mf))] border-0 bg-[#022ec9] pb-[calc(10.694*var(--mf))] pl-[calc(98.716*var(--mf))] pr-[calc(16.453*var(--mf))] pt-[calc(11.517*var(--mf))]"
            data-node-id="312:1175"
          >
            <span
              className="font-helvetica-neue-cyr--roman flex h-[calc(12.339*var(--mf))] w-[calc(148.896*var(--mf))] shrink-0 items-center justify-center text-center text-[calc(14.807*var(--mf))] not-italic leading-normal text-white [word-break:break-word]"
              data-node-id="312:1176"
            >
              Замовити зараз
            </span>
            <span className="flex size-[calc(25.405*var(--mf))] shrink-0 items-center justify-center" data-node-id="312:1177">
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
          <div className="flex w-full shrink-0 items-center gap-[calc(17.275*var(--mf))]" data-node-id="312:1180">
            <button
              type="button"
              onClick={handleApplePay}
              className="mobile-order-pay-btn flex h-[calc(46.067*var(--mf))] w-[calc(169.462*var(--mf))] shrink-0 cursor-pointer items-center justify-center rounded-[calc(24.679*var(--mf))] border-0 bg-[#f3f3f3] py-[calc(13.985*var(--mf))] pl-[calc(58.407*var(--mf))] pr-[calc(60.875*var(--mf))]"
              data-node-id="312:1181"
            >
              <span className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                <span
                  className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-[calc(23.05*var(--mf))] mt-[calc(3.29*var(--mf))] flex h-[calc(14.807*var(--mf))] w-[calc(27.147*var(--mf))] items-center text-[calc(14.807*var(--mf))] not-italic leading-[1.02] text-black [word-break:break-word]"
                  data-node-id="312:1183"
                >
                  Pay
                </span>
                <span className="col-start-1 row-start-1 ml-0 mt-0 flex h-[calc(17.275*var(--mf))] w-[calc(14.555*var(--mf))] items-center justify-center" data-node-id="312:1184">
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
              className="mobile-order-pay-btn flex h-[calc(46.067*var(--mf))] w-[calc(169.462*var(--mf))] shrink-0 cursor-pointer items-center justify-center rounded-[calc(24.679*var(--mf))] border-0 bg-[#f3f3f3] pb-[calc(13.985*var(--mf))] pl-[calc(53.471*var(--mf))] pr-[calc(57.584*var(--mf))] pt-[calc(13.162*var(--mf))]"
              data-node-id="312:1185"
            >
              <span className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]">
                <span
                  className="font-helvetica-neue-cyr--roman col-start-1 row-start-1 ml-[calc(26.35*var(--mf))] mt-[calc(4.11*var(--mf))] flex h-[calc(13.985*var(--mf))] w-[calc(32.083*var(--mf))] items-center text-[calc(14.807*var(--mf))] not-italic leading-[1.02] text-black [word-break:break-word]"
                  data-node-id="312:1187"
                >
                  Pay
                </span>
                <span className="col-start-1 row-start-1 ml-0 mt-0 flex size-[calc(18.921*var(--mf))] items-center justify-center" data-node-id="312:1188">
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
          className="flex w-[calc(312.599*var(--mf))] shrink-0 items-start justify-between"
          data-node-id="312:1193"
        >
          <div className="flex shrink-0 items-center gap-[calc(18.098*var(--mf))]" data-node-id="312:1194">
            <div className="relative h-[calc(25.093*var(--mf))] w-[calc(32.32*var(--mf))] shrink-0" data-node-id="312:1195" data-name="mastercard logo">
              <AssetImg
                src={ASSETS.mastercard}
                alt="Mastercard"
                className="absolute inset-0 block size-full max-w-none"
                width={32.32}
                height={25.093}
              />
            </div>
            <div className="relative h-[calc(16.756*var(--mf))] w-[calc(51.89*var(--mf))] shrink-0" data-node-id="312:1200" data-name="visa logo">
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
            className="font-helvetica-neue-cyr--roman m-0 h-[calc(26.324*var(--mf))] w-[calc(180.156*var(--mf))] shrink-0 text-[#272727] not-italic leading-[0] [word-break:break-word]"
            data-node-id="312:1202"
          >
            <span className="text-[calc(10.161*var(--mf))] leading-[1.175]">{`Натискаючи кнопку, ви погоджуєтесь з `}</span>
            <span className="text-[calc(10.161*var(--mf))] leading-[1.175] underline decoration-solid decoration-from-font [text-decoration-skip-ink:none] [text-underline-position:from-font]">
              політикою конфіденційності
            </span>
          </p>
        </div>
      </div>
    </MobileFluidSection>
  );
}
