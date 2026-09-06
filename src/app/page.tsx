import { Container, Button } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

export default function Home() {
  return (
    <main>
      <Container>
        <section className="py-[var(--spacing-2xl)] text-center">
          <h1>{siteConfig.siteName}</h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mt-[var(--spacing-md)]">
            Premium organic products.
          </p>
          <div className="mt-[var(--spacing-xl)] flex gap-[var(--spacing-md)] justify-center">
            <Button variant="primary">Explore</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
