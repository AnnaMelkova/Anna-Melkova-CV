
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="cv-section">
      <h2 className="section-title flex items-center">
        <Mail size={20} className="mr-2" />
        Contact
      </h2>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a 
          href="tel:+34674503226" 
          className="p-6 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] flex items-center space-x-4"
        >
          <div className="w-12 h-12 rounded-full bg-cv-light-accent flex items-center justify-center">
            <Phone size={20} className="text-cv-primary" />
          </div>
          <div>
            <p className="text-sm text-cv-secondary">Phone</p>
            <p className="text-cv-primary font-medium">+34 674503226</p>
          </div>
        </a>
        
        <a 
          href="mailto:anna.melkova@gmail.com" 
          className="p-6 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] flex items-center space-x-4"
        >
          <div className="w-12 h-12 rounded-full bg-cv-light-accent flex items-center justify-center">
            <Mail size={20} className="text-cv-primary" />
          </div>
          <div>
            <p className="text-sm text-cv-secondary">Email</p>
            <p className="text-cv-primary font-medium">anna.melkova@gmail.com</p>
          </div>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/anna-melkova1986" 
          target="_blank" 
          rel="noopener"
          className="p-6 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] flex items-center space-x-4"
        >
          <div className="w-12 h-12 rounded-full bg-cv-light-accent flex items-center justify-center">
            <Linkedin size={20} className="text-cv-primary" />
          </div>
          <div>
            <p className="text-sm text-cv-secondary">LinkedIn</p>
            <p className="text-cv-primary font-medium">anna-melkova1986</p>
          </div>
        </a>
        
        <div className="p-6 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-cv-light-accent flex items-center justify-center">
            <MapPin size={20} className="text-cv-primary" />
          </div>
          <div>
            <p className="text-sm text-cv-secondary">Location</p>
            <p className="text-cv-primary font-medium">08027, Barcelona, Spain</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center py-6">
        <p className="text-cv-secondary">
          Thank you for viewing my CV. Feel free to contact me for any opportunities.
        </p>
        <p className="text-cv-primary mt-2">
          © {new Date().getFullYear()} Anna Melkova
        </p>
      </div>
    </section>
  );
};

export default Contact;
