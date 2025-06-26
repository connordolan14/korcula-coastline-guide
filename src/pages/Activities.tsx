
import React from 'react';
import PageHeader from '../components/PageHeader';
import ActivityCard from '../components/ActivityCard';
import { Utensils, Wine, Waves, Mountain, Music } from 'lucide-react';

const Activities = () => {
  const restaurants = [
    {
      id: '1',
      title: 'Restaurant Name 1',
      description: 'Traditional Croatian cuisine with a modern twist. Fresh seafood and local specialties.',
      category: 'Fine Dining'
    },
    {
      id: '2',
      title: 'Restaurant Name 2', 
      description: 'Casual dining with amazing views of the harbor. Perfect for lunch or dinner.',
      category: 'Casual'
    }
  ];

  const bars = [
    {
      id: '1',
      title: 'Beach Bar Name',
      description: 'Sunset cocktails with your toes in the sand. Live music on weekends.',
      category: 'Beach Bar'
    },
    {
      id: '2',
      title: 'Rooftop Bar Name',
      description: 'Panoramic views of the old town and surrounding islands.',
      category: 'Rooftop'
    }
  ];

  const beaches = [
    {
      id: '1',
      title: 'Beach Name 1',
      description: 'Crystal clear waters perfect for swimming and snorkeling.',
      category: 'Swimming'
    },
    {
      id: '2',
      title: 'Beach Name 2',
      description: 'Quiet cove with pebble beach, ideal for relaxation.',
      category: 'Relaxation'
    }
  ];

  const wineries = [
    {
      id: '1',
      title: 'Winery Name 1',
      description: 'Family-owned vineyard producing award-winning white wines.',
      category: 'Wine Tasting'
    },
    {
      id: '2',
      title: 'Winery Name 2',
      description: 'Historic winery with guided tours and tastings.',
      category: 'Tours'
    }
  ];

  const outdoorActivities = [
    {
      id: '1',
      title: 'Kayaking Adventure',
      description: 'Explore hidden coves and caves around the island.',
      category: 'Water Sports'
    },
    {
      id: '2',
      title: 'Hiking Trail',
      description: 'Scenic walking paths with stunning coastal views.',
      category: 'Hiking'
    }
  ];

  const ActivitySection = ({ title, items, icon: Icon }: any) => (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item: any) => (
          <ActivityCard
            key={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            image={`https://images.unsplash.com/photo-148239629${item.id}607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Activities & Places"
          subtitle="Discover the best of Korčula"
        />

        <ActivitySection title="Restaurants" items={restaurants} icon={Utensils} />
        <ActivitySection title="Bars & Nightlife" items={bars} icon={Music} />
        <ActivitySection title="Beaches" items={beaches} icon={Waves} />
        <ActivitySection title="Wineries" items={wineries} icon={Wine} />
        <ActivitySection title="Outdoor Activities" items={outdoorActivities} icon={Mountain} />

        {/* Google MyMaps Placeholder */}
        <div className="bg-card rounded-2xl p-6 card-shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">Interactive Map</h2>
          <div className="bg-primary/10 rounded-xl h-64 flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              Custom Google MyMaps embed will go here<br />
              <span className="text-sm">All activities and locations marked</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
