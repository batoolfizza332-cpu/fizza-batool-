export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    src: string;
    alt: string;
  };
  category?: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  relatedProductSlugs?: string[];
  relatedIngredientSlugs?: string[];
}
