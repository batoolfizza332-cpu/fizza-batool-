import Link from 'next/link';
import { Container, Button } from '@/components/ui';

const title = 'About HARVO ORGANIC';
const description =
  'Learn more about HARVO ORGANIC and our approach to thoughtfully selected organic products.';
const canonicalPath = '/about';

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

export default function About() {
  return (
    <main>
      <Container className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
        {/* Eyebrow */}
        <div className="eyebrow mb-[var(--spacing-md)]">About HARVO ORGANIC</div>

        {/* Main Heading */}
        <h1 className="mb-[var(--spacing-lg)] max-w-3xl">
          Thoughtful curation for a more intentional life.
        </h1>

        {/* Intro */}
        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--section-spacing)] max-w-3xl leading-relaxed">
          HARVO ORGANIC was founded on a simple belief: the products we invite
          into our homes matter. We&apos;re not here to offer everything—we&apos;re here
          to offer the right things, selected with genuine care and integrity.
        </p>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-2xl)] md:gap-[var(--spacing-xl)] mb-[var(--section-spacing)]">
          {/* Our Approach */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Our Approach
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              We believe in thoughtful curation over endless selection. Each
              product in our collection is chosen with the same consideration
              we&apos;d apply to our own homes. We look for items that reflect
              genuine quality, honest sourcing, and transparent practices.
            </p>
          </section>

          {/* What We Value */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              What We Value
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              We value integrity, transparency, and authenticity in everything
              we do. Our relationships with producers are built on shared values
              and a commitment to quality. We believe organic excellence comes
              from careful attention to detail and respect for natural processes.
            </p>
          </section>
        </div>

        {/* Looking Ahead */}
        <section className="mb-[var(--section-spacing)]">
          <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
            Looking Ahead
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
            As we grow, our commitment remains unchanged. We&apos;ll continue to seek
            out exceptional products, maintain the highest standards, and support
            producers who share our vision of thoughtful organic excellence. Every
            addition to our collection will be guided by the same principles that
            define us: quality without compromise, transparency without exception,
            and respect for both people and the natural world.
          </p>
        </section>

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
