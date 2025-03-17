"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-text mb-2">
              <span className="text-accent">S</span>anad Alali
            </h3>
            <p className="text-text/70">
              Data Scientist & AI Engineer
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/SanaD-03-alali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sanad-alali-850880269/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-text/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sanad Alali. All rights reserved.
          </p>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <a 
              href="mailto:sanadalali4@gmail.com" 
              className="flex items-center gap-2 text-text/50 hover:text-accent text-sm transition-colors duration-300 mb-2 md:mb-0"
            >
              <FaEnvelope size={16} />
              sanadalali4@gmail.com
            </a>
            <span className="hidden md:inline text-text/30">|</span>
            <a 
              href="tel:+962777677786" 
              className="flex items-center gap-2 text-text/50 hover:text-accent text-sm transition-colors duration-300"
            >
              <FaPhone size={16} />
              +962 777 677 786
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 