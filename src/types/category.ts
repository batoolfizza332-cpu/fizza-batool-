export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  seoTitle?: string;
  seoDescription?: string;
  featured?: boolean;
}
