export type CommunityCommitment = {
  label: string
  title: string
  description: string
  gradient: string
}

export const communityCommitments: CommunityCommitment[] = [
  {
    label: 'Context',
    title: 'Lead with context',
    description: 'Use real names, share context, and show your work so peers can learn alongside you.',
    gradient: 'from-atsOcean via-atsSky to-atsCoral',
  },
  {
    label: 'Neutral',
    title: 'Stay vendor-neutral',
    description: 'Keep discussions focused on member outcomes and be explicit when sharing partner perspectives.',
    gradient: 'from-atsSky via-atsOcean to-atsMidnight',
  },
  {
    label: 'Reciprocate',
    title: 'Give back what you take',
    description: 'If you download a resource or adopt an idea, report back so everyone benefits from the results.',
    gradient: 'from-atsCoral via-atsSky to-atsOcean',
  },
]
