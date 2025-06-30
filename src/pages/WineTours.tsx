
import React from 'react';
import PageHeader from '../components/PageHeader';
import { ExternalLink, Grape, Star } from 'lucide-react';
import ItinerarySchedule from '../components/ItinerarySchedule';

const WineTours = () => {
  const mainTourWineries = [
    {
      id: '1',
      title: 'Black Island Winery',
      description: 'Boutique winery with innovative techniques, sea-influenced Pošip',
      views: 'Vineyard plains with inland elevation',
      rating: '4.6',
      reviews: '84',
      link: 'https://www.mergavicta.com/index.html#visit-us',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Toreta Winery',
      description: 'Traditional family-run winery, authentic stone cellar',
      views: 'Rolling hills and quaint village roads',
      rating: '4.9',
      reviews: '336',
      link: 'https://www.facebook.com/winetoreta/',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'PZ Nerica Winery',
      description: 'Agricultural co-op; great for Pošip tastings with local heritage',
      views: 'Rural vineyards and Korčula\'s mid-island hills',
      rating: '4.7',
      reviews: '81',
      link: 'https://nericavina.com/',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      title: 'Krajancic Winery',
      description: 'Sea-facing vineyard, acclaimed Pošip and Grk',
      views: 'Spectacular Adriatic views and pine-covered hills',
      rating: '4.8',
      reviews: '76',
      link: 'https://vinakrajancic.hr/homeeng/',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const otherWineries = [
    {
      id: '5',
      title: 'Tasovac Winery',
      location: 'Žrnovo (inland near Čara)',
      description: 'Boutique family-run winery offering Pošip and Grk; tastings often include food pairings in a relaxed courtyard. Known for warm, personal service.',
      views: 'Elevated hillside with views of surrounding vineyards and olive groves.',
      rating: 'N/A',
      reviews: '',
      link: 'https://www.facebook.com/winerytasovac/',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/a8/ec/50/winery-tasovac.jpg?w=1200&h=-1&s=1'
    },
    {
      id: '6',
      title: 'Bire Winery',
      location: 'Podstrana 233, Lumbarda',
      description: 'Specializes in Grk and Plavac Mali; traditional family production with generous tastings and local snacks.',
      views: 'Terraced vineyards with views over the Lumbarda countryside and Adriatic Sea.',
      rating: '4.5',
      reviews: '',
      link: 'https://bire.hr/',
      image: 'https://afar.brightspotcdn.com/dims4/default/a0c016e/2147483647/strip/false/crop/1422x800+89+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F01%2F36%2Fe777ce2b4f38b23d7f123ceaa67b%2Foriginal-aab8359417c3969e48bcddbba985aed8.jpg'
    },
    {
      id: '7',
      title: 'Lovrić Winery (Award Winning)',
      location: 'Lumbarda',
      description: 'Small-scale, family-owned producer of Grk and Plavac Mali. Offers tastings in a stone-walled cellar or garden patio.',
      views: 'Vineyard setting with partial sea views and a peaceful atmosphere.',
      rating: '4.9',
      reviews: '164',
      link: 'https://www.lovric.info/',
      image: 'https://lovric.info/dir_wp2/wp-content/uploads/Slike_za_web/LOVRIC/KUCA/Lovric_front2-scaled.jpg'
    },
    {
      id: '8',
      title: 'Zure Winery',
      location: 'Lumbarda (Podstrana area)',
      description: 'One of the largest producers on Korčula; organic methods; known for Grk, Pošip, Plavac Mali, and olive oil. Offers agrotourism experiences.',
      views: 'Overlooks sandy vineyards and the pine-fringed coastline of Lumbarda.',
      rating: '4.5',
      reviews: '',
      link: 'http://zure.hr/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0vKeiQeXr-6LX0hgpxH2jsopxFrcvtksZw&s'
    },
    {
      id: '9',
      title: 'Korta Katerina',
      location: 'Near Orebić (on the Pelješac Peninsula, often visited from Korčula by ferry)',
      description: 'Luxury winery offering Pošip and Plavac Mali; part of Relais & Châteaux; internationally awarded wines.',
      views: 'Lavish coastal estate with panoramic views over the Adriatic.',
      rating: '4.7',
      reviews: '251',
      link: 'https://www.kortakatarina.com/',
      image: 'https://lirp.cdn-website.com/b9bdc8e2/dms3rep/multi/opt/Korta+Katarina+122x630-1920w.jpg'
    },
    {
      id: '10',
      title: 'Popić Winery (Award Winning)',
      location: 'Mala Postrana 475, Lumbarda',
      description: 'Intimate tastings with locally produced Grk, Pošip, Rosé, and Plavac Mali; exceptional hospitality.',
      views: 'Elevated terrace with unobstructed views of the sea and nearby vineyards.',
      rating: '4.9',
      reviews: '419',
      link: 'https://www.instagram.com/popicwinery/?hl=en',
      image: 'https://lh3.googleusercontent.com/places/ANXAkqFRK8uWExLu_YvVoi83QDrXupG7_G0LhbyKSNrOcvkDFhRB1yGTj7xUEJ56Faq-x7nREia582H6kuSQwlfs9_NdQNdiolvLYmo=w1600-h1200'
    },
    {
      id: '11',
      title: 'Vitis Winery',
      location: 'Lumbarda 474, Lumbarda',
      description: 'Family-run with a casual atmosphere; four-wine tastings often served with cheese, bread, and olive oil.',
      views: 'Garden seating with sea and mountain views; relaxing and homey setting.',
      rating: '4.9',
      reviews: '388',
      link: 'https://www.facebook.com/vitiswinery/',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/bc/44/28/terrace.jpg?w=900&h=500&s=1'
    }
  ];

  const WineryCard = ({ winery, showLocation = false }: { winery: any, showLocation?: boolean }) => (
    <div className="bg-card rounded-2xl overflow-hidden card-shadow card-hover">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="h-48 md:h-full bg-primary/10">
            <img 
              src={winery.image} 
              alt={winery.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-bold mb-2">{winery.title}</h3>
          {showLocation && winery.location && (
            <p className="text-sm text-muted-foreground mb-2 font-medium">{winery.location}</p>
          )}
          <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{winery.description}</p>
          <p className="text-sm text-muted-foreground mb-4 italic">{winery.views}</p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            {winery.rating !== 'N/A' && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">{winery.rating}</span>
                {winery.reviews && <span className="text-xs text-muted-foreground">({winery.reviews})</span>}
              </div>
            )}
          </div>

          <a 
            href={winery.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Korčula Wines"
          subtitle="The History of Wine in Korčula Wines, Potential Wine Tour Itinerary, Plus Other Various Winery Options"
          backgroundImage="https://kildenmor.co.uk/kmwp/wp-content/uploads/2021/03/shutterstock_1030794592-281-29.jpg"
        />

        <div className="bg-card rounded-2xl p-6 mb-8 card-shadow">
          <div className="flex items-center gap-2 mb-4">
            <Grape className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">About Korčula Wines</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Korčula is renowned for its indigenous white wines, particularly the Grk and Pošip varieties, which are grown almost exclusively on the island. Its distinct microclimate—characterized by abundant sunshine, mild sea breezes, and limestone-rich soil—creates ideal conditions for producing crisp, mineral-driven wines with bright acidity and complex aromatics.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Pošip, originally cultivated in the village of Smokvica, has become one of Croatia's most celebrated white grapes, offering notes of stone fruit, citrus, and Mediterranean herbs. Grk, found primarily in the sandy vineyards of Lumbarda, is rarer and highly prized for its dry, full-bodied character and elegant salinity. Together, these varietals reflect Korčula's rich viticultural heritage, shaped over centuries of winemaking tradition. Whether enjoyed with fresh seafood or sipped seaside at sunset, Korčula wines are a true expression of place—vibrant, distinctive, and deeply tied to the island's coastal terroir.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Proposed Wine Tour Itinerary</h2>
          
          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80" 
              alt="Wine tour banner"
              className="w-full h-32 md:h-48 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6 mb-8">
            {mainTourWineries.map((winery) => (
              <WineryCard key={winery.id} winery={winery} />
            ))}
          </div>

          <ItinerarySchedule />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Other Winery Options</h2>
          <p className="text-muted-foreground mb-6">
            These wineries are not part of the main wine tour, but are highly recommended and can be visited on other days.
          </p>
          
          <div className="space-y-6">
            {otherWineries.map((winery) => (
              <WineryCard key={winery.id} winery={winery} showLocation={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineTours;
