'use client'

import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

const ROLES = [
  {
    number: '01',
    title: 'Signs',
    body: 'Put a Royce White yard sign in your yard, your farm gate, or your storefront. Visible signal to your neighbors that the people are coming.',
  },
  {
    number: '02',
    title: 'Events',
    body: 'Help staff rallies, town halls, and the weekly volunteer meeting. Set up, greet attendees, run the sign-in table.',
  },
  {
    number: '03',
    title: 'Phones',
    body: 'Call Minnesotans from home. Scripts and dialer provided. Evenings and weekends work best for most volunteers.',
  },
  {
    number: '04',
    title: 'Donate',
    body: 'A populist campaign runs on grassroots dollars. Chip in what you can \u2014 no corporate PAC money, ever.',
  },
  {
    number: '05',
    title: 'Doors',
    body: 'Knock doors with a team in your precinct. The single most effective campaign action. Turf provided, training provided.',
  },
  {
    number: '06',
    title: 'Elections',
    body: 'Work inside the process \u2014 caucuses, conventions, primary day, general day. Become a delegate and help secure the 2026 MNGOP endorsement.',
  },
  {
    number: '07',
    title: 'Fundraising',
    body: 'Host a house party, run a meet-and-greet, or drive a personal fundraising page. Every dollar from a real Minnesotan matters.',
  },
  {
    number: '08',
    title: 'Guard Ballots',
    body: 'Volunteer as a poll watcher or election integrity observer. Paper ballots, single-day voting, voter ID \u2014 and people who show up to verify it.',
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
            Tell us how you can{' '}
            <em className="not-italic italic text-liberty">participate.</em>
          </>
        }
        lede={
          <>
            We want to hear from you. This is a populist movement, so naturally mine is a
            populist campaign. Please become a MNGOP delegate for Royce White. Help me get the
            2026 MNGOP endorsement for Senate &mdash; it&rsquo;s easy to do, sign up here and
            we&rsquo;ll contact you about how.
          </>
        }
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
              <p className="brand-section-label text-patriot">/031 — Volunteer Opportunities</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                Eight ways to put your{' '}
                <em className="not-italic italic text-patriot">hands</em> on this campaign.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-2xl">
                Pick one. Pick several. Tell us what you&rsquo;re up for in the form below and
                a volunteer coordinator will reach out.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {ROLES.map((role, idx) => (
              <article
                key={role.number}
                className={`col-span-12 md:col-span-6 lg:col-span-3 relative bg-white border border-stone-200 rounded-[4px] p-8 overflow-hidden group transition-colors duration-300 hover:bg-navy-900 hover:border-navy-900 ${
                  idx === 0 ? 'md:col-span-12 lg:col-span-6' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-12 bg-patriot"
                />
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-navy-900 transition-colors group-hover:border-liberty mb-6">
                  <span className="font-accent text-[12px] font-semibold tracking-[0.1em] uppercase text-patriot transition-colors group-hover:text-liberty">
                    /{role.number}
                  </span>
                </span>
                <h3
                  className={`font-display font-extrabold text-navy-900 group-hover:text-white transition-colors ${
                    idx === 0
                      ? 'text-[26px] lg:text-[32px] leading-[1.15]'
                      : 'text-[20px] leading-[1.25]'
                  }`}
                >
                  {role.title}
                </h3>
                <p
                  className={`font-body leading-[1.65] text-ink/80 group-hover:text-stone-200 transition-colors ${
                    idx === 0
                      ? 'text-[16px] mt-4 max-w-[52ch]'
                      : 'text-[14px] mt-3 text-stone-600'
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
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7">
              <p className="brand-section-label text-gold mb-6">/032 — Caucus Counterattack</p>

              <figure className="relative bg-navy-800 border-l-4 border-patriot rounded-[4px] p-8 lg:p-10 max-w-2xl">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 left-8 text-[60px] leading-none font-display font-black text-liberty/60 select-none"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display italic font-bold text-[22px] lg:text-[26px] leading-[1.35] text-white pt-2">
                  Please become a MNGOP delegate for Royce White. Help me get the 2026 MNGOP
                  endorsement for Senate. It&rsquo;s easy &mdash; sign up here and we&rsquo;ll
                  contact you about how. Thank you!
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-stone-400" />
                  <span className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400">
                    Royce White
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <h3
                className="font-display font-black leading-[1.05] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                The people are{' '}
                <em className="not-italic italic text-liberty">coming.</em>
              </h3>
              <p className="mt-4 text-[16px] leading-[1.8] text-stone-200 font-light">
                The Royce White campaign runs on Minnesotans &mdash; the ones who knock doors,
                host house parties, print yard signs, and chip in a dollar when they can.
              </p>
              <div className="mt-8">
                <BrandButton variant="ghost-light" href="#signup">
                  Count Me In →
                </BrandButton>
              </div>
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
              Tell us what you&rsquo;re{' '}
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

            <div className="mt-4">
              <label
                htmlFor="v-phone"
                className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
              >
                Mobile Phone
              </label>
              <input
                id="v-phone"
                name="phone"
                type="tel"
                className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
              />
            </div>

            <fieldset className="mt-6">
              <legend className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot mb-3">
                Volunteer Opportunities (check all that apply)
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
                Write a comment
              </label>
              <textarea
                id="v-note"
                name="note"
                rows={4}
                className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink leading-[1.65]"
              />
            </div>

            <label className="mt-6 flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="sms-optin"
                className="mt-1 h-4 w-4 accent-patriot"
              />
              <span className="text-[13px] leading-[1.6] text-ink/80 font-light">
                SMS Opt In. By providing your telephone number, you consent to receive calls and
                text messages. Msg &amp; data rates may apply. Msg frequency may vary. Reply
                <strong> STOP</strong> to opt-out &amp; <strong>HELP</strong> for help.
              </span>
            </label>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <BrandButton variant="primary" type="submit">
                Count Me In →
              </BrandButton>
              <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-stone-600">
                The fight continues…
              </span>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  )
}

export default VolunteerPage
