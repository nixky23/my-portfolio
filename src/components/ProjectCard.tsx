import React from 'react';
import { Github, ExternalLink, Info, Star } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onDetails: (project: Project) => void;
}

const statusConfig = {
  completed: { label: 'Completed', color: 'text-green-600 dark:text-green-400', dot: 'bg-green-500' },
  'in-progress': { label: 'In Progress', color: 'text-yellow-600 dark:text-yellow-400', dot: 'bg-yellow-500' },
  proposed: { label: 'Proposed', color: 'text-gray-500 dark:text-gray-400', dot: 'bg-gray-400' },
};

const categoryBadge: Record<string, string> = {
  violet: 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-500/20',
  blue:   'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
  cyan:   'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20',
  green:  'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/20',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDetails }) => {
  const catStyle = categoryBadge[project.categoryColor] ?? categoryBadge.blue;
  const status = statusConfig[project.status];

  return (
    <article
      className={`card flex flex-col h-full group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl ${
        project.highlight ? 'border-violet-300 dark:border-violet-500/30 ring-1 ring-violet-200 dark:ring-violet-500/10' : ''
      }`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Accent bar */}
      <div className={`h-1 -mx-6 -mt-6 mb-5 rounded-t-xl bg-gradient-to-r ${
        project.highlight ? 'from-violet-500 to-cyan-500' : 'from-blue-600 to-cyan-500'
      }`} />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${catStyle}`}>
              {project.category}
            </span>
            {project.highlight && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-500/20">
                <Star size={10} className="fill-yellow-500 dark:fill-yellow-400" />
                Final Year Project
              </span>
            )}
          </div>
          <h3 className="text-gray-900 dark:text-white font-bold text-xl leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Status */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className={`w-1.5 h-1.5 rounded-full ${status.dot} ${project.status === 'in-progress' ? 'animate-pulse' : ''}`} />
        <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.slice(0, 5).map(tech => (
          <span key={tech} className="px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-[#1e2535] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#2e3748] font-mono">
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="px-2 py-0.5 rounded text-xs bg-gray-100 dark:bg-[#1e2535] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-[#2e3748] font-mono">
            +{project.technologies.length - 5} more
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-200 dark:border-[#252d3d]">
        <button
          onClick={() => onDetails(project)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`View details for ${project.title}`}
        >
          <Info size={13} /> Project Details
        </button>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-[#1e2535] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#2e3748] hover:border-gray-400 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`GitHub for ${project.title}`}
          >
            <Github size={13} /> GitHub
          </a>
        ) : (
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 dark:bg-[#161b27] text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-[#252d3d] cursor-not-allowed">
            <Github size={13} /> Private
          </span>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20 hover:bg-green-100 dark:hover:bg-green-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
