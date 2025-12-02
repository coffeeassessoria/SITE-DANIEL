import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Section from './Section';

const Offer: React.FC = () => {
  return (
    <Section id="offer" className="py-24 md:py-40">
      <div className="relative max-w-3xl mx-auto">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#0A0A0A] border border-white/10 backdrop-blur-xl p-8 md:p-16 text-center shadow-2xl"
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-2 px-4 shadow-[0_0_15px_rgba(255,0,0,0.5)]">
            Vagas Limitadas
          </div>

          <h2 className="font-display text-2xl md:text-3xl text-white uppercase mb-8 tracking-widest">
            Investimento
          </h2>

          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <span className="text-textMuted text-xl md:text-2xl line-through decoration-primary decoration-2">
              DE R$900
            </span>
            <span className="text-6xl md:text-8xl font-display font-medium text-white tracking-tighter">
              R$499
            </span>
          </div>

          <p className="text-textMuted mb-12 max-w-md mx-auto text-lg font-light">
            Oferta exclusiva de fim de ano. Comece 2026 com o pé direito e uma marca visualmente impecável.
          </p>

          <Button fullWidth onClick={() => alert("Redirect to checkout...")} className="text-lg">
            👉 Garantir meu pacote agora
          </Button>

          <p className="mt-6 text-sm text-textMuted/60">
            Pagamento seguro. Entregas agendadas conforme disponibilidade.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Offer;