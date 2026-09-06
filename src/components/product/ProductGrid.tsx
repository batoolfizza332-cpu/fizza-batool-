import type { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="py-[var(--spacing-2xl)] text-center">
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          No products available at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
