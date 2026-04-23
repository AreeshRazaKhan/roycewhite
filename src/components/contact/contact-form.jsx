'use client'

import { useState } from 'react'

import BrandButton from '@/components/brand/brand-button'
import FormField from '@/components/ui/form-field'
import { SMS_CONSENT_PROMO, SMS_CONSENT_UPDATES } from '@/constants/issues'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  smsUpdates: false,
  smsPromo: false,
}

const ContactForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const handleChange = (field) => (event) => {
    const next = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setValues((prev) => ({ ...prev, [field]: next }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const next = {}
    if (!values.firstName.trim()) next.firstName = 'First name is required'
    if (!values.lastName.trim()) next.lastName = 'Last name is required'
    if (!values.email.trim()) next.email = 'Email is required'
    else if (!EMAIL_RE.test(values.email.trim())) next.email = 'Enter a valid email address'
    if (!values.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setServerError('')
    if (!validate()) return

    setSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Submission failed. Please try again.')
      }

      setSuccess(true)
      setValues(INITIAL_VALUES)
    } catch (error) {
      console.error('[ContactForm]:', error)
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
          Message Sent
        </p>
        <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-4">
          Thank you. The campaign will be in touch.
        </p>
        <p className="font-body text-[15px] leading-[1.7] text-ink/80">
          We received your note and will respond as time on the trail allows. The People Are Coming!
        </p>
        <div className="mt-8">
          <BrandButton variant="ghost" onClick={() => setSuccess(false)} type="button">
            Send Another →
          </BrandButton>
        </div>
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
        Send a Message
      </p>
      <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-8">
        Tell us how you can participate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          id="contact-first-name"
          name="firstName"
          label="First Name"
          autoComplete="given-name"
          required
          value={values.firstName}
          onChange={handleChange('firstName')}
          error={errors.firstName}
        />
        <FormField
          id="contact-last-name"
          name="lastName"
          label="Last Name"
          autoComplete="family-name"
          required
          value={values.lastName}
          onChange={handleChange('lastName')}
          error={errors.lastName}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <FormField
          id="contact-email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={handleChange('email')}
          error={errors.email}
        />
        <FormField
          id="contact-phone"
          name="phone"
          label="Mobile Phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          optional
          value={values.phone}
          onChange={handleChange('phone')}
          error={errors.phone}
        />
      </div>

      <div className="mt-4">
        <FormField
          id="contact-message"
          name="message"
          label="Your Message"
          as="textarea"
          rows={5}
          required
          value={values.message}
          onChange={handleChange('message')}
          error={errors.message}
        />
      </div>

      <fieldset className="mt-8 space-y-4">
        <legend className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot mb-2">
          SMS Communications
        </legend>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="smsUpdates"
            checked={values.smsUpdates}
            onChange={handleChange('smsUpdates')}
            className="mt-1 h-4 w-4 accent-patriot shrink-0"
          />
          <span className="text-[13px] leading-[1.6] text-ink/80 font-light">
            {SMS_CONSENT_UPDATES}
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="smsPromo"
            checked={values.smsPromo}
            onChange={handleChange('smsPromo')}
            className="mt-1 h-4 w-4 accent-patriot shrink-0"
          />
          <span className="text-[13px] leading-[1.6] text-ink/80 font-light">
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
          {submitting ? 'Sending…' : 'Send Message →'}
        </BrandButton>
        <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-stone-600">
          The fight continues…
        </span>
      </div>
    </form>
  )
}

export default ContactForm
