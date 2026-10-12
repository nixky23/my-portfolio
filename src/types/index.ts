export interface Project {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  problem: string;
  solution: string;
  myRole: string;
  technologies: string[];
  features: string[];
  challenges: string;
  status: 'completed' | 'in-progress' | 'proposed';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlight?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
  level: 'familiar' | 'comfortable' | 'proficient';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'software' | 'other';
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  result?: string;
  description?: string;
}
