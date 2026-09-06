import Link from 'next/link';
import { Container, Button } from '@/components/ui';

const title = 'Our Standards | HARVO ORGANIC';
const description =
  'Learn about the principles HARVO ORGANIC uses when presenting and selecting products.';
const canonicalPath = '/our-standards';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title,
    description,
    url: canonicalPath,
  },
};

export default function OurStandards() {
  return (
    <main>
      <Container className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
        {/* Eyebrow */}
        <div className="eyebrow mb-[var(--spacing-md)]">Our Standards</div>

        {/* Main Heading */}
        <h1 className="mb-[var(--spacing-lg)] max-w-3xl">
          Principles that guide our selections.
        </h1>

        {/* Intro */}
        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--section-spacing)] max-w-3xl leading-relaxed">
          When we present a product, we aim to be clear about what it is and what
          it offers. We prioritize transparency in sourcing and honest description
          of benefits. Our standards reflect a commitment to quality and integrity
          in every decision we make.
        </p>

        {/* Content Sections */}
        <div className="space-y-[var(--section-spacing)] mb-[var(--section-spacing)]">
          {/* Product Selection */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Product Selection
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
              We look for products that reflect genuine quality and careful attention
              to their craft. When we select something for our collection, we consider
              sourcing practices, ingredient quality, and the values of the producers
              behind each item. We prioritize items that align with thoughtful,
              intentional living—avoiding products that rely on excessive packaging
              or unclear sourcing.
            </p>
          </section>

          {/* Ingredient Transparency */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Ingredient Transparency
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
              We believe people deserve to know what&apos;s in the products they use.
              We present ingredient information where it&apos;s available and encourage
              questions. We do not make claims about ingredients beyond what
              producers themselves communicate. Where information is available, we
              share it clearly so you can make informed choices.
            </p>
          </section>

          {/* Quality Approach */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Quality Approach
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
              Quality matters more to us than volume. We work with producers who take
              care in every step of their process. Our approach means slower growth,
              more careful sourcing, and a smaller curated collection. We aim for
              consistency and reliability—products you can trust to be what they
              claim to be.
            </p>
          </section>

          {/* Continuous Improvement */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Continuous Improvement
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
              Our standards evolve as we learn more and as the market changes. We
              remain open to feedback from our community and committed to making
              better choices as new information becomes available. We view our work
              as ongoing—not a final destination but a continuous effort toward
              integrity and transparency.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div>
          <Link href="/shop">
            <Button variant="primary">Explore Products</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
