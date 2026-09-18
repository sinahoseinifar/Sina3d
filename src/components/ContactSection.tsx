import React, { useRef } from 'react';
import { CONTACT_CHANNELS } from '../data.ts';
import { 
  Send, 
  Camera, 
  Phone, 
  Mail, 
  Linkedin, 
  ArrowLeft, 
  ArrowRight, 
  ArrowLeftRight 
} from 'lucide-react';

interface ContactSectionProps {
  onOpenInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollChannels = (amount: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'telegram':
        return <Send className="w-5 h-5 text-[#1D6FFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />;
      case 'instagram':
        return <Camera className="w-5 h-5 text-[#1D6FFF] group-hover:scale-110 transition-transform" />;
      case 'phone':
        return <Phone className="w-5 h-5 text-[#1D6FFF] group-hover:rotate-12 transition-transform" />;
      case 'email':
        return <Mail className="w-5 h-5 text-[#1D6FFF] group-hover:scale-110 transition-transform" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-[#1D6FFF] group-hover:scale-110 transition-transform" />;
      default:
        return <Send className="w-5 h-5 text-[#1D6FFF]" />;
    }
  };

  return (
    <section className="px-6 lg:px-14 bg-[#F1F2F2] py-14" id="contact">
      <div className="max-w-[1700px] mx-auto">
        {/* Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs tracking-widest uppercase text-[#231F20]/60 mb-8 font-mono text-center">
          <span className="flex items-center space-x-2 font-sans font-semibold text-[#231F20]">
            <span className="w-2 h-2 rotate-45 bg-[#1D6FFF]"></span>
            <span>04 / ORDER &amp; CONTACT</span>
          </span>
          <span className="hidden sm:inline text-[#231F20]/30">•</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1D6FFF]/10 border border-[#1D6FFF]/30 text-[#1D6FFF] chamfer-sm text-[11px] font-bold">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#1D6FFF] animate-pulse" />
            <span>HORIZONTAL CHANNELS REEL</span>
          </span>
        </div>

        {/* Section Heading & Subheading */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter text-[#231F20] leading-[0.96] mb-6 text-center">
            WANT ME TO CREATE A VIDEO FOR YOUR BRAND?
          </h2>
          <p className="text-sm sm:text-base md:text-lg uppercase tracking-widest text-[#1D6FFF] font-mono font-bold text-center">
            Reach out directly through any of these channels:
          </p>
        </div>

        {/* Controls & 5 Chamfered Direct Channels Grid */}
        <div className="relative w-full">
          <div className="flex items-center justify-between mb-4 font-mono text-xs text-[#231F20]/60">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 chamfer-sm bg-[#231F20] text-[#F1F2F2] text-[11px] font-mono tracking-widest">
              <ArrowLeft className="w-3 h-3 text-[#1D6FFF] animate-pulse" />
              <span>DRAG OR SCROLL HORIZONTALLY</span>
              <ArrowRight className="w-3 h-3 text-[#1D6FFF] animate-pulse" />
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => scrollChannels(-320)}
                aria-label="Previous Channel"
                className="w-9 h-9 chamfer-sm bg-[#E9EBEF] border border-[#231F20]/20 hover:bg-[#1D6FFF] hover:text-[#F1F2F2] flex items-center justify-center font-bold transition-all shadow-sm cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={() => scrollChannels(320)}
                aria-label="Next Channel"
                className="w-9 h-9 chamfer-sm bg-[#E9EBEF] border border-[#231F20]/20 hover:bg-[#1D6FFF] hover:text-[#F1F2F2] flex items-center justify-center font-bold transition-all shadow-sm cursor-pointer"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            id="contact-scroll-track"
            className="flex items-stretch space-x-6 overflow-x-auto custom-scrollbar py-4 px-2 cursor-grab select-none active:cursor-grabbing"
          >
            {CONTACT_CHANNELS.map((channel) => (
              <div
                key={channel.id}
                className="chamfer-md chamfer-frame-dark chamfer-frame-hover flex-none w-[290px] sm:w-[320px]"
              >
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chamfer-md p-7 bg-[#E9EBEF] h-full flex flex-col justify-between block group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold text-[#1D6FFF] tracking-widest uppercase">
                        [ {channel.tag} ]
                      </span>
                      {renderIcon(channel.iconType)}
                    </div>
                    <h3 className="text-xl font-bold uppercase text-[#231F20] mb-2">
                      {channel.title}
                    </h3>
                    <p className="text-xs text-[#231F20]/70 font-normal leading-relaxed">
                      {channel.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#231F20]/15 flex items-center justify-between text-xs font-mono font-bold text-[#231F20]">
                    <span>{channel.handle}</span>
                    <span className="text-[#1D6FFF] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance Band */}
        <div className="chamfer-md chamfer-frame-dark mt-8">
          <div className="chamfer-md p-6 sm:p-8 bg-[#E9EBEF] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <span className="w-3 h-3 bg-[#1D6FFF] rotate-45 animate-pulse shrink-0"></span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#231F20]">
                Currently open for brand campaigns &amp; high-fidelity 3D motion projects
              </span>
            </div>

            <button
              onClick={onOpenInquiry}
              className="chamfer-sm px-6 py-3 bg-[#231F20] text-[#F1F2F2] hover:bg-[#1D6FFF] text-xs font-mono font-bold uppercase tracking-widest transition-colors flex items-center space-x-2 shrink-0 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(29,111,255,0.4)]"
            >
              <span>SEND INQUIRY</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
