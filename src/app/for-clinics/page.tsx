"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function ForClinics() {
  const [providerType, setProviderType] = useState("clinic");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Hero Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 mb-6">
                  <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm text-teal-700 font-medium">Partner With Us</span>
                </div>
                
                <h1 className="font-display text-5xl font-bold text-slate-800 leading-tight mb-6">
                  Grow Your Practice.<br />
                  <span className="text-teal-600">Get Paid Upfront.</span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-8 max-w-lg">
                  Join ClearPath Health&apos;s network and reach thousands of patients seeking affordable care. No insurance hassles. Guaranteed payments. Zero marketing costs.
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm">
                  {["Free during early access", "EMR-like platform included", "No long-term contracts"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-slate-600">
                      <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
                <div className="text-center mb-6">
                  <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    🚀 Pre-Launch
                  </span>
                  <h2 className="font-display text-2xl font-bold text-slate-800">Get Early Access</h2>
                  <p className="text-slate-500 text-sm mt-1">Launching in Georgia & Colorado</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Provider Type Toggle */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">I am a...</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="providerType"
                          value="clinic"
                          checked={providerType === "clinic"}
                          onChange={(e) => setProviderType(e.target.value)}
                          className="peer sr-only"
                        />
                        <div className="border-2 border-slate-200 peer-checked:border-teal-500 peer-checked:bg-teal-50 rounded-xl p-4 text-center transition-all">
                          <svg className="w-8 h-8 mx-auto mb-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="font-medium text-slate-700">Clinic / Practice</span>
                          <span className="block text-xs text-slate-500 mt-1">Multiple providers</span>
                        </div>
                      </label>
                      <label className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="providerType"
                          value="individual"
                          checked={providerType === "individual"}
                          onChange={(e) => setProviderType(e.target.value)}
                          className="peer sr-only"
                        />
                        <div className="border-2 border-slate-200 peer-checked:border-teal-500 peer-checked:bg-teal-50 rounded-xl p-4 text-center transition-all">
                          <svg className="w-8 h-8 mx-auto mb-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="font-medium text-slate-700">Individual Doctor</span>
                          <span className="block text-xs text-slate-500 mt-1">Solo practitioner</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {providerType === "clinic" ? "Clinic Name" : "Your Full Name"} *
                      </label>
                      <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {providerType === "clinic" ? "Contact Name" : "Credentials"} *
                      </label>
                      <input type="text" required className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input type="email" required className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Location *</label>
                      <input type="text" required placeholder="City, State" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Specialty</label>
                      <input type="text" placeholder="e.g., Primary Care" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg">
                    Request Early Access
                  </button>
                </form>
                
                <p className="text-xs text-slate-400 text-center mt-4">
                  We&apos;ll never share your information.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                  <Link href="/clinic/dashboard" className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                    View Demo Portal →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-slate-800 mb-4">Why Partner With ClearPath?</h2>
              <p className="text-lg text-slate-500">We bring you patients. You provide great care.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "New Patient Flow", desc: "Access thousands of patients actively seeking affordable care in your area.", icon: "users" },
                { title: "Guaranteed Payments", desc: "Get paid upfront. No claims to file, no denials to fight, no collections.", icon: "money" },
                { title: "Zero Admin Burden", desc: "We handle marketing, scheduling, and payments. You focus on care.", icon: "check" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">Request Received!</h3>
              <p className="text-slate-500 mb-6">Thank you for your interest in partnering with ClearPath Health. We&apos;ll be in touch within 2 business days.</p>
              <button onClick={() => setShowModal(false)} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-medium">
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
