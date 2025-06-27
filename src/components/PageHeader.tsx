
import React from 'react';

interface PageHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  backgroundImage?: string;
  gradient?: boolean;
}

const PageHeader = ({ title, subtitle, backgroundImage, gradient = false }: PageHeaderProps) => {
  return (
    <div 
      className={`relative h-64 flex items-center justify-center text-center overflow-hidden rounded-2xl mb-6 ${
        gradient ? 'beach-gradient' : 'bg-primary/10'
      }`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/30" />
      )}
      <div className="relative z-10 px-6">
        <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${
          backgroundImage ? 'text-white' : 'text-foreground'
        }`}>
          {title}
        </h1>
        {subtitle && (
          <div className={`text-lg md:text-xl ${
            backgroundImage ? 'text-white/90' : 'text-muted-foreground'
          }`}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
