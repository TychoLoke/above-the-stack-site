import Card from '@/components/Card'
import Section from '@/components/Section'

export const metadata = { title: 'Playbooks — Above The Stack' }

const playbooks = [
  {
    title: 'NIS2 readiness kit',
    description: 'Gap assessment templates, customer comms, and service packaging guidance to operationalise the directive.',
  },
  {
    title: 'AI service launch framework',
    description: 'Positioning, pricing, and delivery runbooks for rolling out AI-enabled support without eroding trust.',
  },
  {
    title: 'Customer success dashboard',
    description: 'A full measurement model linking support signals to retention, expansion, and advocacy metrics.',
  },
]

export default function Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <div className="space-y-24">
      <section className="space-y-6 text-lg leading-relaxed text-slate-700">
        <span className="eyebrow">Playbooks</span>
        <h1 className="h1 text-balance text-atsMidnight">Blueprints that translate research into revenue and resilience</h1>
        <p>
          Above The Stack playbooks are living documents. We publish early drafts inside the community,
          gather feedback from members, and refresh the content as regulations, pricing, and customer
          expectations shift.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href={`${portalUrl}/c/playbooks/15`}>
            Access playbooks in Discourse
          </a>
          <a className="btn-ghost" href="mailto:hello@abovethestack.com">
            Request a custom workshop
          </a>
        </div>
      </section>

      <Section
        eyebrow="In production"
        title="Upcoming releases"
        description="Members can follow along as we build. Expect worksheets, calculators, facilitation guides, and ready-to-share collateral."
        columns="three"
      >
        {playbooks.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="What’s inside"
        title="Every playbook ships with"
        columns="three"
      >
        <Card title="Executive summary">
          A concise readout distilling the why, the opportunity, and the pitfalls — ready to share
          with leadership and partners.
        </Card>
        <Card title="Implementation toolkit">
          Templates, checklists, and SOPs to plug directly into your PSA, documentation, and customer
          success workflows.
        </Card>
        <Card title="Community feedback loop">
          Dedicated Discourse threads to surface questions, share outcomes, and collectively improve
          the material.
        </Card>
      </Section>

      <Section
        eyebrow="Contribute"
        title="Help us build the next playbook"
        columns="two"
      >
        <Card title="Suggest a topic" href="mailto:hello@abovethestack.com" cta="Submit an idea">
          Let us know which challenge you want solved next. We co-create outlines with members and
          invite operators to share their working documents.
        </Card>
        <Card title="Become a reviewer" href={`${portalUrl}/groups/reviewers`} cta="Join the reviewer group">
          Review drafts ahead of release, contribute examples, and receive shout-outs in the published
          editions.
        </Card>
      </Section>
    </div>
  )
}