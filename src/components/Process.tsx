import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquareCheck,
  UserCheck,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  Check,
  Sparkles,
  Clock,
  Compass
} from 'lucide-react';
import { PROCESS_STEPS, SITE_CONFIG } from '../data/siteConfig';

interface StepDetail {
  step: string;
  phaseLabel: string;
  progressPercent: number;
  highlightText: string;
  description: string;
  deliverables: string[];
  durationEstimate: string;
}

const STEP_DETAILS: StepDetail[] = [
  {
    step: "01",
    phaseLabel: "Initial Discovery",
    progressPercent: 25,
    highlightText: "Zero-Pressure Consultation",
    description: "Send your basic requirement, family ages, or existing policy PDF on WhatsApp or phone. No long forms or automated bot delays.",
    deliverables: ["Direct advisor response", "No automated call center bot", "Confidential requirement intake"],
    durationEstimate: "5 - 10 mins"
  },
  {
    step: "02",
    phaseLabel: "Risk & Need Profiling",
    progressPercent: 50,
    highlightText: "Uncovering Blindspots",
    description: "We evaluate your true coverage need against medical inflation, hospital room-rent realities, waiting periods, and income protection.",
    deliverables: ["Room-rent limit audit", "Pre-existing condition analysis", "Adequate sum-insured formula"],
    durationEstimate: "Same Day"
  },
  {
    step: "03",
    phaseLabel: "Unbiased Comparison",
    progressPercent: 75,
    highlightText: "Transparent Matrix",
    description: "We compare top IRDAI-registered insurers side-by-side, decoding fine-print exclusions, co-pays, and claim settlement track records.",
    deliverables: ["Side-by-side comparison sheet", "Clarity on hidden exclusions", "Zero sales quota bias"],
    durationEstimate: "24 Hours"
  },
  {
    step: "04",
    phaseLabel: "Issuance & Lifetime Support",
    progressPercent: 100,
    highlightText: "Protection Active",
    description: "Hassle-free policy issuance with direct insurer documentation, plus dedicated 24/7 personal claims guidance whenever emergencies strike.",
    deliverables: ["Immediate policy soft copy", "Digital emergency card", "Lifetime claims escalation assistance"],
    durationEstimate: "Instant On Approval"
  }
];

export const Process: React.FC = () => {
  const iconList = [MessageSquareCheck, UserCheck, FileSpreadsheet, CheckCircle2];

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-brand-accentGreenLight/30 via-white to-brand-accentGreenLight/40 border-y border-brand-borderSubtle relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-accentYellow/25 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-3 text-xs font-semibold uppercase tracking-wider shadow-soft-sm"
          >
            <Compass className="w-3.5 h-3.5 text-brand-forest animate-spin-slow" />
            <span>How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-3"
          >
            A Transparent, Step-by-Step Advisory Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-base text-brand-muted leading-relaxed font-normal max-w-2xl mx-auto"
          >
            No hurried sales, no automated call center confusion. Scroll through our 4-stage journey engineered to safeguard your family and business methodically.
          </motion.p>
        </div>

        {/* ========================================================
            MOBILE VIEW: Interactive Vertical Journey Scroll Spine
            ======================================================== */}
        <div className="block md:hidden relative pl-6">
          {/* Continuous Glowing Journey Spine Line */}
          <div className="absolute top-4 bottom-8 left-[17px] w-1 bg-gradient-to-b from-brand-forest via-emerald-500 to-amber-400 rounded-full shadow-sm" />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = iconList[idx] || CheckCircle2;
              const detail = STEP_DETAILS[idx] || STEP_DETAILS[0];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Glowing Milestone Node on the Spine */}
                  <div className="absolute -left-[30px] top-4 z-20">
                    <div className="relative flex items-center justify-center">
                      {/* Outer Pulse Ring */}
                      <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-emerald-400 opacity-60" />
                      
                      {/* Node Circle */}
                      <div className="relative w-7 h-7 rounded-full bg-brand-forest text-brand-accentYellow flex items-center justify-center font-extrabold text-[11px] shadow-soft border-2 border-white">
                        {step.step}
                      </div>
                    </div>
                  </div>

                  {/* Journey Step Card */}
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-brand-borderSubtle hover:border-brand-forest/40 shadow-soft-sm hover:shadow-soft transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Top Status Banner */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        Phase {step.step} • {detail.phaseLabel}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-brand-muted bg-gray-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-muted" />
                        {detail.durationEstimate}
                      </span>
                    </div>

                    {/* Step Title & Icon */}
                    <div className="flex items-start gap-3 my-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accentGreen to-brand-accentGreenLight text-brand-forest flex items-center justify-center flex-shrink-0 shadow-soft-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-brand-dark leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-brand-forest font-semibold mt-0.5">
                          {detail.highlightText}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-brand-muted leading-relaxed mt-2 font-normal">
                      {detail.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-3 pt-2.5 border-t border-brand-borderSubtle/60 space-y-1.5">
                      {detail.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[11px] text-brand-dark/80">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Progress Bar */}
                    <div className="mt-3 pt-2 flex items-center gap-2">
                      <div className="flex-grow h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${detail.progressPercent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-brand-forest to-emerald-500 rounded-full"
                        />
                      </div>
                      <span className="text-[10px] font-mono font-extrabold text-brand-forest flex-shrink-0">
                        {detail.progressPercent}%
                      </span>
                    </div>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            DESKTOP / TABLET VIEW: Connected 4-Column Timeline
            ======================================================== */}
        <div className="hidden md:block relative">
          {/* Connecting gradient road across all 4 stages */}
          <div className="absolute top-1/4 left-10 right-10 h-1 bg-gradient-to-r from-brand-forest via-emerald-500 to-amber-400 -translate-y-2 z-0 rounded-full shadow-sm" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = iconList[idx] || CheckCircle2;
              const detail = STEP_DETAILS[idx] || STEP_DETAILS[0];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 border border-brand-borderSubtle hover:border-brand-forest/40 shadow-soft-sm hover:shadow-soft-xl transition-all duration-300 flex flex-col justify-between group cursor-default"
                >
                  <div>
                    {/* Top Milestone Badge + Floating Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-accentYellow font-black text-sm flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
                        {step.step}
                      </div>

                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accentGreen to-brand-accentGreenLight text-brand-forest flex items-center justify-center group-hover:bg-brand-forest group-hover:text-brand-accentYellow transition-colors duration-300 shadow-soft-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
                      Phase {step.step} • {detail.phaseLabel}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2 leading-snug group-hover:text-brand-forest transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-brand-muted leading-relaxed font-normal mb-4">
                      {detail.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-1.5 pt-3 border-t border-brand-borderSubtle/60">
                      {detail.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-brand-dark/80">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Milestone Progress */}
                  <div className="mt-6 pt-3 border-t border-brand-borderSubtle flex items-center justify-between">
                    <span className="text-[11px] font-medium text-brand-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-forest" />
                      {detail.durationEstimate}
                    </span>
                    <span className="text-xs font-mono font-bold text-brand-forest">
                      {detail.progressPercent}% Completed
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section Bottom Interactive CTA Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <a
            href={`https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${encodeURIComponent(
              'Hello Kashyap ji, I would like to begin Step 1 of the insurance advisory journey for my portfolio.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-brand-forest hover:bg-brand-forestHover text-white font-extrabold text-xs sm:text-sm shadow-soft hover:shadow-soft-lg transition-all group"
          >
            <Sparkles className="w-4 h-4 text-brand-accentYellow animate-pulse" />
            <span>Begin Step 1: Share Your Requirement on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-brand-accentYellow group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
