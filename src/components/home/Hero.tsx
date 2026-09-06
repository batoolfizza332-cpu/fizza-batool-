import { Container, Button } from '@/components/ui';

export function Hero() {
  return (
    <section className="py-[var(--spacing-2xl)] md:py-[calc(var(--spacing-2xl)*2)]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="eyebrow mb-[var(--spacing-md)]">
            HARVO ORGANIC
          </div>

          {/* Main Heading */}
          <h1 className="mb-[var(--spacing-lg)]">
            Organic essentials, thoughtfully chosen.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--spacing-xl)] leading-relaxed">
            Discover a carefully curated collection of premium organic products.
            Each item is selected for quality, purity, and purpose.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-[var(--spacing-md)] justify-center">
            <Button variant="primary">Shop Products</Button>
            <Button variant="secondary">Our Story</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
