"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import BackgroundShapes from '../BackgroundShapes/BackgroundShapes';

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/sanad-alali-850880269/', label: 'LinkedIn' },
    { icon: <FiGithub />, url: 'https://github.com/SanaD-03-alali', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-card-dark to-primary relative overflow-hidden">
      <BackgroundShapes variant="secondary" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss potential collaborations? Feel free to reach out through my contact information or social channels."
          icon={<FaEnvelope />}
          accent="Touch"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card-dark rounded-lg p-8 card-gradient shadow-lg"
        >
          <h3 className="text-2xl font-bold text-text mb-8 text-center">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex items-start">
              <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                <FiMail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text mb-1">Email</h4>
                <a href="mailto:sanadalali4@gmail.com" className="text-text/70 hover:text-accent transition-colors">
                  sanadalali4@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                <FiPhone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text mb-1">Phone</h4>
                <a href="tel:+962777677786" className="text-text/70 hover:text-accent transition-colors">
                  +962 777 677 786
                </a>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-text mb-6 text-center">Follow Me</h3>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-dark hover:bg-secondary/20 text-text hover:text-accent p-4 rounded-lg transition-colors duration-300"
                whileHover={{ y: -5 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 