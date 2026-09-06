import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'harvo-banana-chips',
    slug: 'banana-chips',
    name: 'HARVO ORGANIC Banana Chips',
    shortDescription: 'Dehydrated banana slices from HARVO ORGANIC.',
    description: 'Dehydrated banana slices from HARVO ORGANIC.',
    category: 'Dehydrated Foods',
    featuredImage: {
      src: '/images/products/banana-chips.png',
      alt: 'HARVO ORGANIC Banana Chips pouch',
    },
    ingredients: ['Dehydrated banana slices'],
    featured: true,
  },
  {
    id: 'harvo-onion-flakes',
    slug: 'onion-flakes',
    name: 'HARVO ORGANIC Onion Flakes',
    shortDescription: 'Dehydrated onion flakes from HARVO ORGANIC.',
    description: 'Dehydrated onion flakes from HARVO ORGANIC.',
    category: 'Dehydrated Foods',
    featuredImage: {
      src: '/images/products/onion-flakes.png',
      alt: 'HARVO ORGANIC Onion Flakes pouch',
    },
    ingredients: ['Dehydrated onion flakes'],
    featured: true,
  },
  {
    id: 'harvo-ginger-powder',
    slug: 'ginger-powder',
    name: 'HARVO ORGANIC Ginger Powder',
    shortDescription: 'Dehydrated ginger powder from HARVO ORGANIC.',
    description: 'Dehydrated ginger powder from HARVO ORGANIC.',
    category: 'Dehydrated Foods',
    featuredImage: {
      src: '/images/products/ginger-powder.png',
      alt: 'HARVO ORGANIC Ginger Powder pouch',
    },
    ingredients: ['Dehydrated ginger powder'],
    featured: true,
  },
  {
    id: 'harvo-garlic-powder',
    slug: 'garlic-powder',
    name: 'HARVO ORGANIC Garlic Powder',
    shortDescription: 'Dehydrated garlic powder from HARVO ORGANIC.',
    description: 'Dehydrated garlic powder from HARVO ORGANIC.',
    category: 'Dehydrated Foods',
    featuredImage: {
      src: '/images/products/garlic-powder.png',
      alt: 'HARVO ORGANIC Garlic Powder pouch',
    },
    ingredients: ['Dehydrated garlic powder'],
    featured: true,
  },
  {
    id: 'harvo-tomato-flakes',
    slug: 'tomato-flakes',
    name: 'HARVO ORGANIC Tomato Flakes',
    shortDescription: 'Dehydrated tomato flakes from HARVO ORGANIC.',
    description: 'Dehydrated tomato flakes from HARVO ORGANIC.',
    category: 'Dehydrated Foods',
    featuredImage: {
      src: '/images/products/tomato-flakes.png',
      alt: 'HARVO ORGANIC Tomato Flakes pouch',
    },
    ingredients: ['Dehydrated tomato flakes'],
    featured: false,
  },
];
