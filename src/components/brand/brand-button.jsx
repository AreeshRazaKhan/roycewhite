import PropTypes from 'prop-types'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const VARIANT_STYLES = {
  primary: 'bg-patriot text-white border-patriot hover:bg-patriot-dark',
  blue: 'bg-liberty text-navy-900 border-liberty hover:bg-liberty-light',
  navy: 'bg-navy-900 text-white border-navy-900 hover:bg-navy-800',
  ghost: 'bg-transparent text-navy-900 border-navy-900 hover:bg-navy-900 hover:text-white',
  'ghost-light':
    'bg-transparent text-moonlight border-moonlight hover:bg-moonlight hover:text-navy-900',
  gold: 'bg-gold text-navy-900 border-gold hover:bg-gold-light',
}

const BASE =
  'inline-flex items-center justify-center gap-2 font-accent text-[12px] font-semibold tracking-[0.12em] uppercase px-8 py-4 border-[1.5px] rounded-[4px] transition-[background-color,color,border-color] duration-500 ease-out min-h-[44px]'

const isExternal = (href) => /^https?:\/\//.test(href)

const BrandButton = ({
  children,
  variant = 'primary',
  href = '',
  type = 'button',
  className = '',
  ...rest
}) => {
  const classes = cn(BASE, VARIANT_STYLES[variant], className)

  if (href) {
    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={classes}
          rel="noopener noreferrer"
          target="_blank"
          {...rest}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}

BrandButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'blue', 'navy', 'ghost', 'ghost-light', 'gold']),
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
}

export default BrandButton
