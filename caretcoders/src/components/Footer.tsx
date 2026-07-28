import React from 'react';
import logoImg from '../assets/images/caretcoders_logo_1785257180164.jpg';
import { NavigationPage, HomeSection } from '../types';
import { cyberAudio } from '../utils/sound';
import { Terminal, Shield, Cpu, ChevronUp, Github, Twitter, Disc as Discord, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: NavigationPage) => void;
  scrollToHomeSection: (sectionId: HomeSection) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  scrollToHomeSection
}) => {
  const handleNav = (page: NavigationPage) => {
    cyberAudio.playClick();
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSec = (sec: HomeSection) => {
    cyberAudio.playClick();
    if (sec === 'tech-stack') {
      setCurrentPage('blog');
      setTimeout(() => {
        const el = document.getElementById('tech-stack');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentPage('home');
      setTimeout(() => scrollToHomeSection(sec), 100);
    }
  };

  const scrollToTop = () => {
    cyberAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] border-t-2 border-[#E8E8C6]/40 text-[#E8E8C6] py-12 pb-20 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top ASCII / Logo & Status Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#474744] pb-8 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#E8E8C6] border-2 border-[#E8E8C6] overflow-hidden flex items-center justify-center shadow-[3px_3px_0px_#474744]">
                <img 
                  src={logoImg} 
                  alt="CaretCoders Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-share-tech text-2xl font-bold tracking-tight uppercase">CaretCoders</span>
            </div>
            <p className="text-xs text-[#E8E8C6]/70 max-w-md">
              Cyberpunk Retro Engineering Collective • Cryptography • AgriTech IoT • Generative AI Tooling
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#252525] p-3 border border-[#E8E8C6]/40 text-xs font-share-tech space-y-1">
              <div className="flex items-center space-x-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYSTEM STATUS: 100% OPERATIONAL</span>
              </div>
              <p className="text-[10px] text-[#E8E8C6]/60">LATENCY: 4.2ms • BUILD: v2.4.0-CYBER</p>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-[#E8E8C6] text-[#252525] border-2 border-[#E8E8C6] shadow-[2px_2px_0px_#474744] hover:bg-[#E8E8C6]/90 transition-colors"
              title="Return to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sitemap Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-share-tech text-xs">
          <div className="space-y-2">
            <h4 className="font-bold text-amber-300 border-b border-[#474744] pb-1 uppercase">PLATFORM WEBPAGES</h4>
            <ul className="space-y-1.5 text-[#E8E8C6]/80">
              <li><button onClick={() => handleNav('home')} className="hover:text-[#E8E8C6]">Home Platform</button></li>
              <li><button onClick={() => handleNav('blog')} className="hover:text-[#E8E8C6]">Engineering Blog</button></li>
              <li><button onClick={() => handleNav('careers')} className="hover:text-[#E8E8C6]">Careers & Fellowships</button></li>
              <li><button onClick={() => handleNav('docs')} className="hover:text-[#E8E8C6]">API & Developer Docs</button></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-amber-300 border-b border-[#474744] pb-1 uppercase">PRODUCTS</h4>
            <ul className="space-y-1.5 text-[#E8E8C6]/80">
              <li><button onClick={() => handleSec('products')} className="hover:text-[#E8E8C6]">DetailMint (ZK-Proof)</button></li>
              <li><button onClick={() => handleSec('products')} className="hover:text-[#E8E8C6]">AgriTech Precision Farming</button></li>
              <li><button onClick={() => handleSec('products')} className="hover:text-[#E8E8C6]">InkSquirel AI Suite</button></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-amber-300 border-b border-[#474744] pb-1 uppercase">COMPANY & SPECS</h4>
            <ul className="space-y-1.5 text-[#E8E8C6]/80">
              <li><button onClick={() => handleSec('why-us')} className="hover:text-[#E8E8C6]">Why Choose Us</button></li>
              <li><button onClick={() => handleSec('tech-stack')} className="hover:text-[#E8E8C6]">Technology Stack</button></li>
              <li><button onClick={() => handleSec('journey')} className="hover:text-[#E8E8C6]">Milestones & Roadmap</button></li>
              <li><button onClick={() => handleSec('contact')} className="hover:text-[#E8E8C6]">Schedule Consultation</button></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-amber-300 border-b border-[#474744] pb-1 uppercase">CONNECT</h4>
            <ul className="space-y-1.5 text-[#E8E8C6]/80 text-[11px]">
              <li><a href="mailto:contact@caretcoders.com" className="hover:text-amber-300 transition-colors">contact@caretcoders.com</a></li>
              <li><a href="mailto:hr@caretcoders.com" className="hover:text-emerald-400 transition-colors">hr@caretcoders.com</a></li>
              <li><a href="https://github.com/CaretCoders" target="_blank" rel="noreferrer" className="hover:text-[#E8E8C6]">GitHub</a></li>
              <li><a href="https://x.com/caretcoders" target="_blank" rel="noreferrer" className="hover:text-[#E8E8C6]">X (Twitter)</a></li>
              <li><a href="https://www.linkedin.com/company/caretcoders-llp/" target="_blank" rel="noreferrer" className="hover:text-[#E8E8C6]">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#474744] flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8E8C6]/60 gap-2">
          <span>© 2026 CaretCoders Inc. All rights reserved. Built with Cyberpunk Retro Precision.</span>
          <span className="font-mono">PALETTE: #E8E8C6 • #252525 • #474744</span>
        </div>

      </div>
    </footer>
  );
};
