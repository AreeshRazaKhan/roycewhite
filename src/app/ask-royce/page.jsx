'use client'

import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

const FAQS = [
  {
    number: '01',
    topic: 'Back Child Support',
    question: 'The mainstream media has framed you as a \u201Cdeadbeat dad.\u201D What\u2019s the real story?',
    answer:
      'When I was 21 years old, as a newly drafted NBA rookie, I was court ordered to pay child support based on my NBA salary. After I was released from my team, 2 years later, and a successful battle on mental health policy which necessitated an individual strike, a court again ordered me pay child support based on that salary, or an NBA salary. Because I was no longer making that salary and couldn\u2019t keep up with the support, I became delinquent and accrued major arrears. The Minnesota family court statutory law doesn\u2019t allow for arrears to be modified by the court under any circumstances, even if evidence can show the calculation was based on inaccurate information. The mainstream media has continuously try to frame me as a deadbeat dad even though 2 of my 4 children live with me and I have paid in excess of my current child support obligation for several years in a row. The media propaganda has deliberately not shown that I have overpaid my child support by several thousand dollars, over the last few years. This omission of detail is not at all by accident and politically motivated to paint me as a \u201Cdeadbeat dad\u201D. A characterization I reject and resent, not just of opinion, but by measurable fact. I take care of my children, this propaganda is false.',
  },
  {
    number: '02',
    topic: 'Campaign Finance Violations',
    question: 'What do you say to the FEC filings that were used to accuse you of misusing campaign funds?',
    answer:
      'The 2022 congressional campaign was my first political campaign. I relied on the political and legal advice of professionals, who handled certain aspects of the campaign, such as the campaign accounting and treasury. FEC filings made by these professionals were incomplete. These incomplete filings were used by my political opponents and the fake news media, to create the false impression that I had personally misused campaign funds. After a thorough review of the 2022 campaign, the $157,000 the fake news media accused me of misusing was almost completely accounted for as legitimate campaign expenditures. About $13,000 was left unreconciled because of the two year gap in completing the missing information. This is the candidate\u2019s responsibility, whether I made the purchases or not, and is still a far cry difference from the $157,000 claim made by leftist think tanks, legal groups and media outlets. One in particular (The Daily Beast) suggested that over $100,000 dollars in \u201Cmysterious wires and checks\u201D was used personally. Reflected in our recently amended FEC reports, all of the checks and wires were accounted for with receipts and invoices, none of which were transferred to or spent by me. The mainstream media has failed to and refuses to amend their false claims.',
  },
  {
    number: '03',
    topic: 'Black Lives Matter & George Floyd',
    question: 'Were you part of BLM during the George Floyd protests?',
    answer:
      'I was never a part of the Black Lives Matter organization nor do I agree with their politics. After George Floyd died, a group of Black athletes from the Twin Cities area were disappointed with the violence and chaos breaking out in our community. In response, we decided to lead peaceful protests to help demonstrate the appropriate way to participate in our constitutionally guaranteed process of public protest. I was one of the architects and thought leaders of that organization (10K). Independent of the local Black Lives Matter organization, I led these peaceful protests, which included tens of thousands of people, that never once caused a single fire, fight, or arrest. These were the peaceful demonstrations the mainstream media didn\u2019t show. The fake news media did however profile me as a rising young Black activist, until they realized my organization wasn\u2019t in total alignment with the left\u2019s political agenda. For example, I led these protests to the Minneapolis Federal Reserve to educate people about economic policy and banking. We were also what some would consider to be staunch 2nd amendment advocates, which included citizens who exercised their open carry rights. We never had marches to any police precinct. This lie that I\u2019m a BLM protestor or rioter stems from ignorance and fear used by the media to sow division and discord. The goal is to tarnish my America First, Conservative, Populist brand and image.',
  },
  {
    number: '04',
    topic: 'Antisemitism',
    question: 'You\u2019ve been accused of being antisemitic. How do you respond?',
    answer:
      'On a number of occasions now, the mainstream media, and even certain political organizations have accused me of being Antisemitic. I reject this accusation and further, I resent it. Born and raised Christian, any inference that I hold some inherent hostility towards Jews is absurd. In fact, it is my Christian heritage that gives me confidence to speak on a culture and history of fellow brothers and sisters. As Christ said, first for the Jew, and then for the Gentile. I am, however, willing to and have continued to, talk about the prominence and danger of identity politics, to our country and to the entire world, but also to the identity groups it claims to be helping. As a Black man I understand this well, that the Black identity and Jewish identity are used in a very similar fashion. I graduated from Hopkins High School, which is one of the most Jewish communities in the state of Minnesota. I have participated in numerous orthodox Jewish rituals. My best friend and cohost at Free People Radio, Professor Penn, is a Ukrainian Jew who comes from orthodox Jewish roots. As an America 1st candidate, it is my position that NO COUNTRY will get our aid without conditions. We will stand with Israel, but we cannot fund both sides of that war, or any war for that matter.',
  },
  {
    number: '05',
    topic: 'Trump Endorsement',
    question: 'Are you endorsed by Donald Trump?',
    answer:
      'I am not Trump endorsed but would love to be and will support his bid regardless. I am endorsed by 2 candidates that are endorsed by Trump, Kari Lake and Matt Gaetz. We look forward to being a tip of the spear for the MAGA movement and will obviously accept Trump\u2019s endorsement with open arms when that time comes.',
  },
]

