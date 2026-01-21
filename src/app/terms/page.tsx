import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Terms of Service</h1>
          <p className="text-slate-500 mb-8">Last updated: January 2025</p>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing or using ClearPath Health's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Description of Services</h2>
              <p className="text-slate-600 mb-4">
                ClearPath Health provides a platform that connects patients with healthcare providers for medical services including primary care, physical therapy, occupational therapy, mental health services, and telehealth consultations. We are a technology platform and do not directly provide medical care.
              </p>
              <p className="text-slate-600">
                Healthcare services are provided by independent, licensed healthcare professionals who use our platform. ClearPath Health is not responsible for the medical care provided by these professionals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. User Accounts</h2>
              <p className="text-slate-600 mb-4">To use certain features of our services, you must create an account. You agree to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Appointments and Payments</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Booking</h3>
              <p className="text-slate-600 mb-4">
                When you book an appointment through our platform, you are entering into a direct relationship with the healthcare provider. ClearPath Health facilitates this connection but is not a party to the provider-patient relationship.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Pricing</h3>
              <p className="text-slate-600 mb-4">
                All prices are displayed at the time of booking. The price you see is the price you pay — there are no hidden fees. Prices are subject to change, but any price changes will not affect appointments already booked.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Cancellations</h3>
              <p className="text-slate-600">
                You may cancel or reschedule appointments according to the cancellation policy displayed at booking. Late cancellations or no-shows may be subject to fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Medical Disclaimer</h2>
              <p className="text-slate-600 mb-4">
                <strong>ClearPath Health does not provide medical advice.</strong> The information on our website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-slate-600 mb-4">
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on our website.
              </p>
              <p className="text-slate-600">
                <strong>If you think you may have a medical emergency, call your doctor or 911 immediately.</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Prohibited Uses</h2>
              <p className="text-slate-600 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Use our services for any unlawful purpose</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated systems to access the services without permission</li>
                <li>Transmit viruses or other malicious code</li>
                <li>Harass, abuse, or harm another person</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Intellectual Property</h2>
              <p className="text-slate-600">
                The ClearPath Health name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of ClearPath Health. You may not use these marks without our prior written permission. All other names, logos, product and service names, designs, and slogans are the trademarks of their respective owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">
                To the fullest extent permitted by law, ClearPath Health shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Your use or inability to use our services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Any content obtained from the services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Indemnification</h2>
              <p className="text-slate-600">
                You agree to defend, indemnify, and hold harmless ClearPath Health, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the services or your violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Governing Law</h2>
              <p className="text-slate-600">
                These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Georgia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Changes to Terms</h2>
              <p className="text-slate-600">
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the services after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-xl p-4 text-slate-600">
                <p><strong>ClearPath Health</strong></p>
                <p>Email: legal@clearpathhealth.com</p>
                <p>Address: [Address to be added]</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              See also: <Link href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link> | <Link href="/hipaa" className="text-teal-600 hover:underline">HIPAA Notice</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
