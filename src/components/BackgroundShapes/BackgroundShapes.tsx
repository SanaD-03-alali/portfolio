"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaRobot, FaChartLine, FaBrain, FaServer, FaMobileAlt } from 'react-icons/fa';

interface BackgroundShapesProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const BackgroundShapes: React.FC<BackgroundShapesProps> = ({ variant = 'primary' }) => {
  // Different color schemes based on variant
  const colors = {
    primary: {
      blob1: 'bg-accent/5',
      blob2: 'bg-secondary/5',
      blob3: 'bg-accent/10',
      icon1: 'text-accent/20',
      icon2: 'text-secondary/20',
      icon3: 'text-accent/20',
      icon4: 'text-secondary/20',
    },
    secondary: {
      blob1: 'bg-secondary/5',
      blob2: 'bg-accent/5',
      blob3: 'bg-secondary/10',
      icon1: 'text-secondary/20',
      icon2: 'text-accent/20',
      icon3: 'text-secondary/20',
      icon4: 'text-accent/20',
    },
    tertiary: {
      blob1: 'bg-blue-500/5',
      blob2: 'bg-purple-500/5',
      blob3: 'bg-teal-500/10',
      icon1: 'text-blue-500/20',
      icon2: 'text-purple-500/20',
      icon3: 'text-teal-500/20',
      icon4: 'text-indigo-500/20',
    },
  };

  const currentColors = colors[variant];

  // Different icons based on variant
  const getIcons = () => {
    switch (variant) {
      case 'primary':
        return [<FaCode size={40} />, <FaDatabase size={50} />, <FaRobot size={45} />, <FaChartLine size={35} />];
      case 'secondary':
        return [<FaBrain size={40} />, <FaServer size={50} />, <FaCode size={45} />, <FaDatabase size={35} />];
      case 'tertiary':
        return [<FaRobot size={40} />, <FaMobileAlt size={50} />, <FaChartLine size={45} />, <FaBrain size={35} />];
      default:
        return [<FaCode size={40} />, <FaDatabase size={50} />, <FaRobot size={45} />, <FaChartLine size={35} />];
    }
  };

  const icons = getIcons();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute top-20 left-10 w-64 h-64 ${currentColors.blob1} rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-20 right-10 w-80 h-80 ${currentColors.blob2} rounded-full blur-3xl`}></div>
      <div className={`absolute top-1/3 right-1/4 w-40 h-40 ${currentColors.blob3} rounded-full blur-2xl`}></div>
      
      {/* Floating icons */}
      <motion.div 
        className={`absolute top-1/4 left-1/4 ${currentColors.icon1}`}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut"
        }}
      >
        {icons[0]}
      </motion.div>
      
      <motion.div 
        className={`absolute bottom-1/3 right-1/3 ${currentColors.icon2}`}
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {icons[1]}
      </motion.div>
      
      <motion.div 
        className={`absolute top-2/3 left-1/3 ${currentColors.icon3}`}
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 2
        }}
      >
        {icons[2]}
      </motion.div>
      
      <motion.div 
        className={`absolute top-1/3 right-1/5 ${currentColors.icon4}`}
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 3
        }}
      >
        {icons[3]}
      </motion.div>
    </div>
  );
};

export default BackgroundShapes; 