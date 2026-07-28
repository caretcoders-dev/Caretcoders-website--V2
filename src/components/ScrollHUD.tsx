import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Activity, Eye, Volume2, VolumeX } from 'lucide-react';
import { HomeSection } from '../types';
import { cyberAudio } from '../utils/sound';

interface ScrollHUDProps {
  activeHomeSection: HomeSection;
  scrollToHomeSection: (sec: HomeSection) => void;
  crtOverlay: boolean;
  setCrtOverlay: (val: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const ScrollHUD: React.FC<ScrollHUDProps> = ({
  activeHomeSection,
  scrollToHomeSection,
  crtOverlay,
  setCrtOverlay,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrollPx, setScrollPx] = useState<number>(0);
  const [showHud, setShowHud] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollPx(Math.round(currentScroll));
      if (totalHeight > 0) {
        const pct = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollProgress(Math.round(pct));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    cyberAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate retro pixel progress bar e.g., ████░░░░░░
  const totalBlocks = 20;
  const filledBlocks = Math.round((scrollProgress / 100) * totalBlocks);
  const progressBarStr = '█'.repeat(filledBlocks) + '░'.repeat(totalBlocks - filledBlocks);

  return (
    <>
      {/* Fixed Bottom Cyber Scroll Telemetry Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e1e1e]/95 border-t-2 border-[#E8E8C6] backdrop-blur-md px-3 sm:px-6 py-2 flex items-center justify-between text-[11px] font-mono text-[#E8E8C6] shadow-[0_-4px_16px_rgba(0,0,0,0.6)]">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-amber-300 font-bold font-share-tech">
            <Activity className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="hidden sm:inline">[SCROLL_TELEMETRY]</span>
          </div>
          <span className="text-emerald-400 font-bold font-share-tech bg-emerald-950/80 px-2 py-0.5 border border-emerald-400/50">
            {scrollProgress}%
          </span>
          <span className="text-[#E8E8C6]/80 font-mono tracking-tighter text-[10px] hidden md:inline">
            [{progressBarStr}]
          </span>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-5 text-[10px]">
          <span className="text-[#E8E8C6]/80">
            Y_POS: <strong className="text-cyan-300 font-mono">{scrollPx}px</strong>
          </span>
          <span className="hidden sm:inline border-l border-[#474744] pl-3 text-[#E8E8C6]/80">
            SEC: <strong className="text-amber-300 uppercase font-share-tech">{activeHomeSection}</strong>
          </span>

          <div className="border-l border-[#474744] pl-3 flex items-center space-x-2">
            <button
              onClick={() => { cyberAudio.playClick(); setCrtOverlay(!crtOverlay); }}
              title="Toggle CRT Screen Lines"
              className={`px-1.5 py-0.5 text-[10px] font-bold border transition-colors ${
                crtOverlay ? 'bg-emerald-950 text-emerald-400 border-emerald-400' : 'bg-[#474744] text-[#E8E8C6] border-[#E8E8C6]/40'
              }`}
            >
              CRT: {crtOverlay ? 'ON' : 'OFF'}
            </button>

            <button
              onClick={() => { cyberAudio.toggleSound(); setSoundEnabled(!soundEnabled); }}
              title="Toggle Cyber Sound Effects"
              className={`px-1.5 py-0.5 text-[10px] font-bold border transition-colors ${
                soundEnabled ? 'bg-amber-950 text-amber-300 border-amber-300' : 'bg-[#474744] text-[#E8E8C6] border-[#E8E8C6]/40'
              }`}
            >
              SFX: {soundEnabled ? 'ON' : 'MUTED'}
            </button>

            <button
              onClick={scrollToTop}
              title="Scroll to Top"
              className="py-0.5 px-2 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-[10px] border border-[#E8E8C6] hover:bg-amber-300 transition-colors flex items-center space-x-1"
            >
              <ArrowUp className="w-3 h-3" />
              <span className="hidden xs:inline">TOP()</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Laser Sweep Beam across screen */}
      <div className="fixed left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent pointer-events-none z-30 animate-laser-sweep"></div>

      {/* Floating Bottom-Right Cyber HUD Control Box above bottom bar */}
      <div className="fixed bottom-10 right-4 z-50 flex flex-col items-end space-y-2">
        {showHud ? (
          <div className="bg-[#252525] border-2 border-[#E8E8C6] shadow-[6px_6px_0px_#474744] p-3 space-y-2.5 font-mono text-xs w-52 text-[#E8E8C6]">
            <div className="flex items-center justify-between border-b border-[#474744] pb-1.5">
              <span className="font-share-tech font-bold text-amber-300 text-[11px] flex items-center">
                <Terminal className="w-3.5 h-3.5 mr-1 text-amber-300" />
                SYSTEM_HUD
              </span>
              <button 
                onClick={() => setShowHud(false)} 
                className="text-[10px] text-[#E8E8C6]/60 hover:text-[#E8E8C6] px-1 bg-[#474744]"
              >
                [MIN]
              </button>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between items-center">
                <span className="text-[#E8E8C6]/70">CRT Scanlines:</span>
                <button
                  onClick={() => { cyberAudio.playClick(); setCrtOverlay(!crtOverlay); }}
                  className={`px-2 py-0.5 text-[10px] font-bold border ${
                    crtOverlay ? 'bg-emerald-950 text-emerald-400 border-emerald-400' : 'bg-[#474744] text-[#E8E8C6] border-[#E8E8C6]/40'
                  }`}
                >
                  {crtOverlay ? 'ENABLED' : 'DISABLED'}
                </button>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#E8E8C6]/70">Audio Synthesizer:</span>
                <button
                  onClick={() => { cyberAudio.toggleSound(); setSoundEnabled(!soundEnabled); }}
                  className={`px-2 py-0.5 text-[10px] font-bold border ${
                    soundEnabled ? 'bg-amber-950 text-amber-300 border-amber-300' : 'bg-[#474744] text-[#E8E8C6] border-[#E8E8C6]/40'
                  }`}
                >
                  {soundEnabled ? 'ACTIVE' : 'MUTED'}
                </button>
              </div>

              <div className="flex justify-between items-center pt-1 border-t border-[#474744] text-[10px]">
                <span className="text-[#E8E8C6]/70">Active Section:</span>
                <span className="text-amber-300 uppercase font-bold">{activeHomeSection}</span>
              </div>
            </div>

            <div className="pt-1.5 border-t border-[#474744]">
              <button
                onClick={scrollToTop}
                className="w-full py-1.5 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs border border-[#E8E8C6] hover:bg-amber-300 flex items-center justify-center space-x-1 shadow-[2px_2px_0px_#474744]"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>SCROLL TO TOP</span>
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowHud(true)}
            className="bg-[#252525] border-2 border-[#E8E8C6] text-[#E8E8C6] p-2 shadow-[4px_4px_0px_#474744] text-xs font-share-tech flex items-center space-x-1.5 hover:bg-[#474744] hover:text-amber-300 transition-all"
          >
            <Activity className="w-3.5 h-3.5 text-amber-300" />
            <span>HUD PANEL</span>
          </button>
        )}
      </div>
    </>
  );
};
