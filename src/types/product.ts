export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  featuredImage: {
    src: string;
    alt: string;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
  size?: string;
  badge?: 'featured' | 'bestSeller' | 'new';
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  benefits?: string[];
  ingredients?: string[];
  ingredientSlugs?: string[];
  usage?: string;
  relatedProductSlugs?: string[];
}
