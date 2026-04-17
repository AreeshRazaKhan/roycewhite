import BrandButton from '@/components/brand/brand-button'

const CtaSection = () => {
  return (
    <section className="relative bg-navy-900 text-moonlight py-28 lg:py-36 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
      />

      <span
        aria-hidden="true"
        className="absolute top-12 left-12 w-[60px] h-[60px] border-t-2 border-l-2 border-patriot"
      />
      <span
        aria-hidden="true"
        className="absolute top-[88px] right-[88px] w-[6px] h-[6px] rounded-full bg-patriot"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-12 right-12 w-[60px] h-[60px] border-b-2 border-r-2 border-liberty"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[88px] left-[88px] w-[6px] h-[6px] rounded-full bg-liberty"
      />

      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-patriot/[0.06]"
        style={{ top: '40px', right: '50%', transform: 'translateX(50%)', fontSize: '260px' }}
      >
        008
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
        <div className="brand-rule-gradient mx-auto mb-10" />

        <p className="brand-section-label text-gold justify-center mb-8">
          /008 — Stand With Royce
        </p>

        <h2
          className="font-display font-black leading-[1.0] tracking-[-0.02em] text-white max-w-4xl mx-auto"
          style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)' }}
        >
          The People
          <br />
          Are <em className="not-italic italic text-patriot">Coming.</em>
        </h2>

        <p className="mt-8 max-w-2xl mx-auto text-[18px] leading-[1.8] text-stone-200 font-light">
          This seat belongs to Minnesota — not to the donor class, not to the swamp, not to Tina
          Smith's machine. Help us take it back, one door, one dollar, one neighbor at a time.
        </p>

        <div className="mt-14 flex flex-wrap gap-4 justify-center">
          <BrandButton variant="primary" href="/join">
            Join the Movement →
          </BrandButton>
          <BrandButton variant="gold" href="/donate">
            Donate Now
          </BrandButton>
        </div>

        <div className="mt-16 inline-flex items-center gap-6 border-t border-hairline/50 pt-6">
          <span className="font-accent text-[11px] font-medium tracking-[0.24em] uppercase text-stone-400">
            God
          </span>
          <span className="w-1 h-1 rounded-full bg-patriot" />
          <span className="font-accent text-[11px] font-medium tracking-[0.24em] uppercase text-stone-400">
            Family
          </span>
          <span className="w-1 h-1 rounded-full bg-liberty" />
          <span className="font-accent text-[11px] font-medium tracking-[0.24em] uppercase text-stone-400">
            Country
          </span>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
