import Card from '@/components/Card'
import LatestThreads from '@/components/LatestThreads'
import Section from '@/components/Section'

export const metadata = { title: 'Community — Above The Stack' }

const lounges = [
  {
    title: 'Operator lounge',
    description: 'MSP founders and leadership teams swap pricing experiments, customer success tactics, and hiring frameworks.',
  },
  {
    title: 'Service delivery guild',
    description: 'Technicians and delivery leads compare tooling stacks, workflow automations, and best practices for resilient operations.',
  },
  {
    title: 'Partner strategy space',
    description: 'Solution and distribution teams co-design launch plans, explore MDF collaborations, and gather honest product feedback under neutral guardrails.',
  },
]

export default function Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <div className="space-y-24">
      <section className="grid gap-10 rounded-[2.5rem] bg-white/80 p-10 shadow-[0_28px_60px_-30px_rgba(15,31,75,0.5)] lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-slate-700">
          <span className="tag">Above Connect</span>
          <h1 className="h1 text-balance text-atsMidnight">A private, high-signal portal for MSPs and trusted partners</h1>
          <p className="text-lg leading-relaxed">
            Above Connect is the member portal of Above The Stack — the independent, MSP-first
            community. It’s where providers and trusted partners from around the world connect under
            vendor-neutral guardrails to exchange ideas, challenge assumptions, and build the future
            of managed services together.
          </p>
          <p className="text-lg leading-relaxed">
            Log in to access curated lounges, download playbooks in progress, and help us build the
            benchmarks you need next. Every conversation is searchable, accountable, and led by the
            community.
          </p>
          <p className="text-lg leading-relaxed">
            Company membership is €150 / $165 per year per MSP, giving every team member a seat with
            local currency equivalents available. Partners join in a sales-neutral, knowledge-sharing
            capacity by requesting curated access.
          </p>
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
        <div className="card space-y-4 border-atsOcean/20 bg-gradient-to-br from-white via-white to-atsSky/10">
          <h2 className="text-xl font-semibold text-atsMidnight">Community commitments</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsOcean" />
              Use real names, share context, and show your work so peers can learn alongside you.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsSky" />
              Keep discussions vendor-neutral; be explicit when sharing partner perspectives.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsCoral" />
              Reciprocate — if you download a resource, tell the group how it landed with your team.
            </li>
          </ul>
        </div>
      </section>

      <Section
        eyebrow="Lounges"
        title="Spaces inside the community"
        description="Membership unlocks themed lounges designed to keep discussions focused and actionable."
        columns="three"
      >
        {lounges.map((item) => (
          <Card key={item.title} title={item.title}>
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
        <div className="card space-y-4">
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
        <Card title="1. Become a member" cta="Become a Member" href={`${portalUrl}/signup`}>
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
