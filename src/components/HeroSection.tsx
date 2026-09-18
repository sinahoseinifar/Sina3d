import React from 'react';
import { BRAND_ASSETS, HONORS } from '../data.ts';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen lg:px-14 pt-10 border-b border-[#231F20]/15 flex flex-col justify-between px-4 sm:px-6" id="who-am-i">
      <div className="max-w-[1700px] mx-auto w-full">
        {/* Header Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs tracking-widest uppercase text-[#231F20]/60 mb-6 font-mono text-center">
          <span className="flex items-center space-x-2 font-mono font-bold text-[#231F20] tracking-widest">
            <span className="w-2 h-2 rotate-45 bg-[#1D6FFF]"></span>
            <span>DEFINE</span>
          </span>
          <span className="hidden sm:inline text-[#1D6FFF] font-bold">•</span>
          <span className="font-mono font-bold text-[#231F20] tracking-widest">DESIGN</span>
          <span className="hidden sm:inline text-[#1D6FFF] font-bold">•</span>
          <span className="font-mono font-bold text-[#231F20] tracking-widest">DEPICT</span>
        </div>

        {/* Prominent Full Hero Frame with Chamfer Cut Corners & Atmospheric Electric Glows */}
        <div className="relative w-full my-4 group hero-3d-scene">
          {/* Dynamic Electric Blue Atmospheric Glows */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-28 bg-[#1D6FFF]/40 blur-[70px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[65%] h-16 bg-[#1D6FFF]/70 blur-[40px] rounded-full pointer-events-none -z-10"></div>
          <div className="absolute -bottom-2 left-[15%] right-[15%] h-6 bg-gradient-to-t from-[#1D6FFF]/60 to-transparent blur-[20px] pointer-events-none -z-10"></div>

          {/* Main Chamfered Frame housing Sina's studio visual */}
          <div className="chamfer-lg chamfer-frame-dark chamfer-frame-hover w-full relative z-10 shadow-2xl transition-all duration-500">
            <div className="chamfer-lg relative w-full aspect-[16/9] max-h-[780px] overflow-hidden bg-[#231F20] flex items-center justify-center">
              <img 
                src={BRAND_ASSETS.heroStudio} 
                alt="Sina in his studio surrounded by multi-display video editing and 3D software interfaces" 
                className="w-full h-full md:object-cover md:object-top transition-transform duration-700 ease-out object-cover" 
                loading="eager" 
              />
            </div>
          </div>
        </div>

        {/* Text Structured Below the Image */}
        <div className="mt-10 max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center space-x-3 mb-3">
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#1D6FFF] uppercase px-3 py-1 bg-[#231F20] chamfer-sm shadow-sm">
                IDENTITY // 01
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#F1F2F2] uppercase px-3 py-1 bg-[#1D6FFF] chamfer-sm shadow-[0_0_15px_#1D6FFF]">
                INQUIRY
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-[#231F20] leading-none mb-3">
              WHO <span className="text-[#1D6FFF] drop-shadow-[0_0_25px_rgba(29,111,255,0.45)]">AM I?</span>
            </h1>

            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm font-mono tracking-widest text-[#1D6FFF] font-bold">
              <span className="w-2 h-2 bg-[#1D6FFF] rotate-45"></span>
              <span className="text-[#231F20] uppercase">CREATIVE DIRECTOR &amp; 3D ARTIST</span>
              <span className="w-2 h-2 bg-[#1D6FFF] rotate-45"></span>
            </div>
          </div>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-[#231F20]/85 font-normal leading-snug tracking-tight mb-8 text-center max-w-3xl mx-auto px-2 sm:px-0">
            I am <strong className="font-bold text-[#231F20]">SINA3D</strong>. For over 9+ years, I have been crafting creative videos for brands. Over this journey, I have mastered diverse cutting-edge tools, integrating AI to produce exceptional, industry-leading visual results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-6 border-t border-[#231F20]/15 font-mono text-xs uppercase tracking-wider text-[#231F20]/70">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#1D6FFF]"></span>
              <span>9+ YEARS COMMERCIAL EXP.</span>
            </div>
            <div className="w-px h-4 bg-[#231F20]/20 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#1D6FFF]"></span>
              <span>GLOBAL CLIENT ROSTER</span>
            </div>
            <div className="w-px h-4 bg-[#231F20]/20 hidden sm:block"></div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#1D6FFF]"></span>
              <span>HYBRID 3D &amp; AI WORKFLOW</span>
            </div>
          </div>

          {/* Honors & Festival Selections */}
          <div className="mt-8 pt-6 border-t border-[#231F20]/10 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-[#231F20]/50 mb-4">
              <span className="w-1.5 h-1.5 bg-[#1D6FFF] rotate-45"></span>
              <span>HONORS &amp; FESTIVAL SELECTIONS</span>
              <span className="w-1.5 h-1.5 bg-[#1D6FFF] rotate-45"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl">
              {HONORS.map((honor, index) => {
                const isFeatured = honor.isFeatured;
                return (
                  <div key={honor.id} className="relative group/honor flex items-center justify-center">
                    {/* Ambient Glow */}
                    <div 
                      className={`absolute -inset-2 ${isFeatured ? 'bg-[#1D6FFF]/35 blur-[22px]' : 'bg-[#1D6FFF]/20 blur-[20px]'} rounded-full pointer-events-none honor-card-ambient-glow -z-10`}
                    ></div>
                    {isFeatured && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-[#1D6FFF]/60 blur-[16px] rounded-full pointer-events-none -z-10"></div>
                    )}

                    {/* Sparkle Stars */}
                    <div className={`pointer-events-none absolute -top-2.5 ${index % 2 === 0 ? '-left-1.5' : 'right-4'} z-20 sparkle-star-1 text-[#1D6FFF] drop-shadow-[0_0_8px_#1D6FFF]`}>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0l2.6 8.4L23 11l-8.4 2.6L12 22l-2.6-8.4L1 11l8.4-2.6z"></path>
                      </svg>
                    </div>
                    <div className={`pointer-events-none absolute -bottom-2 ${index % 2 === 0 ? 'right-2' : '-left-1'} z-20 sparkle-star-2 text-[#1D6FFF] drop-shadow-[0_0_8px_#1D6FFF]`}>
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0l2.6 8.4L23 11l-8.4 2.6L12 22l-2.6-8.4L1 11l8.4-2.6z"></path>
                      </svg>
                    </div>

                    <div className={`chamfer-sm ${isFeatured ? 'chamfer-frame-blue shadow-[0_0_15px_rgba(29,111,255,0.45)]' : 'chamfer-frame-dark chamfer-frame-hover'} w-full relative z-10`}>
                      <div className="chamfer-sm bg-[#E9EBEF] px-4 py-4 flex flex-col items-center justify-center text-center">
                        <img 
                          src={honor.imageUrl} 
                          alt={honor.title} 
                          className="h-20 sm:h-24 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover/honor:scale-105" 
                          loading="lazy" 
                        />
                        <span className="font-mono text-[9px] font-bold text-[#1D6FFF] tracking-widest uppercase mt-2">
                          OFFICIAL SELECTION
                        </span>
                        <span className="text-[10px] text-[#231F20]/75 font-mono font-semibold uppercase mt-0.5">
                          {honor.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Section Indicator */}
      <div className="max-w-[1700px] mx-auto w-full pt-8 pb-4 flex items-center justify-between text-xs font-mono text-[#231F20]/50 tracking-widest">
        <span>[ 01 / 04 ] SCROLL DOWN</span>
        <ArrowDown className="w-4 h-4 text-[#231F20]/60 animate-bounce" />
      </div>
    </section>
  );
};
