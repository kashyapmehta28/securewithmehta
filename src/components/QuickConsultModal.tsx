import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

const POPULAR_POLICIES = [
  'Health Insurance (Family / Individual)',
  'Senior Citizen Health Insurance',
  'Pure Term Life Insurance',
  'Existing Policy Review & Gap Audit',
  'Motor & Commercial Vehicle Insurance',
  'Commercial Fire & Property Insurance',
  'Marine Cargo & Transit Insurance',
  'Cyber Crime & Corporate Liability',
  'Specialty (Pet, Gadget, Travel)',
  'Other / General Insurance Advisory'
];

export const QuickConsultModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [policy, setPolicy] = useState('Health Insurance (Family / Individual)');
  const [error, setError] = useState('');

  useEffect(() => {
    // Show only once: check localStorage & sessionStorage
    const hasSeen =
      localStorage.getItem('swm_quick_consult_popup_shown') ||
      sessionStorage.getItem('swm_quick_consult_popup_shown');

    if (hasSeen) return;

    // Trigger exactly after 5 seconds
    const timer = window.setTimeout(() => {
      setIsOpen(true);
      localStorage.setItem('swm_quick_consult_popup_shown', 'true');
      sessionStorage.setItem('swm_quick_consult_popup_shown', 'true');
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setError('');

    // Format WhatsApp message
    const message = `Hello Kashyap ji, My name is ${name.trim()} (Phone: ${cleanPhone}). I would like to consult regarding ${policy}. Please guide me with unbiased options.`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Close modal
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dimmed Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-brand-borderSubtle overflow-hidden z-10 my-auto"
          >
            {/* Top Accent Gradient Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-brand-forest via-emerald-500 to-brand-accentYellowDark" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-brand-dark flex items-center justify-center transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder text-[11px] font-bold uppercase tracking-wider mb-2.5 shadow-soft-sm">
                  <Sparkles className="w-3.5 h-3.5 text-brand-forest animate-pulse" />
                  <span>Direct Advisor Consultation</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark tracking-tight">
                  Need Help Choosing or Reviewing Insurance?
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted mt-1.5 max-w-sm mx-auto leading-relaxed">
                  Share your basic detail below to speak directly with <strong className="text-brand-dark">Kashyap Mehta</strong> on WhatsApp with zero sales pressure.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Banner */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-semibold text-center"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="quick-name" className="block text-xs font-bold text-brand-dark mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-muted">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="quick-name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-borderSubtle bg-gray-50/60 focus:bg-white focus:border-brand-forest focus:ring-2 focus:ring-brand-accentGreen text-sm text-brand-dark placeholder-gray-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Mobile Number Field */}
                <div>
                  <label htmlFor="quick-phone" className="block text-xs font-bold text-brand-dark mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-muted">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="absolute inset-y-0 left-9 flex items-center text-xs font-bold text-gray-500 pointer-events-none border-r border-gray-200 pr-2 my-2">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="quick-phone"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, ''));
                        if (error) setError('');
                      }}
                      placeholder="98925 XXXXX"
                      className="w-full pl-20 pr-4 py-3 rounded-xl border border-brand-borderSubtle bg-gray-50/60 focus:bg-white focus:border-brand-forest focus:ring-2 focus:ring-brand-accentGreen text-sm text-brand-dark placeholder-gray-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Policy Dropdown */}
                <div>
                  <label htmlFor="quick-policy" className="block text-xs font-bold text-brand-dark mb-1.5">
                    Which Policy Do You Want to Consult?
                  </label>
                  <div className="relative">
                    <select
                      id="quick-policy"
                      value={policy}
                      onChange={(e) => setPolicy(e.target.value)}
                      className="w-full pl-3.5 pr-10 py-3 rounded-xl border border-brand-borderSubtle bg-gray-50/60 focus:bg-white focus:border-brand-forest focus:ring-2 focus:ring-brand-accentGreen text-xs sm:text-sm text-brand-dark outline-none transition-all appearance-none cursor-pointer"
                    >
                      {POPULAR_POLICIES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-brand-muted">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Send to WhatsApp CTA Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm sm:text-base shadow-soft hover:shadow-soft-lg transition-all cursor-pointer"
                  >
                    {/* Official WhatsApp Icon SVG */}
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.585-.492-.506-.677-.515-.175-.01-.376-.01-.576-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9-.12.571-.351 1.78-1.78 2.03-2.433.25-.652.25-1.21.175-1.325-.075-.115-.276-.19-.576-.341z" />
                      <path d="M12.004 0C5.385 0 0 5.385 0 12.004c0 2.112.551 4.167 1.597 5.981L0 24l6.19-1.624c1.748.952 3.731 1.458 5.814 1.458 6.619 0 12.004-5.385 12.004-12.004C24.008 5.385 18.623 0 12.004 0zm0 21.942c-1.87 0-3.693-.502-5.28-1.45l-.379-.225-3.676.964.981-3.584-.247-.393c-1.042-1.657-1.594-3.59-1.594-5.58 0-5.485 4.457-9.942 9.942-9.942 5.485 0 9.942 4.457 9.942 9.942 0 5.485-4.457 9.942-9.942 9.942z" />
                    </svg>
                    <span>Send to WhatsApp</span>
                  </motion.button>
                </div>

                {/* Trust Footer */}
                <div className="pt-2 text-center">
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-brand-muted font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Confidential • Zero Spam • No Call-Center Agents</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
