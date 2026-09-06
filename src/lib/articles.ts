import type { Article } from '@/types/article';
import { articles } from '@/data/articles';

export function getAllArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles
    .filter((article) => article.featured)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getArticlesByCategory(category: string): Article[] {
  return articles
    .filter((article) => article.category === category)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}
