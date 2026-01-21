import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, Lock, FileText, Users, Phone } from "lucide-react";

export default function HIPAANotice() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">HIPAA Notice of Privacy Practices</h1>
          </div>
          <p className="text-slate-500 mb-8">Effective Date: January 2025</p>

          {/* Summary Box */}
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-8">
            <h2 className="font-bold text-teal-800 mb-2">Your Information. Your Rights. Our Responsibilities.</h2>
            <p className="text-teal-700 text-sm">
              This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
            </p>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
              <p className="text-slate-600 mb-4">When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.</p>
              
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Get a copy of your health records</h3>
                  <p className="text-slate-600 text-sm">You can ask to see or get a copy of your health records and other health information we have about you. We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Ask us to correct your health records</h3>
                  <p className="text-slate-600 text-sm">You can ask us to correct your health information you think is incorrect or incomplete. We may say "no" to your request, but we'll tell you why in writing within 60 days.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Request confidential communications</h3>
                  <p className="text-slate-600 text-sm">You can ask us to contact you in a specific way (for example, home or office phone) or to send mail to a different address. We will consider all reasonable requests and must say "yes" if you tell us you would be in danger if we do not.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Ask us to limit what we use or share</h3>
                  <p className="text-slate-600 text-sm">You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say "no" if it would affect your care.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Get a list of those with whom we've shared information</h3>
                  <p className="text-slate-600 text-sm">You can ask for a list (accounting) of the times we've shared your health information for six years prior to the date you ask, who we shared it with, and why. We will include all the disclosures except for those about treatment, payment, and health care operations.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Get a copy of this privacy notice</h3>
                  <p className="text-slate-600 text-sm">You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Choose someone to act for you</h3>
                  <p className="text-slate-600 text-sm">If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">File a complaint if you feel your rights are violated</h3>
                  <p className="text-slate-600 text-sm">You can complain if you feel we have violated your rights by contacting us. You can also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights. We will not retaliate against you for filing a complaint.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Uses and Disclosures</h2>
              <p className="text-slate-600 mb-4">We may use and share your health information in the following ways:</p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-semibold text-slate-800 mb-1">Treatment</h3>
                  <p className="text-slate-600 text-sm">We can use your health information and share it with professionals who are treating you. Example: A doctor sends us information about your diagnosis and treatment plan so we can arrange additional services.</p>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-semibold text-slate-800 mb-1">Payment</h3>
                  <p className="text-slate-600 text-sm">We can use and share your health information to bill and get payment from health plans or other entities. Example: We give information about you to your health insurance plan so it will pay for your services.</p>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="font-semibold text-slate-800 mb-1">Health Care Operations</h3>
                  <p className="text-slate-600 text-sm">We can use and share your health information to run our practice, improve your care, and contact you when necessary. Example: We use health information about you to manage your treatment and services.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Other Uses and Disclosures</h2>
              <p className="text-slate-600 mb-4">We may also use or share your information in the following situations:</p>
              
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>As required by law</strong> — We will share information about you if state or federal laws require it.</li>
                <li><strong>Public health and safety</strong> — To help with public health and safety issues, such as preventing disease or reporting suspected abuse.</li>
                <li><strong>Research</strong> — We can use or share your information for health research, with your authorization or when approved by a privacy board.</li>
                <li><strong>Workers' compensation</strong> — We can use or share health information for workers' compensation claims.</li>
                <li><strong>Law enforcement</strong> — We can share health information with law enforcement when required by law or court order.</li>
                <li><strong>Health oversight activities</strong> — We can share information for activities authorized by law, such as audits and investigations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Authorization</h2>
              <p className="text-slate-600 mb-4">
                For any other uses and disclosures not described in this notice, we will ask for your written authorization before using or sharing your health information. If you give us authorization, you may revoke it at any time by submitting a written request.
              </p>
              <p className="text-slate-600">
                <strong>Marketing and sale of your information:</strong> We will never use or share your information for marketing purposes or sell your information without your written authorization.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Responsibilities</h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>We are required by law to maintain the privacy and security of your protected health information.</li>
                <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
                <li>We must follow the duties and privacy practices described in this notice and give you a copy of it.</li>
                <li>We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Changes to This Notice</h2>
              <p className="text-slate-600">
                We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request and on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Information</h2>
              <p className="text-slate-600 mb-4">
                If you have questions about this notice or want to exercise your rights, please contact our Privacy Officer:
              </p>
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">ClearPath Health Privacy Officer</p>
                    <p className="text-slate-600">Email: privacy@clearpathhealth.com</p>
                    <p className="text-slate-600">Phone: [Phone number to be added]</p>
                    <p className="text-slate-600">Address: [Address to be added]</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mt-6 mb-4">
                To file a complaint with the federal government:
              </p>
              <div className="bg-slate-50 rounded-xl p-6">
                <p className="font-semibold text-slate-800">U.S. Department of Health and Human Services</p>
                <p className="text-slate-600">Office for Civil Rights</p>
                <p className="text-slate-600">Website: www.hhs.gov/ocr/privacy/hipaa/complaints</p>
                <p className="text-slate-600">Phone: 1-877-696-6775</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              See also: <Link href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</Link> | <Link href="/terms" className="text-teal-600 hover:underline">Terms of Service</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
