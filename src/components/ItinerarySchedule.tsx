
import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const ItinerarySchedule = () => {
  const scheduleItems = [
    {
      time: '11:00 AM',
      activity: 'Depart from Villa'
    },
    {
      time: '11:15 AM – 12:30 PM',
      activity: 'Black Island Winery',
      description: 'Wine tasting & light lunch with vineyard views'
    },
    {
      time: '12:30 PM',
      activity: 'Depart for next stop'
    },
    {
      time: '12:45 PM – 1:30 PM',
      activity: 'Toreta Winery',
      description: '45-minute guided tasting in a traditional cellar'
    },
    {
      time: '1:45 PM',
      activity: 'Depart for next stop'
    },
    {
      time: '2:00 PM – 3:00 PM',
      activity: 'PZ Nerica Winery',
      description: 'Wine tasting & local snack in a rural setting'
    },
    {
      time: '3:30 PM',
      activity: 'Depart for final winery'
    },
    {
      time: '3:45 PM – 5:30 PM',
      activity: 'Krajancic Winery',
      description: 'Extended tasting with time to relax and enjoy coastal views'
    },
    {
      time: '5:30 PM',
      activity: 'Drive back to Villa'
    },
    {
      time: '~5:45 PM',
      activity: 'Arrive home'
    }
  ];

  return (
    <div className="bg-card rounded-2xl p-6 card-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold">Proposed Itinerary Schedule*</h3>
      </div>
      
      <div className="space-y-3">
        {scheduleItems.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-32">
              <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                {item.time}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-start gap-2">
                {item.activity.includes('Winery') && !item.activity.includes('Depart') && (
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className="font-medium text-foreground">{item.activity}</p>
                  {item.description && (
                    <p className="text-sm text-muted-foreground italic">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          *Note: One of the wineries can be skipped if desired.
        </p>
      </div>
    </div>
  );
};

export default ItinerarySchedule;
