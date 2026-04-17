'use client'

import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

const ROLES = [
  {
    number: '01',
    title: 'Door Knocker',
    body: 'The single most powerful act in politics: a neighbor on a neighbor\'s porch. We organize in turfs of 50–80 doors. No cold calls.',
    commitment: '2–4 hrs / week',
  },
  {
    number: '02',
    title: 'Phone Banker',
    body: 'Call Minnesotans from your kitchen. Scripts provided, dialer provided, pep talk included. Evenings and weekends.',
    commitment: '1–3 hrs / week',
  },
  {
    number: '03',
    title: 'MNGOP Delegate',
    body: 'Become a delegate for the 2026 endorsement. It\'s easier than you think — we walk you through every step.',
    commitment: 'One weekend',
  },
  {
    number: '04',
    title: 'House Party Host',
    body: 'Twelve neighbors in your living room, Royce on speaker. We bring the agenda, you bring the coffee.',
    commitment: 'One evening',
  },
  {
    number: '05',
    title: 'County Captain',
    body: 'Own a county. Build a local team. Report up. If you\'ve organized anything — a church group, a PTA, a fantasy league — you can do this.',
    commitment: '5–10 hrs / week',
  },
  {
    number: '06',
    title: 'Rapid Response',
    body: 'Online, on-camera, on-the-spot. Share content, defend the record, push back on the lies — in real time.',
    commitment: 'Flexible',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'I\'d never volunteered for anything political in my life. Royce\'s team walked me through knocking my first 30 doors and now I\'m running my precinct.',
    name: 'Kara J.',
    city: 'Rochester, MN',
  },
  {
    quote:
      'The campaign gave me something worth showing up for. It\'s not a party anymore — it\'s a movement.',
    name: 'Dan P.',
    city: 'Duluth, MN',
  },
]

const VolunteerPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/volunteer — All Hands On Deck"
        number="030"
        title={
          <>
            Minnesotans built this.{' '}
            <em className="not-italic italic text-liberty">You finish it.</em>
          </>
        }
        lede="The Royce White campaign runs on Minnesotans — the ones who knock doors, host house parties, print yard signs, and chip in a dollar when they can. Pick a role. Show up. Make the swamp answer."
      >
        <div className="flex flex-wrap gap-4">
          <BrandButton variant="primary" href="#signup">
            Sign Up →
          </BrandButton>
          <BrandButton variant="ghost-light" href="#roles">
            See the Roles
          </BrandButton>
        </div>
      </PageHero>

      <section id="roles" className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.05]"
          style={{ top: '60px', right: '40px', fontSize: '200px' }}
        >
          031
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-patriot">/031 — Ways to Fight</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                Six ways to put your{' '}
                <em className="not-italic italic text-patriot">hands</em> on this campaign.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-2xl">
                Whatever you have — an afternoon, a phone, a living room, a county — we've built
                a role around it. Pick one, or tell us what you're up for in the form below.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {ROLES.map((role, idx) => (
              <article
                key={role.number}
                className={`col-span-12 md:col-span-6 lg:col-span-4 relative bg-white border border-stone-200 rounded-[4px] p-10 overflow-hidden group transition-colors duration-300 hover:bg-navy-900 hover:border-navy-900 ${
                  idx === 0 ? 'lg:col-span-8' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-12 bg-patriot"
                />
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-navy-900 transition-colors group-hover:border-liberty">
                    <span className="font-accent text-[12px] font-semibold tracking-[0.1em] uppercase text-patriot transition-colors group-hover:text-liberty">
                      /{role.number}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-stone-400 group-hover:text-stone-200 transition-colors">
                    {role.commitment}
                  </span>
                </div>
                <h3
                  className={`font-display font-extrabold text-navy-900 group-hover:text-white transition-colors ${
                    idx === 0
                      ? 'text-[28px] lg:text-[34px] leading-[1.15]'
                      : 'text-[22px] leading-[1.25]'
                  }`}
                >
                  {role.title}
                </h3>
                <p
                  className={`font-body leading-[1.65] text-ink/80 group-hover:text-stone-200 transition-colors ${
                    idx === 0 ? 'text-[16px] mt-5 max-w-[52ch]' : 'text-[14px] mt-3 text-stone-600'
                  }`}
                >
                  {role.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 text-moonlight py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <p className="brand-section-label text-gold mb-8">/032 — From the Field</p>
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(2rem, 3.25vw, 3rem)' }}
              >
                The people who{' '}
                <em className="not-italic italic text-liberty">showed up.</em>
              </h2>
              <p className="mt-6 text-[16px] leading-[1.8] text-stone-200 font-light max-w-md">
                Volunteers who joined this campaign — in their own words.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 space-y-6">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="relative bg-navy-800 border-l-4 border-patriot rounded-[4px] p-8 lg:p-10"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 left-8 text-[60px] leading-none font-display font-black text-liberty/60 select-none"
                  >
                    "
                  </span>
                  <blockquote className="font-display italic font-bold text-[22px] lg:text-[24px] leading-[1.35] text-white pt-2">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-stone-400" />
                    <span className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400">
                      {t.name} · {t.city}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="signup" className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <div className="relative mx-auto max-w-[900px] px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="brand-section-label text-patriot justify-center inline-flex mb-6">
              /033 — Sign Up
            </p>
            <h2
              className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
              style={{ fontSize: 'clamp(2rem, 3.25vw, 3rem)' }}
            >
              Tell us what you're{' '}
              <em className="not-italic italic text-patriot">ready to do.</em>
            </h2>
          </div>

          <form
            className="relative bg-white border border-stone-200 rounded-[4px] p-8 lg:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 w-[3px] h-16 bg-patriot"
            />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="v-first"
                  className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                >
                  First Name
                </label>
                <input
                  id="v-first"
                  name="first-name"
                  type="text"
                  required
                  className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                />
              </div>
              <div>
                <label
                  htmlFor="v-last"
                  className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                >
                  Last Name
                </label>
                <input
                  id="v-last"
                  name="last-name"
                  type="text"
                  required
                  className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="v-email"
                  className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                >
                  Email
                </label>
                <input
                  id="v-email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                />
              </div>
              <div>
                <label
                  htmlFor="v-zip"
                  className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                >
                  Zip Code
                </label>
                <input
                  id="v-zip"
                  name="zip"
                  type="text"
                  required
                  className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                />
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot mb-3">
                What are you up for? (check all that apply)
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {ROLES.map((role) => (
                  <label
                    key={role.number}
                    className="flex items-start gap-3 cursor-pointer p-3 rounded-[4px] hover:bg-parchment transition-colors"
                  >
                    <input
                      type="checkbox"
                      name="role"
                      value={role.title}
                      className="mt-1 h-4 w-4 accent-patriot"
                    />
                    <span className="font-body text-[14px] leading-[1.5] text-ink">
                      <span className="font-semibold text-navy-900">{role.title}</span>
                      <span className="block text-stone-600 text-[13px]">{role.commitment}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-6">
              <label
                htmlFor="v-note"
                className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
              >
                Anything else? (optional)
              </label>
              <textarea
                id="v-note"
                name="note"
                rows={4}
                className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink leading-[1.65]"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <BrandButton variant="primary" type="submit">
                Count Me In →
              </BrandButton>
              <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-stone-600">
                A volunteer coordinator will reach out
              </span>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  )
}

export default VolunteerPage
