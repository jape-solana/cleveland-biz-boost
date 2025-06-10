import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+12165552886";
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background to-background/95">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Cleveland's #1 Business Automation Service
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Stop Losing Money on 
              <span className="text-primary">
                {" "}Boring Tasks
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Cleveland businesses are wasting <strong>20+ hours per week</strong> on repetitive tasks. 
              We'll automate your workflows so you can focus on making money, not managing paperwork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                Get My Free Automation Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={handlePhoneCall}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-card rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">24hrs</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Cleveland Local</div>
              </div>
              <div className="p-4 bg-card rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">Free</div>
                <div className="text-sm text-muted-foreground">Consultation</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-xl">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  What Cleveland Businesses Say:
                </h3>
                <blockquote className="text-muted-foreground italic mb-4">
                  "CLE Automate saved me 15 hours a week. Now I can focus on cutting hair instead of managing appointments and follow-ups."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Mike Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Rodriguez Barber Shop, Cleveland Heights</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-lg">
                CLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
