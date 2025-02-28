
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="cv-section pt-24 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Photo and QR code column */}
        <div className="col-span-1 space-y-6">
          <div className="aspect-square rounded-md overflow-hidden bg-cv-light-accent shadow-md relative">
            {/* Placeholder for photo - would be replaced with actual photo */}
            <div className="absolute inset-0 flex items-center justify-center text-cv-secondary">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <img
                  src="foto.png"
                  alt="Anna Melkova"
                  className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* QR code - adjusted to remove visible background */}
          <div className="flex items-center justify-center">
            <img
              src="qr-linkedin.png"
              alt="QR code to LinkedIn"
              className="w-1/2 h-auto object-contain transition-all duration-700 hover:scale-105 shadow-md rounded-md"
            />
          </div>
        </div>

        {/* Info column */}
        <div className="col-span-1 md:col-span-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-cv-primary mb-1">ANNA MELKOVA</h1>
            <div className="mb-4">
              <span className="text-xl text-cv-secondary font-medium">Personnel Training</span>
              <p className="text-cv-secondary">Leadership, Staff Development</p>
            </div>

            <div className="my-8">
              <h2 className="section-title">Summary</h2>
              <p className="text-slate-700 leading-relaxed">
                8 years of experience in sales and human resource management with a focus on staff motivation and talent development.
                Skilled in building cohesive teams, implementing motivational systems, and enhancing company success through employee self-realization.
                Certified in teaching methods and e-learning techniques with expertise in gamification for professional environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="tel:+34674503226" className="group flex items-center space-x-3 p-3 rounded-md transition-all duration-300 hover:bg-cv-light-accent">
                <div className="w-10 h-10 rounded-full bg-cv-light-accent flex items-center justify-center group-hover:bg-white transition-colors">
                  <Phone size={18} className="text-cv-primary" />
                </div>
                <div>
                  <p className="text-sm text-cv-secondary">Phone</p>
                  <p className="text-cv-primary font-medium">+34 674503226</p>
                </div>
              </a>

              <a href="mailto:anna.melkova@gmail.com" className="group flex items-center space-x-3 p-3 rounded-md transition-all duration-300 hover:bg-cv-light-accent">
                <div className="w-10 h-10 rounded-full bg-cv-light-accent flex items-center justify-center group-hover:bg-white transition-colors">
                  <Mail size={18} className="text-cv-primary" />
                </div>
                <div>
                  <p className="text-sm text-cv-secondary">Email</p>
                  <p className="text-cv-primary font-medium">anna.melkova@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/anna-melkova1986" target="_blank" rel="noopener" className="group flex items-center space-x-3 p-3 rounded-md transition-all duration-300 hover:bg-cv-light-accent">
                <div className="w-10 h-10 rounded-full bg-cv-light-accent flex items-center justify-center group-hover:bg-white transition-colors">
                  <Linkedin size={18} className="text-cv-primary" />
                </div>
                <div>
                  <p className="text-sm text-cv-secondary">LinkedIn</p>
                  <p className="text-cv-primary font-medium">anna-melkova1986</p>
                </div>
              </a>

              <div className="group flex items-center space-x-3 p-3 rounded-md transition-all duration-300 hover:bg-cv-light-accent">
                <div className="w-10 h-10 rounded-full bg-cv-light-accent flex items-center justify-center group-hover:bg-white transition-colors">
                  <MapPin size={18} className="text-cv-primary" />
                </div>
                <div>
                  <p className="text-sm text-cv-secondary">Location</p>
                  <p className="text-cv-primary font-medium">08027, Barcelona, Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
