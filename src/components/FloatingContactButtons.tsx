import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const FloatingContactButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryPhone = SITE_CONFIG.contacts.numbers[0];

  const whatsappMessage = encodeURIComponent(
    'Hello Kashyap ji, I would like to consult with you regarding insurance guidance.'
  );

  return (
    <>
      {/* Center Bottom: Small Top Arrow (Scroll to Top) Button */}
      {showScrollTop && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-forest hover:bg-brand-forestHover text-brand-accentYellow shadow-soft-lg hover:shadow-soft hover:-translate-y-1 transition-all border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-forest group animate-in fade-in zoom-in-75 duration-200"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}
      {/* Bottom Left: Fixed Phone Call Button (Direct Call) */}
      <div className="fixed bottom-5 left-5 z-40">
        <a
          href={primaryPhone.tel}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-white text-brand-forest border-2 border-brand-forest hover:bg-brand-forest hover:text-white shadow-soft-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-forest group"
          aria-label="Call Us"
          title="Call Us"
        >
          <div className="w-6 h-6 rounded-full bg-brand-forest text-brand-accentYellow flex items-center justify-center group-hover:bg-white group-hover:text-brand-forest transition-colors">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold inline">Call Us</span>
        </a>
      </div>

      {/* Bottom Right: Fixed WhatsApp Quick Action Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft-lg hover:shadow-glow-green transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 group"
          aria-label="Direct WhatsApp inquiry with Kashyap Mehta"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs font-bold hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </>
  );
};
