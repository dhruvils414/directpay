import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold">ClearPath Health</span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Quality healthcare at transparent prices. No insurance needed. No surprise bills. Just simple, honest care.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Patients</h4>
            <ul className="text-slate-400 space-y-2">
              <li><Link href="/find-doctor" className="hover:text-teal-400 transition-colors">Find a Doctor</Link></li>
              <li><Link href="/#pricing" className="hover:text-teal-400 transition-colors">Pricing</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-teal-400 transition-colors">How It Works</Link></li>
              <li><Link href="/#faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Partners</h4>
            <ul className="text-slate-400 space-y-2">
              <li><Link href="/for-employers" className="hover:text-teal-400 transition-colors">For Employers</Link></li>
              <li><Link href="/for-clinics" className="hover:text-teal-400 transition-colors">For Clinics</Link></li>
              <li><Link href="/clinic/dashboard" className="hover:text-teal-400 transition-colors">Partner Portal</Link></li>
              <li><Link href="#" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2025 ClearPath Health. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/hipaa" className="hover:text-white transition-colors">HIPAA Notice</Link>
          </div>
          <p className="text-sm text-slate-500">
            Serving Georgia & Colorado
          </p>
        </div>
      </div>
    </footer>
  );
}
