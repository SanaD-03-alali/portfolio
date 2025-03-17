"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: React.ReactElement<IconType>;
  accent?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  icon,
  accent = "Projects"  // The word to be accented in the title
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="text-accent text-3xl">
          {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-text">
          {title.split(accent).map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && <span className="text-accent">{accent}</span>}
            </React.Fragment>
          ))}
        </h2>
      </div>
      <p className="text-text/70 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle; 