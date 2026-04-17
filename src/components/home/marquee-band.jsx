const MARQUEE_ITEMS = [
  'The People Are Coming!',
  'Smash Mouth Populism',
  'God · Family · Country',
  'Fighting for Freedom',
  'The Global Affects the Local',
  'America First',
]

const MarqueeBand = () => {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div
      aria-hidden="true"
      className="bg-patriot text-white py-6 overflow-hidden border-y border-patriot-dark"
    >
      <div className="brand-marquee-track flex items-center gap-14 whitespace-nowrap will-change-transform">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-14 shrink-0">
            <span className="font-display italic font-extrabold text-[28px] lg:text-[36px] tracking-tight leading-none">
              {t}
            </span>
            <span className="w-[10px] h-[10px] rotate-45 bg-white/60 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeBand
