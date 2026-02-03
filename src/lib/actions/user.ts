'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserRole(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    return { success: true, role: user?.role };
  } catch (error) {
    console.error('Failed to fetch user role:', error);
    return { success: false, error: 'Failed to fetch user role' };
  }
}
