import Link from 'next/link';
import Image from 'next/image';
import { Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/track', label: 'Track Order' },
    { href: '/about', label: 'About Us' },
    { href: '/faq', label: 'FAQ' },
  ];

  const productLinks = [
    { href: '/products/modalert-200mg', label: 'Modalert 200mg' },
    { href: '/products/modvigil-200mg', label: 'Modvigil 200mg' },
    { href: '/products/modafresh-200mg', label: 'Modafresh 200mg' },
    { href: '/products/modawake-200mg', label: 'Modawake 200mg' },
    { href: '/products/modafinil-400mg-australia', label: 'Modafinil 400mg' },
  ];

  const supportLinks = [
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'Shipping Info' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Boost Your Cognitive Performance?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of satisfied customers across Australia. Order today and experience the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Shop Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/icon.png"
                alt="ModafinilSydney"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Your trusted source for premium cognitive enhancers in Australia. We&apos;re committed to quality, privacy, and customer satisfaction.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-white placeholder-white/50"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} ModafinilSydney. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">We Accept:</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/10 rounded text-sm">🏦 Commonwealth Bank EFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

