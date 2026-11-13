import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Shield,
  ChevronDown,
  HeartPulse,
  ShieldCheck,
  Car,
  AlertCircle,
  PawPrint,
  Plane,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

interface NavbarProps {
  onSelectService?: (serviceId: string) => void;
}

interface NavServiceItem {
  name: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
  serviceQuery: string;
}

const FEATURED_NAV_SERVICES: NavServiceItem[] = [
  {
    name: 'Health Insurance',
    subtext: 'Family Floater, Critical Illness & Senior Care',
    icon: HeartPulse,
    serviceQuery: 'Health Insurance'
  },
  {
    name: 'Life Insurance',
    subtext: 'Pure Term Protection & Guaranteed Legacy',
    icon: ShieldCheck,
    serviceQuery: 'Life Insurance'
  },
  {
    name: 'Motor (Car) Insurance',
    subtext: 'Zero-dep, Engine Protect & Commercial Fleet',
    icon: Car,
    serviceQuery: 'Car & Two-Wheeler Insurance'
  },
  {
    name: 'Personal Accident Insurance',
    subtext: 'Accidental Disability & Income Replacement',
    icon: AlertCircle,
    serviceQuery: 'Personal Accident Cover'
  },
  {
    name: 'Pet Insurance',
    subtext: 'Veterinary Hospitalization & Surgery Cover',
    icon: PawPrint,
    serviceQuery: 'Pet Insurance (Dog & Cat)'
  },
  {
    name: 'Travel Insurance',
    subtext: 'Overseas Medical & Trip Cancellation Shield',
    icon: Plane,
    serviceQuery: 'Travel Insurance'
  }
];

