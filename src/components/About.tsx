import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, MapPin, Quote, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

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

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-accentGreenLight/30 border-y border-brand-borderSubtle relative overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-accentGreen/40 rounded-full blur-3xl pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-accentYellow/20 rounded-full blur-3xl pointer-events-none -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Row: Founder Portrait + Narrative + Creative Quote */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-12 sm:mb-16">
          
          {/* Left Column: Owner Portrait (Exact Height Match with Narrative) */}
          <div className="md:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[300px] xs:min-h-[340px] sm:min-h-[440px] rounded-2xl overflow-hidden shadow-soft-lg border border-brand-borderSubtle group bg-brand-accentGreenLight flex flex-col justify-end">
              {/* Photo filling 100% of column */}
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

              {/* Gradient overlay for text contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10" />

              {/* Name & Location Info at bottom of photo */}
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

          {/* Right Column: Narrative + Creative Quote */}
          <div className="md:col-span-7 flex flex-col justify-between py-0.5 text-left">
            <div>
              {/* Top Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-3 text-xs font-semibold uppercase tracking-wider shadow-soft-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-forest" />
                <span>About Kashyap Mehta</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight mb-4 leading-tight">
                Personalized Guidance Grounded in Four Decades of Trust
              </h2>

              {/* Short & Impactful Narrative */}
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
                Backed by four decades of business heritage in Mumbai, <strong className="text-brand-dark font-bold">Kashyap Mehta</strong> and <strong className="text-brand-dark font-bold">Secure With Mehta</strong> <span className="text-brand-dark/70 font-medium">(formerly Mehta Associates)</span> provide independent, human-centered guidance across Life and General Insurance portfolios—decoding fine print to safeguard your family and business.
              </p>

              {/* Creative One-Line Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-white border-2 border-brand-accentGreenBorder shadow-soft-sm overflow-hidden group"
              >
                {/* Left Accent Color Line */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-forest via-emerald-600 to-brand-accentYellowDark" />
                
                {/* Background Watermark Icon */}
                <div className="absolute -right-3 -bottom-3 text-brand-forest/5 pointer-events-none">
                  <Quote className="w-16 h-16 rotate-180" />
                </div>

                {/* Editorial Crisp One-Line Quote in Playfair Display Creative Serif */}
                <p className="font-quote italic text-base sm:text-lg md:text-xl text-brand-dark leading-snug pl-2 font-medium">
                  &ldquo;Protecting what matters most, with guidance you can trust.&rdquo;
                </p>

                <div className="mt-2.5 pl-2 flex items-center justify-between border-t border-brand-borderSubtle/60 pt-2">
                  <span className="text-xs font-bold text-brand-forest">
                    — Kashyap Mehta, <span className="text-brand-muted font-normal">Founder</span>
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-brand-accentGreen px-2.5 py-0.5 rounded-full border border-brand-accentGreenBorder">
                    Core Commitment
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* ========================================================
            MERGED SECTION: 4 Trust Statistics Grid
            (2000+ Happy Clients, 99% Claim Settled, 38+ Lines, 100% Policy Review)
            ======================================================== */}
        <div className="pt-8 sm:pt-10 border-t border-brand-borderSubtle">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {SITE_CONFIG.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-brand-accentGreenBorder shadow-soft-sm hover:shadow-soft hover:border-brand-forest/40 transition-all duration-300 text-center group"
              >
                <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-brand-forest group-hover:text-emerald-800 transition-colors mb-1.5 sm:mb-2 font-display">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <div className="text-xs sm:text-sm font-bold text-brand-dark mb-0.5 leading-snug">
                  {stat.label}
                </div>
                
                {stat.subtext ? (
                  <p className="text-[11px] text-brand-muted leading-relaxed">
                    {stat.subtext}
                  </p>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
