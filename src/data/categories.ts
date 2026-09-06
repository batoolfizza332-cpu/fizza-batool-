import type { Category } from '@/types/category';

// Development/Demo Categories - Replace with real HARVO ORGANIC categories
export const categories: Category[] = [
  {
    id: 'demo-cat-001',
    slug: 'essentials',
    name: 'Essentials',
    shortDescription: 'Everyday organic products for your wellness.',
    description:
      'Our core collection of premium organic essentials, carefully selected for quality and purity.',
    seoTitle: 'Organic Essentials - HARVO ORGANIC',
    seoDescription:
      'Discover our collection of premium organic essentials.',
    featured: true,
  },
  {
    id: 'demo-cat-002',
    slug: 'wellness',
    name: 'Wellness',
    shortDescription: 'Products designed for holistic wellbeing.',
    description:
      'A thoughtful selection of organic wellness products to support your health journey.',
    seoTitle: 'Wellness Products - HARVO ORGANIC',
    seoDescription: 'Explore our wellness-focused organic product collection.',
    featured: true,
  },
  {
    id: 'harvo-dehydrated-foods',
    slug: 'dehydrated-foods',
    name: 'Dehydrated Foods',
    shortDescription: 'Dehydrated food products from HARVO ORGANIC.',
    description: 'A collection of dehydrated HARVO ORGANIC products.',
    featured: true,
  },
];
