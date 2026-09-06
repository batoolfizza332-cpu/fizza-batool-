import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col h-full">
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-col flex-1"
      >
        {/* Image Container */}
        <div className="relative mb-[var(--spacing-md)] overflow-hidden rounded-[var(--radius)] aspect-square bg-[hsl(var(--muted-background))]">
          {product.featuredImage?.src && (
            <Image
              src={product.featuredImage.src}
              alt={product.featuredImage.alt || product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-opacity group-hover:opacity-90"
            />
          )}

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-[var(--spacing-sm)] right-[var(--spacing-sm)] px-[var(--spacing-sm)] py-[calc(var(--spacing-xs)/2)] bg-[hsl(var(--primary))] text-white text-xs font-semibold rounded-[var(--radius)]">
              {product.badge === 'featured'
                ? 'Featured'
                : product.badge === 'bestSeller'
                  ? 'Best Seller'
                  : 'New'}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Category */}
          {product.category && (
            <p className="eyebrow mb-[var(--spacing-xs)]">
              {product.category}
            </p>
          )}

          {/* Name */}
          <h3 className="mb-[var(--spacing-xs)] text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
            {product.name}
          </h3>

          {/* Size */}
          {product.size && (
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-[var(--spacing-sm)]">
              {product.size}
            </p>
          )}

          {/* Description */}
          <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 flex-1">
            {product.shortDescription}
          </p>
        </div>
      </Link>

      {/* View Product Link */}
      <div className="mt-[var(--spacing-md)] pt-[var(--spacing-md)] border-t border-[hsl(var(--border))]">
        <Link
          href={`/products/${product.slug}`}
          className="inline-block text-sm font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))] transition-colors"
        >
          View Product →
        </Link>
      </div>
    </article>
  );
}
