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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider">
            <span>Direct Communication</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            Connect with Secure With Mehta
          </h2>
        </div>

        {/* Grid: Left Column Info Cards, Right Column Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Details (2 cols on tablet, 1 col on mobile & desktop) */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 text-left">
            
            {/* Primary Office Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-borderSubtle shadow-soft-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-accentYellow flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {SITE_CONFIG.brand.temporaryWordmark}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">
                    {SITE_CONFIG.brand.fullName}
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
