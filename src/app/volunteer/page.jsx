import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'
import VolunteerSignup from '@/components/volunteer/volunteer-signup'

export const metadata = {
  title: 'Volunteer — Royce White for U.S. Senate',
  description:
    'Sign up to volunteer with the Royce White for U.S. Senate campaign. All Hands On Deck — phones, doors, events, and more.',
}

const ROLES = [
  { number: '01', title: 'Signs' },
  { number: '02', title: 'Events' },
  { number: '03', title: 'Phones' },
  { number: '04', title: 'Donate' },
  { number: '05', title: 'Doors' },
  { number: '06', title: 'Elections' },
  { number: '07', title: 'Fundraising' },
  { number: '08', title: 'Guard Ballots' },
]

const VolunteerPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/volunteer — All Hands On Deck"
        number="001"
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

      <section id="roles" className="relative bg-parchment py-14 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.05] top-[60px] right-10 text-[200px]"
        >
          002
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-patriot">/002 — Volunteer Opportunities</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900 text-[clamp(2.25rem,3.75vw,3.5rem)]">
                Eight ways to put your{' '}
                <em className="not-italic italic text-patriot">hands</em> on this campaign.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-2xl">
                Pick one. Pick several. Tell us what you&rsquo;re up for in the form below and
                a volunteer coordinator will reach out.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {ROLES.map((role) => (
              <article
                key={role.number}
                className="relative bg-white border border-stone-200 rounded-[4px] p-5 sm:p-6 lg:p-8 overflow-hidden group transition-colors duration-700 ease-out hover:bg-navy-900 hover:border-navy-900"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-10 bg-patriot"
                />
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-navy-900 transition-colors duration-700 ease-out group-hover:border-liberty mb-4 sm:mb-5">
                  <span className="font-accent text-[11px] sm:text-[12px] font-semibold tracking-[0.1em] uppercase text-patriot transition-colors duration-700 ease-out group-hover:text-liberty">
                    /{role.number}
                  </span>
                </span>
                <h3 className="font-display font-extrabold text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-navy-900 group-hover:text-white transition-colors duration-700 ease-out">
                  {role.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 text-moonlight py-14 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.06] top-[60px] left-10 text-[200px]"
        >
          003
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7">
              <p className="brand-section-label text-gold mb-6">/003 — Caucus Counterattack</p>

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
                  <span className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-stone-200">
                    Royce White
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <h3 className="font-display font-black leading-[1.05] tracking-[-0.02em] text-white text-[clamp(1.75rem,3vw,2.5rem)]">
                The people are{' '}
                <em className="not-italic italic text-liberty">coming.</em>
              </h3>
              <p className="mt-4 text-[16px] leading-[1.8] text-stone-200 font-light">
                This is a populist movement, so naturally mine is a populist campaign.
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

      <section id="signup" className="relative bg-parchment py-14 lg:py-32 overflow-hidden">
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-navy-900/[0.04] top-10 left-1/2 -translate-x-1/2 text-[220px]"
        >
          004
        </span>
        <div className="relative mx-auto max-w-[900px] px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="brand-section-label text-patriot justify-center inline-flex mb-6">
              /004 — Sign Up
            </p>
            <h2 className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900 text-[clamp(2rem,3.25vw,3rem)]">
              Tell us what you&rsquo;re{' '}
              <em className="not-italic italic text-patriot">ready to do.</em>
            </h2>
          </div>

          <VolunteerSignup />
        </div>
      </section>
    </PageShell>
  )
}

export default VolunteerPage
