
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      business: "Elite Cuts Barbershop",
      location: "Downtown Cleveland",
      text: "CLE Automate set up text reminders for my appointments. Now I have 90% fewer no-shows and my schedule stays full. Made an extra $3,000 last month alone!",
      rating: 5
    },
    {
      name: "Sarah Chen",
      business: "Chen's Auto Detailing",
      location: "Lakewood",
      text: "The Instagram DM automation is incredible. Customers book themselves and I don't miss leads anymore. It's like having a full-time receptionist for free.",
      rating: 5
    },
    {
      name: "Tony Ricci",
      business: "Ricci's Pizza",
      location: "Little Italy",
      text: "They automated our delivery confirmations and customer follow-ups. Our repeat business went up 40% and customers love the quick responses.",
      rating: 5
    },
    {
      name: "Ashley Williams",
      business: "Glow Beauty Salon",
      location: "Cleveland Heights",
      text: "The automated booking system and reminder texts saved me 2 hours every day. Now I can focus on my clients instead of phone calls and scheduling.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Auto Repair",
      location: "Tremont",
      text: "Customer updates are automatic now - they get texts when their car is ready. No more angry calls asking for updates. Best investment I've made.",
      rating: 5
    },
    {
      name: "Jennifer Davis",
      business: "Davis Cleaning Services",
      location: "Westlake",
      text: "The quote automation through text messages gets me 3x more bookings. Customers get instant estimates and I close deals while sleeping.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-cle-cream to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cle-wine mb-6">
            Cleveland Businesses Love Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real Cleveland business owners who are making more money with automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-cle-gold/20">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-cle-gold mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-cle-gold fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-cle-wine">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.business}</div>
                <div className="text-sm text-cle-gold">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
