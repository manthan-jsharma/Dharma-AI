// Shared type definitions for Artha AI

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  num: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  category: "automation" | "marketing" | "consulting" | "all";
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  gradient: string;
  linkedIn?: string;
}

export interface BlogPost {
  slug: string;
  emoji: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content?: string;
}

export interface ContactItem {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

export interface HeroStat {
  num: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}
