import React from 'react';
import { Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-accentGreenLight/30 border-y border-brand-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Owner Portrait (Exact Height Match with Text) */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[360px] sm:min-h-[420px] rounded-2xl overflow-hidden shadow-soft-lg border border-brand-borderSubtle group bg-brand-accentGreenLight flex flex-col justify-end">
              {/* Photo filling 100% of the column height */}
              <img
                src="/images/kashyap-mehta-blazer.jpg"
                alt="Kashyap Mehta - Insurance Advisor"
                className="absolute inset-0 w-full h-full object-cover object-[50%_12%] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Top-Right Established Badge */}
              <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-forest text-xs font-bold shadow-soft border border-white/80">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                <span>Established Presence</span>
              </div>

              {/* Gradient overlay for bottom text contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none z-10" />

              {/* Name & Location Info at the bottom of the photo */}
              <div className="relative z-20 p-4 sm:p-5 flex items-end justify-between gap-2 text-white">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow-sm">
                    Kashyap Mehta
                  </h3>
                  <p className="text-xs text-white/90 font-medium mt-0.5">
                    Secure With Mehta
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white/90 text-[11px] font-semibold border border-white/20 flex-shrink-0">
                  <MapPin className="w-3 h-3 text-brand-accentYellow" />
                  <span>Mumbai & Pan-India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative (Aligned from Image Top to Image Bottom) */}
          <div className="md:col-span-7 flex flex-col justify-between py-0.5 text-left">
            <div>
              {/* Top Tag - Level with Image Top */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-3 text-xs font-semibold uppercase tracking-wider">
                <span>About Kashyap Mehta</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight mb-4 leading-tight">
                Personalized Guidance Grounded in Four Decades of Trust
              </h2>

              {/* 3 Narrative Paragraphs */}
              <div className="space-y-3.5 text-sm sm:text-base text-brand-muted leading-relaxed">
                <p>
                  In an era dominated by automated insurance portals and algorithm-driven comparisons, <strong className="text-brand-dark font-bold">Kashyap Mehta</strong> and <strong className="text-brand-dark font-bold">Secure With Mehta</strong> <span className="text-brand-dark/70 font-medium">(formerly known as Mehta Associates)</span> bring back what truly matters: direct, human-centered insurance guidance.
                </p>
                
                <p>
                  Drawing on an established business heritage rooted in Mumbai, the firm specializes exclusively in Life and General Insurance products. Our role is to assist clients in identifying appropriate risk protection, reviewing policy fine print, and evaluating products from all insurance companies across India.
                </p>

                <p className="mb-0">
                  Whether you are an individual safeguarding your family’s healthcare and life goals, or a business owner protecting warehousing inventory, factory machinery, and professional liabilities, we help you understand your coverage thoroughly before you commit.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
