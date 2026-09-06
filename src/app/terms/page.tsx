import { Container } from '@/components/ui';

export const metadata = {
  title: 'Terms & Conditions | HARVO ORGANIC',
  description: 'Terms and conditions information for HARVO ORGANIC.',
};

export default function Terms() {
  return (
    <main>
      <Container className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)] max-w-3xl">
        {/* Eyebrow */}
        <div className="eyebrow mb-[var(--spacing-md)]">Legal</div>

        {/* Heading */}
        <h1 className="mb-[var(--spacing-lg)]">Terms & Conditions</h1>

        {/* Placeholder Notice */}
        <div className="bg-[hsl(var(--muted-background))] rounded-[var(--radius)] p-[var(--spacing-lg)] mb-[var(--spacing-lg)]">
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
            <strong>This is a placeholder page.</strong> Complete terms and
            conditions tailored to HARVO ORGANIC&apos;s business operations must be
            created and reviewed by legal counsel before this site launches in
            production. This page will be replaced with the final terms and
            conditions.
          </p>
        </div>

        {/* Additional Context */}
        <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-[var(--spacing-lg)]">
          Until final terms and conditions are in place, please understand that
          this website is currently in development. If you have questions about
          the terms governing your use of this site, please contact us directly.
        </p>
      </Container>
    </main>
  );
}
