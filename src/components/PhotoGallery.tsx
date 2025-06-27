
import React from 'react';

interface Photo {
  id: string;
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
  onImageClick?: (index: number) => void;
}

const PhotoGallery = ({ photos, title, onImageClick }: PhotoGalleryProps) => {
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-bold text-center">{title}</h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={photo.id}
            className={`rounded-2xl overflow-hidden card-shadow card-hover cursor-pointer ${
              index === 0 ? 'col-span-2 md:col-span-1' : ''
            }`}
            onClick={() => onImageClick?.(index)}
          >
            <div className="aspect-square bg-primary/10">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
