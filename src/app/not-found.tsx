import Link from 'next/link';
import { Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <main>
      <Container className="flex items-center justify-center py-[var(--spacing-2xl)] md:py-[var(--section-spacing)] min-h-[60vh]">
        <div className="text-center max-w-md">
          {/* Eyebrow */}
          <div className="eyebrow mb-[var(--spacing-md)]">404</div>

          {/* Heading */}
          <h1 className="mb-[var(--spacing-lg)]">Page not found</h1>

          {/* Supporting Text */}
          <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--section-spacing)] leading-relaxed">
            The page you&apos;re looking for could not be found.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-[var(--spacing-md)] justify-center">
            <Link href="/">
              <Button variant="primary">Return Home</Button>
            </Link>
            <Link href="/shop">
              <Button variant="secondary">Shop Products</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
