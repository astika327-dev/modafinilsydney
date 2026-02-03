import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Truck, Award, Users, Heart, Globe, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | ModafinilSydney - Your Trusted Modafinil Supplier',
  description: 'Learn about ModafinilSydney, Australia\'s premier supplier of genuine Modafinil and Armodafinil products with fast, discreet shipping.',
};

const values = [
  {
    icon: Shield,
    title: '100% Genuine Products',
    description: 'All our products are sourced directly from licensed pharmaceutical manufacturers.',
  },
  {
    icon: Truck,
    title: 'Fast & Discreet Shipping',
    description: 'Plain packaging with no external branding. Your privacy is our priority.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Every batch is tested for purity and potency before being shipped.',
  },
  {
    icon: Users,
    title: '10,000+ Happy Customers',
    description: 'Join thousands of Australians who trust us for their cognitive enhancement needs.',
  },
];

const stats = [
  { number: '10,000+', label: 'Happy Customers' },
  { number: '50,000+', label: 'Orders Delivered' },
  { number: '99.8%', label: 'Delivery Success' },
  { number: '4.9/5', label: 'Customer Rating' },
];

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Medical Advisor',
    bio: 'MBBS with 15 years experience in neurological medicine.',
  },
  {
    name: 'James Chen',
    role: 'Operations Director',
    bio: 'Former pharmaceutical supply chain executive.',
  },
  {
    name: 'Emma Thompson',
    role: 'Customer Success Lead',
    bio: 'Dedicated to ensuring every customer has a great experience.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: 'url(/images/hero-sydney.jpg)',
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              About ModafinilSydney
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Australia&apos;s most trusted supplier of premium cognitive enhancement products. 
              We&apos;re committed to helping Australians achieve peak mental performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">{stat.number}</p>
                <p className="text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto" />
            </div>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p>
                ModafinilSydney was founded in 2020 with a simple mission: to provide Australians with 
                access to genuine, high-quality cognitive enhancement products at fair prices.
              </p>
              <p>
                Frustrated by unreliable suppliers, long shipping times, and questionable product quality, 
                our founders set out to create a service that puts customers first. Today, we&apos;re proud 
                to be Australia&apos;s most trusted name in Modafinil supply.
              </p>
              <p>
                We work directly with licensed pharmaceutical manufacturers including Sun Pharma and 
                HAB Pharma to ensure every product that reaches our customers is 100% genuine. Our 
                streamlined logistics network ensures fast, discreet delivery to every corner of Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-slate-500">What sets ModafinilSydney apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h2 className="text-3xl font-bold mb-6">Our Promise to You</h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  'Genuine pharmaceutical-grade products only',
                  '100% reshipment guarantee on lost packages',
                  'Discreet, plain packaging on all orders',
                  'Fast Australian-based customer support',
                  'Secure payment with multiple options',
                  'Competitive prices with quantity discounts',
                ].map((promise, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-200 shrink-0 mt-0.5" />
                    <span className="text-blue-100">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Join thousands of satisfied customers across Australia
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}

