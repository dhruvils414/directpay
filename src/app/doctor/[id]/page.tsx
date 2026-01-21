"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const doctor = {
  id: 1,
  name: "Dr. Sarah Johnson",
  specialty: "Primary Care",
  credentials: "MD, FACP",
  location: "Atlanta, GA",
  address: "123 Health Center Drive, Suite 200",
  price: 79,
  rating: 4.9,
  reviews: 124,
  experience: 15,
  bio: "Dr. Johnson is a board-certified internist with over 15 years of experience in primary care. She believes in building lasting relationships with her patients and providing comprehensive, personalized care.",
  education: ["Harvard Medical School, MD", "Stanford University, BS Biology"],
  languages: ["English", "Spanish"],
  services: ["Annual Physicals", "Chronic Disease Management", "Preventive Care", "Acute Care Visits"],
};

export default function DoctorProfile() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link href="/find-doctor" className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search
          </Link>

          {/* Demo Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-amber-700">
              <span className="font-medium text-amber-800">Demo Profile:</span> This provider is shown for demonstration purposes only.
            </p>
          </div>

          {/* Doctor Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-8">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-teal-600 font-bold text-2xl">
                  SJ
                </div>
                <div className="text-white">
                  <h1 className="text-3xl font-bold mb-1">{doctor.name}</h1>
                  <p className="text-teal-100">{doctor.specialty} • {doctor.credentials}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold">{doctor.rating}</span>
                      <span className="text-teal-100">({doctor.reviews} reviews)</span>
                    </div>
                    <span className="text-teal-100">•</span>
                    <span className="text-teal-100">{doctor.experience} years experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="font-semibold text-slate-800 mb-2">About</h2>
                    <p className="text-slate-600">{doctor.bio}</p>
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-800 mb-2">Education</h2>
                    <ul className="space-y-1">
                      {doctor.education.map((edu) => (
                        <li key={edu} className="text-slate-600 flex items-center gap-2">
                          <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-800 mb-2">Services</h2>
                    <div className="flex flex-wrap gap-2">
                      {doctor.services.map((service) => (
                        <span key={service} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-800 mb-2">Languages</h2>
                    <p className="text-slate-600">{doctor.languages.join(", ")}</p>
                  </div>
                </div>

                {/* Booking Card */}
                <div>
                  <div className="bg-slate-50 rounded-2xl p-6 sticky top-28">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-slate-800">${doctor.price}</div>
                      <div className="text-slate-500">per visit</div>
                    </div>
                    
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {doctor.address}
                      </div>
                    </div>

                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
                    >
                      Join Waitlist
                    </button>
                    
                    <p className="text-xs text-slate-400 text-center mt-3">
                      We&apos;ll notify you when appointments open
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Waitlist Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
              {!submitted ? (
                <>
                  <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">Join the Waitlist</h3>
                  <p className="text-slate-500 mb-6">We&apos;ll contact you when {doctor.name} has availability.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Visit</label>
                      <textarea
                        rows={3}
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                      />
                    </div>
                    <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-semibold">
                      Join Waitlist
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">You&apos;re on the list!</h3>
                  <p className="text-slate-500 mb-6">We&apos;ll notify you when appointments become available.</p>
                  <button onClick={() => setShowModal(false)} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-medium">
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
