'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function syncUser(userId: string, email: string, name: string) {
  try {
    const role = email === 'baliwebdevelover@gmail.com' ? 'ADMIN' : 'CUSTOMER';

    // Check if user exists with same email but different ID
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser && existingUser.id !== userId) {
      // User exists with email, but ID doesn't match the new Auth ID.
      // We need to update the DB record to use the new Auth ID.
      // This effectively "links" the old data to the new login.
      try {
        await prisma.user.update({
          where: { email },
          data: { 
            id: userId,
            name: name || existingUser.name,
            role: email === 'baliwebdevelover@gmail.com' ? 'ADMIN' : existingUser.role
          }
        });
        return { success: true };
      } catch (mergeError: unknown) {
        console.error('Failed to merge user account:', mergeError);
        const errorMsg = mergeError instanceof Error ? mergeError.message : 'Failed to merge account';
        return { success: false, error: `Account exists but failed to link: ${errorMsg}` };
      }
    }

    await prisma.user.upsert({
      where: { id: userId },
      update: { 
        email, 
        name,
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
