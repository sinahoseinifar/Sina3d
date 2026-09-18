import React, { useRef, useState, useEffect, useCallback } from 'react';
import { WORKS } from '../data.ts';
import { WorkItem } from '../types.ts';
import { ArrowLeft, ArrowRight, Video, Clapperboard, Scissors, Sparkles, Film, Eye } from 'lucide-react';

interface WorksSectionProps {
  onSelectWork: (work: WorkItem) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectWork }) => {
  const reelRef = useRef<HTMLDivElement>(null);
  const [activeWorkIdx, setActiveWorkIdx] = useState<number>(1); // Default to Work 02
  const [progressPct, setProgressPct] = useState<number>(14);

  // Mouse drag handling
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const updateWorksVisuals = useCallback(() => {
    const reel = reelRef.current;
    if (!reel) return;

    const reelRect = reel.getBoundingClientRect();
    const reelCenter = reelRect.left + reelRect.width / 2;

    const cards = reel.querySelectorAll<HTMLElement>('.work-card');
    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const dist = Math.abs(reelCenter - cardCenter);

      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }

      // Continuous scale and opacity according to distance from center
      const maxDist = reelRect.width * 0.45;
      const ratio = Math.max(0, 1 - dist / maxDist);
      const scale = 0.88 + ratio * 0.16;
      const opacity = 0.35 + ratio * 0.65;

      card.style.transform = `scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(2);

      const inner = card.querySelector<HTMLElement>('.work-card-inner');
      const fxIcons = card.querySelector<HTMLElement>('.video-fx-icons');
      const glow = card.querySelector<HTMLElement>('.work-glow');

      if (ratio > 0.55) {
        if (inner) {
          inner.classList.add('chamfer-frame-blue');
          inner.classList.remove('chamfer-frame-dark');
        }
        if (fxIcons) {
          fxIcons.classList.remove('opacity-0', 'scale-90');
          fxIcons.classList.add('opacity-100', 'scale-100');
        }
        if (glow) {
          glow.classList.remove('opacity-0');
          glow.classList.add('opacity-100');
        }
      } else {
        if (inner) {
          inner.classList.remove('chamfer-frame-blue');
          inner.classList.add('chamfer-frame-dark');
        }
        if (fxIcons) {
          fxIcons.classList.add('opacity-0', 'scale-90');
          fxIcons.classList.remove('opacity-100', 'scale-100');
        }
        if (glow) {
          glow.classList.add('opacity-0');
          glow.classList.remove('opacity-100');
        }
      }
    });

    setActiveWorkIdx(closestIdx);

    const maxScroll = reel.scrollWidth - reel.clientWidth;
    const pct = maxScroll > 0 ? (reel.scrollLeft / maxScroll) * 100 : 0;
    setProgressPct(Math.max(14, pct));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!reelRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - reelRef.current.offsetLeft);
    setScrollLeft(reelRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !reelRef.current) return;
    e.preventDefault();
    const x = e.pageX - reelRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    reelRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollReel = (direction: 'prev' | 'next') => {
    const reel = reelRef.current;
    if (!reel) return;
    const cards = reel.querySelectorAll<HTMLElement>('.work-card');
    if (cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth + 24;
    reel.scrollBy({
      left: direction === 'prev' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;

    // Initial positioning to center Work 02
    const timer = setTimeout(() => {
      const cards = reel.querySelectorAll<HTMLElement>('.work-card');
      if (cards[1]) {
        const cardLeft = cards[1].offsetLeft;
        const targetScroll = cardLeft - (reel.clientWidth / 2) + (cards[1].clientWidth / 2);
        reel.scrollTo({ left: Math.max(0, targetScroll), behavior: 'auto' });
        updateWorksVisuals();
      }
    }, 120);

    const onResize = () => updateWorksVisuals();
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [updateWorksVisuals]);

  return (
    <section className="border-b border-[#231F20]/15 bg-[#F1F2F2] overflow-hidden py-14" id="works">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-14 mb-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="flex items-center space-x-2 text-xs tracking-widest uppercase text-[#231F20]/60 mb-1 font-mono">
            <span className="w-2 h-2 rotate-45 bg-[#1D6FFF]"></span>
            <span className="font-sans font-semibold text-[#231F20]">03 / PORTFOLIO</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter text-[#231F20] text-center">
            SOME OF <span className="text-[#231F20]/35">MY WORK</span>
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#1D6FFF] font-bold text-center">
            Selected works for forward-thinking brands
          </p>

          <div className="flex items-center justify-center gap-4 mt-3">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 chamfer-sm bg-[#231F20] text-[#F1F2F2] text-[11px] font-mono tracking-widest">
              <ArrowLeft className="w-3 h-3 text-[#1D6FFF] animate-pulse" />
              <span>DRAG OR SCROLL HORIZONTALLY</span>
              <ArrowRight className="w-3 h-3 text-[#1D6FFF] animate-pulse" />
            </span>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => scrollReel('prev')}
                id="work-prev"
                aria-label="Previous Project"
                className="w-9 h-9 chamfer-sm bg-[#E9EBEF] border border-[#231F20]/20 hover:bg-[#1D6FFF] hover:text-[#F1F2F2] flex items-center justify-center font-mono font-bold transition-all shadow-sm cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={() => scrollReel('next')}
                id="work-next"
                aria-label="Next Project"
                className="w-9 h-9 chamfer-sm bg-[#E9EBEF] border border-[#231F20]/20 hover:bg-[#1D6FFF] hover:text-[#F1F2F2] flex items-center justify-center font-mono font-bold transition-all shadow-sm cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Exactly 7 Vertical Showcase Cards in Smooth Horizontal Reel */}
      <div className="relative w-full">
        <div
          ref={reelRef}
          id="works-reel"
          onScroll={updateWorksVisuals}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex items-center space-x-6 px-6 lg:px-14 overflow-x-auto custom-scrollbar py-14 cursor-grab select-none active:cursor-grabbing"
        >
          {WORKS.map((work, idx) => {
            return (
              <article
                key={work.id}
                data-work-idx={idx}
                className="work-card relative flex-none w-[280px] sm:w-[320px] md:w-[360px] origin-center transition-all duration-500 ease-out"
              >
                {/* Floating Animated Video Production Icons Overlay */}
                <div className="video-fx-icons pointer-events-none absolute inset-0 z-20 transition-all duration-500 overflow-hidden opacity-0 scale-90">
                  <div className="absolute top-4 right-4 w-9 h-9 chamfer-sm bg-[#231F20]/90 border border-[#1D6FFF] text-[#1D6FFF] flex items-center justify-center shadow-[0_0_15px_rgba(29,111,255,0.8)] anim-video-icon-2">
                    <Film className="w-4 h-4 text-[#1D6FFF]" />
                  </div>
                  <div className="absolute top-16 right-4 w-8 h-8 chamfer-sm bg-[#1D6FFF]/90 text-white flex items-center justify-center shadow-[0_0_15px_#1D6FFF] anim-video-icon-3">
                    <Clapperboard className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-20 left-4 w-8 h-8 chamfer-sm bg-[#231F20]/90 border border-[#1D6FFF] text-[#1D6FFF] flex items-center justify-center shadow-[0_0_15px_rgba(29,111,255,0.8)] anim-video-icon-4">
                    <Scissors className="w-3.5 h-3.5 text-[#1D6FFF]" />
                  </div>
                </div>

                {/* Card Container */}
                <div
                  onClick={() => onSelectWork(work)}
                  className="work-card-inner block chamfer-md bg-[#231F20] relative aspect-[9/16] overflow-hidden group chamfer-frame-dark cursor-pointer transition-all duration-300"
                >
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231F20] via-[#231F20]/25 to-transparent opacity-90"></div>

                  <div className="absolute top-4 left-4 font-mono text-[11px] tracking-widest text-[#F1F2F2] bg-[#1D6FFF] px-3 py-1 chamfer-sm font-bold shadow-sm">
                    WORK // {work.index}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#F1F2F2]/60 block mb-0.5">
                        {work.category}
                      </span>
                      <h3 className="text-xl font-bold text-[#F1F2F2] tracking-tight uppercase">
                        {work.title}
                      </h3>
                    </div>
                    <div className="w-8 h-8 chamfer-sm bg-[#F1F2F2]/10 border border-[#F1F2F2]/30 flex items-center justify-center text-[#F1F2F2] group-hover:bg-[#1D6FFF] group-hover:border-[#1D6FFF] transition-all">
                      ↗
                    </div>
                  </div>
                </div>

                {/* Electric Blue Glow underneath focused card */}
                <div className="work-glow absolute bottom-0 left-0 right-0 h-16 bg-[#1D6FFF]/30 blur-[20px] pointer-events-none z-0 opacity-0 transition-opacity duration-500 anim-video-center-glow"></div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Reel Progress Bar Indicator */}
      <div className="max-w-[1700px] mx-auto px-6 lg:px-14 mt-6 flex items-center justify-between font-mono text-xs text-[#231F20]/50">
        <div className="w-full max-w-xs bg-[#231F20]/15 h-1 chamfer-sm overflow-hidden">
          <div
            id="works-progress"
            className="bg-[#1D6FFF] h-full transition-all duration-200"
            style={{ width: `${progressPct}%` }}
          ></div>
        </div>
        <div>
          ACTIVE WORK: <span id="current-work-num" className="font-bold text-[#231F20]">
            {String(activeWorkIdx + 1).padStart(2, '0')}
          </span> / 07
        </div>
      </div>
    </section>
  );
};
