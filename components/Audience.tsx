import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const points = [
  "Precisam de constância visual imediata",
  "Querem elevar a estética da comunicação",
  "Desejam criar mais percepção de valor",
  "Precisam de conteúdos estratégicos e profissionais",
  "Procuram evitar improviso e falta de planejamento",
];

const Audience: React.FC = () => {
  return (
    <Section className="border-b border-white/5">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-medium uppercase text-white leading-none sticky top-24"
          >
            Para quem <br/> <span className="text-textMuted">é isso?</span>
          </motion.h2>
        </div>

        <div className="lg:w-2/3">
          <div className="space-y-8">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="flex items-start gap-6 border-b border-white/10 pb-8 group"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl md:text-3xl font-light text-textMain group-hover:text-white transition-colors">
                  {point}
                </h3>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-lg text-primary uppercase font-medium tracking-wide"
          >
            Se sua marca precisa começar 2026 forte e organizada, este pacote é para você.
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

export default Audience;