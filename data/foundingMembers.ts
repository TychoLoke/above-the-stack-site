export type FoundingMember = {
  name: string
  role: string
  region: string
  bio: string
  headshot?: string
}

export const foundingMembers: FoundingMember[] = [
  {
    name: 'Tycho Löke',
    role: 'Channel Pre-Sales Solutions Engineer @ AvePoint',
    region: 'Benelux, Nordics, Baltics',
    bio: 'Tycho has spent eight years immersed in the MSP ecosystem. After leading enablement on the provider side, he recently joined AvePoint to help vendors support partners with go-to-market execution and service design. He is a committed knowledge sharer and evangelist for MSP success.',
  },
  {
    name: 'Ashley Schut',
    role: 'Channel Account Manager @ Arctic Wolf',
    region: 'Benelux',
    bio: 'Ashley brings eight years of experience from the vendor side of the channel, including seven years at ESET before joining Arctic Wolf. She lives and breathes cybersecurity while keeping a grounded understanding of what MSPs need to thrive.',
  },
  {
    name: 'Timon Bergsma',
    role: 'Sales Director @ Pax8',
    region: 'Benelux and France',
    bio: 'Timon is a true enabler who knows how to connect MSPs and vendors around the right opportunities. His people-first approach helps build partnerships that unlock the best in every team, making him a natural leader in community spaces.',
  },
  {
    name: 'Pierre Kleine-Schaars',
    role: 'Founder @ Q-Cyber',
    region: 'Netherlands',
    bio: 'Pierre is a veteran of the channel with a track record of launching successful businesses and ideas. Today he brings deep expertise across AI, automation, and cybersecurity to help the community push the industry forward.',
  },
]
