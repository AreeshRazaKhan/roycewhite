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
    label: 'Phone',
    value: '218-686-3970',
    href: 'tel:2186863970',
  },
  {
    label: 'General Inquiries',
    value: 'hello@roycewhite.us',
    href: 'mailto:hello@roycewhite.us',
  },
  {
    label: 'Press',
    value: 'press@roycewhite.us',
    href: 'mailto:press@roycewhite.us',
  },
  {
    label: 'Volunteer',
    value: 'volunteer@roycewhite.us',
    href: 'mailto:volunteer@roycewhite.us',
  },
]

const TOPICS = ['General', 'Press', 'Volunteer', 'Event Request', 'Endorsement']

const ContactPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/contact — Drop Royce a Line"
        number="020"
        title={
          <>
            Talk to the{' '}
            <em className="not-italic italic text-liberty">campaign.</em>
          </>
        }
        lede="Minnesotans built this campaign. Minnesotans keep it going. Send a note, file a question, or flag something we should be hearing about. Somebody on the team reads every one."
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
                No phone trees.{' '}
                <em className="not-italic italic text-patriot">No press kits.</em>
              </h2>

              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-xl">
                Royce answers Minnesotans. Use the form to tell the campaign what you need, or
                reach the team directly through one of the lines below.
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
                  Send a Note
                </p>
                <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-8">
                  Tell the campaign what's on your mind.
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

                <div className="mt-4">
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

                <div className="mt-4">
                  <label
                    htmlFor="c-topic"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Topic
                  </label>
                  <select
                    id="c-topic"
                    name="topic"
                    defaultValue="General"
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="c-message"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink leading-[1.65]"
                  />
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <BrandButton variant="primary" type="submit">
                    Send Message →
                  </BrandButton>
                  <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-stone-600">
                    We'll respond within 48 hours
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
