import { Button } from '@/components/ui';

export function BrandStory() {
  return (
    <section className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-2xl)] md:gap-[var(--spacing-xl)] items-center max-w-4xl">
        {/* Content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="eyebrow mb-[var(--spacing-md)]">Our Story</div>

          {/* Heading */}
          <h2 className="mb-[var(--spacing-lg)]">
            Rooted in a more thoughtful way of living.
          </h2>

          {/* First Paragraph */}
          <p className="text-[hsl(var(--muted-foreground))] mb-[var(--spacing-md)] leading-relaxed">
            HARVO ORGANIC is built on a simple principle: every product matters.
            We believe in thoughtful curation over convenience, and in products
            that reflect genuine care in their selection.
          </p>

          {/* Second Paragraph */}
          <p className="text-[hsl(var(--muted-foreground))] mb-[var(--spacing-lg)] leading-relaxed">
            Our approach is rooted in quality and integrity. We approach each
            product with the same consideration we would apply to our own homes
            and lives.
          </p>

          {/* CTA */}
          <div>
            <Button href="/about" variant="primary">Learn About HARVO</Button>
          </div>
        </div>

        {/* Placeholder for future image */}
        <div className="hidden md:block bg-[hsl(var(--muted-background))] rounded-[var(--radius)] aspect-square" />
      </div>
    </section>
  );
}
