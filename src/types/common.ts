export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
