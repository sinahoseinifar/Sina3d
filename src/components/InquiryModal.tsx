import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Zap } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, defaultCategory = '' }) => {
  const [brandName, setBrandName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [projectType, setProjectType] = useState(defaultCategory || 'Product Teaser');
  const [budgetTier, setBudgetTier] = useState('$3,000 - $7,000');
  const [timeline, setTimeline] = useState('2 - 3 Weeks');
  const [briefDetails, setBriefDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCategory) {
      setProjectType(defaultCategory);
    }
  }, [defaultCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Also build a prefilled mailto as backup
    const subject = encodeURIComponent(`Brand Video Inquiry: ${brandName || 'New Client'}`);
    const body = encodeURIComponent(
      `Brand / Company: ${brandName}\nContact: ${contactEmail}\nDiscipline: ${projectType}\nBudget Tier: ${budgetTier}\nTarget Timeline: ${timeline}\n\nProject Brief:\n${briefDetails}`
    );
    // Can optionally trigger mailto after short delay
    setTimeout(() => {
      window.open(`mailto:sina3ddd@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setBrandName('');
    setContactEmail('');
    setBriefDetails('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#231F20]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="chamfer-lg chamfer-frame-blue max-w-xl w-full max-h-[92vh] overflow-y-auto bg-[#F1F2F2] shadow-2xl relative"
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

          {!submitted ? (
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#1D6FFF] uppercase tracking-wider mb-2 font-bold">
                <Zap className="w-4 h-4" />
                <span>COMMISSION &amp; BRIEF</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#231F20] mb-2">
                START A VIDEO PROJECT
              </h2>
              <p className="text-xs text-[#231F20]/70 font-normal mb-6">
                Fill out the creative specs below. Direct responses are typically sent within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[#231F20] font-bold uppercase tracking-wider mb-1.5">
                    BRAND OR STUDIO NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Apex Dynamics, Monolith Studio"
                    className="w-full px-4 py-3 bg-[#E9EBEF] border border-[#231F20]/20 chamfer-sm text-[#231F20] focus:border-[#1D6FFF] focus:outline-none focus:ring-1 focus:ring-[#1D6FFF] text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[#231F20] font-bold uppercase tracking-wider mb-1.5">
                    EMAIL OR TELEGRAM HANDLE *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="email@brand.com or @telegram_handle"
                    className="w-full px-4 py-3 bg-[#E9EBEF] border border-[#231F20]/20 chamfer-sm text-[#231F20] focus:border-[#1D6FFF] focus:outline-none focus:ring-1 focus:ring-[#1D6FFF] text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#231F20] font-bold uppercase tracking-wider mb-1.5">
                      PRIMARY DISCIPLINE
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3 py-3 bg-[#E9EBEF] border border-[#231F20]/20 chamfer-sm text-[#231F20] focus:border-[#1D6FFF] focus:outline-none text-xs"
                    >
                      <option value="Product Teasers">Product Teasers</option>
                      <option value="Commercial CGI">Commercial CGI</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="3D Animation">3D Animation</option>
                      <option value="AI Video Creation">AI Video Creation</option>
                      <option value="Video Post-Production">Video Post-Production</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#231F20] font-bold uppercase tracking-wider mb-1.5">
                      ESTIMATED BUDGET
                    </label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full px-3 py-3 bg-[#E9EBEF] border border-[#231F20]/20 chamfer-sm text-[#231F20] focus:border-[#1D6FFF] focus:outline-none text-xs"
                    >
                      <option value="< $3,000">&lt; $3,000</option>
                      <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                      <option value="$7,000 - $15,000">$7,000 - $15,000</option>
                      <option value="$15,000+">$15,000+ (Flagship Campaign)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#231F20] font-bold uppercase tracking-wider mb-1.5">
                    TARGET TIMELINE
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-3 bg-[#E9EBEF] border border-[#231F20]/20 chamfer-sm text-[#231F20] focus:border-[#1D6FFF] focus:outline-none text-xs"
                  >
                    <option value="Rush (< 10 Days)">Rush (&lt; 10 Days)</option>
                    <option value="2 - 3 Weeks">2 - 3 Weeks</option>
                    <option value="1 Month">1 Month</option>
                    <option value="Flexible / Ongoing">Flexible / Ongoing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#231F20] font-bold uppercase tracking-wider mb-1.5">
                    PROJECT BRIEF &amp; REFERENCES
                  </label>
                  <textarea
                    rows={3}
                    value={briefDetails}
                    onChange={(e) => setBriefDetails(e.target.value)}
                    placeholder="Describe your vision, target audience, visual style preferences, reference links..."
                    className="w-full px-4 py-3 bg-[#E9EBEF] border border-[#231F20]/20 chamfer-sm text-[#231F20] focus:border-[#1D6FFF] focus:outline-none text-xs resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full chamfer-sm py-3.5 bg-[#1D6FFF] text-white hover:bg-[#231F20] text-xs font-mono font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(29,111,255,0.45)] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>DISPATCH INQUIRY</span>
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 chamfer-sm bg-[#1D6FFF] text-white flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(29,111,255,0.6)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-[#231F20] mb-2">
                INQUIRY DISPATCHED
              </h3>
              <p className="text-sm text-[#231F20]/75 max-w-sm mx-auto mb-6">
                Thank you, <span className="font-bold text-[#231F20]">{brandName}</span>. Your brief has been prepared and redirected to SINA3D's direct production queue.
              </p>
              <div className="p-4 bg-[#E9EBEF] chamfer-sm border border-[#231F20]/15 text-left text-xs font-mono space-y-1 mb-6">
                <div><span className="text-[#231F20]/60">DISCIPLINE:</span> <span className="font-bold">{projectType}</span></div>
                <div><span className="text-[#231F20]/60">BUDGET:</span> <span className="font-bold">{budgetTier}</span></div>
                <div><span className="text-[#231F20]/60">TIMELINE:</span> <span className="font-bold">{timeline}</span></div>
              </div>
              <button
                onClick={handleReset}
                className="chamfer-sm px-6 py-2.5 bg-[#231F20] text-white hover:bg-[#1D6FFF] text-xs font-mono font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                DONE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
