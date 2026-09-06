import Link from 'next/link';
import { Container } from '@/components/ui';
import { MobileNav } from './MobileNav';
import { siteConfig } from '@/lib/site-config';

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Our Standards', href: '/our-standards' },
  { label: 'Ingredients', href: '/ingredients' },
  { label: 'Journal', href: '/journal' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))] relative">
      <Container className="flex items-center justify-between py-[var(--spacing-md)]">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
          >
            {siteConfig.siteName}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:block"
          aria-label="Main navigation"
        >
          <ul className="flex gap-[var(--spacing-lg)] items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav items={navItems} />
      </Container>
    </header>
  );
}
