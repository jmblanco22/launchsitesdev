
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Palette, 
  ShoppingCart, 
  Search, 
  Headphones, 
  ArrowRight,
  Check,
  Globe,
  Smartphone,
  Shield,
  Zap,
  BarChart,
  Settings
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Web Design",
    subtitle: "Stellar websites that reflect your brand",
    description: "From sleek, professional landing pages to multi-page informational sites, we design and build websites that are out of this world. Every pixel is crafted with purpose.",
    features: [
      "Mobile-responsive design",
      "Custom brand integration",
      "User-friendly navigation",
      "Modern, clean aesthetics",
      "Fast loading times",
      "Cross-browser compatibility"
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    subtitle: "Powerful online stores across the galaxy",
    description: "Ready to sell your products online? We'll build you a powerful e-commerce engine to manage your inventory, accept payments, and reach customers across the galaxy.",
    features: [
      "Shopify & WooCommerce integration",
      "Secure payment processing",
      "Inventory management",
      "Shopping cart optimization",
      "Order tracking system",
      "Customer account portals"
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Search,
    title: "SEO & Performance Optimization",
    subtitle: "Maximum visibility in search engines",
    description: "We'll fine-tune your website's engines for maximum performance and visibility, helping you climb the ranks in search engine results and reach more customers.",
    features: [
      "Keyword research & optimization",
      "On-page SEO implementation",
      "Speed optimization",
      "Technical SEO audits",
      "Local SEO for businesses",
      "Analytics & reporting"
    ],
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50"
  },
  {
    icon: Headphones,
    title: "Website Maintenance & Support",
    subtitle: "Your dedicated ground control team",
    description: "Our ground control team is always here to help. We offer ongoing maintenance and support to keep your website running smoothly and securely.",
    features: [
      "Regular security updates",
      "Content updates & changes",
      "Performance monitoring",
      "Backup & recovery services",
      "Technical support",
      "Membership plan options"
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50"
  }
];

const additionalFeatures = [
  { icon: Globe, title: "Domain & Hosting Setup", description: "Complete setup and management" },
  { icon: Smartphone, title: "Mobile Optimization", description: "Perfect on every device" },
  { icon: Shield, title: "Security & SSL", description: "Enterprise-grade protection" },
  { icon: Zap, title: "Performance Optimization", description: "Lightning-fast loading" },
  { icon: BarChart, title: "Analytics Integration", description: "Track your success" },
  { icon: Settings, title: "Content Management", description: "Easy updates & editing" }
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Our Services: Fueling Your Digital Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive web solutions designed to launch your business into the digital stratosphere. 
            From initial concept to ongoing support, we're your complete mission control team.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <Card className="bg-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center glow-effect`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                          <p className="text-gray-400 mt-1">{service.subtitle}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600">
                    <service.icon className={`w-32 h-32 text-gray-600`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Everything You Need for Success
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Beyond our core services, we provide all the essential tools and features your business needs to thrive online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Launch Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your digital mission and create a website that will take your business to new heights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("ReadyToLaunch")}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full glow-effect group transition-all duration-300"
              >
                View Pricing Plans
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to={createPageUrl("Contact")}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
