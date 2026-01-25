"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  MapPin, Clock, Monitor, Users, Activity, Brain, Heart,
  CheckCircle, ChevronDown, Calendar, Shield, Zap,
  ArrowRight, Building, Stethoscope, Video, Home as HomeIcon, Car
} from "lucide-react";

const services = [
  { 
    name: "Telehealth", 
    price: 45, 
    subtext: "Primary Care", 
    icon: Video,
    description: "Video visit from home",
    features: ["Same-day available", "Prescriptions sent to pharmacy", "Lab orders included"],
    color: "teal"
  },
  { 
    name: "PT / OT", 
    price: 69, 
    subtext: "In-Person or Virtual", 
    icon: Activity,
    description: "Physical & Occupational Therapy",
    features: ["No visit limits", "No referral needed", "Same price either format"],
    color: "teal",
    popular: true
  },
  { 
    name: "Mental Health", 
    price: 69, 
    subtext: "In-Person or Virtual", 
    icon: Brain,
    description: "Licensed therapists",
    features: ["Individual & couples", "Anxiety, depression & more", "Flexible scheduling"],
    color: "purple"
  },
  { 
    name: "Primary Care", 
    price: 79, 
    subtext: "In-Person", 
    icon: Stethoscope,
    description: "Full exam with local physician",
    features: ["Comprehensive visit", "Lab work coordination", "Referrals if needed"],
    color: "slate"
  },
  { 
    name: "Home Care", 
    price: 89, 
    subtext: "In-Home Nursing", 
    icon: HomeIcon,
    description: "Skilled nursing at your home",
    features: ["Post-surgery recovery", "Wound care & nursing", "Medication management"],
    color: "cyan"
  },
  { 
    name: "Care at Your Door", 
    price: 109, 
    subtext: "NP/PA Home Visit", 
    icon: Car,
    description: "Primary care comes to you",
    features: ["Full exam at home", "Prescriptions & lab orders", "Diagnose & treat illness"],
    color: "emerald"
  },
];

const stats = [
  { value: "50%", label: "Less than typical costs" },
  { value: "24hr", label: "Average time to appointment" },
  { value: "$0", label: "Hidden fees or surprises" },
  { value: "150M+", label: "Americans we can serve" },
];

const faqs = [
  {
    q: "Do I need insurance?",
    a: "No insurance needed! Our prices are designed to be affordable without insurance. If you have insurance, you may be able to submit a superbill for potential reimbursement."
  },
  {
    q: "How do I pay?",
    a: "Pay online when you book with any major credit card. The price you see is the price you pay — no surprise bills ever."
  },
  {
    q: "What services are available?",
    a: "We offer telehealth, primary care, PT/OT, mental health, home care (nursing), and Care at Your Door (NP/PA home visits). More specialties coming soon."
  },
  {
    q: "Where is ClearPath available?",
    a: "We currently serve Georgia and Colorado, with more states launching soon. Join our waitlist to be notified when we expand to your area."
  },
  {
    q: "What's the difference between Home Care and Care at Your Door?",
    a: "Home Care ($89) is skilled nursing — wound care, medication management, post-surgery support. Care at Your Door ($109) is a full primary care visit with an NP/PA who can diagnose, treat, and prescribe medications."
  },
  {
    q: "Can I see the same provider again?",
    a: "Absolutely! You can book with the same provider for continuity of care, or try someone new — your choice."
  },
  {
    q: "Is this cheaper than my insurance copay?",
    a: "Often, yes! Many insurance copays for specialists are $40-75, and PT with a deductible can cost $150-300 per visit. Our flat rates are often less."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-sm text-teal-700 font-medium">Now serving Georgia & Colorado</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight mb-6">
              Healthcare,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600"> Simplified.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              See a doctor. No insurance needed. No surprise bills. Book online, get care tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/find-doctor" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:shadow-teal-200 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </Link>
              <Link 
                href="#how-it-works"
                className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full text-lg font-medium transition-all border border-slate-200 hover:border-slate-300 text-center"
              >
                See How It Works
              </Link>
            </div>
            

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              No insurance needed. No hidden fees. Just honest prices you can understand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {services.map((service) => (
              <div
                key={service.name}
                className={`relative bg-white rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 ${
                  service.popular 
                    ? "ring-2 ring-teal-500 shadow-lg" 
                    : "border border-slate-200"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  service.color === "purple" ? "bg-purple-100" : 
                  service.color === "slate" ? "bg-slate-100" : 
                  service.color === "cyan" ? "bg-cyan-100" : 
                  service.color === "emerald" ? "bg-emerald-100" : "bg-teal-100"
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    service.color === "purple" ? "text-purple-600" : 
                    service.color === "slate" ? "text-slate-600" : 
                    service.color === "cyan" ? "text-cyan-600" : 
                    service.color === "emerald" ? "text-emerald-600" : "text-teal-600"
                  }`} />
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-1">{service.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{service.description}</p>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-slate-800">${service.price}</span>
                  <span className="text-slate-500">/visit</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                        service.color === "purple" ? "text-purple-500" : 
                        service.color === "cyan" ? "text-cyan-500" : 
                        service.color === "emerald" ? "text-emerald-500" : "text-teal-500"
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/find-doctor"
                  className={`block text-center py-2.5 rounded-full font-medium transition-all text-sm ${
                    service.popular
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-500">
              Get care in 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                step: 1, 
                icon: Users,
                title: "Find a Provider", 
                desc: "Browse our network of quality healthcare providers by specialty, location, and availability. See transparent prices upfront." 
              },
              { 
                step: 2, 
                icon: Calendar,
                title: "Book & Pay", 
                desc: "Select a time that works for you. Pay online securely with any major credit card. No insurance paperwork needed." 
              },
              { 
                step: 3, 
                icon: Heart,
                title: "Get Care", 
                desc: "Visit in-person or connect via video. Same great care, your choice of format. No surprise bills, ever." 
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-teal-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ClearPath */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Why Choose ClearPath?
              </h2>
              <p className="text-xl text-slate-500 mb-8">
                We built ClearPath because healthcare shouldn't be complicated or expensive. Here's what makes us different:
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Shield, title: "No Insurance Required", desc: "Skip the paperwork. Our prices are designed to be affordable without insurance." },
                  { icon: Zap, title: "Fast Access", desc: "Book online and often see a provider within 24-48 hours. No more waiting weeks." },
                  { icon: CheckCircle, title: "Transparent Pricing", desc: "The price you see is the price you pay. No hidden fees, no surprise bills." },
                  { icon: Heart, title: "Quality Care", desc: "All providers are licensed, credentialed, and committed to excellent care." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Are You a Clinic or Employer?</h3>
              
              <div className="space-y-4 mb-8">
                <Link 
                  href="/for-clinics"
                  className="flex items-center justify-between bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">For Clinics</div>
                      <div className="text-sm text-teal-100">Join our provider network</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link 
                  href="/for-employers"
                  className="flex items-center justify-between bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">For Employers</div>
                      <div className="text-sm text-teal-100">Healthcare benefits that work</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="text-sm text-teal-100">
                Partner with us to provide affordable care to your patients or employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-500">
              Everything you need to know about ClearPath
            </p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 transition-colors"
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal-600 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join thousands who have discovered a simpler, more affordable way to access quality care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/find-doctor" 
              className="bg-white hover:bg-slate-100 text-teal-700 px-10 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book an Appointment
            </Link>
          </div>
          <p className="text-sm text-teal-200 mt-8">
            Available in Georgia & Colorado • More states coming soon
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
