import React from 'react';
import logoImg from '../assets/images/caretcoders_logo_1785257180164.jpg';
import { motion } from 'motion/react';
import { NavigationPage, HomeSection } from '../types';
import { InteractiveTerminal } from './InteractiveTerminal';
import { cyberAudio } from '../utils/sound';
import { 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Sprout, 
  FileText, 
  ArrowDownRight,
  Code2,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onNavigatePage: (page: NavigationPage) => void;
  onScrollSection: (section: HomeSection) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigatePage,
  onScrollSection
}) => {
  return (
    <section id="hero" className="relative py-12 lg:py-20 bg-retro-grid border-b-2 border-[#E8E8C6]/30 overflow-hidden">
      {/* Background Cyber Graphic Lines & Telemetry Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] font-rubik-pixels text-[#474744]/15 select-none pointer-events-none leading-none z-0">
        ^CARET
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Tile 1: Hero Main Typography & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-7 bg-[#474744]/30 border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[6px_6px_0px_#474744] flex flex-col justify-between space-y-6"
          >
            
            <div className="space-y-4">
              {/* Status Pill */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#252525] border border-[#E8E8C6] shadow-[2px_2px_0px_#474744] text-xs font-share-tech">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-[#E8E8C6] font-bold">CYBERPUNK RETRO STARTUP PORTAL</span>
                <span className="text-[#474744] font-bold">|</span>
                <span className="text-amber-300 font-mono">v2.4.0</span>
              </div>

              {/* Rubik Pixels Hero Main Headline with Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[#E8E8C6] border-4 border-[#E8E8C6] shadow-[6px_6px_0px_#474744] overflow-hidden flex-shrink-0">
                  <img 
                    src={logoImg} 
                    alt="CaretCoders Official Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-rubik-pixels text-[#E8E8C6] tracking-wider uppercase leading-none drop-shadow-[4px_4px_0px_#474744]">
                    CARET<br />CODERS
                  </h1>
                  <div className="h-1 w-24 bg-[#E8E8C6] shadow-[2px_2px_0px_#474744]"></div>
                </div>
              </div>

              {/* Subhead in Sixtyfour Convergence / Monospace */}
              <h2 className="text-lg sm:text-xl font-share-tech text-[#E8E8C6]/90 leading-snug font-bold border-l-4 border-[#E8E8C6] pl-4 py-1">
                Engineering Next-Gen Intelligence through Cyberpunk Retro Precision.
              </h2>

              <p className="text-sm font-mono text-[#E8E8C6]/80 max-w-2xl leading-relaxed">
                We build high-throughput cryptographic data engines (<strong className="text-[#E8E8C6]">DetailMint</strong>), 
                pesticide-reducing IoT agricultural telemetry (<strong className="text-[#E8E8C6]">Precision Farming</strong>), and 
                AST-aware AI developer documentation suites (<strong className="text-[#E8E8C6]">InkSquirel</strong>).
              </p>
            </div>

            {/* Hero Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 font-share-tech">
              <button
                onClick={() => { cyberAudio.playClick(); onScrollSection('products'); }}
                className="px-5 py-2.5 bg-[#E8E8C6] text-[#252525] font-bold border-2 border-[#E8E8C6] shadow-[4px_4px_0px_#474744] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform flex items-center space-x-2 text-sm"
              >
                <Terminal className="w-4 h-4" />
                <span>EXPLORE_PRODUCTS()</span>
              </button>

              <button
                onClick={() => { cyberAudio.playClick(); onScrollSection('contact'); }}
                className="px-5 py-2.5 bg-[#252525] text-[#E8E8C6] font-bold border-2 border-[#E8E8C6] shadow-[4px_4px_0px_#474744] hover:bg-[#474744]/40 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform flex items-center space-x-2 text-sm"
              >
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>SCHEDULE_MEETING()</span>
              </button>

              <button
                onClick={() => { cyberAudio.playClick(); onNavigatePage('docs'); }}
                className="px-5 py-2.5 bg-[#474744] text-[#E8E8C6] font-bold border-2 border-[#E8E8C6] shadow-[4px_4px_0px_#252525] hover:bg-[#474744]/80 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform flex items-center space-x-2 text-sm"
              >
                <Code2 className="w-4 h-4 text-amber-300" />
                <span>VIEW_DOCS()</span>
              </button>
            </div>

          </motion.div>

          {/* Bento Tile 2: Highlighted Light Spotlight Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 lg:col-span-5 bg-[#E8E8C6] text-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[6px_6px_0px_#474744] flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#252525]/30 pb-2 mb-4 font-mono text-xs">
                <span className="font-bold text-[#252525] uppercase tracking-wider">_Current_Deployments</span>
                <span className="bg-[#252525] text-[#E8E8C6] px-2 py-0.5 font-bold text-[10px]">ACTIVE_SRV</span>
              </div>

              <div className="space-y-3">
                <div 
                  onClick={() => { cyberAudio.playClick(); onScrollSection('products'); }}
                  className="p-3 bg-[#252525] text-[#E8E8C6] border-2 border-[#252525] hover:bg-[#474744] cursor-pointer transition-colors space-y-1"
                >
                  <div className="flex items-center justify-between font-bold font-share-tech text-sm">
                    <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1 text-amber-300" /> DetailMint</span>
                    <span className="text-[10px] bg-[#E8E8C6] text-[#252525] px-1.5 py-0.5 font-mono">PROD</span>
                  </div>
                  <p className="text-xs font-mono text-[#E8E8C6]/80">Cryptographic Provenance & zk-SNARK Data Anchoring</p>
                </div>

                <div 
                  onClick={() => { cyberAudio.playClick(); onScrollSection('products'); }}
                  className="p-3 bg-[#252525] text-[#E8E8C6] border-2 border-[#252525] hover:bg-[#474744] cursor-pointer transition-colors space-y-1"
                >
                  <div className="flex items-center justify-between font-bold font-share-tech text-sm">
                    <span className="flex items-center"><Sprout className="w-4 h-4 mr-1 text-emerald-400" /> Precision Farming</span>
                    <span className="text-[10px] bg-[#E8E8C6] text-[#252525] px-1.5 py-0.5 font-mono">PILOT</span>
                  </div>
                  <p className="text-xs font-mono text-[#E8E8C6]/80">-68.4% Pesticide Reduction IoT Telemetry Mesh</p>
                </div>

                <div 
                  onClick={() => { cyberAudio.playClick(); onScrollSection('products'); }}
                  className="p-3 bg-[#252525] text-[#E8E8C6] border-2 border-[#252525] hover:bg-[#474744] cursor-pointer transition-colors space-y-1"
                >
                  <div className="flex items-center justify-between font-bold font-share-tech text-sm">
                    <span className="flex items-center"><FileText className="w-4 h-4 mr-1 text-cyan-300" /> InkSquirel</span>
                    <span className="text-[10px] bg-[#E8E8C6] text-[#252525] px-1.5 py-0.5 font-mono">PROD</span>
                  </div>
                  <p className="text-xs font-mono text-[#E8E8C6]/80">AST AI Code Documentation & Synthesizer Suite</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#252525]/20 flex items-center justify-between font-share-tech text-xs font-bold text-[#252525]">
              <span>SYSTEM HEALTH: 100%</span>
              <span className="underline cursor-pointer" onClick={() => { cyberAudio.playClick(); onNavigatePage('docs'); }}>SPEC_SHEETS &rarr;</span>
            </div>
          </motion.div>

          {/* Bento Tile 3: Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-12 lg:col-span-7 bg-[#252525] border-2 border-[#E8E8C6] shadow-[6px_6px_0px_#474744] p-2"
          >
            <InteractiveTerminal 
              onNavigatePage={onNavigatePage}
              onScrollSection={onScrollSection}
            />
          </motion.div>

          {/* Bento Tile 4: Core Tech & Telemetry Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-12 lg:col-span-5 bg-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[6px_6px_0px_#474744] flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#474744] pb-2 text-[#E8E8C6]">
                <span className="font-bold uppercase tracking-wider text-amber-300 font-share-tech">_CORE_TECHNOLOGY</span>
                <span className="text-[10px] text-emerald-400">BENCHMARK_OK</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-[#474744]/20 border border-[#474744]">
                  <span className="text-[#E8E8C6]">React 19 / TypeScript 5.8</span>
                  <span className="text-emerald-400 font-bold">FRONTEND</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#474744]/20 border border-[#474744]">
                  <span className="text-[#E8E8C6]">Express / Node.js ESM</span>
                  <span className="text-cyan-300 font-bold">BACKEND</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#474744]/20 border border-[#474744]">
                  <span className="text-[#E8E8C6]">Gemini 2.5 LLM / AST</span>
                  <span className="text-amber-300 font-bold">AI ENGINE</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#474744]/20 border border-[#474744]">
                  <span className="text-[#E8E8C6]">Cloud Run / TimescaleDB</span>
                  <span className="text-purple-400 font-bold">DEVOPS</span>
                </div>
              </div>

              {/* Meter bar */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#E8E8C6]/80 font-share-tech">OPTIMIZATION_INDEX</span>
                  <strong className="text-emerald-400">94.8%</strong>
                </div>
                <div className="w-full h-2 bg-[#474744] border border-[#E8E8C6]">
                  <div className="h-full bg-emerald-400 w-[94.8%]"></div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#474744] flex items-center justify-between text-xs font-share-tech">
              <span className="flex items-center text-[#E8E8C6]/80">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 mr-1.5" />
                LATENCY: <strong className="text-emerald-400 ml-1">4.2 ms</strong>
              </span>
              <button
                onClick={() => { cyberAudio.playClick(); onNavigatePage('blog'); }}
                className="text-[#E8E8C6] hover:underline flex items-center font-bold"
              >
                READ_BLOG() <ChevronRight className="w-3 h-3 ml-0.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
