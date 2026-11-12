import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpenCheck, Layers, Smartphone, ShieldAlert, MapPin, CheckCircle } from 'lucide-react';
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
    <section id="why-choose-us" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-3 text-xs font-semibold uppercase tracking-wider">
            <span>Our Service Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-3">
            Why Consult Secure With Mehta?
          </h2>
          
          <p className="text-sm sm:text-base text-brand-muted font-normal">
            Independent advisory focused on your protection rather than sales targets.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconList[idx] || CheckCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-brand-borderSubtle hover:border-brand-accentGreenBorder shadow-soft-sm hover:shadow-soft transition-all duration-300 flex items-start gap-3.5 sm:gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accentGreen text-brand-forest flex items-center justify-center flex-shrink-0 group-hover:bg-brand-forest group-hover:text-brand-accentYellow transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-forest transition-colors leading-snug mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

