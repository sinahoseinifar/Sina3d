/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { WorksSection } from './components/WorksSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { InquiryModal } from './components/InquiryModal.tsx';
import { WorkItem } from './types.ts';

export default function App() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [inquiryCategory, setInquiryCategory] = useState<string>('Product Teaser');

  const handleOpenInquiry = (category: string = 'Product Teasers') => {
    setInquiryCategory(category);
    setIsInquiryOpen(true);
  };

  const handleCommissionFromProject = (category: string) => {
    handleOpenInquiry(category);
  };

  return (
    <div className="relative bg-[#F1F2F2] text-[#231F20] bg-grid-guide min-h-screen">
      {/* Architectural Background Guidelines */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-[8%] md:left-[12%] top-0 bottom-0 w-[1px] bg-[#231F20]/5"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#231F20]/5"></div>
        <div className="absolute right-[8%] md:right-[12%] top-0 bottom-0 w-[1px] bg-[#231F20]/5"></div>
      </div>

      {/* Floating Header */}
      <Header onOpenInquiry={() => handleOpenInquiry('Product Teasers')} />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20">
        <HeroSection />
        <ServicesSection onSelectService={(title) => setInquiryCategory(title)} />
        <WorksSection onSelectWork={(work) => setSelectedWork(work)} />
        <ContactSection onOpenInquiry={() => handleOpenInquiry('Product Teasers')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Lightbox Modal */}
      <ProjectModal 
        work={selectedWork} 
        onClose={() => setSelectedWork(null)} 
        onCommission={handleCommissionFromProject}
      />

      {/* Order Video / Commission Modal */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        defaultCategory={inquiryCategory}
      />
    </div>
  );
}
