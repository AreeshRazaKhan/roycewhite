const MEETING_DESCRIPTION = [
  'Are you ready to take a stand and make a real difference? Your presence will help ignite the spark of change that our nation desperately needs.',
  'Learn to engage — discover effective strategies to rally your friends, family, and community behind the campaign. Join volunteers for "Royce White for U.S. Senate" as we discuss what\u2019s next.',
]

export const EVENTS = [
  {
    slug: 'volunteers-weekly-meeting-dec-31-2025',
    number: '01',
    title: 'Volunteers\u2019 Weekly Meeting',
    date: '2025-12-31',
    dateLabel: 'DEC 31 \u00B7 2025',
    day: 'Wednesday',
    timeStart: '7:00 PM',
    timeEnd: '8:00 PM',
    tag: 'Past \u00B7 Series',
    lede: 'Weekly volunteer meeting for the campaign. Learn to engage and rally your community behind the movement.',
    description: MEETING_DESCRIPTION,
    host: 'Royce White For Senate',
    featured: true,
  },
  {
    slug: 'volunteers-weekly-meeting-dec-24-2025',
    number: '02',
    title: 'Volunteers\u2019 Weekly Meeting',
    date: '2025-12-24',
    dateLabel: 'DEC 24 \u00B7 2025',
    day: 'Wednesday',
    timeStart: '7:00 PM',
    timeEnd: '8:00 PM',
    tag: 'Past \u00B7 Series',
    lede: 'Weekly volunteer meeting for the campaign.',
    description: MEETING_DESCRIPTION,
    host: 'Royce White For Senate',
    featured: false,
  },
  {
    slug: 'volunteers-weekly-meeting-dec-17-2025',
    number: '03',
    title: 'Volunteers\u2019 Weekly Meeting',
    date: '2025-12-17',
    dateLabel: 'DEC 17 \u00B7 2025',
    day: 'Wednesday',
    timeStart: '7:00 PM',
    timeEnd: '8:00 PM',
    tag: 'Past \u00B7 Series',
    lede: 'Weekly volunteer meeting for the campaign.',
    description: MEETING_DESCRIPTION,
    host: 'Royce White For Senate',
    featured: false,
  },
]

export const getEventBySlug = (slug) => EVENTS.find((e) => e.slug === slug) ?? null

export const getEventSlugs = () => EVENTS.map((e) => e.slug)
