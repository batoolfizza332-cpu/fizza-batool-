import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { getProductBySlug, getAllProducts } from '@/lib/products';

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

  return {
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.shortDescription,
    openGraph: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.shortDescription,
      images: product.featuredImage ? [product.featuredImage.src] : [],
    },
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

  return (
    <main>
      <Container>
        <section className="py-[var(--spacing-2xl)]">
          <h1>{product.name}</h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mt-[var(--spacing-md)]">
            {product.description}
          </p>
        </section>
      </Container>
    </main>
  );
}
