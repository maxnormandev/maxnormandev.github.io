import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Castle, Rocket, Calendar, Lightbulb, HelpCircle, ArrowRight } from "lucide-react";
import heroOrlando from "@/assets/hero-orlando.jpg";

const Home = () => {
  const features = [
    {
      icon: Castle,
      title: "Disney World Guides",
      description: "Complete guides for all four Disney parks with ride recommendations, Genie+ strategies, and dining tips.",
      link: "/disney",
      color: "text-primary"
    },
    {
      icon: Rocket,
      title: "Universal Orlando",
      description: "Everything you need for Universal Studios, Islands of Adventure, and the Wizarding World of Harry Potter.",
      link: "/universal",
      color: "text-accent"
    },
    {
      icon: Calendar,
      title: "Sample Itineraries",
      description: "Pre-planned schedules for 2-day, 3-day, and 5-day trips to maximize your park time.",
      link: "/itineraries",
      color: "text-secondary"
    },
    {
      icon: Lightbulb,
      title: "Tips & Tricks",
      description: "Save time and money with expert advice on when to visit, where to stay, and how to avoid crowds.",
      link: "/tips",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <img 
          src={heroOrlando} 
          alt="Orlando Theme Parks" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Welcome to Orlando
            </h1>
            <p className="text-xl md:text-3xl text-white/95 mb-8 drop-shadow-md">
              The Theme Park Capital of the World
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow">
              Your ultimate guide to planning the perfect Disney World and Universal Orlando vacation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/disney">
                  Explore Disney
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/universal">
                  Discover Universal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Plan Your Trip
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From park guides to money-saving tips, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <Icon className={`h-10 w-10 mb-2 ${feature.color} group-hover:scale-110 transition-transform`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-muted">
                    <Link to={feature.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-primary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                First Time Visitor?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Check out our FAQ section for answers to common questions like "How many days do I need?" 
                and "Should I buy Park Hopper tickets?"
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/faq">View FAQ</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-secondary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-secondary" />
                Ready to Plan?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Browse our sample itineraries for 3-day Disney trips, 2-day Universal adventures, 
                and complete 5-day Orlando experiences.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/itineraries">See Itineraries</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Orlando Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Orlando?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Orlando is home to some of the world's most beloved theme parks. With four Disney World parks, 
              two Universal Orlando parks, and countless attractions, there's magic around every corner. 
              Whether you're seeking thrilling roller coasters, enchanting character experiences, 
              or immersive themed lands like the Wizarding World of Harry Potter, Orlando delivers 
              unforgettable memories for the whole family.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                <div className="text-muted-foreground">Annual Visitors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">6</div>
                <div className="text-muted-foreground">Major Theme Parks</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">365</div>
                <div className="text-muted-foreground">Days of Sunshine</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
