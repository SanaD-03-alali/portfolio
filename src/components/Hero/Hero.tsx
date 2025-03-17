"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaRobot, FaDatabase, FaBrain, FaMedal, FaBook, FaTable, FaFileDownload } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';
import Link from 'next/link';
import BackgroundShapes from '../BackgroundShapes/BackgroundShapes';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-primary overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <BackgroundShapes variant="primary" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Code Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-accent text-4xl mb-6 inline-block"
          >
            <code className="font-mono">&lt;/&gt;</code>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Hello, I'm <span className="text-accent">Sanad Alali</span>
          </h1>

          {/* Title Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-card-dark/50 backdrop-blur-lg rounded-xl p-6 mb-8 inline-block"
          >
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-text/90">
              <FaDatabase className="text-accent" />
              <h2>Data Scientist</h2>
              <span className="text-accent">&</span>
              <FaBrain className="text-secondary" />
              <h2>AI Engineer</h2>
              <FaRobot className="text-accent" />
            </div>
          </motion.div>

          <p className="text-text/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Transforming complex data into actionable insights through machine learning,
            deep learning, and innovative AI solutions.
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center gap-6 mb-12"
          >
            <Link
              href="https://github.com/SanaD-03-alali"
              target="_blank"
              className="text-text/70 hover:text-accent transition-colors duration-300"
            >
              <FaGithub size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sanad-alali-850880269/"
              target="_blank"
              className="text-text/70 hover:text-accent transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href="https://www.kaggle.com/sanadalali"
              target="_blank"
              className="text-text/70 hover:text-accent transition-colors duration-300"
            >
              <SiKaggle size={28} />
            </Link>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-4 mb-16"
          >
            <Link
              href="#projects"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="bg-card-dark hover:bg-card-dark/80 text-text px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Kaggle Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card-dark/70 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-accent/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <SiKaggle className="text-3xl text-[#20BEFF]" />
                <h3 className="text-2xl font-bold text-text">Kaggle Achievements</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card-dark/50 rounded-lg p-5 flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-3">
                    <FaMedal className="text-[#CD7F32] text-xl" />
                    <h4 className="text-lg font-semibold text-text">5 Bronze Medals</h4>
                  </div>
                  <p className="text-text/70 text-center text-sm">Recognized for high-quality notebooks</p>
                </div>
                
                <div className="bg-card-dark/50 rounded-lg p-5 flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-3">
                    <FaBook className="text-accent text-xl" />
                    <h4 className="text-lg font-semibold text-text">8 Notebooks</h4>
                  </div>
                  <p className="text-text/70 text-center text-sm">Sharing insights and analyses</p>
                </div>
                
                <div className="bg-card-dark/50 rounded-lg p-5 flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-3">
                    <FaTable className="text-secondary text-xl" />
                    <h4 className="text-lg font-semibold text-text">3 Datasets</h4>
                  </div>
                  <p className="text-text/70 text-center text-sm">With 2 bronze medals</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link
                  href="https://www.kaggle.com/sanadalali"
                  target="_blank"
                  className="bg-[#20BEFF]/10 hover:bg-[#20BEFF]/20 rounded-lg px-5 py-3 inline-flex items-center transition-colors duration-300"
                >
                  <span className="text-text font-medium mr-2">Notebooks Expert</span>
                  <SiKaggle className="text-[#20BEFF]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 