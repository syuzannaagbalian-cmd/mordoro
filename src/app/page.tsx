import FaqFooterSection from '@/components/FaqFooterSection';
import HeroDesktop from '@/components/HeroDesktop';
import HeroMobile from '@/components/HeroMobile';
import MobileOrderSection from '@/components/MobileOrderSection';
import MobileStepsSection from '@/components/MobileStepsSection';
import MobileWhatsIncludedSection from '@/components/MobileWhatsIncludedSection';
import OrderSection from '@/components/OrderSection';
import SocialProofSection from '@/components/SocialProofSection';
import WhatsIncludedSection from '@/components/WhatsIncludedSection';

export default function Home() {
  return (
    <main className="site-main">
      <div className="site-layout site-layout--mobile">
        <HeroMobile />
        <MobileStepsSection />
        <MobileOrderSection />
        <MobileWhatsIncludedSection />
      </div>

      <div className="site-layout site-layout--desktop bg-[#e1e0e7]">
        <HeroDesktop />
        <OrderSection />
        <WhatsIncludedSection />
        <SocialProofSection />
        <FaqFooterSection />
      </div>
    </main>
  );
}
