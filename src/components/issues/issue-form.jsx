'use client'

import { useState } from 'react'

import BrandButton from '@/components/brand/brand-button'
import FormField from '@/components/ui/form-field'
import { ISSUE_CATEGORIES } from '@/constants/issues'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_VALUES = {
  name: '',
  email: '',
  category: '',
  location: '',
  subject: '',
  description: '',
}

const toOption = (value) => ({ value, label: value })

const IssueForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Full name is required'
    if (!values.email.trim()) next.email = 'Email is required'
    else if (!EMAIL_RE.test(values.email.trim())) next.email = 'Enter a valid email address'
    if (!values.category) next.category = 'Please pick a category'
    if (!values.subject.trim()) next.subject = 'Subject is required'
    if (!values.description.trim()) next.description = 'Tell us a little more'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setServerError('')
    if (!validate()) return

    setSubmitting(true)
    try {
      const response = await fetch('/api/issues', {
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
      console.error('[IssueForm]:', error)
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
          Question Received
        </p>
        <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-4">
          Royce will respond as time on the trail allows.
        </p>
        <p className="font-body text-[15px] leading-[1.7] text-ink/80">
          Thanks for raising this. We hear the people. The People Are Coming!
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
        Ask Royce
      </p>
      <p className="font-display font-extrabold text-[28px] leading-[1.1] text-navy-900 mb-8">
        Your question, in your own words.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          id="issue-name"
          name="name"
          label="Full Name"
          autoComplete="name"
          placeholder="Full Name"
          required
          value={values.name}
          onChange={handleChange('name')}
          error={errors.name}
        />
        <FormField
          id="issue-email"
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <FormField
          id="issue-category"
          name="category"
          label="Category"
          as="select"
          required
          placeholder="Select a topic"
          options={ISSUE_CATEGORIES.map(toOption)}
          value={values.category}
          onChange={handleChange('category')}
          error={errors.category}
        />
        <FormField
          id="issue-location"
          name="location"
          label="Location"
          autoComplete="address-level2"
          placeholder="Street address, neighborhood, or city"
          optional
          value={values.location}
          onChange={handleChange('location')}
        />
      </div>

      <div className="mt-4">
        <FormField
          id="issue-subject"
          name="subject"
          label="Subject"
          placeholder="A short headline for your question"
          required
          value={values.subject}
          onChange={handleChange('subject')}
          error={errors.subject}
        />
      </div>

      <div className="mt-4">
        <FormField
          id="issue-description"
          name="description"
          label="Description"
          as="textarea"
          rows={6}
          placeholder="Ask Royce in your own words. The more context, the better the answer…"
          required
          value={values.description}
          onChange={handleChange('description')}
          error={errors.description}
        />
      </div>

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
          {submitting ? 'Sending…' : 'Send Question →'}
        </BrandButton>
        <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-stone-600">
          The fight continues…
        </span>
      </div>
    </form>
  )
}

export default IssueForm
