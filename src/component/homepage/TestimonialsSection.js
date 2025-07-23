import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    role: "Founder & CEO",
    content: "Launchsites transformed our vision into a stunning reality. The team's attention to detail and understanding of our space-themed brand was incredible. Our website now truly represents who we are.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Mike Chen",
    company: "Artisan Coffee Co.",
    role: "Owner",
    content: "From ground control to successful launch, the Launchsites team guided us through every step. Our online sales increased by 200% within three months of launching our new site!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    company: "Green Valley Landscaping",
    role: "Marketing Director",
    content: "The website they created perfectly showcases our landscaping projects. The before/after galleries and portfolio system have helped us land so many new clients. Highly recommend!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Mission Success Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-gray-600 absolute -top-2 -left-2" />
                  <p className="text-gray-300 leading-relaxed pl-6 italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}