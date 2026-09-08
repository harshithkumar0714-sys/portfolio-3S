export interface SkillItem {
  name: string;
  level: 'Comfortable' | 'Working Knowledge' | 'Building & Practicing' | 'Active Use' | 'Building';
}

export interface SkillCategory {
  id: string;
  number: string;
  categoryLabel: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
  problemSolved?: string;
  keyTakeaway?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  periodOrSemester: string;
  scoreOrYear: string;
  scoreType: string;
  statusBadge: string;
  description: string;
  tags?: string[];
  accentColor: 'primary' | 'tertiary' | 'secondary';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  skills: string[];
  credentialId?: string;
  issueDate?: string;
  badgeIcon: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt?: string;
}
