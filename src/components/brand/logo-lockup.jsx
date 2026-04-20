import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const SIZE_CLASS = {
  xs: 'h-7 w-auto lg:h-10',
  sm: 'h-9 w-auto',
  md: 'h-12 w-auto',
  lg: 'h-16 w-auto',
}

const LogoLockup = ({ size, className }) => {
  return (
    <Link
      href="/"
      aria-label="Royce White for U.S. Senate — home"
      className={cn('inline-flex items-center min-h-11', className)}
    >
      <Image
        src="/logo-full-color-white.png"
        alt="Royce White for U.S. Senate"
        width={465}
        height={163}
        priority
        className={cn('block', SIZE_CLASS[size])}
      />
    </Link>
  )
}

LogoLockup.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  className: PropTypes.string,
}

LogoLockup.defaultProps = {
  size: 'sm',
  className: '',
}

export default LogoLockup
