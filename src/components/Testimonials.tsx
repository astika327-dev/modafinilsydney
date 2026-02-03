'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Was impressed from initial email inquiry to received my product. Trust is key when ordering Modafinil online and Steve and his team made me at ease the whole time.",
    author: 'Sarah M.',
    location: 'Sydney, NSW',
    initials: 'SM',
  },
  {
    text: "Kept crashing at work and couldn't focus for long periods and Modalert tablets did the job – you can trust these guys – they are quick to respond and on top of their game.",
    author: 'James T.',
    location: 'Melbourne, VIC',
    initials: 'JT',
  },
  {
    text: "Looked around for ages but these guys at Modafinil Sydney are awesome. Seriously top service!!",
    author: 'Mike R.',
    location: 'Brisbane, QLD',
    initials: 'MR',
  },
  {
    text: "Finally found my favourite Modafinil site. Im a Perth resident & it was delivered quickly – Impressed with the fast communication. 5 stars :))",
    author: 'Chris L.',
    location: 'Perth, WA',
    initials: 'CL',
  },
  {
    text: "After trying a few sketchy overseas sites that either never delivered or sent questionable products, finding Modafinil-Australia has been an absolute relief. Fast customer support replies from Steve, and genuinely discreet packaging.",
    author: 'Mark S.',
    location: 'Melbourne, VIC',
    initials: 'MS',
  },
  {
    text: "Communication with Steve ✅ Service ✅ Price ✅ Quality ✅ Great job guys 👍👍",
    author: 'David K.',
    location: 'Gold Coast, QLD',
    initials: 'DK',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Trusted by thousands of Australians for cognitive enhancement
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{testimonial.author}</h4>
                        <p className="text-slate-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-200"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-200"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

