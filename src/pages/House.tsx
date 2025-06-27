
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import PhotoGallery from '../components/PhotoGallery';

const House = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const housePhotos = [
    {
      id: '1',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/b306f24c-0d9e-4d6a-b40c-c7327a92c54b.jpeg',
      alt: 'Villa Sansarea exterior view'
    },
    {
      id: '2',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/7ca43e93-d95f-4a60-862e-69ec0d76fc28.jpeg',
      alt: 'Villa living area'
    },
    {
      id: '3',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/d3aeacbc-1c4b-462f-b9a7-06d0c2f824f1.jpeg',
      alt: 'Villa kitchen'
    },
    {
      id: '4',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/715c38f8-df9f-42c1-9afc-958c9616b437.jpeg',
      alt: 'Villa bedroom'
    },
    {
      id: '5',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/764bab43-01c6-45ab-8279-02b5f52bdd71.jpeg',
      alt: 'Villa terrace'
    },
    {
      id: '6',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/785a65bd-d16c-46b8-b2fe-aabd7c5192c3.jpeg',
      alt: 'Villa pool area'
    },
    {
      id: '7',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/f30bc603-a5cb-4399-bb00-be37791664ad.jpeg',
      alt: 'Villa bathroom'
    },
    {
      id: '8',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/48189c00-f9b1-46f8-ab44-74cc749921ca.jpeg',
      alt: 'Villa dining area'
    },
    {
      id: '9',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/707206a2-3186-46ed-9c86-b1c15df681e4.jpeg',
      alt: 'Villa sea view'
    },
    {
      id: '10',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/9676a8e5-0b66-42be-8b52-67c590c11671.jpeg',
      alt: 'Villa outdoor space'
    },
    {
      id: '11',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/fdb35a10-9076-4df5-ac22-9c9cf36450ac.jpeg',
      alt: 'Villa interior'
    },
    {
      id: '12',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146141985358646730/original/7b02a60f-8bdf-427e-b420-1d684527f9b2.jpeg',
      alt: 'Villa additional view'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % housePhotos.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? housePhotos.length - 1 : selectedImageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title={
            <a 
              href="https://villa-sansarea.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              Villa Sansarea
            </a>
          }
          subtitle={
            <a 
              href="https://www.google.com/maps/dir//Vina%C4%8Dac+8,+20271,+Blato,+Croatia/@42.9029723,16.7527199,27069m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x134a6b5506ca3e99:0x46369570ec2144c7!2m2!1d16.8351329!2d42.9030479?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              Vinačac 8, 20271, Blato, Croatia
            </a>
          }
        />

        <PhotoGallery photos={housePhotos} onImageClick={openModal} />

        <div className="bg-card rounded-2xl p-6 mt-8 card-shadow">
          <h2 className="text-2xl font-bold mb-4">
            About{' '}
            <a 
              href="https://villa-sansarea.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Villa Sansarea
            </a>
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Villa Sansarea is located directly by the sea on the south side of the island Korčula, 
              Dubrovnik county, known as one of the most beautiful islands in the world. The villa 
              exudes modern sophistication, with sleek furnishings, high-end amenities, and a 
              light-filled design that creates a sense of serenity and tranquility. The spacious 
              living areas, fully equipped kitchen, and luxurious bedrooms offer a comfortable 
              retreat after a day of sun-soaked adventures on the beach on the enchanting island 
              of Korčula.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="font-semibold text-lg">6</div>
              <div className="text-sm text-muted-foreground">Bedrooms</div>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-xl">
              <div className="font-semibold text-lg">6</div>
              <div className="text-sm text-muted-foreground">Bathrooms</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="font-semibold text-lg">12</div>
              <div className="text-sm text-muted-foreground">Guests</div>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-xl">
              <div className="font-semibold text-lg">7</div>
              <div className="text-sm text-muted-foreground">Beds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for image gallery */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-gray-300"
          >
            ×
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 hover:text-gray-300"
          >
            ‹
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 hover:text-gray-300"
          >
            ›
          </button>
          
          <div className="max-w-4xl max-h-full">
            <img
              src={housePhotos[selectedImageIndex].src}
              alt={housePhotos[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImageIndex + 1} / {housePhotos.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default House;
