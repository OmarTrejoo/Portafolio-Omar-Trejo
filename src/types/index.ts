export interface SocialLink {
  platform: string;
  url: string;
  icon: string; 
  ariaLabel: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  specializations: string[];
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string; 
  socials: SocialLink[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  ogImage?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  workMode?: string;
  period: string;
  description: string;
  technologies: string[];
  gallery?: string[]; 
}

export interface Project {
  name: string;
  description: string; 
  fullDescription?: string; 
  coverImage?: string; 
  images?: string[];  
  technologies: string[];
  status: "presente" | "completado" | "en desarrollo";
  highlights?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  image?: string;
  url?: string;
}

export interface Language {
  language: string;
  level: string;
}

