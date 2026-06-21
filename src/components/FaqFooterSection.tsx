'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useCallback, useId, useState } from 'react';

const ASSETS = {
  bubble: '/assets/faq-bubble.png',
  bgEllipse: '/assets/faq-bg-ellipse.svg',
  arrow: '/assets/faq-arrow.svg',
  divider: '/assets/faq-divider.svg',
  logo: '/assets/faq-logo.svg',
  socialIcons: '/assets/faq-social-icons.svg',
  supportIcon: '/assets/faq-support-icon.svg',
} as const;

const SF_VARIATION = { fontVariationSettings: '"wdth" 100' } as const;

const BUBBLE_IMAGE_LARGE =
  'absolute h-[485.92%] left-[-2.05%] top-[-224.22%] w-[470.99%] max-w-none';
const BUBBLE_IMAGE_SMALL =
  'absolute h-[620.6%] left-[-457.54%] top-[-297.35%] w-[612.45%] max-w-none';

const FAQ_ITEMS = [
  {
    id: 'shipping',
    nodeIds: { wrapper: '284:301', row: '284:302', question: '284:303', arrow: '284:304', divider: '284:305' },
    rowGap: 'gap-[31px]',
    rowAlign: 'items-center',
    question: 'Як швидко відправляється замовлення?',
    questionWidth: 'w-[439px]',
    answer: 'Зазвичай доставка по Україні займає всього 1–3 робочі дні.',
  },
  {
    id: 'safety',
    nodeIds: { wrapper: '284:306', row: '284:307', question: '284:308', arrow: '284:309', divider: '284:310' },
    rowGap: 'gap-[28px]',
    rowAlign: 'items-center',
    question: 'Продукт безпечний?',
    questionWidth: 'w-[439px]',
    answer:
      'Так. Це безпечна іграшка-антистрес, призначена суто для розваг, релаксу та зняття стресу.',
  },
  {
    id: 'age',
    nodeIds: { wrapper: '284:311', row: '284:312', question: '284:313', arrow: '284:314', divider: '284:315' },
    rowGap: 'gap-[31px]',
    rowAlign: 'items-center',
    question: 'На який вік розраховано?',
    questionWidth: 'w-[270px]',
    answer:
      'Рекомендується для підлітків та дорослих. Не призначено для дітей молодшого віку без нагляду дорослих.',
  },
  {
    id: 'returns',
    nodeIds: { wrapper: '284:316', row: '284:317', question: '284:318', arrow: '284:319', divider: '284:320' },
    rowGap: 'gap-[33px]',
    rowAlign: 'items-end',
    question: 'Чи є повернення / обмін?',
    questionWidth: 'w-[270px]',
    answer:
      "Зв'яжіться з нами протягом 24 годин після отримання, і ми допоможемо вирішити вашу проблему.",
  },
] as const;

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
  if (width && height) {
    return <img alt={alt} className={className} src={src} width={width} height={height} />;
  }
  return <img alt={alt} className={className} src={src} />;
}

function FaqDivider({ nodeId }: { nodeId: string }) {
  return (
    <div className="relative h-0 w-full shrink-0" data-node-id={nodeId}>
      <div className="absolute inset-[-1px_0_0_0]">
        <AssetImg src={ASSETS.divider} alt="" className="block size-full max-w-none" />
      </div>
    </div>
  );
}

