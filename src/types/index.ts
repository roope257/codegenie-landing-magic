
export interface Testimonial {
  id: number;
  content: string;
  name: string;
  title: string;
  rating: number;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}
