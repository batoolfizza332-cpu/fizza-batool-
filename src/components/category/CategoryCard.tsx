import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/types/category';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group flex flex-col h-full">
      <Link
        href={`/collections/${category.slug}`}
        className="flex flex-col flex-1"
      >
        {/* Image Container */}
        <div className="relative mb-[var(--spacing-md)] overflow-hidden rounded-[var(--radius)] aspect-square bg-[hsl(var(--muted-background))]">
          {category.image?.src && (
            <Image
              src={category.image.src}
              alt={category.image.alt || category.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-opacity group-hover:opacity-90"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Name */}
          <h3 className="mb-[var(--spacing-sm)] text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
            {category.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 flex-1">
            {category.shortDescription}
          </p>
        </div>
      </Link>

      {/* View Label (decorative; card is already a single link above) */}
      <div className="mt-[var(--spacing-md)] pt-[var(--spacing-md)] border-t border-[hsl(var(--border))]">
        <span
          aria-hidden="true"
          className="inline-block text-sm font-medium text-[hsl(var(--primary))] group-hover:text-[hsl(var(--primary-hover))] transition-colors"
        >
          Explore Collection →
        </span>
      </div>
    </article>
  );
}
