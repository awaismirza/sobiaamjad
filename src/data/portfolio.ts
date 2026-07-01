export const GOOGLE_SCHOLAR_URL =
  'https://scholar.google.com/citations?user=stTKN6gAAAAJ&hl=en'

export const FEATURED_PUBLICATION_URL =
  'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=stTKN6gAAAAJ&citation_for_view=stTKN6gAAAAJ:ufrVoPGSRksC'

// TODO: Replace with University of Melbourne thesis repository URL.
export const THESIS_URL = '#'

// TODO: Replace LINKEDIN_URL with actual LinkedIn profile.
export const LINKEDIN_URL = '#'

// TODO: Replace CV_URL with uploaded CV file path.
export const CV_URL = '#'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#current-work' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    title: 'Surgical Waitlist Prediction',
    category: 'Clinical Analytics / Predictive Modelling',
    description:
      'A hospital-based prediction and analytics project supporting surgical waitlist planning through structured clinical data preparation, statistical modelling and operational analysis.',
    technologies: ['SQL', 'Python', 'Pandas', 'Statsmodels', 'Clinical Data'],
    highlights: [
      'Hospital data extraction and preparation',
      'Statistical modelling support',
      'Operational planning use case',
      'Clinical informatics collaboration',
    ],
  },
  {
    title: 'Delirium Prediction Using Machine Learning and NLP',
    category: 'PhD Research / Clinical AI',
    description:
      'Doctoral research applying machine learning and natural language processing to identify and predict delirium using EHR data, clinical notes and medication information.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Clinical Notes', 'EHR Data'],
    highlights: [
      'Clinical NLP',
      'Predictive modelling',
      'Imbalanced dataset evaluation',
      'AUROC and PR-AUC model assessment',
      'First-author research outputs',
    ],
  },
  {
    title: 'Epic Clinical Data Analytics',
    category: 'Health Informatics / EMR Data',
    description:
      'SQL-based extraction and preparation of clinical datasets from Epic Clarity and Caboodle to support hospital research and operational reporting.',
    technologies: ['Epic Clarity', 'Epic Caboodle', 'SQL', 'Python', 'EMR Data'],
    highlights: [
      'Clinical dataset preparation',
      'Research question translation',
      'EMR data understanding',
      'Healthcare reporting support',
    ],
  },
  {
    title: 'AI-Assisted Clinical Data Tools',
    category: 'Clinical AI / Portfolio Development',
    description:
      'A developing portfolio area focused on AI-assisted tools for healthcare data analysis, clinical reporting and research support.',
    technologies: ['Python', 'LLMs', 'SQL', 'Healthcare Data'],
    status: 'In progress',
    highlights: [],
  },
]

export const skillGroups = [
  {
    title: 'Health Data & Clinical Analytics',
    skills: [
      'Clinical data extraction',
      'Epic Clarity',
      'Epic Caboodle',
      'Cerner EHR data',
      'EMR data preparation',
      'Clinical research datasets',
      'Healthcare analytics',
    ],
  },
  {
    title: 'Machine Learning & NLP',
    skills: [
      'Predictive modelling',
      'Clinical NLP',
      'Feature engineering',
      'Model evaluation',
      'Imbalanced clinical datasets',
      'AUROC',
      'PR-AUC',
    ],
  },
  {
    title: 'Programming & Statistical Tools',
    skills: [
      'SQL',
      'Python',
      'Pandas',
      'Statsmodels',
      'Scikit-learn',
      'Data wrangling',
      'Statistical analysis',
    ],
  },
  {
    title: 'Research & Communication',
    skills: [
      'Clinical research support',
      'Research question translation',
      'Statistical summaries',
      'Data visualisation',
      'Technical documentation',
      'Teaching and tutoring',
    ],
  },
]

export const experience = [
  {
    role: 'Data Analyst',
    organisation: 'The Royal Melbourne Hospital, Clinical Informatics Centre',
    dates: 'July 2024 - Present',
    bullets: [
      'Extract and prepare hospital data to answer clinical research questions.',
      'Work with Epic Clarity, Epic Caboodle and EMR data.',
      'Use SQL, Python, Pandas and Statsmodels for data preparation, analysis and modelling support.',
      'Contribute to a surgical waitlist prediction tool using statistical modelling.',
      'Collaborate with clinical and informatics teams to translate research questions into usable datasets.',
    ],
  },
  {
    role: 'Doctoral Researcher - Machine Learning and Health Informatics',
    organisation: 'University of Melbourne',
    dates: 'PhD completed 2024',
    bullets: [
      'Developed machine learning and NLP approaches for delirium identification and prediction using EHR data, clinical notes and medication information.',
      'Worked with highly imbalanced clinical outcomes.',
      'Prepared healthcare datasets, engineered features, trained models and compared performance using AUROC and PR-AUC.',
      'Applied NLP methods to clinical notes to support delirium classification.',
      'Produced first-author research outputs in clinical NLP, predictive modelling and health informatics.',
    ],
  },
  {
    role: 'Software Engineer / Research Officer',
    organisation: 'Al-Khwarizmi Institute of Computer Science, Pakistan',
    dates: 'Oct 2012 - Dec 2017',
    bullets: [
      'Developed Android and database-driven applications for public service, emergency response and customer-facing systems.',
      'Worked on requirements gathering, functional specifications, workflow design, testing and documentation.',
      'Contributed to GPS-enabled emergency and traffic applications connected to central databases.',
    ],
  },
  {
    role: 'Software Engineer',
    organisation: 'Systems Limited, Pakistan',
    dates: 'Oct 2010 - Jul 2012',
    bullets: [
      'Contributed to enterprise software, reporting interfaces and database-driven systems.',
      'Worked with SharePoint, .NET, SQL Server, Oracle Forms, Oracle Reports and PL/SQL.',
    ],
  },
]

export const education = [
  {
    degree: 'Doctor of Philosophy, Computing and Information Systems',
    school: 'University of Melbourne, Australia',
    dates: 'Completed 2024',
  },
  {
    degree: 'Master of Computer Science',
    school: 'University of Engineering and Technology, Pakistan',
    dates: '2010 - 2014',
  },
  {
    degree: 'Bachelor of Computer Engineering',
    school: 'University of Engineering and Technology, Pakistan',
    dates: '2006 - 2010',
  },
]

export const teaching = [
  {
    role: 'Academic Tutor - Elements of Data Processing',
    organisation: 'University of Melbourne',
    dates: 'Mar 2018 - Dec 2018 and 2024',
    bullets: [
      'Tutored graduate students in machine learning and data wrangling.',
      'Supported practical labs and explained core data science concepts.',
    ],
  },
  {
    role: 'Research Associate / Tutor',
    organisation: 'University of Engineering and Technology Lahore, Pakistan',
    dates: 'Sep 2012 - Jun 2017',
    bullets: [
      'Delivered tutorials and practical labs in computer science, programming, operating systems and Android application development.',
      'Prepared lab materials and student training activities.',
    ],
  },
]
