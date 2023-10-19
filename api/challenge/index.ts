// server/api/course/chapter/[chapterSlug]/lesson/[lessonSlug].get.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getChallenges = async (req, res, next) => {

  const challenge = await prisma.challenge.findMany({
    where: {
      belongsToId: req.user.id
    },
  });

  if (!challenge) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Lesson not found',
    });
  }

  return challenge;
}