"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import ProjectCard from '../ProjectCard/ProjectCard';
import { FaProjectDiagram } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import BackgroundShapes from '../BackgroundShapes/BackgroundShapes';

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

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Bird's-Eye Mapper",
      description: "Road segmentation from satellite images using U-Net model with advanced preprocessing techniques.",
      image: "/images/birds_eye.png",
      technologies: ["Python", "TensorFlow", "U-Net", "Image Segmentation", "Pix2Pix GAN"],
      github: "https://github.com/SanaD-03-alali/Image-Segmentation-using-Unet",
      longDescription: "Developed a U-Net model for road segmentation from satellite images, integrating advanced preprocessing techniques like Pix2Pix GAN. The project focuses on accurate identification of road networks from aerial imagery, with applications in urban planning and navigation systems."
    },
    {
      id: 2,
      title: "Premier League Analysis in R",
      description: "Interactive R and Shiny app for analyzing Premier League data with advanced visualizations.",
      image: "/images/PL.png",
      technologies: ["R", "Shiny", "ggplot2", "leaflet", "treemapify"],
      github: "https://github.com/SanaD-03-alali/Premier-League-2023-24-Analysis-in-R/tree/main",
      longDescription: "Created an interactive R and Shiny app for analyzing Premier League data, featuring advanced visualizations using ggplot2, leaflet, and treemapify. The application provides comprehensive insights into team performance, player statistics, and match outcomes."
    },
    {
      id: 3,
      title: "Vegetable CNN and Transfer Learning",
      description: "CNN implementation from scratch and ResNet-101 for vegetable image classification.",
      image: "/images/vegetable.png",
      technologies: ["Python", "TensorFlow", "CNN", "Transfer Learning", "ResNet-101"],
      github: "https://github.com/SanaD-03-alali/Image-Classification-using-CNN",
      longDescription: "Implemented a CNN from scratch and leveraged ResNet-101 for vegetable image classification, achieving high accuracy. The project demonstrates both custom neural network architecture design and the application of transfer learning for improved performance."
    },
    {
      id: 4,
      title: "DR.DIAGNOSTIC",
      description: "Combined architecture for chest X-ray tumor detection and automated report generation.",
      image: "/images/chest.png",
      technologies: ["Python", "Deep Learning", "Medical Imaging", "NLP", "Report Generation"],
      github: "https://github.com/Huthayfa-Hodeb/Dr.Diagnostic-Chest-x-ray-Tumor-Detection-and-Generating-Report",
      longDescription: "Developed a combined architecture for tumor detection and report generation from chest X-rays, achieving state-of-the-art performance. The system integrates computer vision for tumor identification with natural language processing for generating detailed medical reports."
    },
    {
      id: 5,
      title: "Car Classification & Gold Price Prediction",
      description: "Machine learning models for car classification and time series prediction of gold prices.",
      image: "/images/car_gold.png",
      technologies: ["Python", "Machine Learning", "Classification", "Time Series", "LSTM", "BiLSTM", "ESN"],
      github: "https://github.com/SanaD-03-alali/Machine_Learning_Project",
      longDescription: "Implemented various classification algorithms for car data analysis and time series models (LSTM, BiLSTM, ESN) for gold price prediction, achieving high accuracy and low loss values. The project demonstrates proficiency in both traditional machine learning and advanced neural network architectures."
    },
    {
      id: 6,
      title: "MuscleMe Fitness App",
      description: "AI-driven fitness tracking platform with personalized meal and workout recommendations.",
      image: "/images/muscleme.png",
      technologies: ["Flutter", "Dart", "Firebase", "Machine Learning", "AI"],
      demo: "https://play.google.com/store/apps/details?id=com.muscleme.muscleme_app",
      longDescription: "Co-founded and led the development of MuscleMe, an AI-driven fitness tracking platform with over 500 active users. Developed machine learning models for personalized meal and workout recommendations, resulting in a 95% user satisfaction rate."
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

  return (
    <section id="projects" className="py-20 bg-primary relative overflow-hidden">
      <BackgroundShapes variant="secondary" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="My Projects"
          subtitle="Explore my portfolio of data science and AI projects, showcasing expertise in machine learning, deep learning, and innovative applications."
          icon={<FaProjectDiagram />}
          accent="Projects"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 