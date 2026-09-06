import type { Product } from '@/types/product';
import { products } from '@/data/products';

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured === true);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getCategories(): string[] {
  const categories = new Set(products.map((product) => product.category));
  return Array.from(categories);
}
