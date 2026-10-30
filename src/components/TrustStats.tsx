import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SITE_CONFIG } from '../data/siteConfig';
import { MapPin, Globe2, ShieldCheck } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix = '', duration = 1.8 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

export const TrustStats: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid - 2x2 on mobile, 4 in a row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {SITE_CONFIG.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-accentGreenLight/60 rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-brand-borderSubtle hover:border-brand-accentGreenBorder transition-all duration-300 text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-forest mb-1.5 sm:mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <div className="text-xs sm:text-base font-bold text-brand-dark mb-1 leading-snug">
                {stat.label}
              </div>
              
              {stat.subtext && (
                <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed">
                  {stat.subtext}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Geographic Reach Banner */}
        <div className="mt-12 bg-gradient-to-r from-brand-forest to-[#1a4431] rounded-2xl p-6 sm:p-8 text-white shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-brand-accentYellow flex items-center justify-center flex-shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Pan-India & Cross-Border Service Reach
                </h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  Headquartered in Mumbai, we assist clients across Maharashtra, pan-India, and provide NRI advisory on Indian life and general insurance contracts (subject to applicable cross-border regulations and insurer guidelines).
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2 justify-end">
              <div className="flex items-center gap-2 text-xs font-medium text-brand-accentYellow">
                <MapPin className="w-3.5 h-3.5" />
                <span>Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Life & General Portfolios</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
