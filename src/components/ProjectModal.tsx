import React, { useEffect } from 'react';
import { WorkItem } from '../types.ts';
import { X, ExternalLink, Sparkles, Layers, Clock, Building2 } from 'lucide-react';

interface ProjectModalProps {
  work: WorkItem | null;
  onClose: () => void;
  onCommission: (category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ work, onClose, onCommission }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (work) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#231F20]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="chamfer-lg chamfer-frame-blue max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-[#F1F2F2] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="chamfer-lg bg-[#F1F2F2] p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-9 h-9 chamfer-sm bg-[#231F20] text-white hover:bg-[#1D6FFF] flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left: 9:16 Artwork Display */}
            <div className="relative aspect-[9/16] max-h-[500px] w-full mx-auto chamfer-md chamfer-frame-dark overflow-hidden bg-[#231F20] shadow-md">
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#231F20]/80 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-[#F1F2F2] bg-[#1D6FFF] px-2.5 py-0.5 chamfer-sm font-bold">
                WORK // {work.index}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#F1F2F2]/80">
                <span>{work.category}</span>
                <span>{work.duration}</span>
              </div>
            </div>

            {/* Right: Technical Specs & Creative Treatment */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#1D6FFF] uppercase tracking-wider mb-2 font-bold">
                  <span className="w-2 h-2 bg-[#1D6FFF] rotate-45"></span>
                  <span>{work.category}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#231F20] mb-3">
                  {work.title}
                </h2>

                <p className="text-sm text-[#231F20]/80 leading-relaxed font-normal mb-6">
                  {work.synopsis}
                </p>

                {/* Meta details */}
                <div className="space-y-3 pt-4 border-t border-[#231F20]/15 mb-6 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[#231F20]/60 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#1D6FFF]" />
                      CLIENT:
                    </span>
                    <span className="font-bold text-[#231F20]">{work.client}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#231F20]/60 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1D6FFF]" />
                      RUN TIME:
                    </span>
                    <span className="font-bold text-[#231F20]">{work.duration}</span>
                  </div>
                  <div>
                    <span className="text-[#231F20]/60 flex items-center gap-1.5 mb-2">
                      <Layers className="w-3.5 h-3.5 text-[#1D6FFF]" />
                      SOFTWARE PIPELINE:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {work.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-2.5 py-1 bg-[#E9EBEF] border border-[#231F20]/20 text-[#231F20] text-[11px] font-bold chamfer-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#231F20]/15 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onCommission(work.category);
                  }}
                  className="flex-1 chamfer-sm px-5 py-3 bg-[#1D6FFF] text-white hover:bg-[#231F20] text-xs font-mono font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(29,111,255,0.4)] cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COMMISSION SIMILAR</span>
                </button>
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chamfer-sm px-4 py-3 bg-[#231F20] text-white hover:bg-[#1D6FFF] text-xs font-mono font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>DRIVE REEL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
