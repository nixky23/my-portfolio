import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-gray-100/50 dark:bg-[#161b27]/30" aria-label="Professional experience">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            Work history
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Practical experience building real software products in team environments.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-gray-300 dark:via-[#252d3d] to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex gap-6 sm:gap-8">
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center z-10 flex-shrink-0 border ${
                    exp.type === 'software'
                      ? 'bg-blue-50 dark:bg-blue-500/20 border-blue-300 dark:border-blue-500/40 text-blue-600 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-[#1e2535] border-gray-300 dark:border-[#2e3748] text-gray-500 dark:text-gray-400'
                  }`}>
                    <Briefcase size={20} />
                  </div>
                </div>

                {/* Card */}
                <div className={`card flex-1 ${
                  exp.type === 'software'
                    ? 'border-blue-200 dark:border-blue-500/20'
                    : 'border-gray-200 dark:border-[#252d3d]'
                }`} style={{ animationDelay: `${index * 0.1}s` }}>

                  {/* Badge */}
                  {exp.type === 'software' ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 mb-3">
                      Software Engineering
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-500/10 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500/20 mb-3">
                      Additional Experience
                    </span>
                  )}

                  <div className="mb-3">
                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg leading-snug">{exp.title}</h3>
                    <p className={`font-medium text-sm mt-0.5 ${exp.type === 'software' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-1.5"><Calendar size={13} />{exp.startDate} — {exp.endDate}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} />{exp.location}</span>
                  </div>

                  <ul className="space-y-2" role="list">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        <ChevronRight size={14} className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-[#252d3d]">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  )}


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
