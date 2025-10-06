import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import CTABand from './components/CTABand';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import About from './components/About';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

/**
 * Main App component - Single-page marketing site for Feasy with About page
 */
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
        window.scrollTo(0, 0); // Scroll to top
      } else if (hash === '#terms') {
        setCurrentPage('terms');
        window.scrollTo(0, 0); // Scroll to top
      } else if (hash === '#privacy') {
        setCurrentPage('privacy');
        window.scrollTo(0, 0); // Scroll to top
      } else {
        setCurrentPage('home');
        window.scrollTo(0, 0); // Scroll to top
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Check if user is trying to access legal pages directly via URL
  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash === '#terms' || currentHash === '#privacy') {
      // Check if user came from footer navigation
      const fromFooter = sessionStorage.getItem('fromFooter');
      
      if (!fromFooter) {
        // Redirect to home if accessed directly
        window.location.hash = '';
        setCurrentPage('home');
      } else {
        // Clear the flag after use
        sessionStorage.removeItem('fromFooter');
      }
    }
  }, []);

  // If about page, show About component
  if (currentPage === 'about') {
    return <About />;
  }

  // If terms page, show Terms of Service component
  if (currentPage === 'terms') {
    return <TermsOfService />;
  }

  // If privacy page, show Privacy Policy component
  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  // Default landing page
  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8 relative overflow-x-hidden">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(/background.png)', 
          zIndex: -20
        }}
      ></div>

      {/* Ambient Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -10 }}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Glass Card Container */}
      <main className="w-full max-w-6xl relative z-10">
        <div className="glass lg:rounded-[3rem] sm:p-8 lg:p-12 xl:p-16 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                  <Navbar />
                  <Hero />
                  <TrustedBy />
                  <Features />
                  <CTABand />
                  <Pricing />
                  <Benefits />
                  <FAQ />
                  <FinalCTA />
                  <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;