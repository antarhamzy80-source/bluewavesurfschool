import Header from './components/Header';
import KidsSection from './components/KidsSection';
import {
  AboutSection,
  ContactSection,
  Footer,
  GallerySection,
  HeroSection,
  LessonsSection,
  PricingSection,
  WelcomeSection,
} from './components/PageSections';

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <LessonsSection />
        <AboutSection />
        <KidsSection />
        <PricingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;