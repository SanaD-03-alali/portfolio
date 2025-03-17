"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: (level: number) => ({ 
      opacity: 1, 
      width: `${level}%`,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      variants={categoryVariants}
      className="bg-card-dark rounded-lg p-6 card-gradient shadow-lg"
    >
      <div className="flex items-center mb-6">
        <div className="bg-secondary/20 p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-text">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-text/90 font-medium">{skill.name}</span>
              <span className="text-accent font-medium">{skill.level}%</span>
            </div>
            <div className="h-2 bg-primary/50 rounded-full overflow-hidden">
              <motion.div
                custom={skill.level}
                variants={skillVariants}
                className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory; 