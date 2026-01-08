import React from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import { Toaster } from './components/ui/sonner';
import './App.css';
import LocationSection from './components/sections/LocationSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />

      </main>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
