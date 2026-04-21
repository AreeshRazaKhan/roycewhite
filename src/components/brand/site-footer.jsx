import Link from 'next/link'

import LogoLockup from '@/components/brand/logo-lockup'

const EXPLORE_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/ask-royce', label: 'Ask Royce' },
  { href: '/faqs', label: 'FAQs' },
]

const ACTION_LINKS = [
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { href: 'https://gettr.com/', label: 'Gettr' },
  { href: 'https://x.com/', label: 'X' },
  { href: 'https://facebook.com/', label: 'Facebook' },
  { href: 'https://tiktok.com/', label: 'TikTok' },
]

const SiteFooter = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-900 text-stone-200">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pt-20 pb-10">
        <span
          aria-hidden="true"
          className="brand-section-number text-white/[0.04]"
          style={{ top: '-20px', right: '40px', fontSize: '200px' }}
        >
          RW
        </span>

        <div className="grid grid-cols-12 gap-8 relative z-10">
          <div className="col-span-12 lg:col-span-4">
            <LogoLockup size="md" />
            <p className="mt-6 font-display italic font-bold text-[28px] leading-[1.15] text-white max-w-sm">
              The People are <span className="text-liberty">Coming.</span>
            </p>
            <div className="mt-8 space-y-1 text-[14px] leading-[1.7]">
              <p className="font-medium text-moonlight">Royce White For Senate</p>
              <p>P.O. Box 5473</p>
              <p>Hopkins, MN 55343</p>
              <a
                href="tel:2186863970"
                className="inline-flex items-center mt-2 py-2 min-h-11 hover:text-liberty transition-colors duration-500 ease-out"
              >
                218-686-3970
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-moonlight mb-5">
              Campaign
            </p>
            <ul className="text-[14px]">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center min-h-11 min-w-11 hover:text-liberty transition-colors duration-500 ease-out"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-moonlight mb-5">
              Take Action
            </p>
            <ul className="text-[14px]">
              {ACTION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center min-h-11 min-w-11 hover:text-liberty transition-colors duration-500 ease-out"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-moonlight mb-5">
              Social
            </p>
            <ul className="text-[14px]">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="inline-flex items-center min-h-11 min-w-11 hover:text-liberty transition-colors duration-500 ease-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t border-hairline/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[12px] text-stone-200 tracking-[0.05em]">
            © {year} Royce White for Senate. All Rights Reserved. Paid for by Royce White For Senate.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            <a
              href="https://op1776.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent text-[12px] font-medium tracking-[0.2em] uppercase text-stone-200 hover:text-liberty transition-colors duration-500 ease-out"
            >
              Powered by Operation 1776
            </a>
            <p className="font-accent text-[12px] font-medium tracking-[0.2em] uppercase text-stone-200">
              God · Family · Country
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
