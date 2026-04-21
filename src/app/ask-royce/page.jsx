'use client'

import AccordionItem from '@/components/brand/brand-accordion'
import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

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

const FIGHTING_ISSUES = [
  {
    number: '01',
    title: 'Public Safety',
    body: [
      'Public safety and economy, public safety and education, and public safety and mental health are all “which comes first, the chicken or the egg” propositions. I believe in a set of legislative initiatives that approaches economic, education, and mental health issues in novel and holistic ways, which empowers individuals while shrinking the size and scope of an administrative state that has become overly burdensome and unnecessarily large. I reject the notion that crime is either acceptable or a necessary part of the community’s life. Our police are tasked with the most difficult of society’s assignments, and their pay is not equal to the skills necessary to protect both the victim and the victimizer. Our Constitution demands that the rights of the minority are protected – and who among us is more a minority than those who suffer from addiction, mental health, and the scourge of poverty disorders? As your Senator, I will fight for the necessary funding and training so that our police become the pride of our community.',
    ],
  },
  {
    number: '02',
    title: 'Economy (Globalism)',
    body: [
      'As an NBA player, I experienced first-hand the operation of a globalized media, merchandising, and sports entertainment company that cared for its employees as a master managed a slave. Only in this case, riches and stardom replaced the whip to maintain discipline and compliance. I reject the “you’ll be happy and own nothing” mantra of the globalists as “slavery 2.0”. What is globalism? It is the international merger of the military, media, and medical global industries, big tech, and the global banks into a system of authoritarian control that enslaves the free people and destroys the independent family-owned businesses that traditionally have been the backbone of the USA economy.',
      'Solutions to problems require resolute honesty and bravery. With all due respect to our Chinese brothers and sisters, as your Senator, I will, on my first day in office, introduce legislation that will encourage the on-shoring of all our imported supplies purchased from Chinese-owned companies producing in China or anywhere else in the world. I do not intend this as an act of war; rather, I intend this act as the “truth shall set you free.”',
      'Only with good jobs available to all can we defeat the globalists and restore our national honor and pride in the dignity of work performed within our national borders. My legislation will include federal loan guarantees for the construction of production facilities for strategic goods. My policy will favor family-owned independent businesses. The three-card monte was that “I,” the consumer, benefited from low prices, but now, we have killed a large percentage of our manufacturing jobs, and 97% of antibiotics consumed here at home are imported from China. Enough!',
    ],
  },
  {
    number: '03',
    title: 'The Chinese Communist Party',
    body: [
      'I want to make a big distinction between the Chinese Communist Party and the Chinese people. I also believe that a people’s government reflects the will of the people. There is little today to be proud of as regards the actions of my own government, so my efforts in the Senate will be to rally an effort to CLEAN HOUSE here at home – replacing rampant corruption with sacred honor at every level of governance by the will of the Free People of America. This is a special time in our national history, and I demand from myself the kind of change that restores moral values. Valuing our Nation will naturally diminish the intentionally corrupting influences of the CCP, and bringing our vital manufactured supply home will reduce conflict with China. I promote peace, truth, and justice as the bedrock of our shared American experience.',
    ],
  },
  {
    number: '04',
    title: 'Immigration & Citizenship',
    body: [
      'I love my nation, the United States of America. Globalists seek to dominate or destroy all nations through the international merger of the military, media, and medical global industries, big tech, and the global banks – into a system of authoritarian control. Open borders and the value of my citizenship are intentionally in conflict. I seek, by all peaceful and legitimate means, the increased value of every American’s citizenship.',
    ],
  },
  {
    number: '05',
    title: 'Mandates',
    body: [
      'I believe that the decisions which govern life and death are made by individual human persons, and that the choice to follow one’s faith in God is of at least equal value to following the advice of one’s doctor. We are a free people, and I will not forget the globalist COVID-19 power grab attempt to snatch away freedom. Elect me to Senator, and I will be part of the effort to hold those responsible for the COVID-19 deceit accountable.',
    ],
  },
  {
    number: '06',
    title: 'Censorship',
    body: [
      'I know there are some readers who are shocked to read that there is a COVID-19 power grab and deceit. That’s only because the media is in on it; part of the globalist scam, skillfully suppressing the truth. I am in search of truth and lifting of the veil of censorship. The big tech and social media companies have damaged our nation’s spirit – and therefore, they must be broken up by using anti-trust laws created for just such a condition as we face today. We have faced this evil down as a Free People before with great success, and We, the People, will succeed together once again.',
    ],
  },
  {
    number: '07',
    title: 'Mental Health',
    body: [
      'Only the truth can relieve my anxiety. Faith and the fruits of faith are the way our Free People have traditionally increased their health. For the last fifty years, we have experimented with our freedoms, squandered our safety, and moved far from the spiritual world of our parents and grandparents. Our world is dominated by materialism. This entire experiment has been an abject failure. The explosion of mental health issues is the evidence of this failure. A life of meaning is available to all Free People here in America – and I say this both as a sufferer and as your potential Senator. We must create it together, and this is an act of our combined will as much as any policy or procedure. We are a community; we are united by the ideas that we hold in common. We are one people, under God, indivisible, with liberty and justice for all.',
    ],
  },
  {
    number: '08',
    title: 'Education',
    body: [
      'I have teachers that I remember with deep appreciation. But to be honest is to admit there are a lot of bad teachers and that there are also teachers that are bad. This is not an accident, as the globalists have very intentionally devoted their resources to controlling our education system – because they know who teaches the children and what the children are taught can control the ideas of the future. As your Senator, I will develop and introduce legislation that increases academic diversity and holds teachers accountable for their performance at every level of education. I know the teachers’ unions will fight me, and when this happens, it will be because they know that I am not in on their scam, like so many other professional politicians that the unions hold in their pockets. Much like the police, quality teachers need higher compensation and better training. The course curriculum that I sponsor will highlight the evidence of our American Exceptionalism, as well as taking ownership of the full weight of our shared history. And that history is made every day, so by ending our current submission to moral hazards of all kinds and restoring our national honor in all things, the education of our youth will be restored, just as good fruits come from healthy soil.',
    ],
  },
]

