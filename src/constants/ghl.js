const HOOK_BASE =
  'https://services.leadconnectorhq.com/hooks/HK7KWJYbw33yisOBMGEO/webhook-trigger'

export const GHL_WEBHOOKS = {
  contact: `${HOOK_BASE}/cf2eced9-14ad-4109-ba4f-fd244858af10`,
  volunteer: [
    `${HOOK_BASE}/23834100-4e00-4579-82e7-f9ec69ed8542`,
    `${HOOK_BASE}/df947411-0c7e-4a6c-8c2e-7f20291c333f`,
    `${HOOK_BASE}/19e7758c-f5c5-44fa-a770-5c18cefa0645`,
  ],
  issue: `${HOOK_BASE}/3c2d23be-00aa-49d5-9d14-6597d2e93123`,
  eventRsvp: `${HOOK_BASE}/b8b53720-18c4-4cde-9db9-c549de6264ee`,
}
