import Link from 'next/link'

import BrandButton from '@/components/brand/brand-button'
import LogoLockup from '@/components/brand/logo-lockup'
import MobileNav from '@/components/brand/mobile-nav'

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/ask-royce', label: 'Ask Royce' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
]

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/5">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-[1400px] px-4 lg:px-12 py-4 flex items-center justify-between gap-4"
      >
        <LogoLockup size="xs" />

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-accent text-[12px] font-medium tracking-[0.14em] uppercase text-moonlight hover:text-liberty transition-colors duration-500 ease-out whitespace-nowrap"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <BrandButton
            variant="primary"
            href="/volunteer"
            className="hidden md:inline-flex !px-6 !py-3"
          >
            Join the Movement
          </BrandButton>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
