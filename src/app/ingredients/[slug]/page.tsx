import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { ProductCard } from '@/components/product';
import { getIngredientBySlug, getAllIngredients } from '@/lib/ingredients';
import { getProductBySlug } from '@/lib/products';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);

  if (!ingredient) {
    return {
      title: 'Ingredient not found',
      robots: { index: false },
    };
  }

  return {
    title: ingredient.seoTitle || `${ingredient.name} | HARVO ORGANIC`,
    description:
      ingredient.seoDescription || ingredient.shortDescription,
    openGraph: {
      title: ingredient.seoTitle || `${ingredient.name} | HARVO ORGANIC`,
      description:
        ingredient.seoDescription || ingredient.shortDescription,
      images: ingredient.image ? [ingredient.image.src] : [],
    },
  };
}

export async function generateStaticParams() {
  const ingredients = getAllIngredients();
  return ingredients.map((ingredient) => ({
    slug: ingredient.slug,
  }));
}

export default async function IngredientPage({ params }: Props) {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);

  if (!ingredient) {
    notFound();
  }

  // Load related products
  const relatedProducts = ingredient.relatedProductSlugs
    ? ingredient.relatedProductSlugs
        .map((productSlug) => getProductBySlug(productSlug))
        .filter((product) => product !== undefined)
    : [];

  return (
    <main>
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
            href="/ingredients"
            className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]"
          >
            Ingredients
          </Link>
          <span className="text-[hsl(var(--muted-foreground))]">/</span>
          <span className="text-[hsl(var(--foreground))]">{ingredient.name}</span>
        </nav>

        {/* Ingredient Content */}
        <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)] grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-2xl)] md:gap-[var(--spacing-xl)]">
          {/* Image */}
          <div>
            {ingredient.image?.src && (
              <div className="relative w-full aspect-square overflow-hidden rounded-[var(--radius)] bg-[hsl(var(--muted-background))]">
                <Image
                  src={ingredient.image.src}
                  alt={ingredient.image.alt || ingredient.name}
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
            {/* Name */}
            <h1 className="mb-[var(--spacing-md)]">{ingredient.name}</h1>

            {/* Short Description */}
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--spacing-lg)]">
              {ingredient.shortDescription}
            </p>

            {/* Full Description */}
            {ingredient.description && (
              <div className="mb-[var(--spacing-lg)]">
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)] border-t border-[hsl(var(--border))]">
            <h2 className="mb-[var(--spacing-lg)]">
              Products with {ingredient.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
