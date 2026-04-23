'use client'

import PropTypes from 'prop-types'
import { useState } from 'react'

import BrandButton from '@/components/brand/brand-button'
import FormField from '@/components/ui/form-field'
import { SMS_CONSENT_PROMO, SMS_CONSENT_UPDATES } from '@/constants/issues'
import { cn } from '@/lib/utils'
import { formatPhoneInput } from '@/lib/phone'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  smsUpdates: false,
  smsPromo: false,
}

const EventRsvpForm = ({ event }) => {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const hasPhone = values.phone.trim().length > 0

  const handleChange = (field) => (event_) => {
    const next = event_.target.type === 'checkbox' ? event_.target.checked : event_.target.value
    setValues((prev) => ({ ...prev, [field]: next }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handlePhoneChange = (event_) => {
    const formatted = formatPhoneInput(event_.target.value)
    setValues((prev) => {
      if (formatted === '') {
        return { ...prev, phone: '', smsUpdates: false, smsPromo: false }
      }
      return { ...prev, phone: formatted }
    })
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }))
    }
  }

  const validate = () => {
    const next = {}
    if (!values.firstName.trim()) next.firstName = 'First name is required'
    if (!values.lastName.trim()) next.lastName = 'Last name is required'
    if (!values.email.trim()) next.email = 'Email is required'
    else if (!EMAIL_RE.test(values.email.trim())) next.email = 'Enter a valid email address'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (formEvent) => {
    formEvent.preventDefault()
    setServerError('')
    if (!validate()) return

    setSubmitting(true)
    try {
      const response = await fetch('/api/events/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          eventName: event.title,
          eventDate: event.date,
          eventTime: event.timeStart,
          eventCategory: event.tag,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'RSVP failed. Please try again.')
      }

      setSuccess(true)
      setValues(INITIAL_VALUES)
    } catch (error) {
      console.error('[EventRsvpForm]:', error)
      setServerError(error.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="relative bg-white border border-stone-200 rounded-[4px] p-8 lg:p-10">
        <span aria-hidden="true" className="absolute top-0 left-0 w-[3px] h-16 bg-patriot" />
        <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-patriot mb-2">
          You&rsquo;re On The List
        </p>
        <p className="font-display font-extrabold text-[26px] leading-[1.15] text-navy-900 mb-4">
          See you at {event.title}.
        </p>
        <p className="font-body text-[15px] leading-[1.7] text-ink/80">
          A confirmation is on its way to your inbox. The People Are Coming!
        </p>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative bg-white border border-stone-200 rounded-[4px] p-8 lg:p-10"
    >
      <span aria-hidden="true" className="absolute top-0 left-0 w-[3px] h-16 bg-patriot" />

      <p className="font-accent text-[12px] font-semibold tracking-[0.2em] uppercase text-patriot mb-2">
        RSVP
      </p>
      <p className="font-display font-extrabold text-[26px] leading-[1.15] text-navy-900 mb-2">
        Reserve your spot.
      </p>
      <p className="font-mono text-[12px] tracking-[0.18em] uppercase text-stone-600 mb-8">
        {event.dateLabel} · {event.timeStart} – {event.timeEnd}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          id="rsvp-first-name"
          name="firstName"
          label="First Name"
          autoComplete="given-name"
          placeholder="First Name"
          required
          value={values.firstName}
          onChange={handleChange('firstName')}
          error={errors.firstName}
        />
        <FormField
          id="rsvp-last-name"
          name="lastName"
          label="Last Name"
          autoComplete="family-name"
          placeholder="Last Name"
          required
          value={values.lastName}
          onChange={handleChange('lastName')}
          error={errors.lastName}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <FormField
          id="rsvp-email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={values.email}
          onChange={handleChange('email')}
          error={errors.email}
        />
        <FormField
          id="rsvp-phone"
          name="phone"
          label="Contact Number"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          optional
          placeholder="+1 (xxx) xxx-xxxx"
          value={values.phone}
          onChange={handlePhoneChange}
        />
      </div>

      <fieldset className="mt-8 space-y-4">
        <legend className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot mb-2">
          SMS Communications
        </legend>

        {!hasPhone && (
          <p className="font-body text-[13px] italic text-stone-600">
            Enter a phone number above to opt in to SMS messages.
          </p>
        )}

        <label
          className={cn(
            'flex items-start gap-3',
            hasPhone ? 'cursor-pointer' : 'cursor-not-allowed'
          )}
        >
          <input
            type="checkbox"
            name="smsUpdates"
            checked={values.smsUpdates}
            onChange={handleChange('smsUpdates')}
            disabled={!hasPhone}
            required={hasPhone}
            className="mt-1 h-4 w-4 accent-patriot shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
          />
          <span
            className={cn(
              'text-[13px] leading-[1.6] font-light',
              hasPhone ? 'text-ink/80' : 'text-ink/40'
            )}
          >
            {SMS_CONSENT_UPDATES}
          </span>
        </label>

        <label
          className={cn(
            'flex items-start gap-3',
            hasPhone ? 'cursor-pointer' : 'cursor-not-allowed'
          )}
        >
          <input
            type="checkbox"
            name="smsPromo"
            checked={values.smsPromo}
            onChange={handleChange('smsPromo')}
            disabled={!hasPhone}
            required={hasPhone}
            className="mt-1 h-4 w-4 accent-patriot shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
          />
          <span
            className={cn(
              'text-[13px] leading-[1.6] font-light',
              hasPhone ? 'text-ink/80' : 'text-ink/40'
            )}
          >
            {SMS_CONSENT_PROMO}
          </span>
        </label>
      </fieldset>

      {serverError && (
        <p
          role="alert"
          className="mt-6 font-accent text-[12px] font-semibold tracking-[0.08em] uppercase text-red-error"
        >
          {serverError}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <BrandButton variant="primary" type="submit" disabled={submitting}>
          {submitting ? 'Reserving…' : 'Confirm RSVP →'}
        </BrandButton>
        <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-stone-600">
          The fight continues…
        </span>
      </div>
    </form>
  )
}

EventRsvpForm.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    dateLabel: PropTypes.string.isRequired,
    timeStart: PropTypes.string.isRequired,
    timeEnd: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
}

export default EventRsvpForm
