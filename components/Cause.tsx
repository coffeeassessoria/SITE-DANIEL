import React from 'react';
import { motion } from 'framer-motion';

const Cause: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#080000] overflow-hidden border-y border-red-900/20">
      {/* Background Red Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-primary text-xl md:text-2xl uppercase tracking-[0.2em] mb-8"
        >
          Por que a Creator Box existe?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-medium uppercase leading-tight text-white mb-12">
            Porque nenhuma marca que deseja crescer pode entrar em 2026 <span className="text-stroke-red text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">sem planejamento visual.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-16">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="border-l border-primary/40 pl-6"
            >
                <h4 className="text-white font-display text-xl mb-3 uppercase tracking-wide">O Problema</h4>
                <p className="text-textMuted text-lg font-light">Começar o ano sem clareza estética e sem constância derruba autoridade e enfraquece a confiança do público.</p>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="border-l border-white/20 pl-6"
            >
                <h4 className="text-white font-display text-xl mb-3 uppercase tracking-wide">A Solução</h4>
                <p className="text-textMuted text-lg font-light">A Creator Box é a direção, consistência e força que sua comunicação precisa — antes mesmo do ano começar.</p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cause;