import React from 'react';
import { BRAND_ASSETS } from '../data.ts';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#231F20]/15 bg-[#F1F2F2] px-6 lg:px-14 py-10" id="main-footer">
      <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs uppercase tracking-widest text-[#231F20]/60 font-mono">
        <div className="flex items-center space-x-4">
          <img 
            src={BRAND_ASSETS.footerLogo} 
            alt="SINA3D" 
            className="h-6 w-auto object-contain" 
          />
          <span className="text-[#231F20] font-bold font-sans">
            © 2026 SINA3D • ALL RIGHTS RESERVED
          </span>
        </div>

        <div className="text-center font-bold tracking-widest">
          DEFINE • DESIGN • DEPICT
        </div>

        <a 
          href="#" 
          onClick={scrollToTop}
          className="flex items-center space-x-1 text-[#231F20] hover:text-[#1D6FFF] font-bold transition-colors cursor-pointer"
        >
          <span>TOP</span>
          <span>↑</span>
        </a>
      </div>
    </footer>
  );
};
