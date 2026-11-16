import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, PhoneCall, MapPin, CheckCircle, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface HeroProps {
  onExploreClick: () => void;
  onAssistanceClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onAssistanceClick }) => {
  // Reusable Consultant Card (Used below former name line on mobile, and in right column on desktop)
  const renderConsultantCard = () => (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mr-0">
      {/* Outer Decorative Glow Card */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-accentGreen to-brand-accentYellow/80 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
      
      <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-soft-lg border border-brand-borderSubtle">
        {/* Profile Photo Area */}
        <div className="relative w-full aspect-[3/3.8] sm:aspect-[3/3.9] rounded-2xl overflow-hidden bg-gradient-to-b from-brand-accentGreenLight to-brand-accentGreen border border-brand-accentGreenBorder shadow-inner group">
          {/* Photo Image */}
          <img
            src="/images/kashyap-mehta.jpg"
            alt="Kashyap Mehta – General Insurance Consultant in Mumbai"
            className="w-full h-full object-cover object-[50%_4%] transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Top-Right Verified Consultant Pill */}
          <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-brand-forest text-[11px] font-bold shadow-soft border border-white/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Verified Advisor</span>
          </div>

          {/* Subtle bottom shadow vignette for badge contrast */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none z-10" />
        </div>

        {/* Consultant Details Card Footer */}
        <div className="mt-5 pt-4 border-t border-brand-borderSubtle">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-white p-0.5 border border-brand-borderSubtle flex-shrink-0 shadow-soft-sm">
                <img
                  src="/images/logo.png"
                  alt="Secure With Mehta General Insurance Consultancy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-dark leading-tight">Kashyap Mehta</h3>
                <p className="text-xs text-brand-muted">
                  Secure With Mehta <span className="text-[10px] text-brand-forest font-semibold">(Formerly Mehta Associates)</span>
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-accentGreen text-brand-forest">
              <MapPin className="w-3 h-3" />
              <span>Mumbai</span>
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-brand-muted bg-brand-accentGreenLight/60 p-2.5 rounded-xl border border-brand-accentGreenBorder/60">
            <span className="font-medium">Direct Line:</span>
            <a
              href={SITE_CONFIG.contacts.numbers[0].tel}
              className="font-bold text-brand-forest hover:underline flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              {SITE_CONFIG.contacts.numbers[0].display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="home" className="relative pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-accentGreenLight/40 via-white to-white">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accentGreen/50 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-accentYellow/30 rounded-full blur-3xl -z-10 pointer-events-none -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <motion.div
            className="lg:col-span-7 text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* 1. Established Presence Pill */}
            <div className="inline-flex flex-wrap items-center gap-1.5 xs:gap-2 px-3 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 sm:mb-6 shadow-soft-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse flex-shrink-0" />
              <span className="text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-wide">
                <span className="font-bold">Secure With Mehta</span> • 40+ Years of General Insurance Advisory in Mumbai
              </span>
            </div>

            {/* 2. On Mobile & Tablets (< lg): Image shown directly below badge line */}
            <div className="block lg:hidden mb-6 sm:mb-8">
              {renderConsultantCard()}
            </div>

            {/* 3. Hero Section H1 (Target Primary Keyword) */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.2] sm:leading-[1.16] mb-3 sm:mb-4"
            >
              Trusted General Insurance Consultant in Mumbai
            </motion.h1>

            {/* 4. Casual Handwritten Quote with Animation (Applied across Mobile, Tablet & Laptop) */}
            <div
              style={{ fontFamily: "'Caveat', 'Kalam', cursive, sans-serif" }}
              className="font-casual text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-normal leading-[1.25] mb-4 sm:mb-5 select-none"
            >
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ fontFamily: "'Caveat', 'Kalam', cursive, sans-serif" }}
                className="inline-block drop-shadow-xs"
              >
                Protection for What Matters.
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                style={{ fontFamily: "'Caveat', 'Kalam', cursive, sans-serif" }}
                className="text-brand-forest inline-block relative font-bold"
              >
                Guidance You Can Trust.
                {/* Animated Hand-Drawn Highlight Accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
                  className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-4 bg-brand-accentYellow/80 -z-10 rounded-sm origin-left"
                />
              </motion.span>
            </div>

            {/* 5. SEO Description Paragraph with Primary & Supporting Keywords */}
            <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed font-normal mb-6 sm:mb-8 max-w-2xl">
              Providing independent <strong className="text-brand-dark font-semibold">General Insurance Services in Mumbai</strong>. Led by <strong className="text-brand-dark font-semibold">Kashyap Mehta</strong> with over 40 years of experience, Secure With Mehta delivers unbiased insurance guidance and solutions for individuals and businesses—including motor, commercial, fire, and business insurance solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={onAssistanceClick}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-brand-forest hover:bg-brand-forestHover active:bg-brand-forestHover active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-soft hover:shadow-soft-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-forest group"
              >
                <span>Connect with Secure With Mehta</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-accentYellow group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-white hover:bg-brand-accentGreenLight active:bg-brand-accentGreen active:scale-[0.98] text-brand-dark font-semibold text-sm sm:text-base border border-brand-borderSubtle hover:border-brand-accentGreenBorder transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-brand-forest" />
                <span>General Insurance Solutions</span>
              </button>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-brand-borderSubtle">
              {SITE_CONFIG.hero.badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span className="text-xs font-semibold text-brand-dark/90 leading-tight">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Desktop-Only Right Column: Kashyap Mehta Portrait / Consultant Card */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderConsultantCard()}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
