const stripCountryCode = (raw) => {
  let digits = String(raw || '').replace(/\D/g, '')
  if (digits.startsWith('1') && digits.length > 10) {
    digits = digits.slice(1)
  }
  return digits.slice(0, 10)
}

export const formatPhoneInput = (value) => {
  const trimmed = String(value || '').trim()
  if (trimmed === '' || trimmed === '+' || trimmed === '+1') return ''

  const digits = stripCountryCode(trimmed)
  if (digits.length === 0) return ''

  const area = digits.slice(0, 3)
  const mid = digits.slice(3, 6)
  const last = digits.slice(6, 10)

  if (digits.length <= 3) return `+1 (${area}`
  if (digits.length <= 6) return `+1 (${area}) ${mid}`
  return `+1 (${area}) ${mid}-${last}`
}

export const normalizePhoneForSubmit = (value) => {
  const digits = stripCountryCode(value)
  if (digits.length !== 10) return ''
  return `+1 (${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}
