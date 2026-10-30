import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export interface ClientReview {
  id: string;
  name: string;
  initials: string;
  location: string;
  policyType: string;
  rating: number;
  review: string;
  avatarBg?: string;
}

export const REVIEWS_DATA: ClientReview[] = [
  {
    id: 'rajesh-sharma',
    name: 'Rajesh K. Sharma',
    initials: 'RS',
    location: 'Bandra West, Mumbai',
    policyType: 'Family Health Floater & Cashless Claim',
    rating: 5,
    review:
      'When my wife needed emergency surgery at Lilavati Hospital late at night, Kashyap bhai stepped in immediately. He coordinated directly with the TPA hospital desk, and our cashless claim of ₹3.4 Lakhs was approved within 45 minutes with zero out-of-pocket dispute. Outstanding dedication and peace of mind!',
    avatarBg: 'bg-emerald-700',
  },
  {
    id: 'sunita-deshmukh',
    name: 'Sunita Deshmukh',
    initials: 'SD',
    location: 'Dadar, Mumbai',
    policyType: 'Senior Citizen Parents Medical Cover',
    rating: 5,
    review:
      'Finding comprehensive health insurance for my 68-year-old father with pre-existing diabetes seemed impossible until we consulted Secure With Mehta. Kashyap ji explained every clause, waiting periods, and got us an optimal policy without restrictive room-rent sublimits. A true professional advisor.',
    avatarBg: 'bg-brand-forest',
  },
  {
    id: 'vikramaditya-shah',
    name: 'Vikramaditya Shah',
    initials: 'VS',
    location: 'Fort & Nariman Point, Mumbai',
    policyType: 'Corporate & Marine Cargo Cover',
    rating: 5,
    review:
      'We have trusted Kashyap Mehta with our export cargo and office package policies for over 8 years. His independent policy review uncovered critical gaps in our prior insurer’s fine print and saved our firm from severe claim liabilities. Highly recommended for commercial business risks.',
    avatarBg: 'bg-slate-800',
  },
  {
    id: 'priya-patel',
    name: 'Priya N. Patel',
    initials: 'PP',
    location: 'Ahmedabad & Malad, Mumbai',
    policyType: 'Critical Illness & Pure Term Life',
    rating: 5,
    review:
      'Unlike traditional agents who push high-commission investment-linked schemes, Mr. Kashyap provided 100% unbiased, transparent advice. He analyzed our family income and structured a pure term plan with critical illness rider that fit our budget perfectly. Honest guidance at its best.',
    avatarBg: 'bg-teal-700',
  },
  {
    id: 'amitabh-sengupta',
    name: 'Amitabh Sengupta',
    initials: 'AS',
    location: 'Powai, Mumbai',
    policyType: 'Existing Policy Audit & Super Top-up',
    rating: 5,
    review:
      'I only had an employer group health cover of ₹5 Lakhs and didn’t realize how exposed my family was to medical inflation. Kashyap Mehta audited my policy and recommended an affordable ₹25 Lakh Super Top-up plan. His knowledge of policy fine print is simply exceptional.',
    avatarBg: 'bg-brand-forest',
  },
  {
    id: 'meenakshi-iyer',
    name: 'Meenakshi Iyer',
    initials: 'MI',
    location: 'Chembur, Mumbai',
    policyType: 'Motor Comprehensive & Accidental Damage',
    rating: 5,
    review:
      'Prompt, honest, and always accessible on call or WhatsApp. When our car met with an accident on the Mumbai-Pune Expressway, Kashyap ji guided us step-by-step through the surveyor inspection and cashless garage approval. You rarely find this level of post-sales claims commitment today.',
    avatarBg: 'bg-emerald-800',
  },
  {
    id: 'arvind-narang',
    name: 'Arvind Narang',
    initials: 'AN',
    location: 'Andheri East, Mumbai',
    policyType: 'Directors & Officers (D&O) Liability',
    rating: 5,
    review:
      'For our growing software consultancy, getting the right liability and workmen compensation cover was essential for client contracts and investor audits. Kashyap Mehta structured our policies meticulously and delivered all documentation within 48 hours. Secure With Mehta is unmatched.',
    avatarBg: 'bg-slate-900',
  },
];

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Responsive visible count: 1 on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const totalReviews = REVIEWS_DATA.length;
  // Duplicate enough items at the end for seamless infinite looping
  const displayItems = [...REVIEWS_DATA, ...REVIEWS_DATA.slice(0, visibleCount)];

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  }, [totalReviews]);

  // Seamless jump when reaching duplicated items
  const handleTransitionEnd = () => {
    if (currentIndex >= totalReviews) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Turn transitions back on after instant reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Autoplay swipe timer (swipes every 4.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const activeDotIndex = currentIndex % totalReviews;

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-brand-accentGreenLight/30 border-y border-brand-borderSubtle relative overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accentGreen/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-accentYellow/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider shadow-soft-sm">
            <MessageSquareQuote className="w-4 h-4 text-emerald-700" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            Trusted by Families & Businesses
          </h2>

          <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto">
            Authentic experiences, claim assistance reviews, and advisory stories from long-standing policyholders across Mumbai and Pan-India.
          </p>

          {/* Social Proof & Rating Pill */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-brand-forest bg-white/90 px-4 py-2 rounded-full border border-brand-borderSubtle shadow-soft-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-brand-dark font-extrabold">5.0 / 5.0 Rating</span>
            <span className="hidden sm:inline text-brand-muted">•</span>
            <span className="text-brand-muted font-medium">2,000+ Insured Clients</span>
            <span className="hidden sm:inline text-brand-muted">•</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 99% Claim Assistance
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-white text-brand-forest hover:bg-brand-forest hover:text-brand-accentYellow shadow-soft hover:shadow-soft-lg border border-brand-borderSubtle transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accentGreenBorder"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-white text-brand-forest hover:bg-brand-forest hover:text-brand-accentYellow shadow-soft hover:shadow-soft-lg border border-brand-borderSubtle transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accentGreenBorder"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Viewport Track */}
          <div className="overflow-hidden py-3">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {displayItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  style={{ width: `${100 / visibleCount}%` }}
                  className="flex-shrink-0 px-2.5 sm:px-3.5"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-brand-borderSubtle hover:border-brand-accentGreenBorder shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    {/* Top Decorative Quote Icon */}
                    <div className="absolute top-5 right-6 text-brand-accentGreen pointer-events-none group-hover:text-emerald-200 transition-colors">
                      <Quote className="w-8 h-8 fill-current opacity-40 rotate-180" />
                    </div>

                    <div>
                      {/* Top Row: 5 Stars & Verified Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, s) => (
                            <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verified
                        </span>
                      </div>

                      {/* Review Quote Text */}
                      <p className="text-sm sm:text-[15px] text-brand-dark/85 leading-relaxed font-normal italic">
                        "{item.review}"
                      </p>
                    </div>

                    {/* Bottom Author Section (Indian Names with policy and location below) */}
                    <div className="pt-5 mt-5 border-t border-brand-borderSubtle/70 flex items-center gap-3.5">
                      {/* Initials Avatar */}
                      <div
                        className={`w-11 h-11 rounded-full ${item.avatarBg || 'bg-brand-forest'} text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-soft-sm tracking-wider`}
                      >
                        {item.initials}
                      </div>

                      {/* Name & Subtitle */}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-extrabold text-brand-dark text-base sm:text-lg leading-tight truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-brand-forest font-semibold mt-0.5 truncate">
                          {item.policyType}
                        </p>
                        <p className="text-[11px] text-brand-muted font-normal mt-0.5 truncate">
                          {item.location}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Autoplay status hint & manual navigation dots */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-muted px-2">
            <div className="flex items-center gap-1.5 order-2 sm:order-1">
              {REVIEWS_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(dotIdx);
                  }}
                  aria-label={`Jump to review ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeDotIndex === dotIdx
                      ? 'w-8 bg-brand-forest shadow-soft-sm'
                      : 'w-2.5 bg-brand-forest/20 hover:bg-brand-forest/40'
                  }`}
                />
              ))}
            </div>

            <div className="order-1 sm:order-2 text-[11px] text-brand-muted/80 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Auto-swiping every 4.5s • Hover to pause</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
