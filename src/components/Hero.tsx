import React, { useEffect, useState } from 'react';
import { Github, Mail, ArrowDown, Download, ExternalLink } from 'lucide-react';

const ROLES = [
  'Software Engineer',
  'Full-Stack Developer',
  'Flutter Developer',
  'Backend Developer',
];

const ProfileVisual: React.FC = () => (
  <div className="relative w-full max-w-sm mx-auto lg:mx-0 animate-float flex justify-center">
    {/* Outer glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl" />

    {/* Rotating ring */}
    <div
      className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-dashed border-blue-400/20 dark:border-blue-500/20 animate-spin-slow"
      style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    />

    {/* Gradient border frame */}
    <div className="relative p-1 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 shadow-2xl shadow-blue-500/30">
      <div className="p-1 rounded-full bg-gray-50 dark:bg-[#0f1117]">
        <img
          src="/images/profile.jpg"
          alt="IRAKOZE Nicky — Software Engineer"
          className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover object-top"
        />
      </div>
    </div>

    {/* Available badge */}
    <div className="absolute top-4 right-0 sm:right-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/40 flex items-center gap-1.5 border border-green-400/40">
      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      Available for hire
    </div>

    {/* Tech badge */}
    <div className="absolute bottom-6 -left-2 sm:left-0 bg-white dark:bg-[#161b27] border border-gray-200 dark:border-[#252d3d] text-gray-700 dark:text-gray-300 text-xs font-mono px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
      <span className="text-blue-500 dark:text-blue-400 font-bold">{'</>'}</span>
      <span>React · Flutter · Python</span>
    </div>

    {/* Location badge */}
    <div className="absolute bottom-0 right-0 sm:-right-2 bg-white dark:bg-[#161b27] border border-gray-200 dark:border-[#252d3d] text-gray-500 dark:text-gray-400 text-xs px-3 py-1.5 rounded-xl shadow-xl">
      📍 Kigali, Rwanda
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-[#0f1117]"
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 dark:bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/5 dark:bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-6 animate-slide-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
              Open to opportunities
            </div>

            {/* Name */}
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">Hi there, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
                IRAKOZE
                <br />
                <span className="gradient-text">Nicky</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 h-8">
              <span>{displayed}</span>
              <span className="w-0.5 h-7 bg-blue-500 dark:bg-blue-400 animate-blink" aria-hidden="true" />
            </div>

            {/* Tagline */}
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
              Building practical software solutions for real-world problems — from full-stack web
              apps and mobile applications to AI-powered career guidance systems.
            </p>

            {/* Location */}
            <p className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm">
              <span>📍</span> Kicukiro, Kigali, Rwanda
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={() => scrollTo('projects')} className="btn-primary" aria-label="View my projects">
                View My Projects <ExternalLink size={16} />
              </button>
              <a href="/IRAKOZE_Nicky_CV.pdf" download className="btn-secondary" aria-label="Download CV">
                <Download size={16} /> Download CV
              </a>
              <button onClick={() => scrollTo('contact')} className="btn-ghost" aria-label="Contact me">
                Contact Me
              </button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/nixky23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
                aria-label="GitHub profile"
              >
                <Github size={18} />
                <span>nixky23</span>
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="mailto:irakozenicky23@gmail.com"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
                aria-label="Email"
              >
                <Mail size={18} />
                <span>Email me</span>
              </a>
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <ProfileVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
