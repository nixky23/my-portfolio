import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 'proficient' },
      { name: 'JavaScript', level: 'proficient' },
      { name: 'TypeScript', level: 'comfortable' },
      { name: 'SQL', level: 'comfortable' },
      { name: 'PHP', level: 'familiar' },
      { name: 'Dart', level: 'comfortable' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Monitor',
    skills: [
      { name: 'React', level: 'comfortable' },
      { name: 'HTML & CSS', level: 'proficient' },
      { name: 'Tailwind CSS', level: 'comfortable' },
      { name: 'Responsive Design', level: 'comfortable' },
      { name: 'JavaScript (DOM)', level: 'comfortable' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'Server',
    skills: [
      { name: 'Python / Flask', level: 'comfortable' },
      { name: 'REST API Design', level: 'comfortable' },
      { name: 'Authentication & Auth', level: 'familiar' },
      { name: 'Node.js (basics)', level: 'familiar' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter', level: 'comfortable' },
      { name: 'Dart', level: 'comfortable' },
      { name: 'Mobile UI Design', level: 'familiar' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'comfortable' },
      { name: 'SQLite', level: 'comfortable' },
      { name: 'NeonDB', level: 'familiar' },
      { name: 'Database Design', level: 'comfortable' },
      { name: 'SQL Queries', level: 'comfortable' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'comfortable' },
      { name: 'VS Code', level: 'proficient' },
      { name: 'API Testing', level: 'comfortable' },
      { name: 'Debugging', level: 'comfortable' },
      { name: 'Agile Concepts', level: 'familiar' },
    ],
  },
];

export const levelLabels: Record<string, string> = {
  familiar: 'Familiar',
  comfortable: 'Comfortable',
  proficient: 'Proficient',
};

export const levelColors: Record<string, string> = {
  familiar: 'bg-gray-500',
  comfortable: 'bg-blue-500',
  proficient: 'bg-cyan-500',
};
