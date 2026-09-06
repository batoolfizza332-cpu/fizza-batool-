import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const publishedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group flex flex-col h-full">
      <Link
        href={`/journal/${article.slug}`}
        className="flex flex-col flex-1"
      >
        {/* Image Container */}
        <div className="relative mb-[var(--spacing-md)] overflow-hidden rounded-[var(--radius)] aspect-video bg-[hsl(var(--muted-background))]">
          {article.featuredImage?.src && (
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt || article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-opacity group-hover:opacity-90"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* Category & Date */}
          <div className="flex items-center gap-[var(--spacing-sm)] mb-[var(--spacing-xs)] flex-wrap">
            {article.category && (
              <span className="eyebrow">{article.category}</span>
            )}
            <span className="text-xs text-[hsl(var(--muted-foreground))]">
              {publishedDate}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-[var(--spacing-xs)] text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2 flex-1">
            {article.excerpt}
          </p>
        </div>
      </Link>

      {/* Read Link */}
      <div className="mt-[var(--spacing-md)] pt-[var(--spacing-md)] border-t border-[hsl(var(--border))]">
        <Link
          href={`/journal/${article.slug}`}
          className="inline-block text-sm font-medium text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))] transition-colors"
        >
          Read Article →
        </Link>
      </div>
    </article>
  );
}
