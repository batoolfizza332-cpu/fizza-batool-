import type { Product } from '@/types/product';

// Development/Demo Products - Replace with real HARVO ORGANIC products
export const products: Product[] = [
  {
    id: 'demo-001',
    slug: 'premium-organic-blend',
    name: 'Premium Organic Blend',
    shortDescription:
      'Carefully curated organic essentials for everyday wellness.',
    description:
      'A thoughtfully selected collection of premium organic ingredients. Each component is chosen for purity and quality.',
    category: 'Essentials',
    featuredImage: {
      src: '/images/products/premium-blend.jpg',
      alt: 'Premium Organic Blend packaging',
    },
    size: '500g',
    badge: 'featured',
    seoTitle: 'Premium Organic Blend - HARVO ORGANIC',
    seoDescription:
      'Discover our Premium Organic Blend, carefully curated for everyday wellness.',
    keywords: ['organic', 'wellness', 'essentials'],
    benefits: ['Pure ingredients', 'Sustainably sourced', 'Premium quality'],
    ingredients: [
      'Organic ingredient 1',
      'Organic ingredient 2',
      'Organic ingredient 3',
    ],
    usage: 'Mix with water or add to your favorite recipes.',
    relatedProductSlugs: [],
  },
];

