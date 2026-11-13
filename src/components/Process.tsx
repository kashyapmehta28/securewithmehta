import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareCheck, UserCheck, FileSpreadsheet, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteConfig';

export const Process: React.FC = () => {
  const iconList = [MessageSquareCheck, UserCheck, FileSpreadsheet, CheckCircle2];

  return (
    <section className="py-20 md:py-28 bg-brand-accentGreenLight/30 border-y border-brand-borderSubtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider">
            <span>How It Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            A Transparent, Step-by-Step Advisory Journey
          </h2>
          
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            No hurried sales, no automated call center confusion. We guide you methodically from assessing your true risks to securing adequate coverage with reputable insurers.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-borderSubtle -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = iconList[idx] || CheckCircle2;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="bg-white rounded-2xl p-5 sm:p-7 border border-brand-borderSubtle hover:border-brand-accentGreenBorder shadow-soft-sm hover:shadow-soft transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Step Number + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-black text-brand-forest/30 group-hover:text-brand-forest transition-colors">
                        {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-brand-accentGreen text-brand-forest flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-forest group-hover:text-brand-accentYellow transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-brand-dark mb-2.5">
                      {step.title}
                    </h3>

                    {'description' in step && (step as any).description ? (
                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                        {(step as any).description}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-borderSubtle flex items-center text-xs font-semibold text-brand-forest">
                    <span>Phase {step.step}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA prompt */}
        <div className="mt-12 text-center">
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-forest hover:text-brand-forestHover underline underline-offset-4"
          >
            <span>Begin Step 1: Share Your Requirement on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
