
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Rocket, Menu, X, Home, Briefcase, Folder, DollarSign, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: Home },
  { title: "Services", url: createPageUrl("Services"), icon: Briefcase },
  { title: "Portfolio", url: createPageUrl("Portfolio"), icon: Folder },
  { title: "Ready to Launch", url: createPageUrl("ReadyToLaunch"), icon: DollarSign },
  { title: "Contact", url: createPageUrl("Contact"), icon: Phone },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <style>
        {`
          :root {
            --primary: #1e40af;
            --secondary: #0f172a;
            --accent: #f97316;
            --accent-teal: #14b8a6;
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          }
          
          .glow-effect {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          }
          
          .star-field {
            background-image: 
              radial-gradient(2px 2px at 20px 30px, #eee, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, #fff, transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent);
            background-repeat: repeat;
            background-size: 200px 200px;
          }
        `}
      </style>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center glow-effect">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Launchsites
              </span>
            </Link>

            {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.url}
                          className="flex items-center space-x-2 hover:text-orange-400 transition-colors"
                        >
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                    {/* Add mobile menu and children rendering here */}
                  </div>
                </div>
              </nav>
              {/* Render children or main content */}
              <main className="pt-16">
                {children}
              </main>
            </div>
  );
}