import Navigation from '../components/dc/Navigation';
import HeroSection from '../components/dc/HeroSection';
import TrustStrip from '../components/dc/TrustStrip';
import IntroSection from '../components/dc/IntroSection';
import SystemStackSection from '../components/dc/SystemStackSection';
import CurrentStackSection from '../components/dc/CurrentStackSection';
import ProcessSection from '../components/dc/ProcessSection';
import OpenClawSection from '../components/dc/OpenClawSection';
import PortalShowcaseSection from '../components/dc/PortalShowcaseSection';
import MetricsSection from '../components/dc/MetricsSection';
import CaseStudiesSection from '../components/dc/CaseStudiesSection';
import RoiCalculatorSection from '../components/dc/RoiCalculatorSection';
import PricingSection from '../components/dc/PricingSection';
import FAQSection from '../components/dc/FAQSection';
import FinalCTASection from '../components/dc/FinalCTASection';
import Footer from '../components/dc/Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#06080F', color: '#F0EEE8', minHeight: '100vh' }}>
      <Navigation />
      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <SystemStackSection />
      <CurrentStackSection />
      <ProcessSection />
      <PortalShowcaseSection />
      <OpenClawSection />
      <MetricsSection />
      <CaseStudiesSection />
      <RoiCalculatorSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}