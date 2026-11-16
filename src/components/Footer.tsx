import React from 'react';
import { Phone, Mail, MapPin, Shield, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darker text-white pt-16 pb-28 sm:pb-14 border-t border-brand-borderSubtle/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-soft flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt={`${SITE_CONFIG.brand.fullName} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight text-white">
                  {SITE_CONFIG.brand.fullName}
                </div>
                <div className="text-xs text-white/60">
                  Formerly Mehta Associates • {SITE_CONFIG.brand.founder}
                </div>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Providing personalized life and general insurance advisory backed by trusted, longstanding business heritage in Mumbai.
            </p>

            <div className="pt-2 text-xs text-white/50 space-y-1">
              <div>Mumbai, Maharashtra, India</div>
              <div>{SITE_CONFIG.brand.reach}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-accentYellow">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">All Insurance Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Secure With Mehta</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#policy-review" className="hover:text-white transition-colors">Policy Review & Claims Assistance</a>
              </li>
              <li>
                <a href="#awards" className="hover:text-white transition-colors">Awards & Recognition Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Client Reviews & Testimonials</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-1 lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-accentYellow">
              Direct Contact
            </div>
            
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href={SITE_CONFIG.contacts.numbers[0].tel} className="hover:underline font-bold text-white">
                  {SITE_CONFIG.contacts.numbers[0].display}
                </a>
                <span className="text-[11px] text-white/50">({SITE_CONFIG.contacts.numbers[0].label})</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contacts.email}`} className="hover:underline text-white">
                  {SITE_CONFIG.contacts.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 leading-relaxed text-[11px]">
                  Mumbai base with consultation available across Maharashtra, pan-India, and internationally for NRIs.
                </span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={`https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${encodeURIComponent(
                  'Hello Kashyap ji, I am contacting you from your website portfolio.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-soft transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-brand-accentYellow" />
                <span>Inquire on WhatsApp</span>
              </a>

              {/* Instagram Button in side of WhatsApp */}
              <a
                href={SITE_CONFIG.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white text-xs font-semibold shadow-soft transition-all"
                title="Follow on Instagram (@securewithmehta)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers (Strictly Compliant) */}
        <div className="pt-8 pb-6 border-b border-white/10 text-[11px] text-white/50 space-y-2 leading-relaxed text-left">
          <p>
            <strong>Regulatory & Scope Disclaimer:</strong> {SITE_CONFIG.brand.businessDescription} {SITE_CONFIG.disclaimers.insuranceScopeOnly}
          </p>
          <p>
            <strong>Claims Advisory Notice:</strong> {SITE_CONFIG.disclaimers.noClaimsGuarantee}
          </p>
          <p>
            <strong>Service Reach:</strong> {SITE_CONFIG.brand.reach}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Secure With Mehta. Founder & Consultant: Kashyap Mehta. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/40">
              Temporary Wordmark: {SITE_CONFIG.brand.temporaryWordmark} ({SITE_CONFIG.brand.temporaryWordmarkSubtext})
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
