import ContactForm from '@/components/contact/contact-form'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

export const metadata = {
  title: 'Contact — Royce White for U.S. Senate',
  description:
    'Get in touch with the Royce White for U.S. Senate campaign — direct lines, press, events, and general inquiries.',
}

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
  {
    label: 'Press Email',
    value: 'press@roycewhite.us',
    href: 'mailto:press@roycewhite.us',
  },
  {
    label: 'Events Email',
    value: 'events@roycewhite.us',
    href: 'mailto:events@roycewhite.us',
  },
  {
    label: 'General Email',
    value: 'info@roycewhite.us',
    href: 'mailto:info@roycewhite.us',
  },
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

      <section className="relative bg-parchment py-14 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />

        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.05] top-10 right-10 text-[200px]"
        >
          021
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <p className="brand-section-label text-patriot mb-8">/021 — Direct Lines</p>

              <h2 className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900 text-[clamp(2.25rem,3.5vw,3rem)]">
                We want to connect with you for the{' '}
                <em className="not-italic italic text-patriot">campaign and beyond.</em>
              </h2>

              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-xl">
                Use the form to send a message, or reach the team directly through one of the lines
                below.
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
                    <dt className="font-accent text-[12px] font-semibold tracking-[0.18em] uppercase text-patriot">
                      {line.label}
                    </dt>
                    <dd className="mt-2 font-display font-bold text-[18px] leading-[1.4] text-navy-900 whitespace-pre-line">
                      {line.href ? (
                        <a
                          href={line.href}
                          className="inline-flex items-center min-h-11 hover:text-patriot transition-colors duration-500 ease-out"
                        >
                          {line.value}
                        </a>
                      ) : (
                        line.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-10 font-mono text-[12px] tracking-[0.18em] uppercase text-ink/80">
                Paid for by Royce White For Senate
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default ContactPage
