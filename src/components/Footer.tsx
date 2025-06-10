
import { Zap, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Cleveland Automation</span>
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
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(216) 555-AUTOMATE</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@clevelandautomation.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Message Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Booking Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Follow-up Campaigns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
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
            © 2024 Cleveland Automation. Made with ❤️ for Cleveland businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
