import Card from '@/components/Card'
import Section from '@/components/Section'

export const metadata = { title: 'Research — Above The Stack' }

const pillars = [
  {
    title: 'Market intelligence',
    description: 'Sizing, growth trajectories, and the economics behind European MSP service lines and partner ecosystems.',
  },
  {
    title: 'Regulation & compliance',
    description: 'Breakdowns of NIS2, DORA, and local regulations paired with implementation implications for MSP teams.',
  },
  {
    title: 'Operating benchmarks',
    description: 'Metrics on delivery efficiency, customer acquisition costs, and tooling adoption to guide investments.',
  },
]

const releases = [
  {
    title: 'European MSP Landscape 2025',
    description: 'Service mix, profitability signals, and competitive positioning across 120+ MSPs in 14 countries.',
  },
  {
    title: 'Vendor Relationship Pulse',
    description: 'How MSPs evaluate vendor partners, MDF programmes, and co-selling expectations for the year ahead.',
  },
  {
    title: 'State of Managed Security',
    description: 'Pricing models, staffing, and incident response capabilities for security-centric MSP offerings.',
  },
]

export default function Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <div className="space-y-24">
      <section className="space-y-6 text-lg leading-relaxed text-slate-700">
        <span className="eyebrow">Research</span>
        <h1 className="h1 text-balance text-atsMidnight">Independent intelligence to guide MSP strategy</h1>
        <p>
          Our research blends proprietary surveys, curated datasets, and interviews with operators and
          partner leaders. Every publication is reviewed by the community and includes recommendations
          you can action immediately.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href={`${portalUrl}/c/research/5`}>
            Access research in Above Connect
          </a>
          <a className="btn-ghost" href="mailto:research@abovethestack.com">
            Contribute data
          </a>
        </div>
      </section>

      <Section
        eyebrow="Focus areas"
        title="What we analyse"
        columns="three"
      >
        {pillars.map((pillar) => (
          <Card key={pillar.title} title={pillar.title}>
            {pillar.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="In the pipeline"
        title="Upcoming releases"
        description="Members can review chapters before they ship, influence what we measure, and join live read-outs."
        columns="three"
      >
        {releases.map((release) => (
          <Card key={release.title} title={release.title}>
            {release.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Methodology"
        title="How we produce our research"
        columns="two"
      >
        <Card title="Community-led">
          Surveys and interviews originate from the questions our members are asking. We vet every
          data contributor and anonymise results.
        </Card>
        <Card title="Transparent & iterative">
          Draft findings are posted in Above Connect for feedback. Members can challenge assumptions
          and request deeper cuts before publication.
        </Card>
        <Card title="Practical outcomes">
          Each report includes actions, metrics to monitor, and supporting templates so teams can
          implement the insights fast.
        </Card>
        <Card title="Global relevance">
          While we begin in Europe, we compare notes with MSPs worldwide to highlight differences and
          transferable learnings.
        </Card>
      </Section>

      <section className="card space-y-4 bg-white/90">
        <h2 className="text-2xl font-semibold text-atsMidnight">Share your perspective</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Want to be featured as a case study or provide anonymised metrics? Email the research team and
          we’ll schedule a scoping call.
        </p>
        <a className="btn-primary w-fit" href="mailto:research@abovethestack.com">
          Contact research
        </a>
      </section>
    </div>
  )
}