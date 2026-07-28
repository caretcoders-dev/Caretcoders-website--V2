import React, { useState } from 'react';
import { motion } from 'motion/react';
import { productsData } from '../data/products';
import { Product } from '../types';
import { cyberAudio } from '../utils/sound';
import { 
  ShieldCheck, 
  Sprout, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ChevronRight, 
  X, 
  Sparkles,
  Cpu,
  RefreshCw,
  Hash,
  Activity,
  FileCode2,
  Lock
} from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'detailmint' | 'precision-farming' | 'inksquirel'>('all');

  // DetailMint Interactive Minting Simulator State
  const [skuInput, setSkuInput] = useState('SKU_RETRO_CHIP_8801');
  const [batchInput, setBatchInput] = useState('2026-Q3-BATCH');
  const [mintResult, setMintResult] = useState<{ hash: string; zkProof: string; timestamp: string } | null>(null);
  const [isMinting, setIsMinting] = useState(false);

  // Precision Farming Interactive Telemetry Simulator State
  const [fieldAcres, setFieldAcres] = useState<number>(500);
  const [soilPh, setSoilPh] = useState<number>(6.8);
  const [pestRisk, setPestRisk] = useState<'LOW' | 'MEDIUM' | 'HIGH'>('MEDIUM');

  // InkSquirel Interactive Doc Synthesizer State
  const [sampleCodeInput, setSampleCodeInput] = useState<string>(
    `async function processOrder(orderId: string, amount: number): Promise<boolean> {\n  const valid = await validatePayment(amount);\n  if (!valid) return false;\n  await db.orders.update(orderId, { status: 'PAID' });\n  return true;\n}`
  );
  const [generatedDoc, setGeneratedDoc] = useState<string | null>(null);
  const [isGeneratingDoc, setIsGeneratingDoc] = useState(false);

  const handleMintSim = () => {
    cyberAudio.playClick();
    setIsMinting(true);
    setTimeout(() => {
      const cryptoHash = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const zkSnark = '0xzk' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setMintResult({
        hash: cryptoHash,
        zkProof: zkSnark,
        timestamp: new Date().toISOString()
      });
      setIsMinting(false);
      cyberAudio.playSuccess();
    }, 600);
  };

  const handleSynthesizeDocSim = () => {
    cyberAudio.playClick();
    setIsGeneratingDoc(true);
    setTimeout(() => {
      setGeneratedDoc(
        `### \`processOrder(orderId, amount)\` Documentation\n\n` +
        `Processes and settles e-commerce order payloads.\n\n` +
        `- **Parameters**:\n` +
        `  - \`orderId\` (string): Unique order UUID.\n` +
        `  - \`amount\` (number): Transaction monetary value.\n` +
        `- **Returns**: \`Promise<boolean>\` - True if payment settled and database updated.\n` +
        `- **AST Analysis**: 1 Async Function, 2 Await Calls, 1 Guard Condition.`
      );
      setIsGeneratingDoc(false);
      cyberAudio.playSuccess();
    }, 700);
  };

  const filteredProducts = activeTab === 'all' 
    ? productsData 
    : productsData.filter(p => p.id === activeTab);

  return (
    <section id="products" className="py-16 lg:py-24 bg-[#252525] border-b-2 border-[#E8E8C6]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#474744] pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-share-tech text-[#E8E8C6]/80 uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#E8E8C6]"></span>
              <span>CARETSUITES // PRODUCT ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sixtyfour text-[#E8E8C6] tracking-tight">
              Flagship Products
            </h2>
            <p className="text-sm font-mono text-[#E8E8C6]/70 max-w-2xl">
              High-throughput cryptographic asset minting, AI agricultural telemetry networks, and AST developer tools.
            </p>
          </div>

          {/* Sub-Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-share-tech text-xs">
            {[
              { id: 'all', label: 'ALL_PRODUCTS()' },
              { id: 'detailmint', label: 'DetailMint' },
              { id: 'precision-farming', label: 'Precision Farming' },
              { id: 'inksquirel', label: 'InkSquirel AI' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { cyberAudio.playClick(); setActiveTab(tab.id as unknown as typeof activeTab); }}
                className={`px-3 py-1.5 border transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] font-bold shadow-[2px_2px_0px_#474744]'
                    : 'bg-[#252525] text-[#E8E8C6] border-[#474744] hover:border-[#E8E8C6]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Overview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((prod, idx) => {
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                onClick={() => { cyberAudio.playClick(); setSelectedProduct(prod); }}
                className="bg-[#252525] text-[#E8E8C6] border-2 border-[#E8E8C6] shadow-[6px_6px_0px_#474744] hover:shadow-[10px_10px_0px_#474744] hover:border-amber-300 hover:-translate-y-1 p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                {/* Subtle Cyber Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Card Header: Icon, Type & Launch Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#474744] pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-9 h-9 bg-[#474744] border border-[#E8E8C6] flex items-center justify-center text-[#E8E8C6] group-hover:border-amber-300 transition-colors">
                        {prod.id === 'detailmint' && <ShieldCheck className="w-5 h-5 text-amber-300" />}
                        {prod.id === 'precision-farming' && <Sprout className="w-5 h-5 text-emerald-400" />}
                        {prod.id === 'inksquirel' && <FileText className="w-5 h-5 text-cyan-300" />}
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-share-tech font-bold uppercase border border-cyan-400/60 text-cyan-300 bg-cyan-950/40">
                        {prod.type}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 text-[10px] font-share-tech font-bold border border-amber-400/80 text-amber-300 bg-amber-950/40 tracking-tight">
                      LAUNCH: {prod.launchYear}
                    </span>
                  </div>

                  {/* Title & Hook */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-sixtyfour text-[#E8E8C6] group-hover:text-amber-200 transition-colors leading-snug">
                      {prod.name}
                    </h3>
                    <div className="inline-block mt-2 px-2.5 py-1 bg-[#474744]/40 border-l-2 border-amber-300 text-xs font-share-tech font-bold text-amber-200 italic">
                      Hook: "{prod.hook}"
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-mono text-[#E8E8C6]/85 leading-relaxed">
                    {prod.shortDesc}
                  </p>

                  {/* Metrics Summary */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 bg-[#474744]/20 border border-[#474744] text-xs font-share-tech">
                    {prod.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <span className="text-[10px] text-[#E8E8C6]/60 block uppercase">{m.label}</span>
                        <strong className="font-mono text-[#E8E8C6] group-hover:text-amber-100">{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {prod.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 bg-[#474744] text-[#E8E8C6] border border-[#E8E8C6]/30 group-hover:border-amber-300/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* On Hover Action Button / Link */}
                <div className="pt-6">
                  <div className="w-full py-2.5 px-4 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs border-2 border-[#E8E8C6] shadow-[3px_3px_0px_#474744] group-hover:bg-amber-300 group-hover:border-amber-300 transition-all flex items-center justify-between">
                    <span className="tracking-wider uppercase flex items-center">
                      <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#252525]" />
                      Peek Inside
                    </span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Product Simulators Grid */}
        <div className="border-2 border-[#E8E8C6] bg-[#252525] p-6 shadow-[8px_8px_0px_#474744] space-y-6">
          <div className="flex items-center space-x-2 border-b border-[#474744] pb-3">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg font-share-tech font-bold text-[#E8E8C6] uppercase tracking-wide">
              INTERACTIVE PRODUCT LABS & SIMULATORS
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-xs font-mono">
            
            {/* Lab 1: DetailMint Simulator */}
            <div className="bg-[#474744]/20 p-4 border border-[#E8E8C6]/40 space-y-3">
              <div className="flex items-center justify-between font-share-tech border-b border-[#474744] pb-2">
                <span className="font-bold text-[#E8E8C6] flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1 text-amber-300" /> DetailMint zk-Anchor
                </span>
                <span className="text-[10px] text-emerald-400">SUB-10MS</span>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="text-[10px] text-[#E8E8C6]/70 block">SKU / ASSET ID:</label>
                  <input
                    type="text"
                    value={skuInput}
                    onChange={(e) => setSkuInput(e.target.value)}
                    className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-1.5 text-[#E8E8C6] text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-[#E8E8C6]/70 block">BATCH LOT:</label>
                  <input
                    type="text"
                    value={batchInput}
                    onChange={(e) => setBatchInput(e.target.value)}
                    className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-1.5 text-[#E8E8C6] text-xs font-mono"
                  />
                </div>
                <button
                  onClick={handleMintSim}
                  disabled={isMinting}
                  className="w-full py-1.5 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs flex items-center justify-center space-x-1"
                >
                  {isMinting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Hash className="w-3.5 h-3.5" />}
                  <span>{isMinting ? 'GENERATING_ZK_PROOF...' : 'GENERATE_HASH_ANCHOR()'}</span>
                </button>
              </div>

              {mintResult && (
                <div className="bg-[#252525] p-2 border border-emerald-400 space-y-1 text-[11px] font-mono text-emerald-300 overflow-hidden">
                  <p className="font-bold text-white">[STATUS: ANCHORED]</p>
                  <p className="truncate">HASH: {mintResult.hash}</p>
                  <p className="truncate">SNARK: {mintResult.zkProof}</p>
                </div>
              )}
            </div>

            {/* Lab 2: Precision Farming Reduction Simulator */}
            <div className="bg-[#474744]/20 p-4 border border-[#E8E8C6]/40 space-y-3">
              <div className="flex items-center justify-between font-share-tech border-b border-[#474744] pb-2">
                <span className="font-bold text-[#E8E8C6] flex items-center">
                  <Sprout className="w-4 h-4 mr-1 text-emerald-400" /> AgriTech Savings Matrix
                </span>
                <span className="text-[10px] text-amber-300">LORA_MESH</span>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-[#E8E8C6]/70">FIELD SIZE:</span>
                    <span className="font-bold text-[#E8E8C6]">{fieldAcres} ACRES</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={fieldAcres}
                    onChange={(e) => { cyberAudio.playKeypress(); setFieldAcres(Number(e.target.value)); }}
                    className="w-full accent-[#E8E8C6]"
                  />
                </div>

                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[#E8E8C6]/70">PEST VECTOR RISK:</span>
                  <div className="flex space-x-1 font-share-tech">
                    {(['LOW', 'MEDIUM', 'HIGH'] as const).map(risk => (
                      <button
                        key={risk}
                        onClick={() => { cyberAudio.playClick(); setPestRisk(risk); }}
                        className={`px-1.5 py-0.5 border ${
                          pestRisk === risk ? 'bg-[#E8E8C6] text-[#252525] font-bold' : 'border-[#474744] text-[#E8E8C6]'
                        }`}
                      >
                        {risk}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#252525] p-2.5 border border-[#E8E8C6]/30 space-y-1 font-share-tech">
                  <div className="flex justify-between text-xs">
                    <span>CHEMICAL REDUCTION:</span>
                    <strong className="text-emerald-400">68.4% SAVED</strong>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>EST. COST SAVINGS:</span>
                    <strong className="text-amber-300">${(fieldAcres * 42.5).toLocaleString()} / YR</strong>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>WATER PRESERVATION:</span>
                    <strong className="text-cyan-300">{(fieldAcres * 120).toLocaleString()} GAL</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Lab 3: InkSquirel AI Doc Preview */}
            <div className="bg-[#474744]/20 p-4 border border-[#E8E8C6]/40 space-y-3">
              <div className="flex items-center justify-between font-share-tech border-b border-[#474744] pb-2">
                <span className="font-bold text-[#E8E8C6] flex items-center">
                  <FileText className="w-4 h-4 mr-1 text-cyan-300" /> InkSquirel AST Synthesizer
                </span>
                <span className="text-[10px] text-cyan-300">GEMINI_AI</span>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="text-[10px] text-[#E8E8C6]/70 block">CODE SNIPPET TO PARSE:</label>
                  <textarea
                    rows={3}
                    value={sampleCodeInput}
                    onChange={(e) => setSampleCodeInput(e.target.value)}
                    className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-1.5 text-[#E8E8C6] text-[11px] font-mono leading-tight"
                  />
                </div>
                <button
                  onClick={handleSynthesizeDocSim}
                  disabled={isGeneratingDoc}
                  className="w-full py-1.5 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs flex items-center justify-center space-x-1"
                >
                  {isGeneratingDoc ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <FileCode2 className="w-3.5 h-3.5" />}
                  <span>{isGeneratingDoc ? 'PARSING_AST_NODES...' : 'SYNTHESIZE_DOCS()'}</span>
                </button>
              </div>

              {generatedDoc && (
                <div className="bg-[#252525] p-2 border border-cyan-400 text-[10px] font-mono text-[#E8E8C6] space-y-1 max-h-24 overflow-y-auto">
                  <p className="text-cyan-300 font-bold">[AI DOC GENERATED]</p>
                  <p className="whitespace-pre-wrap">{generatedDoc}</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* Product Modal Drawer */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#252525] border-2 border-[#E8E8C6] max-w-3xl w-full p-6 shadow-[10px_10px_0px_#474744] space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => { cyberAudio.playClick(); setSelectedProduct(null); }}
              className="absolute top-4 right-4 p-1 bg-[#474744] text-[#E8E8C6] hover:bg-[#E8E8C6] hover:text-[#252525] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b-2 border-[#474744] pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-share-tech font-bold">
                <span className="px-2 py-0.5 border border-cyan-400 text-cyan-300 bg-cyan-950/40">
                  [{selectedProduct.type}]
                </span>
                <span className="px-2 py-0.5 border border-amber-400 text-amber-300 bg-amber-950/40">
                  LAUNCH: {selectedProduct.launchYear}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-sixtyfour text-[#E8E8C6]">{selectedProduct.name}</h3>
              <p className="text-sm font-share-tech text-amber-200 font-bold italic">
                Hook: "{selectedProduct.hook}"
              </p>
            </div>

            <p className="text-sm font-mono text-[#E8E8C6]/80 leading-relaxed">
              {selectedProduct.fullDesc}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-share-tech font-bold text-[#E8E8C6] uppercase tracking-wider">
                ARCHITECTURAL HIGHLIGHTS & CAPABILITIES:
              </h4>
              <div className="space-y-1.5 font-mono text-xs">
                {selectedProduct.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-[#E8E8C6]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#474744]/30 p-3 border border-[#474744] text-xs font-share-tech">
              {selectedProduct.metrics.map((m, i) => (
                <div key={i}>
                  <span className="text-[10px] text-[#E8E8C6]/60 block">{m.label}</span>
                  <strong className="text-[#E8E8C6] font-mono text-sm">{m.value}</strong>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end space-x-3 font-share-tech">
              <button
                onClick={() => { cyberAudio.playClick(); setSelectedProduct(null); }}
                className="px-4 py-2 bg-[#474744] text-[#E8E8C6] font-bold text-xs"
              >
                CLOSE_MODAL()
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
