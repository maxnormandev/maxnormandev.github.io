import { Sparkles, Clock, Utensils, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroDisney from "@/assets/hero-disney.jpg";

const Disney = () => {
  const parks = [
    {
      id: "magic-kingdom",
      name: "Magic Kingdom",
      shortName: "Magic Kingdom",
      icon: "🏰",
      rides: [
        "Seven Dwarfs Mine Train",
        "Space Mountain",
        "Big Thunder Mountain",
        "Pirates of the Caribbean",
        "Haunted Mansion"
      ],
      genieTips: "Book Seven Dwarfs Mine Train first thing in the morning. Use Genie+ for Space Mountain and Big Thunder Mountain during peak hours.",
      dining: "Be Our Guest Restaurant for lunch (reservations required), Casey's Corner for quick hot dogs, or Pecos Bill for Tex-Mex."
    },
    {
      id: "epcot",
      name: "EPCOT",
      shortName: "EPCOT",
      icon: "🌍",
      rides: [
        "Test Track",
        "Frozen Ever After",
        "Soarin' Around the World",
        "Remy's Ratatouille Adventure",
        "Guardians of the Galaxy: Cosmic Rewind"
      ],
      genieTips: "Virtual queue required for Guardians. Book Test Track or Frozen as your first Genie+ selection. World Showcase opens at 11am.",
      dining: "Try cuisine from around World Showcase. Book Le Cellier (Canada) or Via Napoli (Italy) in advance. Food & Wine Festival offers great snacks."
    },
    {
      id: "hollywood-studios",
      name: "Hollywood Studios",
      shortName: "Hollywood Studios",
      icon: "🎬",
      rides: [
        "Star Wars: Rise of the Resistance",
        "Slinky Dog Dash",
        "Tower of Terror",
        "Rock 'n' Roller Coaster",
        "Millennium Falcon: Smugglers Run"
      ],
      genieTips: "Join virtual queue for Rise of the Resistance at 7am. Book Slinky Dog Dash with Genie+ immediately. Arrive 30 mins before park opening.",
      dining: "Oga's Cantina in Galaxy's Edge (reservations essential), Sci-Fi Dine-In Theater for unique atmosphere, or Woody's Lunch Box for quick meals."
    },
    {
      id: "animal-kingdom",
      name: "Animal Kingdom",
      shortName: "Animal Kingdom",
      icon: "🦁",
      rides: [
        "Avatar Flight of Passage",
        "Expedition Everest",
        "Kilimanjaro Safaris",
        "Dinosaur",
        "Kali River Rapids"
      ],
      genieTips: "Book Flight of Passage as early as possible - it's the hardest Lightning Lane to get. Do Kilimanjaro Safaris in morning or evening for best animal viewing.",
      dining: "Satu'li Canteen in Pandora for bowls, Flame Tree Barbecue for outdoor seating with great views, or Tusker House for character dining buffet."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={heroDisney} 
          alt="Disney World" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Walt Disney World
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Where Dreams Come True
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
              Walt Disney World Resort features four incredible theme parks, each with its own unique magic. 
              From the iconic Cinderella Castle to thrilling attractions and world-class entertainment, 
              Disney World offers unforgettable experiences for the whole family.
            </p>
          </div>

          {/* Park Guides */}
          <Tabs defaultValue="magic-kingdom" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent">
              {parks.map((park) => (
                <TabsTrigger 
                  key={park.id} 
                  value={park.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap px-3 py-2 text-sm md:text-base"
                >
                  <span className="mr-2 flex-shrink-0">{park.icon}</span>
                  <span className="hidden md:inline truncate">{park.name}</span>
                  <span className="md:hidden truncate">{park.shortName}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {parks.map((park) => (
              <TabsContent key={park.id} value={park.id} className="mt-6 space-y-6 animate-fade-in">
                {/* Must-Do Rides */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Must-Do Attractions
                    </CardTitle>
                    <CardDescription>
                      Don't miss these top rides at {park.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {park.rides.map((ride, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>{ride}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Genie+ Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-secondary" />
                      Genie+ Strategy
                    </CardTitle>
                    <CardDescription>
                      Maximize your time with these Lightning Lane tips
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{park.genieTips}</p>
                  </CardContent>
                </Card>

                {/* Dining */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-accent" />
                      Dining Recommendations
                    </CardTitle>
                    <CardDescription>
                      Where to eat at {park.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{park.dining}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* General Tips */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Disney World Pro Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Park Hopper vs. Single Park</h3>
                <p className="text-muted-foreground">
                  Park Hopper allows visiting multiple parks per day (hopping starts at 2pm). Best for 4+ day trips. 
                  Single park tickets are better for short visits or first-timers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-muted-foreground">
                  January-February and September-November are least crowded. Avoid spring break, summer, and holidays. 
                  Weekdays are typically less busy than weekends.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Getting Around</h3>
                <p className="text-muted-foreground">
                  Disney provides free transportation via buses, monorails, boats, and Skyliner. 
                  Staying on-property gives you 30-minute early park entry and extended evening hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Disney;
