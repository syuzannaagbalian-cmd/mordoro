'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useCallback, useId, useState } from 'react';
import { LEGAL_LINK_PROPS, OFFER_AGREEMENT_URL, PRIVACY_POLICY_URL } from '@/constants/legalLinks';
import './mobile-block6.css';

const ASSETS = {
  bubble: '/assets/mobile-block6-bubble.png',
  arrow: '/assets/mobile-block6-arrow.svg',
  divider: '/assets/mobile-block6-divider.svg',
  logo: '/assets/mobile-block6-logo.svg',
  socialIcons: '/assets/mobile-block6-social-icons.svg',
  supportIcon: '/assets/mobile-block6-support-icon.svg',
} as const;

const SF_VARIATION = { fontVariationSettings: '"wdth" 100' } as const;

const BUBBLE_IMAGE_LARGE =
  'absolute h-[485.92%] left-[-2.05%] top-[-224.22%] w-[470.99%] max-w-none';
const BUBBLE_IMAGE_SMALL =
  'absolute h-[620.6%] left-[-457.54%] top-[-297.35%] w-[612.45%] max-w-none';

const FAQ_ITEMS = [
  {
    id: 'shipping',
    nodeIds: { wrapper: '312:1427', row: '312:1428', question: '312:1429', arrow: '312:1430', divider: '312:1431' },
    rowAlign: 'items-center',
    question: 'Як швидко відправляєте замовлення?',
    questionWidth: 'w-[272px]',
    answer: 'Зазвичай доставка по Україні займає всього 1–3 робочі дні.',
  },
  {
    id: 'safety',
    nodeIds: { wrapper: '312:1432', row: '312:1433', question: '312:1435', arrow: '312:1436', divider: '312:1437' },
    rowAlign: 'items-start',
    question: 'Продукт безпечний?',
    questionWidth: 'w-[272px]',
    answer:
      'Так. Це безпечна іграшка-антистрес, призначена суто для розваг, релаксу та зняття стресу.',
  },
  {
    id: 'age',
    nodeIds: { wrapper: '312:1438', row: '312:1439', question: '312:1440', arrow: '312:1441', divider: '312:1442' },
    rowAlign: 'items-center',
    question: 'На який вік розрахований продукт?',
    questionWidth: 'w-[270px]',
    answer:
      'Рекомендується для підлітків та дорослих. Не призначено для дітей молодшого віку без нагляду дорослих.',
  },
  {
    id: 'returns',
    nodeIds: { wrapper: '312:1443', row: '312:1444', question: '312:1445', arrow: '312:1446', divider: '312:1447' },
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
  if (width != null && height != null) {
    return <img alt={alt} className={className} src={src} width={width} height={height} />;
  }
  return <img alt={alt} className={className} src={src} />;
}

function FaqDivider({ nodeId }: { nodeId: string }) {
  return (
    <div className="relative h-0 w-full shrink-0" data-node-id={nodeId}>
      <div className="absolute inset-[-0.7px_0_0_0]">
        <AssetImg src={ASSETS.divider} alt="" className="block size-full max-w-none" />
      </div>
    </div>
  );
}

export default function MobileFaqFooterSection() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <section
      className="mobile-block6-root mobile-section-fluid relative min-h-[924px] w-full bg-gradient-to-b from-[#e1e0e7] to-[#e8d1f2]"
      data-node-id="312:1424"
      data-name="блок 6"
      aria-label="FAQ and footer"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-[-29px] top-[359px] h-[225px] w-[239.817px]" data-node-id="312:1467">
          <div
            className="absolute left-0 top-0 h-[187.134px] w-[194.817px] rounded-[454.665px] blur-[1.207px]"
            data-node-id="312:1468"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[454.665px] opacity-70">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_LARGE} />
            </div>
          </div>
          <div
            className="absolute left-[143.78px] top-[195.97px] h-[29.034px] w-[29.687px] rounded-[454.665px]"
            data-node-id="312:1469"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[454.665px] opacity-60">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_SMALL} />
            </div>
          </div>
          <div
            className="absolute left-[171.85px] top-[145.43px] h-[66.478px] w-[67.972px] rounded-[454.665px]"
            data-node-id="312:1470"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[454.665px] opacity-80">
              <AssetImg src={ASSETS.bubble} alt="" className={BUBBLE_IMAGE_SMALL} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 box-border px-[16px] pt-[66px]" data-node-id="312:1466">
        <p
          className="font-sf-pro--medium m-0 flex h-[78px] w-full items-center text-[80px] font-[510] uppercase leading-[1.08] text-black [word-break:break-word]"
          style={SF_VARIATION}
          data-node-id="312:1425"
        >
          faq
        </p>

        <div
          className="mt-[58px] flex w-full flex-col gap-[20px]"
          data-node-id="312:1465"
        >
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-${item.id}-panel`;
            const buttonId = `${baseId}-${item.id}-button`;

            return (
              <div
                key={item.id}
                className="flex w-full flex-col gap-[26px]"
                data-node-id={item.nodeIds.wrapper}
              >
                <div>
                  <button
                    id={buttonId}
                    type="button"
                    className={`mobile-block6-trigger flex w-full ${item.rowAlign} justify-between border-0 bg-transparent p-0 text-left`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    data-node-id={item.nodeIds.row}
                  >
                    <span
                      className="font-sf-pro--regular m-0 min-h-[23px] min-w-0 flex-1 text-[14px] font-normal leading-[1.02] tracking-[-0.56px] text-black [word-break:break-word]"
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
                        className={`mobile-block6-arrow mobile-block6-icon absolute inset-0 block size-full max-w-none ${isOpen ? 'mobile-block6-arrow--open' : ''}`}
                      />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`mobile-block6-answer-grid w-full ${isOpen ? 'mobile-block6-answer-grid--open' : ''}`}
                  >
                    <p
                      className="font-sf-pro--regular m-0 text-[14px] font-normal leading-[1.02] tracking-[-0.56px] text-black [word-break:break-word]"
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

      <footer
        className="relative z-10 mx-auto mt-[143px] flex w-[208px] max-w-full flex-col items-center gap-[44px] pb-[66px]"
        data-node-id="312:1448"
      >
        <Link
          href="/"
          className="relative block h-[40.051px] w-[153.079px] shrink-0"
          data-node-id="312:1449"
          aria-label="Morldoro"
        >
          <AssetImg
            src={ASSETS.logo}
            alt="Morldoro"
            width={153.079}
            height={40.051}
            className="mobile-block6-icon absolute inset-0 block size-full max-w-none object-contain"
          />
        </Link>

        <div className="flex w-full flex-col items-center gap-[22px]" data-node-id="312:1450">
          <div className="relative h-[26px] w-[78px] shrink-0" data-node-id="312:1451">
            <AssetImg
              src={ASSETS.socialIcons}
              alt=""
              width={78}
              height={26}
              className="mobile-block6-icon pointer-events-none absolute inset-0 block size-full max-w-none object-contain"
            />
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-0 top-0 h-full w-[20px]"
              aria-label="TikTok"
              data-node-id="312:1452"
            />
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-[52px] top-0 h-full w-[26px]"
              aria-label="Instagram"
              data-node-id="312:1453"
            />
          </div>

          <nav
            className="font-helvetica-neue-cyr--roman flex w-full flex-col items-center gap-[32px] text-center text-[14px] not-italic leading-normal text-black"
            data-node-id="312:1454"
            aria-label="Legal links"
          >
            <a
              href={PRIVACY_POLICY_URL}
              {...LEGAL_LINK_PROPS}
              className="mobile-block6-footer-link h-[15px] w-[208px] shrink-0 underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
              data-node-id="312:1456"
            >
              Політика конфіденційності
            </a>
            <a
              href={OFFER_AGREEMENT_URL}
              {...LEGAL_LINK_PROPS}
              className="mobile-block6-footer-link h-[14px] shrink-0 whitespace-nowrap underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]"
              data-node-id="312:1457"
            >
              Договір оферти
            </a>
          </nav>

          <a
            href="/support"
            className="mobile-block6-support-link flex h-[19px] shrink-0 items-center gap-[14px]"
            data-node-id="312:1458"
          >
            <span
              className="font-helvetica-neue-cyr--roman h-[14.4px] w-[98px] text-center text-[16px] not-italic leading-[1.1] text-[#1e3ed7]"
              data-node-id="312:1461"
            >
              Підтримка
            </span>
            <span className="relative size-[19px]" data-node-id="312:1463">
              <AssetImg
                src={ASSETS.supportIcon}
                alt=""
                width={19}
                height={19}
                className="mobile-block6-icon absolute inset-0 block size-full max-w-none object-contain"
              />
            </span>
          </a>
        </div>
      </footer>
    </section>
  );
}
