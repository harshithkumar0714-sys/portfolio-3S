import { SkillCategory, ProjectItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'HARSHITH KUMAR BV',
  shortName: 'HK.',
  title: 'AI & Data Science Student Building for the Web',
  eyebrow: 'ENGINEER & BUILDER',
  tagline: 'AI & DS @ REVA',
  statusPill: 'Open to Full-Stack Development Internships',
  bio: 'Engineering student focused on full-stack development, problem solving, and building practical software systems from the database layer to user interfaces.',
  githubUrl: 'https://github.com/harshithkumar0714-sys',
  linkedinUrl: 'https://www.linkedin.com/in/harshith-kumar-bv-598b46430',
  email: 'HARSHITHKUMAR0714@GMAIL.COM',
  phone: '+91 8660554650',
  location: 'Bengaluru / Tumkur, Karnataka, India',
  metrics: [
    { label: 'B.Tech @ REVA', value: '3rd Sem', color: 'text-primary' },
    { label: 'PUC • SSLC', value: '96.8% • 97.6%', color: 'text-tertiary' },
    { label: 'Certifications', value: '3x IBM', color: 'text-secondary' },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    number: '01 / Foundation',
    categoryLabel: 'Programming',
    title: 'Programming',
    description: 'General-purpose algorithmic programming and structured computational logic.',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 'Comfortable' },
      { name: 'C', level: 'Working Knowledge' },
    ],
  },
  {
    id: 'web',
    number: '02 / Interface',
    categoryLabel: 'Web Development',
    title: 'Web Development',
    description: 'Building responsive, semantic, and interactive browser user experiences.',
    icon: 'Globe',
    skills: [
      { name: 'HTML5 & Semantic Web', level: 'Comfortable' },
      { name: 'CSS3 & Responsive Styling', level: 'Comfortable' },
      { name: 'JavaScript (ES6+)', level: 'Building & Practicing' },
    ],
  },
  {
    id: 'database',
    number: '03 / Data Layer',
    categoryLabel: 'Database & Backend',
    title: 'Database & Backend',
    description: 'Structured storage, schema integrity, and relational persistence.',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 'Working Knowledge' },
      { name: 'Relational Schema Design', level: 'Working Knowledge' },
      { name: 'REST API Integration', level: 'Building' },
    ],
  },
  {
    id: 'tools',
    number: '04 / Tooling',
    categoryLabel: 'Tools & Workflow',
    title: 'Tools & Workflow',
    description: 'Daily engineering instruments for authoring, version control, and debugging.',
    icon: 'Wrench',
    skills: [
      { name: 'Visual Studio Code', level: 'Comfortable' },
      { name: 'Git & Version Control', level: 'Working Knowledge' },
      { name: 'GitHub Collaboration', level: 'Active Use' },
    ],
  },
  {
    id: 'core-cs',
    number: '05 / CS Core',
    categoryLabel: 'Core CS Fundamentals',
    title: 'Core CS Fundamentals',
    description: 'Reasoning through complexity, runtime bottlenecks, and test-driven fixes.',
    icon: 'Cpu',
    skills: [
      { name: 'Analytical Problem Solving', level: 'Comfortable' },
      { name: 'Root Cause Debugging', level: 'Working Knowledge' },
      { name: 'Data Structures (Linear)', level: 'Working Knowledge' },
    ],
  },
];

