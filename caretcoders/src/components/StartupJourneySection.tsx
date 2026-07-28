import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  storyLevelsData, 
  partyMembersData, 
  finalMissionData, 
  roadmapItems 
} from '../data/journey';
import { cyberAudio } from '../utils/sound';
import { 
  Trophy, 
  Skull, 
  Users, 
  Compass, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ThumbsUp, 
  Gamepad2, 
  Quote, 
  ShieldAlert, 
  Flame,
  Swords,
  HeartHandshake,
  GraduationCap,
  Mail,
  Smile,
  Briefcase,
  MapPin,
  Map,
  List,
  Eye,
  ArrowRight,
  ChevronRight,
  Target
} from 'lucide-react';

export const StartupJourneySection: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [hoveredNodeIndex, setHoveredNodeIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'roadmap' | 'full'>('roadmap');

  const [votesState, setVotesState] = useState<Record<string, number>>(() => 
    roadmapItems.reduce((acc, item) => ({ ...acc, [item.id]: item.votes }), {})
  );
  const [votedSet, setVotedSet] = useState<Set<string>>(new Set());

  const handleVote = (id: string) => {
    cyberAudio.playClick();
    if (votedSet.has(id)) return;

    setVotesState(prev => ({ ...prev, [id]: prev[id] + 1 }));
    setVotedSet(prev => new Set(prev).add(id));
    cyberAudio.playSuccess();
  };

  const roadmapNodes = [
    {
      id: 'level-01',
      levelNumber: 'LEVEL 01',
      badge: 'PRESS START',
      title: 'Caretcoders Initialized',
      date: '23 July 2025',
      summary: 'Amisha and Rahil founded Caretcoders to create a community of young, curious innovators solving real-world problems.',
      fullDescription: 'What began as client work soon became something bigger. Amisha and Rahil realized they didn’t want to build software on their own. Instead, they wanted to create a community of young, curious innovators who could work together to solve real-world problems through creativity, critical thinking, and collaboration.',
      icon: Gamepad2,
      tag: '🏆 Achievement Unlocked',
      reward: 'Caretcoders Initialized',
      color: 'amber',
      status: 'COMPLETE'
    },
    {
      id: 'level-02',
      levelNumber: 'LEVEL 02',
      badge: 'SIDE QUEST',
      title: 'DetailMint Discovery',
      date: 'Late 2025',
      summary: 'Rahil’s experience in automotive detailing sparked DetailMint—a platform born from listening to floor workers.',
      fullDescription: 'Before Caretcoders, Rahil worked as an accountant in a car detailing company. Conversations with owners and technicians exposed everyday operational struggles that software could solve. That observation became the first mission: DetailMint. Not an idea born in a meeting room—but from listening to people doing real work.',
      icon: Compass,
      tag: '🏆 XP +250',
      reward: 'Problem Discovered',
      color: 'cyan',
      status: 'COMPLETE'
    },
    {
      id: 'level-03',
      levelNumber: 'LEVEL 03',
      badge: 'PARTY ASSEMBLED',
      title: 'The Party Grows',
      date: 'Early 2026',
      summary: 'Rahil, Amisha, Yagyesh, Nilufer, and Arin unite across music, commerce, MCA, sales, and AI.',
      fullDescription: 'Great adventures aren’t played solo. As the vision grew, so did the team. Yagyesh balanced music with startup operations; Amisha shaped sound engineering and co-founding; Rahil pursued an MCA; Arin brought AI, ML, and sales energy; Nilufer transitioned from commerce to full-stack code with a Gen Z mindset.',
      icon: Users,
      tag: '🏆 Achievement Unlocked',
      reward: 'The Party Grows (5 Guild Members)',
      color: 'emerald',
      status: 'COMPLETE'
    },
    {
      id: 'level-04',
      levelNumber: 'LEVEL 04',
      badge: 'BOSS BATTLE',
      title: 'Reality Encounter',
      date: 'Mid 2026',
      summary: '12 pilot businesses & Startup India recognition met funding declines and market shifts. The team strategically paused.',
      fullDescription: 'DetailMint reached MVP stage. Twelve businesses agreed to pilot the platform, and the product earned appreciation through Startup India interactions. Then came the reality check. Funding applications were declined because the market was considered too narrow. At the same time, changes in the automotive industry made expansion harder. Instead of forcing a launch, the team chose to pause and regroup.',
      icon: Skull,
      tag: '☠️ Boss Encounter',
      reward: 'Tactical Pause & Regroup',
      color: 'rose',
      status: 'TACTICAL_PAUSE'
    },
    {
      id: 'level-05',
      levelNumber: 'LEVEL 05',
      badge: 'NEW QUEST ACCEPTED',
      title: 'Precision Farming R&D',
      date: 'Active Quest',
      summary: 'Expanding beyond software into Chemical-Reduced Precision Farming using IoT & AI.',
      fullDescription: 'Every setback unlocked a new direction. Rather than giving up, Caretcoders expanded its vision beyond software. Today, the team is researching and developing a Chemical-Reduced Precision Farming Initiative, combining technology, research, and innovation to help address one of humanity’s oldest challenges—how to grow more while using fewer chemicals.',
      icon: Flame,
      tag: '🏆 New Mission Accepted',
      reward: 'Chemical-Reduced Farming',
      color: 'amber',
      status: 'IN_PROGRESS'
    },
    {
      id: 'final-mission',
      levelNumber: 'FINAL MISSION',
      badge: 'PHILOSOPHY',
      title: 'Never Stopped Learning',
      date: 'Future Vision',
      summary: 'Building a generation of creators who refuse to accept "that’s how it’s always been."',
      fullDescription: `Caretcoders isn't trying to become the biggest software company. We're building a generation of engineers, designers, researchers, and creators who refuse to accept "that's how it's always been." We want people to look at our work and ask: "How are these young people solving problems like this?" And one day, the answer will be simple: "Because they never stopped learning."`,
      icon: Award,
      tag: '⭐ Core Philosophy',
      reward: 'S+ Rank Vision',
      color: 'emerald',
      status: 'ACTIVE_GOAL'
    }
  ];

  const currentNode = roadmapNodes[activeNodeIndex];
  const hoveredNode = hoveredNodeIndex !== null ? roadmapNodes[hoveredNodeIndex] : null;

  return (
    <section id="journey" className="py-16 lg:py-24 bg-retro-grid border-b-2 border-[#E8E8C6]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header & View Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-[#474744] pb-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-share-tech text-amber-300 uppercase tracking-widest bg-amber-950/40 border border-amber-400/40 px-3 py-1">
              <Gamepad2 className="w-4 h-4 text-amber-300" />
              <span>THE STORY // STARTUP ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sixtyfour text-[#E8E8C6] tracking-tight">
              Startup Journey
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/80 leading-relaxed">
              Hover over roadmap pointers to inspect story milestones, party member stats, and campaign boss encounters.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center space-x-2 bg-[#252525] p-1 border-2 border-[#E8E8C6] shadow-[4px_4px_0px_#474744]">
            <button
              onClick={() => { cyberAudio.playClick(); setViewMode('roadmap'); }}
              className={`px-3 py-1.5 text-xs font-share-tech font-bold uppercase flex items-center space-x-2 transition-all ${
                viewMode === 'roadmap'
                  ? 'bg-[#E8E8C6] text-[#252525]'
                  : 'text-[#E8E8C6]/70 hover:text-[#E8E8C6]'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>Roadmap Map</span>
            </button>
            <button
              onClick={() => { cyberAudio.playClick(); setViewMode('full'); }}
              className={`px-3 py-1.5 text-xs font-share-tech font-bold uppercase flex items-center space-x-2 transition-all ${
                viewMode === 'full'
                  ? 'bg-[#E8E8C6] text-[#252525]'
                  : 'text-[#E8E8C6]/70 hover:text-[#E8E8C6]'
              }`}
            >
              <List className="w-4 h-4" />
              <span>Full Campaign Scroll</span>
            </button>
          </div>
        </div>

        {/* ROADMAP MAP VIEW MODE */}
        {viewMode === 'roadmap' && (
          <div className="space-y-8">
            
            {/* Interactive Roadmap Track Container */}
            <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-8 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-[#474744] pb-3 text-xs font-share-tech uppercase text-amber-300">
                <span className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-amber-300" />
                  <span>INTERACTIVE_MISSION_TRACK // HOVER POINTERS TO INSPECT</span>
                </span>
                <span className="font-mono text-emerald-400 font-bold hidden sm:inline">
                  [6 STAGES LOADED]
                </span>
              </div>

              {/* Horizontal Timeline Track (Desktop & Tablet) */}
              <div className="relative pt-8 pb-12 hidden md:block">
                
                {/* Connecting Laser Line */}
                <div className="absolute top-1/2 left-8 right-8 h-1 bg-[#474744] -translate-y-1/2 z-0">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400 transition-all duration-500"
                    style={{ width: `${(activeNodeIndex / (roadmapNodes.length - 1)) * 100}%` }}
                  />
                </div>

                {/* Pointer Nodes Track */}
                <div className="relative z-10 flex items-center justify-between px-4">
                  {roadmapNodes.map((node, idx) => {
                    const IconComp = node.icon;
                    const isActive = activeNodeIndex === idx;
                    const isHovered = hoveredNodeIndex === idx;

                    return (
                      <div
                        key={node.id}
                        className="relative flex flex-col items-center group cursor-pointer"
                        onMouseEnter={() => {
                          cyberAudio.playBeep(800, 0.04);
                          setHoveredNodeIndex(idx);
                        }}
                        onMouseLeave={() => setHoveredNodeIndex(null)}
                        onClick={() => {
                          cyberAudio.playClick();
                          setActiveNodeIndex(idx);
                        }}
                      >
                        {/* Hover Reticle Tooltip Card */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full mb-4 w-64 p-3 bg-[#1e1e1e] border-2 border-amber-300 shadow-[6px_6px_0px_#474744] z-30 pointer-events-none text-left"
                            >
                              <div className="flex items-center justify-between text-[10px] font-share-tech font-bold text-amber-300 border-b border-[#474744] pb-1.5 mb-1.5">
                                <span>{node.levelNumber} // {node.badge}</span>
                                <span className="text-cyan-300">{node.date}</span>
                              </div>
                              <h4 className="font-sixtyfour text-xs text-[#E8E8C6] mb-1">
                                {node.title}
                              </h4>
                              <p className="font-mono text-[11px] text-[#E8E8C6]/80 line-clamp-2 leading-tight">
                                {node.summary}
                              </p>
                              <div className="mt-2 pt-1 border-t border-[#474744] text-[9px] font-mono text-emerald-400 flex items-center justify-between font-bold">
                                <span>{node.tag}</span>
                                <span>CLICK TO PIN</span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Pointer Pin Radar Circle */}
                        <div
                          className={`w-12 h-12 border-2 flex items-center justify-center transition-all duration-300 relative ${
                            isActive
                              ? 'bg-amber-300 text-[#252525] border-amber-300 scale-110 shadow-[0_0_15px_rgba(252,211,77,0.5)]'
                              : isHovered
                              ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] scale-105'
                              : 'bg-[#252525] text-[#E8E8C6] border-[#E8E8C6]/60 hover:border-amber-300'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />

                          {/* Ping Ring for active node */}
                          {isActive && (
                            <span className="absolute -inset-1 border border-amber-300 animate-ping opacity-75" />
                          )}
                        </div>

                        {/* Node Label Below */}
                        <div className="mt-3 text-center">
                          <span className={`font-share-tech text-xs font-bold block uppercase tracking-wider ${
                            isActive ? 'text-amber-300' : 'text-[#E8E8C6]/80'
                          }`}>
                            {node.levelNumber}
                          </span>
                          <span className="font-mono text-[10px] text-[#E8E8C6]/60 block truncate max-w-[100px]">
                            {node.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Vertical Timeline Pointer Nodes for Mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:hidden">
                {roadmapNodes.map((node, idx) => {
                  const IconComp = node.icon;
                  const isActive = activeNodeIndex === idx;

                  return (
                    <button
                      key={node.id}
                      onClick={() => {
                        cyberAudio.playClick();
                        setActiveNodeIndex(idx);
                      }}
                      className={`p-3 border-2 text-left flex flex-col justify-between space-y-2 transition-all ${
                        isActive 
                          ? 'bg-amber-300 text-[#252525] border-amber-300 font-bold shadow-[4px_4px_0px_#474744]'
                          : 'bg-[#474744]/30 text-[#E8E8C6] border-[#E8E8C6]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-share-tech text-xs font-bold uppercase">{node.levelNumber}</span>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-sixtyfour text-xs truncate block">{node.title}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Active Inspected Node Deep-Dive Panel */}
            <motion.div
              key={currentNode.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`bg-[#252525] border-2 p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-6 ${
                currentNode.color === 'rose' ? 'border-rose-400' : 'border-[#E8E8C6]'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#474744] pb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 font-share-tech font-bold text-xs uppercase tracking-wider ${
                    currentNode.color === 'rose' 
                      ? 'bg-rose-500 text-white'
                      : currentNode.color === 'cyan'
                      ? 'bg-cyan-300 text-[#252525]'
                      : 'bg-amber-300 text-[#252525]'
                  }`}>
                    {currentNode.levelNumber} — {currentNode.badge}
                  </span>
                  <span className="text-xs font-mono text-cyan-300 font-bold">
                    DATE: {currentNode.date}
                  </span>
                </div>

                <span className="text-xs font-mono font-bold px-2.5 py-1 bg-emerald-950/60 border border-emerald-400 text-emerald-400">
                  {currentNode.tag}: {currentNode.reward}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-4xl font-sixtyfour text-[#E8E8C6] leading-snug">
                  {currentNode.title}
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#E8E8C6]/90 leading-relaxed">
                  {currentNode.fullDescription}
                </p>
              </div>

              {/* Special View for Level 03: Party Assembled Cards inside the inspected node */}
              {currentNode.id === 'level-03' && (
                <div className="pt-4 border-t border-[#474744] space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-share-tech font-bold text-amber-300 uppercase tracking-wider flex items-center">
                      <Users className="w-4 h-4 mr-2 text-amber-300" />
                      5 GUILD MEMBERS ASSEMBLED (DETAILS):
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partyMembersData.map((member, idx) => (
                      <div 
                        key={idx}
                        className="bg-[#2a2a2a] border-2 border-[#E8E8C6] p-4 shadow-[4px_4px_0px_#474744] flex flex-col justify-between space-y-3"
                      >
                        <div className="border-b border-[#474744] pb-2">
                          <h5 className="font-sixtyfour text-sm text-[#E8E8C6]">{member.name}</h5>
                          <span className="text-[10px] font-share-tech text-cyan-300 font-bold uppercase">{member.designation}</span>
                        </div>

                        <div className="space-y-2 text-xs font-mono">
                          <div className="bg-[#474744]/20 p-2 border border-[#474744]">
                            <span className="text-[10px] font-share-tech text-amber-300 font-bold uppercase block">Education</span>
                            {member.education.map((e, ei) => (
                              <div key={ei} className="text-[11px] text-[#E8E8C6]/80">• {e}</div>
                            ))}
                          </div>

                          <div className="text-[11px] text-[#E8E8C6]/80 italic bg-amber-950/30 p-2 border-l-2 border-amber-300">
                            "{member.funFact}"
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#474744]">
                          <a href={`mailto:${member.email}`} className="text-[11px] font-mono text-emerald-400 hover:underline">
                            {member.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Arrows for Nodes */}
              <div className="pt-4 border-t border-[#474744] flex items-center justify-between font-share-tech text-xs">
                <button
                  disabled={activeNodeIndex === 0}
                  onClick={() => {
                    cyberAudio.playClick();
                    setActiveNodeIndex(prev => Math.max(0, prev - 1));
                  }}
                  className="px-3 py-1.5 border border-[#E8E8C6] text-[#E8E8C6] hover:bg-[#E8E8C6] hover:text-[#252525] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← PREVIOUS STAGE
                </button>

                <span className="font-mono text-[#E8E8C6]/60">
                  STAGE {activeNodeIndex + 1} OF {roadmapNodes.length}
                </span>

                <button
                  disabled={activeNodeIndex === roadmapNodes.length - 1}
                  onClick={() => {
                    cyberAudio.playClick();
                    setActiveNodeIndex(prev => Math.min(roadmapNodes.length - 1, prev + 1));
                  }}
                  className="px-3 py-1.5 border border-[#E8E8C6] text-[#E8E8C6] hover:bg-[#E8E8C6] hover:text-[#252525] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  NEXT STAGE →
                </button>
              </div>

            </motion.div>

          </div>
        )}

        {/* FULL CAMPAIGN SCROLL MODE */}
        {viewMode === 'full' && (
          <div className="space-y-12">
            
            {/* LEVEL 01 */}
            <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#474744] pb-4">
                <span className="px-3 py-1 bg-amber-300 text-[#252525] font-share-tech font-bold text-xs uppercase">
                  LEVEL 01 — PRESS START (23 July 2025)
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">🏆 Caretcoders Initialized</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-sixtyfour text-[#E8E8C6]">
                What began as client work soon became something bigger.
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/90 leading-relaxed">
                Amisha and Rahil realized they didn’t want to build software on their own. Instead, they wanted to create a community of young, curious innovators who could work together to solve real-world problems through creativity, critical thinking, and collaboration.
              </p>
            </div>

            {/* LEVEL 02 */}
            <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#474744] pb-4">
                <span className="px-3 py-1 bg-cyan-300 text-[#252525] font-share-tech font-bold text-xs uppercase">
                  LEVEL 02 — SIDE QUEST (Finding the First Mission)
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">🏆 XP +250 Problem Discovered</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-sixtyfour text-amber-300">DetailMint: Born from Real Work</h3>
              <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/90 leading-relaxed">
                Before Caretcoders, Rahil worked as an accountant in a car detailing company. Conversations with owners and technicians exposed everyday operational struggles that software could solve. That observation became the first mission: DetailMint. Not an idea born in a meeting room—but from listening to people doing real work.
              </p>
            </div>

            {/* LEVEL 03 */}
            <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#474744] pb-4">
                <span className="px-3 py-1 bg-emerald-400 text-[#252525] font-share-tech font-bold text-xs uppercase">
                  LEVEL 03 — PARTY ASSEMBLED (The Party Grows)
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">GUILD_MEMBERS: 5 / 5</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partyMembersData.map((member, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#2a2a2a]/90 border-2 border-[#E8E8C6] p-5 shadow-[5px_5px_0px_#474744] flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-1.5 border-b-2 border-[#474744] pb-3">
                      <h4 className="font-sixtyfour text-lg text-[#E8E8C6]">{member.name}</h4>
                      <div className="text-xs font-share-tech font-bold text-cyan-300 uppercase">{member.designation}</div>
                    </div>

                    <div className="space-y-3 text-xs font-mono">
                      <div className="space-y-1 bg-[#474744]/20 p-2.5 border border-[#474744]">
                        <span className="text-[11px] font-share-tech text-amber-300 font-bold uppercase block">Education</span>
                        <ul className="space-y-1 text-[#E8E8C6]/90 text-[11px]">
                          {member.education.map((edu, eIdx) => (
                            <li key={eIdx}>▸ {edu}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {member.interests.map((interest, iIdx) => (
                          <span key={iIdx} className="px-2 py-0.5 bg-[#474744]/50 border border-[#E8E8C6]/30 text-[11px] text-[#E8E8C6]">
                            {interest}
                          </span>
                        ))}
                      </div>

                      <div className="bg-amber-950/30 border-l-2 border-amber-400 p-2.5 text-[11px] text-[#E8E8C6]/90 italic">
                        "{member.funFact}"
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-[#474744]">
                      <a href={`mailto:${member.email}`} className="text-[11px] font-share-tech text-emerald-400 font-bold hover:underline">
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LEVEL 04 */}
            <div className="bg-[#252525] border-2 border-rose-400/80 p-6 lg:p-8 shadow-[8px_8px_0px_#881337] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-rose-900/60 pb-4">
                <span className="px-3 py-1 bg-rose-500 text-white font-share-tech font-bold text-xs uppercase">
                  LEVEL 04 — BOSS BATTLE (Reality Encounter)
                </span>
                <span className="text-xs font-mono text-rose-400 font-bold">☠️ Reality Check</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-sixtyfour text-rose-200">DetailMint MVP & The Pivot Decision</h3>
              <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/90 leading-relaxed">
                DetailMint reached MVP stage. Twelve businesses agreed to pilot the platform, and the product earned appreciation through Startup India interactions. Then came the reality check. Funding applications were declined because the market was considered too narrow. At the same time, changes in the automotive industry made expansion significantly harder. Instead of forcing a launch, the team chose to pause and regroup.
              </p>
            </div>

            {/* LEVEL 05 */}
            <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#474744] pb-4">
                <span className="px-3 py-1 bg-amber-300 text-[#252525] font-share-tech font-bold text-xs uppercase">
                  LEVEL 05 — NEW QUEST ACCEPTED
                </span>
                <span className="text-xs font-mono text-amber-300 font-bold">🏆 Chemical-Reduced Precision Farming</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-sixtyfour text-emerald-400">Addressing Humanity's Oldest Agricultural Challenge</h3>
              <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/90 leading-relaxed">
                Every setback unlocked a new direction. Rather than giving up, Caretcoders expanded its vision beyond software. Today, the team is researching and developing a Chemical-Reduced Precision Farming Initiative, combining technology, research, and innovation to help address one of humanity's oldest challenges—how to grow more while using fewer chemicals.
              </p>
            </div>

          </div>
        )}

        {/* FINAL MISSION & PHILOSOPHY QUOTE BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="bg-[#252525] border-2 border-amber-300 p-8 lg:p-10 shadow-[10px_10px_0px_#474744] space-y-6 text-center relative overflow-hidden"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-share-tech text-[#252525] bg-amber-300 font-bold px-3 py-1 uppercase">
            <Award className="w-4 h-4 text-[#252525]" />
            <span>FINAL MISSION // THE CORE PHILOSOPHY</span>
          </div>

          <p className="text-sm sm:text-base lg:text-lg font-mono text-[#E8E8C6]/90 max-w-3xl mx-auto leading-relaxed">
            {finalMissionData.declaration}
          </p>

          <div className="bg-[#474744]/30 border-2 border-[#E8E8C6] p-6 max-w-2xl mx-auto space-y-3 shadow-[4px_4px_0px_#474744]">
            <p className="text-base sm:text-xl font-sixtyfour text-amber-300">
              {finalMissionData.quoteQuestion}
            </p>
            <div className="text-sm sm:text-lg font-share-tech font-bold text-emerald-400 tracking-wider uppercase pt-2 border-t border-[#474744]">
              And one day, we hope the answer is simple:
              <br />
              <span className="text-xl sm:text-2xl text-[#E8E8C6] block mt-2 italic font-sixtyfour">
                "{finalMissionData.quoteAnswer}"
              </span>
            </div>
          </div>
        </motion.div>

        {/* Future Roadmap & Voting Panel */}
        <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[8px_8px_0px_#474744] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#474744] pb-4 gap-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <h3 className="text-xl font-sixtyfour text-[#E8E8C6]">
                Future Roadmap & Mission Voting
              </h3>
            </div>
            <span className="text-xs font-share-tech text-[#E8E8C6]/70">
              VOTE TO PRIORITIZE ACTIVE QUEST SHIPS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapItems.map((item) => {
              const hasVoted = votedSet.has(item.id);
              return (
                <div key={item.id} className="bg-[#474744]/20 p-5 border border-[#E8E8C6]/40 space-y-3 font-mono">
                  <div className="flex items-center justify-between font-share-tech">
                    <span className="text-xs text-amber-300 font-bold uppercase">{item.eta} // {item.status}</span>
                    <button
                      onClick={() => handleVote(item.id)}
                      disabled={hasVoted}
                      className={`px-3 py-1 border text-xs font-bold flex items-center space-x-1.5 transition-all ${
                        hasVoted 
                          ? 'bg-emerald-950/60 border-emerald-400 text-emerald-400' 
                          : 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] hover:bg-[#E8E8C6]/90'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{hasVoted ? 'VOTED' : 'VOTE'} ({votesState[item.id]})</span>
                    </button>
                  </div>

                  <h4 className="text-base font-share-tech font-bold text-[#E8E8C6]">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#E8E8C6]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
