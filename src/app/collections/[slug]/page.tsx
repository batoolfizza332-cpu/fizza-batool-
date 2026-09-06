import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui';
import { ProductGrid } from '@/components/product';
import { getCategoryBySlug, getAllCategories } from '@/lib/categories';
import { getProductsByCategory } from '@/lib/products';
import { siteConfig } from '@/lib/site-config';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Collection not found',
      robots: { index: false },
    };
  }

  const title =
    category.seoTitle || `${category.name} | ${siteConfig.siteName}`;
  const description = category.seoDescription || category.shortDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: category.image ? [category.image.src] : [],
    },
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.name);

  return (
    <main>
      <Container>
        {/* Collection Header */}
        <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
          <div className="mb-[var(--section-spacing)]">
            {/* Name */}
            <h1 className="mb-[var(--spacing-md)]">{category.name}</h1>

            {/* Short Description */}
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--spacing-md)] max-w-2xl">
              {category.shortDescription}
            </p>

            {/* Full Description if available */}
            {category.description && (
              <p className="text-[hsl(var(--muted-foreground))] max-w-2xl leading-relaxed">
                {category.description}
              </p>
            )}
          </div>

          {/* Product Grid */}
          <ProductGrid products={products} />
        </section>
      </Container>
    </main>
  );
}
