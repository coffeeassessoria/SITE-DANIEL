import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="py-12 border-t border-white/10 bg-black text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="w-auto h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
           {logoError ? (
             <span className="font-display font-bold text-2xl tracking-widest text-white uppercase whitespace-nowrap">
               Estúdio Stanke
             </span>
           ) : (
             <img 
               src="logo(1).png" 
               alt="Stanke Studio Logo" 
               onError={(e) => {
                 console.warn("Footer Logo failed to load", e);
                 setLogoError(true);
               }}
               className="h-8 md:h-10 w-auto object-contain invert"
             />
           )}
        </div>
        <p className="text-textMuted text-sm max-w-md">
          Design que direciona. Criativos que posicionam. Marcas que crescem.
        </p>
        <div className="text-xs text-textMuted/40 mt-8">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;