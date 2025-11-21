"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDatabase,
  FaCheckCircle
} from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import BackgroundShapes from '../BackgroundShapes/BackgroundShapes';

const Experience: React.FC = () => {
  const metaDetails = [
    {
      id: 1,
      label: 'Duration',
      value: 'July 2025 – Present (Full-Time)',
      icon: <FaCalendarAlt className="text-accent" />
    },
    {
      id: 2,
      label: 'Location',
      value: 'Amman, Jordan',
      icon: <FaMapMarkerAlt className="text-accent" />
    },
    {
      id: 3,
      label: 'Tech Focus',
      value: 'Crystal Reports · SQL · SAP HANA',
      icon: <FaDatabase className="text-accent" />
    }
  ];

  const contributions = [
    'Completed a 2-month part-time onboarding program before transitioning to full-time in July 2025.',
    'Assisted in designing, adjusting, and creating Crystal Reports layouts and reports for SAP Business One customers.',
    'Developed SQL and SAP HANA queries, stored procedures, and views to support business reporting requirements.'
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-primary via-primary/95 to-card-dark relative overflow-hidden"
    >
      <BackgroundShapes variant="secondary" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Professional Experience"
          subtitle="Current role responsibilities and impact delivering data-driven solutions."
          icon={<FaBriefcase />}
          accent="Experience"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-card-dark/70 backdrop-blur rounded-2xl shadow-xl p-6 md:p-10 border border-white/5"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr,1.2fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="relative w-24 h-24 bg-card-dark rounded-2xl border border-accent/30 flex items-center justify-center">
                  <Image
                    src="/images/ABS.png"
                    alt="Advanced Business Solutions logo"
                    width={96}
                    height={96}
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <span className="text-sm uppercase tracking-widest text-text/60">
                    Current Role
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-text mt-2">
                    BI Associate Consultant
                  </h3>
                  <p className="text-accent text-lg font-semibold">
                    Advanced Business Solutions
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {metaDetails.map((detail) => (
                  <div
                    key={detail.id}
                    className="flex items-start gap-4 bg-card-dark/60 rounded-xl p-4 border border-white/5"
                  >
                    <div className="text-2xl">{detail.icon}</div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-text/60">
                        {detail.label}
                      </p>
                      <p className="text-base font-semibold text-text">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 rounded-2xl p-6 border border-accent/20"
            >
              <h4 className="text-xl font-semibold text-text mb-4 flex items-center gap-2">
                <FaBriefcase className="text-accent" />
                Key Contributions
              </h4>
              <ul className="space-y-4">
                {contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-text/90">
                    <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

