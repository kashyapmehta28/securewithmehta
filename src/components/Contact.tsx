import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { InquiryForm } from './InquiryForm';

interface ContactProps {
  preselectedService?: string;
  onClearPreselection?: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  preselectedService,
  onClearPreselection,
}) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-accentGreenLight/30 border-t border-brand-borderSubtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider">
            <span>Contact Your Insurance Consultant in Mumbai</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            Connect with a General Insurance Consultant in Mumbai
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted max-w-2xl mx-auto">
            Get personalized guidance from Kashyap Mehta and Secure With Mehta on motor insurance, commercial insurance, fire insurance, and comprehensive business protection.
          </p>
        </div>

        {/* Grid: Left Column Info Cards, Right Column Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 text-left">
            
            {/* Primary Office Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-brand-borderSubtle shadow-soft-sm">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white p-1 border border-brand-borderSubtle flex items-center justify-center flex-shrink-0 shadow-soft-sm">
                  <img
                    src="/images/logo.png"
                    alt="Secure With Mehta General Insurance Consultancy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">
                    Secure With Mehta
                  </h3>
                  <p className="text-xs text-brand-muted">
                    {SITE_CONFIG.brand.founder} • Formerly Mehta Associates
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-brand-borderSubtle text-sm">
                
                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accentGreen text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brand-muted">Telephone & WhatsApp</div>
                    <div className="flex flex-col gap-1 mt-1">
                      {SITE_CONFIG.contacts.numbers.map((num) => (
                        <div key={num.raw} className="flex items-center gap-2">
                          <a
                            href={num.tel}
                            className="font-bold text-brand-forest hover:underline text-sm"
                          >
                            {num.display}
                          </a>
                          <span className="text-[11px] text-brand-muted">
                            ({num.label})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accentGreen text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brand-muted">Email Inquiry</div>
                    <a
                      href={`mailto:${SITE_CONFIG.contacts.email}`}
                      className="font-bold text-brand-forest hover:underline text-sm block mt-0.5"
                    >
                      {SITE_CONFIG.contacts.email}
                    </a>
                  </div>
                </div>

                {/* Instagram Channel */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-soft-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brand-muted">Instagram Updates</div>
                    <a
                      href={SITE_CONFIG.contacts.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-forest hover:underline text-sm block mt-0.5"
                    >
                      {SITE_CONFIG.contacts.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accentGreen text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brand-muted">Consultancy Base</div>
                    <div className="font-bold text-brand-dark text-sm mt-0.5">
                      Mumbai, Maharashtra
                    </div>
                    <div className="text-xs text-brand-muted mt-0.5 leading-relaxed">
                      Consultation available in-person in Mumbai & remotely pan-India.
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accentGreen text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brand-muted">Advisory Hours</div>
                    <div className="text-xs text-brand-dark font-medium mt-0.5">
                      {SITE_CONFIG.contacts.workingHours}
                    </div>
                  </div>
                </div>

                {/* Service Reach */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-accentGreen text-brand-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-brand-muted">Service Reach</div>
                    <div className="text-xs text-brand-dark font-medium mt-0.5 leading-relaxed">
                      {SITE_CONFIG.brand.reach}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Mumbai Local Areas SEO Card */}
            <div className="bg-white rounded-2xl p-5 border border-brand-borderSubtle shadow-soft-sm">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-brand-forest" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-forest">
                  Mumbai Service Coverage
                </h4>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Personalized general insurance consultations across <strong className="text-brand-dark">South Mumbai, Masjid Bunder, Andheri, Borivali, Kandivali, Malad, Goregaon</strong>, greater Maharashtra, and cross-border NRI insurance advisory.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Inquiry Form */}
          <div className="lg:col-span-7">
            <InquiryForm
              preselectedService={preselectedService}
              onClearPreselection={onClearPreselection}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
