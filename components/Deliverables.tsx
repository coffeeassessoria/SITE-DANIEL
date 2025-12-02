import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

// Mock visual components to represent "files" or "designs"
// UPDATED: Added subtle lift and refined glow animations.

const AbstractStack = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Base Layers */}
    <div className="absolute w-28 h-36 bg-white/5 border border-white/10 rounded-lg transform -rotate-12 translate-x-[-15px] shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:-rotate-12 group-hover:translate-x-[-20px]" />
    <div className="absolute w-28 h-36 bg-white/10 border border-white/20 rounded-lg transform rotate-6 translate-x-[10px] backdrop-blur-md shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:translate-x-[15px]" />
    
    {/* Hero Layer - Glowing Red */}
    <div className="absolute w-28 h-36 bg-gradient-to-br from-primary/80 to-black border border-primary/50 rounded-lg transform -rotate-3 z-10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.3)] group-hover:shadow-[0_0_60px_rgba(255,0,0,0.6)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
        <span className="relative z-10 text-4xl font-display font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">12</span>
        
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
    </div>
  </div>
);

const AbstractDirection = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Crosshairs */}
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent absolute top-1/2" />
    <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent absolute left-1/2" />
    
    {/* Orbit rings */}
    <div className="w-32 h-32 border border-white/10 rounded-full absolute transition-all duration-700 group-hover:border-white/30 group-hover:scale-110" />
    <div className="w-48 h-48 border border-dashed border-white/5 rounded-full absolute animate-[spin_10s_linear_infinite] group-hover:border-white/20" />
    
    {/* Central Focus - Glowing */}
    <div className="w-24 h-24 border border-primary/60 rounded-full absolute bg-primary/5 shadow-[0_0_30px_rgba(255,0,0,0.2)] backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/10 group-hover:shadow-[0_0_50px_rgba(255,0,0,0.4)]">
        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#FF0000] animate-pulse" />
    </div>
    
    {/* Satellite Nodes */}
    <div className="absolute top-10 right-20 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
    <div className="absolute bottom-16 left-24 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#FF0000]" />
  </div>
);

const AbstractAesthetic = () => (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />
        
        {/* Grid Pattern */}
        <div className="w-[120%] h-[120%] grid grid-cols-3 gap-3 opacity-80 scale-110 rotate-6 transform group-hover:rotate-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
            <div className="bg-white/5 rounded-sm border border-white/5 backdrop-blur-sm" />
            <div className="bg-gradient-to-br from-primary/40 to-transparent rounded-sm border border-primary/30 shadow-[0_0_20px_rgba(255,0,0,0.15)] backdrop-blur-md group-hover:shadow-[0_0_40px_rgba(255,0,0,0.4)] transition-all duration-500" />
            <div className="bg-white/5 rounded-sm border border-white/5 backdrop-blur-sm" />
            
            <div className="bg-white/[0.02] rounded-sm border border-white/5" />
            <div className="bg-white/10 rounded-sm border border-white/10 backdrop-blur-md" />
            <div className="bg-primary/20 rounded-sm border border-primary/20 shadow-[0_0_15px_rgba(255,0,0,0.1)] group-hover:bg-primary/30 transition-colors duration-500" />
            
            <div className="bg-gradient-to-tr from-white/10 to-transparent rounded-sm border border-white/5" />
            <div className="bg-white/[0.02] rounded-sm border border-white/5" />
            <div className="bg-white/5 rounded-sm border border-white/5" />
        </div>
    </div>
);

const AbstractContent = () => (
    <div className="relative w-full h-full flex items-center justify-center gap-4">
        {/* Bar 1 */}
        <div className="w-10 h-32 bg-white/[0.03] border border-white/10 rounded-xl flex flex-col justify-end p-1.5 shadow-lg backdrop-blur-sm overflow-hidden group-hover:-translate-y-3 transition-transform duration-500 delay-75 ease-out">
            <div className="w-full h-[40%] bg-gradient-to-t from-primary/40 to-primary/10 rounded-lg border-t border-primary/20 shadow-[0_0_15px_rgba(255,0,0,0.2)] group-hover:h-[60%] transition-all duration-700" />
        </div>
        
        {/* Bar 2 (Main) */}
        <div className="w-10 h-44 bg-white/[0.03] border border-white/10 rounded-xl flex flex-col justify-end p-1.5 shadow-2xl backdrop-blur-md overflow-hidden z-10 group-hover:-translate-y-6 transition-transform duration-500 ease-out">
            <div className="w-full h-[75%] bg-gradient-to-t from-primary to-primaryDark rounded-lg shadow-[0_0_25px_rgba(255,0,0,0.4)] relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
        </div>
        
        {/* Bar 3 */}
        <div className="w-10 h-24 bg-white/[0.03] border border-white/10 rounded-xl flex flex-col justify-end p-1.5 shadow-lg backdrop-blur-sm overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 delay-100 ease-out">
             <div className="w-full h-[50%] bg-gradient-to-t from-primary/30 to-primary/5 rounded-lg border-t border-primary/20 shadow-[0_0_10px_rgba(255,0,0,0.1)] group-hover:h-[70%] transition-all duration-700" />
        </div>
    </div>
)

