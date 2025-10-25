import { Lightbulb, Calendar, Home, Bus, Wallet, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Tips = () => {
  const tipCategories = [
    {
      icon: Calendar,
      title: "Best Times to Visit",
      color: "text-primary",
      tips: [
        {
          subtitle: "Least Crowded Months",
          content: "January (after MLK weekend), February (except President's Day week), early September, and late November are typically the least crowded times."
        },
        {
          subtitle: "Weather Considerations",
          content: "Summer (June-August) is hot and humid with afternoon thunderstorms. Winter (Dec-Feb) is pleasant but can be chilly in mornings/evenings. Spring and fall offer the best weather."
        },
        {
          subtitle: "Special Events",
          content: "EPCOT festivals (Food & Wine, Flower & Garden), Universal's Mardi Gras, and Halloween Horror Nights add unique experiences but increase crowds."
        },
        {
          subtitle: "Avoid Peak Times",
          content: "Spring break, summer vacation, Thanksgiving week, and Christmas through New Year's are the busiest and most expensive times to visit."
        }
      ]
    },
    {
      icon: Home,
      title: "Where to Stay",
      color: "text-secondary",
      tips: [
        {
          subtitle: "Disney Resort Hotels (On-Site)",
          content: "Benefits: Early park entry (30 minutes), extended evening hours, free parking at parks, Disney transportation, charging privileges. Costs more but adds convenience and magic."
        },
        {
          subtitle: "Universal Resort Hotels",
          content: "Premier hotels include unlimited Express Pass - massive value! Also get early park admission. Portofino Bay, Hard Rock, and Royal Pacific are Premier level."
        },
        {
          subtitle: "Good Neighbor Hotels",
          content: "Hotels along International Drive or near Disney Springs offer lower rates. Consider hotels with free breakfast and shuttles to parks. Marriott, Hilton, and Holiday Inn have good options."
        },
        {
          subtitle: "Vacation Rentals",
          content: "Condos or homes near parks provide more space and kitchens for families. Great for longer stays and larger groups. Check distances to parks carefully."
        }
      ]
    },
    {
      icon: Bus,
      title: "Transportation",
      color: "text-accent",
      tips: [
        {
          subtitle: "Disney Transportation",
          content: "Buses, monorails, boats, and Skyliner gondolas are free for all guests. Resort guests get the most options. Allow 30-60 minutes for travel between locations."
        },
        {
          subtitle: "Universal Transportation",
          content: "Walk between Universal Studios and Islands of Adventure (5-10 min). Water taxis and buses connect Volcano Bay and resort hotels. Everything is more compact than Disney."
        },
        {
          subtitle: "Rental Cars",
          content: "Useful if staying off-site or visiting multiple resort areas. Disney charges $25-50/night for resort parking, plus $25-30 for park parking. Universal parking is $27-50/day."
        },
        {
          subtitle: "Rideshare Services",
          content: "Uber and Lyft work throughout Orlando. Can be cheaper than parking for single-day visits. Know your pickup locations - parks have designated rideshare zones."
        }
      ]
    },
    {
      icon: Wallet,
      title: "Money-Saving Strategies",
      color: "text-primary",
      tips: [
        {
          subtitle: "Bring Your Own Snacks",
          content: "All parks allow outside food/drinks (no glass containers). Pack sandwiches, snacks, and refillable water bottles. Can save $50+ per day for a family."
        },
        {
          subtitle: "Multi-Day Tickets",
          content: "Per-day cost decreases significantly with longer tickets. 4-day Disney ticket costs only ~$20 more per day than 1-day ticket. Same principle applies to Universal."
        },
        {
          subtitle: "Skip Unnecessary Add-Ons",
          content: "Park Hopper, Genie+, and Express Pass add up quickly. Evaluate if you truly need them. First-timers can have a great time without these extras."
        },
        {
          subtitle: "Eat Off-Site",
          content: "Leave parks for lunch at nearby restaurants - food is cheaper and less crowded. Disney Springs and Universal CityWalk offer more affordable options than inside parks."
        },
        {
          subtitle: "Book Packages",
          content: "Bundling hotel + tickets often provides savings. Authorized Disney vacation planners can find deals and handle reservations for free."
        }
      ]
    },
    {
      icon: Clock,
      title: "Time-Saving Tips",
      color: "text-secondary",
      tips: [
        {
          subtitle: "Arrive Before Opening",
          content: "Get to parks 30-60 minutes before official opening. Rope drop crowds are manageable and you can hit 3-4 major attractions before 11 AM."
        },
        {
          subtitle: "Use Mobile Ordering",
          content: "Skip food lines with My Disney Experience or Universal app. Order ahead, get notification when ready, pick up at mobile order window. Saves 20-40 minutes per meal."
        },
        {
          subtitle: "Strategic Genie+/Express Pass Use",
          content: "Book your first selection right at 7 AM. Stack return times throughout the day. Focus on attractions with longest standby waits (check app for current times)."
        },
        {
          subtitle: "Split Days",
          content: "Visit parks in early morning (rope drop until 12-1 PM), return to hotel for rest/pool, come back in evening. You'll have more energy and avoid midday heat/crowds."
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
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tips & Tricks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert advice to help you save time, money, and make the most of your Orlando theme park adventure.
            </p>
          </div>

          {/* Tip Categories */}
          <div className="space-y-8">
            {tipCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {category.tips.map((tip, tipIndex) => (
                        <div key={tipIndex}>
                          <h3 className="font-semibold text-foreground mb-2">
                            {tip.subtitle}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {tip.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bonus Tips */}
          <Card className="mt-12 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Bonus Pro Tips
              </CardTitle>
              <CardDescription>
                A few more insider secrets to enhance your visit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <strong>Download Apps:</strong> My Disney Experience and Universal Orlando app are essential. 
                Check wait times, mobile order food, view park maps, and manage reservations.
              </div>
              <div>
                <strong>Comfortable Shoes:</strong> You'll walk 10-15 miles per day. 
                Wear broken-in athletic shoes. Bring blister prevention/treatment supplies.
              </div>
              <div>
                <strong>Portable Chargers:</strong> Using park apps drains phone batteries quickly. 
                Bring portable chargers or use FuelRod stations (available in parks).
              </div>
              <div>
                <strong>Rain Gear:</strong> Florida afternoon storms are common in summer. 
                Pack light ponchos ($1 at Dollar Tree vs $10+ in parks). Many rides continue in light rain.
              </div>
              <div>
                <strong>Sunscreen & Hydration:</strong> Florida sun is intense. Reapply sunscreen every 2 hours. 
                Free ice water available at any quick service restaurant.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tips;
