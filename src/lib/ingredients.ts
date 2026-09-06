import type { Ingredient } from '@/types/ingredient';
import { ingredients } from '@/data/ingredients';

export function getAllIngredients(): Ingredient[] {
  return ingredients;
}

export function getIngredientBySlug(slug: string): Ingredient | undefined {
  return ingredients.find((ingredient) => ingredient.slug === slug);
}

export function getFeaturedIngredients(): Ingredient[] {
  return ingredients.filter((ingredient) => ingredient.featured);
}
