import BrandButton from '@/components/brand/brand-button'
import PlaceholderImage from '@/components/brand/placeholder-image'

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-parchment py-24 lg:py-32 overflow-hidden">
      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-navy-900/[0.04]"
        style={{ top: '60px', left: '40px', fontSize: '200px' }}
      >
        002
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden border border-stone-200 brand-duotone">
              <PlaceholderImage
                width={720}
                height={900}
                label="Royce White"
                bg="0A1628"
                fg="EDEBE3"
                alt="Portrait placeholder — replace with Royce White on the trail"
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

              <div className="absolute top-6 right-6 text-right z-10">
                <p className="font-accent text-[10px] font-medium tracking-[0.2em] uppercase text-stone-200">
                  Portrait · MN 2026
                </p>
              </div>

              <div className="absolute bottom-6 left-6 pr-10 z-10">
                <p className="font-accent text-[10px] font-medium tracking-[0.22em] uppercase text-stone-200 mb-2">
                  The Candidate
                </p>
                <p className="font-display italic font-bold text-[28px] leading-[1.1] text-white">
                  Royce <span className="text-liberty">White.</span>
                </p>
                <p className="font-accent text-[11px] font-medium tracking-[0.18em] uppercase text-stone-200 mt-2">
                  Father · Patriot · Minnesotan
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-8 lg:pt-6">
            <p className="brand-section-label text-patriot mb-8">
              /002 — Meet Royce
            </p>

            <h2
              className="font-display font-black leading-[1.1] tracking-[-0.02em] text-navy-900"
              style={{ fontSize: 'clamp(2.25rem, 3.75vw, 3.75rem)' }}
            >
              "I'm a <em className="not-italic italic text-patriot">father.</em>{' '}
              I'm a <em className="not-italic italic text-patriot">patriot.</em>{' '}
              I'm ready to fight for the Free People of America."
            </h2>

            <div className="mt-10 space-y-6 text-[17px] leading-[1.8] text-ink/80 font-light max-w-[58ch]">
              <p>
                I was born and raised in a working-class family here in the Twin Cities. I'm a pro
                athlete in basketball and mixed martial arts. Early in my career, I went head-to-head
                with the NBA to force a mental health policy into existence when there wasn't one.
              </p>
              <p>
                Our community is at the center of a culture war — and many other wars, spiritual,
                psychological, and economic. Like communities in crisis across our country, we need
                leaders who will <span className="text-navy-900 font-medium">not sell out</span>. I'm
                going to Washington to represent Minnesota in a bigger fight: the fight for American
                citizenship.
              </p>
              <p>
                Right now we face an enemy that aims to bastardize our citizenship through an idea
                called globalism. The global affects the local. Send me to the Senate floor and I
                will continue the fight for God, Family, and Country — on the record, in the swamp.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-stone-400" />
              <span className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-ink">
                Royce White
              </span>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <BrandButton variant="navy" href="/about">
                Read the Full Story
              </BrandButton>
              <BrandButton variant="ghost" href="/ask-royce">
                Straight Answers →
              </BrandButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
