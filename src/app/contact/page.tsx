'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  MessageCircle, CheckCircle, Loader2,
  Instagram, Facebook, Linkedin
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'orders@modafinilaustraliadirect.com',
    subtext: 'We reply within 24 hours',
    href: 'mailto:orders@modafinilaustraliadirect.com',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    content: '+61 8 6866 0556',
    subtext: 'Available 7 days a week',
    href: 'https://wa.me/61868660556',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Sunday',
    subtext: '10:00 AM - 10:00 PM AEST',
  },
  {
    icon: MapPin,
    title: 'Our Office',
    content: 'Level 2/29 Chifley Square',
    subtext: 'Sydney NSW 2000',
  },
];

const deliveryAreas = [
  'Sydney',
  'Melbourne',
  'Brisbane',
  'Perth',
  'Adelaide',
  'Gold Coast',
  'Darwin',
  'Canberra',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Message Sent!</h1>
          <p className="text-slate-600 mb-8">
            Thank you for contacting us. We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', orderNumber: '', subject: '', message: '' });
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: 'url(/images/hero-sydney.jpg)',
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            We&apos;re Quick on the Reply, Always!
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Got a question, concern, or just want to say hi? We&apos;re on it — our inbox is always open, 
            and we pride ourselves on lightning-fast replies.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-blue-600 hover:underline font-medium">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-medium">{item.content}</p>
                      )}
                      <p className="text-sm text-slate-500">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-bold text-slate-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Delivery Areas */}
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
                <h3 className="font-bold text-slate-800 mb-4">🚚 Delivery Areas</h3>
                <p className="text-sm text-slate-600 mb-3">We deliver Australia-wide via Australia Post with Express & Standard options:</p>
                <div className="flex flex-wrap gap-2">
                  {deliveryAreas.map((area) => (
                    <span key={area} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 border">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 p-6 bg-slate-100 rounded-2xl">
                <h3 className="font-bold text-slate-800 mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/faq" className="text-blue-600 hover:underline flex items-center gap-2">
                      → Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="/track" className="text-blue-600 hover:underline flex items-center gap-2">
                      → Track Your Order
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-blue-600 hover:underline flex items-center gap-2">
                      → Browse Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-blue-600 hover:underline flex items-center gap-2">
                      → About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Send us a Message</h2>
                <p className="text-slate-500 mb-6">Shoot us a message anytime, day or night — we actually read our emails!</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Order Number (optional)
                      </label>
                      <input
                        type="text"
                        name="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleChange}
                        placeholder="MS-XXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="order">Order Inquiry</option>
                        <option value="shipping">Shipping Question</option>
                        <option value="product">Product Information</option>
                        <option value="payment">Payment Issue</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 bg-green-50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">Prefer WhatsApp?</h3>
                  <p className="text-slate-600">Get instant replies on WhatsApp. We&apos;re available 7 days a week!</p>
                </div>
                <a
                  href="https://wa.me/61868660556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