const TOPICS = [
  'America First',
  'Border & Immigration',
  'Second Amendment',
  'Economy',
  'Foreign Policy',
  'Education',
  'Mental Health',
  'Something Else',
]

const AskRoycePage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/ask-royce — Straight Answers"
        number="040"
        title={
          <>
            Ask Royce{' '}
            <em className="not-italic italic text-liberty">anything.</em>
          </>
        }
        lede="I wrote these answers myself to add clarity to several outstanding questions and attempts by the media to stifle this America 1st movement. There is no team of PR people or communications experts to look over and curate what I say."
      >
        <div className="flex flex-wrap gap-4">
          <BrandButton variant="primary" href="#submit">
            Submit a Question →
          </BrandButton>
          <BrandButton variant="ghost-light" href="#archive">
            Read the FAQs
          </BrandButton>
        </div>
      </PageHero>

      <section id="archive" className="relative bg-navy-900 text-moonlight py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.06]"
          style={{ top: '60px', left: '40px', fontSize: '200px' }}
        >
          041
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-gold">/041 — Frequently Asked</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                The{' '}
                <em className="not-italic italic text-liberty">most controversial</em>{' '}
                questions, answered.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-stone-200 font-light max-w-2xl">
                Most questions about my candidacy stem from personal attacks made by my
                opponents, detractors and the mainstream media. Rarely am I questioned on policy,
                which I view as the strength of my campaign.
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
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-liberty">
                        /{faq.number}
                      </span>
                    </div>
                    <p className="font-accent text-[11px] font-semibold tracking-[0.18em] uppercase text-patriot">
                      {faq.topic}
                    </p>
                  </div>

                  <div className="col-span-12 lg:col-span-9">
                    <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 mb-2">
                      Question
                    </p>
                    <p className="font-display italic font-bold text-[22px] lg:text-[26px] leading-[1.3] text-white">
                      {faq.question}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-liberty mb-3">
                        Royce&apos;s Answer
                      </p>
                      <p className="text-[16px] leading-[1.75] text-stone-200 font-light">
                        {faq.answer}
                      </p>
                    </div>
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
            <BrandButton variant="ghost-light" href="#submit">
              Ask Your Own →
            </BrandButton>
          </div>
        </div>
      </section>

      <section id="submit" className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.05]"
          style={{ top: '60px', right: '40px', fontSize: '200px' }}
        >
          042
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <p className="brand-section-label text-patriot mb-8">/042 — Submit a Question</p>

              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Feel free to reach out for further{' '}
                <em className="not-italic italic text-patriot">clarification.</em>
              </h2>

              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-md">
                Have a question not covered in the FAQs above? Send it here and Royce will
                respond as time on the trail allows. Press inquiries should go through the
                campaign&apos;s press contact.
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
                  Ask Royce
                </p>
                <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-8">
                  Your question, in your own words.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="a-first"
                      className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                    >
                      First Name
                    </label>
                    <input
                      id="a-first"
                      name="first-name"
                      type="text"
                      required
                      className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="a-city"
                      className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                    >
                      City
                    </label>
                    <input
                      id="a-city"
                      name="city"
                      type="text"
                      required
                      className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="a-email"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Email
                  </label>
                  <input
                    id="a-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="a-topic"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Topic
                  </label>
                  <select
                    id="a-topic"
                    name="topic"
                    defaultValue="America First"
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
                    htmlFor="a-question"
                    className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot"
                  >
                    Your Question
                  </label>
                  <textarea
                    id="a-question"
                    name="question"
                    rows={5}
                    required
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink leading-[1.65]"
                  />
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <BrandButton variant="primary" type="submit">
                    Send Question →
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

export default AskRoycePage
