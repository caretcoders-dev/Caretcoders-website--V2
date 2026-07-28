import React, { useState } from 'react';
import { apiEndpointsData, sdkExamples, changelogData } from '../data/apiDocs';
import { ApiEndpoint } from '../types';
import { cyberAudio } from '../utils/sound';
import { 
  FileCode2, 
  Key, 
  Terminal, 
  Send, 
  Copy, 
  Check, 
  History, 
  Code2, 
  Layers, 
  ChevronRight, 
  Sparkles,
  Zap,
  RefreshCw,
  Globe
} from 'lucide-react';

export const ApiDocsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Authentication');
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(apiEndpointsData[0]);
  const [selectedSdkTab, setSelectedSdkTab] = useState<'javascript' | 'python' | 'go' | 'rust'>('javascript');
  const [copiedCode, setCopiedCode] = useState(false);

  // Live Endpoint Tester State
  const [customReqBody, setCustomReqBody] = useState<string>(selectedEndpoint.requestBody || '');
  const [liveResponse, setLiveResponse] = useState<string | null>(null);
  const [isExecutingApi, setIsExecutingApi] = useState(false);

  // API Key Generator Simulation
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  const categories = [
    'Getting Started',
    'Authentication',
    'DetailMint API',
    'AgriTech Telemetry',
    'InkSquirel AI',
    'Webhooks',
    'SDKs & Examples',
    'Changelog'
  ];

  const filteredEndpoints = apiEndpointsData.filter(ep => ep.category === activeCategory);

  const handleCopy = (code: string) => {
    cyberAudio.playClick();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunEndpointTest = () => {
    cyberAudio.playClick();
    setIsExecutingApi(true);
    setTimeout(() => {
      setLiveResponse(selectedEndpoint.responseBody);
      setIsExecutingApi(false);
      cyberAudio.playSuccess();
    }, 500);
  };

  const handleGenerateApiKey = () => {
    cyberAudio.playClick();
    const key = 'cc_live_' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setGeneratedKey(key);
    cyberAudio.playSuccess();
  };

  return (
    <div className="min-h-screen bg-retro-dots py-12 lg:py-20 text-[#E8E8C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="border-b-2 border-[#E8E8C6]/30 pb-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#252525] border border-[#E8E8C6] shadow-[2px_2px_0px_#474744] text-xs font-share-tech">
            <FileCode2 className="w-3.5 h-3.5 text-amber-300" />
            <span>DEVELOPER HUB // API SPECIFICATIONS & SDKS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sixtyfour text-[#E8E8C6]">
            API Documentation
          </h1>

          <p className="text-sm font-mono text-[#E8E8C6]/75 max-w-3xl leading-relaxed">
            Complete technical API reference, SDK quickstarts, webhook event signatures, and platform integration changelogs for CaretCoders services.
          </p>
        </div>

        {/* Sidebar + Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: API Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-2 font-share-tech text-xs">
            <div className="text-[10px] text-[#E8E8C6]/60 uppercase tracking-wider px-2 pb-1 border-b border-[#474744]">
              DOCUMENTATION INDEX
            </div>

            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveCategory(cat);
                  const first = apiEndpointsData.find(ep => ep.category === cat);
                  if (first) {
                    setSelectedEndpoint(first);
                    setCustomReqBody(first.requestBody || '');
                    setLiveResponse(null);
                  }
                }}
                className={`w-full text-left p-2.5 border transition-all flex items-center justify-between ${
                  activeCategory === cat
                    ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] font-bold shadow-[3px_3px_0px_#474744]'
                    : 'bg-[#252525] text-[#E8E8C6] border-[#474744] hover:border-[#E8E8C6]'
                }`}
              >
                <span>{cat}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </button>
            ))}
          </div>

          {/* Right Column: Main Content Area */}
          <div className="lg:col-span-9 bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-8 font-mono">
            
            {/* Category 1: Getting Started */}
            {activeCategory === 'Getting Started' && (
              <div className="space-y-6">
                <div className="border-b-2 border-[#474744] pb-4">
                  <span className="text-xs font-share-tech text-amber-300 font-bold uppercase block">// OVERVIEW</span>
                  <h2 className="text-3xl font-sixtyfour text-[#E8E8C6]">Getting Started</h2>
                </div>

                <p className="text-xs sm:text-sm text-[#E8E8C6]/85 leading-relaxed">
                  The CaretCoders API is organized around RESTful HTTP endpoints and WebSocket streams. All request and response payloads use standard JSON encoding with strict ISO-8601 UTC timestamps.
                </p>

                <div className="bg-[#474744]/20 p-4 border border-[#E8E8C6]/40 space-y-3 text-xs">
                  <h3 className="font-share-tech font-bold text-[#E8E8C6] text-sm">BASE API ENDPOINT URL:</h3>
                  <div className="bg-black/50 p-3 border border-[#E8E8C6]/30 text-emerald-400 font-mono flex items-center justify-between">
                    <span>https://api.caretcoders.com/v1</span>
                    <button
                      onClick={() => handleCopy('https://api.caretcoders.com/v1')}
                      className="px-2 py-0.5 bg-[#474744] text-[#E8E8C6] text-[10px]"
                    >
                      COPY_URL()
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Category 2: Authentication */}
            {activeCategory === 'Authentication' && (
              <div className="space-y-6">
                <div className="border-b-2 border-[#474744] pb-4">
                  <span className="text-xs font-share-tech text-amber-300 font-bold uppercase block">// SECURITY & KEYS</span>
                  <h2 className="text-3xl font-sixtyfour text-[#E8E8C6]">Authentication</h2>
                </div>

                <p className="text-xs text-[#E8E8C6]/85 leading-relaxed">
                  Authenticate requests by passing your CaretCoders Bearer Token in the HTTP Authorization header.
                </p>

                <div className="bg-black/50 p-3 border border-[#E8E8C6]/30 text-amber-300 text-xs">
                  Authorization: Bearer cc_live_99f2a0d182e04f9812a4b89001
                </div>

                {/* API Key Generator Simulator */}
                <div className="bg-[#474744]/20 p-4 border border-[#E8E8C6]/40 space-y-3">
                  <h3 className="font-share-tech font-bold text-[#E8E8C6] text-sm flex items-center">
                    <Key className="w-4 h-4 mr-1.5 text-amber-300" /> SIMULATE API KEY GENERATION
                  </h3>
                  <p className="text-xs text-[#E8E8C6]/70">
                    Generate a temporary scoped sandbox key to test API endpoints.
                  </p>

                  <button
                    onClick={handleGenerateApiKey}
                    className="px-4 py-2 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs"
                  >
                    GENERATE_SANDBOX_KEY()
                  </button>

                  {generatedKey && (
                    <div className="bg-[#252525] p-3 border border-emerald-400 text-emerald-300 text-xs font-mono space-y-1">
                      <span className="font-bold text-white block">[KEY_GENERATED]</span>
                      <p className="select-all font-bold">{generatedKey}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Category 3: API Reference (DetailMint, AgriTech, InkSquirel) */}
            {['DetailMint API', 'AgriTech Telemetry', 'InkSquirel AI', 'Webhooks'].includes(activeCategory) && (
              <div className="space-y-6">
                <div className="border-b-2 border-[#474744] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-share-tech text-amber-300 font-bold uppercase block">// ENDPOINT SPEC</span>
                    <h2 className="text-3xl font-sixtyfour text-[#E8E8C6]">{activeCategory}</h2>
                  </div>
                  <div className="flex space-x-2 font-share-tech text-xs">
                    {filteredEndpoints.map(ep => (
                      <button
                        key={ep.id}
                        onClick={() => {
                          cyberAudio.playClick();
                          setSelectedEndpoint(ep);
                          setCustomReqBody(ep.requestBody || '');
                          setLiveResponse(null);
                        }}
                        className={`px-2.5 py-1 border ${
                          selectedEndpoint.id === ep.id ? 'bg-[#E8E8C6] text-[#252525] font-bold' : 'border-[#474744] text-[#E8E8C6]'
                        }`}
                      >
                        {ep.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Endpoint Card */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 font-share-tech">
                    <span className={`px-2.5 py-1 font-bold text-xs ${
                      selectedEndpoint.method === 'POST' ? 'bg-amber-400 text-[#252525]' : 'bg-emerald-400 text-[#252525]'
                    }`}>
                      {selectedEndpoint.method}
                    </span>
                    <span className="font-mono text-sm text-emerald-300 font-bold bg-black/40 px-3 py-1 border border-[#474744]">
                      {selectedEndpoint.path}
                    </span>
                  </div>

                  <p className="text-xs text-[#E8E8C6]/85 leading-relaxed">
                    {selectedEndpoint.description}
                  </p>

                  {/* cURL Example */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-share-tech">
                      <span className="text-[#E8E8C6]/70">cURL EXAMPLE:</span>
                      <button
                        onClick={() => handleCopy(selectedEndpoint.curlExample)}
                        className="text-[10px] text-amber-300 underline"
                      >
                        COPY_CURL()
                      </button>
                    </div>
                    <div className="bg-[#1a1a1a] p-3 border border-[#474744] text-xs text-amber-200 overflow-x-auto">
                      <pre><code>{selectedEndpoint.curlExample}</code></pre>
                    </div>
                  </div>

                  {/* Endpoint Request Body & Live Test Runner */}
                  <div className="bg-[#474744]/20 p-4 border border-[#E8E8C6]/40 space-y-3">
                    <div className="flex items-center justify-between font-share-tech">
                      <span className="font-bold text-[#E8E8C6] text-xs">INTERACTIVE ENDPOINT TESTER</span>
                      <button
                        onClick={handleRunEndpointTest}
                        disabled={isExecutingApi}
                        className="px-3 py-1 bg-[#E8E8C6] text-[#252525] font-bold text-xs flex items-center space-x-1"
                      >
                        {isExecutingApi ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
                        <span>{isExecutingApi ? 'EXECUTING...' : 'RUN_TEST_REQUEST()'}</span>
                      </button>
                    </div>

                    {selectedEndpoint.requestBody && (
                      <textarea
                        rows={5}
                        value={customReqBody}
                        onChange={(e) => setCustomReqBody(e.target.value)}
                        className="w-full bg-[#1a1a1a] border border-[#474744] p-2 text-xs text-amber-200 outline-none font-mono"
                      />
                    )}

                    {liveResponse && (
                      <div className="space-y-1">
                        <span className="text-[10px] text-emerald-400 font-bold block font-share-tech">
                          [HTTP 200 OK - LIVE RESPONSE]
                        </span>
                        <div className="bg-black/80 p-3 border border-emerald-400 text-xs text-emerald-300 overflow-x-auto">
                          <pre><code>{liveResponse}</code></pre>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Category 4: SDKs & Examples */}
            {activeCategory === 'SDKs & Examples' && (
              <div className="space-y-6">
                <div className="border-b-2 border-[#474744] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-share-tech text-amber-300 font-bold uppercase block">// CLIENT LIBRARIES</span>
                    <h2 className="text-3xl font-sixtyfour text-[#E8E8C6]">SDKs & Code Examples</h2>
                  </div>

                  {/* SDK Tabs */}
                  <div className="flex space-x-1 font-share-tech text-xs">
                    {(['javascript', 'python', 'go', 'rust'] as const).map(lang => (
                      <button
                        key={lang}
                        onClick={() => { cyberAudio.playClick(); setSelectedSdkTab(lang); }}
                        className={`px-3 py-1 border capitalize ${
                          selectedSdkTab === lang ? 'bg-[#E8E8C6] text-[#252525] font-bold' : 'border-[#474744] text-[#E8E8C6]'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-share-tech">
                    <span className="text-[#E8E8C6]/70 uppercase">{selectedSdkTab} OFFICIAL SDK SNIPPET:</span>
                    <button
                      onClick={() => handleCopy(sdkExamples[selectedSdkTab])}
                      className="text-[10px] text-amber-300 underline"
                    >
                      {copiedCode ? 'COPIED!' : 'COPY_SDK_CODE()'}
                    </button>
                  </div>

                  <div className="bg-[#1a1a1a] p-4 border border-[#E8E8C6]/40 text-xs text-amber-200 overflow-x-auto">
                    <pre><code>{sdkExamples[selectedSdkTab]}</code></pre>
                  </div>
                </div>
              </div>
            )}

            {/* Category 5: Technical Changelog */}
            {activeCategory === 'Changelog' && (
              <div className="space-y-6">
                <div className="border-b-2 border-[#474744] pb-4">
                  <span className="text-xs font-share-tech text-amber-300 font-bold uppercase block">// VERSION HISTORY</span>
                  <h2 className="text-3xl font-sixtyfour text-[#E8E8C6]">Technical Changelog</h2>
                </div>

                <div className="space-y-6">
                  {changelogData.map((log, idx) => (
                    <div key={idx} className="bg-[#474744]/20 p-5 border border-[#474744] space-y-3">
                      <div className="flex items-center justify-between font-share-tech border-b border-[#474744] pb-2">
                        <span className="text-base font-bold text-amber-300">{log.version} - {log.title}</span>
                        <span className="text-xs text-[#E8E8C6]/60">{log.date}</span>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        {log.changes.map((c, i) => (
                          <div key={i} className="flex items-start space-x-2 text-[#E8E8C6]">
                            <span className={`px-1.5 py-0.5 text-[9px] font-share-tech uppercase font-bold shrink-0 ${
                              c.type === 'feature' ? 'bg-emerald-950 text-emerald-400 border border-emerald-400' :
                              c.type === 'improvement' ? 'bg-amber-950 text-amber-300 border border-amber-300' : 'bg-purple-950 text-purple-300 border border-purple-300'
                            }`}>
                              {c.type}
                            </span>
                            <span>{c.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
