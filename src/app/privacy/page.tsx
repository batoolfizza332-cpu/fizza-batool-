import { Container } from '@/components/ui';

const title = 'Privacy Policy | HARVO ORGANIC';
const description = 'Privacy information for HARVO ORGANIC.';
const canonicalPath = '/privacy';

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

export default function Privacy() {
  return (
    <main>
      <Container className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)] max-w-3xl">
        {/* Eyebrow */}
        <div className="eyebrow mb-[var(--spacing-md)]">Legal</div>

        {/* Heading */}
        <h1 className="mb-[var(--spacing-lg)]">Privacy Policy</h1>

        {/* Placeholder Notice */}
        <div className="bg-[hsl(var(--muted-background))] rounded-[var(--radius)] p-[var(--spacing-lg)] mb-[var(--spacing-lg)]">
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
            <strong>This is a placeholder page.</strong> A complete privacy policy
            tailored to HARVO ORGANIC&apos;s operations must be created and reviewed
            by legal counsel before this site launches in production. This page will
            be replaced with the final privacy policy.
          </p>
        </div>

        {/* Additional Context */}
        <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-[var(--spacing-lg)]">
          Until a final privacy policy is in place, please understand that this
          website is currently in development. If you have questions about how
          personal information is handled, please contact us directly.
        </p>
      </Container>
    </main>
  );
}
