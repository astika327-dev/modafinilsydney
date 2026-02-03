'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is Modafinil and how does it work?',
    answer: 'Modafinil is a wakefulness-promoting agent that enhances cognitive function, focus, and alertness. It works by affecting neurotransmitters in the brain, including dopamine and norepinephrine, to promote wakefulness without the jittery effects of traditional stimulants.',
  },
  {
    question: 'How long does shipping take to Australia?',
    answer: 'Standard shipping typically takes 7-14 business days. Express shipping is available for 5-7 business days. All orders include tracking information so you can monitor your delivery status.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including Credit/Debit Cards, Bitcoin, Bank Transfer, and other cryptocurrency options. All payments are processed through secure, encrypted channels.',
  },
  {
    question: 'Is the packaging discreet?',
    answer: 'Yes, all orders are shipped in plain, unmarked packaging with no indication of the contents. The sender information is generic and does not reveal anything about the products inside.',
  },
  {
    question: "What if my order doesn't arrive?",
    answer: 'We offer a guaranteed delivery policy. If your order doesn\'t arrive, we will either reship it free of charge or provide a full refund. Contact our support team with your tracking information for assistance.',
  },
  {
    question: "What's the difference between Modafinil and Armodafinil?",
    answer: 'Modafinil contains both R and S enantiomers, while Armodafinil contains only the R-enantiomer. Armodafinil is considered to be slightly more potent and longer-lasting, making it ideal for those who need extended focus throughout the day.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors pr-8">
          {question}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
          isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-5' : 'max-h-0'
      }`}>
        <p className="text-slate-600 leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Everything you need to know about ordering from ModafinilSydney
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

