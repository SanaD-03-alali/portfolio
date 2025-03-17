import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Certificates from '@/components/Certificates/Certificates';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-text">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
} 