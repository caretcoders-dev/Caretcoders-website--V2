import React from 'react';
import { cyberAudio } from '../utils/sound';
import { TechStackSection } from './TechStackSection';
import { 
  BookOpen, 
  Terminal,
  FileCode,
  Sparkles
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-retro-dots py-12 lg:py-20 text-[#E8E8C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="border-b-2 border-[#E8E8C6]/30 pb-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#252525] border border-[#E8E8C6] shadow-[2px_2px_0px_#474744] text-xs font-share-tech">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>ENGINEERING JOURNAL // TECHNICAL ARTICLES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sixtyfour text-[#E8E8C6]">
            Engineering Blog
          </h1>

          <p className="text-sm font-mono text-[#E8E8C6]/75 max-w-3xl leading-relaxed">
            Deep-dive technical articles, architectural post-mortems, zk-cryptography benchmarks, and startup building insights directly from CaretCoders core engineers.
          </p>
        </div>

        {/* Empty State Banner */}
        <div className="bg-[#252525] border-2 border-[#E8E8C6] p-8 lg:p-12 shadow-[8px_8px_0px_#474744] text-center space-y-4">
          <div className="w-12 h-12 bg-[#1a1a1a] border-2 border-amber-300 mx-auto flex items-center justify-center">
            <FileCode className="w-6 h-6 text-amber-300" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-share-tech font-bold text-amber-300 uppercase tracking-widest block">
              [ NO_POSTS_AVAILABLE ]
            </span>
            <h2 className="text-xl sm:text-3xl font-sixtyfour text-[#E8E8C6]">
              Engineering Blog is Currently Empty
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/70 max-w-lg mx-auto leading-relaxed">
              No technical articles or system architectural post-mortems are currently published. Check back soon for new releases from our engineering team.
            </p>
          </div>

          <div className="pt-2 inline-flex items-center space-x-2 px-3 py-1 bg-[#1a1a1a] border border-[#474744] text-xs font-mono text-emerald-400 font-bold">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>STATUS: AWAITING_FIRST_PUBLICATION</span>
          </div>
        </div>

      </div>

      {/* Embedded Technology Stack Section */}
      <div className="mt-16">
        <TechStackSection />
      </div>
    </div>
  );
};

