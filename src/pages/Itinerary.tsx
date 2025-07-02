import React from 'react';
import PageHeader from '../components/PageHeader';
import ActivityCard from '../components/ActivityCard';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Itinerary = () => {
  const weeklyEvents = [
    {
      date: 'Saturday, July 26',
      events: [
        {
          title: 'Theatre play / Masks / UO Group',
          time: '9-10pm',
          location: 'Centar za kulturu Korčula',
          city: 'Korčula'
        },
        {
          title: 'Seeman\'s Night; koncert Matko i Brane',
          time: '9-10pm',
          location: 'Račišće',
          city: 'Račišće'
        }
      ]
    },
    {
      date: 'Sunday, July 27',
      events: [
        {
          title: 'Grk Wine Festival 2025',
          time: '9-11pm',
          location: 'Lumbarda',
          city: 'Lumbarda'
        },
        {
          title: 'Summer in Postrana: Theater play Maske / Masks',
          time: '9-10pm',
          location: 'Kazalište u Pavuleta',
          city: 'Žrnovo'
        }
      ]
    },
    {
      date: 'Monday, July 28',
      events: [
        {
          title: 'Moreška sword dance performance',
          time: '9-10pm',
          location: 'Ljetno kino Korcula',
          city: 'Korčula'
        },
        {
          title: 'Elementum - trio (cello, accordion and flute)',
          time: '9-10pm',
          location: 'Lumbarda 230a, 20263, Lumbarda, Croatia',
          city: 'Lumbarda'
        }
      ]
    },
    {
      date: 'Tuesday, July 29',
      events: [
        {
          title: 'Ante Kriletić Jordes - Exhibition Opening',
          time: '9-11pm',
          location: 'Lumbarda 230a, 20263, Lumbarda, Croatia',
          city: 'Lumbarda'
        },
        {
          title: 'Festivity of St. Theodor and the Day of Town of Korčula',
          time: '7-8:30pm',
          location: 'Korcula',
          city: 'Korčula'
        }
      ]
    },
    {
      date: 'Wednesday, July 30',
      events: [
        {
          title: 'Blato Wine and Dine - Okusi mirisi zavičaja',
          time: '8:30pm-12:30am',
          location: 'Blato, Croatia',
          city: 'Blato'
        },
        {
          title: 'Folklore Evening - KUD Ivo Lozica',
          time: '9-10:30pm',
          location: 'Lumbarda Trg',
          city: 'Lumbarda'
        },
        {
          title: 'Exhibition / Emil Bobanović Čolić',
          time: '9-10pm',
          location: 'Centar za kulturu Korčula',
          city: 'Korčula'
        }
      ]
    },
    {
      date: 'Thursday, July 31',
      events: [
        {
          title: 'Children Art and Craft Fair',
          time: '8-10:30pm',
          location: 'Lumbarda',
          city: 'Lumbarda'
        },
        {
          title: 'Cinema / Naked Gun 4',
          time: '9-10pm',
          location: 'Centar za kulturu Korčula',
          city: 'Korčula'
        }
      ]
    },
    {
      date: 'Friday, August 1',
      events: [
        {
          title: 'Blato Wine Night',
          time: '9-11:30pm',
          location: 'Gradski park blato',
          city: 'Blato'
        },
        {
          title: 'Mediterranean Cinema / Folle Mente',
          time: '9-10pm',
          location: 'Ljetno kino Korcula',
          city: 'Korčula'
        },
        {
          title: 'Theatre play for children / Grga Čvarak (4+) / Scena Gorica',
          time: '8-9pm',
          location: 'Centar za kulturu Korčula',
          city: 'Korčula'
        }
      ]
    }
  ];

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
          title="Week Schedule"
          subtitle="Korčula Harbor Week 31"
        />

        {/* Weekly Schedule Section */}
        <div className="bg-card rounded-2xl p-6 mb-8 card-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Korčula Official Town Schedule</h2>
              <p className="text-muted-foreground">Korcula Harbor Week 31</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {weeklyEvents.map((day, dayIndex) => (
              <div key={dayIndex} className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold mb-3 text-primary">{day.date}</h3>
                <div className="space-y-3">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="bg-accent/20 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground">{event.title}</h4>
                        <div className="flex items-center gap-1 text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{event.city}</span>
                        <span>•</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

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
