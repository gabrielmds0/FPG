import React from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
