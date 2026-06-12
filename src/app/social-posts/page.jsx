import PageHero from '@/components/brand/page-hero'
import PageShell from '@/components/brand/page-shell'

export const metadata = {
  title: 'Social Posts — Royce White for Senate',
  description: 'Internal gallery of campaign social media post designs.',
  robots: { index: false, follow: false },
}

const FEED_POSTS = [
  { file: 'feed-01.html', label: 'Brand Statement' },
  { file: 'feed-02.html', label: 'Quote Card' },
  { file: 'feed-03.html', label: 'Stat Callout' },
  { file: 'feed-04.html', label: 'Announcement' },
  { file: 'feed-05.html', label: 'Event Card' },
  { file: 'feed-06.html', label: 'Listicle Teaser' },
  { file: 'feed-07.html', label: 'Hook + CTA' },
  { file: 'feed-08.html', label: 'Testimonial' },
  { file: 'feed-09.html', label: 'Tip / Educational' },
  { file: 'feed-10.html', label: 'Promo / Prestige' },
]

const STORY_POSTS = [
  { file: 'story-01.html', label: 'Smash Mouth Populism' },
  { file: 'story-02.html', label: 'Meet Royce Quote' },
  { file: 'story-03.html', label: 'National Debt Stat' },
  { file: 'story-04.html', label: 'Election Integrity' },
  { file: 'story-05.html', label: "Volunteers' Weekly Meeting" },
  { file: 'story-06.html', label: 'Eight Ways To Help' },
  { file: 'story-07.html', label: 'Who Is Fighting For You' },
  { file: 'story-08.html', label: 'The Fight Quote' },
  { file: 'story-09.html', label: 'Mental Health' },
  { file: 'story-10.html', label: 'The American Jubilee' },
]

const SocialPostsPage = () => {
  return (
    <PageShell>
      <PageHero
        eyebrow="/internal — Creative Assets"
        number="001"
        title={
          <>
            Social media <em className="not-italic italic text-liberty">post designs.</em>
          </>
        }
        lede="Every feed and story design for the campaign's social channels, rendered live from the brand system. Click any post to open it full-size — screenshot at native resolution for export."
      />

      <section className="relative bg-parchment py-14 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-12">
            <p className="brand-section-label text-patriot">/002 — Feed Posts · 1080 × 1080</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {FEED_POSTS.map((post, index) => (
              <a
                key={post.file}
                href={`/social-posts/${post.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-liberty focus-visible:outline-offset-2"
              >
                <span className="relative block aspect-square overflow-hidden rounded-[4px] border border-stone-200 bg-navy-900 transition-transform duration-300 group-hover:-translate-y-1">
                  <iframe
                    src={`/social-posts/${post.file}`}
                    title={`Feed post ${index + 1} — ${post.label}`}
                    loading="lazy"
                    scrolling="no"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full pointer-events-none"
                  />
                </span>
                <span className="mt-3 flex items-baseline gap-3">
                  <span className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot">
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-accent text-[12px] font-medium tracking-[0.12em] uppercase text-navy-900">
                    {post.label}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-20 mb-12">
            <p className="brand-section-label text-patriot">/003 — Story Posts · 1080 × 1920</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STORY_POSTS.map((post, index) => (
              <a
                key={post.file}
                href={`/social-posts/${post.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-liberty focus-visible:outline-offset-2"
              >
                <span className="relative block aspect-[9/16] overflow-hidden rounded-[4px] border border-stone-200 bg-navy-900 transition-transform duration-300 group-hover:-translate-y-1">
                  <iframe
                    src={`/social-posts/${post.file}`}
                    title={`Story post ${index + 1} — ${post.label}`}
                    loading="lazy"
                    scrolling="no"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full pointer-events-none"
                  />
                </span>
                <span className="mt-3 flex items-baseline gap-3">
                  <span className="font-accent text-[11px] font-semibold tracking-[0.14em] uppercase text-patriot">
                    /{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-accent text-[12px] font-medium tracking-[0.12em] uppercase text-navy-900">
                    {post.label}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default SocialPostsPage
