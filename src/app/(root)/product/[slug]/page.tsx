import { notFound } from 'next/navigation';

import ProductImages from '@/components/product/product-images';
import ProductPrice from '@/components/product/product-price';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import { getProdouctBySlug } from '@/lib/actions/product.actions';

type ProductDetailsProps = {
  params: {
    slug: string;
  };
};

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { slug } = params;
  const product = await getProdouctBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-5'>
          {/* Images Column */}
          <div className='col-span-2'>
            <ProductImages images={product.images} />
          </div>
          {/* Details Column */}
          <div className='col-span-2 p-5'>
            <div className='flex flex-col gap-6'>
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className='h3-bold'>{product.name}</h1>

              <p>{product.numReviews} reviews</p>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <ProductPrice
                  value={Number(product.price)}
                  className='w-24 rounded-full bg-green-100 px-5 py-2 text-green-700'
                />
              </div>
            </div>
            <div className='mt-10'>
              <p className='font-semibold'>Description</p>
              <p>{product.description}</p>
            </div>
          </div>

          {/* Action Column */}
          <div>
            <Card>
              <CardContent className='p-4'>
                <div className='mb-2 flex justify-between'>
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className='mb-2 flex justify-between'>
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant='outline'>In Stock</Badge>
                  ) : (
                    <Badge variant='destructive'>Out Of Stock</Badge>
                  )}
                </div>
                {product.stock > 0 && <div className='flex-center'></div>}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className='mt-10'>
        <h2 className='h2-bold mb-5'>Customer Reviews</h2>
      </section>
    </>
  );
};

export default ProductDetails;
