import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', fullWidth = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 0, 0, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative px-8 py-4 bg-primary text-white font-bold tracking-wide uppercase text-sm md:text-base
        transition-colors duration-300 hover:bg-primaryDark
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;