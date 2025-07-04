
import React from 'react';
import PageHeader from '../components/PageHeader';

const Home = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <PageHeader 
          title="Korčula Week 31"
          subtitle="Dolan, Nunes, & Galatiotos Go Mobile"
          backgroundImage="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
        />

        {/* About Section */}
        <div className="bg-card rounded-2xl p-6 mb-8 card-shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">About Korčula</h2>
          <p className="text-muted-foreground leading-relaxed text-center">
            Nestled in the Adriatic Sea, Korčula is a sun-drenched Croatian island known for its rich history, vibrant culture, and stunning natural landscapes. Often called "Little Dubrovnik" for its medieval architecture and fortified Old Town, Korčula blends ancient charm with relaxed island living. Visitors can explore quiet beaches, scenic vineyards, and traditional villages while enjoying local wines like Grk and Pošip, fresh seafood, and authentic cultural experiences such as the Moreška sword dance. Whether you're here to unwind or explore, Korčula offers something for everyone.
          </p>
        </div>

        {/* Travel Map Image */}
        <div className="bg-card rounded-2xl p-6 mb-8 card-shadow">
          <div className="text-center">
            <img 
              src="/lovable-uploads/533b5f9f-b50c-4b45-a84c-5bab6840c3b7.png" 
              alt="Travel route from Basin Harbor to Korčula"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-xl font-semibold text-foreground">
              From Basin Harbor to the Balkans - same crew, new coastline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
