import SiteFooter from '@/components/brand/site-footer'
import SiteHeader from '@/components/brand/site-header'
import AboutSection from '@/components/home/about-section'
import CtaSection from '@/components/home/cta-section'
import EndorsementsSection from '@/components/home/endorsements-section'
import FeaturedVideoSection from '@/components/home/featured-video-section'
import FightCallout from '@/components/home/fight-callout'
import Hero from '@/components/home/hero'
import IssuesSection from '@/components/home/issues-section'
import JoinFormSection from '@/components/home/join-form-section'
import MarqueeBand from '@/components/home/marquee-band'
import SmashMouthSection from '@/components/home/smash-mouth-section'
import StatsSection from '@/components/home/stats-section'

const Home = () => {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-navy-900 focus:text-white focus:px-4 focus:py-2 focus:font-accent focus:text-[12px] focus:tracking-[0.12em] focus:uppercase"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <MarqueeBand />
        <AboutSection />
        <FeaturedVideoSection />
        <SmashMouthSection />
        <IssuesSection />
        <FightCallout />
        <StatsSection />
        <EndorsementsSection />
        <JoinFormSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default Home
