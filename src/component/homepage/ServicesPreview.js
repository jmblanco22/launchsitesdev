import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, ShoppingCart, Search, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Web Design",
    description: "From sleek landing pages to multi-page sites, we design websites that are out of this world.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Powerful online stores to manage inventory, accept payments, and reach customers across the galaxy.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Fine-tune your website's engines for maximum performance and search engine visibility.",
    color: "from-teal-500 to-teal-600"
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Our Services: Fueling Your Digital Mission
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive web solutions to launch your business into the digital stratosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 glow-effect group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to={createPageUrl("Services")}>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full group transition-all duration-300"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}