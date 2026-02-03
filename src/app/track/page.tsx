'use client';

import { useState } from 'react';
import { Search, Package, ExternalLink, Truck, Mail } from 'lucide-react';

const trackingServices = [
  {
    id: 'auspost',
    name: 'Australia Post',
    description: 'Track domestic and international parcels via Australia Post',
    icon: '🇦🇺',
    color: 'from-red-500 to-red-600',
    baseUrl: 'https://auspost.com.au/mypost/track/#/search?trackIds=',
  },
  {
    id: '17track',
    name: '17TRACK',
    description: 'Universal tracking for 2000+ carriers worldwide',
    icon: '🌐',
    color: 'from-blue-500 to-blue-600',
    baseUrl: 'https://t.17track.net/en#nums=',
  },
  {
    id: 'aftership',
    name: 'AfterShip',
    description: 'Track shipments from 900+ carriers globally',
    icon: '📦',
    color: 'from-emerald-500 to-emerald-600',
    baseUrl: 'https://www.aftership.com/track/',
  },
];

export default function TrackOrderPage() {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrack = (service: typeof trackingServices[0]) => {
    if (!trackingNumber.trim()) return;
    const url = service.baseUrl + encodeURIComponent(trackingNumber.trim());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90" />
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40"
            style={{
              backgroundImage: 'url(/images/hero_logo_new.png)',
            }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Track Your Order
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Enter your tracking number below and choose your preferred tracking service
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Tracking Number
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter your tracking number..."
                className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
              />
            </div>
            <p className="text-sm text-slate-500 mt-3">
              Your tracking number was sent to your email after your order was shipped.
            </p>
          </div>
        </div>

        {/* Tracking Services */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
            Choose a Tracking Service
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {trackingServices.map((service) => (
              <button
                key={service.id}
                onClick={() => handleTrack(service)}
                disabled={!trackingNumber.trim()}
                className={`group relative bg-white rounded-2xl shadow-lg p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg`}
              >
                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                  {service.name}
                  <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-500">
                  {service.description}
                </p>
              </button>
            ))}
          </div>

          {!trackingNumber.trim() && (
            <p className="text-center text-slate-500 mt-6">
              Please enter a tracking number above to enable tracking
            </p>
          )}
        </div>

        {/* Shipping Info */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-linear-to-br from-blue-50 to-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Truck className="w-6 h-6 text-blue-600" />
              Shipping Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2">Express Shipping</h3>
                <p className="text-slate-600 text-sm">
                  All orders are shipped via express courier. Typical delivery time is 5-10 business days to Australia.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2">Discreet Packaging</h3>
                <p className="text-slate-600 text-sm">
                  All packages are shipped in plain, unmarked packaging with no indication of contents.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2">Tracking Updates</h3>
                <p className="text-slate-600 text-sm">
                  You will receive email updates as your package moves through the shipping network.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <h3 className="font-semibold text-slate-800 mb-2">Guaranteed Delivery</h3>
                <p className="text-slate-600 text-sm">
                  If your package is lost or seized, we will reship your order at no extra cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Need Help With Your Order?
            </h3>
            <p className="text-slate-600 mb-4">
              If you have any questions about your shipment, our support team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all"
            >
              Contact Support
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