const items = [
  { 
    id: 1, 
    title: "12 Criativos Premium", 
    desc: "Um arsenal completo de peças estáticas.",
    visual: <AbstractStack />,
    colSpan: "md:col-span-1" 
  },
  { 
    id: 2, 
    title: "Direção de Arte", 
    desc: "Alinhamento estratégico visual.",
    visual: <AbstractDirection />,
    colSpan: "md:col-span-1" 
  },
  { 
    id: 3, 
    title: "Estética de Autoridade", 
    desc: "Design brutalista e refinado.",
    visual: <AbstractAesthetic />,
    colSpan: "md:col-span-1"
  },
  { 
    id: 4, 
    title: "Conteúdo p/ 3 Meses", 
    desc: "Consistência garantida na timeline.",
    visual: <AbstractContent />,
    colSpan: "md:col-span-2"
  },
  { 
    id: 5, 
    title: "Entrega Profissional", 
    desc: "Arquivos organizados e prontos para postar.",
    visual: (
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-64 h-20 border border-white/10 rounded-xl flex items-center px-6 justify-between bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden group-hover:border-primary/40 group-hover:bg-black/60 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                {/* Glossy sheen */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                <div className="flex gap-3">
                    <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse" />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                
                <div className="flex flex-col items-end z-10">
                    <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-1">Status</div>
                    <div className="text-sm text-white font-bold tracking-widest bg-primary/20 px-2 py-0.5 rounded border border-primary/30 shadow-[0_0_15px_rgba(255,0,0,0.2)] group-hover:bg-primary group-hover:text-black group-hover:shadow-[0_0_20px_#FF0000] transition-all duration-300">
                        READY_
                    </div>
                </div>
                
                {/* Background glow for the card itself */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 blur-[40px] rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
            </div>
        </div>
    ),
    colSpan: "md:col-span-1"
  },
];

const Deliverables: React.FC = () => {
  return (
    <Section>
      <div className="text-center mb-20">
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl font-medium uppercase mb-4"
        >
          O que você <span className="text-stroke">recebe</span>
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-textMuted uppercase tracking-widest text-sm"
        >
            Dentro da Creator Box
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`
                group relative h-[320px] 
                bg-white/[0.02] backdrop-blur-md border border-white/10
                hover:bg-white/[0.04] hover:border-primary/40
                overflow-hidden flex flex-col justify-between transition-all duration-500 ease-out
                hover:shadow-[0_20px_40px_-10px_rgba(255,0,0,0.15)] hover:-translate-y-2
                ${item.colSpan}
            `}
          >
            {/* Subtle inner gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Abstract Visual Background Area */}
            <div className="absolute inset-0 pb-24 opacity-100 group-hover:scale-[1.03] transition-transform duration-700">
                {item.visual}
            </div>

            {/* Gradient Overlay for Text Readability - slightly stronger at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 p-8 mt-auto">
                <div className="w-8 h-[3px] bg-primary mb-4 origin-left group-hover:w-16 transition-all duration-500 shadow-[0_0_15px_#FF0000]" />
                <h3 className="text-2xl font-display font-medium text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-lg">{item.title}</h3>
                <p className="text-textMuted text-sm group-hover:text-white/90 transition-colors duration-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center mt-16 text-textMuted max-w-2xl mx-auto border-t border-white/10 pt-8"
      >
        Tudo pensado para transmitir autoridade, reforçar sua identidade e melhorar a percepção do público sobre sua marca.
      </motion.p>
    </Section>
  );
};

export default Deliverables;