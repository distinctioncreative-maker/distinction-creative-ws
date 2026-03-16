import Navigation from '../components/dc/Navigation';
import HeroSection from '../components/dc/HeroSection';
import TrustStrip from '../components/dc/TrustStrip';
import IntroSection from '../components/dc/IntroSection';
import SystemStackSection from '../components/dc/SystemStackSection';
import CurrentStackSection from '../components/dc/CurrentStackSection';
import ProcessSection from '../components/dc/ProcessSection';
import OpenClawSection from '../components/dc/OpenClawSection';
import PricingSection from '../components/dc/PricingSection';
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
      <OpenClawSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}