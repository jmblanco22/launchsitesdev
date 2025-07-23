import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Rocket, 
  Home,
  Briefcase,
  Folder,
  DollarSign,
  Phone
} from "lucide-react";
import { Button } from "../ui/button";

import HeroSection from "../components/homepage/HeroSection";
import ServicesPreview from "../components/homepage/ServicesPreview";
import PortfolioPreview from "../components/homepage/PortfolioPreview";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import CTASection from "../components/homepage/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Your Digital Mission Control
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Launchsites, we believe every small business deserves a stellar online presence. 
              Our mission is to help entrepreneurs and startups launch their brands into the digital 
              universe with websites that are not just beautiful, but built to convert visitors into customers. 
              From initial concept to successful launch, we're your ground control team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Design</h3>
                <p className="text-gray-400">Custom websites that reflect your brand and engage your audience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Optimized for speed and performance across all devices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-400">Continuous maintenance and updates to keep you soaring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}