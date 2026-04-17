import BrandButton from '@/components/brand/brand-button'
import PageShell from '@/components/brand/page-shell'

const EventNotFound = () => {
  return (
    <PageShell>
      <section className="relative bg-navy-900 text-moonlight py-32 lg:py-48 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.06]"
          style={{ top: '80px', right: '80px', fontSize: '220px' }}
        >
          404
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="brand-section-label text-gold mb-8">/error — Event not found</p>
            <h1
              className="font-display font-black text-white leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              That event{' '}
              <em className="not-italic italic text-liberty">isn&apos;t</em> on the calendar.
            </h1>
            <p className="mt-8 text-[17px] leading-[1.8] text-stone-200 font-light">
              It may have already happened, been rescheduled, or moved to a different venue.
              Head back to the events page for the latest schedule.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <BrandButton variant="primary" href="/events">
                All Events →
              </BrandButton>
              <BrandButton variant="ghost-light" href="/contact">
                Ask the Campaign
              </BrandButton>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default EventNotFound
