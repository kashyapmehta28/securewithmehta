import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  BookOpenCheck,
  Layers,
  Smartphone,
  ShieldAlert,
  MapPin,
  CheckCircle,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Users,
  HeartPulse,
  Briefcase,
  Building2,
  Check
} from 'lucide-react';
import { WHY_CHOOSE_US, SITE_CONFIG } from '../data/siteConfig';

type ProfileKey = 'family' | 'senior' | 'pro' | 'business';

interface DiagnosticProfile {
  id: ProfileKey;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  checks: {
    id: string;
    question: string;
    subtext: string;
    importance: string;
  }[];
}

const DIAGNOSTIC_PROFILES: DiagnosticProfile[] = [
  {
    id: 'family',
    label: 'Family Floater',
    shortLabel: 'Family',
    icon: Users,
    tagline: 'Comprehensive Health & Breadwinner Protection for Spouse & Children',
    checks: [
      {
        id: 'term_income',
        question: 'Pure Term Cover ≥ 15x Annual Income?',
        subtext: 'To ensure your family maintains their lifestyle and debt-free security without compromise.',
        importance: 'High Priority'
      },
      {
        id: 'no_room_rent_cap',
        question: 'Zero Room Rent Capping in Health Cover?',
        subtext: 'Avoids punitive proportionate deductions on doctors, ICU, and surgery bills.',
        importance: 'Critical'
      },
      {
        id: 'restoration_benefit',
        question: '100% Unlimited Restoration Benefit?',
        subtext: 'Restores full sum insured if two family members require hospitalization in the same year.',
        importance: 'Essential'
      },
      {
        id: 'critical_rider',
        question: 'Critical Illness / Cancer Lump Sum Rider?',
        subtext: 'Direct cash payout to cover income loss and experimental drugs during prolonged recovery.',
        importance: 'Recommended'
      }
    ]
  },
  {
    id: 'senior',
    label: 'Senior Parents',
    shortLabel: 'Parents',
    icon: HeartPulse,
    tagline: 'Pre-existing Conditions, Zero Co-pay & Daycare Treatment Protection',
    checks: [
      {
        id: 'co_pay_zero',
        question: 'No Compulsory Co-payment (0% Deductible)?',
        subtext: 'Ensure the insurer pays 100% of approved bills without a 20% or 30% senior deduction.',
        importance: 'Critical'
      },
      {
        id: 'ped_wait_period',
        question: 'Pre-Existing Disease Waiting Under 2 Years?',
        subtext: 'Shorter waiting windows for hypertension, diabetes, and joint replacements.',
        importance: 'High Priority'
      },
      {
        id: 'daycare_robotic',
        question: 'Modern & Robotic Surgeries Included?',
        subtext: 'Full coverage for eye injections, angioplasty, and advanced minimally-invasive procedures.',
        importance: 'Essential'
      },
      {
        id: 'no_claim_bonus',
        question: 'Inflation-Shielding Cumulative Bonus (NCB)?',
        subtext: 'Increases coverage up to 100%–500% over claim-free renewal years.',
        importance: 'Recommended'
      }
    ]
  },
  {
    id: 'pro',
    label: 'Self-Employed & Pro',
    shortLabel: 'Professional',
    icon: Briefcase,
    tagline: 'Independent Healthcare, Accidental Disability & Liability Shield',
    checks: [
      {
        id: 'personal_cover_active',
        question: 'Personal Cover Independent of Employer?',
        subtext: 'Protection that never lapses between job switches, freelance contracts, or retirement.',
        importance: 'Critical'
      },
      {
        id: 'personal_accident_disability',
        question: 'Accidental Temporary & Permanent Disability?',
        subtext: 'Replaces active weekly earnings if an injury prevents you from practicing or working.',
        importance: 'High Priority'
      },
      {
        id: 'super_topup_sync',
        question: 'Super Top-Up Configured with Deductible Match?',
        subtext: 'Get ₹50L–₹1 Cr umbrella healthcare cover at up to 70% lower annual premium.',
        importance: 'Smart Value'
      },
      {
        id: 'tax_optimization',
        question: 'Section 80D & 80C Tax-Compliant Planning?',
        subtext: 'Legally deduct premiums up to ₹75,000 while securing family and senior parents.',
        importance: 'Financial Goal'
      }
    ]
  },
  {
    id: 'business',
    label: 'SME & Commercial',
    shortLabel: 'Business',
    icon: Building2,
    tagline: 'Factory Fire, Marine Cargo, Cyber Liability & Employee Safety',
    checks: [
      {
        id: 'fire_burglary_stock',
        question: 'Factory / Stock Bharat Sookshma or Griha Cover?',
        subtext: 'Covers physical inventory, machinery, fire, floods, and stock-in-godown.',
        importance: 'Critical'
      },
      {
        id: 'marine_transit',
        question: 'Marine Open Policy for Dispatch & Raw Materials?',
        subtext: 'Protects interstate shipments and containerized cargo against highway transit hazards.',
        importance: 'High Priority'
      },
      {
        id: 'workmen_compensation',
        question: 'Statutory Workmen Compensation / GMC in Place?',
        subtext: 'Guarantees legal protection and medical support for manufacturing and field employees.',
        importance: 'Essential'
      },
      {
        id: 'cyber_d_and_o',
        question: 'Cyber Defense or Director’s Liability Policy?',
        subtext: 'Safeguards financial accounts, data extortion risks, and client confidentiality.',
        importance: 'Modern Essential'
      }
    ]
  }
];

