import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

export default Section;