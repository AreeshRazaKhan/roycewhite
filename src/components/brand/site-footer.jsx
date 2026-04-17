import Link from 'next/link'

import LogoLockup from '@/components/brand/logo-lockup'

const EXPLORE_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/issues', label: 'Issues' },
  { href: '/news', label: 'News' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/endorsements', label: 'Endorsements' },
  { href: '/faqs', label: 'FAQs' },
]

const ACTION_LINKS = [
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/donate', label: 'Donate' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL_LINKS = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/mobile-email-policy', label: 'Mobile & Email Policy' },
  { href: '/ada', label: 'ADA' },
  { href: '/privacy', label: 'Privacy Policy' },
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
    <footer className="bg-navy-900 text-stone-400">
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
              <a href="tel:2186863970" className="block mt-2 hover:text-liberty transition-colors">
                218-686-3970
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-moonlight mb-5">
              Campaign
            </p>
            <ul className="space-y-3 text-[14px]">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-liberty transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-moonlight mb-5">
              Take Action
            </p>
            <ul className="space-y-3 text-[14px]">
              {ACTION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-liberty transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-moonlight mb-5">
              Social
            </p>
            <ul className="space-y-3 text-[14px]">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-liberty transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-8 lg:col-span-2">
            <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-moonlight mb-5">
              Legal
            </p>
            <ul className="space-y-3 text-[14px]">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-liberty transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-hairline/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[12px] text-stone-400 tracking-[0.05em]">
            © {year} Royce White for Senate. All Rights Reserved. Paid for by Royce White For Senate.
          </p>
          <p className="font-accent text-[11px] font-medium tracking-[0.2em] uppercase text-stone-400">
            God · Family · Country
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
