'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X, User, Package } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { items, setIsOpen } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check auth status
    import('@/lib/supabase/client').then(({ createClient }) => {
      const supabase = createClient();
      supabase.auth.getUser().then(({ data }) => {
        setUser(data.user);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

      return () => subscription.unsubscribe();
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/track', label: 'Track Order' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-linear-to-r from-slate-800 to-slate-900 text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            🚀 FREE Express Shipping on Orders Over $150 AUD | 🔒 Secure Checkout | ✅ 100% Genuine
          </p>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/icon.png"
                alt="ModafinilSydney"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Track Order - Desktop */}
              <Link
                href="/track"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                <Package className="w-4 h-4" />
                Track
              </Link>

              {/* Account/Login */}
              <Link
                href={user ? "/account" : "/login"}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors group relative"
                title={user ? "My Account" : "Sign In"}
              >
                <User className={`w-6 h-6 ${user ? 'text-blue-600' : 'text-slate-700'}`} />
              </Link>

              {/* Cart */}
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-slate-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-700" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-700" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4 bg-white border-t">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-blue-600 hover:bg-slate-50 font-medium py-3 px-4 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-t pt-2 mt-2">
                <Link
                  href={user ? "/account" : "/login"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 font-medium py-3 px-4 rounded-xl transition-colors"
                >
                  <User className="w-5 h-5" />
                  {user ? 'My Account' : 'Sign In'}
                </Link>
              </li>
              {!user && (
                <li>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    Sign In Now
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

