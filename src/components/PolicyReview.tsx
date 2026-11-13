import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, LifeBuoy, RefreshCw, ShieldCheck, Check } from 'lucide-react';
import { POLICY_REVIEW_FEATURES } from '../data/siteConfig';

interface PolicyReviewProps {
  onBookReview?: () => void;
}

export const PolicyReview: React.FC<PolicyReviewProps> = () => {
  const iconList = [TrendingUp, Search, LifeBuoy, RefreshCw];

  return (
    <section id="policy-review" className="py-20 md:py-28 bg-gradient-to-b from-brand-accentGreenLight/40 via-white to-brand-accentGreenLight/30 border-y border-brand-borderSubtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Policy Audit & Claims Guidance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            Already Have Insurance? Review Before You Need It.
          </h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POLICY_REVIEW_FEATURES.map((feature, idx) => {
            const IconComponent = iconList[idx] || Search;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-brand-borderSubtle hover:border-brand-accentGreenBorder shadow-soft-sm hover:shadow-soft transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-accentGreen text-brand-forest flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-brand-dark mb-2.5">
                    {feature.title}
                  </h3>

                  {'description' in feature && (feature as any).description ? (
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {(feature as any).description}
                    </p>
                  ) : null}
                </div>

                <div className="mt-5 pt-3 border-t border-brand-borderSubtle flex items-center gap-1.5 text-xs text-brand-forest font-semibold">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Audit Focus</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
