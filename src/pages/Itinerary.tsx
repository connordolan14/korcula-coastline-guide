
import React from 'react';
import PageHeader from '../components/PageHeader';
import ActivityCard from '../components/ActivityCard';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Itinerary = () => {
  const dayPlans = [
    {
      id: '1',
      title: 'Old Town Discovery Day',
      description: 'Explore the medieval streets of Korčula Town, visit St. Mark\'s Cathedral, walk the city walls, and enjoy lunch at a traditional konoba.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      tags: ['Culture', 'History', 'Walking'],
      duration: 'Full Day'
    },
    {
      id: '2',
      title: 'Beach & Relaxation Day',
      description: 'Spend the day at pristine beaches, swimming in crystal-clear waters, beach volleyball, and sunset cocktails by the shore.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
      tags: ['Beach', 'Relaxation', 'Swimming'],
      duration: 'Full Day'
    },
    {
      id: '3',
      title: 'Wine & Dine Experience',
      description: 'Visit local wineries, taste indigenous wines, enjoy traditional Croatian cuisine, and learn about local wine-making traditions.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      tags: ['Wine', 'Food', 'Culture'],
      duration: 'Half Day'
    },
    {
      id: '4',
      title: 'Adventure & Nature Day',
      description: 'Kayaking around the island, hiking scenic trails, exploring hidden coves, and outdoor adventure activities.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      tags: ['Adventure', 'Nature', 'Active'],
      duration: 'Full Day'
    },
    {
      id: '5',
      title: 'Island Hopping Excursion',
      description: 'Take a boat trip to nearby islands, explore remote beaches, snorkel in pristine waters, and enjoy a seafood lunch.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      tags: ['Boat Trip', 'Islands', 'Snorkeling'],
      duration: 'Full Day'
    },
    {
      id: '6',
      title: 'Cultural Immersion Day',
      description: 'Participate in local traditions, visit artisan workshops, learn traditional crafts, and attend cultural performances.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      tags: ['Culture', 'Traditions', 'Crafts'],
      duration: 'Half Day'
    },
    {
      id: '7',
      title: 'Sunset & Nightlife',
      description: 'Watch the sunset from the best viewpoints, enjoy dinner at waterfront restaurants, and experience Korčula\'s nightlife.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      tags: ['Sunset', 'Dining', 'Nightlife'],
      duration: 'Evening'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Itinerary Ideas"
          subtitle="Perfect day plans for your stay"
        />

        <div className="bg-card rounded-2xl p-6 mb-8 card-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Plan Your Perfect Days</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Mix and match these day plans to create your ideal vacation experience. 
            Each suggestion can be customized based on weather, preferences, and group size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dayPlans.map((plan) => (
            <div key={plan.id} className="bg-card rounded-2xl overflow-hidden card-shadow card-hover">
              <div className="h-48 bg-primary/10 overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{plan.duration}</span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{plan.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {plan.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {plan.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-medium px-2 py-1 bg-accent/50 text-accent-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 rounded-2xl p-6 mt-8 text-center">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="text-lg font-semibold mb-2">Need Help Planning?</h3>
          <p className="text-muted-foreground text-sm">
            Local tourist information centers and your accommodation hosts can provide 
            personalized recommendations and help with bookings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
