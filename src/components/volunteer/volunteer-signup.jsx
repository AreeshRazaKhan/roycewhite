'use client'

import { useState } from 'react'

import BrandButton from '@/components/brand/brand-button'
import FormField from '@/components/ui/form-field'
import { MN_COUNTIES, MN_REGIONS } from '@/constants/minnesota'
import {
  SMS_CONSENT_PROMO,
  SMS_CONSENT_UPDATES,
  VOLUNTEER_AVAILABILITY,
  VOLUNTEER_EXPERIENCE,
  VOLUNTEER_HELP_OPTIONS,
} from '@/constants/issues'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  zipCode: '',
  county: '',
  region: '',
  registeredVoter: '',
  campaignExperience: '',
  helpOptions: [],
  availability: '',
  issues: '',
  anythingElse: '',
  smsUpdates: false,
  smsPromo: false,
}

const toOption = (value) => ({ value, label: value })

const VolunteerSignup = () => {
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

  const toggleHelpOption = (option) => () => {
    setValues((prev) => {
      const exists = prev.helpOptions.includes(option)
      const helpOptions = exists
        ? prev.helpOptions.filter((o) => o !== option)
        : [...prev.helpOptions, option]
      return { ...prev, helpOptions }
    })
    if (errors.helpOptions) {
      setErrors((prev) => ({ ...prev, helpOptions: '' }))
    }
  }

  const validate = () => {
    const next = {}
    if (!values.firstName.trim()) next.firstName = 'First name is required'
    if (!values.lastName.trim()) next.lastName = 'Last name is required'
    if (!values.email.trim()) next.email = 'Email is required'
    else if (!EMAIL_RE.test(values.email.trim())) next.email = 'Enter a valid email address'
    if (!values.region) next.region = 'Region is required'
    if (!values.registeredVoter) next.registeredVoter = 'Please answer this question'
    if (!values.campaignExperience) next.campaignExperience = 'Please select an option'
    if (values.helpOptions.length === 0) next.helpOptions = 'Pick at least one'
    if (!values.availability) next.availability = 'Availability is required'
    if (!values.issues.trim()) next.issues = 'Tell us which issues matter most'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setServerError('')
    if (!validate()) return

    setSubmitting(true)
    try {
      const response = await fetch('/api/volunteer', {
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
      console.error('[VolunteerSignup]:', error)
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
          You&rsquo;re In
        </p>
        <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-4">
          Welcome to the team. A coordinator will reach out.
        </p>
        <p className="font-body text-[15px] leading-[1.7] text-ink/80">
          Thank you for stepping up. The People Are Coming!
        </p>
        <div className="mt-8">
          <BrandButton variant="ghost" onClick={() => setSuccess(false)} type="button">
            Submit Another →
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          id="vol-first-name"
          name="firstName"
          label="First Name"
          autoComplete="given-name"
          required
          value={values.firstName}
          onChange={handleChange('firstName')}
          error={errors.firstName}
        />
        <FormField
          id="vol-last-name"
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
          id="vol-email"
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
          id="vol-phone"
          name="phone"
          label="Mobile Phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          optional
          value={values.phone}
          onChange={handleChange('phone')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <FormField
          id="vol-zip"
          name="zipCode"
          label="ZIP Code"
          autoComplete="postal-code"
          inputMode="numeric"
          optional
          value={values.zipCode}
          onChange={handleChange('zipCode')}
        />
        <FormField
          id="vol-county"
          name="county"
          label="Minnesota County"
          as="select"
          optional
          placeholder="Select a county"
          options={MN_COUNTIES.map(toOption)}
          value={values.county}
          onChange={handleChange('county')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <FormField
          id="vol-region"
          name="region"
          label="Region"
          as="select"
          required
          placeholder="Select a region"
          options={MN_REGIONS.map(toOption)}
          value={values.region}
          onChange={handleChange('region')}
          error={errors.region}
        />
        <FormField
          id="vol-registered"
          name="registeredVoter"
          label="Registered to Vote in Minnesota?"
          as="select"
          required
          placeholder="Select one"
          options={[toOption('Yes'), toOption('No')]}
          value={values.registeredVoter}
          onChange={handleChange('registeredVoter')}
          error={errors.registeredVoter}
        />
      </div>

      <div className="mt-4">
        <FormField
          id="vol-experience"
          name="campaignExperience"
          label="Prior Campaign Experience?"
          as="select"
          required
          placeholder="Select one"
          options={VOLUNTEER_EXPERIENCE.map(toOption)}
          value={values.campaignExperience}
          onChange={handleChange('campaignExperience')}
          error={errors.campaignExperience}
        />
      </div>

      <fieldset className="mt-8">
        <legend className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot mb-3">
          How Would You Like to Help? <span className="text-stone-600 font-normal normal-case tracking-normal">(check all that apply)</span>
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {VOLUNTEER_HELP_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex items-start gap-3 cursor-pointer p-3 rounded-[4px] hover:bg-parchment transition-colors duration-300 ease-out"
            >
              <input
                type="checkbox"
                checked={values.helpOptions.includes(option)}
                onChange={toggleHelpOption(option)}
                className="mt-1 h-4 w-4 accent-patriot shrink-0"
              />
              <span className="font-body text-[14px] leading-[1.5] text-navy-900 font-semibold">
                {option}
              </span>
            </label>
          ))}
        </div>
        {errors.helpOptions && (
          <p
            role="alert"
            className="mt-2 font-accent text-[12px] font-semibold tracking-[0.08em] uppercase text-red-error"
          >
            {errors.helpOptions}
          </p>
        )}
      </fieldset>

      <div className="mt-4">
        <FormField
          id="vol-availability"
          name="availability"
          label="Availability"
          as="select"
          required
          placeholder="Select one"
          options={VOLUNTEER_AVAILABILITY.map(toOption)}
          value={values.availability}
          onChange={handleChange('availability')}
          error={errors.availability}
        />
      </div>

      <div className="mt-4">
        <FormField
          id="vol-issues"
          name="issues"
          label="What Issue(s) Matter Most?"
          as="textarea"
          rows={3}
          required
          value={values.issues}
          onChange={handleChange('issues')}
          error={errors.issues}
        />
      </div>

      <div className="mt-4">
        <FormField
          id="vol-anything-else"
          name="anythingElse"
          label="Anything Else to Share?"
          as="textarea"
          rows={3}
          optional
          value={values.anythingElse}
          onChange={handleChange('anythingElse')}
        />
      </div>

      <fieldset className="mt-8 space-y-4">
        <legend className="font-accent text-[12px] font-semibold tracking-[0.14em] uppercase text-patriot mb-2">
          SMS Communications
        </legend>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
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
          {submitting ? 'Submitting…' : 'Count Me In →'}
        </BrandButton>
        <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-stone-600">
          The fight continues…
        </span>
      </div>
    </form>
  )
}

export default VolunteerSignup
