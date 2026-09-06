import Link from 'next/link';
import { Container } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

const navigationLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Our Standards', href: '/our-standards' },
  { label: 'Ingredients', href: '/ingredients' },
  { label: 'Journal', href: '/journal' },
];

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))] mt-[var(--section-spacing)]">
      <Container className="py-[var(--spacing-2xl)] md:py-[var(--section-spacing)]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-2xl)] md:gap-[var(--spacing-xl)] mb-[var(--section-spacing)]">
          {/* Brand Section */}
          <div>
            <h2 className="text-lg font-semibold mb-[var(--spacing-md)] text-[hsl(var(--foreground))]">
              {siteConfig.siteName}
            </h2>
            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed max-w-sm">
              Thoughtfully selected organic products for intentional living.
            </p>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-col"
          >
            <h3 className="text-sm font-semibold mb-[var(--spacing-md)] text-[hsl(var(--foreground))]">
              Browse
            </h3>
            <ul className="space-y-[var(--spacing-sm)]">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav
            aria-label="Legal navigation"
            className="flex flex-col"
          >
            <h3 className="text-sm font-semibold mb-[var(--spacing-md)] text-[hsl(var(--foreground))]">
              Legal
            </h3>
            <ul className="space-y-[var(--spacing-sm)]">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-[hsl(var(--border))] pt-[var(--spacing-lg)]" />

        {/* Copyright */}
        <p className="text-xs text-[hsl(var(--muted-foreground))] text-center">
          © {currentYear} {siteConfig.siteName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
