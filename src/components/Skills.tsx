import React, { useState } from 'react';
import { Code2, Monitor, Server, Smartphone, Database, Wrench } from 'lucide-react';
import { skillCategories, levelColors, levelLabels } from '../data/skills';

const iconMap: Record<string, React.ElementType> = {
  Code2, Monitor, Server, Smartphone, Database, Wrench,
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory === null
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-[#0f1117]" aria-label="Technical skills">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Tools and technologies I'm comfortable using and can speak to confidently.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-[#1e2535] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-[#252d3d]'
            }`}
          >
            All
          </button>
          {skillCategories.map(cat => {
            const Icon = iconMap[cat.icon];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(prev => prev === cat.id ? null : cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-[#1e2535] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-[#252d3d]'
                }`}
              >
                {Icon && <Icon size={14} />}
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(category => {
            const Icon = iconMap[category.icon];
            return (
              <div key={category.id} className="card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center">
                    {Icon && <Icon size={20} className="text-blue-600 dark:text-blue-400" />}
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map(skill => (
                    <div key={skill.name} className="flex items-center justify-between gap-3">
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {(['familiar', 'comfortable', 'proficient'] as const).map((lvl, i) => {
                            const levels = ['familiar', 'comfortable', 'proficient'];
                            const filled = i <= levels.indexOf(skill.level);
                            return (
                              <div
                                key={lvl}
                                className={`w-2 h-2 rounded-full ${filled ? levelColors[skill.level] : 'bg-gray-300 dark:bg-[#2e3748]'}`}
                              />
                            );
                          })}
                        </div>
                        <span className="text-xs text-gray-400 dark:text-gray-500 w-20 text-right">
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-10">
          {Object.entries(levelLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className={`w-2.5 h-2.5 rounded-full ${levelColors[key]}`} />
              {label}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 dark:text-gray-600 text-xs mt-6 max-w-lg mx-auto">
          Proficiency levels are self-assessed and reflect what I'm comfortable discussing and working with in a real project.
        </p>
      </div>
    </section>
  );
};

export default Skills;
