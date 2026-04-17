'use client'

import BrandButton from '@/components/brand/brand-button'

const JoinFormSection = () => {
  return (
    <section id="join" className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 brand-grid-overlay-light opacity-70 pointer-events-none"
      />

      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-patriot/[0.05]"
        style={{ top: '40px', right: '40px', fontSize: '200px' }}
      >
        007
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-6">
            <p className="brand-section-label text-patriot mb-8">
              /007 — Caucus Counterattack
            </p>

            <h2
              className="font-display font-black leading-[1.05] tracking-[-0.02em] text-navy-900"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              All Hands <em className="not-italic italic text-patriot">on Deck.</em>
            </h2>

            <div className="relative mt-12 p-8 lg:p-10 bg-navy-900 text-moonlight rounded-[4px] border-l-4 border-patriot max-w-xl">
              <span
                aria-hidden="true"
                className="absolute -top-4 left-8 text-[60px] leading-none font-display font-black text-liberty/60 select-none"
              >
                "
              </span>
              <p className="font-display italic font-bold text-[22px] lg:text-[24px] leading-[1.35] text-white pt-2">
                Please become a MNGOP delegate for Royce White. Help me get the 2026 MNGOP
                endorsement for Senate. It's easy — sign up here and we'll contact you about how.
                Thank you!
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-stone-400" />
                <span className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400">
                  Royce White
                </span>
              </div>
            </div>

            <p className="mt-10 text-[16px] leading-[1.8] text-ink/80 font-light max-w-xl">
              The Royce White campaign runs on Minnesotans — the ones who knock doors, host house
              parties, print yard signs, and chip in a dollar when they can. Every name on this form
              is one more person the swamp has to answer to.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6">
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
                    htmlFor="first-name"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Zip Code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    required
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                  />
                </div>
              </div>

              <label className="mt-6 flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="sms-optin"
                  className="mt-1 h-4 w-4 accent-patriot"
                />
                <span className="text-[13px] leading-[1.6] text-ink/80 font-light">
                  Opt in to SMS. By providing your number you consent to receive campaign calls and
                  text messages. Msg & data rates may apply. Reply <strong>STOP</strong> to opt out.
                </span>
              </label>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BrandButton variant="primary" type="submit">
                  Sign Me Up →
                </BrandButton>
                <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-stone-600">
                  Secured via campaign compliance
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinFormSection
