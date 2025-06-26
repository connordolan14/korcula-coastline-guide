
import React from 'react';
import PageHeader from '../components/PageHeader';
import ActivityCard from '../components/ActivityCard';
import { ExternalLink, Grape } from 'lucide-react';

const WineTours = () => {
  const wineTours = [
    {
      id: '1',
      title: 'Korčula Wine Discovery Tour',
      description: 'A comprehensive tour of the island\'s best vineyards. Includes transportation, tastings at 4 wineries, traditional lunch, and local guide. Perfect introduction to Korčula wines.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      duration: 'Full Day (8 hours)',
      price: 'From €85 per person',
      link: '#'
    },
    {
      id: '2',
      title: 'Sunset Wine Tasting Experience',
      description: 'Intimate evening wine tasting at a family-owned vineyard with panoramic sunset views. Includes premium wine selection, local cheese platter, and vineyard tour.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      duration: 'Evening (3 hours)',
      price: 'From €45 per person',
      link: '#'
    },
    {
      id: '3',
      title: 'Private Vineyard & Gastronomy Tour',
      description: 'Exclusive private tour combining wine tasting with traditional Croatian cuisine. Visit historic cellars, meet local winemakers, and enjoy a multi-course meal paired with wines.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      duration: 'Half Day (5 hours)',
      price: 'From €120 per person',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Wine Tours"
          subtitle="Taste the flavors of Korčula"
          gradient={true}
        />

        <div className="bg-card rounded-2xl p-6 mb-8 card-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Grape className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">About Korčula Wines</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Korčula is renowned for its indigenous white wines, particularly Grk and Pošip varieties. 
            The island's unique microclimate and limestone soil create perfect conditions for producing 
            exceptional wines that pair beautifully with fresh seafood and Mediterranean cuisine.
          </p>
        </div>

        <div className="space-y-6">
          {wineTours.map((tour) => (
            <div key={tour.id} className="bg-card rounded-2xl overflow-hidden card-shadow card-hover">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-48 md:h-full bg-primary/10">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{tour.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {tour.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium px-2 py-1 bg-accent/50 text-accent-foreground rounded-full">
                        {tour.price}
                      </span>
                    </div>
                  </div>

                  <a 
                    href={tour.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <span>Book Tour</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent/20 rounded-2xl p-6 mt-8 text-center">
          <h3 className="text-lg font-semibold mb-2">Planning a Custom Wine Experience?</h3>
          <p className="text-muted-foreground text-sm">
            Contact local wineries directly for private tastings and personalized tours. 
            Many offer pickup services from your accommodation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WineTours;
