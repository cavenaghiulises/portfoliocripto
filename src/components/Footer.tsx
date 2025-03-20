
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Investopia</h3>
            <p className="text-sm text-muted-foreground">
              Personalized investment guidance for every risk level. Build your financial future with confidence.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Investment Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Market News
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tax Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Retirement Planning
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Investopia. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
