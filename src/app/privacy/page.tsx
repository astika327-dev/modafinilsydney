import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ModafinilSydney',
  description: 'Learn how ModafinilSydney collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-12">Last updated: February 2, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
              <p className="text-slate-600">
                ModafinilSydney (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This 
                Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or make a purchase.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 mb-4">We collect information you provide directly to us:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number</li>
                <li><strong>Shipping Information:</strong> Delivery address, postal code</li>
                <li><strong>Payment Information:</strong> Credit card details (processed securely by our payment providers)</li>
                <li><strong>Account Information:</strong> Username, password, order history</li>
              </ul>
              <p className="text-slate-600 mb-4">We automatically collect certain information:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website or link</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to customer service requests</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Information Sharing</h2>
              <p className="text-slate-600 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li><strong>Shipping Partners:</strong> To deliver your orders</li>
                <li><strong>Payment Processors:</strong> To process your payments securely</li>
                <li><strong>Service Providers:</strong> Who assist in operating our business</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Security</h2>
              <p className="text-slate-600 mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>SSL encryption for all data transmission</li>
                <li>Secure storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Payment information processed by PCI-compliant providers</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Cookies</h2>
              <p className="text-slate-600 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Remember your preferences and cart items</li>
                <li>Analyze website traffic and usage</li>
                <li>Improve your browsing experience</li>
                <li>Deliver relevant advertisements</li>
              </ul>
              <p className="text-slate-600 mt-4">
                You can manage cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Your Rights</h2>
              <p className="text-slate-600 mb-4">
                Under Australian privacy law, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with the OAIC</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Data Retention</h2>
              <p className="text-slate-600">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this policy, unless a longer retention period is required by law. Order 
                history and transaction records are kept for 7 years for accounting purposes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Third-Party Links</h2>
              <p className="text-slate-600">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these websites. We encourage you to read the privacy policies of 
                any third-party sites you visit.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-slate-600">
                Our services are not intended for individuals under 18 years of age. We do not knowingly 
                collect personal information from children. If you believe we have collected information 
                from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Changes to This Policy</h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. Changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Contact Us</h2>
              <p className="text-slate-600">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none mt-4 text-slate-600 space-y-2">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@modafinilsydney.com" className="text-blue-600 hover:underline">
                    privacy@modafinilsydney.com
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> Sydney, Australia
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

