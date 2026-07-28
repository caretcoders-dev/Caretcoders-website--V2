import React, { useState } from 'react';
import { NavigationPage, HomeSection } from '../types';
import { cyberAudio } from '../utils/sound';
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Tv, 
  Menu, 
  X, 
  Code2, 
  BookOpen, 
  Briefcase, 
  FileCode2, 
  ChevronRight,
  Cpu
} from 'lucide-react';

import logoImg from '../assets/images/caretcoders_logo_1785257180164.jpg';

interface HeaderProps {
  currentPage: NavigationPage;
  setCurrentPage: (page: NavigationPage) => void;
  activeHomeSection: HomeSection;
  scrollToHomeSection: (sectionId: HomeSection) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  crtOverlay: boolean;
  setCrtOverlay: (enabled: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  activeHomeSection,
  scrollToHomeSection,
  soundEnabled,
  setSoundEnabled,
  crtOverlay,
  setCrtOverlay
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickJumpOpen, setQuickJumpOpen] = useState(false);

  const handleNavClick = (page: NavigationPage) => {
    cyberAudio.playClick();
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionClick = (section: HomeSection) => {
    cyberAudio.playClick();
    if (section === 'tech-stack') {
      setCurrentPage('blog');
      setTimeout(() => {
        const el = document.getElementById('tech-stack');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => scrollToHomeSection(section), 100);
    } else {
      scrollToHomeSection(section);
    }
    setQuickJumpOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleSound = () => {
    const nextState = cyberAudio.toggleSound();
    setSoundEnabled(nextState);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#252525] border-b-2 border-[#E8E8C6] shadow-lg">
      {/* Top Telemetry Ticker Bar */}
      <div className="bg-[#474744]/40 border-b border-[#474744] px-4 py-1 text-xs text-[#E8E8C6]/80 flex items-center justify-between font-mono overflow-x-auto whitespace-nowrap">
        <div className="flex items-center space-x-4">
          <span className="inline-flex items-center space-x-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 bg-emerald-400 animate-pulse"></span>
            <span>SYS_STATUS: OPTIMAL</span>
          </span>
          <span className="hidden sm:inline text-[#E8E8C6]/60">UPTIME: 99.98%</span>
          <span className="hidden md:inline text-[#E8E8C6]/60 font-share-tech">BENTO_GRID_THEME</span>
          <span className="text-[#252525] bg-[#E8E8C6] px-1.5 py-0.5 font-bold text-[10px]">
            VER: 2026.04_CYBER
          </span>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          {/* CRT Scanline Toggle */}
          <button
            onClick={() => { cyberAudio.playClick(); setCrtOverlay(!crtOverlay); }}
            className={`flex items-center space-x-1 px-2 py-0.5 border transition-all ${
              crtOverlay 
                ? 'border-[#E8E8C6] bg-[#E8E8C6] text-[#252525] font-bold' 
                : 'border-[#474744] text-[#E8E8C6]/70 hover:border-[#E8E8C6]'
            }`}
            title="Toggle Retro CRT Scanlines Effect"
          >
            <Tv className="w-3 h-3" />
            <span className="hidden sm:inline">CRT: {crtOverlay ? 'ON' : 'OFF'}</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            className={`flex items-center space-x-1 px-2 py-0.5 border transition-all ${
              soundEnabled 
                ? 'border-[#E8E8C6] bg-[#E8E8C6] text-[#252525] font-bold' 
                : 'border-[#474744] text-[#E8E8C6]/70 hover:border-[#E8E8C6]'
            }`}
            title="Toggle Cyber Synth Sound FX"
          >
            {soundEnabled ? <Volume2 className="w-3 h-3 text-[#252525]" /> : <VolumeX className="w-3 h-3" />}
            <span className="hidden sm:inline">AUDIO: {soundEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center space-x-3 group"
        >
          <div className="w-9 h-9 bg-[#E8E8C6] border-2 border-[#E8E8C6] overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform shadow-[2px_2px_0px_#474744]">
            <img 
              src={logoImg} 
              alt="CaretCoders Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center font-share-tech text-xl sm:text-2xl font-bold tracking-tight text-[#E8E8C6] uppercase">
              <span>CaretCoders</span>
              <span className="w-2.5 h-5 bg-[#E8E8C6] ml-1 animate-caret"></span>
            </div>
          </div>
        </div>

        {/* Desktop Webpage Tabs */}
        <nav className="hidden lg:flex items-center space-x-1 font-share-tech text-sm">
          {/* Main Home Page & Sub-Section Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleNavClick('home')}
              onMouseEnter={() => cyberAudio.playKeypress()}
              className={`px-3 py-1.5 border transition-all flex items-center space-x-1 ${
                currentPage === 'home'
                  ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] font-bold shadow-[2px_2px_0px_#474744]'
                  : 'text-[#E8E8C6] border-transparent hover:border-[#474744] hover:bg-[#474744]/30'
              }`}
            >
              <Terminal className="w-4 h-4 mr-1" />
              <span>[ HOME ]</span>
            </button>

            {/* Quick Home Sub-Sections Jump Menu */}
            {currentPage === 'home' && (
              <div className="absolute left-0 top-full mt-2 w-56 bg-[#252525] border-2 border-[#E8E8C6] shadow-[4px_4px_0px_#474744] p-1 space-y-0.5 hidden group-hover:block">
                {[
                  { id: 'hero', label: 'Hero Terminal' },
                  { id: 'products', label: 'Product Ecosystem' },
                  { id: 'why-us', label: 'Why Choose Us' },
                  { id: 'tech-stack', label: 'Technology Stack' },
                  { id: 'journey', label: 'Startup Journey' },
                  { id: 'contact', label: 'Contact & Schedule' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id as HomeSection)}
                    className={`w-full text-left px-2.5 py-1 text-xs flex items-center justify-between ${
                      activeHomeSection === item.id 
                        ? 'bg-[#474744] text-[#E8E8C6] font-bold' 
                        : 'text-[#E8E8C6]/80 hover:bg-[#474744]/40'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Engineering Blog Page */}
          <button
            onClick={() => handleNavClick('blog')}
            onMouseEnter={() => cyberAudio.playKeypress()}
            className={`px-3 py-1.5 border transition-all flex items-center space-x-1 ${
              currentPage === 'blog'
                ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] font-bold shadow-[2px_2px_0px_#474744]'
                : 'text-[#E8E8C6] border-transparent hover:border-[#474744] hover:bg-[#474744]/30'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-1" />
            <span>[ BLOG ]</span>
          </button>

          {/* Careers Page */}
          <button
            onClick={() => handleNavClick('careers')}
            onMouseEnter={() => cyberAudio.playKeypress()}
            className={`px-3 py-1.5 border transition-all flex items-center space-x-1 ${
              currentPage === 'careers'
                ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] font-bold shadow-[2px_2px_0px_#474744]'
                : 'text-[#E8E8C6] border-transparent hover:border-[#474744] hover:bg-[#474744]/30'
            }`}
          >
            <Briefcase className="w-4 h-4 mr-1" />
            <span>[ CAREERS ]</span>
          </button>

          {/* API & Developer Docs Page */}
          <button
            onClick={() => handleNavClick('docs')}
            onMouseEnter={() => cyberAudio.playKeypress()}
            className={`px-3 py-1.5 border transition-all flex items-center space-x-1 ${
              currentPage === 'docs'
                ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] font-bold shadow-[2px_2px_0px_#474744]'
                : 'text-[#E8E8C6] border-transparent hover:border-[#474744] hover:bg-[#474744]/30'
            }`}
          >
            <FileCode2 className="w-4 h-4 mr-1" />
            <span>[ API & DOCS ]</span>
          </button>
        </nav>

        {/* Quick Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleSectionClick('contact')}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#E8E8C6] text-[#252525] border-2 border-[#E8E8C6] font-share-tech font-bold text-xs shadow-[3px_3px_0px_#474744] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>SCHEDULE_MEETING()</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => { cyberAudio.playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
            className="lg:hidden p-2 border-2 border-[#E8E8C6] text-[#E8E8C6] bg-[#252525]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#E8E8C6] bg-[#252525] p-4 space-y-3 font-share-tech text-sm shadow-2xl">
          <div className="text-xs text-[#E8E8C6]/60 border-b border-[#474744] pb-1 uppercase tracking-wider">
            SITEMAP WEBPAGES
          </div>

          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left p-2.5 border flex items-center justify-between ${
              currentPage === 'home' ? 'bg-[#E8E8C6] text-[#252525] font-bold' : 'border-[#474744] text-[#E8E8C6]'
            }`}
          >
            <span className="flex items-center"><Terminal className="w-4 h-4 mr-2" /> Home Platform</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {currentPage === 'home' && (
            <div className="pl-4 space-y-1.5 border-l-2 border-[#474744]">
              {[
                { id: 'hero', label: '1. Hero Section' },
                { id: 'products', label: '2. Products Portfolio' },
                { id: 'why-us', label: '3. Why Choose Us' },
                { id: 'tech-stack', label: '4. Technology Stack' },
                { id: 'journey', label: '5. Startup Journey' },
                { id: 'contact', label: '6. Contact & Schedule' }
              ].map(sec => (
                <button
                  key={sec.id}
                  onClick={() => handleSectionClick(sec.id as HomeSection)}
                  className="w-full text-left py-1 text-xs text-[#E8E8C6]/80 hover:text-[#E8E8C6] flex items-center justify-between"
                >
                  <span>{sec.label}</span>
                  <ChevronRight className="w-3 h-3 opacity-50" />
                </button>
              ))}
            </div>
          )}

          <button
            onClick={() => handleNavClick('blog')}
            className={`w-full text-left p-2.5 border flex items-center justify-between ${
              currentPage === 'blog' ? 'bg-[#E8E8C6] text-[#252525] font-bold' : 'border-[#474744] text-[#E8E8C6]'
            }`}
          >
            <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2" /> Engineering Blog</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleNavClick('careers')}
            className={`w-full text-left p-2.5 border flex items-center justify-between ${
              currentPage === 'careers' ? 'bg-[#E8E8C6] text-[#252525] font-bold' : 'border-[#474744] text-[#E8E8C6]'
            }`}
          >
            <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2" /> Careers Portal</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleNavClick('docs')}
            className={`w-full text-left p-2.5 border flex items-center justify-between ${
              currentPage === 'docs' ? 'bg-[#E8E8C6] text-[#252525] font-bold' : 'border-[#474744] text-[#E8E8C6]'
            }`}
          >
            <span className="flex items-center"><FileCode2 className="w-4 h-4 mr-2" /> API & Developer Docs</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="pt-2 border-t border-[#474744]">
            <button
              onClick={() => handleSectionClick('contact')}
              className="w-full py-2 bg-[#E8E8C6] text-[#252525] font-bold text-center border-2 border-[#E8E8C6]"
            >
              [ SCHEDULE MEETING ]
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
