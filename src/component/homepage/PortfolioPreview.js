import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "TechStart Solutions",
    industry: "Technology Startup",
    description: "A sleek, modern website for a growing tech company, featuring custom animations and a powerful contact system.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tags: ["Custom Design", "Responsive", "SEO"]
  },
  {
    id: 2,
    title: "Artisan Coffee Co.",
    industry: "Local Coffee Shop",
    description: "An e-commerce enabled site with online ordering, location finder, and beautiful product galleries.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=300&fit=crop",
    tags: ["E-commerce", "Local SEO", "Mobile-First"]
  },
  {
    id: 3,
    title: "Green Valley Landscaping",
    industry: "Landscaping Services",
    description: "A portfolio-focused website showcasing beautiful landscaping projects with before/after galleries.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
    tags: ["Portfolio", "Gallery", "Lead Generation"]
  },
  {
    id: 4,
    title: "Wellness Studio Pro",
    industry: "Health & Wellness",
    description: "A calming, user-friendly site with online booking, class schedules, and member portals.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    tags: ["Booking System", "Membership", "Wellness"]
  }
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Universe of Work
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore some of our recent successful launches. Each project represents a unique journey from concept to digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="bg-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.industry}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-700 text-gray-300 hover:bg-slate-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to={createPageUrl("Portfolio")}>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full group transition-all duration-300"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}