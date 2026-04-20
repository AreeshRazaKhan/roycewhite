import PropTypes from 'prop-types'

import { cn } from '@/lib/utils'

const IssueCard = ({ number, title, body, pullQuote, stat, featured, className }) => {
  return (
    <article
      className={cn(
        'group relative bg-white border border-stone-200 rounded-[4px] p-10 lg:p-12 overflow-hidden transition-colors duration-700 ease-out',
        'hover:bg-navy-900 hover:border-navy-900',
        featured && 'lg:p-14 flex flex-col',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-[3px] h-12 bg-patriot"
      />

      <div className="flex items-center gap-3 mb-8">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-navy-900 transition-colors duration-700 ease-out group-hover:border-liberty">
          <span className="font-accent text-[12px] font-semibold tracking-[0.1em] uppercase text-patriot transition-colors duration-700 ease-out group-hover:text-liberty">
            /{number}
          </span>
        </span>
      </div>

      <h3
        className={cn(
          'font-display font-extrabold text-navy-900 group-hover:text-white transition-colors duration-700 ease-out',
          featured ? 'text-[28px] lg:text-[34px] leading-[1.15]' : 'text-[22px] leading-[1.25]',
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          'font-body leading-[1.65] text-ink/80 group-hover:text-stone-200 transition-colors duration-700 ease-out',
          featured ? 'text-[16px] mt-5 max-w-[48ch]' : 'text-[14px] mt-3 text-stone-600',
        )}
      >
        {body}
      </p>

      {featured && (
        <span className="mt-8 inline-flex items-center gap-2 font-accent text-[12px] font-semibold tracking-[0.18em] uppercase text-patriot group-hover:text-liberty transition-colors duration-700 ease-out">
          Read Position →
        </span>
      )}

      {featured && pullQuote && (
        <div className="mt-auto pt-10">
          <div className="relative border-t border-stone-200 group-hover:border-white/10 transition-colors duration-700 ease-out pt-8">
            <span
              aria-hidden="true"
              className="absolute -top-px left-0 w-16 h-[2px] bg-patriot"
            />
            <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-patriot group-hover:text-liberty transition-colors duration-700 ease-out">
              Defining Question
            </p>
            <blockquote className="mt-5 font-display italic font-bold leading-[1.15] tracking-[-0.01em] text-[28px] lg:text-[34px] text-navy-900 group-hover:text-white transition-colors duration-700 ease-out max-w-[24ch]">
              {pullQuote}
            </blockquote>
            {stat && (
              <div className="mt-8 flex items-end gap-6 border-t border-stone-200 group-hover:border-white/10 transition-colors duration-700 ease-out pt-5">
                <div>
                  <p className="font-display font-black text-[56px] leading-none tracking-[-0.04em] text-navy-900 group-hover:text-white transition-colors duration-700 ease-out">
                    {stat.value}
                  </p>
                </div>
                <p className="font-accent text-[12px] font-medium tracking-[0.14em] uppercase text-ink/70 group-hover:text-stone-200 transition-colors duration-700 ease-out pb-2 max-w-[20ch]">
                  {stat.label}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

IssueCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  pullQuote: PropTypes.string,
  stat: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  featured: PropTypes.bool,
  className: PropTypes.string,
}

IssueCard.defaultProps = {
  pullQuote: '',
  stat: null,
  featured: false,
  className: '',
}

export default IssueCard
