import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { ProductCard } from '@/components/product';
import { IngredientCard } from '@/components/ingredient';
import { BreadcrumbJsonLd, JsonLd } from '@/components/seo';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { getProductBySlug } from '@/lib/products';
import { getIngredientBySlug } from '@/lib/ingredients';
import { siteConfig } from '@/lib/site-config';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article not found',
      robots: { index: false },
    };
  }

  return {
    title: article.seoTitle || `${article.title} | HARVO ORGANIC`,
    description: article.seoDescription || article.excerpt,
    openGraph: {
      title: article.seoTitle || `${article.title} | HARVO ORGANIC`,
      description: article.seoDescription || article.excerpt,
      images: article.featuredImage ? [article.featuredImage.src] : [],
    },
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Load related products
  const relatedProducts = article.relatedProductSlugs
    ? article.relatedProductSlugs
        .map((productSlug) => getProductBySlug(productSlug))
        .filter((product) => product !== undefined)
    : [];

  // Load related ingredients
  const relatedIngredients = article.relatedIngredientSlugs
    ? article.relatedIngredientSlugs
        .map((ingredientSlug) => getIngredientBySlug(ingredientSlug))
        .filter((ingredient) => ingredient !== undefined)
    : [];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Journal', url: '/journal' },
    { name: article.title },
  ];

  // Build Article schema
  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/journal/${article.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  };

  // Add image if available
  if (article.featuredImage?.src) {
    articleSchema.image = article.featuredImage.src;
  }

  // Add datePublished if available
  if (article.publishedAt) {
    articleSchema.datePublished = article.publishedAt;
  }

  // Add dateModified if available
  if (article.updatedAt) {
    articleSchema.dateModified = article.updatedAt;
  }

  // Add author if available
  if (article.author) {
    articleSchema.author = {
      '@type': 'Person',
      name: article.author,
    };
  }

  return (
    <main>
      <BreadcrumbJsonLd items={breadcrumbItems} siteUrl={siteConfig.siteUrl} />
      <JsonLd data={articleSchema} />
      <Container>
        {/* Breadcrumbs */}
        <nav
          className="py-[var(--spacing-md)] flex items-center gap-[var(--spacing-sm)] text-sm"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]"
          >
            Home
          </Link>
          <span className="text-[hsl(var(--muted-foreground))]">/</span>
          <Link
            href="/journal"
            className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]"
          >
            Journal
          </Link>
          <span className="text-[hsl(var(--muted-foreground))]">/</span>
          <span className="text-[hsl(var(--foreground))]">{article.title}</span>
        </nav>

        {/* Article Header */}
        <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
          {/* Category & Date */}
          <div className="flex items-center gap-[var(--spacing-md)] mb-[var(--spacing-md)] flex-wrap">
            {article.category && (
              <span className="eyebrow">{article.category}</span>
            )}
            {article.publishedAt && (
              <time className="text-sm text-[hsl(var(--muted-foreground))]">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>

          {/* Title */}
          <h1 className="mb-[var(--spacing-lg)] max-w-3xl">{article.title}</h1>

          {/* Excerpt */}
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--spacing-lg)] max-w-3xl leading-relaxed">
            {article.excerpt}
          </p>

          {/* Updated Date */}
          {article.updatedAt && article.updatedAt !== article.publishedAt && (
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-[var(--spacing-lg)]">
              Updated{' '}
              {new Date(article.updatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </section>

        {/* Featured Image */}
        {article.featuredImage?.src && (
          <section className="mb-[var(--section-spacing)]">
            <div className="relative w-full aspect-video overflow-hidden rounded-[var(--radius)] bg-[hsl(var(--muted-background))]">
              <Image
                src={article.featuredImage.src}
                alt={article.featuredImage.alt || article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 90vw, 1200px"
                className="object-cover"
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="prose max-w-3xl mb-[var(--section-spacing)]">
          <div className="text-[hsl(var(--muted-foreground))] leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)] border-t border-[hsl(var(--border))]">
            <h2 className="mb-[var(--spacing-lg)]">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Related Ingredients Section */}
        {relatedIngredients.length > 0 && (
          <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)] border-t border-[hsl(var(--border))]">
            <h2 className="mb-[var(--spacing-lg)]">Ingredients Mentioned</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
              {relatedIngredients.map((ingredient) => (
                <IngredientCard key={ingredient.id} ingredient={ingredient} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
