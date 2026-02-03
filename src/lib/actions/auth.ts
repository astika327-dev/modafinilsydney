'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function syncUser(userId: string, email: string, name: string) {
  try {
    const role = email === 'baliwebdevelover@gmail.com' ? 'ADMIN' : 'CUSTOMER';

    await prisma.user.upsert({
      where: { id: userId },
      update: { 
        email, 
        name,
        // Only update role if it's the specific admin email, otherwise keep existing role or default
        // Actually, let's enforce admin for this email always.
        role: email === 'baliwebdevelover@gmail.com' ? 'ADMIN' : undefined 
      },
      create: {
        id: userId,
        email,
        name,
        role,
      },
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to sync user:', error);
    return { success: false, error: 'Failed to sync user data' };
  }
}
