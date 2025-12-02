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
            className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden border border-white/10 group bg-black"
          >
             {/* Mockup Image */}
             <div className="absolute inset-0 z-0">
               <img 
                src="https://fal.media/files/monkey/O0VdD1u5XyZ2zR3gN9tK0.png" 
                alt="Creator Box Mockup" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
             </div>
             
             {/* Overlay for cinematic feel */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

             {/* Glass Float Element */}
             <div className="absolute bottom-6 right-6 z-20 border border-white/20 backdrop-blur-xl px-6 py-4 bg-black/60 shadow-2xl rounded-sm">
                <div className="text-xs uppercase tracking-widest text-primary mb-1">Status</div>
                <div className="text-lg font-display text-white">Premium Grade</div>
             </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Concept;