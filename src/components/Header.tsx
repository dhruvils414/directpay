"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#pricing", label: "Pricing" },
    { href: "/find-doctor", label: "Find a Doctor" },
    { href: "/for-employers", label: "For Employers" },
    { href: "/for-clinics", label: "For Clinics" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-xl font-bold text-slate-800">ClearPath</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-teal-600" : "text-slate-600 hover:text-teal-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/find-doctor"
            className="hidden sm:inline-flex bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg"
          >
            Book Now
          </Link>
          
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="block py-2 text-slate-600 hover:text-teal-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/find-doctor"
            className="block bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-medium text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
