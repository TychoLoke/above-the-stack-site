export type LeadershipMember = {
  name: string
  role: string
  region: string
  bio: string
  headshot?: string
}

const createMonogramHeadshot = (initials: string, gradient: [string, string]) => {
  const sanitizedInitials = initials.replace(/\s+/g, '')
  const gradientId = `grad-${sanitizedInitials.toLowerCase()}`
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">',
    '<defs>',
    `<linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">`,
    `<stop offset="0%" stop-color="${gradient[0]}"/>`,
    `<stop offset="100%" stop-color="${gradient[1]}"/>`,
    '</linearGradient>',
    '</defs>',
    `<rect width="128" height="128" rx="28" fill="url(#${gradientId})"/>`,
    '<text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="\'Inter\', \'Segoe UI\', sans-serif" font-size="52" font-weight="600" fill="#F8FAFC" letter-spacing="2">',
    sanitizedInitials,
    '</text>',
    '</svg>',
  ].join('')

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const leadershipTeam: LeadershipMember[] = [
  {
    name: 'Tycho Löke',
    role: 'Channel Pre-Sales Solutions Engineer @ AvePoint',
    region: 'Global programs (based in Benelux, Nordics, Baltics)',
    bio: 'Tycho has spent eight years immersed in the MSP ecosystem. After leading enablement on the provider side, he now works with platform providers and MSPs to support go-to-market execution and service design without losing sight of the operator perspective. He is a committed knowledge sharer and evangelist for MSP success worldwide.',
    headshot: createMonogramHeadshot('TL', ['#0EA5E9', '#1D4ED8']),
  },
  {
    name: 'Ashley Schut',
    role: 'Channel Account Manager @ Arctic Wolf',
    region: 'Global programs (based in Benelux)',
    bio: 'Ashley brings eight years of experience supporting the channel, including seven years at ESET before joining Arctic Wolf. She lives and breathes cybersecurity while championing vendor-neutral spaces where MSPs can thrive.',
    headshot: createMonogramHeadshot('AS', ['#F97316', '#C2410C']),
  },
  {
    name: 'Timon Bergsma',
    role: 'Sales Director @ Pax8',
    region: 'Global programs (based in Benelux and France)',
    bio: 'Timon is a true enabler who knows how to connect MSPs and partners around the right opportunities without turning the dialogue into a pitch. His people-first approach helps build collaborations that unlock the best in every team, making him a natural leader in community spaces.',
    headshot: createMonogramHeadshot('TB', ['#10B981', '#047857']),
  },
  {
    name: 'Pierre Kleine-Schaars',
    role: 'Founder @ Q-Cyber',
    region: 'Global programs (based in Netherlands)',
    bio: 'Pierre is a veteran of the channel with a track record of launching successful businesses and ideas. Today he brings deep expertise across AI, automation, and cybersecurity to help the community push the industry forward with a truly global mindset.',
    headshot: createMonogramHeadshot('PK', ['#A855F7', '#6D28D9']),
  },
]
