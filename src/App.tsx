import React, { useState, useEffect } from 'react';
import { NavigationPage, HomeSection } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { StartupJourneySection } from './components/StartupJourneySection';
import { ContactSection } from './components/ContactSection';
import { BlogPage } from './components/BlogPage';
import { CareersPage } from './components/CareersPage';
import { ApiDocsPage } from './components/ApiDocsPage';

import { ScrollHUD } from './components/ScrollHUD';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [activeHomeSection, setActiveHomeSection] = useState<HomeSection>('hero');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [crtOverlay, setCrtOverlay] = useState<boolean>(true);

  // Smooth section scrolling helper
  const scrollToHomeSection = (sectionId: HomeSection) => {
    setActiveHomeSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active home section on scroll
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections: HomeSection[] = ['hero', 'products', 'why-us', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveHomeSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className={`min-h-screen bg-[#252525] text-[#E8E8C6] font-mono relative overflow-x-hidden ${crtOverlay ? 'crt-flicker' : ''}`}>
      {/* Optional CRT Scanline Overlay */}
      {crtOverlay && (
        <div className="fixed inset-0 crt-overlay z-40 pointer-events-none"></div>
      )}

      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeHomeSection={activeHomeSection}
        scrollToHomeSection={scrollToHomeSection}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        crtOverlay={crtOverlay}
        setCrtOverlay={setCrtOverlay}
      />

      {/* Cyber Scroll Telemetry & Floating HUD */}
      <ScrollHUD
        activeHomeSection={activeHomeSection}
        scrollToHomeSection={scrollToHomeSection}
        crtOverlay={crtOverlay}
        setCrtOverlay={setCrtOverlay}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Render Current Webpage View */}
      <main className="relative z-10">
        {currentPage === 'home' && (
          <>
            <HeroSection
              onNavigatePage={setCurrentPage}
              onScrollSection={scrollToHomeSection}
            />
            <ProductsSection />
            <WhyChooseUsSection />
            <StartupJourneySection />
            <ContactSection />
          </>
        )}

        {currentPage === 'blog' && (
          <BlogPage />
        )}

        {currentPage === 'careers' && (
          <CareersPage />
        )}

        {currentPage === 'docs' && (
          <ApiDocsPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        scrollToHomeSection={scrollToHomeSection}
      />
    </div>
  );
}

