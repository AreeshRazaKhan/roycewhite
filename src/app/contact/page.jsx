'use client'

import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

const CONTACT_LINES = [
  {
    label: 'Mailing',
    value: 'Royce White For Senate\nP.O. Box 5473\nHopkins, MN 55343',
    href: null,
  },
  {
    label: 'Call Us',
    value: '320-318-1933',
    href: 'tel:3203181933',
  },
  {
    label: 'Campaign Line',
    value: '218-686-3970',
    href: 'tel:2186863970',
  },
]

const VOLUNTEER_OPPORTUNITIES = [
  'Signs',
  'Events',
  'Phones',
  'Donate',
  'Doors',
  'Elections',
  'Fundraising',
  'Guard Ballots',
]

const ContactPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/contact — Get In Touch"
        number="020"
        title={
          <>
            Tell Us How You Can{' '}
            <em className="not-italic italic text-liberty">Participate.</em>
          </>
        }
        lede="We want to hear from you. This is a populist movement, so naturally mine is a populist campaign. Godspeed!"
      />

      <section className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />

        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.05]"
          style={{ top: '40px', right: '40px', fontSize: '200px' }}
        >
          021
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <p className="brand-section-label text-patriot mb-8">/021 — Direct Lines</p>

              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.5vw, 3rem)' }}
              >
                We want to connect with you for the{' '}
                <em className="not-italic italic text-patriot">campaign and beyond.</em>
              </h2>

              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-xl">
                Use the form to tell the campaign how you can participate, or reach the team
                directly through one of the lines below.
              </p>

              <dl className="mt-10 space-y-6 max-w-md">
                {CONTACT_LINES.map((line) => (
                  <div
                    key={line.label}
                    className="relative bg-white border border-stone-200 rounded-[4px] p-6"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 w-[3px] h-8 bg-patriot"
                    />
                    <dt className="font-accent text-[11px] font-semibold tracking-[0.18em] uppercase text-patriot">
                      {line.label}
                    </dt>
                    <dd className="mt-2 font-display font-bold text-[18px] leading-[1.4] text-navy-900 whitespace-pre-line">
                      {line.href ? (
                        <a href={line.href} className="hover:text-patriot transition-colors">
                          {line.value}
                        </a>
                      ) : (
                        line.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-10 font-mono text-[11px] tracking-[0.18em] uppercase text-stone-600">
                Paid for by Royce White For Senate
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <form
                className="relative bg-white border border-stone-200 rounded-[4px] p-8 lg:p-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-16 bg-patriot"
                />

                <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-patriot mb-2">
                  Join Royce
                </p>
                <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-8">
                  Volunteer. Donate. Show up.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="c-first"
                      className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                    >
                      First Name
                    </label>
                    <input
                      id="c-first"
                      name="first-name"
                      type="text"
                      required
                      className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-last"
                      className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                    >
                      Last Name
                    </label>
                    <input
                      id="c-last"
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
                      htmlFor="c-email"
                      className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                    >
                      Email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-zip"
                      className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                    >
                      Zip Code
                    </label>
                    <input
                      id="c-zip"
                      name="zip"
                      type="text"
                      required
                      className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="c-phone"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Mobile Phone
                  </label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                  />
                </div>

                <fieldset className="mt-6">
                  <legend className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot mb-3">
                    Volunteer Opportunities (check all that apply)
                  </legend>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {VOLUNTEER_OPPORTUNITIES.map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer p-3 rounded-[4px] hover:bg-parchment transition-colors"
                      >
                        <input
                          type="checkbox"
                          name="opportunity"
                          value={opt}
                          className="h-4 w-4 accent-patriot"
                        />
                        <span className="font-body text-[14px] leading-[1.3] text-navy-900 font-semibold">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-4">
                  <label
                    htmlFor="c-message"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Write a comment
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
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
                    SMS Opt In. By providing your telephone number, you consent to receive calls
                    and text messages. Msg &amp; data rates may apply. Reply <strong>STOP</strong>{' '}
                    to opt-out &amp; <strong>HELP</strong> for help.
                  </span>
                </label>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <BrandButton variant="primary" type="submit">
                    Send Message →
                  </BrandButton>
                  <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-stone-600">
                    The fight continues…
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default ContactPage
