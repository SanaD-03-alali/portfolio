"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  longDescription: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -10,
      boxShadow: '0 10px 30px -15px rgba(124, 58, 237, 0.5)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-card-dark rounded-lg overflow-hidden card-gradient shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-text mb-2 glow-text">{project.title}</h3>
        <p className="text-text/70 mb-4 h-20 overflow-hidden">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={onClick}
            className="text-accent hover:text-secondary transition-colors duration-300 text-sm font-medium"
          >
            View Details
          </button>
          
          <div className="flex space-x-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors duration-300"
            >
              <FiGithub size={20} />
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text hover:text-accent transition-colors duration-300"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 