import React from 'react';
import { Phone, Mail, MapPin, Shield, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darker text-white pt-16 pb-12 border-t border-brand-borderSubtle/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-accentYellow flex items-center justify-center font-black text-sm">
                {SITE_CONFIG.brand.temporaryWordmark}
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
          <div className="lg:col-span-3 space-y-3">
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
          <div className="lg:col-span-4 space-y-3">
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

            <div className="pt-3">
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
