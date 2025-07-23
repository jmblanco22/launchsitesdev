import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Rocket, Zap, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Ignition Package",
    subtitle: "Perfect for new businesses and startups",
    oneTime: 1500,
    monthly: 150,
    setupFee: 500,
    icon: Rocket,
    color: "from-blue-500 to-blue-600",
    popular: false,
    features: [
      "Up to 5 Pages",
      "Template-Based Custom Design",
      "Mobile-Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "Social Media Links",
      "SSL Certificate",
      "Google Analytics Setup"
    ],
    membershipIncludes: [
      "Web hosting included",
      "Regular updates & maintenance",
      "Technical support",
      "Monthly performance reports"
    ]
  },
  {
    name: "Orbit Package",
    subtitle: "Ideal for growing businesses",
    oneTime: 4500,
    monthly: 300,
    setupFee: 1000,
    icon: Zap,
    color: "from-purple-500 to-purple-600",
    popular: true,
    features: [
      "Up to 10 Pages",
      "Custom Homepage Design",
      "Blog Setup & Integration",
      "Lead Generation Forms",
      "Google Analytics & Tag Manager",
      "Enhanced SEO Optimization",
      "Newsletter Integration",
      "Social Media Integration"
    ],
    membershipIncludes: [
      "All Ignition benefits included",
      "Priority technical support",
      "Monthly content updates",
      "SEO monitoring & reports",
      "Advanced analytics insights"
    ]
  },
  {
    name: "Galaxy Package",
    subtitle: "For established businesses ready to scale",
    oneTime: 9500,
    monthly: 500,
    setupFee: 2000,
    icon: Star,
    color: "from-orange-500 to-red-500",
    popular: false,
    features: [
      "Up to 20 Pages",
      "Fully Custom Design",
      "E-commerce Functionality",
      "Advanced SEO & Performance",
      "Newsletter & Email Marketing",
      "Customer Account Portals",
      "Advanced Analytics",
      "Custom Integrations"
    ],
    membershipIncludes: [
      "All Orbit benefits included",
      "E-commerce support & updates",
      "Priority development time",
      "Advanced feature requests",
      "Dedicated account manager"
    ]
  }
];

export default function ReadyToLaunch() {
  const [billingType, setBillingType] = useState("membership");

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Ready to Launch? Choose Your Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Select the perfect package to launch your business into the digital universe. 
            Every mission includes our comprehensive launch checklist and ongoing ground control support.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingType === "oneTime" ? "text-white" : "text-gray-400"}`}>
              One-Time Payment
            </span>
            <button
              onClick={() => setBillingType(billingType === "oneTime" ? "membership" : "oneTime")}
              className="relative w-16 h-8 bg-slate-700 rounded-full transition-colors duration-200 focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-transform duration-200 ${
                billingType === "membership" ? "transform translate-x-8" : ""
              }`}></div>
            </button>
            <span className={`text-lg ${billingType === "membership" ? "text-white" : "text-gray-400"}`}>
              Membership
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 ${
                plan.popular ? "transform scale-105 border-purple-500 glow-effect" : ""
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 glow-effect`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-400 mb-6">{plan.subtitle}</p>
                  
                  <div className="text-center">
                    {billingType === "oneTime" ? (
                      <div>
                        <div className="text-4xl font-bold text-white mb-2">
                          ${plan.oneTime.toLocaleString()}
                        </div>
                        <div className="text-gray-400">One-time payment</div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-4xl font-bold text-white mb-2">
                          ${plan.monthly}
                          <span className="text-lg text-gray-400">/month</span>
                        </div>
                        <div className="text-gray-400 mb-2">
                          + ${plan.setupFee} setup fee
                        </div>
                        <div className="text-sm text-green-400">
                          Includes hosting & support
                        </div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Core Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {billingType === "membership" && (
                    <div>
                      <h4 className="font-semibold text-white mb-3">Membership Includes:</h4>
                      <ul className="space-y-2">
                        {plan.membershipIncludes.map((include, includeIndex) => (
                          <li key={includeIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{include}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Link to={createPageUrl("Contact")} className="block">
                    <Button 
                      className={`w-full py-3 text-lg rounded-full transition-all duration-300 ${
                        plan.popular 
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 glow-effect" 
                          : `bg-gradient-to-r ${plan.color} hover:scale-105`
                      }`}
                    >
                      Launch This Mission
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Mission Control FAQ
            </h2>
            <p className="text-lg text-gray-300">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's the difference between one-time payment and membership?",
                answer: "One-time payment gets you a complete website with no ongoing fees. Membership includes hosting, regular updates, security monitoring, and ongoing support - perfect for businesses that want everything managed for them."
              },
              {
                question: "How long does it take to launch my website?",
                answer: "Ignition packages typically launch in 1-2 weeks, Orbit packages in 2-3 weeks, and Galaxy packages in 3-4 weeks. We'll provide a detailed timeline during your consultation."
              },
              {
                question: "Can I upgrade my package later?",
                answer: "Absolutely! You can upgrade your mission at any time. We'll credit your existing investment toward the higher package."
              },
              {
                question: "What if I need changes after launch?",
                answer: "Membership plans include regular updates. One-time payment clients can request changes at our standard hourly rate, or upgrade to a membership plan."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
            Ready for Mission Briefing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and choose the perfect launch package for your business goals.
          </p>
          
          <Link to={createPageUrl("Contact")}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full glow-effect group transition-all duration-300"
            >
              Contact Ground Control
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}