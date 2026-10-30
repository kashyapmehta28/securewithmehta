import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA, SITE_CONFIG } from '../data/siteConfig';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 4 Balanced pairs: Left (0-3) and Right (4-7)
  const faqRows = [
    { left: 0, right: 4 },
    { left: 1, right: 5 },
    { left: 2, right: 6 },
    { left: 3, right: 7 },
  ];

  const renderFaqCard = (globalIndex: number) => {
    const faq = FAQS_DATA[globalIndex];
    if (!faq) return null;
    const isOpen = openIndex === globalIndex;
    const headingId = `faq-heading-${globalIndex}`;
    const panelId = `faq-panel-${globalIndex}`;

    return (
      <div
        key={globalIndex}
        className="rounded-2xl border border-brand-borderSubtle overflow-hidden transition-all duration-200 hover:border-brand-accentGreenBorder shadow-soft-sm bg-white"
      >
        <h3>
          <button
            type="button"
            id={headingId}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => toggleAccordion(globalIndex)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-brand-accentGreenLight/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest gap-3 min-h-[4.25rem] sm:min-h-[4.5rem]"
          >
            <span className="text-sm sm:text-base font-bold text-brand-dark pr-2 leading-snug">
              {faq.question}
            </span>
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                isOpen
                  ? 'rotate-180 bg-brand-forest text-brand-accentYellow'
                  : 'bg-brand-accentGreen text-brand-forest'
              }`}
            >
              <ChevronDown className="w-4 h-4" />
            </div>
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-borderSubtle/60">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            Straightforward answers regarding our insurance advisory process, categories handled, policy audit methodology, and claims guidance.
          </p>
        </div>

        {/* 4 Balanced Rows: 4 questions Left, 4 questions Right */}
        <div className="space-y-4">
          {faqRows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {renderFaqCard(row.left)}
              {renderFaqCard(row.right)}
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-12 max-w-3xl mx-auto text-center p-6 rounded-2xl bg-brand-accentGreenLight/60 border border-brand-accentGreenBorder">
          <p className="text-sm text-brand-dark font-medium">
            Have a question about a specific policy wording, waiting period, or commercial risk?
          </p>
          <a
            href={`https://wa.me/${SITE_CONFIG?.contacts?.defaultWhatsAppNumber || '919892579563'}?text=${encodeURIComponent(
              'Hello Kashyap ji, I have an insurance query that was not answered in the FAQ.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-brand-forest hover:text-brand-forestHover underline underline-offset-4"
          >
            <span>Ask Kashyap Mehta Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
