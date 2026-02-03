import { ClipboardList, CreditCard, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Choose Your Product',
    description: 'Select from our range of premium modafinil and armodafinil products. Pick your preferred quantity and dosage.',
  },
  {
    number: '02',
    icon: CreditCard,
    title: 'Secure Checkout',
    description: 'Complete your purchase with our encrypted payment system. We accept multiple payment methods for your convenience.',
  },
  {
    number: '03',
    icon: Package,
    title: 'Fast Delivery',
    description: 'Receive your order in discreet packaging. Express shipping available with tracking for all Australian orders.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-linear-to-br from-slate-800 via-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get your order delivered in just 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connector Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-linear-to-r from-blue-500/50 via-blue-400/50 to-blue-500/50" />
          
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 bg-linear-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                Step {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>

              {/* Arrow (Mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

