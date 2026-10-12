import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationList } from '../data/education';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-gray-100/50 dark:bg-[#161b27]/30" aria-label="Education">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            Academic background
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            A foundation in software engineering principles, systems design, and practical development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-gray-300 dark:via-[#252d3d] to-transparent hidden sm:block" />

          <div className="space-y-8">
            {educationList.map((edu, index) => (
              <div key={edu.id} className="relative flex gap-6 sm:gap-8">
                <div className="hidden sm:flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center z-10 flex-shrink-0 border ${
                    index === 0
                      ? 'bg-blue-50 dark:bg-blue-500/20 border-blue-300 dark:border-blue-500/40 text-blue-600 dark:text-blue-400'
                      : 'bg-gray-100 dark:bg-[#1e2535] border-gray-300 dark:border-[#2e3748] text-gray-500 dark:text-gray-400'
                  }`}>
                    <GraduationCap size={22} />
                  </div>
                </div>

                <div className={`card flex-1 ${
                  index === 0
                    ? 'border-blue-200 dark:border-blue-500/25'
                    : 'border-gray-200 dark:border-[#252d3d]'
                }`}>
                  {index === 0 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 mb-3">
                      <Award size={11} /> Latest Qualification
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-[#1e2535] text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-[#2e3748] mb-3">
                      <Award size={11} /> High School
                    </span>
                  )}

                  <div className="mb-3">
                    <h3 className="text-gray-900 dark:text-white font-bold text-lg leading-snug">{edu.degree}</h3>
                    <p className={`font-semibold text-sm mt-1 ${index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400 dark:text-gray-500">
                    <span className="flex items-center gap-1.5"><Calendar size={13} />{edu.startYear} — {edu.endYear}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} />{edu.location}</span>
                  </div>

                  {edu.result && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 text-sm font-semibold mb-4">
                      <Award size={14} />{edu.result}
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
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

export default Education;
