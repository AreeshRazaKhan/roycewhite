import PropTypes from 'prop-types'
import Image from 'next/image'

import { cn } from '@/lib/utils'

const buildUrl = ({ width, height, bg, fg, label }) => {
  const safeLabel = encodeURIComponent(label).replace(/%20/g, '+')
  return `https://placehold.co/${width}x${height}/${bg}/${fg}/png?text=${safeLabel}&font=playfair`
}

const PlaceholderImage = ({
  width,
  height,
  label,
  bg,
  fg,
  alt,
  className,
  priority,
  sizes,
}) => {
  const src = buildUrl({ width, height, bg, fg, label })
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={cn('block h-full w-full object-cover', className)}
    />
  )
}

PlaceholderImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  bg: PropTypes.string,
  fg: PropTypes.string,
  className: PropTypes.string,
  priority: PropTypes.bool,
  sizes: PropTypes.string,
}

PlaceholderImage.defaultProps = {
  bg: '0A1628',
  fg: 'F5F0EB',
  className: '',
  priority: false,
  sizes: '',
}

export default PlaceholderImage
