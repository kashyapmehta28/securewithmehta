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

        {/* 8 Clean Heading-Only Policy Cards (2 cols on mobile, 4 on tablet & desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12">
          {top8Services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.025 }}
              onClick={() => onSelectService(service.title)}
              className="group relative flex flex-col justify-between bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-brand-borderSubtle hover:border-brand-accentGreenBorder shadow-soft-sm hover:shadow-soft hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 cursor-pointer"
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
                <span className="text-[11px] sm:text-xs font-bold text-brand-forest hover:text-brand-forestHover inline-flex items-center gap-1 group/btn">
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All Services Button (Navigates to dedicated page) */}
        <div className="text-center pt-4 sm:pt-6">
          <div className="relative inline-flex flex-col items-center">
            
            {/* Pulsing Gradient Aura Glow */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.45, 0.85, 0.45]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -inset-1 sm:-inset-1.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-600 blur-md pointer-events-none"
            />

            {/* Top Floating Badge */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accentYellow text-brand-dark text-[11px] sm:text-xs font-extrabold shadow-soft border border-amber-300 relative z-10"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
              <span>Full Portfolio Access</span>
              <span className="relative flex h-2 w-2 ml-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
            </motion.div>

            {/* Main Animated Button */}
            <motion.button
              type="button"
              id="explore-services-btn"
              onClick={onExploreAll}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-brand-forest via-[#16422F] to-brand-forest hover:from-brand-forestHover hover:to-brand-forestHover text-white font-extrabold text-sm sm:text-base tracking-wide shadow-soft-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-emerald-400/40 z-10"
            >
              {/* Animated Continuous Shimmer Light Ray */}
              <motion.div
                animate={{
                  x: ['-100%', '220%']
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: 'easeInOut',
                  repeatDelay: 0.8
                }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
              />

              <span className="text-white drop-shadow-sm font-extrabold">Explore All 38+ Services</span>

              <span className="px-2 py-0.5 rounded-md bg-brand-accentYellow text-brand-dark text-xs font-black shadow-sm group-hover:bg-yellow-300 transition-colors">
                38+ Lines
              </span>

              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accentYellow group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>

            {/* Helpful Sub-Caption */}
            <p className="mt-2.5 text-xs text-brand-muted font-medium flex items-center gap-1.5 text-center">
              <span>Click to view specialized covers across Health, Life, Fire, Marine, Liability, Gadgets & more</span>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
export default Services;
