
import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    position: "Sr. Manager",
    company: "Muy Nice",
    period: "Dec 2024 – Present",
    responsibilities: [
      "Developed and executed strategic initiatives across multiple domains, including staff motivation, marketing strategy, and new program rollouts.",
      "Led recruiting, hiring, and training initiatives for salon staff.",
      "Client Engagement.",
      "Maintained similar high-level responsibilities and performance standards across multiple roles."
    ]
  },
  {
    position: "Director",
    company: "Drum Class Barcelona",
    period: "Nov 2023 – Dec 2024",
    responsibilities: [
      "Managed the overall project operations, team management, and sales administration.",
      "Trained and coached staff to ensure high-quality service and customer satisfaction.",
      "Achieved profitability of up to 40% within the first month of operation."
    ]
  },
  {
    position: "Salon Manager",
    company: "Sakurami Beauty Salon, Barcelona",
    period: "Jan 2020 – Oct 2023",
    responsibilities: [
      "Led recruiting, hiring, and training initiatives for salon staff.",
      "Developed marketing strategies and improved customer retention.",
      "Increased the new customer base by 1.5x, with a 50% retention rate."
    ]
  },
  {
    position: "Head of Sales",
    company: "Federal Company Komus, St. Petersburg",
    period: "Aug 2017 – Aug 2018",
    responsibilities: [
      "Built the sales department from scratch and managed a team of 8 sales professionals.",
      "Implemented customer acquisition methods and enhanced relationship management standards.",
      "Nurtured 75% of the team to VIP sales executives."
    ]
  },
  {
    position: "Head of Training",
    company: "Federal Company Komus, St. Petersburg",
    period: "Jun 2014 – Aug 2016",
    responsibilities: [
      "Led the training department, managing training budgets and team development programs.",
      "Created a high-performing team and achieved the best departmental ranking across branches in 2015."
    ]
  },
  {
    position: "Training Manager",
    company: "Federal Company Komus, Chelyabinsk",
    period: "Mar 2010 – Aug 2014",
    responsibilities: [
      "Developed and implemented individualized and group training programs.",
      "Improved employee onboarding processes, scaling them to the entire company."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="cv-section">
      <h2 className="section-title flex items-center">
        <Briefcase size={20} className="mr-2" />
        Work Experience
      </h2>
      
      <div className="mt-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="timeline-item opacity-0 animate-slide-in mt-8"
            style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
              <h3 className="text-lg font-medium text-cv-primary">{exp.position}</h3>
              <span className="text-cv-secondary text-sm bg-cv-light-accent px-2 py-0.5 rounded-full inline-block md:ml-2">
                {exp.period}
              </span>
            </div>
            <p className="text-cv-secondary mb-2">{exp.company}</p>
            <ul className="mt-2 space-y-1">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-cv-primary mr-2">•</span>
                  <span className="text-slate-700">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="section-title">Professional Competencies</h2>
        
        <div className="mt-6 space-y-6">
          <div className="bg-white p-6 rounded-md border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-cv-primary mb-3">Teaching and Training</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-cv-primary mr-2">•</span>
                <span className="text-slate-700">Design and execution of training programs for adult learners.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cv-primary mr-2">•</span>
                <span className="text-slate-700">Creation of sector-specific didactic guides and learning materials.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cv-primary mr-2">•</span>
                <span className="text-slate-700">Implementation of e-learning methodologies and online tutoring.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cv-primary mr-2">•</span>
                <span className="text-slate-700">Application of gamification techniques in educational and business contexts.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-md border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-cv-primary mb-3">Personnel Development</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-cv-primary mr-2">•</span>
                <span className="text-slate-700">Design of onboarding programs for new employees.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cv-primary mr-2">•</span>
                <span className="text-slate-700">Identification of skill gaps and training needs assessment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cv-primary mr-2">•</span>
                <span className="text-slate-700">Development of evaluation tools to assess employee competencies.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
