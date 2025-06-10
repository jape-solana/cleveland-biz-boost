import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            business: formData.business,
            phone: formData.phone,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your form. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours with your free automation plan.",
        });
        setFormData({ name: "", business: "", phone: "", email: "", message: "" });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+12165552886";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:cleautomate@gmail.com";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 to-yellow-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Stop Losing Money?
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Get your free automation plan. We'll show you exactly how much money you're leaving on the table.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Get Your Free Automation Plan
              </CardTitle>
              <CardDescription className="text-gray-600">
                Tell us about your business and we'll create a custom automation strategy for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <Input
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Smith's Barber Shop"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(216) 555-0123"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@smithsbarber.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell me about your business
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What type of business do you run? What's your biggest time-waster? How do customers usually contact you?"
                    rows={4}
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white py-3 text-lg"
                >
                  {isSubmitting ? "Sending..." : "Get My Free Automation Plan"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Talk Business
              </h3>
              <p className="text-red-100 text-lg leading-relaxed mb-8">
                We're Cleveland locals who understand how hard it is to run a business here. 
                We've helped dozens of local businesses automate their workflows and increase their profits.
              </p>
            </div>

            <div className="space-y-6">
              <button 
                onClick={handlePhoneCall}
                className="flex items-center space-x-4 w-full p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full group-hover:bg-red-700 transition-colors">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-left">Call or Text</h4>
                  <p className="text-red-200 text-left">(216) 555-2886</p>
                </div>
              </button>

              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-4 w-full p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full group-hover:bg-yellow-700 transition-colors">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-left">Email</h4>
                  <p className="text-red-200 text-left">cleautomate@gmail.com</p>
                </div>
              </button>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Service Area</h4>
                  <p className="text-red-200">Greater Cleveland Area</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
              <h4 className="text-white font-bold mb-3">What happens next?</h4>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  We'll call you within 24 hours
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  We'll discuss your current workflow
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  We'll create a custom automation plan
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  You decide if it makes sense
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
