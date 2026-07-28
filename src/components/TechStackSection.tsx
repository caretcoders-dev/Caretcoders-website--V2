import React, { useState } from 'react';
import { motion } from 'motion/react';
import { techStackData } from '../data/techStack';
import { TechItem } from '../types';
import { cyberAudio } from '../utils/sound';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Cloud, 
  Database, 
  Bot, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles,
  Grid
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TechItem['category'] | 'ALL'>('ALL');
  const [selectedTech, setSelectedTech] = useState<TechItem>(techStackData[0]);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories: (TechItem['category'] | 'ALL')[] = [
    'ALL',
    'Frontend',
    'Backend',
    'Mobile',
    'Cloud & DevOps',
    'Database',
    'AI & Automation'
  ];

  const filteredItems = activeCategory === 'ALL' 
    ? techStackData 
    : techStackData.filter(t => t.category === activeCategory);

  const handleCopy = (code: string) => {
    cyberAudio.playClick();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    'ALL': <Grid className="w-4 h-4 text-amber-300" />,
    'Frontend': <Code2 className="w-4 h-4 text-amber-300" />,
    'Backend': <Server className="w-4 h-4 text-emerald-400" />,
    'Mobile': <Smartphone className="w-4 h-4 text-cyan-300" />,
    'Cloud & DevOps': <Cloud className="w-4 h-4 text-purple-400" />,
    'Database': <Database className="w-4 h-4 text-amber-400" />,
    'AI & Automation': <Bot className="w-4 h-4 text-rose-400" />
  };

  return (
    <section id="tech-stack" className="py-16 lg:py-24 bg-[#252525] border-b-2 border-[#E8E8C6]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#474744] pb-6 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-share-tech text-amber-300 uppercase tracking-widest bg-amber-950/40 border border-amber-400/40 px-3 py-1">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>STACK MATRIX // VISUAL LOGO DIRECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sixtyfour text-[#E8E8C6] tracking-tight">
              Technology Stack
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/80 leading-relaxed">
              Official technology stack logos powering Caretcoders microservices, agritech telemetry engines, and AI agents.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 font-share-tech text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveCategory(cat);
                  const first = cat === 'ALL' ? techStackData[0] : techStackData.find(t => t.category === cat);
                  if (first) setSelectedTech(first);
                }}
                className={`px-3 py-1.5 border transition-all flex items-center space-x-1.5 ${
                  activeCategory === cat 
                    ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] font-bold shadow-[3px_3px_0px_#474744]'
                    : 'bg-[#252525] text-[#E8E8C6] border-[#474744] hover:border-[#E8E8C6]'
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Global Logo Strip Wall */}
        <div className="bg-[#1a1a1a] border-2 border-[#E8E8C6] p-4 lg:p-6 shadow-[6px_6px_0px_#474744] space-y-3">
          <div className="flex items-center justify-between text-xs font-share-tech uppercase text-amber-300 border-b border-[#474744] pb-2">
            <span>OFFICIAL LOGO SUITE ({techStackData.length} CORE TECHNOLOGIES)</span>
            <span className="text-[#E8E8C6]/60 font-mono text-[10px]">SELECT ANY LOGO TO INSPECT</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
            {techStackData.map((item) => {
              const isSelected = selectedTech.name === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    cyberAudio.playClick();
                    setSelectedTech(item);
                  }}
                  title={`${item.name} (${item.category})`}
                  className={`p-3 border-2 transition-all flex items-center justify-center group relative ${
                    isSelected 
                      ? 'bg-amber-300 border-amber-300 scale-110 shadow-[0_0_12px_rgba(252,211,77,0.4)]' 
                      : 'bg-[#252525] border-[#474744] hover:border-[#E8E8C6] hover:bg-[#333]'
                  }`}
                >
                  <div className="flex items-center space-x-1.5">
                    {item.logoUrls.map((url, uIdx) => (
                      <img 
                        key={uIdx}
                        src={url}
                        alt={`${item.name} logo`}
                        className="w-7 h-7 object-contain filter drop-shadow-sm transition-transform group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Logo Cards Grid & Code Inspector Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Logo Technology Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item, idx) => {
              const isSelected = selectedTech.name === item.name;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  onClick={() => { cyberAudio.playClick(); setSelectedTech(item); }}
                  className={`p-4 border-2 cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                    isSelected 
                      ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] shadow-[5px_5px_0px_#474744]'
                      : 'bg-[#252525] text-[#E8E8C6] border-[#474744] hover:border-[#E8E8C6]/80'
                  }`}
                >
                  {/* Logo Display Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#474744]/40 pb-2.5">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 border flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#252525] border-[#252525]' : 'bg-[#1a1a1a] border-[#E8E8C6]/40'
                      }`}>
                        <div className="flex items-center space-x-1">
                          {item.logoUrls.map((url, uIdx) => (
                            <img 
                              key={uIdx}
                              src={url}
                              alt={`${item.name} logo`}
                              className="w-6 h-6 object-contain"
                              referrerPolicy="no-referrer"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="font-share-tech font-bold text-sm leading-tight">
                        {item.name}
                      </span>
                    </div>

                    <span className={`text-[10px] px-2 py-0.5 border font-mono shrink-0 ${
                      isSelected ? 'bg-[#252525] text-[#E8E8C6] border-[#252525]' : 'bg-[#474744] text-[#E8E8C6] border-[#E8E8C6]/30'
                    }`}>
                      v{item.version}
                    </span>
                  </div>

                  <p className={`text-xs font-mono line-clamp-2 ${isSelected ? 'text-[#252525]/90' : 'text-[#E8E8C6]/75'}`}>
                    {item.description}
                  </p>

                  {/* Proficiency Meter Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[10px] font-mono opacity-80 font-bold">
                      <span>PROFICIENCY</span>
                      <span>{item.proficiencyLevel}%</span>
                    </div>
                    <div className={`w-full h-1.5 border ${isSelected ? 'border-[#252525] bg-[#252525]/20' : 'border-[#474744] bg-[#252525]'}`}>
                      <div 
                        className={`h-full ${isSelected ? 'bg-[#252525]' : 'bg-emerald-400'}`} 
                        style={{ width: `${item.proficiencyLevel}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Active Logo & Code Inspector Window */}
          <div className="lg:col-span-6 bg-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[8px_8px_0px_#474744] space-y-5 font-mono lg:sticky lg:top-24">
            
            {/* Window Header with Prominent Logo */}
            <div className="flex items-center justify-between border-b-2 border-[#474744] pb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#1a1a1a] border-2 border-amber-300 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    {selectedTech.logoUrls.map((url, uIdx) => (
                      <img 
                        key={uIdx}
                        src={url}
                        alt={`${selectedTech.name} logo`}
                        className="w-8 h-8 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sixtyfour text-lg text-[#E8E8C6]">
                    {selectedTech.name}
                  </h3>
                  <span className="text-xs font-share-tech font-bold text-amber-300 uppercase">
                    CATEGORY: {selectedTech.category}
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-1 bg-[#474744] text-emerald-400 font-mono text-xs border border-[#E8E8C6]/30 font-bold">
                v{selectedTech.version}
              </span>
            </div>

            <p className="text-xs text-[#E8E8C6]/90 leading-relaxed bg-[#474744]/20 p-3.5 border border-[#474744]">
              {selectedTech.description}
            </p>

            {/* Live Sample Code Snippet Box */}
            {selectedTech.sampleCode && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-share-tech">
                  <span className="text-[#E8E8C6]/70 uppercase">INTEGRATION CODE SNIPPET:</span>
                  <button
                    onClick={() => handleCopy(selectedTech.sampleCode!)}
                    className="flex items-center space-x-1 px-2.5 py-1 bg-[#474744] text-[#E8E8C6] border border-[#E8E8C6]/40 text-[10px] hover:bg-[#E8E8C6] hover:text-[#252525] transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'COPIED!' : 'COPY_SNIPPET()'}</span>
                  </button>
                </div>

                <div className="bg-[#1a1a1a] p-4 border border-[#E8E8C6]/40 text-xs text-amber-200 font-mono overflow-x-auto shadow-inner">
                  <pre className="whitespace-pre"><code>{selectedTech.sampleCode}</code></pre>
                </div>
              </div>
            )}

            {/* Spec Breakdown Bar */}
            <div className="grid grid-cols-3 gap-2 bg-[#474744]/30 p-3 border border-[#474744] text-xs font-share-tech">
              <div>
                <span className="text-[10px] text-[#E8E8C6]/60 block">VERSION</span>
                <strong className="text-[#E8E8C6] font-mono">{selectedTech.version}</strong>
              </div>
              <div>
                <span className="text-[10px] text-[#E8E8C6]/60 block">EXPERIENCE</span>
                <strong className="text-emerald-400 font-mono">PRODUCTION READY</strong>
              </div>
              <div>
                <span className="text-[10px] text-[#E8E8C6]/60 block">DEPLOYMENT</span>
                <strong className="text-cyan-300 font-mono">CLOUD / EDGE</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
