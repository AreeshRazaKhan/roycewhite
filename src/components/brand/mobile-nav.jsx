'use client'

import PropTypes from 'prop-types'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import BrandButton from '@/components/brand/brand-button'
import LogoLockup from '@/components/brand/logo-lockup'
import { cn } from '@/lib/utils'

const PRIMARY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/issues', label: 'Issues' },
  { href: '/events', label: 'Events' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/ask-royce', label: 'Ask Royce' },
  { href: '/news', label: 'News' },
  { href: '/endorsements', label: 'Endorsements' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
  { href: '/shop', label: 'Shop' },
]

const MobileNav = ({ className }) => {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  const panel = (
    <div
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Primary navigation"
      className={cn(
        'fixed inset-0 z-[70] flex flex-col bg-navy-900 text-moonlight',
        open ? 'visible' : 'invisible pointer-events-none',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute top-6 left-6 w-[48px] h-[48px] border-t-2 border-l-2 border-patriot"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-6 right-6 w-[48px] h-[48px] border-b-2 border-r-2 border-liberty"
      />

      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/5">
        <LogoLockup size="xs" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="inline-flex h-11 w-11 items-center justify-center text-moonlight hover:text-liberty transition-colors"
        >
          <span aria-hidden="true" className="relative block h-4 w-4">
            <span className="absolute left-0 top-[7px] h-[2px] w-full bg-current rotate-45" />
            <span className="absolute left-0 top-[7px] h-[2px] w-full bg-current -rotate-45" />
          </span>
        </button>
      </div>

      <nav
        aria-label="Mobile primary"
        className="relative z-10 flex-1 overflow-y-auto px-6 pt-10 pb-10"
      >
        <p className="brand-section-label text-gold mb-8">
          /000 — Menu
        </p>

        <ul className="flex flex-col">
          {PRIMARY_LINKS.map((item, idx) => (
            <li key={item.href} className="border-b border-white/5">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 py-5 text-white hover:text-liberty transition-colors"
              >
                <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-stone-400 w-10">
                  /{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-display font-black text-[32px] sm:text-[38px] leading-[1.0] tracking-[-0.02em]">
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto font-accent text-[12px] font-semibold tracking-[0.18em] uppercase text-stone-400 group-hover:text-liberty transition-colors"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4">
          <BrandButton
            variant="primary"
            href="/donate"
            onClick={() => setOpen(false)}
            className="justify-center"
          >
            Donate →
          </BrandButton>
          <BrandButton
            variant="ghost-light"
            href="/join"
            onClick={() => setOpen(false)}
            className="justify-center"
          >
            Join the Movement
          </BrandButton>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="font-accent text-[11px] font-medium tracking-[0.24em] uppercase text-stone-400">
            God · Family · Country
          </p>
          <a
            href="tel:2186863970"
            className="mt-3 block font-mono text-[13px] text-stone-200 hover:text-liberty"
          >
            218-686-3970
          </a>
        </div>
      </nav>
    </div>
  )

  return (
    <div className={cn('xl:hidden', className)}>
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center text-moonlight hover:text-liberty transition-colors"
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span aria-hidden="true" className="relative block h-4 w-6">
          <span
            className={cn(
              'absolute left-0 right-0 h-[2px] bg-current transition-transform duration-200',
              open ? 'top-[7px] rotate-45' : 'top-0',
            )}
          />
          <span
            className={cn(
              'absolute left-0 right-0 top-[7px] h-[2px] bg-current transition-opacity duration-150',
              open ? 'opacity-0' : 'opacity-100',
            )}
          />
          <span
            className={cn(
              'absolute left-0 right-0 h-[2px] bg-current transition-transform duration-200',
              open ? 'top-[7px] -rotate-45' : 'top-[14px]',
            )}
          />
        </span>
      </button>

      {mounted ? createPortal(panel, document.body) : null}
    </div>
  )
}

MobileNav.propTypes = {
  className: PropTypes.string,
}

MobileNav.defaultProps = {
  className: '',
}

export default MobileNav
