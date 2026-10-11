import { StudentProfile } from '../types/portfolio';
import techAvatar from '../assets/images/student_tech_portrait_1791714985520.jpg';

export const ARUN_SHARMA_PROFILE: StudentProfile = {
  name: 'Arun Sharma',
  professionalTitle: 'Computer Science & Engineering (Artificial Intelligence) Student',
  degreeSummary: 'B.E. (CSE)(AI) Student',
  university: 'Chandigarh University',
  location: 'Chandigarh, India',
  email: 'sharmaarunsharma206@gmail.com',
  phone: '+91 7696339179',
  cgpa: '8.2 / 10',
  linkedinUrl: 'https://linkedin.com/in/arun-sharma-47b2743b2',
  resumePdfUrl: '/assets/Arun_Sharma_Professional_Resume.pdf',
  avatarUrl: techAvatar,

  heroIntroduction:
    'I am a motivated student interested in programming, Artificial Intelligence, Machine Learning, Data Science, and Cloud Computing. Currently developing strong algorithmic problem-solving foundations and cloud-native technical competencies.',

  aboutIntro:
    'I am a second-year B.E. student in Computer Science & Engineering (Artificial Intelligence) at Chandigarh University with an expected graduation year of 2029 and a current CGPA of 8.2/10. My primary programming languages include Python, C, and C++. I am actively developing my problem-solving, programming, and algorithmic skills through structured academic learning and consistent coding practice. My core technical interests focus on Artificial Intelligence, Machine Learning, Data Science, and Cloud Computing.',

  careerObjective:
    'To obtain an internship opportunity in Data & Artificial Intelligence, Software Development, AI/ML, or related technology fields where I can apply my programming and problem-solving skills, gain practical industry experience, and contribute to real-world projects.',

  education: [
    {
      id: 'edu-cu',
      institution: 'Chandigarh University',
      degreeOrLevel: 'Bachelor of Engineering — Computer Science & Engineering (Artificial Intelligence)',
      period: '2025 – Present',
      details: 'Second-Year B.E. Student',
      expectedGraduation: 'Expected Graduation: 2029',
      cgpa: 'CGPA: 8.2/10',
    },
    {
      id: 'edu-aps-12',
      institution: 'Army Public School, Unchi Bassi, Punjab',
      degreeOrLevel: 'Higher Secondary Education (Class 12th)',
      period: 'Completed',
      details: 'Senior Secondary Education',
    },
    {
      id: 'edu-aps-10',
      institution: 'Army Public School, Unchi Bassi, Punjab',
      degreeOrLevel: 'Secondary Education (Class 10th)',
      period: 'Completed',
      details: 'Secondary School Education',
    },
  ],

  skills: {
    programmingLanguages: ['Python', 'C', 'C++'],
    dataStructuresAndAlgorithms: [
      'Arrays',
      'Searching',
      'Sorting',
      'Recursion',
      'Linked Lists',
      'Stack',
      'Queue',
    ],
    aiAndData: [
      'Artificial Intelligence Fundamentals',
      'Machine Learning Fundamentals',
    ],
    cloudComputing: ['Microsoft Azure Fundamentals'],
    otherSkills: [
      'Problem Solving',
      'Object-Oriented Programming',
      'Algorithm Analysis',
    ],
  },

  certifications: [
    {
      id: 'cert-ai900',
      name: 'Microsoft Certified: Azure AI Fundamentals',
      code: 'AI-900',
      issuer: 'Microsoft',
      badgeType: 'azure-ai',
      description:
        'Validates foundational knowledge of Machine Learning (ML) and Artificial Intelligence (AI) concepts and related Microsoft Azure cloud services.',
    },
    {
      id: 'cert-az900',
      name: 'Microsoft Certified: Azure Fundamentals',
      code: 'AZ-900',
      issuer: 'Microsoft',
      badgeType: 'azure-cloud',
      description:
        'Demonstrates foundational understanding of cloud services, security, privacy, compliance, and how those services are provided with Microsoft Azure.',
    },
  ],

  projectsDescription:
    'Academic and personal projects in programming, Artificial Intelligence, and cloud technologies. Developed to explore practical system design, algorithmic efficiency, and real-world software workflows.',
  
  projects: [
    {
      id: 'proj-adgenex',
      title: 'AdGenex — AI Ad Copy & Campaign Assistant',
      description:
        'A personal academic project exploring natural language processing workflows and prompt engineering pipelines. Generates targeted marketing copy variations, campaign headlines, value propositions, and calls-to-action based on structured product attributes and user intent.',
      tags: ['Python', 'NLP & AI Prompting', 'React', 'Tailwind CSS', 'Academic Prototype'],
      status: 'Academic Prototype',
      category: 'Artificial Intelligence & NLP',
      academicDetails:
        'Built to study structured language model prompt design, parameter-driven creative variation synthesis, and modular client-side integration for marketing technology.',
      demoAvailable: true,
    },
    {
      id: 'proj-coa-code',
      title: 'COA Code',
      description:
        'A dedicated GitHub repository containing Computer Organization and Architecture (COA) code, academic implementations, and related coursework learning materials.',
      tags: ['Computer Organization and Architecture', 'Low-Level Computing', 'Hardware Fundamentals', 'GitHub'],
      status: 'Academic Repository',
      category: 'Computer Organization and Architecture',
      platform: 'GitHub',
      link: 'https://github.com/sharmaarunsharma206-sketch/COA_code',
      githubUrl: 'https://github.com/sharmaarunsharma206-sketch/COA_code',
      academicDetails:
        'Coursework repository for Computer Organization and Architecture exercises, exploring computer hardware concepts, instruction sets, and architecture principles.',
      demoAvailable: false,
    },
  ],

  relevantCoursework: [
    'Data Structures & Algorithms',
    'Programming in Python',
    'C / C++ Programming',
    'Database Fundamentals',
  ],

  softSkills: [
    'Problem Solving',
    'Analytical Thinking',
    'Teamwork',
    'Communication',
    'Quick Learning',
    'Time Management',
  ],
};
