const STATS = [
  {
    value: '87',
    unit: 'Counties Visited',
    body: "A genuine road trip across every Minnesota county — no flyover, no parachute candidates.",
  },
  {
    value: '120+',
    unit: 'Town Halls',
    body: 'Face-to-face with voters, from Iron Range diners to Twin Cities union halls.',
  },
  {
    value: '0%',
    unit: 'Corporate PAC',
    body: 'Zero corporate PAC dollars. This seat is not for sale — and never will be.',
  },
]

const StatsSection = () => {
  return (
    <section className="relative bg-navy-900 text-moonlight py-24 lg:py-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <span className="absolute left-0 top-[22%] h-[1px] w-[45%] opacity-[0.18]" style={{ background: 'linear-gradient(90deg, #D42027, transparent)' }} />
        <span className="absolute left-0 top-[30%] h-[1px] w-[28%] opacity-[0.15]" style={{ background: 'linear-gradient(90deg, #29ABE2, transparent)' }} />
        <span className="absolute left-0 top-[38%] h-[1px] w-[62%] opacity-[0.08]" style={{ background: 'linear-gradient(90deg, #D42027, transparent)' }} />
        <span className="absolute left-0 top-[46%] h-[1px] w-[18%] opacity-[0.18]" style={{ background: 'linear-gradient(90deg, #29ABE2, transparent)' }} />
        <span className="absolute left-0 top-[54%] h-[1px] w-[38%] opacity-[0.10]" style={{ background: 'linear-gradient(90deg, #D42027, transparent)' }} />
        <span className="absolute right-[40px] top-[20%] font-mono text-[10px] tracking-[0.12em] uppercase text-stone-400">
          GROUND · TRUTH
        </span>
      </div>

      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-white/[0.04]"
        style={{ top: '50px', right: '50px', fontSize: '220px' }}
      >
        006
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-4">
            <p className="brand-section-label text-gold">
              /006 — The Ground Game
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="font-display font-black leading-[1.05] tracking-[-0.02em] text-white"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              Built by <em className="not-italic italic text-liberty">Minnesotans.</em> Funded by <em className="not-italic italic text-liberty">Minnesotans.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {STATS.map((s) => (
            <div
              key={s.unit}
              className="col-span-12 md:col-span-4 border-t border-white/10 pt-10 relative"
            >
              <div
                className="font-display font-black text-white leading-[0.9]"
                style={{ fontSize: '5rem', letterSpacing: '-0.04em' }}
              >
                {s.value}
              </div>
              <div className="font-accent text-[12px] font-medium tracking-[0.14em] uppercase text-stone-400 mt-4">
                {s.unit}
              </div>
              <p className="font-body text-[16px] leading-[1.7] text-stone-200 mt-6 max-w-[30ch]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
