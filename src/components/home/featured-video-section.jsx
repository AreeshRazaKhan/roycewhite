const VIDEO = {
  id: '_or_VxlaAEk',
  title:
    'US Senate Candidate Says There Are No Party Lines Anymore | Royce White Interview with PBS Frontline',
  outlet: 'PBS Frontline',
  eyebrow: 'On Camera',
}

const FeaturedVideoSection = () => {
  const embedSrc = `https://www.youtube-nocookie.com/embed/${VIDEO.id}?rel=0&modestbranding=1`

  return (
    <section
      id="watch"
      className="relative bg-navy-900 text-moonlight py-14 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-patriot/[0.06]"
        style={{ top: '60px', left: '40px', fontSize: '200px' }}
      >
        003
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-10 lg:mb-14">
          <div className="col-span-12 lg:col-span-4">
            <p className="brand-section-label text-liberty">
              /003 — {VIDEO.eyebrow}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="font-display font-black leading-[1.05] tracking-[-0.02em] text-white"
              style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
            >
              There are no party lines{' '}
              <em className="not-italic italic text-liberty">anymore.</em>
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-stone-200 font-light max-w-2xl">
              Royce sits down with PBS Frontline to talk about what really divides the country —
              and why the fight in Washington isn&apos;t the one you&apos;ve been sold.
            </p>
          </div>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="hidden md:block absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-patriot"
          />
          <span
            aria-hidden="true"
            className="hidden md:block absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-liberty"
          />

          <div className="relative bg-navy-800 border border-white/5 rounded-[4px] overflow-hidden">
            <div className="relative w-full aspect-video">
              <iframe
                src={embedSrc}
                title={VIDEO.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-200">
              {VIDEO.outlet}
            </p>
            <p className="font-mono text-[12px] tracking-[0.05em] text-stone-200/80 max-w-2xl">
              {VIDEO.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideoSection
