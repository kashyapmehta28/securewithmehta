import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  BookOpenCheck,
  Layers,
  Smartphone,
  ShieldAlert,
  MapPin,
  CheckCircle,
  Sparkles,
  Check
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteConfig';

export const WhyChooseUs: React.FC = () => {
  const iconList = [
    Compass,
    BookOpenCheck,
    Layers,
    Smartphone,
    ShieldAlert,
    MapPin
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accentGreenLight/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-accentYellow/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-3 text-xs font-semibold uppercase tracking-wider shadow-soft-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-forest animate-pulse" />
            <span>Our Service Approach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-3"
          >
            Why Consult Secure With Mehta?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-base text-brand-muted font-normal max-w-2xl mx-auto leading-relaxed"
          >
          </motion.p>
        </div>

        {/* 2x2 Box on Phone, 2x2 on Tablet, 3-Col on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconList[idx] || CheckCircle;
            const indexNumber = String(idx + 1).padStart(2, '0');

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.96 }}
                className="group relative bg-white rounded-2xl p-4 sm:p-6 border border-brand-borderSubtle hover:border-brand-forest/40 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Corner Shimmer Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-accentGreen/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Row: Index Badge & Icon */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 4 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-accentGreen to-brand-accentGreenLight text-brand-forest flex items-center justify-center flex-shrink-0 group-hover:bg-brand-forest group-hover:text-brand-accentYellow transition-colors duration-300 shadow-soft-sm"
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>

                    <span className="text-[11px] sm:text-xs font-mono font-bold text-brand-forest/50 group-hover:text-brand-forest transition-colors">
                      #{indexNumber}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-base font-bold text-brand-dark group-hover:text-brand-forest transition-colors leading-snug mb-1.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed line-clamp-3 sm:line-clamp-none font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verified Micro-Indicator */}
                <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3 border-t border-brand-borderSubtle/60 flex items-center justify-between text-[10px] sm:text-xs text-brand-forest font-semibold">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    SWM Standard
                  </span>
                  <Check className="w-3.5 h-3.5 text-emerald-600 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
