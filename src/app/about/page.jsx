import BrandButton from '@/components/brand/brand-button'
import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'
import PlaceholderImage from '@/components/brand/placeholder-image'

export const metadata = {
  title: 'About Royce — Royce White for U.S. Senate',
  description:
    'A Life of Determination. An American man fighting for freedom and liberty. Meet Royce White.',
}

const BIO_SECTIONS = [
  {
    heading: 'Staying Close to Home',
    body: 'As the son of a single mother, Royce has lived in various neighborhoods around the Twin Cities. Much of his family remained in the Rondo community, where he spent much of his time and received schooling. White excelled in basketball, and by 10th grade, he was ranked as a top 20 player for his class.',
  },
  {
    heading: 'Success At Iowa State University',
    body: "White, a standout high school basketball player, earned numerous scholarship offers from prominent Division 1 universities. In 2009, he was named Minnesota's Mr. Basketball and received All-American honors. Despite these accolades, White chose to stay local and accept a scholarship to play for the University of Minnesota Golden Gophers. However, after an incident during his first summer on campus, he reluctantly decided to transfer to Iowa State University.",
  },
  {
    heading: 'Big 12 Success',
    body: "In his sole season with the Cyclones, White led the team in points, assists, rebounds, blocks, and steals — becoming the only player in the country that year to achieve this feat and one of the few to do so in school history. He earned First-Team All-Big 12 honors, as well as spots on the Big 12 All-Rookie Team and as the Big 12 Newcomer of the Year. Additionally, he was named to the Naismith Award top-30 watchlist and made the Dean's List for academic excellence at Iowa State.",
  },
  {
    heading: 'Houston Rockets & The NBA',
    body: "After being selected as the 16th overall pick by the Houston Rockets in the NBA draft, White soon found himself at the center of a public dispute over the NBA's collective bargaining agreement (CBA), particularly concerning its lack of a comprehensive mental health policy at the time. This issue eventually escalated into a public disagreement between White and the NBA, leading him to demand that the league, representing the global corporate community, take a more proactive role in addressing mental health issues. He argued for meaningful action, not just superficial gestures through press releases, but through actual policy changes. This stance put White at odds with the NBA and the broader sports community, which he now identifies as part of the Media Industrial Complex.",
  },
  {
    heading: 'Two Championships in Canada',
    body: 'After returning to Canada, White spent two successful seasons playing professional basketball, winning championships in both years. In his first season, he earned MVP honors and set the single-season triple-double record. The following year, White clinched the scoring title but withdrew his name from MVP consideration out of respect for Canadian basketball icon Carl English, who had come out of retirement to play in Newfoundland.',
  },
  {
    heading: 'Big 3 Basketball',
    body: "After leaving Canada, Royce played in The BIG 3 basketball tournament, a professional 3-on-3 league founded by Ice Cube and Jeff Kwatinetz. He continues to serve as Co-Captain on team Power, alongside Captain Cuttino Mobley and Head Coach Nancy Lieberman. In the 2019 BIG 3 draft, White was selected as the number one pick. At the draft, he wore a shirt that read \u201CI Flew Here,\u201D mocking the mainstream media's narrative that he had been exiled from the NBA due to his well-known fear of flying. The viral clip debunked this narrative. In 2020, during the George Floyd protests in Minneapolis, White once again made headlines. He led several peaceful demonstrations throughout the city, speaking out against corporatocracy and staging die-ins at institutions like the Federal Reserve.",
  },
  {
    heading: 'Leading A Community',
    body: "In 2021, the BIG 3 basketball league resumed play after the COVID-19 lockdowns had forced the cancellation of their 2020 season. During the opening week, Royce appeared at a game wearing a t-shirt that read \u201CFree The Uyghurs,\u201D and in a post-game interview he called for the release of 2 million Uyghurs from concentration camps. As the season progressed, White continued to speak out on a range of controversial topics, including gain-of-function research, the Federal Reserve, Julian Assange, Edward Snowden, and the \u201CGreat Reset\u201D conspiracy theory. Outside of the BIG 3, White also made his professional MMA debut in 2021, making him the only active athlete competing professionally in both basketball and mixed martial arts.",
  },
]

const PRINCIPLES = [
  {
    number: '01',
    title: 'God',
    body: 'Faith and the fruits of faith are the way our Free People have traditionally increased their health. We are one people, under God, indivisible, with liberty and justice for all.',
  },
  {
    number: '02',
    title: 'Family',
    body: 'The decisions which govern life and death are made by individual human persons. The choice to follow one\u2019s faith in God is of at least equal value to following the advice of one\u2019s doctor.',
  },
  {
    number: '03',
    title: 'Country',
    body: 'I love my nation, the United States of America. I seek, by all peaceful and legitimate means, the increased value of every American\u2019s citizenship.',
  },
]

const AboutPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/about — A Life of Determination"
        number="010"
        title={
          <>
            An American man fighting for{' '}
            <em className="not-italic italic text-liberty">freedom and liberty.</em>
          </>
        }
        lede="Royce White was born and raised in the Twin Cities. A native to the Rondo community of St. Paul, he started playing sports at the age of 5. By age 9, he was playing basketball on the Northside of Minneapolis. This is the story behind the success."
      >
        <div className="flex flex-wrap gap-4">
          <BrandButton variant="primary" href="/volunteer">
            Join Us →
          </BrandButton>
          <BrandButton variant="ghost-light" href="/contact">
            Get In Touch
          </BrandButton>
        </div>
      </PageHero>

      <section className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-navy-900/[0.04]"
          style={{ top: '60px', right: '40px', fontSize: '200px' }}
        >
          011
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden border border-stone-200 brand-duotone">
                <PlaceholderImage
                  width={720}
                  height={900}
                  label="Royce White"
                  bg="0A1628"
                  fg="EDEBE3"
                  alt="Portrait placeholder — replace with Royce on the trail"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-5 w-[44px] h-[44px] border-t-2 border-l-2 border-patriot z-10"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 w-[44px] h-[44px] border-b-2 border-r-2 border-liberty z-10"
                />
                <div className="absolute bottom-6 left-6 pr-10 z-10">
                  <p className="font-accent text-[10px] font-medium tracking-[0.22em] uppercase text-stone-200 mb-2">
                    The Candidate
                  </p>
                  <p className="font-display italic font-bold text-[28px] leading-[1.1] text-white">
                    Royce <span className="text-liberty">White.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pl-4 lg:pt-2">
              <p className="brand-section-label text-patriot mb-8">/011 — The Story Behind The Success</p>

              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                Royce is a{' '}
                <em className="not-italic italic text-patriot">Leader.</em>
              </h2>

              <p className="mt-10 text-[17px] leading-[1.8] text-ink/80 font-light max-w-[58ch]">
                My name is Royce White. I&apos;m a father and a patriot. I&apos;m ready to fight
                for the Free People of America. I was born and raised in a working-class family
                here in the Twin Cities. Currently, I am a pro athlete in both basketball and
                mixed martial arts. Early in my career as a professional athlete, I fought
                against the NBA to create a mental health policy when there wasn&apos;t one.
              </p>

              <p className="mt-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-[58ch]">
                Our community finds itself at the center of a culture war, amongst many other
                forms of warfare including spiritual, psychological, and economic. Like many
                communities in crisis across our country, we need leaders who will not sell out.
                I&apos;m going to represent the people of Minnesota in a bigger fight for
                American citizenship.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-stone-400" />
                <span className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-ink">
                  Royce White
                </span>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <BrandButton variant="primary" href="/volunteer">
                  Join the Movement →
                </BrandButton>
                <BrandButton variant="ghost" href="/ask-royce">
                  Straight Answers →
                </BrandButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 text-moonlight py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
        />
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-patriot/[0.06]"
          style={{ top: '60px', left: '40px', fontSize: '200px' }}
        >
          012
        </span>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-gold">/012 — First Principles</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-white"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
              >
                God ·{' '}
                <em className="not-italic italic text-liberty">Family</em> · Country.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-stone-200 font-light max-w-2xl">
                We must begin to understand how the global affects the local and take a stand for
                God, Family, and Country.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {PRINCIPLES.map((p) => (
              <article
                key={p.number}
                className="col-span-12 md:col-span-6 lg:col-span-4 relative bg-navy-800 border border-white/5 rounded-[4px] p-10 lg:p-12 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-14 bg-patriot"
                />
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-liberty mb-8">
                  <span className="font-accent text-[12px] font-semibold tracking-[0.1em] uppercase text-liberty">
                    /{p.number}
                  </span>
                </span>
                <h3 className="font-display font-extrabold text-[28px] leading-[1.15] text-white">
                  {p.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.7] text-stone-200 font-light max-w-[38ch]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 brand-grid-overlay-light opacity-60 pointer-events-none"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4">
              <p className="brand-section-label text-patriot">/013 — A Life of Achievement</p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2
                className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
                style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.5rem)' }}
              >
                From the Rondo community to the{' '}
                <em className="not-italic italic text-patriot">BIG 3</em> — and everywhere in between.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-10">
            {BIO_SECTIONS.map((section, idx) => (
              <article
                key={section.heading}
                className="col-span-12 md:col-span-6 relative bg-white border border-stone-200 rounded-[4px] p-8 lg:p-10 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-[3px] h-12 bg-patriot"
                />
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-patriot mb-3">
                  /{String(idx + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display font-extrabold text-[24px] lg:text-[28px] leading-[1.2] text-navy-900">
                  {section.heading}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.75] text-ink/80 font-light">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 text-moonlight py-20 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
          <p className="brand-section-label text-gold justify-center mb-6 inline-flex">
            /014 — The Fight Continues…
          </p>
          <h2
            className="font-display font-black leading-[1.05] tracking-[-0.02em] text-white mx-auto max-w-4xl"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 4rem)' }}
          >
            The people are{' '}
            <em className="not-italic italic text-liberty">coming.</em>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <BrandButton variant="primary" href="/volunteer">
              Join the Movement →
            </BrandButton>
            <BrandButton variant="ghost-light" href="/contact">
              Get In Touch
            </BrandButton>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default AboutPage
