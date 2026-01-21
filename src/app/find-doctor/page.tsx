"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const doctors = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Primary Care", location: "Atlanta, GA", price: 79, rating: 4.9, reviews: 124, available: true, initials: "SJ" },
  { id: 2, name: "Dr. Michael Chen", specialty: "Internal Medicine", location: "Denver, CO", price: 79, rating: 4.8, reviews: 98, available: true, initials: "MC" },
  { id: 3, name: "Dr. Emily Rodriguez", specialty: "Family Medicine", location: "Atlanta, GA", price: 79, rating: 4.9, reviews: 156, available: false, initials: "ER" },
  { id: 4, name: "Dr. James Williams", specialty: "Physical Therapy", location: "Denver, CO", price: 69, rating: 4.7, reviews: 87, available: true, initials: "JW" },
  { id: 5, name: "Dr. Lisa Thompson", specialty: "Mental Health", location: "Atlanta, GA", price: 69, rating: 4.9, reviews: 203, available: true, initials: "LT" },
  { id: 6, name: "Dr. Robert Kim", specialty: "Occupational Therapy", location: "Denver, CO", price: 69, rating: 4.6, reviews: 72, available: true, initials: "RK" },
];

const specialties = ["All Specialties", "Primary Care", "Internal Medicine", "Family Medicine", "Physical Therapy", "Occupational Therapy", "Mental Health"];
const locations = ["All Locations", "Atlanta, GA", "Denver, CO"];

export default function FindDoctor() {
  const [specialty, setSpecialty] = useState("All Specialties");
  const [location, setLocation] = useState("All Locations");
  const [search, setSearch] = useState("");

  const filtered = doctors.filter((doc) => {
    const matchSpecialty = specialty === "All Specialties" || doc.specialty === specialty;
    const matchLocation = location === "All Locations" || doc.location === location;
    const matchSearch = doc.name.toLowerCase().includes(search.toLowerCase());
    return matchSpecialty && matchLocation && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-slate-800 mb-2">Find a Doctor</h1>
            <p className="text-slate-500">Browse our network of quality healthcare providers</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  />
                </div>
              </div>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white"
              >
                {specialties.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Demo Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm text-amber-800 font-medium">Demo Mode</p>
              <p className="text-sm text-amber-700">The providers shown below are for demonstration purposes only. Actual provider network coming soon.</p>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/doctor/${doctor.id}`}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-semibold text-lg">
                    {doctor.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">{doctor.name}</h3>
                    <p className="text-sm text-slate-500">{doctor.specialty}</p>
                    <p className="text-sm text-slate-400">{doctor.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium text-slate-800">{doctor.rating}</span>
                    <span className="text-sm text-slate-400">({doctor.reviews})</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${doctor.available ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                    {doctor.available ? "Available" : "Waitlist"}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-2xl font-bold text-slate-800">${doctor.price}</span>
                    <span className="text-slate-500 text-sm">/visit</span>
                  </div>
                  <span className="text-teal-600 font-medium text-sm group-hover:underline">View Profile →</span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No doctors found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
