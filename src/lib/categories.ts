import type { Category } from '@/types/category';
import { categories } from '@/data/categories';

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((category) => category.featured);
}

export function getCategoryNames(): string[] {
  return categories.map((category) => category.name);
}
