import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'
import PlaceholderImage from '@/components/brand/placeholder-image'

export const metadata = {
  title: 'About Royce — Royce White for U.S. Senate',
  description:
    'Father. Patriot. Minnesotan. Meet Royce White — the people\'s candidate for U.S. Senate.',
}

const PRINCIPLES = [
  {
    number: '01',
    title: 'God',
    body: 'Faith is the foundation. A republic without reverence turns into a managed society — and a managed society is no country at all.',
  },
  {
    number: '02',
    title: 'Family',
    body: 'Parents lead, communities hold, and children grow up free. Policy starts at the kitchen table, not in a think-tank in D.C.',
  },
  {
    number: '03',
    title: 'Country',
    body: 'Sovereignty is not negotiable. Americans first — the worker, the border, the Constitution, the vote.',
  },
]

const TIMELINE = [
  {
    year: '1991',
    label: 'Born in Minneapolis',
    body: 'Raised in a working-class family. Public schools, pickup ball, and a mother who never let him give up.',
  },
  {
    year: '2010',
    label: 'Forced the NBA to confront mental health',
    body: 'Went head-to-head with a multi-billion-dollar league to demand a mental health protocol when none existed. They said no — he made them.',
  },
  {
    year: '2020',
    label: 'From athlete to advocate',
    body: 'Transitioned from professional basketball into combat sports, podcasting, and grassroots organizing across the Upper Midwest.',
  },
  {
    year: '2022',
    label: 'MNGOP endorsed candidate for U.S. Senate',
    body: 'Won the endorsement of the Minnesota Republican Party — a first-time candidate taking on a career insider.',
  },
  {
    year: '2026',
    label: 'Running to win',
    body: 'Back on the ballot, with a ground game in all 87 counties, 0% from corporate PACs, and a single question for Washington: whose side are you on?',
  },
]

const AboutPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/about — Meet Royce"
        number="010"
        title={
          <>
            Father. Patriot.{' '}
            <em className="not-italic italic text-liberty">Minnesotan.</em>
          </>
        }
        lede="The people's candidate — not the donor class's. Not the consultants'. Not the party apparatus's. Royce White is running for the people who've been waiting for someone to tell the truth, out loud, without apology."
      />

      <section className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-navy-900/[0.04]"
          style={{ top: '60px', right: '40px', fontSize: '200px' }}
        >
          011
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden border border-stone-200 brand-duotone">
                <PlaceholderImage
                  width={720}
                  height={900}
                  label="Royce White"
                  bg="0A1628"
                  fg="EDEBE3"
                  alt="Portrait placeholder — replace with Royce on the trail"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-5 w-[44px] h-[44px] border-t-2 border-l-2 border-patriot z-10"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 w-[44px] h-[44px] border-b-2 border-r-2 border-liberty z-10"
                />
                <div className="absolute bottom-6 left-6 pr-10 z-10">
                  <p className="font-accent text-[10px] font-medium tracking-[0.22em] uppercase text-stone-200 mb-2">
                    The Candidate
                  </p>
                  <p className="font-display italic font-bold text-[28px] leading-[1.1] text-white">
                    Royce <span className="text-liberty">White.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pl-4 lg:pt-2">
              <p className="brand-section-label text-patriot mb-8">/011 — The Full Story</p>

              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                A son of Minnesota who{' '}
                <em className="not-italic italic text-patriot">refuses to sell out.</em>
              </h2>

              <div className="mt-10 space-y-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-[58ch]">
                <p>
                  Royce was born and raised in the Twin Cities in a working-class family that
                  knew, intimately, what the government does when no one is watching. He played
                  basketball at every level it can be played at — high school, college, the NBA —
                  and became one of the first professional athletes to force his league into
                  treating mental health as a workplace condition, not a personality flaw.
                </p>
                <p>
                  He didn't come from a political family. He came to politics because the culture
                  war found his family — and because no one in either party was willing to name
                  what was happening. The global affects the local. The institutions Americans
                  were told to trust have been turned against them.
                </p>
                <p>
                  Royce's platform is plain: America First, God · Family · Country, zero dollars
                  from corporate PACs, and a permanent open door to the 87 counties of Minnesota.
                  He is running to be the senator who reads every bill, answers every call, and
                  files every vote with one test in mind — does this serve Minnesotans first?
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-stone-400" />
                <span className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-ink">
                  Royce White · U.S. Senate · MN 2026
                </span>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <BrandButton variant="primary" href="/join">
                  Join the Movement →
                </BrandButton>
                <BrandButton variant="ghost" href="/issues">
                  Where He Stands →
                </BrandButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 text-moonlight py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.06]"
          style={{ top: '60px', left: '40px', fontSize: '200px' }}
        >
          012
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-gold">/012 — First Principles</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
              >
                God ·{' '}
                <em className="not-italic italic text-liberty">Family</em> · Country.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-stone-200 font-light max-w-2xl">
                Three words that sound like a slogan until you have to actually govern by them.
                These are the filters every decision passes through — in that order.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {PRINCIPLES.map((p) => (
              <article
                key={p.number}
                className="col-span-12 md:col-span-6 lg:col-span-4 relative bg-navy-800 border border-white/5 rounded-[4px] p-10 lg:p-12 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-14 bg-patriot"
                />
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-liberty mb-8">
                  <span className="font-accent text-[12px] font-semibold tracking-[0.1em] uppercase text-liberty">
                    /{p.number}
                  </span>
                </span>
                <h3 className="font-display font-extrabold text-[28px] leading-[1.15] text-white">
                  {p.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.7] text-stone-200 font-light max-w-[38ch]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-patriot">/013 — The Record</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                A path from the{' '}
                <em className="not-italic italic text-patriot">hardwood</em> to the{' '}
                <em className="not-italic italic text-patriot">Senate floor.</em>
              </h2>
            </div>
          </div>

          <ol className="relative border-l-2 border-stone-200 ml-2 lg:ml-6">
            {TIMELINE.map((entry) => (
              <li key={entry.year} className="relative pl-8 pb-12 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-patriot border-2 border-parchment"
                />
                <p className="font-mono text-[12px] tracking-[0.14em] uppercase text-stone-400 mb-2">
                  {entry.year}
                </p>
                <h3 className="font-display font-extrabold text-[22px] lg:text-[26px] leading-[1.2] text-navy-900">
                  {entry.label}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-ink/80 font-light max-w-[60ch]">
                  {entry.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative bg-navy-900 text-moonlight py-20 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <p className="brand-section-label text-gold justify-center mb-6 inline-flex">
            /014 — All Hands On Deck
          </p>
          <h2
            className="font-display font-black leading-[1.05] tracking-[-0.02em] text-white mx-auto max-w-4xl"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}
          >
            The people are{' '}
            <em className="not-italic italic text-liberty">coming.</em>{' '}
            Will you be with them?
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <BrandButton variant="primary" href="/join">
              Join the Movement →
            </BrandButton>
            <BrandButton variant="ghost-light" href="/volunteer">
              Volunteer
            </BrandButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default AboutPage
