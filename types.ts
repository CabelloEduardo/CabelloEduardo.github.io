import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  year?: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}

export interface UserProfile {
  name: string;
  title: string;
  shortBio: string;
  longBio: string[];
  profileImageUrl: string;
  email: string;
  cvUrl?: string;
  skills: {
    category: string;
    items: string[];
  }[];
}