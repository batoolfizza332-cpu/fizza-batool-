import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container, Button } from '@/components/ui';
import { JsonLd, BreadcrumbJsonLd } from '@/components/seo';
import { getProductBySlug, getAllProducts } from '@/lib/products';
import { siteConfig } from '@/lib/site-config';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product not found',
      robots: { index: false },
    };
  }

  const title = product.seoTitle || product.name;
  const description = product.seoDescription || product.shortDescription;
  const canonicalPath = `/products/${product.slug}`;

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
      images: product.featuredImage ? [product.featuredImage.src] : [],
    },
    ...(product.featuredImage?.src && {
      twitter: { card: 'summary_large_image' as const },
    }),
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Build Product schema
  const productSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: siteConfig.siteName,
    },
    url: `${siteConfig.siteUrl}/products/${product.slug}`,
  };

  // Add image if available
  if (product.featuredImage?.src) {
    productSchema.image = product.featuredImage.src;
  }

  // Add category if available
  if (product.category) {
    productSchema.category = product.category;
  }

  // Add ID for identification (not SKU or GTIN)
  if (product.id) {
    productSchema.identifier = product.id;
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: product.name },
  ];

  return (
    <main>
      <BreadcrumbJsonLd items={breadcrumbItems} siteUrl={siteConfig.siteUrl} />
      <JsonLd data={productSchema} />
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
            href="/shop"
            className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]"
          >
            Shop
          </Link>
          <span className="text-[hsl(var(--muted-foreground))]">/</span>
          <span className="text-[hsl(var(--foreground))]">{product.name}</span>
        </nav>

        {/* Product Content */}
        <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)] grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-2xl)] md:gap-[var(--spacing-xl)]">
          {/* Image */}
          <div>
            {product.featuredImage?.src && (
              <div className="relative w-full aspect-square overflow-hidden rounded-[var(--radius)] bg-[hsl(var(--muted-background))]">
                <Image
                  src={product.featuredImage.src}
                  alt={product.featuredImage.alt || product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 620px"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-start">
            {/* Category & Badge */}
            <div className="flex items-center gap-[var(--spacing-md)] mb-[var(--spacing-md)]">
              {product.category && (
                <span className="eyebrow">{product.category}</span>
              )}
              {product.badge && (
                <span className="px-[var(--spacing-sm)] py-[calc(var(--spacing-xs)/2)] bg-[hsl(var(--primary))] text-white text-xs font-semibold rounded-[var(--radius)]">
                  {product.badge === 'featured'
                    ? 'Featured'
                    : product.badge === 'bestSeller'
                      ? 'Best Seller'
                      : 'New'}
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="mb-[var(--spacing-md)]">{product.name}</h1>

            {/* Size */}
            {product.size && (
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-[var(--spacing-md)]">
                Size: {product.size}
              </p>
            )}

            {/* Short Description */}
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--spacing-lg)]">
              {product.shortDescription}
            </p>

            {/* CTA */}
            <div className="mb-[var(--spacing-xl)]">
              <Button variant="primary">Shop This Product</Button>
            </div>

            {/* Divider */}
            <div className="border-t border-[hsl(var(--border))] py-[var(--spacing-lg)]" />

            {/* Full Description */}
            {product.description && (
              <div className="mb-[var(--spacing-lg)]">
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-[var(--spacing-lg)]">
                <h3 className="mb-[var(--spacing-md)]">Benefits</h3>
                <ul className="space-y-[var(--spacing-sm)]">
                  {product.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="text-[hsl(var(--muted-foreground))] flex items-start gap-[var(--spacing-sm)]"
                    >
                      <span className="text-[hsl(var(--primary))] font-bold mt-0.5">
                        •
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mb-[var(--spacing-lg)]">
                <h3 className="mb-[var(--spacing-md)]">Ingredients</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {product.ingredients.join(', ')}
                </p>
              </div>
            )}

            {/* Usage */}
            {product.usage && (
              <div>
                <h3 className="mb-[var(--spacing-md)]">How to Use</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {product.usage}
                </p>
              </div>
            )}
          </div>
        </section>
      </Container>
    </main>
  );
}
