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
      {/* Scroll to Top Button: Positioned on bottom-right above WhatsApp on mobile so it never collides */}
      {showScrollTop && (
        <div
          className="fixed right-3.5 sm:right-6 z-40 touch-manipulation"
          style={{ bottom: 'max(4.75rem, calc(env(safe-area-inset-bottom, 0px) + 4.5rem))' }}
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-forest hover:bg-brand-forestHover active:bg-brand-forestHover text-brand-accentYellow shadow-soft-lg hover:shadow-soft hover:-translate-y-1 active:scale-90 transition-all border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-forest group animate-in fade-in zoom-in-75 duration-200"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Bottom Left: Fixed Phone Call Button (Direct Call) + Facebook */}
      <div
        className="fixed left-3.5 sm:left-6 z-40 touch-manipulation flex items-center gap-2 sm:gap-2.5"
        style={{ bottom: 'max(1rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))' }}
      >
        <a
          href={primaryPhone.tel}
          className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 min-h-[44px] rounded-full bg-white text-brand-forest border-2 border-brand-forest hover:bg-brand-forest hover:text-white active:bg-brand-forest active:text-white shadow-soft-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-forest group active:scale-95"
          aria-label="Call Us"
          title="Call Us"
        >
          <div className="w-6 h-6 rounded-full bg-brand-forest text-brand-accentYellow flex items-center justify-center group-hover:bg-white group-hover:text-brand-forest transition-colors">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold inline">Call Us</span>
        </a>

        {/* Facebook Quick Action Button */}
        <a
          href={SITE_CONFIG.contacts.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 min-h-[44px] rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-soft-lg hover:shadow-soft-xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1877F2] group"
          aria-label="Follow Secure With Mehta on Facebook"
          title="Follow on Facebook"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>

      {/* Bottom Right: Fixed Action Group (Instagram + WhatsApp) */}
      <div
        className="fixed right-3.5 sm:right-6 z-40 touch-manipulation flex items-center gap-2 sm:gap-2.5"
        style={{ bottom: 'max(1rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))' }}
      >
        {/* Instagram Quick Action Button */}
        <a
          href={SITE_CONFIG.contacts.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 min-h-[44px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-soft-lg hover:shadow-soft-xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#dc2743] group"
          aria-label="Follow Secure With Mehta on Instagram"
          title="Follow on Instagram (@securewithmehta)"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 min-h-[44px] rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-soft-lg hover:shadow-glow-green transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 group active:scale-95"
          aria-label="Direct WhatsApp inquiry with Kashyap Mehta"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs font-bold inline">WhatsApp</span>
        </a>
      </div>
    </>
  );
};
