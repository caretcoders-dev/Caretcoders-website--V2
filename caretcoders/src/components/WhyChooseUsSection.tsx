import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cyberAudio } from '../utils/sound';
import { 
  Users, 
  Cpu, 
  BrainCircuit, 
  Palette, 
  Unlock, 
  Sparkles,
  Zap,
  ArrowRight,
  Trophy,
  Compass,
  Code,
  Shield,
  Search,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'select-your-team',
      icon: Users,
      title: 'Select Your Team',
      subtitle: 'Immersed in Real Operations Before Writing Code',
      description: 'We immerse ourselves in your business before writing a single line of code, ensuring every solution is built around real operations—not assumptions.',
      specs: [
        'On-site & workflow immersion discovery sessions',
        'Direct core team alignment without middle layers',
        'Operational blueprinting tailored to actual business metrics'
      ]
    },
    {
      id: 'more-than-code',
      icon: Cpu,
      title: 'More Than Code',
      subtitle: 'Complete Hardware, AI, Software & Research Ecosystems',
      description: 'From AI and automation to hardware integration, research, and workflow optimization, our multidisciplinary team develops complete solutions that address the bigger picture.',
      specs: [
        'Full-stack AI model training & server-side API integration',
        'IoT sensor hardware prototyping & embedded firmware',
        'End-to-end workflow automation and data pipelines'
      ]
    },
    {
      id: 'built-by-curious-minds',
      icon: BrainCircuit,
      title: 'Built by Curious Minds',
      subtitle: 'Relentless Exploration of Emerging Technologies',
      description: 'Learning is part of our culture. Our young team continuously explores emerging technologies, experiments with new ideas, and transforms them into practical solutions for real businesses.',
      specs: [
        'Continuous research and development in cutting-edge tech',
        'Experimental rapid prototyping & validation sprints',
        'Transforming laboratory concepts into commercial products'
      ]
    },
    {
      id: 'creative-by-choice',
      icon: Palette,
      title: 'Creative by Choice',
      subtitle: 'Rejecting Ordinary Software for Meaningful Innovation',
      description: "We believe great innovation comes from creativity. If a project doesn't inspire meaningful work or genuine impact, we'd rather rethink the approach than deliver something ordinary.",
      specs: [
        'Custom retro-modern & high-utility user experiences',
        'Refined visual identity and interactive component craft',
        'Purpose-driven engineering focused on high-value impact'
      ]
    },
    {
      id: 'no-secret-levels',
      icon: Unlock,
      title: 'NO SECRET LEVELS',
      subtitle: '100% Transparent Processes & Open Collaboration',
      description: 'No hidden processes. No unnecessary complexity. We collaborate openly, involve clients throughout development, and build lasting relationships based on trust.',
      specs: [
        'Open repositories, clear telemetry & zero hidden fees',
        'Direct daily collaboration via dedicated comms channels',
        'Honest feasibility reviews and clear milestone tracking'
      ]
    }
  ];

  const achievementCards = [
    {
      title: 'Research Before Code',
      desc: 'Discovery and operational blueprinting precede every build.',
      icon: Search,
      tag: 'ACHIEVEMENT #01'
    },
    {
      title: 'AI • Software • Hardware',
      desc: 'Multidisciplinary execution spanning digital & physical tech.',
      icon: Cpu,
      tag: 'ACHIEVEMENT #02'
    },
    {
      title: 'Problem-First Approach',
      desc: 'Solving real workflow bottlenecks with measurable ROI.',
      icon: Compass,
      tag: 'ACHIEVEMENT #03'
    },
    {
      title: 'Young & Vision-Driven',
      desc: 'Unbounded energy, high curiosity, and bold innovation.',
      icon: Sparkles,
      tag: 'ACHIEVEMENT #04'
    },
    {
      title: 'Built for Real Businesses',
      desc: 'Pragmatic software engineered for enterprise longevity.',
      icon: Shield,
      tag: 'ACHIEVEMENT #05'
    },
    {
      title: 'Learning Never Stops',
      desc: 'Relentless skill evolution driving continuous product excellence.',
      icon: Trophy,
      tag: 'ACHIEVEMENT #06'
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-retro-dots border-b-2 border-[#E8E8C6]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header & Founding Manifesto Quote */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-share-tech text-amber-300 uppercase tracking-widest bg-amber-950/40 border border-amber-400/40 px-3 py-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>FOUNDING MANIFESTO // CARETCODERS</span>
          </div>

          {/* Core Quote Box */}
          <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] relative overflow-hidden text-left">
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-300" />
            <p className="text-base sm:text-xl lg:text-2xl font-share-tech font-bold text-[#E8E8C6] leading-relaxed italic">
              "Caretcoders was founded by people who believe learning never stops—and that mindset drives us to solve real-world problems through technology."
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-sixtyfour text-[#E8E8C6] tracking-tight">
              WHY PICK US?
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/85 max-w-3xl mx-auto leading-relaxed">
              Every business has unique challenges. Instead of starting with code, we start by understanding your workflows, identifying bottlenecks, and uncovering opportunities. Only then do we design technology that creates measurable impact.
            </p>
          </div>
        </div>

        {/* 5 Core Pillars Bento Overview Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#474744] pb-2 font-share-tech text-xs uppercase text-amber-300">
            <span>_CORE_ENGINEERING_PILLARS</span>
            <span>SELECT TO INSPECT SPECIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isSelected = activePillar === idx;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  onClick={() => { cyberAudio.playClick(); setActivePillar(idx); }}
                  className={`p-4 border-2 cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                    isSelected 
                      ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] shadow-[6px_6px_0px_#474744]'
                      : 'bg-[#252525] text-[#E8E8C6] border-[#474744] hover:border-[#E8E8C6] shadow-[4px_4px_0px_#474744]'
                  }`}
                >
                  <div className="flex items-center justify-between border-b pb-2 border-current/20">
                    <span className="text-xl font-black italic font-mono opacity-80">0{idx + 1}.</span>
                    <div className={`w-8 h-8 border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#252525] text-[#E8E8C6] border-[#252525]' : 'bg-[#474744] text-[#E8E8C6] border-[#E8E8C6]/40'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-share-tech font-bold text-sm uppercase leading-snug">{pillar.title}</h3>
                    <p className="text-[11px] font-mono opacity-80 line-clamp-2 mt-1">{pillar.subtitle}</p>
                  </div>

                  <div className="pt-2 border-t border-current/20 flex items-center justify-between text-[10px] font-mono uppercase">
                    <span>{isSelected ? 'ACTIVE_VIEW' : 'INSPECT'}</span>
                    <ArrowRight className={`w-3 h-3 transition-transform ${isSelected ? 'translate-x-1' : 'opacity-40'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Selected Pillar Detailed Spec Display */}
          <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-6">
            <div className="flex items-center space-x-4 border-b-2 border-[#474744] pb-4">
              <div className="w-12 h-12 bg-[#474744] border-2 border-[#E8E8C6] flex items-center justify-center text-[#E8E8C6]">
                {React.createElement(pillars[activePillar].icon, { className: "w-6 h-6 text-amber-300" })}
              </div>
              <div>
                <span className="text-xs font-share-tech text-amber-300 uppercase tracking-widest block font-bold">
                  _PILLAR_SPEC_DEEPDIVE // 0{activePillar + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-sixtyfour text-[#E8E8C6]">
                  {pillars[activePillar].title}
                </h3>
              </div>
            </div>

            <p className="text-sm font-share-tech text-amber-200 font-bold border-l-2 border-amber-300 pl-3">
              {pillars[activePillar].subtitle}
            </p>

            <p className="text-sm font-mono text-[#E8E8C6]/90 leading-relaxed">
              {pillars[activePillar].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-share-tech text-[#E8E8C6] font-bold uppercase tracking-wider flex items-center">
                <Zap className="w-4 h-4 text-emerald-400 mr-1.5" />
                GUARANTEES & EXECUTION METRICS:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                {pillars[activePillar].specs.map((spec, i) => (
                  <div key={i} className="p-3 bg-[#474744]/30 border border-[#E8E8C6]/40 flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span className="text-[#E8E8C6]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pixel Art Achievement Cards Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#474744] pb-2 font-share-tech text-xs uppercase text-amber-300">
            <span className="flex items-center">
              <Trophy className="w-4 h-4 mr-2 text-amber-300" />
              PIXEL_ART_ACHIEVEMENT_UNLOCKED_CARDS
            </span>
            <span className="text-emerald-400 font-mono">[6/6 UNLOCKED]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-[#252525] border-2 border-[#E8E8C6] p-5 shadow-[6px_6px_0px_#474744] hover:shadow-[8px_8px_0px_#474744] hover:border-amber-300 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-[#474744] pb-3 mb-3">
                    <div className="w-10 h-10 bg-[#474744] border border-[#E8E8C6] flex items-center justify-center text-[#E8E8C6] group-hover:bg-amber-300 group-hover:text-[#252525] group-hover:border-amber-300 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-share-tech font-bold text-amber-300 bg-amber-950/40 border border-amber-400/40 px-2 py-0.5">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-sixtyfour text-[#E8E8C6] group-hover:text-amber-200 transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs font-mono text-[#E8E8C6]/80 leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-4 pt-2 border-t border-[#474744]/60 flex items-center justify-between text-[10px] font-mono text-emerald-400 font-bold uppercase">
                    <span className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                      STATUS: VERIFIED
                    </span>
                    <span className="text-[#E8E8C6]/50">100 XP</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
