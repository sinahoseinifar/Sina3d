import React, { useRef, useState, useEffect } from 'react';
import { SERVICES } from '../data.ts';
import { ArrowLeft, ArrowRight, ArrowLeftRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (title: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(1); // Default to index 1 (Product Teasers)

  // Mouse drag state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const updateActiveByCenter = () => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    const cards = track.querySelectorAll<HTMLElement>('.service-card');
    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const dist = Math.abs(trackCenter - cardCenter);

      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    setActiveIdx(closestIdx);
  };

  const handleScroll = () => {
    updateActiveByCenter();
  };

  const scrollByAmount = (amount: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initial centering of index 1 on mount if desired
    const track = trackRef.current;
    if (track) {
      const cards = track.querySelectorAll<HTMLElement>('.service-card');
      if (cards[1]) {
        const cardLeft = cards[1].offsetLeft;
        const targetScroll = cardLeft - (track.clientWidth / 2) + (cards[1].clientWidth / 2);
        track.scrollTo({ left: Math.max(0, targetScroll), behavior: 'auto' });
      }
    }
  }, []);

  return (
    <section className="px-6 lg:px-14 border-b border-[#231F20]/15 bg-[#F1F2F2] py-14" id="what-i-do">
      <div className="max-w-[1700px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs tracking-widest uppercase text-[#231F20]/60 mb-6 font-mono text-center">
          <span className="flex items-center space-x-2 font-sans font-semibold text-[#231F20]">
            <span className="w-2 h-2 rotate-45 bg-[#1D6FFF]"></span>
            <span>02 / SERVICES &amp; EXPERTISE</span>
          </span>
          <span className="hidden sm:inline text-[#231F20]/30">•</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1D6FFF]/10 border border-[#1D6FFF]/30 text-[#1D6FFF] chamfer-sm text-[11px] font-bold">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#1D6FFF] animate-pulse" />
            <span>HORIZONTAL SCROLL • HOVER OR DRAG</span>
          </span>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-[#231F20] mb-4 text-center">
            WHAT DO <span className="text-[#1D6FFF]">I DO?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#231F20]/75 font-normal max-w-2xl mx-auto text-center">
            Specialized video direction combining 3D spatial motion, brutalist precision, and machine learning architectures.
          </p>
        </div>

        {/* Horizontal Scrollable Track for Services */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={trackRef}
            id="services-track"
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex items-stretch space-x-5 overflow-x-auto custom-scrollbar py-8 px-4 cursor-grab select-none active:cursor-grabbing"
          >
            {SERVICES.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={service.id}
                  data-idx={idx}
                  onClick={() => {
                    setActiveIdx(idx);
                    if (onSelectService) onSelectService(service.title);
                  }}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`service-card flex-none w-[280px] sm:w-[320px] chamfer-md bg-[#E9EBEF] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'chamfer-frame-blue opacity-100 scale-[1.02]'
                      : 'chamfer-frame-dark opacity-45 hover:opacity-90'
                  }`}
                >
                  <div className="chamfer-md p-8 bg-[#E9EBEF] h-full flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#1D6FFF] tracking-widest block mb-4">
                        [ {service.index} ]
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#231F20] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#231F20]/70 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-[#231F20]/10 flex items-center justify-between font-mono text-[11px] font-bold text-[#1D6FFF]">
                      <span>DISCIPLINE</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls for Carousel */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#231F20]/60">
          <div className="flex items-center space-x-2.5">
            <span className="w-2 h-2 bg-[#1D6FFF]"></span>
            <span>ACTIVE ITEM GLOWS WITH ELECTRIC BLUE HIGHLIGHT</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1.5 chamfer-sm bg-[#231F20] text-[#F1F2F2] text-[11px] font-mono tracking-widest">
            <ArrowLeft className="w-3 h-3 text-[#1D6FFF] animate-pulse" />
            <span>DRAG / SCROLL</span>
            <ArrowRight className="w-3 h-3 text-[#1D6FFF] animate-pulse" />
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollByAmount(-320)}
              id="service-prev"
              aria-label="Previous Service"
              className="w-9 h-9 chamfer-sm bg-[#E9EBEF] border border-[#231F20]/20 hover:bg-[#1D6FFF] hover:text-[#F1F2F2] flex items-center justify-center font-bold transition-all shadow-sm cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => scrollByAmount(320)}
              id="service-next"
              aria-label="Next Service"
              className="w-9 h-9 chamfer-sm bg-[#E9EBEF] border border-[#231F20]/20 hover:bg-[#1D6FFF] hover:text-[#F1F2F2] flex items-center justify-center font-bold transition-all shadow-sm cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
