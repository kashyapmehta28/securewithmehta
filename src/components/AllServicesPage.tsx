import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Search, 
  X, 
  ArrowUpRight, 
  Check, 
  Sparkles, 
  Phone, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { SERVICES_DATA, SITE_CONFIG } from '../data/siteConfig';
import { DynamicIcon } from './DynamicIcon';
import { Footer } from './Footer';

interface AllServicesPageProps {
  onBack: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const AllServicesPage: React.FC<AllServicesPageProps> = ({ onBack, onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = [
    { id: 'all', label: 'All Services', count: SERVICES_DATA.length },
    { id: 'personal', label: 'Health, Life & Personal', count: SERVICES_DATA.filter(s => s.category === 'personal').length },
    { id: 'motor', label: 'Motor & Fleet', count: SERVICES_DATA.filter(s => s.category === 'motor').length },
    { id: 'commercial', label: 'Commercial & Property', count: SERVICES_DATA.filter(s => s.category === 'commercial').length },
    { id: 'engineering', label: 'Marine, Transit & Eng.', count: SERVICES_DATA.filter(s => s.category === 'engineering').length },
    { id: 'liability', label: 'Liability & Indemnity', count: SERVICES_DATA.filter(s => s.category === 'liability').length },
    { id: 'specialty', label: 'Specialty Lines', count: SERVICES_DATA.filter(s => s.category === 'specialty').length },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery =
        service.title.toLowerCase().includes(query) ||
        service.shortDesc.toLowerCase().includes(query) ||
        service.highlights.some(h => h.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-brand-dark selection:bg-brand-accentGreen selection:text-brand-forest">
      {/* Top Sticky Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-borderSubtle py-3.5 shadow-soft-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Back to Home Overview Button */}
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-brand-accentGreenLight hover:bg-brand-forest hover:text-white text-brand-forest font-bold text-xs sm:text-sm border border-brand-accentGreenBorder hover:border-transparent transition-all duration-200 group shadow-soft-sm"
              title="Return to Main Website"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
            </button>

            {/* Center: Brand Logo (Clickable to return Home) */}
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-forest text-white shadow-soft group-hover:scale-105 transition-all overflow-hidden border border-brand-accentGreenBorder/60">
                <img
                  src="/favicon.svg"
                  alt={`${SITE_CONFIG.brand.fullName} Logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left hidden sm:block">
                <div className="font-bold text-xs sm:text-sm text-brand-dark group-hover:text-brand-forest transition-colors leading-none">
                  {SITE_CONFIG.brand.fullName}
                </div>
                <div className="text-[10px] text-brand-muted font-medium mt-0.5">
                  Complete Policy Catalog
                </div>
              </div>
            </button>

            {/* Right: Direct Phone Consultation */}
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.contacts.numbers[0].tel}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-forest hover:bg-brand-accentGreenLight transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-forest" />
                <span>{SITE_CONFIG.contacts.numbers[0].display}</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.contacts.defaultWhatsAppNumber}?text=${encodeURIComponent('Hello Kashyap ji, I am exploring your insurance services on your website and would like consultation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-soft-sm"
              >
                <span>WhatsApp Advice</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-brand-muted mb-6">
          <button 
            type="button" 
            onClick={onBack}
            className="hover:text-brand-forest font-medium transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-brand-dark font-semibold">All 38+ Insurance Services</span>
        </div>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Insurance Directory • {SERVICES_DATA.length} Available Lines</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            All Insurance Solutions & Specialized Coverage
          </h1>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            Independent advisory across Life, Commercial, Engineering, Transit, Marine, and Liability insurance. 
            Evaluated objectively across 28+ leading insurers in India to ensure comprehensive protection.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-brand-muted" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all 38 insurance lines (e.g. Doctor, Marine, Workmen, Fire, Cyber, Car, Boiler)..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white text-sm text-brand-dark placeholder:text-brand-muted border border-brand-borderSubtle focus:outline-none focus:ring-2 focus:ring-brand-forest transition-all shadow-soft-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-brand-muted hover:text-brand-dark"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-forest text-white shadow-soft scale-[1.02]'
                    : 'bg-white text-brand-dark/80 hover:bg-brand-accentGreenLight hover:text-brand-forest border border-brand-borderSubtle'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-brand-accentGreen text-brand-forest'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-brand-borderSubtle text-xs text-brand-muted">
          <div>
            Showing <span className="font-bold text-brand-dark">{filteredServices.length}</span> of {SERVICES_DATA.length} policies
            {selectedCategory !== 'all' && (
              <span> in <span className="font-semibold text-brand-forest">{categories.find(c => c.id === selectedCategory)?.label}</span></span>
            )}
            {searchQuery && (
              <span> matching "<span className="font-semibold text-brand-dark">{searchQuery}</span>"</span>
            )}
          </div>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-brand-forest hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Complete Policy Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-brand-borderSubtle shadow-soft-sm max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-brand-muted mx-auto mb-3" />
            <h3 className="text-lg font-bold text-brand-dark mb-1">No matching insurance lines found</h3>
            <p className="text-xs text-brand-muted mb-4">
              Try searching for a different keyword or reset your category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-brand-forest text-white text-xs font-semibold"
            >
              View All 38 Policies
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.3) }}
                className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 border border-brand-borderSubtle hover:border-brand-accentGreenBorder shadow-soft-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  {/* Card Top: Icon & Category Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-accentGreen text-brand-forest flex items-center justify-center group-hover:bg-brand-forest group-hover:text-brand-accentYellow transition-colors duration-200">
                      <DynamicIcon name={service.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-accentGreenLight text-brand-forest border border-brand-accentGreenBorder/60">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-forest transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-brand-borderSubtle">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-brand-dark/80 font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Inquire */}
                <div className="pt-3 border-t border-brand-borderSubtle/60 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-accentGreenLight hover:bg-brand-forest text-brand-forest hover:text-white font-bold text-xs tracking-wide border border-brand-accentGreenBorder hover:border-transparent transition-all group/btn shadow-soft-sm"
                  >
                    <span>Request Advice for {service.title.split(' ')[0]}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom Navigation CTA Banner */}
        <div className="bg-gradient-to-br from-brand-forest to-brand-forestHover text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-soft-lg mb-12">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Need a Custom or Unlisted Policy?
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-normal">
              With 39 years of multi-generational experience across Indian Life & General Insurance markets, 
              Kashyap Mehta assists clients in structuring tailored risk coverage for unusual exposures.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-forest font-bold text-xs sm:text-sm hover:bg-brand-accentGreen hover:text-brand-forest transition-colors shadow-soft"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Main Website</span>
              </button>
              <button
                type="button"
                onClick={() => onSelectService('Custom Risk Consultation')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accentYellow text-brand-forest font-bold text-xs sm:text-sm hover:brightness-105 transition-all shadow-soft"
              >
                <span>Book Direct Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
};
