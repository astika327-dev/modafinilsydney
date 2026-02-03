'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { createReview } from '@/lib/actions/review';

type ProductOption = {
    id: string;
    name: string;
};

export default function WriteReviewForm({ products }: { products: ProductOption[] }) {
    const [rating, setRating] = useState(5);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setMessage('');
        
        try {
            const res = await createReview({
                guestName: formData.get('name') as string,
                location: formData.get('location') as string,
                productId: formData.get('productId') as string,
                rating: rating,
                title: formData.get('title') as string,
                content: formData.get('content') as string,
            });

            if (res.success) {
                setMessage('Review submitted successfully! Pending approval.');
                // Optional: reset form
            } else {
                setMessage('Error: ' + res.error);
            }
        } catch (error) {
            console.error(error);
            setMessage('An unexpected error occurred.');
        }
        setIsSubmitting(false);
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mt-12" id="write-review">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Write a Review</h3>
            <form action={handleSubmit} className="space-y-6">
                 {/* Rating */}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Rating</label>
                    <div className="flex gap-1" onMouseLeave={() => setHoveredRating(0)}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoveredRating(star)}
                                className="focus:outline-none transition-transform hover:scale-110"
                            >
                                <Star
                                    className={`w-8 h-8 ${
                                        star <= (hoveredRating || rating)
                                            ? 'fill-amber-400 text-amber-400'
                                            : 'text-slate-300'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                    <input type="hidden" name="rating" value={rating} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                        <input name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                    </div>
                    <div>
                         <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                        <input name="location" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Sydney" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Product</label>
                    <select name="productId" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                        <option value="">Select a product</option>
                        {products.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
                    <input name="title" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Review Title" />
                </div>

                <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Review</label>
                    <textarea name="content" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Share your experience..." />
                </div>

                <button disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2">
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
                {message && <p className={`text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
            </form>
        </div>
    );
}
