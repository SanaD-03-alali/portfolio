"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  longDescription: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="h-[400px] perspective-1000 w-full cursor-pointer relative"
      onClick={handleFlip}
    >
      <span className="absolute top-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded-md z-10">
        Click to flip
      </span>
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-card-dark rounded-lg overflow-hidden card-gradient shadow-lg h-full">
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
              
              <div className="flex flex-wrap gap-2">
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
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-card-dark rounded-lg overflow-hidden card-gradient shadow-lg"
        >
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-text mb-4 glow-text">{project.title}</h3>
              <p className="text-text/80 mb-6 overflow-auto max-h-[180px]">{project.longDescription}</p>
            </div>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-secondary/20 text-accent px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={18} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-transparent border border-accent hover:bg-accent/10 text-accent px-4 py-2 rounded-md font-medium transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGooglePlay size={18} />
                    Google Play
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard; 