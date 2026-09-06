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
  const hasImage = Boolean(image?.src);
  const imageAlt = image?.alt || 'HARVO ORGANIC premium organic products';
  const objectPosition = image?.objectPosition || 'center';

  const content = (
    <div
      className={
        hasImage
          ? 'flex flex-col justify-center md:order-2'
          : 'flex flex-col justify-center max-w-2xl'
      }
    >
      {/* Eyebrow */}
      <div className="eyebrow mb-[var(--spacing-md)]">
        HARVO ORGANIC
      </div>

      {/* Main Heading */}
      <h1 className="mb-[var(--spacing-lg)] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem]">
        Organic essentials, thoughtfully chosen.
      </h1>

      {/* Supporting Text */}
      <p className="text-lg text-[hsl(var(--muted-foreground))] mb-[var(--spacing-xl)] leading-relaxed max-w-xl">
        Discover a carefully curated collection of premium organic products.
        Each item is selected for quality, purity, and purpose.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-[var(--spacing-md)]">
        <Button href="/shop" variant="primary">Shop Products</Button>
        <Button href="/about" variant="secondary">Our Story</Button>
      </div>
    </div>
  );

  return (
    <section className="w-full">
      <Container className="py-[var(--spacing-2xl)] md:py-[calc(var(--spacing-2xl)*2)]">
        {hasImage ? (
          <div className="grid grid-cols-1 gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)] md:grid-cols-2 md:items-center">
            {content}
            <div className="relative w-full aspect-square md:order-1 overflow-hidden rounded-[var(--radius)]">
              <Image
                src={image!.src!}
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
          </div>
        ) : (
          content
        )}
      </Container>
    </section>
  );
}
