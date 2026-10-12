import React, { useEffect, useRef } from 'react';
import { X, Github, ExternalLink, ChevronRight, Lightbulb, Target, User, Cpu, Star, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Project } from '../types';

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

const statusConfig = {
  completed: { label: 'Completed', icon: CheckCircle2, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-500/10', border: 'border-green-200 dark:border-green-500/20' },
  'in-progress': { label: 'In Progress', icon: AlertCircle, color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-500/10', border: 'border-yellow-200 dark:border-yellow-500/20' },
  proposed: { label: 'Proposed', icon: Lightbulb, color: 'text-gray-500 dark:text-gray-400', bg: 'bg-gray-100 dark:bg-gray-500/10', border: 'border-gray-300 dark:border-gray-500/20' },
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!project) return null;

  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end" role="dialog" aria-modal="true" aria-label={`Details for ${project.title}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Panel */}
      <div
        className="relative w-full max-w-2xl h-full bg-white dark:bg-[#161b27] border-l border-gray-200 dark:border-[#252d3d] overflow-y-auto shadow-2xl"
        style={{ animation: 'slideInFromRight 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-[#161b27]/95 backdrop-blur-sm border-b border-gray-200 dark:border-[#252d3d] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-0.5">{project.category}</p>
            <h2 className="text-gray-900 dark:text-white font-bold text-xl truncate">{project.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1e2535] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${status.bg} ${status.color} border ${status.border}`}>
              <StatusIcon size={13} />{status.label}
            </div>
            {project.highlight && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-500/20">
                <Star size={12} className="fill-yellow-500 dark:fill-yellow-400" /> Final Year Project
              </div>
            )}
          </div>

          {[
            { label: 'Overview', icon: Cpu, iconColor: 'text-blue-600 dark:text-blue-400', iconBg: 'bg-blue-50 dark:bg-blue-500/20', text: project.description },
            { label: 'Problem Statement', icon: AlertCircle, iconColor: 'text-red-600 dark:text-red-400', iconBg: 'bg-red-50 dark:bg-red-500/20', text: project.problem },
            { label: 'Solution', icon: Lightbulb, iconColor: 'text-green-600 dark:text-green-400', iconBg: 'bg-green-50 dark:bg-green-500/20', text: project.solution },
            { label: 'My Role & Contributions', icon: User, iconColor: 'text-cyan-600 dark:text-cyan-400', iconBg: 'bg-cyan-50 dark:bg-cyan-500/20', text: project.myRole },
          ].map(({ label, icon: Icon, iconColor, iconBg, text }) => (
            <section key={label} aria-label={label}>
              <h3 className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold mb-3">
                <div className={`w-6 h-6 rounded ${iconBg} flex items-center justify-center`}>
                  <Icon size={13} className={iconColor} />
                </div>
                {label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{text}</p>
            </section>
          ))}

          {/* Features */}
          <section aria-label="Key features">
            <h3 className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold mb-3">
              <div className="w-6 h-6 rounded bg-violet-50 dark:bg-violet-500/20 flex items-center justify-center">
                <Target size={13} className="text-violet-600 dark:text-violet-400" />
              </div>
              Key Features
            </h3>
            <ul className="space-y-2" role="list">
              {project.features.map((feat, i) => (
                <li key={i} className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <ChevronRight size={14} className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </section>

          {/* Tech */}
          <section aria-label="Technologies used">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-gray-100 dark:bg-[#1e2535] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#2e3748]">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section aria-label="Challenges">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Challenges & Lessons Learned</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
          </section>

          {/* Links */}
          <section className="pt-2">
            <div className="flex flex-wrap gap-3">
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  <Github size={16} /> GitHub Repository
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-gray-200 dark:border-[#252d3d] text-gray-400 cursor-not-allowed">
                  <Github size={16} /> Repository not public yet
                </div>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
