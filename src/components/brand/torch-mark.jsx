import PropTypes from 'prop-types'

import { cn } from '@/lib/utils'

const TorchMark = ({ size, className, title }) => {
  const decorative = !title
  const height = Math.round((size * 350) / 200)
  return (
    <svg
      viewBox="0 0 200 350"
      width={size}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'img'}
      aria-label={title || undefined}
      className={cn('shrink-0', className)}
    >
      <path
        d="M100 20 C90 60,70 80,75 120 C78 140,90 150,100 155 C110 150,122 140,125 120 C130 80,110 60,100 20Z"
        fill="#D42027"
      />
      <path
        d="M100 50 C95 75,82 90,85 120 C87 135,95 145,100 148 C105 145,113 135,115 120 C118 90,105 75,100 50Z"
        fill="#D42027"
        opacity=".6"
      />
      <rect x="85" y="160" width="30" height="12" rx="3" fill="#29ABE2" />
      <rect x="88" y="175" width="24" height="8" rx="2" fill="#29ABE2" />
      <polygon points="92,185 108,185 104,260 96,260" fill="#29ABE2" />
    </svg>
  )
}

TorchMark.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
}

TorchMark.defaultProps = {
  size: 40,
  className: '',
  title: '',
}

export default TorchMark
