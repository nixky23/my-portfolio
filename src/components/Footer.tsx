import React from 'react';
import { Github, Mail, ArrowUp, Code2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-[#0f1117] border-t border-gray-200 dark:border-[#252d3d]/50" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">
                IRAKOZE<span className="text-blue-500 dark:text-blue-400">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Software Engineer | Full-Stack Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nixky23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#1e2535] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:irakozenicky23@gmail.com"
              aria-label="Send email"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#1e2535] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Mail size={20} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-[#252d3d] hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-[#252d3d]/50 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400 dark:text-gray-500">
            <p>© {currentYear} IRAKOZE Nicky. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with <Heart size={13} className="text-red-500 fill-red-500" /> using React &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
