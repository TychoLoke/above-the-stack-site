import Card from '@/components/Card'
import Section from '@/components/Section'
import {
  BarChart3,
  Bot,
  ClipboardCheck,
  FileText,
  Globe2,
  Handshake,
  Lightbulb,
  Map,
  MessagesSquare,
  PenLine,
  RefreshCcw,
  ScrollText,
  ShieldCheck,
  Sparkle,
  UsersRound,
} from 'lucide-react'

export const metadata = { title: 'Insights — Above The Stack' }

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

const iconClass = 'h-5 w-5'

const researchStreams = [
  {
    title: 'Market intelligence',
    description:
      'Sizing, growth trajectories, and economics behind MSP service lines and partner ecosystems across key regions.',
    iconAccent: 'ocean' as const,
    icon: <Globe2 aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Regulation & compliance',
    description:
      'Breakdowns of NIS2, DORA, and local regulations paired with practical implementation implications for MSP teams.',
    iconAccent: 'midnight' as const,
    icon: <ScrollText aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Operating benchmarks',
    description:
      'Metrics on delivery efficiency, customer acquisition costs, and tooling adoption to guide your next investment.',
    iconAccent: 'sky' as const,
    icon: <BarChart3 aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const researchPipeline = [
  {
    title: 'Global MSP Landscape 2025',
    description:
      'Service mix, profitability signals, and competitive positioning across 120+ MSPs in multiple regions.',
    iconAccent: 'sky' as const,
    icon: <Map aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Vendor Relationship Pulse',
    description: 'How MSPs evaluate vendor partners, MDF programmes, and co-selling expectations for the year ahead.',
    iconAccent: 'coral' as const,
    icon: <Handshake aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'State of Managed Security',
    description: 'Pricing models, staffing, and incident response capabilities for security-centric MSP offerings.',
    iconAccent: 'midnight' as const,
    icon: <ShieldCheck aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const playbookTracks = [
  {
    title: 'NIS2 readiness kit',
    description: 'Gap assessment templates, customer comms, and service packaging guidance to operationalise the directive.',
    iconAccent: 'midnight' as const,
    icon: <ScrollText aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'AI service launch framework',
    description: 'Positioning, pricing, and delivery runbooks for rolling out AI-enabled support without eroding trust.',
    iconAccent: 'ocean' as const,
    icon: <Bot aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Customer success dashboard',
    description: 'A full measurement model linking support signals to retention, expansion, and advocacy metrics.',
    iconAccent: 'sky' as const,
    icon: <MessagesSquare aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const libraryInside = [
  {
    title: 'Executive readouts',
    description:
      'Concise summaries that help leadership align on the why, the opportunity, and the risks before committing resources.',
    iconAccent: 'ocean' as const,
    icon: <FileText aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Implementation toolkits',
    description:
      'Editable worksheets, SOPs, and templates to plug directly into your PSA, documentation, and customer success workflows.',
    iconAccent: 'midnight' as const,
    icon: <ClipboardCheck aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Peer review loops',
    description:
      'Dedicated Above Connect threads where members stress-test assumptions, share results, and influence what we publish next.',
    iconAccent: 'coral' as const,
    icon: <UsersRound aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const collaboration = [
  {
    title: 'Co-design sprints',
    description:
      'We ship drafts inside Above Connect, gather field notes from members, and iterate quickly with weekly checkpoints.',
    iconAccent: 'sky' as const,
    icon: <RefreshCcw aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Facilitated workshops',
    description:
      'Live sessions turn research into action. Bring your team, map the opportunity, and leave with next steps.',
    iconAccent: 'ocean' as const,
    icon: <PenLine aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Member spotlight stories',
    description:
      'We document real-world wins and missteps so the entire community benefits — with attribution if you want it.',
    iconAccent: 'coral' as const,
    icon: <Lightbulb aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

export default function Page() {
  return (
    <div className="space-y-28">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-atsMidnight via-atsOcean to-atsCoral/80 px-6 py-12 text-white shadow-[0_60px_140px_-80px_rgba(15,31,75,0.85)] sm:rounded-[3rem] sm:px-10 sm:py-16">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-atsSky/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-atsCoral/30 blur-3xl" aria-hidden />
        <div className="relative space-y-8">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em]">
            <Sparkle aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} /> Insight library
          </span>
          <h1 className="h1 max-w-3xl text-balance text-white">
            Research and playbooks that help MSPs decide, build, and win faster
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80">
            Every release pairs independent market intelligence with practical runbooks. Review early drafts, shape the metrics we track, and ship initiatives with the confidence of a global MSP collective behind you.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary w-full justify-center bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 sm:w-auto" href={`${portalUrl}/c/research/5`}>
              Explore in Above Connect
            </a>
            <a className="btn-secondary w-full justify-center border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/20 sm:w-auto" href="mailto:research@abovethestack.com">
              Pitch a collaboration
            </a>
          </div>
          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 text-sm text-white/80">
              <p className="text-3xl font-semibold text-white">120+</p>
              <p>MSPs contribute anonymous benchmarks and interviews every quarter.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 text-sm text-white/80">
              <p className="text-3xl font-semibold text-white">24</p>
              <p>Live playbook sprints per year with worksheets, calculators, and facilitation kits.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 text-sm text-white/80">
              <p className="text-3xl font-semibold text-white">Weekly</p>
              <p>Review loops in Above Connect so members can stress-test assumptions together.</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Research programmes"
        title="Market intelligence shaped with operators"
        description="We investigate the topics MSP leaders vote on, combining surveys, interviews, and curated datasets."
        className="relative overflow-hidden rounded-[2rem] border border-atsOcean/15 bg-gradient-to-br from-white/95 via-atsSky/10 to-transparent px-6 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14"
      >
        {researchStreams.map((pillar) => (
          <Card
            key={pillar.title}
            title={pillar.title}
            icon={pillar.icon}
            iconAccent={pillar.iconAccent}
            className="bg-white/90"
          >
            {pillar.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="In development"
        title="Upcoming releases members are already reviewing"
        description="Join feedback sessions, add your data, and access chapter previews before reports go live."
        className="relative overflow-hidden rounded-[2rem] border border-atsOcean/10 bg-gradient-to-br from-white to-atsOcean/5 px-6 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14"
      >
        {researchPipeline.map((release) => (
          <Card
            key={release.title}
            title={release.title}
            icon={release.icon}
            iconAccent={release.iconAccent}
            className="bg-white/90"
          >
            {release.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Playbook sprints"
        title="Frameworks that translate insights into outcomes"
        description="Every sprint turns research into action with structured experiments, enablement assets, and reporting guidance."
        className="relative overflow-hidden rounded-[2rem] border border-atsCoral/20 bg-gradient-to-br from-white via-atsCoral/10 to-transparent px-6 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14"
      >
        {playbookTracks.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            icon={item.icon}
            iconAccent={item.iconAccent}
            className="bg-white/95"
          >
            {item.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="What you receive"
        title="Inside every release"
        description="Browse the library or request a walkthrough. We tailor implementations with your team when you need deeper support."
        className="relative overflow-hidden rounded-[2rem] border border-atsOcean/10 bg-gradient-to-br from-white to-atsSky/10 px-6 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14"
      >
        {libraryInside.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            icon={item.icon}
            iconAccent={item.iconAccent}
            className="bg-white/95"
          >
            {item.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="How we work with you"
        title="Co-create with the Above The Stack community"
        description="Research and playbooks stay current because members stay involved. Bring your use case and shape the agenda."
        columns="three"
        className="relative overflow-hidden rounded-[2rem] border border-atsOcean/10 bg-gradient-to-br from-white via-atsOcean/5 to-atsCoral/5 px-6 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14"
      >
        {collaboration.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            icon={item.icon}
            iconAccent={item.iconAccent}
            className="bg-white/90"
          >
            {item.description}
          </Card>
        ))}
        <Card
          title="Request a private session"
          href="mailto:hello@abovethestack.com"
          cta="Schedule a working session"
          icon={<Sparkle aria-hidden="true" className={iconClass} strokeWidth={1.8} />}
          iconAccent="sky"
          className="bg-white/95"
        >
          Need help tailoring a playbook or unpacking a research chapter with your leadership team? Book time with us and we’ll build a working agenda together.
        </Card>
      </Section>
    </div>
  )
}
