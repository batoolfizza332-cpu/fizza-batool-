import type { MetadataRoute } from 'next';
import { getAllProducts } from '@/lib/products';
import { getAllCategories } from '@/lib/categories';
import { getAllIngredients } from '@/lib/ingredients';
import { getAllArticles } from '@/lib/articles';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-standards`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ingredients`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/journal`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic product routes
  const products = getAllProducts();
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic collection routes
  const categories = getAllCategories();
  const collectionRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/collections/${category.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic ingredient routes
  const ingredients = getAllIngredients();
  const ingredientRoutes: MetadataRoute.Sitemap = ingredients.map((ingredient) => ({
    url: `${baseUrl}/ingredients/${ingredient.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic article routes
  const articles = getAllArticles();
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: article.updatedAt ? new Date(article.updatedAt) : article.publishedAt ? new Date(article.publishedAt) : undefined,
    changeFrequency: 'never' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...collectionRoutes,
    ...ingredientRoutes,
    ...articleRoutes,
  ];
}
