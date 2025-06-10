import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+12165552886";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:cleautomate@gmail.com";
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background shadow-lg" : "bg-background/95 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CA</span>
            </div>
            <span className="text-xl font-bold text-foreground">CLE Automate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>

            {/* Contact buttons */}
            <div className="flex items-center space-x-2">
              <Button
                onClick={handlePhoneCall}
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button
                onClick={handleEmailClick}
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>

            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Free Plan
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Reviews
              </button>
              
              {/* Mobile contact buttons */}
              <div className="px-3 py-2 space-y-2">
                <Button
                  onClick={handlePhoneCall}
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (216) 555-2886
                </Button>
                <Button
                  onClick={handleEmailClick}
                  variant="outline"
                  size="sm"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  cleautomate@gmail.com
                </Button>
              </div>
              
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Free Plan
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
