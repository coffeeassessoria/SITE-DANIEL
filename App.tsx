import React, { useState } from 'react';
import NoiseOverlay from './components/NoiseOverlay';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Deliverables from './components/Deliverables';
import Cause from './components/Cause';
import Audience from './components/Audience';
import Offer from './components/Offer';
import Footer from './components/Footer';

function App() {
  const [logoError, setLogoError] = useState(false);

  return (
    <main className="min-h-screen bg-background text-textMain selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      <NoiseOverlay />
      
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-background/50 to-transparent backdrop-blur-[2px]">
         <div className="w-auto min-w-[120px] h-12 flex items-center">
           {/* Logo logic with fallback */}
           {logoError ? (
             <span className="font-display font-bold text-xl md:text-2xl tracking-widest text-white uppercase whitespace-nowrap">
               Estúdio Stanke
             </span>
           ) : (
             <img 
               src="logo(1).png" 
               alt="Stanke Studio Logo" 
               onError={() => {
                 console.warn("Header Logo failed to load");
                 setLogoError(true);
               }}
               className="h-8 md:h-10 w-auto object-contain invert opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
             />
           )}
         </div>
         <div className="hidden md:block text-xs uppercase tracking-widest text-white/70 font-display">
           Pacote Especial 2026
         </div>
      </header>

      <Hero />
      <Concept />
      <Deliverables />
      <Cause />
      <Audience />
      <Offer />
      <Footer />
    </main>
  );
}

export default App;