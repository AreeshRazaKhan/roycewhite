import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

export const metadata = {
  title: 'FAQs — Royce White for Senate',
  description:
    'The most controversial questions about Royce White, answered by Royce himself — verbatim from roycewhite.us.',
}

const FAQS = [
  {
    number: '01',
    topic: 'Back Child Support',
    answer:
      'When I was 21 years old, as a newly drafted NBA rookie, I was court ordered to pay child support based on my NBA salary. After I was released from my team, 2 years later, and a successful battle on mental health policy which necessitated an individual strike, a court again ordered me pay child support based on that salary, or an NBA salary. Because I was no longer making that salary and couldn’t keep up with the support, I became delinquent and accrued major arrears. The Minnesota family court statutory law doesn’t allow for arrears to be modified by the court under any circumstances, even if evidence can show the calculation was based on inaccurate information. The mainstream media has continuously try to frame me as a deadbeat dad even though 2 of my 4 children live with me and I have paid in excess of my current child support obligation for several years in a row. The media propaganda has deliberately not shown that I have overpaid my child support by several thousand dollars, over the last few years. This omission of detail is not at all by accident and politically motivated to paint me as a “deadbeat dad”. A characterization I reject and resent, not just of opinion, but by measurable fact. I take care of my children, this propaganda is false.',
  },
  {
    number: '02',
    topic: 'Campaign Finance Violations',
    answer:
      'The 2022 congressional campaign was my first political campaign. I relied on the political and legal advice of professionals, who handled certain aspects of the campaign, such as the campaign accounting and treasury. FEC filings made by these professionals were incomplete. These incomplete filings were used by my political opponents and the fake news media, to create the false impression that I had personally misused campaign funds. After a thorough review of the 2022 campaign, the $157,000 the fake news media accused me of misusing was almost completely accounted for as legitimate campaign expenditures. About $13,000 was left unreconciled because of the two year gap in completing the missing information. This is the candidate’s responsibility, whether I made the purchases or not, and is still a far cry difference from the $157,000 claim made by leftist think tanks, legal groups and media outlets. One in particular (The Daily Beast) suggested that over $100,000 dollars in “mysterious wires and checks” was used personally. Reflected in our recently amended FEC reports, all of the checks and wires were accounted for with receipts and invoices, none of which were transferred to or spent by me. The mainstream media has failed to and refuses to amend their false claims.',
  },
  {
    number: '03',
    topic: 'Black Lives Matter & George Floyd',
    answer:
      'I was never a part of the Black Lives Matter organization nor do I agree with their politics. After George Floyd died, a group of Black athletes from the Twin Cities area were disappointed with the violence and chaos breaking out in our community. In response, we decided to lead peaceful protests to help demonstrate the appropriate way to participate in our constitutionally guaranteed process of public protest. I was one of the architects and thought leaders of that organization (10K). Independent of the local Black Lives Matter organization, I led these peaceful protests, which included tens of thousands of people, that never once caused a single fire, fight, or arrest. These were the peaceful demonstrations the mainstream media didn’t show. The fake news media did however profile me as a rising young Black activist, until they realized my organization wasn’t in total alignment with the left’s political agenda. For example, I led these protests to the Minneapolis Federal Reserve to educate people about economic policy and banking. We were also what some would consider to be staunch 2nd amendment advocates, which included citizens who exercised their open carry rights. We never had marches to any police precinct. This lie that I’m a BLM protestor or rioter stems from ignorance and fear used by the media to sow division and discord. The goal is to tarnish my America First, Conservative, Populist brand and image.',
  },
  {
    number: '04',
    topic: 'Antisemitism',
    answer:
      'On a number of occasions now, the mainstream media, and even certain political organizations have accused me of being Antisemitic. I reject this accusation and further, I resent it. Born and raised Christian, any inference that I hold some inherent hostility towards Jews is absurd. In fact, it is my Christian heritage that gives me confidence to speak on a culture and history of fellow brothers and sisters. As Christ said, first for the Jew, and then for the Gentile. I am, however, willing to and have continued to, talk about the prominence and danger of identity politics, to our country and to the entire world, but also to the identity groups it claims to be helping. As a Black man I understand this well, that the Black identity and Jewish identity are used in a very similar fashion. I graduated from Hopkins High School, which is one of the most Jewish communities in the state of Minnesota. I have participated in numerous orthodox Jewish rituals. My best friend and cohost at Free People Radio, Professor Penn, is a Ukrainian Jew who comes from orthodox Jewish roots. As an America 1st candidate, it is my position that NO COUNTRY will get our aid without conditions. We will stand with Israel, but we cannot fund both sides of that war, or any war for that matter.',
  },
  {
    number: '05',
    topic: 'Trump Endorsement',
    answer:
      'I am not Trump endorsed but would love to be and will support his bid regardless. I am endorsed by 2 candidates that are endorsed by Trump, Kari Lake and Matt Gaetz. We look forward to being a tip of the spear for the MAGA movement and will obviously accept Trump’s endorsement with open arms when that time comes.',
  },
]

const FaqsPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/faqs — Frequently Asked"
        number="001"
        title={
          <>
            The most{' '}
            <em className="not-italic italic text-liberty">controversial</em>{' '}
            questions, answered.
          </>
        }
        lede="Most questions about my candidacy stem from personal attacks made by my opponents, detractors and the mainstream media. Rarely am I questioned on policy, which I view as the strength of my campaign."
      >
        <div className="flex flex-wrap gap-4">
          <BrandButton variant="primary" href="/ask-royce">
            Ask Your Own →
          </BrandButton>
          <BrandButton variant="ghost-light" href="#archive">
            Read the FAQs
          </BrandButton>
        </div>
      </PageHero>

      <section
        id="archive"
        className="relative bg-navy-900 text-moonlight py-14 lg:py-32 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.06]"
          style={{ top: '60px', left: '40px', fontSize: '200px' }}
        >
          002
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-gold">/002 — Frequently Asked</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="text-[17px] leading-[1.8] text-stone-200 font-light max-w-2xl">
                I wrote these answers myself to add clarity to several outstanding questions and
                attempts by the media to stifle this America 1st movement. There is no team of PR
                people or communications experts to look over and curate what I say.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq) => (
              <article
                key={faq.number}
                className="relative bg-navy-800 border border-white/5 rounded-[4px] p-8 lg:p-10 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-16 bg-patriot"
                />

                <div className="grid grid-cols-12 gap-6 lg:gap-10">
                  <div className="col-span-12 lg:col-span-3">
                    <span className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-liberty">
                      /{faq.number}
                    </span>
                  </div>

                  <div className="col-span-12 lg:col-span-9">
                    <h2 className="font-display font-extrabold text-[24px] lg:text-[30px] leading-[1.2] text-white">
                      {faq.topic}
                    </h2>
                    <p className="mt-6 text-[16px] leading-[1.75] text-stone-200 font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-[15px] leading-[1.7] text-stone-200 font-light max-w-2xl mx-auto">
            Although I hesitate to even acknowledge some of these absurd allegations and
            misleading stories, I do understand we are living in an information war. As an
            elected official, I must be a vessel that communicates the truth.
          </p>

          <div className="mt-10 flex justify-center">
            <BrandButton variant="ghost-light" href="/ask-royce">
              Ask Your Own →
            </BrandButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default FaqsPage
