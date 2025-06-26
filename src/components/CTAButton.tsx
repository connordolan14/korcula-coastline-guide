
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CTAButtonProps {
  to: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const CTAButton = ({ to, icon: Icon, children, variant = 'primary' }: CTAButtonProps) => {
  const baseClasses = "flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-lg transition-all card-hover";
  const variantClasses = variant === 'primary' 
    ? "bg-primary text-primary-foreground hover:bg-primary/90"
    : "bg-secondary text-secondary-foreground hover:bg-secondary/80";

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses}`}>
      {Icon && <Icon className="w-6 h-6" />}
      {children}
    </Link>
  );
};

export default CTAButton;
