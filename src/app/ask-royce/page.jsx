'use client'

import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

const PAST_QUESTIONS = [
  {
    number: '01',
    topic: 'Foreign Policy',
    date: 'MAR 14, 2026',
    asker: 'Dave L., Brainerd',
    question:
      'Would you vote against another blank check to Ukraine?',
    answer:
      'Yes — without hesitation. Not one more dollar until Congress audits what we\'ve already sent, and not one more weapons system until Americans know the terms of the deal. Peace through sovereignty means we stop writing checks we don\'t read.',
  },
  {
    number: '02',
    topic: 'Second Amendment',
    date: 'MAR 08, 2026',
    asker: 'Jenna R., Moorhead',
    question:
      'Where do you stand on red flag laws?',
    answer:
      'Against. Due process is not a suggestion. You don\'t take a citizen\'s rights on the basis of a phone call and a check-box — and any "temporary" expansion of state power over private property becomes permanent. The Second Amendment is not up for renegotiation.',
  },
  {
    number: '03',
    topic: 'Big Tech',
    date: 'FEB 28, 2026',
    asker: 'Marcus T., St. Cloud',
    question:
      'Do platforms like YouTube and X owe Americans free speech?',
    answer:
      'Yes — when they\'ve become the public square. The solution isn\'t nationalization, it\'s breaking the carve-outs Congress handed them. Section 230 was written for a world that no longer exists. I\'ll vote to put it back in the hands of the people it was supposed to protect.',
  },
  {
    number: '04',
    topic: 'Parents\' Rights',
    date: 'FEB 19, 2026',
    asker: 'Linda K., Rochester',
    question:
      'What will you do about what\'s being taught to our kids?',
    answer:
      'Parents lead. Schools serve. Anything else is backwards. Federal funds go with transparency strings attached — curriculum visibility, teacher accountability, and a clear line between education and ideology. If a district won\'t publish what it\'s teaching, it shouldn\'t receive a federal dime.',
  },
  {
    number: '05',
    topic: 'Fentanyl & the Border',
    date: 'FEB 11, 2026',
    asker: 'Officer C., Duluth',
    question:
      'Minnesota is losing people to fentanyl every week. What\'s the plan?',
    answer:
      'Close the border, then classify the cartels as foreign terrorist organizations. You can\'t treat an open pipeline like a domestic supply problem. I\'ll co-sponsor the designation, vote for full funding of interdiction, and back every sheriff who\'s been left holding the bag.',
  },
]

const TOPICS = [
  'America First',
  'Border & Immigration',
  'Second Amendment',
  'Parents & Family',
  'Foreign Policy',
  'Economy',
  'Big Tech',
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
        lede="No focus groups. No consultants. Submit a question and Royce answers on the record — with his name and yours. We publish the ones that sharpen the record."
      >
        <div className="flex flex-wrap gap-4">
          <BrandButton variant="primary" href="#submit">
            Submit a Question →
          </BrandButton>
          <BrandButton variant="ghost-light" href="#archive">
            Read the Archive
          </BrandButton>
        </div>
      </PageHero>

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
          041
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <p className="brand-section-label text-patriot mb-8">/041 — The Rules</p>

              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                One question.{' '}
                <em className="not-italic italic text-patriot">One answer.</em>{' '}
                On the record.
              </h2>

              <ul className="mt-10 space-y-5 text-[16px] leading-[1.7] text-ink/80 font-light max-w-md">
                <li className="flex gap-4">
                  <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-patriot w-8 shrink-0 mt-1">
                    01
                  </span>
                  <span>
                    Published Q&amp;A uses first names, last initial, and your city. No addresses,
                    no phone numbers, no contact info.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-patriot w-8 shrink-0 mt-1">
                    02
                  </span>
                  <span>
                    We can&apos;t publish every question. We publish the ones that clarify
                    Royce&apos;s position — or that Minnesotans are asking most.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[12px] tracking-[0.14em] uppercase text-patriot w-8 shrink-0 mt-1">
                    03
                  </span>
                  <span>
                    Press inquiries go to{' '}
                    <a
                      href="mailto:press@roycewhite.us"
                      className="text-navy-900 font-medium hover:text-patriot"
                    >
                      press@roycewhite.us
                    </a>
                    . Short questions only — under 400 characters.
                  </span>
                </li>
              </ul>

              <div className="mt-10 p-6 bg-navy-900 text-moonlight rounded-[4px] border-l-4 border-patriot max-w-md">
                <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-liberty mb-3">
                  On the Record
                </p>
                <p className="font-display italic font-bold text-[18px] leading-[1.35] text-white">
                  &ldquo;If I won&apos;t answer it under my own name, I shouldn&apos;t be asking
                  for your vote.&rdquo;
                </p>
                <p className="mt-4 font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400">
                  — Royce White
                </p>
              </div>
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
                    Email (kept private)
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
                    Your Question <span className="text-stone-600">(max 400 chars)</span>
                  </label>
                  <textarea
                    id="a-question"
                    name="question"
                    rows={5}
                    maxLength={400}
                    required
                    className="mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink leading-[1.65]"
                  />
                </div>

                <label className="mt-6 flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="publish-consent"
                    required
                    className="mt-1 h-4 w-4 accent-patriot"
                  />
                  <span className="text-[13px] leading-[1.6] text-ink/80 font-light">
                    I consent to having my first name, last initial, and city published
                    alongside Royce&apos;s answer.
                  </span>
                </label>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <BrandButton variant="primary" type="submit">
                    Send Question →
                  </BrandButton>
                  <span className="font-mono text-[11px] tracking-[0.05em] uppercase text-stone-600">
                    Answered on the record
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

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
          042
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-gold">/042 — The Archive</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                Past questions.{' '}
                <em className="not-italic italic text-liberty">Full answers.</em>
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {PAST_QUESTIONS.map((q) => (
              <article
                key={q.number}
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
                        /{q.number}
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-stone-400">
                        {q.date}
                      </span>
                    </div>
                    <p className="font-accent text-[11px] font-semibold tracking-[0.18em] uppercase text-patriot">
                      {q.topic}
                    </p>
                    <p className="mt-4 font-mono text-[12px] tracking-[0.06em] text-stone-400">
                      — {q.asker}
                    </p>
                  </div>

                  <div className="col-span-12 lg:col-span-9">
                    <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 mb-2">
                      Question
                    </p>
                    <blockquote className="font-display italic font-bold text-[22px] lg:text-[26px] leading-[1.3] text-white">
                      {q.question}
                    </blockquote>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="font-accent text-[11px] font-semibold tracking-[0.2em] uppercase text-liberty mb-3">
                        Royce&apos;s Answer
                      </p>
                      <p className="text-[16px] leading-[1.75] text-stone-200 font-light max-w-[68ch]">
                        {q.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <BrandButton variant="ghost-light" href="#submit">
              Submit Your Own →
            </BrandButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default AskRoycePage
