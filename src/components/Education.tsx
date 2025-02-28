
import React from 'react';
import { GraduationCap } from 'lucide-react';

const educations = [
  {
    degree: "Certificate in E-learning for Teachers",
    institution: "EDUCTRADE, Spain",
    period: "May-June 2024",
    details: "50 hours"
  },
  {
    degree: "Certificate in Gamification",
    institution: "Institució Cultural del CIC, Barcelona",
    period: "June-July 2024",
    details: "30 hours"
  },
  {
    degree: "Certificate in Teaching for Professional Training",
    institution: "STUCOM, Spain",
    period: "2023",
    details: ""
  },
  {
    degree: "Master in Public Relations",
    institution: "South Ural State University, Russia",
    period: "2003-2008",
    details: ""
  },
  {
    degree: "Professional Retraining: Spanish Language",
    institution: "South Ural State University, Russia",
    period: "2012-2014",
    details: ""
  },
  {
    degree: "Spanish Language Course",
    institution: "Ole Language Spanish School, Barcelona",
    period: "2018-2020",
    details: ""
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="cv-section">
      <h2 className="section-title flex items-center">
        <GraduationCap size={20} className="mr-2" />
        Education
      </h2>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {educations.map((edu, index) => (
          <div 
            key={index}
            className="bg-white p-5 rounded-md border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="flex flex-col mb-2">
              <h3 className="text-lg font-medium text-cv-primary">{edu.degree}</h3>
              <p className="text-cv-secondary">{edu.institution}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-cv-secondary text-sm">{edu.period}</span>
              {edu.details && (
                <span className="bg-cv-light-accent text-cv-primary text-xs px-2 py-1 rounded-full">
                  {edu.details}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