export const Navbar: React.FC<NavbarProps> = ({ onSelectService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDesktopServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock background scroll when mobile drawer is open and support Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsDesktopServicesOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services', isDropdown: true },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsDesktopServicesOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (serviceQuery: string) => {
    setIsDesktopServicesOpen(false);
    setIsMobileMenuOpen(false);
    if (onSelectService) {
      onSelectService(serviceQuery);
    } else {
      const target = document.querySelector('#inquiry-form');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white shadow-soft border-b border-brand-borderSubtle py-1.5 sm:py-2'
          : 'bg-white border-b border-brand-borderSubtle/60 py-3 sm:py-4 md:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest rounded-xl p-1 flex-shrink-0"
          >
            {/* Logo Image with Dynamic Size: Big on Home / Top, Compact when Scrolled */}
            <div
              className={`flex items-center justify-center rounded-xl sm:rounded-2xl bg-white shadow-soft group-hover:scale-105 group-hover:shadow-soft-lg transition-all duration-300 ease-in-out border border-brand-borderSubtle flex-shrink-0 p-1 sm:p-1.5 ${
                isScrolled
                  ? 'w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12'
                  : 'w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 shadow-soft-md'
              }`}
            >
              {!logoError ? (
                <img
                  src="/images/logo.png"
                  alt={`${SITE_CONFIG.brand.fullName} Logo`}
                  className="w-full h-full object-contain transition-transform duration-300"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-black text-base xs:text-lg sm:text-2xl tracking-wider text-brand-accentYellow">
                  {SITE_CONFIG.brand.temporaryWordmark}
                </span>
              )}
            </div>

            {/* Brand Name Text: Scales with Logo */}
            <div className="flex flex-col justify-center transition-all duration-300">
              <span
                className={`font-extrabold text-brand-dark tracking-tight leading-tight group-hover:text-brand-forest transition-all duration-300 max-w-[130px] xs:max-w-[190px] sm:max-w-none truncate ${
                  isScrolled
                    ? 'text-xs xs:text-sm sm:text-sm md:text-base'
                    : 'text-sm xs:text-base sm:text-lg md:text-xl'
                }`}
              >
                {SITE_CONFIG.brand.fullName}
              </span>
              {!isScrolled && (
                <span className="hidden sm:block text-[11px] md:text-xs text-brand-muted font-medium transition-all duration-300 mt-0.5">
                  Life & General Insurance Consultancy
                </span>
              )}
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={desktopDropdownRef}
                    className="relative"
                    onMouseEnter={() => setIsDesktopServicesOpen(true)}
                    onMouseLeave={() => setIsDesktopServicesOpen(false)}
                  >
                    <div className="flex items-center">
                      {/* Services Text Link */}
                      <a
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="relative pl-2.5 xl:pl-3 pr-1 py-2 text-xs xl:text-sm font-bold text-brand-dark/80 hover:text-brand-forest whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest group"
                      >
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                          {link.name}
                        </span>
                        <span className="absolute bottom-0.5 left-2.5 right-1 h-0.5 bg-brand-forest rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                      </a>

                      {/* Small Right Arrow Trigger Button */}
                      <button
                        type="button"
                        onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                        aria-expanded={isDesktopServicesOpen}
                        aria-label="Toggle services menu"
                        className="p-1 rounded-md text-brand-dark/70 hover:text-brand-forest hover:bg-brand-accentGreenLight transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDesktopServicesOpen ? 'rotate-180 text-brand-forest' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Desktop Floating Dropdown Menu (6 Services) - Solid 100% Opaque Background */}
                    {isDesktopServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-84 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(17,53,37,0.22)] border-2 border-brand-accentGreenBorder py-3 px-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {/* Header Badge */}
                        <div className="px-3.5 py-2 mb-2 flex items-center justify-between bg-brand-accentGreen rounded-xl border border-brand-accentGreenBorder">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-forest flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                            Popular Insurance Lines
                          </span>
                          <span className="text-[10px] font-bold text-brand-forest bg-white px-2 py-0.5 rounded-full border border-brand-accentGreenBorder shadow-2xs">
                            6 Core Lines
                          </span>
                        </div>

                        {/* 6 Service Items */}
                        <div className="space-y-1">
                          {FEATURED_NAV_SERVICES.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <button
                                key={service.name}
                                type="button"
                                onClick={() => handleServiceSelect(service.serviceQuery)}
                                className="w-full text-left px-3 py-2 rounded-xl bg-white hover:bg-brand-accentGreenLight group/item transition-all duration-150 flex items-center justify-between border border-transparent hover:border-brand-accentGreenBorder"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div className="w-8 h-8 rounded-lg bg-brand-accentGreen text-brand-forest flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-forest group-hover/item:text-brand-accentYellow transition-colors shadow-2xs">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-xs font-bold text-brand-dark group-hover/item:text-brand-forest transition-colors truncate">
                                      {service.name}
                                    </div>
                                    <div className="text-[10px] text-brand-muted truncate">
                                      {service.subtext}
                                    </div>
                                  </div>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-brand-forest opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
                              </button>
                            );
                          })}
                        </div>

                        {/* Dropdown Footer Link */}
                        <div className="mt-2.5 pt-2 border-t border-brand-borderSubtle px-3 pb-0.5">
                          <a
                            href="#services"
                            onClick={(e) => scrollToSection(e, '#services')}
                            className="text-[11px] font-extrabold text-brand-forest hover:text-brand-forestHover flex items-center justify-between group/link py-1"
                          >
                            <span>Explore all 38+ specialized lines</span>
                            <ArrowRight className="w-3 h-3 text-brand-forest group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-bold text-brand-dark/80 hover:text-brand-forest whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest group"
                >
                  <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0.5 left-2.5 right-2.5 h-0.5 bg-brand-forest rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons (Shown on lg: 1024px+) */}
          <div className="hidden lg:flex items-center gap-2.5">
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

          {/* Tablet & Mobile Header Actions (< 1024px) */}
          <div className="flex items-center gap-1.5 xs:gap-2 lg:hidden">
            {/* Tablet-friendly Quick Call */}
            <a
              href={SITE_CONFIG.contacts.numbers[0].tel}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-borderSubtle hover:border-brand-accentGreenBorder text-brand-forest text-xs font-semibold bg-white shadow-soft-sm active:scale-95 transition-transform"
              aria-label="Direct Call"
            >
              <Phone className="w-3.5 h-3.5 text-brand-forest" />
              <span>Call</span>
            </a>

            {/* Assistance Button */}
            <a
              href="#inquiry-form"
              onClick={(e) => scrollToSection(e, '#inquiry-form')}
              className="px-2.5 xs:px-3 sm:px-3.5 py-1.5 rounded-lg bg-brand-forest text-white text-xs font-semibold hover:bg-brand-forestHover active:scale-95 transition-all shadow-soft-sm min-h-[36px] flex items-center"
            >
              Assistance
            </a>

            {/* Mobile/Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-brand-dark hover:bg-brand-accentGreen active:bg-brand-accentGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {isMobileMenuOpen && (
        <>
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200 ${
              isScrolled ? 'top-[52px] sm:top-[60px]' : 'top-[68px] sm:top-[88px] md:top-[98px]'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative z-50 lg:hidden bg-white border-b border-brand-borderSubtle shadow-soft-lg px-4 pt-3 pb-8 max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-4 duration-200">
            {/* Drawer Brand Header with Logo */}
            <div className="flex items-center gap-3 px-2 py-2 mb-3 pb-3 border-b border-brand-borderSubtle/60">
              <div className="w-10 h-10 rounded-xl bg-white p-1 border border-brand-borderSubtle shadow-soft-sm flex-shrink-0 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Secure With Mehta"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs text-brand-dark truncate leading-tight">
                  {SITE_CONFIG.brand.fullName}
                </div>
                <div className="text-[10px] text-brand-muted font-medium mt-0.5">
                  {SITE_CONFIG.brand.founder} • Mumbai
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      {/* Services Row with Right Arrow Button */}
                      <div className="flex items-center justify-between rounded-xl hover:bg-brand-accentGreenLight">
                        <a
                          href={link.href}
                          onClick={(e) => scrollToSection(e, link.href)}
                          className="flex-grow px-3.5 py-3 text-sm font-bold text-brand-dark hover:text-brand-forest transition-colors"
                        >
                          {link.name}
                        </a>
                        <button
                          type="button"
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          aria-label="Toggle mobile services"
                          className="p-3 text-brand-dark hover:text-brand-forest"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isMobileServicesOpen ? 'rotate-180 text-brand-forest' : 'text-brand-muted'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Expandable 6 Services Submenu on Mobile - Solid 100% Opaque */}
                      {isMobileServicesOpen && (
                        <div className="p-2 space-y-1.5 bg-[#F3F9F5] rounded-xl my-1.5 border-2 border-brand-accentGreenBorder shadow-soft-sm">
                          <div className="px-2 py-1 text-[11px] font-extrabold text-brand-forest uppercase tracking-wider flex items-center justify-between">
                            <span>6 Core Services</span>
                            <span className="text-[10px] text-brand-muted font-normal">Tap to consult</span>
                          </div>
                          {FEATURED_NAV_SERVICES.map((s) => {
                            const IconComponent = s.icon;
                            return (
                              <button
                                key={s.name}
                                type="button"
                                onClick={() => handleServiceSelect(s.serviceQuery)}
                                className="w-full text-left px-3 py-2.5 rounded-lg bg-white hover:bg-brand-accentGreen text-xs font-bold text-brand-dark hover:text-brand-forest flex items-center justify-between transition-all border border-brand-borderSubtle hover:border-brand-accentGreenBorder shadow-2xs"
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-brand-accentGreen text-brand-forest flex items-center justify-center flex-shrink-0">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <span className="text-xs font-bold">{s.name}</span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-brand-muted" />
                              </button>
                            );
                          })}
                          <div className="pt-2 px-2 border-t border-brand-accentGreenBorder">
                            <a
                              href="#services"
                              onClick={(e) => scrollToSection(e, '#services')}
                              className="text-[11px] font-extrabold text-brand-forest flex items-center justify-between py-1"
                            >
                              <span>View All 38+ Services</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="px-3.5 py-3 rounded-xl text-sm font-bold text-brand-dark hover:bg-brand-accentGreenLight hover:text-brand-forest active:bg-brand-accentGreen transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-muted opacity-50" />
                  </a>
                );
              })}
            </div>

            {/* Direct phone contacts in mobile drawer */}
            <div className="pt-3 border-t border-brand-borderSubtle space-y-2">
              <div className="text-[11px] font-bold text-brand-muted uppercase tracking-wider px-3">
                Direct Contact
              </div>
              <a
                href={SITE_CONFIG.contacts.numbers[0].tel}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl bg-brand-accentGreenLight hover:bg-brand-accentGreen text-brand-dark text-xs font-semibold transition-colors"
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
                className="w-full flex items-center justify-center gap-2 mt-3 py-3 rounded-xl bg-brand-forest active:bg-brand-forestHover text-white text-sm font-semibold shadow-soft"
              >
                <Shield className="w-4 h-4 text-brand-accentYellow" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
