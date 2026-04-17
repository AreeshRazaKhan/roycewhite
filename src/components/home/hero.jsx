import BrandButton from '@/components/brand/brand-button'
import PlaceholderImage from '@/components/brand/placeholder-image'

const Hero = () => {
  return (
    <section className="relative bg-navy-900 text-moonlight overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-full lg:w-1/2 brand-grid-overlay opacity-[0.04] pointer-events-none"
      />

      <span
        aria-hidden="true"
        className="absolute top-16 left-6 lg:top-20 lg:left-12 w-[60px] h-[60px] border-t-2 border-l-2 border-patriot"
      />
      <span
        aria-hidden="true"
        className="absolute top-[92px] right-[24px] lg:top-[96px] lg:right-[76px] w-[6px] h-[6px] rounded-full bg-patriot"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-32 right-6 lg:bottom-36 lg:right-12 w-[60px] h-[60px] border-b-2 border-r-2 border-liberty"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[152px] left-[24px] lg:bottom-[156px] lg:left-[76px] w-[6px] h-[6px] rounded-full bg-liberty"
      />

      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-white/[0.04]"
        style={{ top: '90px', right: '90px', fontSize: '220px' }}
      >
        001
      </span>

      <div
        aria-hidden="true"
        className="absolute right-20 top-40 w-[440px] h-[440px] pointer-events-none hidden xl:block"
      >
        <span className="absolute top-6 right-0 w-[46px] h-[46px] rounded-full border border-navy-600 opacity-60" />
        <span className="absolute top-24 right-28 w-[22px] h-[22px] bg-patriot opacity-[0.08] rotate-45" />
        <span className="absolute top-52 right-10 w-[18px] h-[18px] border border-liberty opacity-40 rounded-full" />
        <span className="absolute top-60 right-44 font-mono text-liberty opacity-40 text-3xl leading-none">+</span>
        <span className="absolute top-80 right-24 w-[72px] h-[72px] rounded-full border border-white opacity-[0.06]" />
        <span className="absolute top-10 right-52 w-[10px] h-[10px] bg-liberty opacity-30 rotate-45" />
        <span className="absolute top-[340px] right-6 font-mono text-patriot opacity-30 text-2xl leading-none">+</span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-40 lg:pt-40 lg:pb-56">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 xl:col-span-7 relative z-10">
            <p className="font-accent text-[13px] font-semibold tracking-[0.2em] uppercase text-gold mb-8 brand-section-label">
              /001 — U.S. Senate · Minnesota · 2026
            </p>

            <p className="font-accent text-[15px] font-bold tracking-[0.18em] uppercase text-patriot mb-6">
              America First
            </p>

            <h1
              className="font-display font-black text-white leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.25rem)' }}
            >
              What's wrong with{' '}
              <em className="not-italic italic text-liberty">taking care</em>
              <br className="hidden md:block" /> of Americans <em className="not-italic italic text-liberty">first?</em>
            </h1>

            <p className="mt-10 max-w-xl text-[17px] leading-[1.8] text-stone-200 font-light">
              Regardless of our individual backgrounds or beliefs, our nation is being held
              hostage by corrupt individuals who aim to manipulate the truth, exploit our
              children, subjugate us through crises and pharmaceuticals, and sow discord to keep
              us divided. Politicians like Tina Smith, who take orders from these corrupt
              powers, must be removed from positions of influence.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <BrandButton variant="primary" href="/volunteer">
                Join the Movement →
              </BrandButton>
              <BrandButton variant="ghost-light" href="/about">
                Meet Royce
              </BrandButton>
            </div>

            <div className="brand-rule-gradient mt-16" />

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <div>
                <dt className="font-accent text-[11px] font-medium tracking-[0.14em] uppercase text-stone-400">
                  Identity
                </dt>
                <dd className="font-display font-black italic text-[24px] leading-[1.1] text-white mt-2">
                  Smash Mouth <span className="text-patriot">Populism</span>
                </dd>
              </div>
              <div>
                <dt className="font-accent text-[11px] font-medium tracking-[0.14em] uppercase text-stone-400">
                  Mission
                </dt>
                <dd className="font-display font-black italic text-[24px] leading-[1.1] text-white mt-2">
                  Fighting for <span className="text-liberty">Freedom</span>
                </dd>
              </div>
              <div>
                <dt className="font-accent text-[11px] font-medium tracking-[0.14em] uppercase text-stone-400">
                  Values
                </dt>
                <dd className="font-display font-black italic text-[24px] leading-[1.1] text-white mt-2">
                  God · Family · <span className="text-patriot">Country</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="hidden lg:block col-span-4 xl:col-span-5 relative pt-6">
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden border border-white/10 brand-duotone">
              <PlaceholderImage
                width={640}
                height={800}
                label="Royce White"
                bg="0A1628"
                fg="EDEBE3"
                alt="Portrait placeholder — replace with Royce White campaign photo"
                priority
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 400px, 100vw"
              />
              <span
                aria-hidden="true"
                className="absolute top-5 left-5 w-[44px] h-[44px] border-t-2 border-l-2 border-patriot z-10"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-5 right-5 w-[44px] h-[44px] border-b-2 border-r-2 border-liberty z-10"
              />
              <div className="absolute bottom-6 left-6 right-16 z-10">
                <p className="font-accent text-[10px] font-medium tracking-[0.22em] uppercase text-stone-200">
                  Portrait · MN 2026
                </p>
                <p className="font-display italic font-bold text-[22px] leading-[1.1] text-white mt-1">
                  The People's <span className="text-liberty">Candidate.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-20 bg-parchment brand-slice-bottom"
      />
    </section>
  )
}

export default Hero
