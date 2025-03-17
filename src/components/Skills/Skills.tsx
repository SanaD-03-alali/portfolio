"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiBarChart2, FiLayers, FiSmartphone } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import BackgroundShapes from '../BackgroundShapes/BackgroundShapes';

interface SkillItem {
  name: string;
  color: string;
}

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: <FiCode className="h-6 w-6 text-accent" />,
      skills: [
        { name: 'Python', color: 'bg-blue-500' },
        { name: 'R', color: 'bg-blue-700' },
        { name: 'Dart', color: 'bg-cyan-500' },
      ]
    },
    {
      id: 2,
      title: 'Data Science & AI',
      icon: <FiDatabase className="h-6 w-6 text-accent" />,
      skills: [
        { name: 'Machine Learning', color: 'bg-purple-600' },
        { name: 'Deep Learning', color: 'bg-purple-800' },
        { name: 'Time Series Analysis', color: 'bg-indigo-600' },
        { name: 'Feature Engineering', color: 'bg-indigo-800' },
        { name: 'Feature Selection', color: 'bg-violet-600' },
        { name: 'Hyperparameter Optimization', color: 'bg-violet-800' },
      ]
    },
    {
      id: 3,
      title: 'Data Visualization',
      icon: <FiBarChart2 className="h-6 w-6 text-accent" />,
      skills: [
        { name: 'Power BI', color: 'bg-yellow-500' },
        { name: 'Tableau', color: 'bg-blue-500' },
        { name: 'ggplot2', color: 'bg-green-600' },
        { name: 'Matplotlib', color: 'bg-blue-600' },
        { name: 'Seaborn', color: 'bg-teal-500' },
      ]
    },
    {
      id: 4,
      title: 'Frameworks & Libraries',
      icon: <FiLayers className="h-6 w-6 text-accent" />,
      skills: [
        { name: 'TensorFlow', color: 'bg-orange-500' },
        { name: 'PyTorch', color: 'bg-red-500' },
        { name: 'Scikit-learn', color: 'bg-blue-500' },
        { name: 'Pandas', color: 'bg-blue-700' },
        { name: 'NumPy', color: 'bg-blue-600' },
      ]
    },
    {
      id: 5,
      title: 'App Development',
      icon: <FiSmartphone className="h-6 w-6 text-accent" />,
      skills: [
        { name: 'Flutter', color: 'bg-cyan-500' },
        { name: 'Firebase', color: 'bg-yellow-600' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-primary to-card-dark relative overflow-hidden">
      <BackgroundShapes variant="tertiary" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="My Skills"
          subtitle="A comprehensive overview of my technical expertise in data science, AI, and software development."
          icon={<FaCode />}
          accent="Skills"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              className="bg-card-dark rounded-lg p-6 card-gradient shadow-lg skill-card"
            >
              <div className="flex items-center mb-6">
                <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-text">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    className={`${skill.color} bg-opacity-20 rounded-lg p-3 text-center skill-item`}
                  >
                    <span className="text-text font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 