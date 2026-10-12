import React, { useState } from 'react';
import {
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  ChevronRight,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  ExternalLink,
  Phone,
  Mail,
  Github,
} from 'lucide-react';

/* ─── data ─────────────────────────────────────────────────── */

const experience = [
  {
    title: 'Backend Developer & Full-Stack Development Intern',
    company: 'MasteryHub of Rwanda',
    period: 'March 2026 – June 2026',
    location: 'Rwanda',
    bullets: [
      'Contributed to the backend development of Bobo eCommerce, implementing REST API endpoints and integrating a PostgreSQL (NeonDB) database.',
      'Participated in the development of HomeNow, a web application addressing housing and local community needs in Rwanda.',
      'Developed and integrated application features, ensuring reliable communication between frontend and backend components.',
      'Collaborated with team members in a structured development environment, participating in feature planning and code reviews.',
      'Applied REST API design principles, user authentication concepts, and relational database management practices.',
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'NeonDB', 'REST API', 'JavaScript', 'Git'],
    type: 'software',
  },
  {
    title: 'Hardware Store Assistant',
    company: 'Hardware Store — Gacuriro–Gisozi',
    period: 'October 2022 – June 2023',
    location: 'Kigali, Rwanda',
    bullets: [
      'Assisted with day-to-day store operations including stock monitoring, inventory record-keeping, and customer service.',
      'Demonstrated reliability and strong organizational skills while managing responsibilities independently.',
      'Developed communication and teamwork skills in a fast-paced customer-facing environment.',
    ],
    tech: [],
    type: 'other',
  },
];

const projects = [
  {
    name: 'The Open Room',
    tag: 'Final Year Project',
    tagColor: 'violet',
    status: 'in-progress',
    description: 'AI-powered mobile application helping young people in Kigali explore career paths and make informed career decisions.',
    bullets: [
      'Designed and developed personality & skills self-assessment module and personalized career recommendations.',
      'Integrated a Python/Flask backend with SQLite for data storage and career-guidance logic.',
      'Built career-path exploration interface and job-readiness support content within the Flutter frontend.',
    ],
    tech: ['Flutter', 'Dart', 'Python', 'Flask', 'SQLite', 'REST API'],
  },
  {
    name: 'Bobo eCommerce',
    tag: 'Internship Project',
    tagColor: 'blue',
    status: 'completed',
    description: 'E-commerce platform for online sales of electronic devices built during MasteryHub internship.',
    bullets: [
      'Implemented REST APIs for product management, user authentication, shopping cart, and checkout.',
      'Integrated PostgreSQL (NeonDB) database for product listings, user accounts, and order management.',
    ],
    tech: ['React', 'JavaScript', 'Python', 'PostgreSQL', 'NeonDB'],
  },
  {
    name: 'HomeNow',
    tag: 'Internship Project',
    tagColor: 'cyan',
    status: 'in-progress',
    description: 'Web application focused on housing and local community needs in Rwanda.',
    bullets: [
      'Worked on backend API development and full-stack feature implementation as part of the internship team.',
      'Implemented user authentication, search/filter functionality, and database integration.',
    ],
    tech: ['React', 'JavaScript', 'PostgreSQL', 'REST API'],
  },
  {
    name: 'Catering Equipment Inventory System',
    tag: 'Personal Project',
    tagColor: 'green',
    status: 'completed',
    description: 'Business management system to record, monitor, and track catering equipment across events.',
    bullets: [
      'Implemented equipment registration, issue/return workflows, broken item reporting, and inventory reports.',
      'Built user role management (storekeeper, admin) with accountability-focused workflows.',
    ],
    tech: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
  },
];

const skills = [
  { label: 'Languages', value: 'Python, JavaScript, SQL, PHP, Dart' },
  { label: 'Frontend', value: 'React, HTML/CSS, Tailwind CSS, Responsive Design' },
  { label: 'Backend', value: 'Python/Flask, REST API Development, Auth Concepts' },
  { label: 'Mobile', value: 'Flutter, Dart' },
  { label: 'Databases', value: 'PostgreSQL, SQLite, NeonDB, Relational DB Design' },
  { label: 'Tools', value: 'Git, GitHub, VS Code, API Testing, Agile Concepts' },
  { label: 'Design', value: 'Adobe Illustrator, Adobe Photoshop, Graphic Design' },
];

