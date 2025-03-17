"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  year: number;
}

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-card-dark rounded-lg overflow-hidden card-gradient shadow-lg h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-md">
            <Image
              src={certificate.image}
              alt={certificate.issuer}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-text">{certificate.issuer}</h3>
            <p className="text-text/70 text-sm">{certificate.date}</p>
          </div>
        </div>
        
        <h4 className="text-xl font-bold text-text">{certificate.title}</h4>
      </div>
    </motion.div>
  );
};

export default CertificateCard; 