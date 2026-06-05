export type Project = {
  id: string;
  title: string;
  logo?: string;
  description?: string;
  features?: string[];
  github?: string;
  link: string;
  skills: string[];
  isExpanded?: boolean;
};
