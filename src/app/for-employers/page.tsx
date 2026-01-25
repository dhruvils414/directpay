"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, Building, CheckCircle, ArrowRight, DollarSign,
  Clock, Heart, Shield, Zap, TrendingUp, Award, Phone,
  Mail, ChevronDown, Star, Activity, Brain, Stethoscope, Home, Car
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Fraction of Traditional Costs",
    desc: "Starting at $20/employee/month. Compare to $500+/month for traditional health plans."
  },
  {
    icon: Clock,
    title: "Immediate Access",
    desc: "Employees can book appointments within 24-48 hours. No weeks-long wait times."
  },
  {
    icon: Heart,
    title: "Comprehensive Care",
    desc: "Primary care, PT/OT, mental health, home care, and Care at Your Door — all included."
  },
  {
    icon: Shield,
    title: "Zero Administration",
    desc: "No claims processing, no paperwork. We handle everything."
  }
];

const services = [
  { name: "Telehealth", price: "$45", icon: Phone, desc: "Virtual primary care" },
  { name: "PT / OT", price: "$69", icon: Activity, desc: "Physical & Occupational Therapy" },
  { name: "Mental Health", price: "$69", icon: Brain, desc: "Therapy & counseling" },
  { name: "Primary Care", price: "$79", icon: Stethoscope, desc: "In-person visits" },
  { name: "Home Care", price: "$89", icon: Home, desc: "Skilled nursing visits" },
  { name: "Care at Your Door", price: "$109", icon: Car, desc: "NP/PA home visits" },
];

const stats = [
  { value: "60%", label: "Average cost savings vs insurance" },
  { value: "24hr", label: "Average time to appointment" },
  { value: "70%", label: "Of SMBs can't afford traditional benefits" },
  { value: "92%", label: "Employee satisfaction rate" },
];

const faqs = [
  {
    q: "How does pricing work?",
    a: "We offer flexible pricing starting at $20/employee/month for basic access, or $35/employee/month for comprehensive coverage. Employees can also pay per-visit with no monthly fee. We'll work with you to find the right model."
  },
  {
    q: "What's included in the benefit?",
    a: "Employees get access to primary care ($79), telehealth ($45), physical therapy ($69), occupational therapy ($69), and mental health therapy ($69). All at transparent, flat-rate pricing with no surprise bills."
  },
  {
    q: "Do employees still need insurance?",
    a: "ClearPath works alongside or instead of traditional insurance. For many employees, our transparent pricing is cheaper than insurance copays and deductibles. We recommend keeping catastrophic coverage for emergencies."
  },
  {
    q: "How do employees access care?",
    a: "Employees use our app or website to browse providers, book appointments, and pay. It's as simple as booking a restaurant reservation."
  },
  {
    q: "What about HIPAA and privacy?",
    a: "We're fully HIPAA compliant. Employers never see individual employee health information — only aggregate utilization data if requested."
  },
  {
    q: "How quickly can we get started?",
    a: "Most employers are live within 2 weeks. We provide onboarding materials, employee communications, and dedicated support."
  }
];

export default function ForEmployers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thanks! We'll be in touch within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
                <Building className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-300 font-medium">For Employers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Healthcare Benefits
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"> Your Team Will Actually Use</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Give your employees access to quality healthcare starting at <span className="text-white font-semibold">$20/employee/month</span>. No insurance complexity, no surprise bills.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#pricing"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-medium transition-all border border-white/20 text-center"
                >
                  See Pricing
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Services Included:</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service.name} className="bg-white/10 rounded-xl p-4">
                    <service.icon className="w-6 h-6 text-teal-400 mb-2" />
                    <div className="font-semibold">{service.name}</div>
                    <div className="text-sm text-slate-300">{service.desc}</div>
                    <div className="text-teal-400 font-bold mt-2">{service.price}/visit</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              The Problem with Traditional Health Benefits
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              70% of small businesses can't afford to offer health benefits. Those that do face skyrocketing costs and complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Prohibitive Costs</h3>
              <p className="text-slate-500">Average employer health insurance costs $16,000+/year per employee. Most SMBs simply can't afford it.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Long Wait Times</h3>
              <p className="text-slate-500">Average wait to see a doctor is 26 days. Your employees are suffering while waiting for care.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Hidden Costs</h3>
              <p className="text-slate-500">Even with insurance, employees face $3,000+ deductibles and surprise bills. Benefits they can't afford to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              A Better Way: ClearPath for Employers
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Give your team access to quality healthcare at a fraction of traditional costs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-500">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-500">
              Choose the plan that works for your team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Basic Access</h3>
              <p className="text-slate-500 mb-6">Employee-paid visits at discounted rates</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-800">$0</span>
                <span className="text-slate-500">/employee/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Access to all ClearPath providers
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Employees pay per-visit rates
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  No employer cost
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Basic reporting dashboard
                </li>
              </ul>
              <a 
                href="#contact" 
                className="block text-center bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-full font-medium transition-all"
              >
                Get Started Free
              </a>
            </div>

            {/* Standard */}
            <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-8 text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Standard</h3>
              <p className="text-teal-100 mb-6">Employer-subsidized care</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">$20</span>
                <span className="text-teal-200">/employee/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-teal-100">
                  <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  Everything in Basic
                </li>
                <li className="flex items-start gap-2 text-teal-100">
                  <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  2 free telehealth visits/month
                </li>
                <li className="flex items-start gap-2 text-teal-100">
                  <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  50% discount on all other visits
                </li>
                <li className="flex items-start gap-2 text-teal-100">
                  <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  Dedicated account manager
                </li>
                <li className="flex items-start gap-2 text-teal-100">
                  <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  Full analytics dashboard
                </li>
              </ul>
              <a 
                href="#contact" 
                className="block text-center bg-white hover:bg-slate-100 text-teal-700 py-3 rounded-full font-semibold transition-all"
              >
                Request Demo
              </a>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Premium</h3>
              <p className="text-slate-500 mb-6">Comprehensive coverage</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-800">$35</span>
                <span className="text-slate-500">/employee/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Everything in Standard
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Unlimited telehealth visits
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  4 free in-person visits/year
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Mental health included
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Custom wellness programs
                </li>
              </ul>
              <a 
                href="#contact" 
                className="block text-center bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-full font-medium transition-all"
              >
                Contact Sales
              </a>
            </div>
          </div>
          
          <p className="text-center text-slate-500 mt-8">
            * Custom enterprise pricing available for 500+ employees
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Give Your Team Better Healthcare?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's discuss how ClearPath can help you offer meaningful healthcare benefits without breaking the budget.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <span className="text-slate-300">Schedule a 15-minute call</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <span className="text-slate-300">employers@clearpathhealth.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-slate-800">
              <h3 className="text-xl font-bold mb-6">Request a Demo</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Number of Employees</label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    value={formData.employees}
                    onChange={(e) => setFormData({...formData, employees: e.target.value})}
                  >
                    <option value="">Select...</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-full font-semibold transition-all"
                >
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
