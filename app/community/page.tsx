import Card from '@/components/Card'
import LatestThreads from '@/components/LatestThreads'
import Section from '@/components/Section'
import { communityCommitments } from '@/data/community'

export const metadata = { title: 'Community — Above The Stack' }

const lounges = [
  {
    title: 'Operator lounge',
    description: 'MSP founders and leadership teams swap pricing experiments, customer success tactics, and hiring frameworks.',
    accent: 'border-transparent bg-gradient-to-br from-white via-atsSky/15 to-atsOcean/10 shadow-glow',
  },
  {
    title: 'Service delivery guild',
    description: 'Technicians and delivery leads compare tooling stacks, workflow automations, and best practices for resilient operations.',
    accent: 'border-transparent bg-gradient-to-br from-white via-atsOcean/15 to-atsSky/10 shadow-glow',
  },
  {
    title: 'Partner strategy space',
    description: 'Solution and distribution teams co-design launch plans, explore MDF collaborations, and gather honest product feedback under neutral guardrails.',
    accent: 'border-transparent bg-gradient-to-br from-white via-atsCoral/20 to-atsSky/15 shadow-glow',
  },
]

const highlights = [
  {
    title: 'Curated lounges & living playbooks',
    description:
      'Log in to access curated lounges, download playbooks in progress, and help us build the benchmarks you need next.',
  },
  {
    title: 'Searchable, accountable knowledge',
    description: 'Every conversation is searchable, accountable, and led by the community from day one.',
  },
  {
    title: 'Membership for whole teams',
    description:
      'Company membership is €150 / $165 per year per MSP with local currency equivalents. Partners join in a sales-neutral, knowledge-sharing capacity by requesting curated access.',
  },
]

export default function Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <div className="space-y-24">
      <section className="grid gap-10 rounded-[2.5rem] border border-atsOcean/10 bg-gradient-to-br from-white via-white to-atsSky/20 p-10 shadow-[0_32px_70px_-35px_rgba(15,31,75,0.55)] lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-slate-700">
          <span className="tag">Above Connect</span>
          <h1 className="h1 text-balance text-atsMidnight">A private, high-signal portal for MSPs and trusted partners</h1>
          <p className="text-lg leading-relaxed">
            Above Connect is the member portal of Above The Stack — the independent, MSP-first
            community. It’s where providers and trusted partners from around the world connect under
            vendor-neutral guardrails to exchange ideas, challenge assumptions, and build the future
            of managed services together.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-atsOcean/15 bg-gradient-to-br from-white via-atsSky/10 to-atsOcean/5 p-5 text-sm leading-relaxed text-slate-700 shadow-[0_24px_55px_-32px_rgba(15,31,75,0.6)]"
              >
                <h3 className="text-base font-semibold text-atsMidnight">{item.title}</h3>
                <p className="mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href={`${portalUrl}/signup`}>
              Become a Member
            </a>
            <a className="btn-ghost" href="mailto:partnerships@abovethestack.com">
              Request an Invite
            </a>
            <a className="btn-ghost" href={portalUrl}>
              Log in to Above Connect
            </a>
            <a className="btn-ghost" href="mailto:community@abovethestack.com">
              Talk to a moderator
            </a>
          </div>
        </div>
        <div className="card space-y-6 border-transparent bg-gradient-to-br from-white via-atsSky/20 to-atsOcean/10 text-slate-800 shadow-glow">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-atsMidnight">Community commitments</h2>
            <span className="hidden rounded-full border border-white/50 bg-white/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-atsOcean/80 md:inline-flex">
              Built with members
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {communityCommitments.map((item) => (
              <div
                key={item.title}
                className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/60 bg-white/75 p-5 text-sm leading-relaxed text-slate-600 shadow-[0_25px_55px_-32px_rgba(15,31,75,0.6)] backdrop-blur"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.12] transition-opacity duration-300 group-hover:opacity-25`}
                />
                <span
                  className={`relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-[0.65rem] font-semibold uppercase tracking-wide text-white shadow-glow`}
                >
                  {item.label}
                </span>
                <h3 className="relative text-sm font-semibold text-atsMidnight">{item.title}</h3>
                <p className="relative">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Lounges"
        title="Spaces inside the community"
        description="Membership unlocks themed lounges designed to keep discussions focused and actionable."
        columns="three"
      >
        {lounges.map((item) => (
          <Card key={item.title} title={item.title} className={item.accent}>
            {item.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Live signal"
        title="Recent conversations from Above Connect"
        description="Log in to Above Connect to view the full threads, join the debate, and access shared files."
        columns="two"
        action={
          <a className="btn-ghost" href={`${portalUrl}/latest`}>
            View all topics
          </a>
        }
      >
        <LatestThreads />
        <div className="card space-y-4 border-transparent bg-gradient-to-br from-white via-atsSky/15 to-atsOcean/10 shadow-glow">
          <h3 className="text-lg font-semibold text-atsMidnight">What to expect</h3>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsOcean" />
              Weekly prompts from the Above The Stack editorial team to spark discussion.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsSky" />
              Member-led AMAs covering tooling migrations, partner contracts, and compliance.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsCoral" />
              Dropboxes with templates, customer decks, and dashboards contributed by the community.
            </li>
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Getting started"
        title="Join in three steps"
        columns="three"
      >
        <Card
          title="1. Become a member"
          cta="Become a Member"
          href={`${portalUrl}/signup`}
          className="border-transparent bg-gradient-to-br from-white via-atsSky/15 to-atsOcean/10 shadow-glow"
        >
          Membership is €150 / $165 per company and covers every teammate, with local currency options
          available. Partners use the same flow to request curated, sales-neutral participation.
        </Card>
        <Card title="2. Complete your profile">
          Share your role, region, and focus areas. We use this to recommend discussions and small
          group sessions.
        </Card>
        <Card title="3. Engage with intent">
          Introduce yourself, react to a prompt, or request feedback on a challenge. The more context
          you give, the richer the responses.
        </Card>
      </Section>
    </div>
  )
}