const education = [
  {
    degree: "Bachelor's Degree in Software Engineering",
    institution: 'INES–Ruhengeri',
    location: 'Musanze, Rwanda',
    period: '2022 – 2026',
    result: 'Result: B+',
  },
  {
    degree: 'High School Certificate — Software Development',
    institution: 'Lycée de Kicukiro APADE',
    location: 'Kicukiro, Kigali',
    period: '2019 – 2022',
    result: 'Final-Year Aggregate: 32',
  },
];

/* ─── helpers ───────────────────────────────────────────────── */

const tagColorMap: Record<string, string> = {
  violet: 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-500/20',
  blue:   'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
  cyan:   'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20',
  green:  'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/20',
};

/* ─── sub-components ────────────────────────────────────────── */

const SectionHeading: React.FC<{ icon: React.ElementType; label: string }> = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center flex-shrink-0">
      <Icon size={16} className="text-blue-600 dark:text-blue-400" />
    </div>
    <h3 className="text-gray-900 dark:text-white font-bold text-base tracking-wide uppercase text-sm">
      {label}
    </h3>
    <div className="flex-1 h-px bg-gray-200 dark:bg-[#252d3d]" />
  </div>
);

/* ─── main component ─────────────────────────────────────────── */

const Resume: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-[#0f1117]" aria-label="Resume / CV">
      <div className="section-container">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            My Resume
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            CV &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mt-4">
            A full overview of my experience, projects, skills, and education — or download the PDF version.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />

          {/* Download button */}
          <div className="flex justify-center mt-6">
            <a
              href="/IRAKOZE_Nicky_CV.pdf"
              download="IRAKOZE_Nicky_CV.pdf"
              className="btn-primary shadow-lg shadow-blue-500/20"
              aria-label="Download CV as PDF"
            >
              <Download size={18} />
              Download Full CV (PDF)
            </a>
          </div>
        </div>

        {/* ── CV card ── */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#161b27] border border-gray-200 dark:border-[#252d3d] rounded-2xl shadow-xl shadow-black/5 dark:shadow-black/30 overflow-hidden">

            {/* CV header strip */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-white font-extrabold text-2xl tracking-tight">IRAKOZE Nicky</h2>
                  <p className="text-blue-100 text-sm font-medium mt-1">
                    Software Engineer · Full-Stack Developer · Graphic Designer
                  </p>
                </div>
                <div className="text-sm text-blue-100 space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-blue-200" />
                    <a href="mailto:irakozenicky23@gmail.com" className="hover:text-white transition-colors">
                      irakozenicky23@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-blue-200" />
                    <span>+250 782 133 566</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github size={13} className="text-blue-200" />
                    <a href="https://github.com/nixky23" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      github.com/nixky23
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-blue-200" />
                    <span>Kicukiro, Kigali, Rwanda</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-7 space-y-8">

              {/* ── Summary ── */}
              <div>
                <SectionHeading icon={Code2} label="Professional Summary" />
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Recent Software Engineering graduate from INES–Ruhengeri (B+, 2026) with practical
                  internship experience in backend and full-stack web development at MasteryHub of Rwanda.
                  Contributed to two real-world products — an e-commerce platform and a housing web
                  application — gaining hands-on exposure to REST API development, database integration,
                  and collaborative software delivery. Also a professional graphic designer proficient in
                  Adobe Illustrator and Photoshop. Passionate about building reliable, user-focused
                  applications across web, mobile, and AI-powered domains.
                </p>
              </div>

              {/* ── Skills ── */}
              <div>
                <SectionHeading icon={Code2} label="Technical Skills" />
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {skills.map(s => (
                    <div key={s.label} className="flex gap-2 text-sm">
                      <span className="text-gray-900 dark:text-white font-semibold min-w-[80px] flex-shrink-0">{s.label}:</span>
                      <span className="text-gray-600 dark:text-gray-400">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Experience ── */}
              <div>
                <SectionHeading icon={Briefcase} label="Professional Experience" />
                <div className="space-y-6">
                  {experience.map(exp => (
                    <div key={exp.title} className={`pl-4 border-l-2 ${exp.type === 'software' ? 'border-blue-400 dark:border-blue-500' : 'border-gray-300 dark:border-[#2e3748]'}`}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <div>
                          <span className="text-gray-900 dark:text-white font-bold text-sm">{exp.title}</span>
                          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm ml-2">· {exp.company}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                          <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                          <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                        </div>
                      </div>
                      <ul className="space-y-1 mt-2">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <ChevronRight size={13} className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      {exp.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {exp.tech.map(t => (
                            <span key={t} className="tag text-xs">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Projects ── */}
              <div>
                <SectionHeading icon={ExternalLink} label="Software Projects" />
                <div className="space-y-5">
                  {projects.map(p => (
                    <div key={p.name} className="rounded-xl border border-gray-200 dark:border-[#252d3d] bg-gray-50 dark:bg-[#0f1117]/50 overflow-hidden">
                      {/* Project header */}
                      <button
                        onClick={() => setExpanded(expanded === p.name ? null : p.name)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-[#1e2535]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        aria-expanded={expanded === p.name}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Status dot */}
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${p.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
                          <span className="text-gray-900 dark:text-white font-bold text-sm">{p.name}</span>
                          <span className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${tagColorMap[p.tagColor]}`}>
                            {p.tag}
                          </span>
                          <span className={`text-xs font-medium ${p.status === 'completed' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                            {p.status === 'completed' ? (
                              <span className="flex items-center gap-1"><CheckCircle2 size={11} /> Completed</span>
                            ) : (
                              <span className="flex items-center gap-1"><Clock size={11} /> In Progress</span>
                            )}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
                          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${expanded === p.name ? 'rotate-90' : ''}`}
                        />
                      </button>

                      {/* Expanded details */}
                      {expanded === p.name && (
                        <div className="px-4 pb-4 border-t border-gray-200 dark:border-[#252d3d]">
                          <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 mb-2">{p.description}</p>
                          <ul className="space-y-1 mb-3">
                            {p.bullets.map((b, i) => (
                              <li key={i} className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                <ChevronRight size={13} className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tech.map(t => (
                              <span key={t} className="tag text-xs">{t}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Education ── */}
              <div>
                <SectionHeading icon={GraduationCap} label="Education" />
                <div className="space-y-4">
                  {education.map(edu => (
                    <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <p className="text-gray-900 dark:text-white font-bold text-sm">{edu.degree}</p>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{edu.institution} · {edu.location}</p>
                        <p className="text-green-600 dark:text-green-400 font-semibold text-xs mt-0.5">{edu.result}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">
                        <Calendar size={11} />{edu.period}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Languages ── */}
              <div>
                <SectionHeading icon={Code2} label="Languages" />
                <div className="flex flex-wrap gap-6">
                  {[
                    { lang: 'Kinyarwanda', level: 'Native' },
                    { lang: 'English', level: 'Fluent' },
                    { lang: 'French', level: 'Basic' },
                  ].map(({ lang, level }) => (
                    <div key={lang} className="flex items-center gap-2 text-sm">
                      <span className="text-gray-900 dark:text-white font-semibold">{lang}</span>
                      <span className="text-gray-400 dark:text-gray-500">— {level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Footer bar ── */}
              <div className="pt-4 border-t border-gray-200 dark:border-[#252d3d] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 dark:text-gray-500 text-xs">
                  References available on request
                </p>
                <a
                  href="/IRAKOZE_Nicky_CV.pdf"
                  download="IRAKOZE_Nicky_CV.pdf"
                  className="btn-secondary text-sm"
                  aria-label="Download CV PDF"
                >
                  <Download size={15} />
                  Download PDF
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
