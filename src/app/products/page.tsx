import { Metadata } from 'next';
import ProductsGrid from '@/components/products/ProductsGrid';
import ProductsHero from '@/components/products/ProductsHero';

export const metadata: Metadata = {
  title: 'Products | ModafinilSydney',
  description: 'Browse our selection of premium Modafinil and Armodafinil products. Modalert, Modvigil, Artvigil, and Waklert available with fast Australian delivery.',
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsGrid />
    </>
  );
}

