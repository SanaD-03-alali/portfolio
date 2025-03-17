"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CertificateCard from './CertificateCard';
import { FaCertificate } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import BackgroundShapes from '../BackgroundShapes/BackgroundShapes';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  year: number;
}

const Certificates: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Hyperparameter Optimization for Machine Learning",
      issuer: "Udemy",
      date: "January 2025",
      image: "/images/udemy.png",
      year: 2025
    },
    {
      id: 2,
      title: "A Deep Understanding of Deep Learning",
      issuer: "Udemy",
      date: "March 2024",
      image: "/images/udemy.png",
      year: 2024
    },
    {
      id: 3,
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "February 2024",
      image: "/images/coursera.png",
      year: 2024
    },
    {
      id: 4,
      title: "Feature Engineering for Machine Learning",
      issuer: "Udemy",
      date: "April 2024",
      image: "/images/udemy.png",
      year: 2024
    },
    {
      id: 5,
      title: "Feature Selection for Machine Learning",
      issuer: "Udemy",
      date: "April 2024",
      image: "/images/udemy.png",
      year: 2024
    },
    {
      id: 6,
      title: "Flutter & Dart - The Complete Guide",
      issuer: "Udemy",
      date: "May 2024",
      image: "/images/udemy.png",
      year: 2024
    },
    {
      id: 7,
      title: "R Programming",
      issuer: "Udemy",
      date: "June 2024",
      image: "/images/udemy.png",
      year: 2024
    },
    {
      id: 8,
      title: "Data Analyst with Python",
      issuer: "DataCamp",
      date: "July 2023",
      image: "/images/datacamp.png",
      year: 2023
    },
    {
      id: 9,
      title: "Associate Data Scientist in Python",
      issuer: "DataCamp",
      date: "August 2023",
      image: "/images/datacamp.png",
      year: 2023
    }
  ];

  const years = [2025, 2024, 2023];

  // Filter certificates by selected year
  const filteredCertificates = certificates.filter(cert => cert.year === selectedYear);

  return (
    <section id="certificates" className="py-20 bg-primary relative overflow-hidden">
      <BackgroundShapes variant="primary" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="My Certificates"
          subtitle="Professional certifications and courses I've completed to enhance my skills and knowledge."
          icon={<FaCertificate />}
          accent="Certificates"
        />

        {/* Year filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                selectedYear === year 
                  ? 'bg-accent text-white font-bold' 
                  : 'bg-card-dark text-text/70 hover:bg-card-dark/80'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredCertificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CertificateCard certificate={certificate} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 