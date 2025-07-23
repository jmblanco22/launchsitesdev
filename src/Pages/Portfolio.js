import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Filter } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "TechStart Solutions",
    category: "Technology",
    industry: "B2B Software Startup",
    description: "A sleek, modern website for a growing tech company specializing in AI solutions. Features custom animations, interactive demos, and a powerful lead generation system that increased their conversion rate by 180%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Custom Design", "Responsive", "Lead Generation", "SEO"],
    goals: "Establish credibility in the AI market and generate qualified leads",
    results: "180% increase in conversion rate, 300% more qualified leads",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Artisan Coffee Co.",
    category: "E-commerce",
    industry: "Local Coffee Roastery",
    description: "An e-commerce enabled site with online ordering, subscription services, location finder, and beautiful product galleries. The integrated inventory system connects seamlessly with their physical store.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Shopify", "Local SEO", "Mobile-First"],
    goals: "Launch online sales and reach customers beyond their local area",
    results: "200% increase in monthly revenue, expanded to 3 new cities",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Green Valley Landscaping",
    category: "Service Business",
    industry: "Landscaping & Design",
    description: "A portfolio-focused website showcasing beautiful landscaping projects with stunning before/after galleries, service area maps, and an integrated quote request system.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    tags: ["Portfolio", "Gallery", "Lead Generation", "Local SEO"],
    goals: "Showcase work quality and generate local leads",
    results: "150% more project inquiries, 50% higher average project value",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Wellness Studio Pro",
    category: "Health & Wellness",
    industry: "Yoga & Fitness Studio",
    description: "A calming, user-friendly site with online class booking, instructor profiles, membership management, and a member-only content portal for at-home workouts.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    tags: ["Booking System", "Membership", "Content Portal", "Wellness"],
    goals: "Streamline bookings and build online community",
    results: "40% reduction in booking admin time, 200% membership growth",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Legal Eagle Law Firm",
    category: "Professional Services",
    industry: "Personal Injury Law",
    description: "A professional, trustworthy website featuring lawyer profiles, case results, client testimonials, and a secure client portal for case management and document sharing.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    tags: ["Professional", "Client Portal", "Security", "Trust Building"],
    goals: "Build trust and streamline client communication",
    results: "300% increase in consultation requests, improved client satisfaction",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Adventure Gear Outfitters",
    category: "E-commerce",
    industry: "Outdoor Equipment Retail",
    description: "A robust e-commerce platform with advanced product filtering, gear guides, customer reviews, and integration with inventory management. Features outdoor lifestyle photography throughout.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Advanced Filtering", "Reviews", "Lifestyle"],
    goals: "Compete with major outdoor retailers online",
    results: "400% online sales growth, 25% higher average order value",
    liveUrl: "#"
  }
];

const categories = ["All", "Technology", "E-commerce", "Service Business", "Health & Wellness", "Professional Services"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Our Universe of Work
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every project represents a unique journey from concept to digital success. 
            Explore our recent successful launches and see how we've helped businesses reach new heights.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" 
                  : "border-slate-600 text-gray-300 hover:bg-slate-700"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.industry}</p>
                    </div>
                    <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                      {item.category}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-4 line-clamp-3">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-slate-600 text-gray-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 3 && (
                      <Badge variant="outline" className="border-slate-600 text-gray-400 text-xs">
                        +{item.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedItem(item)}
                      className="text-blue-400 hover:text-blue-300 p-0"
                    >
                      View Details
                    </Button>
                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-64 object-cover"
              />
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedItem(null)}
              >
                ×
              </Button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h2>
                  <p className="text-lg text-gray-400">{selectedItem.industry}</p>
                </div>
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {selectedItem.category}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Project Goals</h3>
                  <p className="text-gray-300">{selectedItem.goals}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Results Achieved</h3>
                  <p className="text-green-400 font-medium">{selectedItem.results}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Project Description</h3>
                <p className="text-gray-300 leading-relaxed">{selectedItem.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Technologies & Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-slate-600 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Live Site
                </Button>
                <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700">
                  View Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}