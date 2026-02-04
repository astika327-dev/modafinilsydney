import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Truck, Award, Users, Heart, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | ModafinilSydney - Your Trusted Modafinil Supplier',
  description: 'Learn about ModafinilSydney, Australia\'s premier supplier of genuine Modafinil and Armodafinil products with fast, discreet shipping.',
};





export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90" />
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-40"
            style={{
              backgroundImage: 'url(/images/hero_new3.png)',
              backgroundPosition: 'center 55%',
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

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Intro */}
            <div className="prose prose-lg max-w-none text-slate-600">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Our Story</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto" />
              </div>
              <p className="lead text-xl text-slate-700 mb-6">
                Our journey began with two exhausted Aussies, Steven and Jardine. We’re not doctors, scientists, or corporate executives — we’re just two everyday people juggling demanding careers, raising kids, and trying to keep life on track.
              </p>
              <p>
                We understand the challenges you face because we’ve been there, running on empty between the long hours, tight deadlines, late-night nappy changes, and the constant rush from school drop-offs to work meetings. Like many Aussies, we needed something that would help us stay sharp, focused, and productive without burning out — and keep us going with our lives.
              </p>
              <p>
                That’s when we discovered Modafinil — a safe, reliable, and effective way to maintain our mental edge and power through even the most demanding days. It wasn’t about “working more” for us, but about working better and still having energy left for the people we love and the things we love to do: our kids and our lives outside work.
              </p>
            </div>

            {/* Why We Started */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Why We Started Modafinil Sydney</h3>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  When we first looked into buying Modafinil, we quickly learned how difficult and overpriced the options in Australia could be. Between unreliable suppliers, long shipping times, and questionable product quality, it was a minefield.
                </p>
                <p>
                  We knew there had to be a better way — and if we were facing these challenges, other Aussies were too.
                </p>
                <p>
                  So, we made it our mission: to provide high-quality, affordable Modafinil to Australians who need it most — from shift workers and students to entrepreneurs, busy execs and parents like us. We’re here for you, because we understand the difference Modafinil can make in your life.
                </p>
              </div>
            </div>

            {/* Commitment */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Commitment to Quality & Service</h3>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p className="mb-6">
                  We’ve been on the customer side of this industry, so we understand the importance of trusting what you’re taking. That’s why we only work with reputable suppliers, thoroughly vet every batch, and ensure all products are handled and shipped with the highest care. You can rest assured that when you buy from us, you’re getting a safe, reliable product. <Link href="/reviews" className="text-blue-600 hover:underline">See what our customers have to say about us here!</Link>
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-xs">
                    <Truck className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-bold text-slate-800 mb-2">Fast Delivery</h4>
                    <p className="text-sm">Whether you’re in Sydney, Melbourne, Brisbane, Perth, or anywhere in between.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-xs">
                    <Shield className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-bold text-slate-800 mb-2">Discreet & Simple</h4>
                    <p className="text-sm">Our packaging is discreet, our ordering process is simple, and we respect your privacy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Who We Serve</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose prose-lg max-w-none text-slate-600">
                  <p>While our own lives inspired this business, we’re here for all Australians looking for a boost:</p>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span>Busy professionals chasing deadlines and big goals.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span>Parents balancing careers and family life.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span>Students striving to stay on top of their study loads.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span>Shift workers managing irregular hours and demanding schedules.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col justify-center">
                  <p className="text-xl font-medium leading-relaxed">
                    &quot;If you’re someone who works hard, gives a lot, and still wants the energy to enjoy life, we get it — and we’ve got you covered.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Our Promise */}
             <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 mx-auto mb-6 text-red-500" />
                <h3 className="text-3xl font-bold mb-4">Our Promise to You</h3>
                <p className="text-lg text-slate-300">
                  At Modafinil Sydney, you’re not just buying a product — you’re joining a community of like-minded Aussies who value productivity, clarity, and balance.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-bold mb-2">Top-Quality</h4>
                  <p className="text-sm text-slate-400">Products at fair, competitive prices.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-bold mb-2">Fast Shipping</h4>
                  <p className="text-sm text-slate-400">Reliable delivery across Australia.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-bold mb-2">Real Support</h4>
                  <p className="text-sm text-slate-400">Friendly, honest service from real people.</p>
                </div>
              </div>
            </div>

            {/* Prices & Perks */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Great Prices & Extra Perks</h3>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  We know brand-name meds like Modalert or Modasmart 400 can cost a fortune in local pharmacies like Chemist Warehouse etc—sometimes up to 50 times more. By drop shipping direct from the manufacturer we&apos;re able to pass massive savings on to you. That&apos;s how we keep prices fair without cutting corners.
                </p>
                <p>
                  Plus, we love rewarding our loyal customers with extra discounts, so coming back pays off. If you&apos;re a repeat customer let us know and we&apos;ll throw in a few freebies for you.
                </p>
                <div className="mt-8 p-6 bg-yellow-50 border border-yellow-100 rounded-xl">
                  <p className="font-medium text-slate-800 mb-0">
                     So, whether you&apos;re a busy professional chasing deadlines, a parent balancing work and family, a student burning the midnight oil, or anyone who wants to perform at their best — we&apos;re here to help you make it happen. Don&apos;t settle for running on empty. Take control of your focus, energy, and productivity today with Australia&apos;s most trusted source for quality Modafinil.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}

