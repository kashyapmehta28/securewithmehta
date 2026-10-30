import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Shield, MessageSquare } from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '../data/siteConfig';

interface InquiryFormProps {
  preselectedService?: string;
  onClearPreselection?: () => void;
}

interface FormState {
  fullName: string;
  mobile: string;
  email: string;
  insuranceType: string;
  requirement: string;
  city: string;
}

interface FormErrors {
  fullName?: string;
  mobile?: string;
  email?: string;
  insuranceType?: string;
  requirement?: string;
  city?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  preselectedService,
  onClearPreselection,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    mobile: '',
    email: '',
    insuranceType: '',
    requirement: '',
    city: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preselected service from parent (e.g. when user clicks on a service card)
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        insuranceType: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (cleanMobile.length < 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email format.';
      }
    }

    if (!formData.insuranceType) {
      newErrors.insuranceType = 'Please select an insurance category.';
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please describe your coverage requirement or query.';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city/location.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build neatly formatted WhatsApp message
    const formattedMessage = [
      `*NEW INSURANCE INQUIRY — SECURE WITH MEHTA*`,
      `--------------------------------------`,
      `👤 *Name:* ${formData.fullName.trim()}`,
      `📱 *Mobile:* ${formData.mobile.trim()}`,
      `📧 *Email:* ${formData.email.trim() ? formData.email.trim() : 'Not specified'}`,
      `🛡️ *Insurance Category:* ${formData.insuranceType}`,
      `📍 *City / Location:* ${formData.city.trim()}`,
      `📝 *Specific Requirement:* ${formData.requirement.trim()}`,
      `--------------------------------------`,
      `_Sent via Secure With Mehta Insurance Inquiry Portal_`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      insuranceType: '',
      requirement: '',
      city: '',
    });
    setErrors({});
    setIsSubmitted(false);
    if (onClearPreselection) {
      onClearPreselection();
    }
  };

  return (
    <div id="inquiry-form" className="bg-white rounded-3xl p-6 sm:p-9 shadow-soft-lg border border-brand-borderSubtle">
      
      {/* Header */}
      <div className="mb-8 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accentGreen text-brand-forest text-xs font-bold uppercase tracking-wider mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct WhatsApp Inquiry</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
          Request Insurance Consultation
        </h3>
        
        <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
          Fill in your details below. Clicking 'Send via WhatsApp' will launch WhatsApp with your pre-filled inquiry. You can review and edit before sending.
        </p>

        {/* Selected Service Badge */}
        {formData.insuranceType && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-accentYellow/60 text-brand-dark text-xs font-semibold border border-amber-200">
            <span>Category: <strong>{formData.insuranceType}</strong></span>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, insuranceType: '' })}
              className="text-brand-dark/70 hover:text-black font-bold ml-1"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {isSubmitted ? (
        <div className="py-8 text-center bg-brand-accentGreenLight/50 rounded-2xl p-6 border border-brand-accentGreenBorder">
          <div className="w-14 h-14 rounded-full bg-brand-forest text-brand-accentYellow flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-brand-dark mb-2">
            WhatsApp Window Launched!
          </h4>
          <p className="text-sm text-brand-muted max-w-md mx-auto mb-6">
            Please press <strong>Send</strong> inside your WhatsApp app to deliver your inquiry directly to Kashyap Mehta at Secure With Mehta.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 rounded-xl bg-brand-forest text-white text-xs font-bold hover:bg-brand-forestHover transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
          
          {/* Row 1: Full Name & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-brand-dark mb-1">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Ramesh Shah"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white text-brand-dark placeholder:text-brand-mutedLight focus:outline-none focus:ring-2 focus:ring-brand-forest transition-all ${
                  errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-brand-borderSubtle'
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="mobile" className="block text-xs font-bold text-brand-dark mb-1">
                Mobile Number (WhatsApp) <span className="text-rose-600">*</span>
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white text-brand-dark placeholder:text-brand-mutedLight focus:outline-none focus:ring-2 focus:ring-brand-forest transition-all ${
                  errors.mobile ? 'border-rose-500 bg-rose-50/20' : 'border-brand-borderSubtle'
                }`}
              />
              {errors.mobile && (
                <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.mobile}</p>
              )}
            </div>
          </div>

          {/* Row 2: Email & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-brand-dark mb-1">
                Email Address <span className="text-brand-muted font-normal">(Optional)</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white text-brand-dark placeholder:text-brand-mutedLight focus:outline-none focus:ring-2 focus:ring-brand-forest transition-all ${
                  errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-brand-borderSubtle'
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block text-xs font-bold text-brand-dark mb-1">
                City / Location <span className="text-rose-600">*</span>
              </label>
              <input
                id="city"
                type="text"
                placeholder="e.g. Mumbai / Thane / Pune"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white text-brand-dark placeholder:text-brand-mutedLight focus:outline-none focus:ring-2 focus:ring-brand-forest transition-all ${
                  errors.city ? 'border-rose-500 bg-rose-50/20' : 'border-brand-borderSubtle'
                }`}
              />
              {errors.city && (
                <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.city}</p>
              )}
            </div>
          </div>

          {/* Row 3: Insurance Type Dropdown */}
          <div>
            <label htmlFor="insuranceType" className="block text-xs font-bold text-brand-dark mb-1">
              Insurance Category of Interest <span className="text-rose-600">*</span>
            </label>
            <select
              id="insuranceType"
              value={formData.insuranceType}
              onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-forest transition-all ${
                errors.insuranceType ? 'border-rose-500 bg-rose-50/20' : 'border-brand-borderSubtle'
              }`}
            >
              <option value="">-- Please Select Insurance Category --</option>
              {SERVICES_DATA.map((srv) => (
                <option key={srv.id} value={srv.title}>
                  {srv.title}
                </option>
              ))}
              <option value="Policy Review & Gap Audit">Existing Policy Review & Gap Audit</option>
              <option value="Claims Guidance & File Support">Claims Guidance & File Support</option>
              <option value="General Insurance Inquiry">Other / Multiple Portfolios</option>
            </select>
            {errors.insuranceType && (
              <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.insuranceType}</p>
            )}
          </div>

          {/* Row 4: Specific Requirement Description */}
          <div>
            <label htmlFor="requirement" className="block text-xs font-bold text-brand-dark mb-1">
              Specific Requirement / Current Coverage Details <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="requirement"
              rows={3}
              placeholder="e.g. Looking for a family health floater of 15-25 lakhs with zero room-rent cap, or need factory fire and machinery breakdown quote."
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl text-sm border bg-white text-brand-dark placeholder:text-brand-mutedLight focus:outline-none focus:ring-2 focus:ring-brand-forest transition-all ${
                errors.requirement ? 'border-rose-500 bg-rose-50/20' : 'border-brand-borderSubtle'
              }`}
            />
            {errors.requirement && (
              <p className="text-[11px] text-rose-600 font-medium mt-1">{errors.requirement}</p>
            )}
          </div>



          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-brand-forest hover:bg-brand-forestHover text-white font-bold text-base shadow-soft hover:shadow-soft-lg flex items-center justify-center gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-forest group"
          >
            <span>Send Inquiry on WhatsApp</span>
            <Send className="w-4 h-4 text-brand-accentYellow group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Transparent Storage Notice */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-brand-muted text-center pt-2">
            <Shield className="w-3.5 h-3.5 text-emerald-700" />
            <span>
              Zero backend storage. Message opens securely in your WhatsApp messenger.
            </span>
          </div>

        </form>
      )}

    </div>
  );
};
