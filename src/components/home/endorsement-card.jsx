import PropTypes from 'prop-types'

import { cn } from '@/lib/utils'

const TONE_CLASS = {
  navy: 'brand-tone-navy text-moonlight border-white/10',
  red: 'brand-tone-red text-moonlight border-white/10',
  blue: 'brand-tone-blue text-moonlight border-white/10',
  white: 'bg-white text-navy-900 border-stone-200',
}

const EndorsementCard = ({
  name,
  role,
  quote,
  tone,
  featured,
  className,
}) => {
  const isDark = tone !== 'white'
  return (
    <article
      className={cn(
        'relative rounded-[4px] border overflow-hidden brand-photo-hatch',
        TONE_CLASS[tone],
        featured ? 'p-10 lg:p-14' : 'p-8 lg:p-10',
        className,
      )}
    >
      {featured && (
        <>
          <span
            aria-hidden="true"
            className="absolute top-5 left-5 w-[44px] h-[44px] border-t-2 border-l-2 border-patriot"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-5 right-5 w-[44px] h-[44px] border-b-2 border-r-2 border-liberty"
          />
        </>
      )}

      {quote && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute top-6 right-8 font-display font-black leading-none select-none pointer-events-none',
            isDark ? 'text-liberty/30' : 'text-patriot/20',
            featured ? 'text-[140px]' : 'text-[100px]',
          )}
        >
          "
        </span>
      )}

      <div className="relative">
        <p
          className={cn(
            'font-accent font-semibold tracking-[0.18em] uppercase',
            isDark ? 'text-liberty' : 'text-patriot',
            featured ? 'text-[12px] mb-6' : 'text-[12px] mb-4',
          )}
        >
          Endorsement
        </p>

        {quote && (
          <p
            className={cn(
              'font-display italic font-bold leading-[1.25]',
              isDark ? 'text-white' : 'text-navy-900',
              featured ? 'text-[26px] lg:text-[32px]' : 'text-[18px]',
            )}
          >
            {quote}
          </p>
        )}

        <div className={cn('flex items-center gap-3', quote ? 'mt-8' : 'mt-0')}>
          <span
            className={cn('h-[1px] w-8', isDark ? 'bg-stone-400' : 'bg-stone-400')}
          />
          <div>
            <p
              className={cn(
                'font-display font-extrabold leading-none',
                isDark ? 'text-white' : 'text-navy-900',
                featured ? 'text-[20px]' : 'text-[18px]',
              )}
            >
              {name}
            </p>
            <p
              className={cn(
                'font-accent font-medium tracking-[0.18em] uppercase mt-2',
                isDark ? 'text-stone-200' : 'text-stone-600',
                'text-[12px]',
              )}
            >
              {role}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

EndorsementCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  quote: PropTypes.string,
  tone: PropTypes.oneOf(['navy', 'red', 'blue', 'white']),
  featured: PropTypes.bool,
  className: PropTypes.string,
}

EndorsementCard.defaultProps = {
  quote: '',
  tone: 'white',
  featured: false,
  className: '',
}

export default EndorsementCard
