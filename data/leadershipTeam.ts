export type LeadershipMember = {
  name: string
  role: string
  region: string
  bio: string
  quote: string
  headshot?: string
}

export const leadershipTeam: LeadershipMember[] = [
  {
    name: 'Tycho Löke',
    role: 'Channel Pre-Sales Solutions Engineer @ AvePoint',
    region: 'Global programs (based in Benelux, Nordics, Baltics)',
    bio: 'Tycho has spent eight years immersed in the MSP ecosystem. After leading enablement on the provider side, he now works with platform providers and MSPs to support go-to-market execution and service design without losing sight of the operator perspective. He is a committed knowledge sharer and evangelist for MSP success worldwide.',
    quote: 'We built Above The Stack so operators can compare notes without the vendor noise crowding other rooms.',
    headshot: 'https://www.linkedin.com/in/tycholoke/overlay/photo/',
  },
  {
    name: 'Ashley Schut',
    role: 'Channel Account Manager @ Arctic Wolf',
    region: 'Global programs (based in Benelux)',
    bio: 'Ashley brings eight years of experience supporting the channel, including seven years at ESET before joining Arctic Wolf. She lives and breathes cybersecurity while championing vendor-neutral spaces where MSPs can thrive.',
    quote: 'Community works when security and trust lead every discussion — that is the heartbeat of Above The Stack.',
    headshot: 'https://www.linkedin.com/in/ashley-schut-a1aa06105/overlay/photo/',
  },
  {
    name: 'Timon Bergsma',
    role: 'Sales Director @ Pax8',
    region: 'Global programs (based in Benelux and France)',
    bio: 'Timon is a true enabler who knows how to connect MSPs and partners around the right opportunities without turning the dialogue into a pitch. His people-first approach helps build collaborations that unlock the best in every team, making him a natural leader in community spaces.',
    quote: 'MSPs grow faster when we create space to be honest, generous, and a little bit human together.',
    headshot: 'https://www.linkedin.com/in/cloud-enthousiast/overlay/photo/',
  },
  {
    name: 'Pierre Kleine-Schaars',
    role: 'Founder @ Q-Cyber',
    region: 'Global programs (based in Netherlands)',
    bio: 'Pierre is a veteran of the channel with a track record of launching successful businesses and ideas. Today he brings deep expertise across AI, automation, and cybersecurity to help the community push the industry forward with a truly global mindset.',
    quote: 'The future of the channel is transparent, data-driven, and global — exactly how we steward Above The Stack.',
    headshot: 'https://www.linkedin.com/in/qaasspecialist/overlay/photo/',
  },
]
