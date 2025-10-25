import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "How many days do I need for Disney World?",
      answer: "For a well-paced first visit, we recommend 4-5 days to experience all four Disney parks (one day per park, plus a half-day for rest or favorites). If you can only spare 2-3 days, focus on Magic Kingdom and one other park. With 6+ days, you can revisit favorites, enjoy water parks, and explore Disney Springs."
    },
    {
      question: "How many days do I need for Universal Orlando?",
      answer: "2 days is ideal to comfortably experience both Universal Studios and Islands of Adventure, including The Wizarding World of Harry Potter. Add a third day if you want to visit Volcano Bay water park. Single-day visits are possible but will be rushed, especially if you want to experience everything in Harry Potter."
    },
    {
      question: "Should I buy Park Hopper tickets at Disney?",
      answer: "Park Hopper allows visiting multiple Disney parks per day (starting at 2 PM). It's worth it if: you're staying 4+ days and want flexibility, you're a repeat visitor who's seen the big attractions, or you're staying at a resort on the monorail line. Skip it for short trips (1-3 days) or first-time visitors who should focus on one park per day."
    },
    {
      question: "Is Universal Express Pass worth it?",
      answer: "Express Pass can save 2-4 hours but costs $90-$350 depending on season. Worth it during peak times (summer, holidays) or if you're only visiting for one day. Consider staying at a Universal Premier hotel instead - unlimited Express Pass is included with your room, often making it a better value than buying passes separately."
    },
    {
      question: "What's the difference between Genie+ and Individual Lightning Lane?",
      answer: "Genie+ ($15-35/day per person) gives access to Lightning Lane for most attractions - book one at a time throughout the day. Individual Lightning Lane ($10-25 each) is for the most popular rides (like Rise of the Resistance, Seven Dwarfs Mine Train, Guardians) that aren't included in Genie+. You purchase these separately, limited to 2 per day."
    },
    {
      question: "Can I bring food and drinks into the parks?",
      answer: "Yes! All Orlando theme parks allow outside food and non-alcoholic drinks (no glass containers, no loose ice). Bringing sandwiches, snacks, and refillable water bottles can save $50+ per day per family. Security will check your bags. Free ice water is available at any quick-service restaurant."
    },
    {
      question: "What's the best time of year to visit Orlando?",
      answer: "Least crowded: January (after MLK weekend), February (except President's week), early September, late November. Best weather: March-May and October-November (avoid spring break weeks). Most crowded: Summer, Thanksgiving, Christmas-New Year's. Consider fall for good weather, lower crowds, and special events like EPCOT Food & Wine."
    },
    {
      question: "Should I stay on-site or off-site?",
      answer: "On-site benefits: Disney offers early entry (30 min), free parking at parks, and transportation. Universal Premier hotels include unlimited Express Pass. However, off-site hotels cost 30-50% less. Choose on-site if budget allows and you value convenience/perks. Choose off-site to save money, especially for longer stays."
    },
    {
      question: "Do I need a car in Orlando?",
      answer: "Not if staying at Disney and only visiting Disney parks - their transportation is comprehensive. You will need a car (or rideshares) if: staying off-site, visiting both Disney AND Universal, or planning trips to outlet malls, grocery stores, etc. Parking at parks costs $25-50/day. Uber/Lyft work well throughout Orlando."
    },
    {
      question: "How do I experience The Wizarding World of Harry Potter?",
      answer: "Harry Potter spans two Universal parks: Hogsmeade (Islands of Adventure) and Diagon Alley (Universal Studios). To ride the Hogwarts Express train between them, you need a park-to-park ticket. Must-dos: Escape from Gringotts, Forbidden Journey, Hagrid's Motorbike. Buy interactive wands to cast spells throughout both areas. Try Butterbeer!"
    },
    {
      question: "What should I do first thing in the morning?",
      answer: "Arrive 30-60 minutes before official park opening. Head straight to the most popular attraction at rope drop - crowds are smallest and you can experience major rides with minimal wait. At Disney: Seven Dwarfs, Slinky Dog, or Flight of Passage. At Universal: Hagrid's Motorbike or VelociCoaster. Don't stop for photos until you've hit your first ride!"
    },
    {
      question: "Are the parks good for young children (under 6)?",
      answer: "Disney parks are excellent for young children - Magic Kingdom and Animal Kingdom especially. Many rides have no height requirements. Character meet-and-greets, shows, and attractions cater to all ages. Universal is better for kids 8+, with more thrill rides and fewer options for toddlers. Both parks have stroller rentals and baby care centers."
    },
    {
      question: "How much should I budget per day?",
      answer: "Per person per day: Tickets $100-150, Meals $50-80 (can reduce to $20-30 with outside food), Souvenirs $20-50, Add-ons like Genie+ or Express Pass $15-150. Total: $185-430 per person per day. Add hotel ($100-500/night) and parking ($25-50 if driving). A family of 4 spending 4 days might budget $4,000-8,000 total including hotels."
    },
    {
      question: "What happens if it rains?",
      answer: "Florida afternoon thunderstorms are common in summer but usually brief (30-60 minutes). Most indoor attractions stay open. Outdoor rides may temporarily close for lightning. Parks rarely close entirely. Pack light ponchos. Crowds often thin during rain, making it a good time to grab food or shop. Many guests leave, creating shorter waits after the rain passes."
    },
    {
      question: "Can I visit Disney and Universal in the same trip?",
      answer: "Absolutely! They're only 15-20 minutes apart by car. A popular split is 3-4 days at Disney and 2 days at Universal, or vice versa. You can stay at one resort and drive to the other, or split your hotel stays. Just don't try to visit both on the same day - it's too rushed and you'll waste time traveling."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about planning your Orlando theme park vacation
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Still Have Questions */}
          <Card className="mt-8">
            <CardContent className="pt-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Still have questions?</h3>
              <p className="text-muted-foreground">
                Explore our other guides for more detailed information about specific parks, 
                sample itineraries, and money-saving tips. Check out the Tips & Tricks section 
                for insider advice from experienced visitors.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
