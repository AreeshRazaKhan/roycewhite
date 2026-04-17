import Link from 'next/link'
import { notFound } from 'next/navigation'

import BrandButton from '@/components/brand/brand-button'
import PageShell from '@/components/brand/page-shell'
import { EVENTS, getEventBySlug, getEventSlugs } from '@/constants/events'

export const generateStaticParams = async () => {
  return getEventSlugs().map((slug) => ({ slug }))
}

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) {
    return { title: 'Event not found — Royce White for U.S. Senate' }
  }
  return {
    title: `${event.title} · ${event.dateLabel} — Royce White for U.S. Senate`,
    description: event.lede,
  }
}

const formatMonthDay = (label) => {
  const [month, day] = label.split(' · ')[0].split(' ')
  return { month, day }
}

const EventDetailPage = async ({ params }) => {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  const { month, day } = formatMonthDay(event.dateLabel)
  const others = EVENTS.filter((e) => e.slug !== event.slug).slice(0, 3)
  const mapQuery = encodeURIComponent(event.address)

  return (
    <PageShell>
      <section className="relative bg-navy-900 text-moonlight overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />

        <span
          aria-hidden="true"
          className="absolute top-16 left-6 lg:top-20 lg:left-12 w-[56px] h-[56px] border-t-2 border-l-2 border-patriot"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-24 right-6 lg:bottom-28 lg:right-12 w-[56px] h-[56px] border-b-2 border-r-2 border-liberty"
        />

        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.06]"
          style={{ top: '90px', right: '80px', fontSize: '220px' }}
        >
          /{event.number}
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pt-20 pb-28 lg:pt-32 lg:pb-40">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400"
          >
            <Link href="/events" className="hover:text-liberty transition-colors">
              Events
            </Link>
            <span aria-hidden="true" className="mx-3">
              /
            </span>
            <span className="text-moonlight">{event.title}</span>
          </nav>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 relative z-10">
              <p className="font-accent text-[13px] font-semibold tracking-[0.2em] uppercase text-gold mb-8 brand-section-label">
                /event · {event.tag}
              </p>

              <h1
                className="font-display font-black text-white leading-[1.0] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.75rem)' }}
              >
                {event.title}
              </h1>

              <p className="mt-8 font-display italic font-bold text-[22px] lg:text-[24px] leading-[1.35] text-liberty max-w-2xl">
                {event.lede}
              </p>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
                <div>
                  <p className="font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
                    Date
                  </p>
                  <p className="font-display font-black text-[36px] leading-none text-white mt-2 tracking-[-0.02em]">
                    {day}
                  </p>
                  <p className="font-mono text-[12px] tracking-[0.12em] uppercase text-stone-200 mt-1">
                    {month} · {event.day}
                  </p>
                </div>
                <div>
                  <p className="font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
                    Doors
                  </p>
                  <p className="font-mono text-[18px] text-white mt-3">{event.doors}</p>
                </div>
                <div>
                  <p className="font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
                    Program
                  </p>
                  <p className="font-mono text-[18px] text-white mt-3">
                    {event.timeStart} – {event.timeEnd}
                  </p>
                </div>
                <div>
                  <p className="font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
                    Host
                  </p>
                  <p className="font-accent text-[14px] font-semibold uppercase tracking-[0.08em] text-white mt-3 leading-[1.3]">
                    {event.host}
                  </p>
                </div>
              </div>

              <div className="brand-rule-gradient mt-14 max-w-sm" />

              <div className="mt-10 flex flex-wrap gap-4">
                <BrandButton variant="primary" href="#rsvp">
                  RSVP →
                </BrandButton>
                <BrandButton variant="ghost-light" href="/volunteer">
                  Volunteer at this Event
                </BrandButton>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-16 bg-parchment brand-slice-bottom"
        />
      </section>

      <section className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-7">
              <p className="brand-section-label text-patriot mb-6">/event · What to expect</p>

              <div className="space-y-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-[60ch]">
                {event.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="mt-12">
                <p className="brand-section-label text-patriot mb-6">/event · Agenda</p>
                <ol className="relative border-l-2 border-stone-200 ml-2">
                  {event.agenda.map((item) => (
                    <li key={item.time} className="relative pl-8 pb-8 last:pb-0">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-patriot border-2 border-parchment"
                      />
                      <p className="font-mono text-[12px] tracking-[0.14em] uppercase text-patriot">
                        {item.time}
                      </p>
                      <p className="mt-1 font-display font-bold text-[18px] leading-[1.3] text-navy-900">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
              <div className="relative bg-white border border-stone-200 rounded-[4px] p-8 overflow-hidden">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-12 bg-patriot"
                />
                <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-patriot mb-2">
                  Venue
                </p>
                <p className="font-display font-extrabold text-[22px] leading-[1.2] text-navy-900">
                  {event.venue}
                </p>
                <p className="mt-3 text-[14px] leading-[1.6] text-ink/80 font-light">
                  {event.address}
                </p>

                <div className="mt-6 aspect-[4/3] rounded-[4px] overflow-hidden border border-stone-200">
                  <iframe
                    title={`Map — ${event.venue}`}
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <BrandButton
                    variant="ghost"
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    className="!px-5 !py-3"
                  >
                    Open in Maps →
                  </BrandButton>
                </div>
              </div>

              <div
                id="rsvp"
                className="relative bg-navy-900 text-moonlight rounded-[4px] p-8 overflow-hidden border-l-4 border-patriot"
              >
                <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-liberty mb-2">
                  RSVP
                </p>
                <p className="font-display font-extrabold text-[22px] leading-[1.2] text-white">
                  Claim your seat.
                </p>
                <p className="mt-3 text-[14px] leading-[1.65] text-stone-200 font-light">
                  Free to attend. RSVP helps us plan doors, seating, and overflow. We&apos;ll
                  email a reminder the day before.
                </p>

                <form
                  className="mt-6 space-y-3"
                  action="/contact"
                  method="get"
                >
                  <input type="hidden" name="topic" value="Event RSVP" />
                  <input type="hidden" name="event" value={event.slug} />
                  <label htmlFor={`rsvp-name-${event.slug}`} className="sr-only">
                    Full name
                  </label>
                  <input
                    id={`rsvp-name-${event.slug}`}
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full bg-navy-800 border border-white/10 rounded-[4px] px-4 py-3 font-body text-[15px] text-white placeholder:text-stone-400"
                  />
                  <label htmlFor={`rsvp-email-${event.slug}`} className="sr-only">
                    Email
                  </label>
                  <input
                    id={`rsvp-email-${event.slug}`}
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full bg-navy-800 border border-white/10 rounded-[4px] px-4 py-3 font-body text-[15px] text-white placeholder:text-stone-400"
                  />
                  <label htmlFor={`rsvp-count-${event.slug}`} className="sr-only">
                    How many attending
                  </label>
                  <select
                    id={`rsvp-count-${event.slug}`}
                    name="count"
                    defaultValue="1"
                    className="w-full bg-navy-800 border border-white/10 rounded-[4px] px-4 py-3 font-body text-[15px] text-white"
                  >
                    <option value="1">1 attending</option>
                    <option value="2">2 attending</option>
                    <option value="3">3 attending</option>
                    <option value="4+">4 or more</option>
                  </select>
                  <BrandButton variant="primary" type="submit" className="w-full justify-center">
                    Confirm RSVP →
                  </BrandButton>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 text-moonlight py-20 lg:py-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-gold">/more — Upcoming</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
              >
                More stops on the{' '}
                <em className="not-italic italic text-liberty">trail.</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {others.map((e) => {
              const md = formatMonthDay(e.dateLabel)
              return (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="col-span-12 md:col-span-4 group relative bg-navy-800 border border-white/5 rounded-[4px] p-8 overflow-hidden flex flex-col"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-[3px] h-12 bg-patriot"
                  />
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-patriot mb-1">
                        {md.month}
                      </p>
                      <p className="font-display font-black text-[44px] leading-none text-white tracking-[-0.04em]">
                        {md.day}
                      </p>
                    </div>
                    <span className="font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-liberty">
                      {e.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-[20px] leading-[1.2] text-white group-hover:text-liberty transition-colors">
                    {e.title}
                  </h3>
                  <p className="mt-2 font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-stone-400">
                    {e.city}
                  </p>
                  <span className="mt-auto pt-6 font-accent text-[11px] font-semibold tracking-[0.18em] uppercase text-liberty">
                    RSVP →
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <BrandButton variant="ghost-light" href="/events">
              All Events →
            </BrandButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default EventDetailPage
