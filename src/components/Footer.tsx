
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+12165552886";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:cleautomate@gmail.com";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-700 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CA</span>
              </div>
              <span className="text-xl font-bold">CLE Automate</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Helping Cleveland businesses automate their workflows and increase profits 
              without the tech headaches.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Serving Greater Cleveland Area</span>
              </div>
              <button 
                onClick={handlePhoneCall}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(216) 555-2886</span>
              </button>
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>cleautomate@gmail.com</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Message Automation</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Booking Systems</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Follow-up Campaigns</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Custom Solutions</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Perfect For</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Barber Shops</li>
              <li>Car Washes</li>
              <li>Restaurants</li>
              <li>Service Businesses</li>
              <li>Retail Stores</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CLE Automate. Made with ❤️ for Cleveland businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
