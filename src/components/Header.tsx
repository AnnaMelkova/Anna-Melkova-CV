
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update header style based on scroll position
      setScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="cv-container flex justify-between items-center">
        <div className="text-cv-primary font-serif font-bold text-xl">
          CV
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn("nav-link", { "active": activeSection === item.id })}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button 
          className="md:hidden text-cv-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Menu
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 py-4">
          <nav className="cv-container flex flex-col space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn("nav-link", { "active": activeSection === item.id })}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
