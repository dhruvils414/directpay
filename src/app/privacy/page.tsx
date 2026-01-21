import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
              <p className="text-slate-600 mb-4">
                ClearPath Health ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p className="text-slate-600">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Personal Information</h3>
              <p className="text-slate-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you register for an account, book an appointment, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Date of birth and gender</li>
                <li>Billing and payment information</li>
                <li>Health information necessary to provide services</li>
                <li>Insurance information (if applicable)</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Automatically Collected Information</h3>
              <p className="text-slate-600 mb-4">
                When you access our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Device and browser type</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process appointments and payments</li>
                <li>Send appointment reminders and important notifications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Sharing Your Information</h2>
              <p className="text-slate-600 mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li><strong>Healthcare Providers:</strong> To facilitate your appointments and care</li>
                <li><strong>Service Providers:</strong> With third parties who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Security</h2>
              <p className="text-slate-600">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Your Rights</h2>
              <p className="text-slate-600 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Cookies</h2>
              <p className="text-slate-600">
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can set your browser to refuse cookies, but some features of our website may not function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Children's Privacy</h2>
              <p className="text-slate-600">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Changes to This Policy</h2>
              <p className="text-slate-600">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-xl p-4 text-slate-600">
                <p><strong>ClearPath Health</strong></p>
                <p>Email: privacy@clearpathhealth.com</p>
                <p>Address: [Address to be added]</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              See also: <Link href="/terms" className="text-teal-600 hover:underline">Terms of Service</Link> | <Link href="/hipaa" className="text-teal-600 hover:underline">HIPAA Notice</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
