import EndorsementCard from '@/components/home/endorsement-card'

const EndorsementsSection = () => {
  return (
    <section id="endorsements" className="relative bg-parchment py-14 lg:py-32 overflow-hidden">
      <span
        aria-hidden="true"
        className="brand-section-number hidden lg:block text-navy-900/[0.04]"
        style={{ top: '50px', left: '50px', fontSize: '200px' }}
      >
        005
      </span>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="brand-section-label text-patriot">
              /005 — Endorsements
            </p>
            <h2
              className="mt-6 font-display font-black leading-[1.05] tracking-[-0.02em] text-navy-900"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
            >
              Respected by <em className="not-italic italic text-patriot">the people</em> who refuse to bow.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="text-[17px] leading-[1.8] text-ink/80 font-light">
              Royce White has earned the support of some of the most influential voices in
              American politics and culture — leaders who share the conviction that the system is
              broken and the people are done asking nicely.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <EndorsementCard
            name="Steve Bannon"
            role="National Talk Show Host"
            quote="He is a thoughtful leader for the populist movement in American politics."
            tone="navy"
            featured
            className="col-span-12 lg:col-span-8 lg:row-span-2"
          />
          <EndorsementCard
            name="Matt Gaetz"
            role="U.S. Representative"
            tone="white"
            className="col-span-12 md:col-span-6 lg:col-span-4"
          />
          <EndorsementCard
            name="Kari Lake"
            role="Candidate for AZ State Senate"
            tone="white"
            className="col-span-12 md:col-span-6 lg:col-span-4"
          />
          <EndorsementCard
            name="Jason Whitlock"
            role="National Talk Show Host"
            quote="Could you imagine if LeBron James had Royce White's balls and intellect?"
            tone="red"
            className="col-span-12 md:col-span-8 lg:col-span-5"
          />
          <EndorsementCard
            name="Mike Lindell"
            role="CEO My Pillow"
            tone="white"
            className="col-span-12 md:col-span-4 lg:col-span-3"
          />
          <EndorsementCard
            name="Alex Jones"
            role="National Talk Show Host"
            quote="Royce stood up for everybody, and against tyranny."
            tone="blue"
            className="col-span-12 lg:col-span-4"
          />
        </div>
      </div>
    </section>
  )
}

export default EndorsementsSection
