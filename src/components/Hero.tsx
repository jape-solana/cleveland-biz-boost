
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="h-5 w-5 text-orange-600" />
          <span className="text-orange-600 font-semibold">Serving Cleveland, Ohio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Stop Losing Money to
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600"> Manual Work</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          I help Cleveland businesses automate their boring tasks so they can focus on making money. 
          <strong> No complicated tech needed.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg group">
            Get Your Free Automation Plan
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
            See How It Works
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">2-5x</div>
            <div className="text-gray-700">More customer responses</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
            <div className="text-gray-700">Less time on repetitive tasks</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-700">Automated customer service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
