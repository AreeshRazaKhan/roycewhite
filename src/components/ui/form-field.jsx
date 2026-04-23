'use client'

import PropTypes from 'prop-types'

import { cn } from '@/lib/utils'

const LABEL_BASE =
  'font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot'

const CONTROL_BASE =
  'mt-2 w-full bg-parchment border border-stone-200 rounded-[4px] px-4 py-3 font-body text-[15px] text-ink leading-[1.5]'

const FormField = ({
  id,
  name,
  label,
  type = 'text',
  as = 'input',
  value = '',
  onChange,
  onBlur,
  required = false,
  optional = false,
  error = '',
  hint = '',
  rows = 4,
  options = [],
  placeholder = '',
  autoComplete,
  inputMode,
  pattern,
  className = '',
}) => {
  const describedBy = []
  if (hint) describedBy.push(`${id}-hint`)
  if (error) describedBy.push(`${id}-error`)

  const sharedProps = {
    id,
    name,
    value,
    onChange,
    onBlur,
    required,
    placeholder,
    autoComplete,
    inputMode,
    pattern,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined,
    className: cn(CONTROL_BASE, error && 'border-red-error'),
  }

  return (
    <div className={cn('block', className)}>
      <label htmlFor={id} className={LABEL_BASE}>
        {label}
        {optional && (
          <span className="ml-2 font-normal normal-case tracking-normal text-stone-600">
            (optional)
          </span>
        )}
      </label>

      {as === 'textarea' && <textarea {...sharedProps} rows={rows} />}

      {as === 'select' && (
        <select {...sharedProps}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {as === 'input' && <input type={type} {...sharedProps} />}

      {hint && (
        <p
          id={`${id}-hint`}
          className="mt-2 font-body text-[13px] leading-[1.5] text-stone-600"
        >
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 font-accent text-[12px] font-semibold tracking-[0.08em] uppercase text-red-error"
        >
          {error}
        </p>
      )}
    </div>
  )
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea', 'select']),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  error: PropTypes.string,
  hint: PropTypes.string,
  rows: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  inputMode: PropTypes.string,
  pattern: PropTypes.string,
  className: PropTypes.string,
}

export default FormField
