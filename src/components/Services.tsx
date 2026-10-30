import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteConfig';
import { DynamicIcon } from './DynamicIcon';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
  onExploreAll?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onExploreAll }) => {
  // 8 Representative policy lines shown on the home page (Heading + Icon only)
  const top8Services = useMemo(() => {
    const top8Ids = [
      'health-insurance',
      'life-insurance',
      'car-insurance',
      'commercial-vehicle-insurance',
      'marine-transit-insurance',
      'fire-policy',
      'workmen-policy',
      'cyber-crime-insurance'
    ];
    const picked = top8Ids
      .map(id => SERVICES_DATA.find(s => s.id === id))
      .filter((s): s is (typeof SERVICES_DATA)[0] => Boolean(s));
    return picked.length === 8 ? picked : SERVICES_DATA.slice(0, 8);
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>38+ Specialized Insurance Lines</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Specialized Insurance Solutions
          </h2>
          
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            Independent advisory across life, commercial, and general insurance lines. Browse our primary policies below or click explore to view our complete portfolio.
          </p>
        </div>

        {/* 8 Clean Heading-Only Policy Cards (2 cols on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-12">
          {top8Services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.025 }}
              className="group relative flex flex-col justify-between bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-brand-borderSubtle hover:border-brand-accentGreenBorder shadow-soft-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                {/* Icon Box */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-brand-accentGreen text-brand-forest flex items-center justify-center mb-2.5 sm:mb-3.5 group-hover:bg-brand-forest group-hover:text-brand-accentYellow transition-colors duration-200">
                  <DynamicIcon name={service.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Title Only - Clean & Bold */}
                <h3 className="text-xs sm:text-base font-bold text-brand-dark group-hover:text-brand-forest transition-colors leading-snug line-clamp-2">
                  {service.title}
                </h3>
              </div>

              {/* Inquire Action Link */}
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-brand-borderSubtle/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="text-[11px] sm:text-xs font-bold text-brand-forest hover:text-brand-forestHover inline-flex items-center gap-1 group/btn"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Services Button (Navigates to dedicated page) */}
        <div className="text-center pt-2">
          <button
            type="button"
            id="explore-services-btn"
            onClick={onExploreAll}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-brand-forest hover:bg-brand-forestHover text-white font-bold text-sm tracking-wide shadow-soft hover:shadow-soft-lg hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            <span>Explore All 38+ Services</span>
            <ArrowRight className="w-4 h-4 text-brand-accentYellow group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
export default Services;
