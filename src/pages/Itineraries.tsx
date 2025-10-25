import { Calendar, Clock, MapPin, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Itineraries = () => {
  const itineraries = [
    {
      title: "3-Day Disney Magic",
      duration: "3 Days",
      parks: ["Magic Kingdom", "EPCOT", "Hollywood Studios"],
      budget: "$$$",
      ideal: "First-time Disney visitors",
      days: [
        {
          day: "Day 1: Magic Kingdom",
          schedule: [
            { time: "8:00 AM", activity: "Rope drop at Seven Dwarfs Mine Train" },
            { time: "9:00 AM", activity: "Space Mountain and Tomorrowland attractions" },
            { time: "12:00 PM", activity: "Lunch at Columbia Harbour House" },
            { time: "1:00 PM", activity: "Pirates of the Caribbean, Haunted Mansion" },
            { time: "3:00 PM", activity: "Big Thunder Mountain, Splash Mountain" },
            { time: "6:00 PM", activity: "Dinner at Be Our Guest (reservation required)" },
            { time: "8:00 PM", activity: "Evening parade and fireworks" }
          ]
        },
        {
          day: "Day 2: EPCOT",
          schedule: [
            { time: "9:00 AM", activity: "Join virtual queue for Guardians of the Galaxy" },
            { time: "9:30 AM", activity: "Test Track, Mission: SPACE" },
            { time: "12:00 PM", activity: "Lunch at Sunshine Seasons" },
            { time: "1:00 PM", activity: "Soarin', Living with the Land" },
            { time: "3:00 PM", activity: "World Showcase - start at Mexico" },
            { time: "5:00 PM", activity: "Frozen Ever After in Norway" },
            { time: "7:00 PM", activity: "Dinner in World Showcase (pick your favorite country)" },
            { time: "9:00 PM", activity: "Evening entertainment and Harmonious show" }
          ]
        },
        {
          day: "Day 3: Hollywood Studios",
          schedule: [
            { time: "7:00 AM", activity: "Join Rise of the Resistance virtual queue" },
            { time: "8:30 AM", activity: "Rope drop at Slinky Dog Dash" },
            { time: "10:00 AM", activity: "Tower of Terror, Rock 'n' Roller Coaster" },
            { time: "12:00 PM", activity: "Lunch at Woody's Lunch Box" },
            { time: "1:00 PM", activity: "Star Wars: Rise of the Resistance (when boarding group called)" },
            { time: "3:00 PM", activity: "Millennium Falcon, Star Tours" },
            { time: "5:00 PM", activity: "Mickey & Minnie's Runaway Railway" },
            { time: "7:00 PM", activity: "Dinner at Docking Bay 7" },
            { time: "9:00 PM", activity: "Evening entertainment" }
          ]
        }
      ]
    },
    {
      title: "2-Day Universal Thrill",
      duration: "2 Days",
      parks: ["Universal Studios", "Islands of Adventure"],
      budget: "$$",
      ideal: "Thrill seekers and Harry Potter fans",
      days: [
        {
          day: "Day 1: Islands of Adventure + Evening at Universal Studios",
          schedule: [
            { time: "8:00 AM", activity: "Rope drop at Hagrid's Motorbike Adventure" },
            { time: "9:30 AM", activity: "Forbidden Journey, Flight of the Hippogriff" },
            { time: "11:00 AM", activity: "VelociCoaster (multiple rides if line is short)" },
            { time: "1:00 PM", activity: "Lunch at Three Broomsticks (try Butterbeer!)" },
            { time: "2:00 PM", activity: "Spider-Man, Hulk Coaster" },
            { time: "4:00 PM", activity: "Ride Hogwarts Express to Universal Studios" },
            { time: "5:00 PM", activity: "Explore Diagon Alley, try interactive wands" },
            { time: "7:00 PM", activity: "Dinner at Leaky Cauldron" },
            { time: "8:00 PM", activity: "Gringotts ride with short evening wait" }
          ]
        },
        {
          day: "Day 2: Universal Studios + Evening at Islands of Adventure",
          schedule: [
            { time: "9:00 AM", activity: "Rope drop at Gringotts" },
            { time: "10:00 AM", activity: "Transformers, Mummy's Revenge" },
            { time: "12:00 PM", activity: "Lunch at Mel's Drive-In" },
            { time: "1:00 PM", activity: "Men in Black, Simpsons Ride" },
            { time: "3:00 PM", activity: "Despicable Me, E.T. Adventure" },
            { time: "5:00 PM", activity: "Take Hogwarts Express back to Islands" },
            { time: "6:00 PM", activity: "Re-ride favorite attractions" },
            { time: "8:00 PM", activity: "Dinner at Mythos" },
            { time: "9:00 PM", activity: "Evening rides with shorter waits" }
          ]
        }
      ]
    },
    {
      title: "5-Day Ultimate Orlando",
      duration: "5 Days",
      parks: ["All Disney Parks", "Both Universal Parks"],
      budget: "$$$$",
      ideal: "Complete Orlando experience",
      days: [
        {
          day: "Day 1: Magic Kingdom",
          schedule: [
            { time: "All Day", activity: "Focus on Magic Kingdom classics - arrive at rope drop, stay for fireworks. Use Genie+ for popular attractions." }
          ]
        },
        {
          day: "Day 2: Universal Islands of Adventure",
          schedule: [
            { time: "All Day", activity: "Hit all major thrill rides. Start with Hagrid's, then Hogsmeade, VelociCoaster. Get park-to-park ticket for Hogwarts Express." }
          ]
        },
        {
          day: "Day 3: EPCOT",
          schedule: [
            { time: "Morning", activity: "Future World attractions - Guardians, Test Track, Soarin'" },
            { time: "Afternoon/Evening", activity: "World Showcase - eat around the world, try unique snacks and drinks" }
          ]
        },
        {
          day: "Day 4: Universal Studios",
          schedule: [
            { time: "All Day", activity: "Complete Diagon Alley experience, ride all attractions, explore CityWalk in evening" }
          ]
        },
        {
          day: "Day 5: Hollywood Studios + Animal Kingdom Split",
          schedule: [
            { time: "8:00 AM - 1:00 PM", activity: "Hollywood Studios - Rise of the Resistance, Slinky Dog, Tower of Terror" },
            { time: "2:00 PM - 9:00 PM", activity: "Animal Kingdom - Flight of Passage, Kilimanjaro Safari, Expedition Everest, evening shows" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sample Itineraries
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pre-planned schedules to help you make the most of your Orlando vacation. 
              Customize these based on your preferences and energy levels.
            </p>
          </div>

          {/* Itineraries */}
          <div className="space-y-12">
            {itineraries.map((itinerary, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{itinerary.title}</CardTitle>
                      <CardDescription className="text-base">
                        Ideal for: {itinerary.ideal}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{itinerary.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-secondary" />
                        <span>{itinerary.budget}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Parks: {itinerary.parks.join(", ")}</span>
                    </div>
                  </div>

                  {itinerary.days.map((day, dayIndex) => (
                    <div key={dayIndex} className="mb-8 last:mb-0">
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-accent" />
                        {day.day}
                      </h3>
                      <div className="space-y-3 pl-7">
                        {day.schedule.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex gap-4">
                            <span className="font-medium text-primary min-w-[80px]">
                              {item.time}
                            </span>
                            <span className="text-muted-foreground">{item.activity}</span>
                          </div>
                        ))}
                      </div>
                      {dayIndex < itinerary.days.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Itinerary Planning Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                <strong>Be Flexible:</strong> These are guidelines, not strict rules. Adjust based on crowd levels, weather, and your energy.
              </p>
              <p>
                <strong>Take Breaks:</strong> Don't try to do everything. Build in time for rest, especially with kids. Return to your hotel mid-day to recharge.
              </p>
              <p>
                <strong>Make Reservations:</strong> Book dining 60 days in advance for Disney, 90 days for character meals. Lightning Lane purchases open at 7 AM.
              </p>
              <p>
                <strong>Check Park Hours:</strong> Parks often have different opening/closing times. Some offer early entry or extended evening hours for resort guests.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Itineraries;