const VALUES = [
  {
    number: '01',
    title: 'Small Government',
    body: 'The size of the federal government undermines the meaning of community and the value of citizenship. A level of self-governance must be restored to make this country strong again.',
  },
  {
    number: '02',
    title: 'Pro-Life',
    body: 'As a moral and spiritual matter, I believe that life starts at conception. I defer to the judgment of legal scholars & experts of sending back to the states.',
  },
  {
    number: '03',
    title: 'Pro 2A',
    body: 'The 2nd Amendment is a constitutional right that can never be infringed upon. It is one of the most important political mechanisms to safeguard the freedoms of citizens in this country.',
  },
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
          <BrandButton variant="ghost-light" href="/faqs">
            Read the FAQs
          </BrandButton>
        </div>
      </PageHero>

      <section
        id="values"
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
          041
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-gold">/041 — American Values</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                The principles{' '}
                <em className="not-italic italic text-liberty">that do not move.</em>
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-stone-200 font-light max-w-2xl">
                Before policy comes principle. These are the values I carry into every question,
                every vote, every fight.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {VALUES.map((v) => (
              <article
                key={v.number}
                className="col-span-12 md:col-span-6 lg:col-span-4 relative bg-navy-800 border border-white/5 rounded-[4px] p-8 lg:p-10 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-12 h-[3px] bg-patriot"
                />

                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-white/30 font-accent text-[12px] font-semibold tracking-[0.1em] text-patriot mb-5"
                >
                  /{v.number}
                </span>

                <h3 className="font-display font-extrabold text-[22px] lg:text-[26px] leading-[1.2] text-white">
                  {v.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-stone-200 font-light">
                  {v.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-14 text-center font-accent text-[12px] font-semibold tracking-[0.24em] uppercase text-liberty">
            <span aria-hidden="true" className="inline-block align-middle w-10 h-px bg-liberty/60 mr-4" />
            We The People Are The Power
            <span aria-hidden="true" className="inline-block align-middle w-10 h-px bg-liberty/60 ml-4" />
          </p>
        </div>
      </section>

      <section
        id="fighting-issues"
        className="relative bg-parchment py-14 lg:py-32 overflow-hidden"
      >
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
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-patriot">/042 — Issues We Are Fighting For</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                We will fight{' '}
                <em className="not-italic italic text-patriot">and we will win.</em>
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-2xl">
                Eight fights that can&apos;t wait. Open any item below to read Royce&apos;s
                position in his own words.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {FIGHTING_ISSUES.map((issue) => (
              <AccordionItem key={issue.number} number={issue.number} title={issue.title}>
                <div className="space-y-4">
                  {issue.body.map((p, idx) => (
                    <p
                      // eslint-disable-next-line react/no-array-index-key
                      key={idx}
                      className="text-[15px] lg:text-[16px] leading-[1.75] text-ink/85 font-light"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section id="submit" className="relative bg-parchment py-14 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.05]"
          style={{ top: '60px', right: '40px', fontSize: '200px' }}
        >
          043
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <p className="brand-section-label text-patriot mb-8">/043 — Submit a Question</p>

              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Feel free to reach out for further{' '}
                <em className="not-italic italic text-patriot">clarification.</em>
              </h2>

              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-md">
                Have a question not covered in the{' '}
                <a href="/faqs" className="text-patriot underline underline-offset-4 hover:text-patriot-dark">
                  FAQs
                </a>
                ? Send it here and Royce will respond as time on the trail allows. Press inquiries
                should go through the campaign&apos;s press contact.
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

                <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-patriot mb-2">
                  Ask Royce
                </p>
                <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-8">
                  Your question, in your own words.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="a-first"
                      className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot"
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
                      className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot"
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
                    className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot"
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
                    className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot"
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
                    className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot"
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
                  <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-stone-600">
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