export default function FaqFooterSection() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <section
      className="desktop-block desktop-block--faq relative mx-auto overflow-x-clip bg-[#e1e0e7]"
      data-node-id="284:272"
      aria-label="FAQ and footer"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute bottom-[-287px] left-[-473px] h-[966px] w-[2294px]" data-node-id="284:292">
          <div className="absolute inset-[-15.53%_-6.54%]">
            <AssetImg src={ASSETS.bgEllipse} alt="" className="block size-full max-w-none object-contain" />
          </div>
        </div>

        <div
          className="absolute left-[-96px] top-[76px] h-[341px] w-[355px] rounded-[828.5px] blur-[2.2px]"
          data-node-id="284:294"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[828.5px] opacity-70">
            <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_LARGE} />
          </div>
        </div>
        <div
          className="absolute left-[166px] top-[433px] h-[53px] w-[54px] rounded-[828.5px]"
          data-node-id="284:295"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[828.5px] opacity-60">
            <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_SMALL} />
          </div>
        </div>
        <div
          className="absolute left-[217px] top-[341px] h-[121px] w-[124px] rounded-[828.5px]"
          data-node-id="284:296"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[828.5px] opacity-80">
            <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_SMALL} />
          </div>
        </div>
      </div>

      <div
        className="desktop-block-faq-inner relative z-10 box-border pl-[73.4453125px] pr-[93.4756875px]"
        data-node-id="284:297"
      >
        <div className="desktop-block-faq-stack flex w-[1273.079px] flex-col">
          <div
            className="relative ml-[14.5943603515625px] inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start leading-[0]"
            data-node-id="284:298"
          >
            <p
              className="font-sf-pro--regular col-start-1 row-start-1 ml-[14.5943603515625px] mt-0 h-[152px] w-[360px] text-[161.739px] uppercase leading-[1.08] text-black"
              style={SF_VARIATION}
              data-node-id="284:299"
            >
              faq
            </p>

            <div
              className="col-start-1 row-start-1 ml-[435.0787353515625px] mt-[22px] flex w-[838px] flex-col gap-[28px]"
              data-node-id="284:300"
            >
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `${baseId}-${item.id}-panel`;
                const buttonId = `${baseId}-${item.id}-button`;

                return (
                  <div
                    key={item.id}
                    className={`flex w-full flex-col ${item.rowGap}`}
                    data-node-id={item.nodeIds.wrapper}
                  >
                    <div>
                      <button
                        id={buttonId}
                        type="button"
                        className={`faq-trigger flex w-[817px] ${item.rowAlign} cursor-pointer justify-between border-0 bg-transparent p-0 text-left`}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(item.id)}
                        data-node-id={item.nodeIds.row}
                      >
                        <span
                          className={`font-sf-pro--regular h-[23px] shrink-0 ${item.questionWidth} text-[18px] font-normal leading-[1.02] tracking-[-0.72px] text-black`}
                          style={SF_VARIATION}
                          data-node-id={item.nodeIds.question}
                        >
                          {item.question}
                        </span>
                        <span className="relative h-[15.005px] w-[15.7px] shrink-0" data-node-id={item.nodeIds.arrow}>
                          <AssetImg
                            src={ASSETS.arrow}
                            alt=""
                            width={15.7}
                            height={15.005}
                            className={`faq-arrow absolute inset-0 block size-full max-w-none transition-transform duration-[350ms] ease-in-out ${isOpen ? 'scale-y-[-1]' : ''}`}
                          />
                        </span>
                      </button>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={`faq-answer-grid w-[817px] ${isOpen ? 'faq-answer-grid--open' : ''}`}
                      >
                        <p
                          className="font-sf-pro--light overflow-hidden text-[18px] leading-[1.02] tracking-[-0.72px] text-black"
                          style={SF_VARIATION}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>

                    <FaqDivider nodeId={item.nodeIds.divider} />
                  </div>
                );
              })}
            </div>
          </div>

          <footer className="flex w-full shrink-0 items-center gap-[95px]" data-node-id="284:321">
            <Link
              href="/"
              className="relative block h-[40.051px] w-[153.079px] shrink-0"
              data-node-id="284:322"
              aria-label="Morldoro"
            >
              <AssetImg
                src={ASSETS.logo}
                alt="Morldoro"
                width={153.079}
                height={40.0515}
                className="faq-icon absolute inset-0 block size-full max-w-none object-contain"
              />
            </Link>

            <div className="relative h-[26px] w-[78px] shrink-0" data-node-id="284:323">
              <AssetImg
                src={ASSETS.socialIcons}
                alt=""
                width={78}
                height={26}
                className="faq-icon pointer-events-none absolute inset-0 block size-full max-w-none object-contain"
              />
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-0 top-0 h-full w-[20px]"
                aria-label="TikTok"
                data-node-id="284:324"
              />
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-[52px] top-0 h-full w-[26px]"
                aria-label="Instagram"
                data-node-id="284:325"
              />
            </div>

            <nav
              className="font-helvetica-neue-cyr--roman flex shrink-0 items-start gap-[70px] text-[16px] not-italic leading-normal text-black"
              data-node-id="284:326"
              aria-label="Legal links"
            >
              <a
                href="/delivery-payment"
                className="faq-footer-link h-[15px] w-[159px] shrink-0 underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                data-node-id="284:327"
              >
                Доставка та оплата
              </a>
              <a
                href="/privacy-policy"
                className="faq-footer-link h-[15px] w-[208px] shrink-0 underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                data-node-id="284:328"
              >
                Політика конфіденційності
              </a>
              <a
                href="/offer-agreement"
                className="faq-footer-link h-[16px] shrink-0 whitespace-nowrap underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
                data-node-id="284:329"
              >
                Договір оферти
              </a>
            </nav>

            <a
              href="/support"
              className="faq-support-link flex h-[19px] shrink-0 items-center gap-[14px]"
              data-node-id="284:330"
            >
              <span
                className="font-helvetica-neue-cyr--roman h-[14.4px] w-[98px] text-center text-[16px] not-italic leading-[1.1] text-[#1e3ed7]"
                data-node-id="284:333"
              >
                Підтримка
              </span>
              <span className="relative size-[19px]" data-node-id="284:335">
                <AssetImg
                  src={ASSETS.supportIcon}
                  alt=""
                  width={19}
                  height={19}
                  className="faq-icon absolute inset-0 block size-full max-w-none object-contain"
                />
              </span>
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
}
