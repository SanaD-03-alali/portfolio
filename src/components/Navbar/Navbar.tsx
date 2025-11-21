"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCode, FaProjectDiagram, FaCertificate, FaEnvelope, FaFileDownload, FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Determine active section based on scroll position
      const sections = ['home', 'experience', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHome className="text-lg" /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase className="text-lg" /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram className="text-lg" /> },
    { name: 'Skills', href: '#skills', icon: <FaCode className="text-lg" /> },
    { name: 'Certificates', href: '#certificates', icon: <FaCertificate className="text-lg" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="text-lg" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-text">
            <span className="text-accent">S</span>anad
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-accent border-b-2 border-accent font-medium'
                    : 'text-text/70 hover:text-accent'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <a 
              href="/CV_sanad.pdf"
              download
              className="ml-4 px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-md flex items-center gap-2 transition-colors duration-300"
            >
              <FaFileDownload className="text-lg" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 