import ProductList from '@/components/product/product-list';

const Home = async () => {
  return (
    <>
      Prostore Homepage
      <ProductList data={[]} title='Newest Arrivals' />
    </>
  );
};

export default Home;
