
import { MessageSquare, Zap, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "We Use What You Already Have",
      description: "Keep using iMessage, Instagram DMs, or whatever you're comfortable with. No new apps to learn.",
      example: "Your barber shop already gets Instagram messages? Perfect. We'll make those work harder for you."
    },
    {
      icon: Zap,
      title: "I Add Smart Automation",
      description: "I set up invisible helpers that respond to customers, book appointments, and follow up automatically.",
      example: "When someone messages 'Do you have any openings today?', they instantly get your real availability."
    },
    {
      icon: TrendingUp,
      title: "You Make More Money",
      description: "Never miss a customer again. Get more bookings, better reviews, and happier clients.",
      example: "That car wash appointment they forgot? They get a friendly reminder and you keep the booking."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
            <span className="text-blue-600"> (The Simple Version)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Think of it like hiring a super-smart assistant who never sleeps, never gets sick, 
            and costs way less than minimum wage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mb-6 mx-auto">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {step.description}
                </p>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <p className="text-sm text-gray-700 italic">
                    <strong>Real example:</strong> {step.example}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">
              The Bottom Line
            </h3>
            <p className="text-yellow-700">
              You keep doing business your way. I just make sure you never miss an opportunity to make money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
