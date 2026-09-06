import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { ProductGrid } from '@/components/product';
import { getAllProducts } from '@/lib/products';
import { siteConfig } from '@/lib/site-config';

const title = `Shop | ${siteConfig.siteName}`;
const description = 'Explore products from HARVO ORGANIC.';
const canonicalPath = '/shop';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title,
    description,
    url: canonicalPath,
  },
};

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <main>
      <Container>
        <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
          {/* Header */}
          <div className="mb-[var(--section-spacing)]">
            <h1 className="mb-[var(--spacing-md)]">Shop</h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
              Discover our carefully curated collection of premium organic
              products.
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid products={products} />
        </section>
      </Container>
    </main>
  );
}