export const CURRENTLY_STRENGTHENING = [
  { name: 'Trees & Graph DSA', color: 'text-primary' },
  { name: 'Relational Indexing', color: 'text-primary' },
  { name: 'Async JS & Event Loop', color: 'text-tertiary' },
  { name: 'MVC Patterns', color: 'text-secondary' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'restaurant-system',
    number: 'System 01',
    title: 'Restaurant Management & Web System',
    category: 'Full-Stack Web & Database',
    description:
      'A fully functional restaurant web system developed with a customized client ordering interface, administrative kitchen order management, real-time table status tracking, and structured MySQL database schema integration. Built locally as a complete working system and currently being prepared for deployment.',
    tags: [
      'HTML5',
      'CSS3 Modern Layouts',
      'JavaScript (DOM & Fetch)',
      'MySQL Database',
      'REST API Integration',
    ],
    githubUrl: 'https://github.com/harshithkumar0714-sys',
    featured: true,
    problemSolved:
      'Eliminated paper ticket latency and manual billing mismatch through centralized relational data.',
    keyTakeaway:
      'Gained hands-on experience handling asynchronous UI state alongside SQL atomic transactions.',
  },
  {
    id: 'graphic-editor',
    number: 'System 02',
    title: '2-D Graphic Editor',
    category: 'Systems Programming',
    description:
      'An interactive vector-based 2D shape manipulation tool engineered in C. Designed with efficient coordinate transforms, dynamic memory allocation for primitives, and interactive shape rendering.',
    tags: ['C', 'Pointers & Memory', '2D Algorithms'],
    githubUrl: 'https://github.com/harshithkumar0714-sys',
    featured: false,
    highlights: [
      'Interactive polygon, circle, and polyline generation with dynamic coordinate update.',
      'Robust pointer-managed shape linked-list structure preventing memory leaks.',
    ],
  },
  {
    id: 'portfolio-showcase',
    number: 'System 03',
    title: 'Personal Portfolio Showcase',
    category: 'Frontend Engineering',
    description:
      'A modern responsive developer showcase engineered from scratch with zero framework bloat, semantic HTML5, pure CSS variables, and fluid dark-mode design system.',
    tags: ['HTML5', 'CSS3', 'Vanilla JS'],
    githubUrl: 'https://github.com/harshithkumar0714-sys',
    featured: false,
    highlights: [
      'Optimized asset delivery, zero external runtime JS libraries, instant load speeds.',
      'Fluid typography system, high-contrast dark palette, and clear keyboard focus paths.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'reva',
    institution: 'REVA University',
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    periodOrSemester: '3rd Semester',
    scoreOrYear: 'Expected Graduation: 2027',
    scoreType: 'Timeline',
    statusBadge: 'Currently Enrolled',
    accentColor: 'primary',
    description:
      'Curriculum encompasses Object-Oriented Programming, Data Structures & Algorithms, Computer Organization, Database Management Systems, and Statistical Modeling for Machine Learning applications.',
    tags: [
      'Artificial Intelligence',
      'Data Structures',
      'Database Systems',
      'Computational Logic',
    ],
  },
  {
    id: 'vidyanidhi',
    institution: 'Vidyanidhi Independent PU College, Tumkur',
    degree: 'PCMB Stream (Physics, Chemistry, Mathematics, Biology)',
    periodOrSemester: 'Class 12 Board Examination',
    scoreOrYear: '96.8%',
    scoreType: 'Distinction',
    statusBadge: 'Pre-University Education',
    accentColor: 'tertiary',
    description:
      'Demonstrated exceptional analytical consistency across quantitative sciences and mathematics, laying a disciplined foundation for algorithmic computation and abstract modeling.',
  },
  {
    id: 'ssemhs',
    institution: 'SSEMHS, Tumkur',
    degree: 'Class 10 High School Certification',
    periodOrSemester: 'State Board Distinction',
    scoreOrYear: '97.6%',
    scoreType: 'Distinction',
    statusBadge: 'Secondary Education',
    accentColor: 'secondary',
    description:
      'Achieved top rank distinction with 97.6%, reflecting early intellectual dedication and academic discipline across science, mathematics, and analytical reasoning.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ibm-data-analysis',
    title: 'Data Analysis with Python',
    issuer: 'IBM',
    description:
      'Comprehensive data manipulation, exploratory data analysis (EDA), Pandas dataframes, correlation matrices, and model evaluation techniques.',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn'],
    badgeIcon: 'BarChart3',
    credentialId: 'IBM-SN-DA0101EN',
    issueDate: 'Verified Credential',
  },
  {
    id: 'ibm-data-visualization',
    title: 'Data Visualization with Python',
    issuer: 'IBM',
    description:
      'Visual storytelling and graphic representations using Python libraries to decode distributions, categorical trends, and geospatial datasets.',
    skills: ['Matplotlib', 'Seaborn', 'Folium'],
    badgeIcon: 'TrendingUp',
    credentialId: 'IBM-SN-DV0101EN',
    issueDate: 'Verified Credential',
  },
  {
    id: 'ibm-python-101',
    title: 'Python 101 for Data Science',
    issuer: 'IBM',
    description:
      'Foundational Python syntax, data structures (lists, tuples, dictionaries), file I/O operations, classes, and scripting automation for computational science.',
    skills: ['Python 3', 'Data Structures', 'File Operations'],
    badgeIcon: 'Terminal',
    credentialId: 'IBM-SN-PY0101EN',
    issueDate: 'Verified Credential',
  },
];
