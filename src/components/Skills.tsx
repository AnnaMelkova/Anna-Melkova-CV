import React from 'react';
import { List } from 'lucide-react';

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Russian", level: "Native", percentage: 100 },
      { name: "Spanish", level: "Fluent", percentage: 85 },
      { name: "English", level: "Intermediate", percentage: 60 }
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      "Team Building",
      "People Management",
      "Project Management",
      "Conflict Resolution",
      "Client Engagement",
      "Coaching and Teaching",
      "Cross-Functional Collaboration"
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="cv-section">
      <h2 className="section-title flex items-center">
        <List size={20} className="mr-2" />
        Skills & Languages
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Language Skills with Progress Bars */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-cv-primary border-b-2 border-cv-light-accent pb-2">
            {skillGroups[0].title}
          </h3>
          <div className="space-y-4">
            {skillGroups[0].skills.map((skill, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-700">{skill.name}</span>
                  <span className="text-cv-primary text-sm">
                    {skill.level}
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden shadow-sm">
                  <div
                    className="h-full bg-cv-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.percentage}%`,
                      transitionDelay: `${0.3 + idx * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills with Badges */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-cv-primary border-b-2 border-cv-light-accent pb-2">
            {skillGroups[1].title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroups[1].skills.map((skill, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 bg-cv-light-accent text-cv-primary rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="bg-cv-light-accent p-6 rounded-lg">
          <h3 className="text-lg font-medium text-cv-primary mb-4">Professional Expertise</h3>
          <div className="space-y-4">
            {['Leadership', 'Training & Development', 'Team Management', 'Sales'].map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-700">{skill}</span>
                  <span className="text-cv-primary text-sm">
                    {90 - index * 10}%
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cv-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${90 - index * 10}%`,
                      transitionDelay: `${0.3 + index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;