import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'the-open-room',
    title: 'The Open Room',
    category: 'AI-Powered Mobile App',
    categoryColor: 'violet',
    description:
      'An AI-based mobile application designed to enhance career exploration and empowerment among young people in Kigali, Rwanda. It helps students, graduates, and job seekers make more informed career decisions by connecting their interests, skills, and goals with relevant career information and learning opportunities.',
    problem:
      'Many young Rwandans struggle to make informed career decisions due to limited access to personalised guidance, relevant career information, and mentorship. This leads to poor career alignment, low job readiness, and missed opportunities.',
    solution:
      'The Open Room provides a mobile platform where users can assess their personality and skills, explore career paths, access curated learning resources, and receive AI-assisted career guidance tailored to their interests and goals.',
    myRole:
      'This is my final-year software engineering project. I led the full design and development process — from requirements analysis and system architecture to UI/UX design and implementation using Flutter and a Python/Flask backend.',
    technologies: ['Flutter', 'Dart', 'Python', 'Flask', 'SQLite', 'REST API'],
    features: [
      'Personalised career recommendations based on user profile',
      'Personality and skills self-assessment module',
      'Career path exploration and detailed career information',
      'Curated learning resources and skill development content',
      'Mentorship and career guidance section',
      'Job-market information and job-readiness support',
      'AI-assisted career guidance integration',
    ],
    challenges:
      'Designing a meaningful personalisation system with limited training data was the primary challenge. I focused on building a structured assessment model and mapping career paths logically before introducing AI-assisted recommendations.',
    status: 'in-progress',
    githubUrl: 'https://github.com/nixky23',
    featured: true,
    highlight: true,
  },
  {
    id: 'bobo-ecommerce',
    title: 'Bobo eCommerce',
    category: 'E-Commerce Web Application',
    categoryColor: 'blue',
    description:
      'A web platform designed to sell electronic devices online. The project focuses on making it easier for customers to explore products, manage shopping carts, and complete the online shopping process.',
    problem:
      'Customers buying electronics needed a reliable online platform where they could browse products, compare specifications, and complete purchases without friction.',
    solution:
      'Bobo eCommerce provides a full shopping experience — from product discovery and search to cart management and checkout — backed by a robust backend API and a PostgreSQL database hosted on NeonDB.',
    myRole:
      'I contributed as a Backend Developer and Full-Stack Development Intern at MasteryHub of Rwanda. My work involved building backend APIs, integrating the database, implementing user authentication, and contributing to full-stack feature development.',
    technologies: ['React', 'JavaScript', 'Python', 'PostgreSQL', 'NeonDB', 'REST API'],
    features: [
      'Product listings and detailed product pages',
      'Product search and category filtering',
      'User registration and login with authentication',
      'Shopping cart management',
      'Checkout and payment workflow',
      'User profile management',
      'Password recovery flow',
      'Backend APIs and database integration',
    ],
    challenges:
      'Coordinating backend API design with frontend requirements in a team environment required clear communication and consistent data contracts. I learned to document API endpoints and handle edge cases in authentication flows.',
    status: 'completed',
    githubUrl: 'https://github.com/nixky23',
    featured: true,
    highlight: false,
  },
  {
    id: 'homenow',
    title: 'HomeNow',
    category: 'Web Application',
    categoryColor: 'cyan',
    description:
      'A software project focused on housing and local community needs in Rwanda. It explores how digital technology can help users access relevant housing-related information and services.',
    problem:
      'Finding accurate, accessible housing information in Rwanda can be difficult. Prospective tenants and homeowners often rely on informal channels, which are slow and unreliable.',
    solution:
      'HomeNow aims to provide a digital platform where users can access housing-related information and services, making the process of finding suitable housing more transparent and efficient.',
    myRole:
      'I contributed to this project as a developer during my internship at MasteryHub of Rwanda, working on both backend and full-stack development tasks alongside the team.',
    technologies: ['React', 'JavaScript', 'PostgreSQL', 'REST API'],
    features: [
      'Housing information and listing pages',
      'User registration and authentication',
      'Search and filter functionality',
      'Backend API development',
      'Database integration',
    ],
    challenges:
      'Understanding the domain requirements for housing services in the Rwandan context and translating them into clear technical features was an important part of this project.',
    status: 'in-progress',
    githubUrl: 'https://github.com/nixky23',
    featured: true,
    highlight: false,
  },
  {
    id: 'catering-inventory',
    title: 'Catering Equipment Inventory System',
    category: 'Business Management System',
    categoryColor: 'green',
    description:
      'A system designed to help a catering company accurately record, monitor, and track equipment entering and leaving its store. It improves accountability, reduces equipment losses, and provides clearer records of equipment used during events.',
    problem:
      'A catering company was experiencing consistent losses of plates, cups, and other equipment. Missing items, breakage during transportation, and incomplete records made it impossible to hold staff accountable or maintain accurate inventory.',
    solution:
      'This management system provides a structured way to register equipment, record what is issued and returned for each event, report broken or missing items, and generate inventory reports — creating clear accountability at every step.',
    myRole:
      'I designed and developed this system, from requirements gathering and database design to building the full application. The goal was to deliver a practical tool that directly addressed the company\'s operational problem.',
    technologies: ['Python', 'SQLite', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Equipment registration and inventory management',
      'Recording equipment issued for each event',
      'Recording equipment returned after events',
      'Broken and missing item reporting',
      'Event-based equipment tracking',
      'User roles and accountability (storekeeper, admin)',
      'Inventory status reports',
    ],
    challenges:
      'Designing a simple, practical interface that non-technical staff could use confidently was the main challenge. I focused on clear labels, minimal steps per task, and immediate feedback for every action.',
    status: 'completed',
    githubUrl: 'https://github.com/nixky23',
    featured: true,
    highlight: false,
  },
];
