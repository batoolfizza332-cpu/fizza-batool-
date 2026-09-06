import type { Category } from '@/types/category';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="py-[var(--spacing-2xl)] text-center">
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          No collections available at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
