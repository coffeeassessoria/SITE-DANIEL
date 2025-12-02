import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           {/* Reverted to the cleaner structure of V1: No forced breaks, just fluid text */}
           <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight mb-8">
            Marcas que querem <span className="text-primary">vencer em 2026</span> começam hoje.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-textMuted text-lg md:text-xl max-w-2xl mb-12 font-light tracking-wide"
        >
          Prepare sua marca para 2026 com um pacote de artes pensado para posicionar, comunicar e vender. 
          Pacote especial de fim de ano para marcas que não podem começar janeiro improvisando.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Button onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}>
            GARANTIR MINHA CREATOR BOX
          </Button>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;