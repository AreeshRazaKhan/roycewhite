import BrandButton from '@/components/brand/brand-button'
import IssueCard from '@/components/home/issue-card'

const ISSUES = [
  {
    number: '01',
    title: 'Term Limits',
    body: 'The first bill I hope to bring is one that will limit my own ability to become a career politician. We need term limits in the House and Senate — long overdue. A maximum of 12 years in either body.',
    pullQuote: "What's wrong with taking care of Americans first?",
    stat: { value: '12', label: 'Year maximum term limit in either body of Congress' },
  },
  {
    number: '02',
    title: 'Election Integrity',
    body: 'A dire concern over the security of our elections. Single-day voting, paper ballots, personal identification — and a national holiday to encourage and support voter participation and security.',
  },
  {
    number: '03',
    title: 'American Manufacturing',
    body: "American manufacturing, or the lack thereof, is a source of economic instability. America must become independent — rebuild as an equity society. Our manufacturing and supply chains are a matter of national security.",
  },
  {
    number: '04',
    title: 'Pro 2A',
    body: 'The 2nd Amendment is a constitutional right that can never be infringed upon. It is one of the most important political mechanisms to safeguard the freedoms of citizens in this country.',
  },
  {
    number: '05',
    title: 'Energy Independence',
    body: 'Our society relies on energy to function. Being energy independent protects our citizens and our nation — and helps us avoid the temptation to get involved in military conflicts to support our energy needs.',
  },
  {
    number: '06',
    title: 'No Taxes (American Jubilee)',
    body: 'Taxes in our country are out of control. I want to cut taxes for as many Americans as possible, from as many places as possible — and end the justification for the continued expansion of the administrative state.',
  },
]

const IssuesSection = () => {
  return (
    <section id="issues" className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
      />

      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-patriot/[0.06]"
        style={{ top: '60px', right: '40px', fontSize: '200px' }}
      >
        003
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-4">
            <p className="brand-section-label text-patriot">
              /003 — Royce on the Issues
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              No focus groups.{' '}
              <em className="not-italic italic text-patriot">No consultants.</em>{' '}
              Just the truth, told plain.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-2xl">
              Six plain-spoken positions on the issues Washington keeps dodging. Read them. Share
              them. Hold Royce accountable to them.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <IssueCard
            {...ISSUES[0]}
            featured
            className="col-span-12 lg:col-span-8 lg:row-span-2"
          />
          <IssueCard {...ISSUES[1]} className="col-span-12 md:col-span-6 lg:col-span-4" />
          <IssueCard {...ISSUES[2]} className="col-span-12 md:col-span-6 lg:col-span-4" />
          <IssueCard {...ISSUES[3]} className="col-span-12 md:col-span-6 lg:col-span-4" />
          <IssueCard {...ISSUES[4]} className="col-span-12 md:col-span-6 lg:col-span-4" />
          <IssueCard {...ISSUES[5]} className="col-span-12 md:col-span-6 lg:col-span-4" />
        </div>

        <div className="mt-12 flex justify-end">
          <BrandButton variant="navy" href="/ask-royce">
            Straight Answers →
          </BrandButton>
        </div>
      </div>
    </section>
  )
}

export default IssuesSection
