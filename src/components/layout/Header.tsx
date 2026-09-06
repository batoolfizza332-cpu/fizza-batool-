'use client';

import Link from 'next/link';
import { Container } from '@/components/ui';
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
    <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]">
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

        {/* Mobile Menu Button Placeholder */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-[var(--radius)] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted-background))]"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
            />
          </svg>
        </button>
      </Container>
    </header>
  );
}
