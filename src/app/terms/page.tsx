import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ModafinilSydney',
  description: 'Read our terms of service and conditions for using ModafinilSydney.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Terms of Service</h1>
          <p className="text-slate-500 mb-12">Last updated: February 2, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600">
                By accessing or using the ModafinilSydney website and services, you agree to be bound by these 
                Terms of Service. If you do not agree to all the terms and conditions, you may not access the 
                website or use any services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Eligibility</h2>
              <p className="text-slate-600 mb-4">To use our services, you must:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Be a resident of Australia</li>
                <li>Not be prohibited from purchasing pharmaceutical products under Australian law</li>
                <li>Provide accurate and complete information during registration and checkout</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Products and Services</h2>
              <p className="text-slate-600 mb-4">
                ModafinilSydney sells pharmaceutical products under the TGA Personal Importation Scheme. 
                By placing an order, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Products are for personal use only</li>
                <li>You are importing no more than a 3-month supply</li>
                <li>You understand the legal status of these products in Australia</li>
                <li>You will not resell or distribute any products purchased</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Ordering and Payment</h2>
              <p className="text-slate-600 mb-4">
                When you place an order through our website:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>All prices are in Australian Dollars (AUD) unless otherwise stated</li>
                <li>Payment must be made at the time of order</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Product availability and prices are subject to change without notice</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Shipping and Delivery</h2>
              <p className="text-slate-600 mb-4">
                We ship to all Australian states and territories. Delivery times are estimates and not 
                guaranteed. We are not responsible for delays caused by customs, postal services, or 
                other factors beyond our control.
              </p>
              <p className="text-slate-600">
                In the event of a lost or seized package, we offer a one-time reshipment at no additional 
                cost, subject to our verification process.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Returns and Refunds</h2>
              <p className="text-slate-600 mb-4">
                Due to the nature of pharmaceutical products, we cannot accept returns. Refunds may be 
                issued at our discretion in cases of:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Damaged products (with photographic evidence)</li>
                <li>Incorrect items received</li>
                <li>Products significantly past expiry date upon receipt</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Medical Disclaimer</h2>
              <p className="text-slate-600">
                ModafinilSydney does not provide medical advice. The information on our website is for 
                educational purposes only. Always consult a healthcare professional before using any 
                pharmaceutical product. We are not responsible for any adverse effects resulting from 
                the use of our products.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Privacy</h2>
              <p className="text-slate-600">
                Your privacy is important to us. Please review our{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>{' '}
                to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Limitation of Liability</h2>
              <p className="text-slate-600">
                ModafinilSydney shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages arising out of your use of our website or products. Our total liability 
                shall not exceed the amount paid for the products in question.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Changes to Terms</h2>
              <p className="text-slate-600">
                We reserve the right to modify these terms at any time. Changes will be posted on this page 
                with an updated revision date. Continued use of our services after any changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Contact Information</h2>
              <p className="text-slate-600">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:support@modafinilsydney.com" className="text-blue-600 hover:underline">
                  support@modafinilsydney.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

