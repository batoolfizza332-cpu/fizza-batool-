import { Container } from '@/components/ui';
import { ArticleGrid } from '@/components/article';
import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: 'Journal | HARVO ORGANIC',
  description:
    'Explore articles, product guidance and ingredient information from HARVO ORGANIC.',
  alternates: {
    canonical: '/journal',
  },
};

export default function Journal() {
  const articles = getAllArticles();

  return (
    <main>
      <Container className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
        {/* Eyebrow */}
        <div className="eyebrow mb-[var(--spacing-md)]">Journal</div>

        {/* Main Heading */}
        <h1 className="mb-[var(--spacing-lg)] max-w-3xl">
          HARVO ORGANIC Journal
        </h1>

        {/* Intro */}
        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--section-spacing)] max-w-3xl leading-relaxed">
          Articles and guidance on organic products, ingredients, and thoughtful
          living. Learn more about what we offer and how to use our products
          intentionally.
        </p>

        {/* Articles Grid */}
        <ArticleGrid articles={articles} />
      </Container>
    </main>
  );
}
