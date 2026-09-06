import type { Ingredient } from '@/types/ingredient';
import { IngredientCard } from './IngredientCard';

interface IngredientGridProps {
  ingredients: Ingredient[];
}

export function IngredientGrid({ ingredients }: IngredientGridProps) {
  if (!ingredients || ingredients.length === 0) {
    return (
      <div className="py-[var(--spacing-2xl)] text-center">
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          No ingredients available at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
      {ingredients.map((ingredient) => (
        <IngredientCard key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
}
