
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Logos } from './components/Logos';
import { Mission } from './components/Mission';
import { Features } from './components/Features';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';
import { BackgroundRibbon } from './components/BackgroundRibbon';
import { FramerBadge } from './components/FramerBadge';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-indigo-500/30">
      {/* Iridescent background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <BackgroundRibbon />
         <div className="absolute inset-0 iridescent-mesh opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <section className="min-h-screen flex flex-col items-center justify-center">
          <Hero />
          <Logos />
        </section>

        <section className="py-24">
          <Mission />
        </section>

        <section className="pb-32">
          <Features />
        </section>

        <section className="pb-32">
          <CaseStudies />
        </section>
        
        <Footer />
      </div>

      <FramerBadge />
    </div>
  );
};

export default App;
