import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Concept: React.FC = () => {
  return (
    <div className="bg-surface relative border-y border-white/5">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium uppercase mb-8 text-white tracking-wide leading-tight">
              O que é a <br/><span className="text-primary">Creator Box?</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-textMuted text-lg leading-relaxed">
              A <strong className="text-white">Creator Box</strong> é um pacote exclusivo de 12 criativos estáticos, 
              desenvolvidos para marcas que entendem que design não é só estética — é posicionamento.
            </p>
            <p className="text-textMuted text-lg leading-relaxed mt-6">
              Você recebe uma comunicação clara, forte e coerente, pronta para elevar sua presença digital 
              e garantir que sua marca entre em 2026 preparada para competir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden border border-white/10 group bg-black flex items-center justify-center"
          >
             {/* Abstract Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
             
             {/* Pure CSS Creator Box Illustration */}
             <div className="relative z-20 w-64 h-48 md:w-80 md:h-56 bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-sm transform group-hover:scale-105 transition-transform duration-700 preserve-3d">
                
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-sm" />
                <div className="absolute -inset-10 bg-primary/10 blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full" />
                
                {/* Floating 'Lid' Effect */}
                <div className="absolute -top-12 left-0 w-full h-12 border-x border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent origin-bottom transform perspective-[1000px] rotate-x-[60deg] opacity-50 skew-x-12" />

                {/* Floating Cards (The 'Content') */}
                <div className="absolute inset-x-0 -top-20 flex flex-col items-center justify-end h-full gap-4 pointer-events-none">
                    {/* Back Card */}
                    <div className="w-[85%] h-32 bg-[#111] border border-white/10 rounded absolute top-0 transform translate-y-8 -rotate-6 shadow-xl opacity-80 group-hover:-translate-y-2 transition-transform duration-700 delay-100" />
                    
                    {/* Middle Card */}
                    <div className="w-[90%] h-32 bg-[#151515] border border-white/20 rounded absolute top-2 transform translate-y-4 rotate-3 shadow-xl z-10 group-hover:-translate-y-4 transition-transform duration-500 delay-75 flex items-center justify-center overflow-hidden">
                       <div className="w-16 h-16 rounded-full border border-white/5 bg-white/[0.02]" />
                    </div>

                    {/* Front Hero Card */}
                    <div className="w-[95%] h-32 bg-gradient-to-br from-[#1a1a1a] to-black border border-primary/50 rounded absolute top-6 shadow-[0_0_30px_rgba(255,0,0,0.15)] z-20 flex items-center justify-center overflow-hidden backdrop-blur-sm group-hover:-translate-y-8 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                        <span className="font-display font-bold text-white tracking-[0.2em] text-lg relative z-10 drop-shadow-md">CREATOR</span>
                        <div className="absolute bottom-3 right-3 flex gap-1 opacity-50">
                           <div className="w-1 h-1 bg-white rounded-full" />
                           <div className="w-1 h-1 bg-white rounded-full" />
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Concept;