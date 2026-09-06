import { siteConfig } from '@/lib/site-config';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1>{siteConfig.siteName}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Premium organic products.
        </p>
      </section>
    </main>
  );
}
