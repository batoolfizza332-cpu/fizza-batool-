import type { Article } from '@/types/article';
import { ArticleCard } from './ArticleCard';

interface ArticleGridProps {
  articles: Article[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="py-[var(--spacing-2xl)] text-center">
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          No articles available at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
