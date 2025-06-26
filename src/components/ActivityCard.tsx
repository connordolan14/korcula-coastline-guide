
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  category?: string;
  link?: string;
}

const ActivityCard = ({ title, description, image, icon: Icon, category, link }: ActivityCardProps) => {
  const CardContent = () => (
    <div className="bg-card rounded-2xl overflow-hidden card-shadow card-hover">
      {image && (
        <div className="h-48 bg-primary/10 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
          {category && (
            <span className="text-xs font-medium px-2 py-1 bg-accent/50 text-accent-foreground rounded-full">
              {category}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ActivityCard;
