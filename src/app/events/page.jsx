import Link from 'next/link'

import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'
import { EVENTS } from '@/constants/events'

export const metadata = {
  title: 'Events — Royce White for U.S. Senate',
  description:
    'Upcoming town halls, rallies, and roundtables with Royce White across Minnesota.',
}

const formatMonthDay = (label) => {
  const [month, day] = label.split(' · ')[0].split(' ')
  return { month, day }
}

const EventsPage = () => {
  const featured = EVENTS.find((e) => e.featured) ?? EVENTS[0]
  const rest = EVENTS.filter((e) => e.slug !== featured.slug)

  return (
    <PageShell>
      <PageHero
        eyebrow="/events — On the Trail"
        number="050"
        title={
          <>
            87 counties.{' '}
            <em className="not-italic italic text-liberty">One open door.</em>
          </>
        }
        lede="Royce takes the campaign to the people — not the other way around. Town halls, rallies, delegate trainings, and roundtables across Minnesota. Walk in. Shake hands. Ask the hard ones."
      >
        <div className="flex flex-wrap gap-4">
          <BrandButton variant="primary" href={featured.rsvp}>
            RSVP Next Event →
          </BrandButton>
          <BrandButton variant="ghost-light" href="/volunteer">
            Volunteer at an Event
          </BrandButton>
        </div>
      </PageHero>

      <section className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.05]"
          style={{ top: '60px', right: '40px', fontSize: '200px' }}
        >
          051
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-patriot">/051 — Upcoming</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                Where Royce{' '}
                <em className="not-italic italic text-patriot">shows up</em> next.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Featured event — 8/4 bento anchor */}
            <Link
              href={`/events/${featured.slug}`}
              className="col-span-12 lg:col-span-8 lg:row-span-2 group relative bg-navy-900 text-moonlight border border-navy-900 rounded-[4px] p-10 lg:p-14 overflow-hidden flex flex-col"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 brand-grid-overlay opacity-[0.05] pointer-events-none"
              />
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-[3px] h-16 bg-patriot"
              />
              <span
                aria-hidden="true"
                className="absolute top-6 right-6 w-[44px] h-[44px] border-t-2 border-r-2 border-liberty"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-6 left-6 w-[44px] h-[44px] border-b-2 border-l-2 border-patriot"
              />

              <div className="relative z-10 flex items-center gap-4 mb-8">
                <span className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-liberty">
                  Featured
                </span>
                <span className="h-[1px] flex-1 bg-white/10" />
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-stone-400">
                  {featured.tag}
                </span>
              </div>

              <div className="relative z-10 flex items-start gap-8">
                <div className="shrink-0">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-patriot mb-1">
                    {formatMonthDay(featured.dateLabel).month}
                  </p>
                  <p className="font-display font-black text-[80px] leading-none text-white tracking-[-0.04em]">
                    {formatMonthDay(featured.dateLabel).day}
                  </p>
                  <p className="font-accent text-[11px] font-medium tracking-[0.14em] uppercase text-stone-400 mt-2">
                    {featured.day}
                  </p>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-extrabold text-[30px] lg:text-[42px] leading-[1.1] text-white group-hover:text-liberty transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mt-3 font-accent text-[12px] font-semibold tracking-[0.18em] uppercase text-stone-200">
                    {featured.city} · {featured.venue}
                  </p>
                  <p className="mt-6 text-[16px] leading-[1.7] text-stone-200 font-light max-w-[58ch]">
                    {featured.lede}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-10 flex items-end gap-8 flex-wrap">
                <div>
                  <p className="font-accent text-[11px] font-semibold tracking-[0.18em] uppercase text-stone-400">
                    Doors
                  </p>
                  <p className="font-mono text-[15px] text-white mt-1">{featured.doors}</p>
                </div>
                <div>
                  <p className="font-accent text-[11px] font-semibold tracking-[0.18em] uppercase text-stone-400">
                    Program
                  </p>
                  <p className="font-mono text-[15px] text-white mt-1">
                    {featured.timeStart} – {featured.timeEnd}
                  </p>
                </div>
                <span className="ml-auto font-accent text-[12px] font-semibold tracking-[0.18em] uppercase text-liberty group-hover:text-white transition-colors">
                  RSVP & Details →
                </span>
              </div>
            </Link>

            {/* Remaining events — stacked cards */}
            {rest.map((e) => {
              const { month, day } = formatMonthDay(e.dateLabel)
              return (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="col-span-12 md:col-span-6 lg:col-span-4 group relative bg-white border border-stone-200 rounded-[4px] p-8 overflow-hidden flex flex-col transition-colors duration-300 hover:bg-navy-900 hover:border-navy-900"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-[3px] h-12 bg-patriot"
                  />
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-patriot mb-1">
                        {month}
                      </p>
                      <p className="font-display font-black text-[48px] leading-none text-navy-900 tracking-[-0.04em] group-hover:text-white transition-colors">
                        {day}
                      </p>
                    </div>
                    <span className="font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 group-hover:text-liberty transition-colors">
                      {e.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-[22px] leading-[1.2] text-navy-900 group-hover:text-white transition-colors">
                    {e.title}
                  </h3>
                  <p className="mt-2 font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-stone-600 group-hover:text-stone-200 transition-colors">
                    {e.city} · {e.day}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.65] text-ink/70 group-hover:text-stone-200 transition-colors">
                    {e.lede}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between gap-4 border-t border-stone-200 group-hover:border-white/10 transition-colors">
                    <span className="font-mono text-[12px] text-stone-600 group-hover:text-stone-200 transition-colors">
                      {e.timeStart} – {e.timeEnd}
                    </span>
                    <span className="font-accent text-[11px] font-semibold tracking-[0.18em] uppercase text-patriot group-hover:text-liberty transition-colors">
                      RSVP →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 text-moonlight py-20 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-8">
              <p className="brand-section-label text-gold mb-4">/052 — Host an Event</p>
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
              >
                Want Royce in your town?
              </h2>
              <p className="mt-4 text-[16px] leading-[1.8] text-stone-200 font-light max-w-xl">
                We book house parties, small venues, and county-level rallies every week. Pitch
                us your town and we&apos;ll see what&apos;s possible.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
              <BrandButton variant="primary" href="/contact">
                Request an Event →
              </BrandButton>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default EventsPage
