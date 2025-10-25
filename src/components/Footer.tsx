import { Link } from "react-router-dom";
import { Plane, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Plane className="h-6 w-6 text-primary" />
              <span>Theme Park Tourist</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your ultimate resource for planning the perfect Orlando theme park vacation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Parks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/disney" className="text-muted-foreground hover:text-primary transition-colors">
                  Disney World
                </Link>
              </li>
              <li>
                <Link to="/universal" className="text-muted-foreground hover:text-primary transition-colors">
                  Universal Orlando
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/itineraries" className="text-muted-foreground hover:text-primary transition-colors">
                  Itineraries
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-muted-foreground hover:text-primary transition-colors">
                  Tips & Tricks
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Theme Park Tourist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
