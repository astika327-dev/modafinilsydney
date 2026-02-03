'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export type CreateReviewParams = {
  userId?: string;
  guestName?: string;
  location?: string;
  productId: string;
  rating: number;
  title: string;
  content: string;
};

export async function createReview(data: CreateReviewParams) {
  try {
    const { userId, guestName, location, productId, rating, title, content } = data;

    // Validate simple inputs
    if (!productId || !rating ) {
        return { success: false, error: 'Product and rating are required.' };
    }

    if (!userId && !guestName) {
        return { success: false, error: 'Name is required.' };
    }

    await prisma.review.create({
      data: {
        userId: userId || null,
        guestName: guestName || null,
        location: location || null,
        productId,
        rating,
        title,
        comment: content,
        isApproved: false, // Default to false, or true if user wants instant publishing. Stick to false for safety.
      },
    });

    revalidatePath('/reviews');
    // Also revalidate product page
    // revalidatePath(`/products/${productId}`); // Need slug to update path properly, but productId is ID. 
    // We can fetch slug if needed, but for now /reviews is the target.

    return { success: true };
  } catch (error: unknown) {
    console.error('Failed to create review:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit review';
    return { success: false, error: errorMessage };
  }
}

export async function getReviews() {
    try {
        const reviews = await prisma.review.findMany({
            where: { isApproved: true }, // Only show approved reviews
            include: {
                user: {
                    select: {
                        name: true,
                    }
                },
                product: {
                    select: {
                        name: true,
                        slug: true,
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        
        return reviews.map(review => ({
            id: review.id,
            title: review.title || '',
            content: review.comment || '',
            author: review.guestName || review.user?.name || 'Anonymous',
            location: review.location || 'Australia',
            rating: review.rating,
            product: review.product.name,
            verified: !!review.userId, // If linked to user, assume verified for now? Or just guest.
            createdAt: review.createdAt,
        }));

    } catch (error) {
        console.error('Failed to fetch reviews:', error);
        return [];

    }
}

export async function getProductsForReview() {
    try {
        const products = await prisma.product.findMany({
             where: { isActive: true },
             select: { id: true, name: true },
             orderBy: { name: 'asc' }
        });
        return products;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
}
