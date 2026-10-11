export interface EducationItem {
  id: string;
  institution: string;
  degreeOrLevel: string;
  period: string;
  details?: string;
  expectedGraduation?: string;
  cgpa?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  code: string;
  issuer: string;
  badgeType: 'azure-ai' | 'azure-cloud';
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'Academic Prototype' | 'In Progress' | 'Completed' | 'Upcoming' | 'Academic Repository';
  link?: string;
  githubUrl?: string;
  category?: string;
  platform?: string;
  academicDetails?: string;
  demoAvailable?: boolean;
}

export interface StudentProfile {
  name: string;
  professionalTitle: string;
  degreeSummary: string;
  university: string;
  location: string;
  email: string;
  phone: string;
  cgpa: string;
  linkedinUrl: string;
  resumePdfUrl: string;
  avatarUrl: string;
  
  // Sections
  heroIntroduction: string;
  aboutIntro: string;
  careerObjective: string;
  
  // Education
  education: EducationItem[];
  
  // Skills categorized
  skills: {
    programmingLanguages: string[];
    dataStructuresAndAlgorithms: string[];
    aiAndData: string[];
    cloudComputing: string[];
    otherSkills: string[];
  };
  
  // Certifications
  certifications: CertificationItem[];
  
  // Projects
  projectsDescription: string;
  projects: ProjectItem[];
  
  // Coursework & Soft Skills
  relevantCoursework: string[];
  softSkills: string[];
}
