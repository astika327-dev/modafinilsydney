import { Metadata } from 'next';
import { Plus, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ | ModafinilSydney - Frequently Asked Questions',
  description: 'Find answers to common questions about Modafinil, ordering, shipping, and payment at ModafinilSydney.',
};

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'Why do people love Modafinil?',
        a: "Sometimes coffee just doesn't cut it. Modafinil helps you stay alert and focused when you've got late-night study sessions, long shifts, or big projects that won't wait for a good night's sleep.",
      },
      {
        q: 'What brands do you sell?',
        a: 'We keep it simple and reliable: Modafinil brands include Modalert, Modvigil, Modafresh and Modasmart. No dodgy knock-offs, no mystery pills—just brands people trust.',
      },
      {
        q: 'Why buy from Modafinil-Australia instead of overseas sites?',
        a: "We actually care about your privacy and security. Your info is protected with encrypted servers, SSL payments, and zero data-sharing. Plus, we're Aussie-run, reliable, and make sure your order lands in your hands—not stuck in customs limbo.",
      },
      {
        q: 'Can Modafinil help with sleep-related conditions?',
        a: "Yes. It's prescribed for narcolepsy, sleep apnea, and shift work sleep disorder, and many people also use it to stay awake and productive when schedules get unpredictable.",
      },
      {
        q: 'Do you only sell Modafinil?',
        a: "Yep! Modafinil is all we do—and we like to think that makes us pretty good at it.",
      },
      {
        q: 'Is your website secure?',
        a: 'Absolutely. Our site is encrypted and locked down tighter than your bank app.',
      },
    ],
  },
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        q: 'How much is shipping?',
        a: "Good news: it's free, always. We send orders via Express or Registered Post depending on where you are, with no sneaky fees at checkout.",
      },
      {
        q: 'How long does delivery take?',
        a: 'Metro areas: ~10 business days. Regional/rural: a little longer. International or peak times: up to 18–25 days. We keep you updated and provide tracking as soon as your order clears customs.',
      },
      {
        q: 'What if my package doesn\'t arrive?',
        a: "No stress. If your order goes missing, we'll resend it so long as we can see from the tracking number that the package has not arrived – please see our terms and conditions for more information.",
      },
      {
        q: 'Who delivers your orders?',
        a: 'We use Australia Post—reliable, trackable, and fast.',
      },
      {
        q: 'Do you ship internationally or to all parts of Australia?',
        a: 'Yes! We deliver to every major city—Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Hobart, Darwin—as well as regional hubs like Newcastle, Wollongong, Geelong, Ballarat, Townsville, Cairns, Launceston, Alice Springs and remote towns such as Broken Hill, Kalgoorlie, Mount Isa, Geraldton, Port Hedland, and Mildura. Wherever you are, your order will arrive securely with tracking. International shipping is available too.',
      },
    ],
  },
  {
    category: 'Ordering & Payment',
    questions: [
      {
        q: 'How do I place an order?',
        a: "Easy: pick your product, add it to your cart, log in or sign up, pay securely, and we ship it right away. Need help? Chat with us on (1300 061 794)—we're around 24/7.",
      },
      {
        q: 'Can I cancel an order?',
        a: "Sure, as long as it hasn't shipped yet. Once it's on its way, it's too late to pull the pin.",
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept EFT (Electronic Funds Transfer) to our Commonwealth Bank account. Simple, secure, and quick—just like a regular bank transfer.',
      },
      {
        q: 'Are there hidden costs?',
        a: 'None. What you see is what you pay—no surprise fees or extra charges.',
      },
      {
        q: 'Can I get a prescription through your site?',
        a: "Nope, we don't provide prescriptions. You'll need to consult your doctor if you require Modafinil for medical purposes.",
      },
    ],
  },
];

function FAQSection({ category, questions }: { category: string; questions: { q: string; a: string }[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{category}</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <details key={index} className="group bg-white rounded-xl shadow-md overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-semibold text-slate-800 pr-4">{item.q}</span>
              <span className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-open:rotate-45 transition-transform">
                <Plus className="w-5 h-5" />
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90" />
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat opacity-40"
            style={{
              backgroundImage: 'url(/images/hero_new3.png)',
              backgroundPosition: 'center 20%',
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Got questions? No worries—we&apos;ve got you covered. From what&apos;s in our lineup to how fast it gets to your doorstep, here&apos;s everything you need to know.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((section) => (
              <FAQSection key={section.category} {...section} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Still Have Questions?</h2>
            <p className="text-slate-600 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help 24/7.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="tel:1300061794" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">Call Steve</h3>
                <p className="text-sm text-slate-500">1300 061 794</p>
              </a>
              <a href="mailto:orders@modafinilaustraliadirect.com" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-800 mb-2">Email Us</h3>
                <p className="text-sm text-slate-500">orders@modafinilaustraliadirect.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

