export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  size: number;
  default_branch: string;
  readme?: string;
  category?: string;
  customDescription?: string;
  technologies?: string[];
  liveDemo?: string | null;
  tableauUrl?: string | null;
  powerBIUrl?: string | null;
}

export interface FeaturedProject {
  id: string;
  title: string;
  role: string;
  duration: string;
  description: string;
  analysisPoints: string[];
  techniques?: string[];
  filters?: string[];
  tools: string[];
  results?: string[];
  githubUrl?: string;
  tableauUrl?: string;
  powerBIUrl?: string;
  liveDemoUrl?: string;
  featuredBadge?: string;
  category: string;
  metrics: { label: string; value: string }[];
  imageUrl?: string;
  images?: string[];
  pptUrl?: string;
  documentUrl?: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  topics: string[];
  certificateUrl?: string;
  certificateFile?: string;
  imageUrl?: string;
  date?: string;
  category: 'Python' | 'SQL' | 'Data Analytics' | 'Power BI' | 'Excel' | 'AI';
}

export interface Achievement {
  id: string;
  title: string;
  context: string;
  badge: string;
  iconType: 'trophy' | 'award' | 'star';
  documentUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  responsibilities?: string[];
}

export interface Education {
  degree: string;
  university: string;
  duration: string;
  sgpa: string;
  highlight: string;
}
