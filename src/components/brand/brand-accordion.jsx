'use client'

import PropTypes from 'prop-types'
import { useId, useState } from 'react'

import { cn } from '@/lib/utils'

const AccordionItem = ({ number, title, defaultOpen, children, className }) => {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const buttonId = useId()

  return (
    <div
      className={cn(
        'group relative bg-white border border-stone-200 rounded-[4px] overflow-hidden transition-colors duration-300 ease-out',
        open && 'border-patriot/40',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-0 left-0 w-[3px] h-full bg-patriot origin-top transition-transform duration-300 ease-out motion-reduce:transition-none',
          open ? 'scale-y-100' : 'scale-y-0',
        )}
      />

      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-start gap-5 p-6 lg:p-7 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liberty focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          {number ? (
            <span className="font-accent text-[12px] font-semibold tracking-[0.14em] text-patriot pt-1 shrink-0 w-9">
              /{number}
            </span>
          ) : null}

          <span
            className={cn(
              'flex-1 font-display font-extrabold text-[20px] lg:text-[24px] leading-[1.2] text-navy-900 transition-colors duration-300 ease-out motion-reduce:transition-none',
              open && 'text-patriot',
            )}
          >
            {title}
          </span>

          <span
            aria-hidden="true"
            className={cn(
              'shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border-[1.5px] border-navy-900/20 text-navy-900 transition-[transform,color,border-color] duration-300 ease-out motion-reduce:transition-none',
              open && 'border-patriot text-patriot rotate-45',
            )}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1.5V12.5M1.5 7H12.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-6 lg:px-7 pb-8 pt-1 pl-[68px] lg:pl-[84px]">{children}</div>
        </div>
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  number: PropTypes.string,
  title: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

AccordionItem.defaultProps = {
  number: '',
  defaultOpen: false,
  className: '',
}

export default AccordionItem
