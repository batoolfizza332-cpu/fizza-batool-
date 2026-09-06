import type { Ingredient } from '@/types/ingredient';

// Development data — to be replaced by CMS or API
export const ingredients: Ingredient[] = [
  {
    id: 'demo-001',
    slug: 'organic-blend',
    name: 'Organic Blend',
    shortDescription: 'A carefully selected blend of organic essentials.',
    description:
      'This ingredient represents a foundational blend used in our premium products. ' +
      'We prioritize transparency about sourcing and ingredient composition.',
    relatedProductSlugs: ['premium-organic-blend'],
    seoTitle: 'Organic Blend | HARVO ORGANIC',
    seoDescription:
      'Learn about the Organic Blend ingredient used in HARVO ORGANIC products.',
    featured: true,
  },
];
