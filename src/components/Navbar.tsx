import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface NavbarProps {
  onSelectService?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Policy Review', href: '#policy-review' },
    { name: 'Awards', href: '#awards' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-brand-borderSubtle py-2 sm:py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-brand-borderSubtle/60 py-2.5 sm:py-3.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest rounded-xl p-1 flex-shrink-0"
          >
            {/* Logo Image (Bigger Size: 56px - 64px) */}
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-forest text-white shadow-soft group-hover:scale-105 group-hover:shadow-soft-lg transition-all duration-200 border-2 border-brand-accentGreenBorder/60 flex-shrink-0 overflow-hidden">
              {!logoError ? (
                <img
                  src="/favicon.svg"
                  alt={`${SITE_CONFIG.brand.fullName} Logo`}
                  className="w-full h-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-black text-xl sm:text-2xl tracking-wider text-brand-accentYellow">
                  {SITE_CONFIG.brand.temporaryWordmark}
                </span>
              )}
            </div>

            {/* Brand Name (Small Size) */}
            <span className="font-bold text-xs sm:text-sm md:text-base text-brand-dark tracking-tight leading-tight group-hover:text-brand-forest transition-colors">
              {SITE_CONFIG.brand.fullName}
            </span>
          </a>

          {/* Desktop Navigation Links - Fixed Single Line (whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-bold text-brand-dark/80 hover:text-brand-forest whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest group"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                  {link.name}
                </span>
                {/* Animated underline that expands smoothly on hover */}
                <span className="absolute bottom-0.5 left-2.5 right-2.5 h-0.5 bg-brand-forest rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Phone quick call direct link */}
            <a
              href={SITE_CONFIG.contacts.numbers[0].tel}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-brand-borderSubtle hover:border-brand-accentGreenBorder hover:bg-white text-brand-dark hover:text-brand-forest text-xs font-semibold shadow-soft-sm hover:shadow-soft hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest group"
              aria-label={`Call ${SITE_CONFIG.contacts.numbers[0].display}`}
              title={`Call ${SITE_CONFIG.contacts.numbers[0].display}`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-forest group-hover:scale-110 transition-transform" />
              <span>Call Us: {SITE_CONFIG.contacts.numbers[0].display}</span>
            </a>

            {/* Main CTA */}
            <a
              href="#inquiry-form"
              onClick={(e) => scrollToSection(e, '#inquiry-form')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-forest hover:bg-brand-forestHover text-white text-xs sm:text-sm font-semibold shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-forest group"
            >
              <span>Get Assistance</span>
              <ArrowRight className="w-4 h-4 text-brand-accentYellow group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#inquiry-form"
              onClick={(e) => scrollToSection(e, '#inquiry-form')}
              className="px-3 py-1.5 rounded-lg bg-brand-forest text-white text-xs font-semibold"
            >
              Assistance
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-dark hover:bg-brand-accentGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-borderSubtle shadow-soft-lg px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-brand-dark hover:bg-brand-accentGreenLight hover:text-brand-forest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Direct phone contacts in mobile drawer */}
          <div className="pt-3 border-t border-brand-borderSubtle space-y-2">
            <div className="text-[11px] font-bold text-brand-muted uppercase tracking-wider px-3">
              Direct Contact
            </div>
            <a
              href={SITE_CONFIG.contacts.numbers[0].tel}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-brand-accentGreenLight hover:bg-brand-accentGreen text-brand-dark text-xs font-semibold transition-colors"
            >
              <div>
                <span className="font-bold text-brand-forest">{SITE_CONFIG.contacts.numbers[0].display}</span>
                <span className="text-[11px] text-brand-muted ml-2">({SITE_CONFIG.contacts.numbers[0].label})</span>
              </div>
              <Phone className="w-3.5 h-3.5 text-brand-forest" />
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${encodeURIComponent(
                'Hello Kashyap ji, I would like to consult with you regarding insurance guidance.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 mt-3 py-2.5 rounded-xl bg-brand-forest text-white text-sm font-semibold"
            >
              <Shield className="w-4 h-4 text-brand-accentYellow" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
