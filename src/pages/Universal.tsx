import { Zap, Clock, Wand2, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroUniversal from "@/assets/hero-universal.jpg";

const Universal = () => {
  const parks = [
    {
      id: "studios",
      name: "Universal Studios",
      shortName: "Universal Studios",
      icon: "🎬",
      rides: [
        "Harry Potter and the Escape from Gringotts",
        "The Mummy's Revenge",
        "Transformers: The Ride 3D",
        "Men in Black Alien Attack",
        "Despicable Me Minion Mayhem"
      ],
      highlights: "Home to Diagon Alley. Don't miss the Hogwarts Express connecting to Islands of Adventure. Experience the amazing wand magic at interactive locations throughout Diagon Alley.",
      expressPass: "Use Express Pass for Gringotts in the afternoon when lines are longest. Early morning rope drop is best for walk-on times."
    },
    {
      id: "islands",
      name: "Islands of Adventure",
      shortName: "Islands of Adventure",
      icon: "🌴",
      rides: [
        "Harry Potter and the Forbidden Journey",
        "Hagrid's Magical Creatures Motorbike Adventure",
        "VelociCoaster",
        "The Amazing Adventures of Spider-Man",
        "The Incredible Hulk Coaster"
      ],
      highlights: "Features Hogsmeade village and Hogwarts Castle. VelociCoaster is one of the best coasters in Florida. Three Broomsticks serves authentic British fare and Butterbeer.",
      expressPass: "Hagrid's Motorbike is NOT included in Express Pass - arrive at rope drop or use Virtual Line. VelociCoaster Express Pass is worth it for multiple rides."
    },
    {
      id: "volcano-bay",
      name: "Volcano Bay",
      shortName: "Volcano Bay",
      icon: "🌊",
      rides: [
        "Ko'okiri Body Plunge",
        "Krakatau Aqua Coaster",
        "Honu & Ika Moana (wave slides)",
        "Puihi (raft ride)",
        "Waturi Beach (wave pool)"
      ],
      highlights: "Florida's most innovative water park with Virtual Line system. No need to stand in physical queues - use TapuTapu wearable technology to reserve your spot.",
      expressPass: "No Express Pass at Volcano Bay. TapuTapu included with admission. Arrive early to claim lounge chairs and cabanas."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={heroUniversal} 
          alt="Universal Orlando" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Universal Orlando Resort
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Adventure Awaits
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Universal Orlando Resort features three incredible parks packed with thrilling rides and immersive experiences. 
              Home to The Wizarding World of Harry Potter, cutting-edge attractions, and Florida's premier water park, 
              Universal delivers non-stop excitement for thrill-seekers and families alike.
            </p>
          </div>

          {/* Park Guides */}
          <Tabs defaultValue="studios" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto gap-2 bg-transparent">
              {parks.map((park) => (
                <TabsTrigger 
                  key={park.id} 
                  value={park.id}
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground whitespace-nowrap px-3 py-2 text-sm sm:text-base"
                >
                  <span className="mr-2 flex-shrink-0">{park.icon}</span>
                  <span className="hidden sm:inline truncate">{park.name}</span>
                  <span className="sm:hidden truncate">{park.shortName}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {parks.map((park) => (
              <TabsContent key={park.id} value={park.id} className="mt-6 space-y-6 animate-fade-in">
                {/* Top Attractions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-accent" />
                      Top Attractions
                    </CardTitle>
                    <CardDescription>
                      Must-experience rides at {park.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {park.rides.map((ride, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Zap className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>{ride}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Park Highlights */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wand2 className="h-5 w-5 text-primary" />
                      Park Highlights
                    </CardTitle>
                    <CardDescription>
                      What makes {park.name} special
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{park.highlights}</p>
                  </CardContent>
                </Card>

                {/* Express Pass Strategy */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-secondary" />
                      Express Pass Strategy
                    </CardTitle>
                    <CardDescription>
                      Skip the regular lines with these tips
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{park.expressPass}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Harry Potter Section */}
          <Card className="mt-12 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-6 w-6 text-accent" />
                The Wizarding World of Harry Potter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Park-to-Park Ticket Required</h3>
                <p className="text-muted-foreground">
                  To experience the Hogwarts Express between Hogsmeade (Islands of Adventure) and Diagon Alley (Universal Studios), 
                  you need a park-to-park ticket. The train ride is an attraction itself with different experiences each direction.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interactive Wands</h3>
                <p className="text-muted-foreground">
                  Purchase interactive wands at Ollivanders to cast spells throughout both Harry Potter areas. 
                  Look for medallions on the ground marking spell locations. Each wand comes with a map.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Must-Try: Butterbeer</h3>
                <p className="text-muted-foreground">
                  Available cold, frozen, or hot. Try the frozen version on a warm day. 
                  Also available: Butterbeer ice cream, Butterbeer fudge, and Butterbeer potted cream.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* General Tips */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Universal Orlando Pro Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Express Pass Worth It?</h3>
                <p className="text-muted-foreground">
                  Express Pass can be expensive but saves hours during busy seasons. Stay at a Premier Universal hotel 
                  to get UNLIMITED Express Pass included with your room. Not valid for Hagrid's Motorbike Adventure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-muted-foreground">
                  Late January-February and September are least crowded. Summer and holidays are busiest. 
                  Mardi Gras (Feb-Apr) and Halloween Horror Nights (Sept-Oct) offer unique experiences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Getting Around</h3>
                <p className="text-muted-foreground">
                  Walk between Universal Studios and Islands of Adventure (5-10 minutes). 
                  Water taxis and buses connect to Volcano Bay and Universal hotels. CityWalk is the entertainment district between parks.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Universal;
