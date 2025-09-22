import Card from '@/components/Card'
import Section from '@/components/Section'
import {
  BarChart3,
  ClipboardCheck,
  Globe2,
  Handshake,
  Map,
  RefreshCcw,
  ScrollText,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

export const metadata = { title: 'Research — Above The Stack' }

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

const iconClass = 'h-5 w-5'

const pillars = [
  {
    title: 'Market intelligence',
    description: 'Sizing, growth trajectories, and economics behind MSP service lines and partner ecosystems across regions.',
    iconAccent: 'ocean' as const,
    icon: <Globe2 aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Regulation & compliance',
    description: 'Breakdowns of NIS2, DORA, and local regulations paired with implementation implications for MSP teams.',
    iconAccent: 'midnight' as const,
    icon: <ScrollText aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Operating benchmarks',
    description: 'Metrics on delivery efficiency, customer acquisition costs, and tooling adoption to guide investments.',
    iconAccent: 'sky' as const,
    icon: <BarChart3 aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const releases = [
  {
    title: 'Global MSP Landscape 2025',
    description: 'Service mix, profitability signals, and competitive positioning across 120+ MSPs in multiple regions.',
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

const methodology = [
  {
    title: 'Community-led',
    description: 'Surveys and interviews originate from member questions. We vet every data contributor and anonymise results.',
    iconAccent: 'ocean' as const,
    icon: <UsersRound aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Transparent & iterative',
    description: 'Draft findings are posted in Above Connect for feedback. Members challenge assumptions before publication.',
    iconAccent: 'sky' as const,

    icon: <RefreshCcw aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Practical outcomes',
    description: 'Each report includes actions, metrics to monitor, and supporting templates so teams can implement fast.',
    iconAccent: 'coral' as const,
    icon: <ClipboardCheck aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Global relevance',
    description: 'We compare insights with MSPs worldwide to highlight regional differences and transferable learnings.',
    iconAccent: 'slate' as const,

    icon: <Globe2 aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

export default function Page() {
  return (
    <div className="space-y-24">
      <section className="glass-panel space-y-6 px-10 py-14 text-lg leading-relaxed text-slate-700">
        <span className="tag">Research</span>
        <h1 className="h1 text-balance text-atsMidnight">Independent intelligence to guide MSP strategy</h1>
        <p>
          Our research blends proprietary surveys, curated datasets, and interviews with operators and partner leaders. Every publication is reviewed by the community and includes recommendations you can action immediately.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href={`${portalUrl}/c/research/5`}>
            Access research in Above Connect
          </a>
          <a className="btn-secondary" href="mailto:research@abovethestack.com">
            Contribute data
          </a>
        </div>
      </section>

      <Section eyebrow="Focus areas" title="What we analyse">
        {pillars.map((pillar) => (
          <Card
            key={pillar.title}
            title={pillar.title}
            icon={pillar.icon}
            iconAccent={pillar.iconAccent}
          >
            {pillar.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="In the pipeline"
        title="Upcoming releases"
        description="Members can review chapters before they ship, influence what we measure, and join live read-outs."
      >
        {releases.map((release) => (
          <Card
            key={release.title}
            title={release.title}
            icon={release.icon}
            iconAccent={release.iconAccent}
          >
            {release.description}
          </Card>
        ))}
      </Section>

      <Section eyebrow="Methodology" title="How we produce our research" columns="two">
        {methodology.map((item) => (
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

      <section className="card space-y-4 bg-white/90">
        <h2 className="text-2xl font-semibold text-atsMidnight">Share your perspective</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Want to be featured as a case study or provide anonymised metrics? Email the research team and we’ll schedule a scoping call.
        </p>
        <a className="btn-primary w-fit" href="mailto:research@abovethestack.com">
          Contact research
        </a>
      </section>
    </div>
  )
}
