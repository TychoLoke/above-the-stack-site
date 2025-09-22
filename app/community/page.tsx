import Card from '@/components/Card'
import LatestThreads from '@/components/LatestThreads'
import Section from '@/components/Section'
import { communityCommitments } from '@/data/community'
import {
  ClipboardList,
  Compass,
  Handshake,
  MessageCircle,
  Sparkles,
  WandSparkles,
  Wrench,
} from 'lucide-react'

export const metadata = { title: 'Community — Above The Stack' }

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

const iconClass = 'h-5 w-5'

const lounges = [
  {
    title: 'Operator lounge',
    description: 'MSP founders and leadership teams swap pricing experiments, customer success tactics, and hiring frameworks.',
    iconAccent: 'midnight' as const,
    icon: <Compass aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Service delivery guild',
    description: 'Technicians and delivery leads compare tooling stacks, workflow automations, and resilient operations.',

    iconAccent: 'ocean' as const,
    icon: <Wrench aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Partner strategy space',
    description: 'Solution and distribution teams co-design launch plans, explore MDF collaborations, and gather honest product feedback under neutral guardrails.',
    iconAccent: 'coral' as const,
    icon: <Handshake aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const highlights = [
  {
    title: 'Curated lounges & living playbooks',
    description: 'Log in to access themed lounges, download playbooks in progress, and help us build the benchmarks you need next.',
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

const expectations = [
  'Weekly prompts from the Above The Stack editorial team to spark discussion.',
  'Member-led AMAs covering tooling migrations, partner contracts, and compliance.',
  'Dropboxes with templates, customer decks, and dashboards contributed by the community.',
]

const steps = [
  {
    title: 'Become a member',
    description: 'Membership is €150 / $165 per company and covers every teammate. Partners use the same flow to request curated, sales-neutral participation.',
    href: `${portalUrl}/signup`,
    cta: 'Become a Member',
    iconAccent: 'midnight' as const,
    icon: <WandSparkles aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Complete your profile',
    description: 'Share your role, region, and focus areas so moderators can recommend discussions and connect you with peers.',
    iconAccent: 'ocean' as const,
    icon: <ClipboardList aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Engage with intent',
    description: 'Introduce yourself, react to a prompt, or request feedback on a challenge. The more context you give, the richer the responses.',
    iconAccent: 'coral' as const,
    icon: <MessageCircle aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

export default function Page() {
  return (
    <div className="space-y-24">
      <section className="relative grid gap-10 rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_32px_70px_-35px_rgba(15,31,75,0.55)] backdrop-blur-xl sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="space-y-6 text-slate-700">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/0 bg-atsOcean/10 px-4 py-1 text-sm font-semibold text-atsOcean/80">
            <Sparkles aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} /> Above Connect
          </span>
          <h1 className="h1 text-balance text-atsMidnight">A private, high-signal portal for MSPs and trusted partners</h1>
          <p className="text-lg leading-relaxed">
            Above Connect is the member portal of Above The Stack — the independent, MSP-first community. It’s where providers and trusted partners from around the world connect under vendor-neutral guardrails to exchange ideas, challenge assumptions, and build the future of managed services together.
          </p>
          <ul className="space-y-4 text-sm leading-relaxed">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-5">
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-atsSky via-atsOcean to-atsCoral shadow-[0_4px_12px_rgba(19,42,93,0.35)]" />
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-atsMidnight">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary w-full justify-center sm:w-auto" href={`${portalUrl}/signup`}>
              Become a Member
            </a>
            <a className="btn-secondary w-full justify-center sm:w-auto" href="mailto:partnerships@abovethestack.com">
              Request an Invite
            </a>
            <a className="btn-secondary w-full justify-center sm:w-auto" href={portalUrl}>
              Log in to Above Connect
            </a>
            <a className="btn-secondary w-full justify-center sm:w-auto" href="mailto:community@abovethestack.com">
              Talk to a moderator
            </a>
          </div>
        </div>
        <div className="card gradient-border flex h-full flex-col justify-between space-y-6 bg-white/85 p-6 sm:p-7">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-atsMidnight">Community commitments</h2>
              <span className="hidden rounded-full border border-white/40 bg-white/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-atsOcean/80 md:inline-flex">
                Member-led
              </span>
            </div>
            <ul className="space-y-4 text-sm leading-relaxed text-slate-600">
              {communityCommitments.map((item) => (
                <li key={item.title} className="flex items-start gap-5">
                  <span
                    className={`mt-1 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-[0.65rem] font-semibold uppercase tracking-wide text-white shadow-glow`}
                  >
                    {item.label}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-atsMidnight">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-atsOcean/15 bg-atsOcean/5 p-4 text-sm text-atsMidnight">
            Membership is €150 / $165 per company. We verify MSP status, curate partner participation, and protect member time with moderated, sales-neutral guardrails.
          </div>
        </div>
      </section>

      <Section
        eyebrow="Lounges"
        title="Spaces inside the community"
        description="Membership unlocks themed lounges designed to keep discussions focused and actionable."
      >
        {lounges.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            icon={item.icon}
            iconAccent={item.iconAccent}
          >
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
          <a className="btn-secondary w-full justify-center sm:w-auto" href={`${portalUrl}/latest`}>
            View all topics
          </a>
        }
      >
        <LatestThreads />
        <div className="card space-y-4 border-transparent bg-gradient-to-br from-white via-atsSky/15 to-atsOcean/10">
          <h3 className="text-lg font-semibold text-atsMidnight">What to expect</h3>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
            {expectations.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-atsOcean" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Getting started" title="Join in three steps">
        {steps.map((step) => (
          <Card
            key={step.title}
            title={step.title}
            icon={step.icon}
            iconAccent={step.iconAccent}
            href={step.href}
            cta={step.cta}
            className={step.href ? 'border-transparent bg-gradient-to-br from-white via-atsSky/15 to-atsOcean/10' : undefined}
          >
            {step.description}
          </Card>
        ))}
      </Section>
    </div>
  )
}
