
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 star-field opacity-30"></div>
      <div className="absolute top-10 left-10 animate-pulse">
        <Sparkles className="w-6 h-6 text-blue-400" />
      </div>
      <div className="absolute bottom-10 right-10 animate-bounce delay-1000">
        <Sparkles className="w-8 h-8 text-teal-400" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-pulse delay-500">
        <Sparkles className="w-4 h-4 text-purple-400" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 glow-effect">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8 glow-effect">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Launch Your
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Digital Mission?
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the ranks of successful businesses who have launched their brands into the digital universe. 
            Your website is waiting for liftoff!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ReadyToLaunch")}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full glow-effect group transition-all duration-300 transform hover:scale-105"
              >
                Choose Your Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to={createPageUrl("Contact")}>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Contact Ground Control
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>🚀 Free consultation • ⚡ Fast turnaround • 🛡️ Ongoing support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
