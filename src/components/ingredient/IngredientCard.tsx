import Image from 'next/image';
import Link from 'next/link';
import type { Ingredient } from '@/types/ingredient';

interface IngredientCardProps {
  ingredient: Ingredient;
}

export function IngredientCard({ ingredient }: IngredientCardProps) {
  return (
    <article className="group flex flex-col h-full">
      <Link
        href={`/ingredients/${ingredient.slug}`}
        className="flex flex-col flex-1"
      >
        {/* Image Container */}
        <div className="relative mb-[var(--spacing-md)] overflow-hidden rounded-[var(--radius)] aspect-square bg-[hsl(var(--muted-background))]">
          {ingredient.image?.src && (
            <Image
              src={ingredient.image.src}
              alt={ingredient.image.alt || ingredient.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-opacity group-hover:opacity-90"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Name */}
          <h3 className="mb-[var(--spacing-sm)] text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
            {ingredient.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 flex-1">
            {ingredient.shortDescription}
          </p>
        </div>
      </Link>

      {/* View Label (decorative; card is already a single link above) */}
      <div className="mt-[var(--spacing-md)] pt-[var(--spacing-md)] border-t border-[hsl(var(--border))]">
        <span
          aria-hidden="true"
          className="inline-block text-sm font-medium text-[hsl(var(--primary))] group-hover:text-[hsl(var(--primary-hover))] transition-colors"
        >
          Learn More →
        </span>
      </div>
    </article>
  );
}
