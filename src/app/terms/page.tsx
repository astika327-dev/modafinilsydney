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
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">Terms and Conditions – Customer Responsibility Statement</h1>
          <p className="text-slate-500 mb-12">Last updated: February 4, 2026</p>

          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="lead text-xl text-slate-700 mb-8">
              This Customer Responsibility Statement forms the Terms and Conditions for purchasing Modafinil products via this website. By placing an order, you acknowledge and agree to the following:
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Personal Importation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>I confirm that I am personally importing Modafinil for my own use under the Therapeutic Goods Administration (TGA) personal importation scheme.</li>
                <li>I am over 18 years of age and take full responsibility for the decision to purchase and use Modafinil.</li>
                <li>I will not resell any Modafinil products that I purchase off this website.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Medical Responsibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>I understand that Modafinil is a prescription-only medication in Australia.</li>
                <li>It is my responsibility to consult a qualified doctor before ordering or using any Modafinil product.</li>
                <li>I accept that if I fail to seek medical advice before ordering or taking Modafinil, I do so at my own risk.</li>
                <li>I acknowledge that the suppliers and operators of this website take no responsibility if I become unwell, experience side effects, or suffer any medical complications from using Modafinil.</li>
                <li>I understand that all medicines, including Modafinil, carry potential risks and side effects.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Use of Product</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Modafinil I purchase is strictly for my personal use only and will not be shared, sold, or distributed to others.</li>
                <li>I agree not to order more than a 3-month supply in line with TGA regulations.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Website & Information Disclaimer</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All content on this website, including product information and blog articles, is provided for educational and informational purposes only.</li>
                <li>This website does not provide medical advice. We are not doctors, and no content should be considered a substitute for medical consultation.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Delivery & Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>I understand that delivery times may vary due to customs, shipping delays, or unforeseen circumstances.</li>
                <li>If my order does not arrive within 45 days from dispatch, I am entitled to – a free new shipment to replace my existing order.</li>
                <li>I accept that once delivered, the product is non-returnable for health and safety reasons.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>By purchasing through this website, I accept full responsibility for the decision to import and use Modafinil.</li>
                <li>The website operators and suppliers accept no liability for any adverse effects, misuse, medical complications, or health outcomes resulting from Modafinil use.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

