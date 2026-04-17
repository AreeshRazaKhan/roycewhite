import PropTypes from 'prop-types'

const PageHero = ({ eyebrow, number, title, lede, children }) => {
  return (
    <section className="relative bg-navy-900 text-moonlight overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 brand-grid-overlay opacity-[0.04] pointer-events-none"
      />

      <span
        aria-hidden="true"
        className="absolute top-16 left-6 lg:top-20 lg:left-12 w-[56px] h-[56px] border-t-2 border-l-2 border-patriot"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-24 right-6 lg:bottom-28 lg:right-12 w-[56px] h-[56px] border-b-2 border-r-2 border-liberty"
      />

      {number ? (
        <span
          aria-hidden="true"
          className="brand-section-number hidden lg:block text-white/[0.04]"
          style={{ top: '80px', right: '80px', fontSize: '200px' }}
        >
          {number}
        </span>
      ) : null}

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-32 lg:pt-36 lg:pb-44">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9 xl:col-span-8 relative z-10">
            <p className="font-accent text-[13px] font-semibold tracking-[0.2em] uppercase text-gold mb-8 brand-section-label">
              {eyebrow}
            </p>

            <h1
              className="font-display font-black text-white leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.75rem)' }}
            >
              {title}
            </h1>

            {lede ? (
              <p className="mt-10 max-w-2xl text-[17px] leading-[1.8] text-stone-200 font-light">
                {lede}
              </p>
            ) : null}

            {children ? <div className="mt-12">{children}</div> : null}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-16 bg-parchment brand-slice-bottom"
      />
    </section>
  )
}

PageHero.propTypes = {
  eyebrow: PropTypes.node.isRequired,
  number: PropTypes.string,
  title: PropTypes.node.isRequired,
  lede: PropTypes.node,
  children: PropTypes.node,
}

PageHero.defaultProps = {
  number: '',
  lede: null,
  children: null,
}

export default PageHero
