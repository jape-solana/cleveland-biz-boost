
import { Scissors, Car, MessageCircle, Calendar, DollarSign, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Smart Message Automation",
      description: "Turn your Instagram DMs and texts into a 24/7 sales machine",
      features: ["Instant customer responses", "Appointment booking", "Price quotes", "FAQ answers"],
      perfect: "Barber shops, salons, restaurants"
    },
    {
      icon: Calendar,
      title: "Appointment & Booking Systems",
      description: "Never double-book or miss an appointment again",
      features: ["Real-time availability", "Automatic reminders", "Cancellation handling", "Waitlist management"],
      perfect: "Car washes, repair shops, services"
    },
    {
      icon: DollarSign,
      title: "Follow-Up & Upsell Automation",
      description: "Turn one-time customers into repeat business",
      features: ["Review requests", "Special offers", "Loyalty programs", "Referral tracking"],
      perfect: "Any business wanting growth"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What I Can Automate
            <span className="text-orange-600"> For Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in making Cleveland businesses more money without them lifting a finger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mb-4 mx-auto">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What it does:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>Perfect for:</strong> {service.perfect}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Popular Cleveland Business Automations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Scissors className="h-8 w-8 text-orange-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Barber Shops & Salons</h4>
                <p className="text-gray-600 text-sm">Instagram booking, appointment reminders, no-show recovery</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Car className="h-8 w-8 text-blue-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Car Washes & Detailing</h4>
                <p className="text-gray-600 text-sm">Weather-based promotions, loyalty tracking, upsell packages</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-green-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Restaurants & Cafes</h4>
                <p className="text-gray-600 text-sm">Order confirmations, table reservations, delivery updates</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <DollarSign className="h-8 w-8 text-purple-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Any Service Business</h4>
                <p className="text-gray-600 text-sm">Lead follow-up, review collection, customer win-back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
