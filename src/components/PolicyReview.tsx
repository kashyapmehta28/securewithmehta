import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, LifeBuoy, RefreshCw, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';
import { POLICY_REVIEW_FEATURES, SITE_CONFIG } from '../data/siteConfig';

interface PolicyReviewProps {
  onBookReview?: () => void;
}

export const PolicyReview: React.FC<PolicyReviewProps> = ({ onBookReview }) => {
  const iconList = [TrendingUp, Search, LifeBuoy, RefreshCw];

  const focusDescriptions = [
    "Inflation & sum insured audit",
    "Room-rent & waiting period scan",
    "Dispute-free file preparation",
    "Multi-policy consolidation",
  ];

  return (
    <section id="policy-review" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-brand-accentGreenLight/40 via-white to-brand-accentGreenLight/30 border-y border-brand-borderSubtle relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-accentYellow/30 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-3.5 text-xs font-semibold uppercase tracking-wider shadow-soft-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-700 animate-pulse" />
            <span>Policy Audit & Claims Guidance</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
            Already Have Insurance? <br className="hidden xs:inline" />
            <span className="text-brand-forest relative inline-block">
              Review Before You Need It.
              <span className="absolute left-0 bottom-1 w-full h-2 bg-brand-accentYellow/70 -z-10 rounded-sm" />
            </span>
          </h2>


        </div>

        {/* 2x2 Box on Phone, 2x2 on Tablet, 4x1 on Laptop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {POLICY_REVIEW_FEATURES.map((feature, idx) => {
            const IconComponent = iconList[idx] || Search;
            const subtitle = focusDescriptions[idx];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-white rounded-2xl p-4 sm:p-6 border border-brand-borderSubtle hover:border-emerald-600/50 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Top Subtle Animated Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-accentGreen/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Icon Box with Pulsing Background and Hover Spring */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br from-brand-accentGreen to-brand-accentGreenLight text-brand-forest flex items-center justify-center mb-3 sm:mb-4 shadow-soft-sm group-hover:bg-brand-forest group-hover:text-brand-accentYellow transition-colors duration-300"
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-base font-bold text-brand-dark group-hover:text-brand-forest transition-colors leading-snug mb-1.5">
                    {feature.title}
                  </h3>

                  {/* Subtitle Focus description */}
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed hidden xs:block">
                    {subtitle}
                  </p>
                </div>

                {/* Audit Focus Badge with Pulsing Live Dot */}
                <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-3 border-t border-brand-borderSubtle/60 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-brand-forest font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                    </span>
                    <span>Audit Pillar 0{idx + 1}</span>
                  </div>
                  <Check className="w-3.5 h-3.5 text-emerald-700 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Creative Call-to-Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl bg-white border border-brand-borderSubtle shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left relative overflow-hidden"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-brand-forest text-brand-accentYellow flex items-center justify-center flex-shrink-0 shadow-soft">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-brand-dark">
                Complimentary 15-Minute Policy Gap Review
              </h4>
              <p className="text-xs text-brand-muted mt-0.5">
                Send your policy summary or renewal notice on WhatsApp for a transparent clause-by-clause audit.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${encodeURIComponent(
              'Hello Kashyap ji, I would like to book a complimentary policy audit review for my existing insurance.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBookReview}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-forest hover:bg-brand-forestHover active:bg-brand-forestHover text-white font-bold text-xs sm:text-sm shadow-soft hover:shadow-soft-lg transition-all group flex-shrink-0"
          >
            <span>Request Policy Audit</span>
            <ArrowRight className="w-4 h-4 text-brand-accentYellow group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
