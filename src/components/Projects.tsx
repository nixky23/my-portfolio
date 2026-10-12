import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import type { Project } from '../types';

const CATEGORIES = ['All', 'AI-Powered Mobile App', 'E-Commerce Web Application', 'Web Application', 'Business Management System'];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-[#0f1117]" aria-label="Featured projects">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            What I've built
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            A selection of projects I've worked on — from internship products to my final-year research project.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter projects">
          <Filter size={16} className="text-gray-400 self-center mr-1" aria-hidden="true" />
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-200 dark:bg-[#1e2535] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-[#252d3d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} onDetails={setSelectedProject} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No projects found for this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">More projects and contributions available on GitHub.</p>
          <a href="https://github.com/nixky23" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View GitHub Profile
          </a>
        </div>
      </div>

      <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
