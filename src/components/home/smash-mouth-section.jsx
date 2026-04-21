const CLIPS = [
  {
    id: 'DoblRwp51QA',
    host: 'Royce White with Stephen A. Smith',
    title: 'An interview with former NBA player and senate candidate Royce White',
  },
  {
    id: 'Yjmxz-nmeig',
    host: 'Royce White with David Rutherford',
    title: 'The Right Is At War With Itself | Royce White',
  },
  {
    id: 'R1fEigMa5G4',
    host: 'Royce White on Jason Whitlock',
    title:
      'Steve Bannon: Ilhan Omar Can Be Beat | ‘Fearless’ Contributor Royce White Runs for Congress | Ep 151',
  },
]

const SmashMouthSection = () => {
  return (
    <section
      id="smash-mouth"
      className="relative bg-parchment py-14 lg:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-patriot/[0.05]"
        style={{ top: '60px', right: '40px', fontSize: '220px' }}
      >
        SMP
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-10 lg:mb-14 text-center">
          <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-patriot mb-5">
            Posted on Facebook
          </p>
          <h2
            className="font-display font-black leading-[1.0] tracking-[-0.02em] text-navy-900"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.75rem)' }}
          >
            Smash Mouth{' '}
            <em className="not-italic italic text-patriot">Populism.</em>
          </h2>
          <p className="mt-4 font-accent text-[13px] font-semibold tracking-[0.24em] uppercase text-ink/70">
            Fighting for Freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CLIPS.map((clip) => (
            <article
              key={clip.id}
              className="relative bg-white border border-stone-200 rounded-[4px] overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-10 h-[3px] bg-patriot z-10"
              />
              <div className="relative w-full aspect-video bg-navy-900">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${clip.id}?rel=0&modestbranding=1`}
                  title={clip.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="p-5 lg:p-6">
                <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-patriot">
                  {clip.host}
                </p>
                <p className="mt-2 font-display font-bold text-[16px] leading-[1.35] text-navy-900">
                  {clip.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SmashMouthSection
