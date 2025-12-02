import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="py-12 border-t border-white/10 bg-black text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="w-32 opacity-80 hover:opacity-100 transition-opacity duration-300 flex justify-center">
           {logoError ? (
             <span className="font-display font-bold text-2xl tracking-widest text-white uppercase">.STEINKE</span>
           ) : (
             <img 
               src="https://fal.media/files/penguin/L5xN1c2zV3bM4qW5eR6t7.png" 
               alt="Stanke Studio Logo" 
               onError={() => setLogoError(true)}
               className="w-full h-auto invert"
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