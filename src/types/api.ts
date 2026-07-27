export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface Service {
  slug: string;

  title: string;
  subtitle: string;
  description: string;

  heroIntro: string;

  icon: string;
  color: string;
  heroImage: string;

  overview: string;

  deliverables: string[];
  benefits: string[];
  industries: string[];
  technologies: string[];
  process: string[];
  whyChooseUs: string[];

  cta: {
    heading: string;
    tagline: string;
    buttons: string[];
  };

  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}
