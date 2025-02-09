'use server';

import { prisma } from '@/db/prisma';

import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { convertToPlainObject } from '../utils';

export const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(products);
};

export const getProdouctBySlug = async (slug: string) => {
  return await prisma.product.findFirst({
    where: {
      slug,
    },
  });
};
