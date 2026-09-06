import Image from 'next/image';
import { Container, Button } from '@/components/ui';

interface HeroImageProps {
  src?: string;
  alt?: string;
  objectPosition?: string;
}

interface HeroProps {
  image?: HeroImageProps;
}

export function Hero({ image }: HeroProps = {}) {
  const imageSrc = image?.src || '/images/brand/hero/placeholder.jpg';
  const imageAlt = image?.alt || 'HARVO ORGANIC premium organic products';
  const objectPosition = image?.objectPosition || 'center';

  return (
    <section className="w-full">
      <Container className="py-[var(--spacing-2xl)] md:py-[calc(var(--spacing-2xl)*2)]">
        <div className="grid grid-cols-1 gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)] md:grid-cols-2 md:items-center">
          {/* Content */}
          <div className="flex flex-col justify-center md:order-2">
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
            <div className="flex flex-col sm:flex-row gap-[var(--spacing-md)] md:flex-col md:w-fit">
              <Button variant="primary">Shop Products</Button>
              <Button variant="secondary">Our Story</Button>
            </div>
          </div>

          {/* Image */}
          {image?.src && (
            <div className="relative w-full aspect-square md:order-1 overflow-hidden rounded-[var(--radius)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 620px"
                className="object-cover"
                style={{
                  objectPosition: objectPosition,
                }}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
