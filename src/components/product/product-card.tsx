import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Product } from '@/types';

import ProductPrice from './product-price';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='items-center p-0'>
        <Link href={`/product/${product.slug}`} />
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          priority={true}
        />
      </CardHeader>
      <CardContent className='grid gap-4 p-4'>
        <div className='text-xs'>
          <Link href={`/product/${product.slug}`}>
            <h2 className='text-sm font-medium'>{product.name}</h2>
          </Link>
          <div className='flex-between gap-4'>
            <p>{product.rating} Stars</p>
            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)} />
            ) : (
              <p className='text-destructive'>Out Of Stock</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
