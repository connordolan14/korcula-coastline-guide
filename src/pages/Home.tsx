
import React from 'react';
import PageHeader from '../components/PageHeader';
import CTAButton from '../components/CTAButton';
import { MapPin, Building, Grape, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <PageHeader 
          title="Welcome to Korčula"
          subtitle="Our Croatian Family Adventure"
          backgroundImage="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
        />

        {/* Introduction Section */}
        <div className="bg-card rounded-2xl p-6 mb-8 card-shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">About Our Trip</h2>
          <p className="text-muted-foreground leading-relaxed text-center">
            Join us for an unforgettable family vacation on the beautiful island of Korčula, Croatia. 
            Discover medieval towns, pristine beaches, world-class wineries, and create memories that will last a lifetime.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <CTAButton to="/activities" icon={MapPin}>
            Explore Activities
          </CTAButton>
          
          <CTAButton to="/house" icon={Building} variant="secondary">
            See Our House
          </CTAButton>
          
          <CTAButton to="/wine-tours" icon={Grape}>
            Wine Tours
          </CTAButton>
          
          <CTAButton to="/itinerary" icon={Calendar} variant="secondary">
            Itinerary Ideas
          </CTAButton>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-accent/30 rounded-2xl p-4 text-center">
            <h3 className="font-semibold mb-2">Best Time to Visit</h3>
            <p className="text-sm text-muted-foreground">May - September for warm weather</p>
          </div>
          <div className="bg-primary/10 rounded-2xl p-4 text-center">
            <h3 className="font-semibold mb-2">Getting Around</h3>
            <p className="text-sm text-muted-foreground">Walking, biking, or local transport</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
