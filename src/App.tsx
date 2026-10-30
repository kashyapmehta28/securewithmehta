import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { TrustStats } from './components/TrustStats';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PolicyReview } from './components/PolicyReview';
import { Awards } from './components/Awards';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { AllServicesPage } from './components/AllServicesPage';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'all-services'>(() => {
    return window.location.hash === '#all-services' ? 'all-services' : 'home';
  });
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Synchronize browser back/forward buttons with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#all-services') {
        setCurrentView('all-services');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openAllServicesPage = () => {
    window.location.hash = 'all-services';
    setCurrentView('all-services');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const backToOverview = (targetSection = 'services') => {
    setCurrentView('home');
    window.location.hash = targetSection;
    setTimeout(() => {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);
  };

  const scrollToInquiry = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = 'inquiry-form';
      setTimeout(() => {
        const formElement = document.getElementById('inquiry-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return;
    }
    const formElement = document.getElementById('inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    if (currentView !== 'home') {
      backToOverview('services');
      return;
    }
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // View: Dedicated All 38 Services Page (on the same website)
  if (currentView === 'all-services') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
        <AllServicesPage
          onBack={() => backToOverview('services')}
          onSelectService={(service) => scrollToInquiry(service)}
        />
        <FloatingContactButtons />
      </div>
    );
  }

  // View: Main Website Home Page
  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark selection:bg-brand-accentGreen selection:text-brand-forest">
      {/* Sticky Navbar with SWM Wordmark */}
      <Navbar onSelectService={(service) => scrollToInquiry(service)} />

      <main className="flex-grow">
        {/* Section 1: Home / Hero */}
        <Hero
          onExploreClick={scrollToServices}
          onAssistanceClick={() => scrollToInquiry()}
        />

        {/* Section 2: Services Grid (12 Heading-Only Policy Cards + Explore Page Button) */}
        <Services
          onSelectService={(serviceName) => scrollToInquiry(serviceName)}
          onExploreAll={openAllServicesPage}
        />

        {/* Section 3: About Secure With Mehta & Kashyap Mehta */}
        <About />

        {/* Section 4: Experience & Trust Stats (39 Years Heritage, Mumbai Base) */}
        <TrustStats />

        {/* Section 5: How It Works (4-Step Timeline) */}
        <Process />

        {/* Section 6: Why Choose Us (Consultative Approach) */}
        <WhyChooseUs />

        {/* Section 7: Policy Review & Claims Assistance */}
        <PolicyReview onBookReview={() => scrollToInquiry('Policy Review & Gap Audit')} />

        {/* Section: Awards & Recognition */}
        <Awards />

        {/* Section: Client Reviews & Testimonials (7 Reviews, Auto-Swipe, 3 Visible) */}
        <Reviews />

        {/* Section 8: Frequently Asked Questions */}
        <FAQ />

        {/* Section 9: Contact & Location with Integrated WhatsApp Form */}
        <Contact
          preselectedService={preselectedService}
          onClearPreselection={() => setPreselectedService('')}
        />
      </main>

      {/* Footer with Legal & Regulatory Disclaimers */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingContactButtons />
    </div>
  );
};

export default App;
