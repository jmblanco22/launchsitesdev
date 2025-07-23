import React, { useState } from "react";
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  Rocket,
  Clock,
  CheckCircle,
  Linkedin,
  Twitter
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 glow-effect">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Mission Received!
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Thank you for contacting Launchsites. Our ground control team has received your message 
            and will get back to you within 24 hours to discuss your digital mission.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Clock className="w-5 h-5" />
            <span>Expected response time: 24 hours</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Contact Ground Control
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to launch your digital mission? Let's discuss your project and create a website 
            that will take your business to new heights. Our team is standing by for mission briefing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Let's Talk About Your Mission
                  </CardTitle>
                  <p className="text-gray-400">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 text-lg rounded-full glow-effect transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:hello@launchsites.com" className="text-white hover:text-blue-400 transition-colors">
                        hello@launchsites.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+15551234567" className="text-white hover:text-green-400 transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Response Time</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We typically respond to all inquiries within 24 hours. For urgent projects or 
                    questions, don't hesitate to call us directly.
                  </p>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 glow-effect"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 glow-effect"
                    >
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  <p className="text-gray-400 mt-4 text-sm">
                    Follow us for web design tips, industry insights, and behind-the-scenes content.
                  </p>
                </CardContent>
              </Card>

              {/* Mission Brief */}
              <Card className="bg-gradient-to-r from-blue-900 to-purple-900 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-8 h-8 text-orange-400" />
                    <h3 className="text-lg font-semibold text-white">Free Mission Brief</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Every project starts with a free consultation where we discuss your goals, 
                    timeline, and requirements. No commitment required - just a friendly chat 
                    about your digital mission.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}