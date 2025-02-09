import Footer from '@/components/footer';
import Header from '@/components/shared/header';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='wrapper flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
