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
    headshot:
      'https://media.licdn.com/dms/image/v2/D4E03AQHTJ_l28d5zhQ/profile-displayphoto-scale_400_400/B4EZhys6.tGcAk-/0/1754271039021?e=1761177600&v=beta&t=cUXfkXy1TOTm459JhsLY-P3qvRkYux_i_9COLZitkTY',
  },
  {
    name: 'Ashley Schut',
    role: 'Channel Account Manager @ Arctic Wolf',
    region: 'Global programs (based in Benelux)',
    bio: 'Ashley brings eight years of experience supporting the channel, including seven years at ESET before joining Arctic Wolf. She lives and breathes cybersecurity while championing vendor-neutral spaces where MSPs can thrive.',
    quote: 'Community works when security and trust lead every discussion — that is the heartbeat of Above The Stack.',
    headshot:
      'https://media.licdn.com/dms/image/v2/C4E03AQHcOE0oTcwitw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1636616489887?e=1761177600&v=beta&t=eV8USaAgmi4nYNmpExet8ntVmWH7Kx2WcSc0jTDxS74',
  },
  {
    name: 'Timon Bergsma',
    role: 'Sales Director @ Pax8',
    region: 'Global programs (based in Benelux and France)',
    bio: 'Timon is a true enabler who knows how to connect MSPs and partners around the right opportunities without turning the dialogue into a pitch. His people-first approach helps build collaborations that unlock the best in every team, making him a natural leader in community spaces.',
    quote: 'MSPs grow faster when we create space to be honest, generous, and a little bit human together.',
    headshot:
      'https://media.licdn.com/dms/image/v2/D4E03AQHXn54kWzVsqA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693304272129?e=1761177600&v=beta&t=7a8RjubVApiqD73RVarZefNHU-J-UGaa0Z-WmRGR_b0',
  },
  {
    name: 'Pierre Kleine-Schaars',
    role: 'Founder @ Q-Cyber',
    region: 'Global programs (based in Netherlands)',
    bio: 'Pierre is a veteran of the channel with a track record of launching successful businesses and ideas. Today he brings deep expertise across AI, automation, and cybersecurity to help the community push the industry forward with a truly global mindset.',
    quote: 'The future of the channel is transparent, data-driven, and global — exactly how we steward Above The Stack.',
    headshot:
      'https://media.licdn.com/dms/image/v2/D4E03AQEaw5AXj2yn6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719233183766?e=1761177600&v=beta&t=9QBOTwlrwIgBTJXdS7BaV6A8v_CnSt6c0FcD5QMCH3Y',
  },
]
