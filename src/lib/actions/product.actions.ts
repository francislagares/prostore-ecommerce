'use server';

import { PrismaClient } from '@prisma/client';

import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { convertToPlainObject } from '../utils';

export const getLatestProducts = async () => {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(products);
};
