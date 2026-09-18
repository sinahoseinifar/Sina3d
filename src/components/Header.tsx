import React from 'react';
import { BRAND_ASSETS } from '../data.ts';
import { Zap, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none" id="main-header">
      <div className="max-w-5xl mx-auto pointer-events-auto chamfer-md bg-[#F1F2F2]/75 backdrop-blur-xl border border-white/70 shadow-[0_10px_35px_rgba(29,111,255,0.08),0_4px_16px_rgba(35,31,32,0.06)] px-5 sm:px-8 py-3 flex items-center justify-between transition-all duration-300">
        <a 
          href="#" 
          aria-label="SINA3D Home" 
          className="inline-flex items-center group transition-transform hover:scale-[1.02]"
        >
          <img 
            src={BRAND_ASSETS.headerLogo} 
            alt="SINA3D Logo" 
            className="h-8 sm:h-9 w-auto object-contain drop-shadow-sm" 
          />
        </a>

        <div className="flex items-center">
          <button
            onClick={onOpenInquiry}
            data-purpose="order-video-cta"
            className="chamfer-sm group relative inline-flex items-center space-x-2 px-4 sm:px-6 py-2.5 bg-[#1D6FFF] text-white hover:bg-[#231F20] text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_0_20px_rgba(29,111,255,0.45)] hover:shadow-[0_0_25px_rgba(35,31,32,0.35)] cursor-pointer"
          >
            <Zap className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            <span className="tracking-wider">ORDER A VIDEO</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
