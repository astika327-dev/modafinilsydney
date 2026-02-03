import { Lock, Package, Award, Truck } from 'lucide-react';

const trustItems = [
  {
    icon: Lock,
    title: 'Secure Checkout',
    description: '256-bit SSL encryption',
  },
  {
    icon: Package,
    title: 'Discreet Packaging',
    description: 'No product details visible',
  },
  {
    icon: Truck,
    title: 'Guaranteed Delivery',
    description: 'Or your money back',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Lab-tested products',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-8 bg-linear-to-r from-slate-50 to-blue-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 p-4"
            >
              <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm md:text-base">{item.title}</h4>
                <p className="text-slate-500 text-xs md:text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

