
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Add scroll reveal animation for sections
    const handleScroll = () => {
      const sections = document.querySelectorAll('.cv-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on initial load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="cv-container">
        <Profile />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
