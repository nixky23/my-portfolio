import type { Education } from '../types';

export const educationList: Education[] = [
  {
    id: 'ines',
    degree: "Bachelor's Degree in Software Engineering",
    institution: 'INES–Ruhengeri',
    location: 'Ruhengeri (Musanze), Rwanda',
    startYear: '2022',
    endYear: '2026',
    result: 'B+',
    description:
      'Four-year undergraduate programme covering software design and architecture, full-stack web development, mobile application development, database systems, algorithms and data structures, software testing, and project management. Final-year project: The Open Room — an AI-powered career guidance mobile application.',
  },
  {
    id: 'lycee',
    degree: 'High School Certificate — Software Development',
    institution: 'Lycée de Kicukiro APADE',
    location: 'Kicukiro, Kigali, Rwanda',
    startYear: '2019',
    endYear: '2022',
    result: 'Final-year aggregate: 32',
    description:
      'Specialised in Software Development, gaining foundational skills in programming, database management, web development, and software engineering principles.',
  },
];
