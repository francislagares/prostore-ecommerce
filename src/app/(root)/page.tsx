import ProductList from '@/components/product/product-list';

import { getLatestProducts } from '@/lib/actions/product.actions';

const Home = async () => {
  const latestProducts = await getLatestProducts();
  const formattedProducts = latestProducts.map(product => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));

  return (
    <>
      Prostore Homepage
      <ProductList data={formattedProducts} title='Newest Arrivals' />
    </>
  );
};

export default Home;
