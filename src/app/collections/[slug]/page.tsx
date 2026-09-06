import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui';
import { ProductGrid } from '@/components/product';
import { BreadcrumbJsonLd, JsonLd } from '@/components/seo';
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
  const canonicalPath = `/collections/${category.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.siteName,
      url: canonicalPath,
      title,
      description,
      images: category.image ? [category.image.src] : [],
    },
    ...(category.image?.src && {
      twitter: { card: 'summary_large_image' as const },
    }),
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

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: category.name },
  ];

  // Build CollectionPage schema
  const collectionPageSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description || category.shortDescription,
    url: `${siteConfig.siteUrl}/collections/${category.slug}`,
  };

  // Add ItemList if products exist
  if (products.length > 0) {
    collectionPageSchema.mainEntity = {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: `${siteConfig.siteUrl}/products/${product.slug}`,
        ...(product.featuredImage?.src && { image: product.featuredImage.src }),
      })),
    };
  }

  return (
    <main>
      <BreadcrumbJsonLd items={breadcrumbItems} siteUrl={siteConfig.siteUrl} />
      <JsonLd data={collectionPageSchema} />
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
