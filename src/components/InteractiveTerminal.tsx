import React, { useState, useRef, useEffect } from 'react';
import { NavigationPage, HomeSection } from '../types';
import { cyberAudio } from '../utils/sound';
import { Terminal, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';

interface InteractiveTerminalProps {
  onNavigatePage: (page: NavigationPage) => void;
  onScrollSection: (section: HomeSection) => void;
}

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  onNavigatePage,
  onScrollSection
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'caretcoders --init',
      response: (
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="text-emerald-400 font-bold">[SYS_BOOT] CaretCoders Core Microservices Initialized.</p>
          <p className="text-[#E8E8C6]/80">Type <span className="text-[#E8E8C6] font-bold bg-[#474744] px-1">help</span> or click preset commands below to execute terminal routines.</p>
        </div>
      )
    }
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    cyberAudio.playClick();

    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let responseNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        responseNode = (
          <div className="space-y-1 text-xs">
            <p className="text-amber-300 font-bold">AVAILABLE TERMINAL COMMANDS:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pl-2 text-[#E8E8C6]/90 font-mono">
              <div><span className="text-emerald-400">products</span> - View DetailMint, Farm & InkSquirel</div>
              <div><span className="text-emerald-400">stack</span> - Inspect tech layers</div>
              <div><span className="text-emerald-400">schedule</span> - Book meeting slot</div>
              <div><span className="text-emerald-400">contact</span> - Send business query</div>
              <div><span className="text-emerald-400">roadmap</span> - View upcoming milestones</div>
              <div><span className="text-emerald-400">blog</span> - Open Engineering Blog</div>
              <div><span className="text-emerald-400">careers</span> - View job openings</div>
              <div><span className="text-emerald-400">docs</span> - Open API developer portal</div>
              <div><span className="text-emerald-400">clear</span> - Reset terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'products':
        onScrollSection('products');
        responseNode = (
          <p className="text-emerald-400 text-xs">
            [NAVIGATING] Jumping to Products Portfolio (DetailMint, Precision Farming, InkSquirel)...
          </p>
        );
        break;

      case 'stack':
        onNavigatePage('blog');
        setTimeout(() => {
          const el = document.getElementById('tech-stack');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        responseNode = (
          <p className="text-emerald-400 text-xs">
            [NAVIGATING] Displaying Technology Stack architecture matrix on Engineering Blog...
          </p>
        );
        break;

      case 'schedule':
      case 'contact':
        onScrollSection('contact');
        responseNode = (
          <p className="text-emerald-400 text-xs">
            [NAVIGATING] Opening Meeting Scheduler & Business Inquiry Portal...
          </p>
        );
        break;

      case 'roadmap':
      case 'journey':
        onScrollSection('journey');
        responseNode = (
          <p className="text-emerald-400 text-xs">
            [NAVIGATING] Displaying Startup Journey & Future Roadmap...
          </p>
        );
        break;

      case 'blog':
        onNavigatePage('blog');
        responseNode = (
          <p className="text-emerald-400 text-xs">
            [REDIRECTING] Opening Engineering Blog webpage...
          </p>
        );
        break;

      case 'careers':
        onNavigatePage('careers');
        responseNode = (
          <p className="text-emerald-400 text-xs">
            [REDIRECTING] Opening Careers webpage and application portal...
          </p>
        );
        break;

      case 'docs':
      case 'api':
        onNavigatePage('docs');
        responseNode = (
          <p className="text-emerald-400 text-xs">
            [REDIRECTING] Opening API & Developer Documentation webpage...
          </p>
        );
        break;

      default:
        responseNode = (
          <p className="text-rose-400 text-xs">
            [ERR_UNKNOWN_CMD] Command &apos;{trimmed}&apos; not recognized. Type <span className="underline font-bold">help</span> for list of terminal commands.
          </p>
        );
    }

    setHistory(prev => [...prev, { command: cmdStr, response: responseNode }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    cyberAudio.playKeypress();
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="w-full bg-[#252525] border-2 border-[#E8E8C6] shadow-[6px_6px_0px_#474744] font-mono text-[#E8E8C6]">
      {/* Terminal Titlebar */}
      <div className="bg-[#474744] px-3 py-2 flex items-center justify-between border-b border-[#E8E8C6]/40 text-xs select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-rose-500 rounded-full border border-black/30"></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full border border-black/30"></div>
          <div className="w-3 h-3 bg-emerald-500 rounded-full border border-black/30"></div>
          <span className="font-share-tech text-[#E8E8C6] font-bold ml-2 flex items-center">
            <Terminal className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            caretcoders@terminal:~$
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => executeCommand('clear')}
            className="text-[10px] text-[#E8E8C6]/80 hover:text-[#E8E8C6] bg-[#252525] px-1.5 py-0.5 border border-[#E8E8C6]/40 flex items-center space-x-1"
            title="Clear Terminal Output"
          >
            <RefreshCw className="w-2.5 h-2.5" />
            <span>CLEAR</span>
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 sm:h-72 overflow-y-auto space-y-3 font-mono text-xs sm:text-sm bg-black/30">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center text-[#E8E8C6]/80 space-x-1.5">
              <span className="text-emerald-400 font-bold">caret@root:~$</span>
              <span className="text-amber-200 font-bold">{item.command}</span>
            </div>
            <div className="pl-3 border-l-2 border-[#474744] text-[#E8E8C6]">
              {item.response}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Interactive Input Row */}
      <div className="bg-[#252525] p-2 border-t border-[#474744] flex items-center space-x-2">
        <span className="text-emerald-400 font-bold text-xs sm:text-sm pl-2">^</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command (e.g. products, stack, schedule, help)..."
          className="flex-1 bg-transparent border-none outline-none text-[#E8E8C6] font-mono text-xs sm:text-sm placeholder-[#E8E8C6]/40"
        />
        <button
          onClick={() => executeCommand(inputVal)}
          className="px-2.5 py-1 bg-[#E8E8C6] text-[#252525] font-bold text-xs flex items-center space-x-1 hover:bg-[#E8E8C6]/90 transition-colors"
        >
          <span>RUN</span>
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </div>

      {/* Quick Command Chips */}
      <div className="bg-[#474744]/20 p-2 border-t border-[#474744] flex items-center space-x-1.5 overflow-x-auto text-[11px] font-share-tech whitespace-nowrap">
        <span className="text-[#E8E8C6]/60 flex items-center mr-1">
          <Sparkles className="w-3 h-3 mr-1 text-amber-300" /> QUICK:
        </span>
        {['products', 'stack', 'schedule', 'journey', 'blog', 'careers', 'docs', 'help'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 bg-[#252525] text-[#E8E8C6] border border-[#474744] hover:border-[#E8E8C6] hover:bg-[#474744] transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
