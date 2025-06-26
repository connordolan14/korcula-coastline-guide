
import React from 'react';
import PageHeader from '../components/PageHeader';
import PhotoGallery from '../components/PhotoGallery';

const House = () => {
  const housePhotos = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      alt: 'House exterior view'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      alt: 'Living room'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      alt: 'Kitchen area'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
      alt: 'Bedroom'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      alt: 'Terrace with sea view'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Our House"
          subtitle="Your home away from home"
        />

        <PhotoGallery photos={housePhotos} />

        <div className="bg-card rounded-2xl p-6 mt-8 card-shadow">
          <h2 className="text-2xl font-bold mb-4">About the House</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our beautiful vacation home is perfectly located just minutes from the historic old town 
              of Korčula. This charming property offers modern amenities while maintaining traditional 
              Croatian character.
            </p>
            <p>
              The house features spacious bedrooms, a fully equipped kitchen, comfortable living areas, 
              and a lovely terrace with stunning views of the Adriatic Sea. Perfect for families looking 
              to experience the authentic beauty of Korčula.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="font-semibold text-lg">4</div>
              <div className="text-sm text-muted-foreground">Bedrooms</div>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-xl">
              <div className="font-semibold text-lg">3</div>
              <div className="text-sm text-muted-foreground">Bathrooms</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="font-semibold text-lg">8</div>
              <div className="text-sm text-muted-foreground">Guests</div>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-xl">
              <div className="font-semibold text-lg">5min</div>
              <div className="text-sm text-muted-foreground">to Beach</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
