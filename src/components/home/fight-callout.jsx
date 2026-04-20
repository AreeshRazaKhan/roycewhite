import BrandButton from '@/components/brand/brand-button'

const FightCallout = () => {
  return (
    <section className="relative bg-navy-900 text-moonlight py-14 lg:py-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <span className="absolute left-0 top-[18%] h-[1px] w-[45%] opacity-[0.18]" style={{ background: 'linear-gradient(90deg, #D42027, transparent)' }} />
        <span className="absolute left-0 top-[26%] h-[1px] w-[28%] opacity-[0.15]" style={{ background: 'linear-gradient(90deg, #29ABE2, transparent)' }} />
        <span className="absolute left-0 top-[34%] h-[1px] w-[62%] opacity-[0.08]" style={{ background: 'linear-gradient(90deg, #D42027, transparent)' }} />
        <span className="absolute left-0 top-[42%] h-[1px] w-[18%] opacity-[0.18]" style={{ background: 'linear-gradient(90deg, #29ABE2, transparent)' }} />
        <span className="absolute left-0 top-[50%] h-[1px] w-[38%] opacity-[0.10]" style={{ background: 'linear-gradient(90deg, #D42027, transparent)' }} />
        <span className="absolute right-[30px] top-[18%] font-mono text-[12px] tracking-[0.1em] uppercase text-stone-200">
          SCORE · 2026
        </span>
      </div>

      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-patriot/[0.06]"
        style={{ top: '40px', right: '60px', fontSize: '240px' }}
      >
        004
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7">
            <p className="brand-section-label text-liberty mb-8">
              /004 — The Fight
            </p>

            <h2
              className="font-display font-black leading-[0.95] tracking-[-0.02em] text-white"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 6rem)' }}
            >
              Who is <em className="not-italic italic text-liberty">fighting</em>
              <br />
              for <em className="not-italic italic text-liberty">you?</em>
            </h2>

            <p className="mt-10 max-w-xl text-[18px] leading-[1.7] text-stone-200 font-light">
              Senators should work for the people, not their own net worth. We are yearning for
              unwavering leadership that is resoundingly clear — leadership that is elected by the
              people, not selected by elites who fatten their own pockets.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <BrandButton variant="primary" href="/volunteer">
                Get Involved →
              </BrandButton>
              <BrandButton variant="ghost-light" href="/contact">
                Contact Us
              </BrandButton>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative border border-white/10 rounded-[4px] p-10 lg:p-12 bg-navy-800 overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-[3px] h-16 bg-patriot"
              />
              <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-liberty mb-6">
                Identity
              </p>
              <p className="font-display font-black italic text-[38px] lg:text-[46px] leading-[0.95] tracking-[-0.02em] text-white">
                Smash Mouth
                <br />
                <span className="text-patriot">Populism.</span>
              </p>
              <div className="mt-8 h-[1px] w-full bg-white/10" />
              <p className="mt-6 font-display italic font-bold text-[22px] leading-[1.3] text-moonlight">
                Fighting for Freedom.
              </p>
              <p className="mt-2 font-display italic font-bold text-[22px] leading-[1.3] text-moonlight">
                The Global Affects the Local.
              </p>
              <div className="mt-10 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-stone-400" />
                <span className="font-accent text-[12px] font-medium tracking-[0.2em] uppercase text-stone-200">
                  Royce White
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FightCallout
