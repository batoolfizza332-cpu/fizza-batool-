export interface Ingredient {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  relatedProductSlugs?: string[];
  seoTitle?: string;
  seoDescription?: string;
  featured?: boolean;
}
