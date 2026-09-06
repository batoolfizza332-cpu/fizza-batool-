import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { IngredientGrid } from '@/components/ingredient';
import { getAllIngredients } from '@/lib/ingredients';

const title = 'Ingredients | HARVO ORGANIC';
const description =
  'Explore ingredient information and product transparency from HARVO ORGANIC.';
const canonicalPath = '/ingredients';

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

export default function Ingredients() {
  const ingredients = getAllIngredients();

  return (
    <main>
      <Container className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
        {/* Eyebrow */}
        <div className="eyebrow mb-[var(--spacing-md)]">Ingredients</div>

        {/* Main Heading */}
        <h1 className="mb-[var(--spacing-lg)] max-w-3xl">
          Transparency in what we offer.
        </h1>

        {/* Intro */}
        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--section-spacing)] max-w-3xl leading-relaxed">
          We believe you deserve to know what&apos;s in the products you use. We share
          ingredient information to help you make informed choices about what you
          bring into your home and your daily routine.
        </p>

        {/* Content Sections */}
        <div className="space-y-[var(--section-spacing)] mb-[var(--section-spacing)]">
          {/* Understanding Ingredients */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Understanding Ingredients
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
              Each product in our collection has a full ingredient list. We present
              ingredients as the producer lists them, ensuring you see exactly what
              you&apos;re getting. Understanding ingredients helps you make choices that
              align with your values and preferences.
            </p>
          </section>

          {/* Clear Product Information */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Clear Product Information
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
              Product pages on HARVO ORGANIC display ingredient lists, descriptions,
              and sourcing information where available. We aim to present this
              information clearly so you can understand what a product is and how it&apos;s
              made. If you have questions about specific ingredients, each product
              page includes producer contact information where available.
            </p>
          </section>

          {/* Ingredient Transparency */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Ingredient Transparency
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
              We do not make claims about ingredients beyond what producers
              communicate. We avoid marketing language that isn&apos;t supported by clear
              information. Our role is to present the facts so you can form your own
              understanding of what each product offers.
            </p>
          </section>

          {/* Explore by Product */}
          <section>
            <h2 className="text-[var(--text-lg)] font-bold mb-[var(--spacing-md)]">
              Explore by Product
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-3xl leading-relaxed">
              Each product in our shop has a dedicated page with full ingredient
              information, descriptions, benefits, and usage guidance as provided by
              the producer. Visit individual product pages to learn more about what
              interests you.
            </p>
          </section>
        </div>

        {/* Ingredients Section */}
        {ingredients.length > 0 && (
          <section className="border-t border-[hsl(var(--border))] pt-[var(--section-spacing)]">
            <h2 className="mb-[var(--spacing-lg)]">Explore Ingredients</h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--spacing-lg)] max-w-3xl leading-relaxed">
              Learn more about the key ingredients we feature in our products.
            </p>
            <IngredientGrid ingredients={ingredients} />
          </section>
        )}

        {/* CTA */}
        <div className="mt-[var(--section-spacing)]">
          <Link href="/shop">
            <Button variant="primary">Explore Products</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
