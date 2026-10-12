import React from 'react';
import { Github, ExternalLink, Star, GitFork, Code2 } from 'lucide-react';

const repos = [
  {
    name: 'the-open-room',
    description: 'AI-powered career guidance mobile application built with Flutter and Python/Flask.',
    topics: ['Flutter', 'Dart', 'Python', 'AI', 'Career'],
    url: 'https://github.com/nixky23',
  },
  {
    name: 'bobo-ecommerce',
    description: 'E-commerce platform for electronic devices with React frontend and PostgreSQL backend.',
    topics: ['React', 'PostgreSQL', 'REST API', 'eCommerce'],
    url: 'https://github.com/nixky23',
  },
  {
    name: 'catering-inventory',
    description: 'Equipment inventory and tracking management system for a catering company.',
    topics: ['Python', 'Flask', 'SQLite', 'Management'],
    url: 'https://github.com/nixky23',
  },
];

const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="section-padding bg-gray-50 dark:bg-[#0f1117]" aria-label="GitHub activity">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            Open source
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            GitHub <span className="gradient-text">Profile</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            My code, projects, and contributions live on GitHub.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Profile card */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="card flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-2xl">IN</span>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <h3 className="text-gray-900 dark:text-white font-bold text-xl">IRAKOZE Nicky</h3>
                <span className="text-gray-400 dark:text-gray-500 text-sm font-mono">@nixky23</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                Software Engineering graduate from INES–Ruhengeri, Rwanda. Building practical
                web and mobile applications. Open to collaboration and new opportunities.
              </p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                <span className="tag">📍 Kigali, Rwanda</span>
                <span className="tag">🎓 Software Engineering</span>
                <span className="tag">💼 Open to work</span>
              </div>
              <a
                href="https://github.com/nixky23"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
                aria-label="View GitHub profile"
              >
                <Github size={16} /> Visit GitHub Profile <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Repos */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-5 flex items-center gap-2">
            <Code2 size={18} className="text-blue-500 dark:text-blue-400" />
            Featured Repositories
          </h3>
          <div className="space-y-4">
            {repos.map(repo => (
              <div key={repo.name} className="card flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-mono font-semibold text-sm hover:text-blue-500 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      {repo.name}
                    </a>
                    <ExternalLink size={12} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{repo.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.map(topic => (
                      <span key={topic} className="px-2 py-0.5 rounded text-xs bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/15 font-mono">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col gap-4 sm:gap-2 text-gray-400 dark:text-gray-500 text-xs flex-shrink-0">
                  <span className="flex items-center gap-1"><Star size={12} />—</span>
                  <span className="flex items-center gap-1"><GitFork size={12} />—</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 dark:text-gray-600 text-xs mt-6">
            Stars and fork counts are not shown to avoid displaying inaccurate data. Visit GitHub for live stats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