export const WhyChooseUs: React.FC = () => {
  const iconList = [
    Compass,
    BookOpenCheck,
    Layers,
    Smartphone,
    ShieldAlert,
    MapPin
  ];

  // Interactive Diagnostic State
  const [selectedProfile, setSelectedProfile] = useState<ProfileKey>('family');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    term_income: true,
    no_room_rent_cap: false,
    restoration_benefit: true,
    critical_rider: false
  });

  const activeProfileData = DIAGNOSTIC_PROFILES.find((p) => p.id === selectedProfile) || DIAGNOSTIC_PROFILES[0];

  const handleToggleCheck = (checkId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [checkId]: !prev[checkId]
    }));
  };

  const handleSelectProfile = (profileId: ProfileKey) => {
    setSelectedProfile(profileId);
    // Initialize default checks for that profile
    const target = DIAGNOSTIC_PROFILES.find((p) => p.id === profileId);
    if (target) {
      const initial: Record<string, boolean> = {};
      target.checks.forEach((c, idx) => {
        initial[c.id] = idx === 0; // First item checked by default
      });
      setCheckedItems(initial);
    }
  };

  // Calculate Shield Score
  const totalQuestions = activeProfileData.checks.length;
  const verifiedCount = activeProfileData.checks.filter((c) => checkedItems[c.id]).length;
  const scorePercent = Math.round((verifiedCount / totalQuestions) * 100);

  const getScoreVerdict = (score: number) => {
    if (score === 100) return { label: 'Optimal Protection', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200', desc: 'Your portfolio covers essential clauses well. Schedule an annual review to maintain continuous adequacy.' };
    if (score >= 75) return { label: 'Well Protected (Minor Gaps)', color: 'text-emerald-600', bg: 'bg-emerald-50/80 border-emerald-200', desc: 'Strong foundation, but you have 1 clause that could trigger high out-of-pocket costs during claim time.' };
    if (score >= 50) return { label: 'Moderate Vulnerability', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200', desc: 'Crucial gaps detected: room-rent sublimits or inflation erosion could leave you underinsured when hospitalized.' };
    return { label: 'High Risk Coverage Gaps', color: 'text-red-700', bg: 'bg-red-50 border-red-200', desc: 'Immediate audit recommended. Your existing policy likely contains hidden deductions or inadequate limits.' };
  };

  const verdict = getScoreVerdict(scorePercent);

  const whatsappMessage = encodeURIComponent(
    `Hello Kashyap ji, I used your Interactive Insurance Shield Scanner on the website for my [${activeProfileData.label}] portfolio. My score was ${scorePercent}%. I want to review my coverage gaps and get independent advice.`
  );

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
            Independent advisory dedicated entirely to your family’s and company’s genuine security, free from monthly corporate sales quotas.
          </motion.p>
        </div>

        {/* 2x2 Box on Phone, 2x2 on Tablet, 3-Col on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-14 sm:mb-20">
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

        {/* 🌟 CREATIVE STANDOUT FEATURE: Interactive Policy Shield & Risk Health Diagnostic Scanner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-brand-forest via-[#0F3021] to-[#0A2317] text-white p-5 sm:p-8 md:p-10 shadow-soft-2xl border border-emerald-900/60 relative overflow-hidden"
        >
          {/* Subtle Ambient Background Patterns */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accentYellow/10 rounded-full blur-3xl pointer-events-none" />

          {/* Diagnostic Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 sm:mb-8 pb-6 border-b border-white/10 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-accentYellow border border-white/15 text-[11px] font-semibold mb-2.5">
                <ShieldCheck className="w-4 h-4 animate-pulse" />
                <span>Creative Feature: Interactive Health Check</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
                Insurance Portfolio Shield & Risk Scanner
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                Select your life stage below and check your current coverage. Discover dangerous fine-print vulnerabilities in 15 seconds.
              </p>
            </div>

            {/* Live Shield Gauge Visual for Desktop/Tablet */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 self-start md:self-auto flex-shrink-0">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={scorePercent >= 75 ? "text-emerald-400" : scorePercent >= 50 ? "text-amber-400" : "text-rose-400"}
                    strokeDasharray={`${scorePercent}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    style={{ transition: 'stroke-dasharray 0.5s ease' }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-sm font-extrabold text-white">{scorePercent}%</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">Shield Score</span>
                <span className="text-xs font-bold text-brand-accentYellow block">{verdict.label}</span>
              </div>
            </div>
          </div>

          {/* Life Stage Selector Tabs (2x2 on mobile, flex row on sm+) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 mb-6 relative z-10">
            {DIAGNOSTIC_PROFILES.map((profile) => {
              const Icon = profile.icon;
              const isSelected = selectedProfile === profile.id;

              return (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => handleSelectProfile(profile.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-brand-accentYellow text-brand-dark shadow-soft-md scale-[1.02]'
                      : 'bg-white/10 text-gray-200 hover:bg-white/15 hover:text-white border border-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-dark' : 'text-gray-300'}`} />
                  <span className="truncate">{profile.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Checklist Cards (2x2 on phone, 2-Col on larger) */}
          <div className="relative z-10">
            <div className="text-xs text-gray-300 mb-3 font-medium flex items-center justify-between">
              <span>{activeProfileData.tagline}</span>
              <span className="text-[11px] text-brand-accentYellow font-semibold hidden sm:inline">Tap to toggle your current coverage</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <AnimatePresence mode="wait">
                {activeProfileData.checks.map((item) => {
                  const isChecked = !!checkedItems[item.id];

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => handleToggleCheck(item.id)}
                      className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-white/15 border-emerald-400/50 shadow-soft-sm'
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Checkbox circle */}
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-emerald-500 text-white' : 'border border-white/30 bg-transparent'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className={`text-xs sm:text-sm font-bold ${isChecked ? 'text-white' : 'text-gray-300'}`}>
                            {item.question}
                          </h4>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex-shrink-0 ${
                            isChecked ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {isChecked ? 'Protected' : 'Unchecked'}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-snug">
                          {item.subtext}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Verdict Diagnostic Box & WhatsApp One-Click Action */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3 text-left w-full md:w-auto">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  scorePercent >= 75 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {scorePercent >= 75 ? <ShieldCheck className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5 animate-bounce" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Diagnostic Result:</span>
                    <span className="text-xs font-extrabold text-brand-accentYellow">{verdict.label} ({scorePercent}%)</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-0.5 max-w-xl">
                    {verdict.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-accentYellow hover:bg-yellow-400 text-brand-dark font-extrabold text-xs sm:text-sm shadow-soft hover:shadow-soft-lg transition-all group flex-shrink-0"
              >
                <span>Discuss My Shield Score on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
