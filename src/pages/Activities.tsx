
import React from 'react';
import PageHeader from '../components/PageHeader';
import ActivityCard from '../components/ActivityCard';
import { Utensils, Wine, Waves, Mountain, Boat } from 'lucide-react';

const Activities = () => {
  const restaurants = [
    {
      id: '1',
      title: 'LD Restaurant',
      description: 'Upscale seafood-focused restaurant with waterfront views.',
      category: 'Fine Dining',
      link: 'https://ldrestaurant.com',
      image: 'https://images.squarespace-cdn.com/content/v1/60ab7f179cfc63389ff1d68e/58058d8e-4c73-47ba-a81c-46fbd5d4f0e4/DSC_4181.jpg'
    },
    {
      id: '2',
      title: 'Filippi (Zakerjan)',
      description: 'Elegant seaside restaurant with Mediterranean cuisine and wine pairings.',
      category: 'Fine Dining',
      link: 'https://restaurantfilippi.com',
      image: 'https://www.explore-adriatic.com/site/assets/files/1225/screenshot_20240622_212738.jpg'
    },
    {
      id: '3',
      title: "Mimi's",
      description: 'Simple eatery near the beach with fresh dishes and drinks.',
      category: 'Casual',
      link: 'https://www.taraslodge.com/en/eat-and-drink.html',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/50/39/ce/avocado-toast.jpg?w=900&h=500&s=1'
    },
    {
      id: '4',
      title: 'Aterina',
      description: 'Casual seafood restaurant with harbor views and local specialties.',
      category: 'Seafood',
      link: 'https://www.facebook.com/aterinakorcula/',
      image: 'https://www.korculainfo.com/blog/wp-content/uploads/2016/01/restaurant-aterina-korcula-goat-cheese1.jpg'
    },
    {
      id: '5',
      title: 'Konoba Mate',
      description: 'Authentic konoba serving Croatian classics in a homey setting.',
      category: 'Traditional Croatian',
      link: 'https://www.konobamate.com/',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/cf/dc/45/great-place-food-and.jpg?w=900&h=500&s=1'
    },
    {
      id: '6',
      title: 'Konoba Nonno',
      description: 'Rustic Mediterranean-style restaurant with cozy atmosphere.',
      category: 'Mediterranean',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/b7/77/8d/hand-rolled-pasta-with.jpg?w=900&h=500&s=1'
    },
    {
      id: '7',
      title: 'Adio Mare',
      description: 'Popular waterfront spot offering local fare and outdoor seating.',
      category: 'Casual',
      link: 'https://www.konobaadiomare.hr/en/home/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYY6f30q8Yl9uVS-BdSw8UBNFWsz5Pxyu8OQ&s'
    },
    {
      id: '8',
      title: 'Konoba Belin',
      description: 'Family-run konoba with hearty Dalmatian food and rustic decor.',
      category: 'Rustic',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/78/ce/fc/caption.jpg?w=1200&h=1200&s=1'
    },
    {
      id: '9',
      title: 'IGNIS Korčula',
      description: 'Modern restaurant serving creative Croatian cuisine in the Old Town.',
      category: 'Modern Croatian',
      link: 'https://www.ignis-korcula.com/',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/db/3a/74/wine-and-tapas-bar-lole.jpg?w=600&h=-1&s=1'
    }
  ];

  const bars = [
    {
      id: '1',
      title: 'Dos Locos Beach Bar',
      description: 'Lively beachfront bar offering cocktails, music, and ocean views.',
      category: 'Beach Bar',
      link: 'http://dos-locos-no1.business.site',
      image: 'https://www.korculainfo.com/blog/wp-content/uploads/2016/02/dos-locos-korcula1.jpg'
    },
    {
      id: '2',
      title: 'Massimo Rooftop Bar',
      description: 'Historic tower-top bar known for sunset views and signature cocktails.',
      category: 'Rooftop Bar',
      image: 'https://www.korculainfo.com/blog/wp-content/uploads/2016/02/massimo-bar-korcula2.jpg'
    },
    {
      id: '3',
      title: 'Caffe Bar Academia',
      description: 'Chill café-bar serving coffee, drinks, and light bites.',
      category: 'Cafe Bar',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/85/96/f7/exterior.jpg?w=900&h=500&s=1'
    },
    {
      id: '4',
      title: 'Servantes Cocktail Bar',
      description: 'Stylish cocktail bar in the heart of Old Town, known for creative drinks, lounge vibes, and occasional live music.',
      category: 'Cocktail Bar',
      image: 'https://www.korculainfo.com/blog/wp-content/uploads/2015/11/cafe-bar-servantes2015a.jpg'
    },
    {
      id: '5',
      title: 'Mariola Wine Bar',
      description: 'Trendy wine bar offering local Croatian wines in a cozy setting.',
      category: 'Wine Bar',
      link: 'https://instagram.com/mariola.winebar',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/ee/80/7c/caption.jpg?w=900&h=500&s=1'
    },
    {
      id: '6',
      title: 'The Jungle Club',
      description: 'Popular summer-only open-air club in the woods near the beach, known for DJ sets and late-night dancing.',
      category: 'Open-Air Nightclub',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/f7/21/6a/caption.jpg?w=1400&h=-1&s=1'
    },
    {
      id: '7',
      title: 'Deja Vu',
      description: 'Popular late-night bar with music and a casual vibe.',
      category: 'Night Bar',
      image: 'https://img.restaurantguru.com/cc75-Deja-Vu-Korcula-design-1.jpg'
    }
  ];

  const beaches = [
    {
      id: '1',
      title: 'Lumbarda',
      description: 'Quiet beach town known for Grk wine and scenic waterfront views.',
      category: 'Coastal Village',
      image: 'https://www.korcula-larus.com/wp-content/uploads/2015/02/summer-sand-beach-lumbarda.jpg'
    },
    {
      id: '2',
      title: 'Pupnatska Luka',
      description: 'Beautiful cove with turquoise waters and white-pebble shore.',
      category: 'Cove Beach',
      image: 'https://jaywaytravel.com/wp-content/uploads/2023/03/Pupnatska-Luka-croatia.jpg'
    },
    {
      id: '3',
      title: 'Bacva',
      description: 'Remote beach with minimal crowds and clear waters.',
      category: 'Hidden Beach',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/67/a9/9d/caption.jpg?w=900&h=500&s=1'
    },
    {
      id: '4',
      title: 'Moro Beach',
      description: 'Lesser-known sandy beach for quiet swimming and sunbathing.',
      category: 'Secluded Beach',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/39/d5/e6/vela-stupa-island.jpg?w=900&h=500&s=1'
    },
    {
      id: '5',
      title: 'Samograd Bay',
      description: 'Accessible mainly by boat; clear water and rugged coastline.',
      category: 'Boat-In Beach',
      image: 'https://beaches-searcher.com/images/beaches/191221760/HR221760.jpg'
    },
    {
      id: '6',
      title: 'Zitna Beach',
      description: 'Small, sandy beach with shallow entry, ideal for families.',
      category: 'Family-Friendly',
      image: 'https://www.croatiagems.com/wp-content/uploads/2015/12/Zitna-Beach-Zavalatica-Korcula-Island-3-1024x768.jpg'
    },
    {
      id: '7',
      title: 'Bili Zal',
      description: 'A pebbly beach with crystal-clear water and dramatic rocky surroundings.',
      category: 'Rocky Beach',
      image: 'https://img.adriagate.com/cdn/new/photos/2439170-15/beach-bilin-zal-lumbarda-island-korcula_0_550.jpg'
    },
    {
      id: '8',
      title: 'Pržina',
      description: 'One of the few sandy beaches on the island, popular with locals and tourists.',
      category: 'Sandy Beach',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/75/c3/0c/beach-przina-lumbarda.jpg?w=700&h=400&s=1'
    }
  ];

  const outdoorActivities = [
    {
      id: '1',
      title: 'Explore Old Town',
      description: 'Wander narrow medieval streets, stone houses, and historic landmarks.',
      category: 'Sightseeing',
      image: 'https://epepa.eu/wp-content/uploads/2019/12/things-to-do-in-korcula-town-935x624.jpg'
    },
    {
      id: '2',
      title: "St Mark's Cathedral",
      description: '15th-century cathedral with stunning Gothic-Renaissance architecture.',
      category: 'Cultural Landmark',
      image: 'https://media.timeout.com/images/102321005/750/422/image.jpg'
    },
    {
      id: '3',
      title: 'Marco Polo House',
      description: 'Alleged birthplace of explorer Marco Polo, now a small museum.',
      category: 'Museum',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/e8/43/d9.jpg'
    },
    {
      id: '4',
      title: 'Town Museum',
      description: "Local museum showcasing Korčula's history, art, and maritime culture.",
      category: 'Museum',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7gdhBUEfp-siVFuOMAcN7RgyclqlhlzQtQ&s'
    },
    {
      id: '5',
      title: 'Pupnat',
      description: 'Quaint inland village with panoramic island views and rustic charm.',
      category: 'Traditional Village',
      image: 'https://www.visitkorcula.eu/assets/images/tour-view/grid-images/island-korcula-pupnat.jpg'
    },
    {
      id: '6',
      title: 'Marishka Sword Dance',
      description: 'Local sword dance performance celebrating Korčulan heritage.',
      category: 'Traditional Dance',
      image: 'https://visitkorcula.net/images/korcula-sword-dance-festival/moreska-redking-blackking-bula.jpg'
    },
    {
      id: '7',
      title: 'Rent Efoil – Banja Sailfin',
      description: 'Rent electric hydrofoils and surfboards at Banja beach.',
      category: 'Water Sports',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9v2o7FrN9jpeouwVc1fwOP-NYu7keD-UQA&s'
    },
    {
      id: '8',
      title: 'Zrnovo Village',
      description: 'Traditional stone village with olive groves and local eateries.',
      category: 'Village Exploration',
      image: 'https://www.visitkorcula.eu/assets/images/tour-view/grid-images/zrnovo-postrana-korcula.jpg'
    },
    {
      id: '9',
      title: 'Hop-On Hop-Off Island Hopping',
      description: 'Boat network for hopping between nearby islands at your own pace.',
      category: 'Boat Tour',
      image: 'https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/aa822ed119e2c993.jpeg'
    },
    {
      id: '10',
      title: 'La Banja Beach Club',
      description: 'Upscale beach lounge with food, drinks, and seaside sunbeds.',
      category: 'Beach Club',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/4f/4d/e4/life-takes-you-down-many.jpg?w=900&h=-1&s=1'
    },
    {
      id: '11',
      title: 'Archipelago Boat Tour',
      description: 'Scenic boat tours across nearby islands like Vrnik, Badija, and Planjak.',
      category: 'Guided Tour',
      link: 'https://www.getyourguide.com/korcula-l2310/sail-away-korcula-cruising-tour-with-snack-and-refreshment-t735605/?ranking_uuid=623fa9d0-e177-49c7-b6ca-9bcd38405858',
      image: 'https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=620,height=400,dpr=2/tour_img/6cdb7712723f55962dd265ea2b35dae0de6e61f74df0999a944bf87654f68765.jpg'
    },
    {
      id: '12',
      title: 'Wakeboarding/Wakesurfing',
      description: "High-adrenaline tow sports offered along Korčula's southern shores.",
      category: 'Water Sports',
      link: 'https://www.airbnb.com/experiences/1251811?checkin=2025-07-26&checkout=2025-08-02&location=Korcula%2C%20Croatia&currentTab=experience_tab&federatedSearchId=fbcf6680-5789-4e2a-a1c5-17f8d581b8d0&searchId=55e553ec-7969-4070-a347-f0508d867903&sectionId=915fd5fa-97b7-478b-90fa-9faa6a834ec4',
      image: 'https://a0.muscache.com/im/pictures/Mt/MtTemplate-1251811/original/0f912108-e2be-48d0-9e6e-30843c4b508e.jpeg?im_w=1920'
    },
    {
      id: '13',
      title: 'Vela Spila Cave',
      description: 'Prehistoric cave with artifacts dating 20,000 BC; overlooks bay. Artifact display in Vela Luka.',
      category: 'Cave / Archaeological Site',
      image: 'https://cdn.getyourguide.com/img/tour/a5f68cda18bad3c276e5b6de5bc2d5dd0e251c8e0079d28ff12d5a3621f34ca6.jpg/145.jpg'
    },
    {
      id: '14',
      title: 'Badija Island & Franciscan Monastery',
      description: '14th‑century monastery, shaded beaches, reachable via taxi-boat from Korčula Town.',
      category: 'Monastery & Bay',
      image: 'https://villa-gabriela.com/wp-content/uploads/villa-gabriela-korcula.png'
    },
    {
      id: '15',
      title: 'Panorama Korčula viewpoint',
      description: 'Hilltop viewpoint – expansive views of town & Adriatic, ideal at sunset.',
      category: 'Panorama',
      image: 'https://www.korculaexplorer.com/wp-content/uploads/2020/04/Blog-Image-Novi-Put.jpg'
    },
    {
      id: '16',
      title: "Great Governor's Tower",
      description: 'Historic tower housing museum; offers elevated views of old town & strait.',
      category: 'Tower / Museum',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/dd/ce/b8/short-tower.jpg?w=900&h=500&s=1'
    },
    {
      id: '17',
      title: 'Land Gate & Revelin Tower',
      description: 'Main southern gate with 13th‑century tower. Climb for harbor & sea strait views.',
      category: 'Cultural Landmark',
      image: 'https://www.korculainfo.com/blog/wp-content/uploads/2015/10/tower-revelin11.jpg'
    },
    {
      id: '18',
      title: 'Cliff Jumping Spot 1',
      description: 'Hidden cove with mid-height cliffs and deep entry points for jumps.',
      category: 'Cliff Diving',
      image: 'https://www.korculaboating.com/wp-content/uploads/2020/01/20190815_150330-min-scaled.jpg'
    },
    {
      id: '19',
      title: 'Cliff Jumping Spot 2',
      description: 'Popular sunset spot for adventurous cliff diving into the Adriatic.',
      category: 'Cliff Diving',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7znmceAoh6twQCW_F-sIy6n1_96b47dIDrw&s'
    },
    {
      id: '20',
      title: 'Cliff Jumping Spot 3',
      description: 'Popular sunset spot for adventurous cliff diving into the Adriatic.',
      category: 'Cliff Jumping',
      image: 'https://www.pelago.com/img/products/ES-Spain/uncharted-marine-reserve-cave-snorkel-cliff-jumping-kayak-tour/e0e82672-49f1-428c-a451-ade0968ef6e0_uncharted-marine-reserve-cave-snorkel-cliff-jumping-kayak-tour-xlarge.jpg'
    }
  ];

  const boatTrips = [
    {
      id: '1',
      title: 'Lastovo Island',
      description: 'A secluded island with untouched nature, great for hiking and snorkeling.',
      category: 'Remote Island',
      image: 'https://cdn.prod.website-files.com/66696ce4ae5131d8cac4cb43/675aad8f7505122d4072341e_zaklopatica-otok-lastovo-00.jpg'
    },
    {
      id: '2',
      title: 'Proizd',
      description: 'Known for turquoise water and white flat rocks; top-rated swimming spot.',
      category: 'Beach Island',
      image: 'https://i.ytimg.com/vi/asFp8TAHUWc/maxresdefault.jpg'
    },
    {
      id: '3',
      title: 'Badija Island',
      description: 'Small island with a 14th-century monastery and roaming wild deer.',
      category: 'Monastery Island',
      image: 'https://villa-gabriela.com/wp-content/uploads/villa-gabriela-korcula.png'
    },
    {
      id: '4',
      title: 'Mljet National Park',
      description: 'Forested island with saltwater lakes, monastery, and hiking trails.',
      category: 'Nature Park',
      image: 'https://backpackers-review.com/wp-content/uploads/2018/06/snapseed11.jpg?w=740'
    },
    {
      id: '5',
      title: 'Pelješac Peninsula',
      description: 'Mainland wine region across the channel, great for tastings and seafood.',
      category: 'Wine Region',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/7b/23/4c/loviste-peljesac.jpg?w=1400&h=1400&s=1'
    },
    {
      id: '6',
      title: 'Vrnik Island',
      description: 'Charming car-free island with art studios, quiet beaches, and old quarries.',
      category: 'Artist Island',
      image: 'https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/469452247_2578491195683750_9131068664810788920_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=vpOpHQgXeGcQ7kNvwG0ZrIz&_nc_oc=AdnxDMOiPPm-O8MXs5P6CP-SGH97d7os6SbYJTRIvOUOJx10a6NvGldoKNA5Bn-UIbM&_nc_zt=23&_nc_ht=scontent-bos5-1.xx&_nc_gid=OaWtX7m5J8wSK6bB99dK1A&oh=00_AfM2lUiHt2ue6lLxXBm5CK6X52-gyyOnbp-04fJ9GyEI8w&oe=686B6FD2'
    },
    {
      id: '7',
      title: 'Hvar Island',
      description: "Longest Croatian island (68 km) famed as Europe's sunniest, with lavender fields, vineyards, ancient Greek plain (UNESCO), medieval towns (Hvar Town, Stari Grad), beaches, nightlife & water sports",
      category: 'Natural & Cultural',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/01/54/hvar-island.jpg?w=1400&h=1400&s=1'
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
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Activities and Places"
          subtitle="Exploring the best of Korčula"
          backgroundImage="https://www.carryonchronicles.com/wp-content/uploads/2022/09/things-to-do-in-korcula.jpg"
        />

        <ActivitySection title="Restaurants" items={restaurants} icon={Utensils} />
        <ActivitySection title="Bars & Nightlife" items={bars} icon={Wine} />
        <ActivitySection title="Beaches" items={beaches} icon={Waves} />
        <ActivitySection title="Outdoor Activities" items={outdoorActivities} icon={Mountain} />
        <ActivitySection title="Boat Trips to Other Islands" items={boatTrips} icon={Boat} />

        {/* Interactive Google Map */}
        <div className="bg-card rounded-2xl p-6 card-shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">Interactive Map</h2>
          <div className="rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=1AZT560ruovZVDFZd0GvKL64EOO9AmNA&ehbc=2E312F"
              width="100%" 
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Korčula Activities Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
