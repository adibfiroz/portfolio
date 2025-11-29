'use server'

import prisma from "../../lib/prisma";

export async function incrementViewCount(viewId) {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // 1. Log this specific view with a timestamp
    await prisma.lastDayView.create({
      data: { viewId }
    });

    await prisma.lastDayView.deleteMany({
      where: {
        viewId: viewId,
        createdAt: {
          lt: twentyFourHoursAgo, // 'less than' the cutoff time
        },
      },
    });

    // 2. Increment the total counter (kept for performance)
    const visit = await prisma.view.update({
      where: { id: viewId },
      data: { views: { increment: 1 } }
    });

    // 3. Calculate views in the last 24 hours
    const last24hCount = await prisma.lastDayView.count({
      where: {
        viewId: viewId,
        createdAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Now minus 24 hours
        }
      }
    });

    return { 
      total: visit.views, 
      last24h: last24hCount 
    };

  } catch (error) {
    console.error("Failed to track view:", error);
    return null;
  }
}