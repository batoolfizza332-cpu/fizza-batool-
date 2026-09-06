import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero, BrandStory } from '@/components/home';
import { Container, Button } from '@/components/ui';
import { ProductGrid } from '@/components/product';
import { getFeaturedProducts } from '@/lib/products';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      <Hero />

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="bg-[hsl(var(--muted-background))]">
          <Container className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
            {/* Header */}
            <div className="mb-[var(--section-spacing)]">
              {/* Eyebrow */}
              <div className="eyebrow mb-[var(--spacing-md)]">
                Featured Products
              </div>

              {/* Heading */}
              <h2 className="mb-[var(--spacing-md)]">Discover HARVO ORGANIC</h2>

              {/* Supporting Text */}
              <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mb-[var(--spacing-lg)]">
                Explore our carefully selected featured collection of premium
                organic essentials.
              </p>
            </div>

            {/* Product Grid */}
            <ProductGrid products={featuredProducts} />

            {/* View All Link */}
            <div className="mt-[var(--spacing-2xl)] text-center">
              <Link href="/shop">
                <Button variant="secondary">View All Products</Button>
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* Brand Story Section */}
      <Container>
        <BrandStory />
      </Container>
    </main>
  );
}
