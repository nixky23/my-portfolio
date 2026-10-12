import React from 'react';
import { GraduationCap, Briefcase, Globe, Heart, Target, Users } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Software Engineering Graduate',
    description: "Bachelor's degree from INES–Ruhengeri, graduating 2026 with a B+ result.",
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-200 dark:border-blue-500/20',
  },
  {
    icon: Briefcase,
    title: 'Internship Experience',
    description: 'Backend & full-stack development intern at MasteryHub of Rwanda — built real products shipped to real users.',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-500/10',
    border: 'border-cyan-200 dark:border-cyan-500/20',
  },
  {
    icon: Target,
    title: 'Practical Problem Solver',
    description: 'I gravitate toward projects that address genuine needs — career guidance, inventory management, e-commerce.',
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-500/10',
    border: 'border-violet-200 dark:border-violet-500/20',
  },
  {
    icon: Globe,
    title: 'Multilingual',
    description: 'Native Kinyarwanda, fluent English, and basic French — comfortable working in diverse teams.',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-500/10',
    border: 'border-green-200 dark:border-green-500/20',
  },
  {
    icon: Heart,
    title: 'Continuous Learner',
    description: 'Committed to improving skills daily — currently exploring AI integration, system design, and clean architecture.',
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-500/10',
    border: 'border-red-200 dark:border-red-500/20',
  },
  {
    icon: Users,
    title: 'Team Collaborator',
    description: 'Experienced working in team environments where communication, code quality, and shared ownership matter.',
    color: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-500/10',
    border: 'border-yellow-200 dark:border-yellow-500/20',
  },
];

const interests = [
  'Full-Stack Web Development', 'Backend API Development',
  'Mobile Applications (Flutter)', 'Database Design',
  'AI & ML Integration', 'Open Source',
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-100/50 dark:bg-[#161b27]/30" aria-label="About me">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Photo + Bio */}
          <div className="space-y-6">
            {/* Profile photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500">
                  <img
                    src="/images/profile.jpg"
                    alt="IRAKOZE Nicky — Software Engineer"
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover object-top bg-gray-200 dark:bg-[#1e2535]"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-[#161b27] border border-gray-200 dark:border-[#252d3d] text-gray-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                  IRAKOZE Nicky · Software Engineer
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
              <p className="text-lg">
                I'm a <span className="text-gray-900 dark:text-white font-semibold">Software Engineering graduate</span> from
                INES–Ruhengeri, Rwanda, with hands-on experience in backend and full-stack
                development. I enjoy building reliable, user-focused applications that solve practical problems.
              </p>
              <p>
                During my internship at{' '}
                <span className="text-blue-600 dark:text-blue-400 font-medium">MasteryHub of Rwanda</span>, I
                contributed to two real-world products — Bobo eCommerce and HomeNow. I worked on
                backend APIs, database integration, and full-stack feature development in a collaborative team.
              </p>
              <p>
                My final-year project,{' '}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">The Open Room</span>, is an
                AI-powered mobile application designed to help young people in Rwanda make
                better-informed career decisions.
              </p>
              <p>
                I'm at the beginning of my professional career and actively looking for
                opportunities where I can contribute meaningfully and grow alongside experienced engineers.
              </p>
            </div>

            {/* Interests */}
            <div className="pt-2">
              <h3 className="text-gray-500 dark:text-gray-400 font-semibold mb-3 text-sm tracking-wide uppercase">
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map(interest => (
                  <span key={interest} className="tag">{interest}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <h3 className="text-gray-500 dark:text-gray-400 font-semibold mb-3 text-sm tracking-wide uppercase">
                Languages
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  { lang: 'Kinyarwanda', level: 'Native', width: 'w-full' },
                  { lang: 'English', level: 'Fluent', width: 'w-5/6' },
                  { lang: 'French', level: 'Basic', width: 'w-1/3' },
                ].map(({ lang, level, width }) => (
                  <div key={lang} className="flex items-center gap-3">
                    <span className="text-gray-700 dark:text-gray-300 text-sm w-28">{lang}</span>
                    <div className="flex-1 bg-gray-200 dark:bg-[#1e2535] rounded-full h-1.5">
                      <div className={`${width} h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full`} />
                    </div>
                    <span className="text-gray-400 dark:text-gray-500 text-xs w-12 text-right">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`card ${item.border} hover:scale-[1.02] transition-transform duration-200`}>
                  <div className={`w-10 h-10 rounded-lg ${item.bg} border ${item.border} flex items-center justify-center mb-3`}>
                    <Icon size={20} className={item.color} />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
