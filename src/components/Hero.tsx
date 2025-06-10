
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
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Cleveland's #1 Business Automation Service
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Losing Money on 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-600">
                {" "}Boring Tasks
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Cleveland businesses are wasting <strong>20+ hours per week</strong> on repetitive tasks. 
              I'll automate your workflows so you can focus on making money, not managing paperwork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-red-700 to-yellow-600 hover:from-red-800 hover:to-yellow-700 text-white px-8 py-4 text-lg"
              >
                Get My Free Automation Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={handlePhoneCall}
                variant="outline"
                size="lg"
                className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-700 mb-1">24hrs</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-yellow-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Cleveland Local</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">Free</div>
                <div className="text-sm text-gray-600">Consultation</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Cleveland Businesses Say:
                </h3>
                <blockquote className="text-gray-700 italic mb-4">
                  "CLE Automate saved me 15 hours a week. Now I can focus on cutting hair instead of managing appointments and follow-ups."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                    <div className="text-sm text-gray-600">Rodriguez Barber Shop, Cleveland Heights</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-red-700 to-yellow-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
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
