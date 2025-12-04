import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="py-16 border-t border-white/10 bg-black text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        <div className="relative group cursor-pointer inline-block">
           {logoError ? (
             <span className="font-display font-bold text-2xl tracking-widest text-white uppercase whitespace-nowrap opacity-80 group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
               Estúdio Stanke
             </span>
           ) : (
             <img 
               src="logo(1).png" 
               alt="Stanke Studio Logo" 
               onError={() => {
                 console.warn("Footer Logo failed to load");
                 setLogoError(true);
               }}
               className="h-10 md:h-12 w-auto object-contain invert opacity-50 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"
             />
           )}
        </div>
        <p className="text-textMuted text-sm max-w-md font-light tracking-wide leading-relaxed">
          Design que direciona. Criativos que posicionam. Marcas que crescem.
        </p>
        <div className="w-12 h-[1px] bg-white/10 my-2" />
        <div className="text-[10px] md:text-xs text-textMuted/30 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;