import Card from '@/components/Card'
import Section from '@/components/Section'
import {
  Bot,
  ChartSpline,
  FileText,
  Lightbulb,
  MessagesSquare,
  PenLine,
  ScrollText,
  Toolbox,
} from 'lucide-react'

export const metadata = { title: 'Playbooks — Above The Stack' }

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

const iconClass = 'h-5 w-5 text-atsMidnight'

const playbooks = [
  {
    title: 'NIS2 readiness kit',
    description: 'Gap assessment templates, customer comms, and service packaging guidance to operationalise the directive.',
    icon: <ScrollText aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'AI service launch framework',
    description: 'Positioning, pricing, and delivery runbooks for rolling out AI-enabled support without eroding trust.',
    icon: <Bot aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Customer success dashboard',
    description: 'A full measurement model linking support signals to retention, expansion, and advocacy metrics.',
    icon: <ChartSpline aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const whatsInside = [
  {
    title: 'Executive summary',
    description: 'A concise readout distilling the why, the opportunity, and the pitfalls — ready to share with leadership and partners.',
    icon: <FileText aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
{
  title: 'Implementation toolkit',
  description: 'Templates, checklists, and SOPs to plug directly into your PSA, documentation, and customer success workflows.',
  icon: <Toolbox aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
},
  {
    title: 'Community feedback loop',
    description: 'Dedicated Above Connect threads to surface questions, share outcomes, and collectively improve the material.',
    icon: <MessagesSquare aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

export default function Page() {
  return (
    <div className="space-y-24">
      <section className="glass-panel space-y-6 px-10 py-14 text-lg leading-relaxed text-slate-700">
        <span className="tag">Playbooks</span>
        <h1 className="h1 text-balance text-atsMidnight">Blueprints that translate research into revenue and resilience</h1>
        <p>
          Above The Stack playbooks are living documents. We publish early drafts inside the community, gather feedback from members, and refresh the content as regulations, pricing, and customer expectations shift.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href={`${portalUrl}/c/playbooks/15`}>
            Access playbooks in Above Connect
          </a>
          <a className="btn-secondary" href="mailto:hello@abovethestack.com">
            Request a custom workshop
          </a>
        </div>
      </section>

      <Section
        eyebrow="In production"
        title="Upcoming releases"
        description="Members can follow along as we build. Expect worksheets, calculators, facilitation guides, and ready-to-share collateral."
      >
        {playbooks.map((item) => (
          <Card key={item.title} title={item.title} icon={item.icon}>
            {item.description}
          </Card>
        ))}
      </Section>

      <Section eyebrow="What’s inside" title="Every playbook ships with">
        {whatsInside.map((item) => (
          <Card key={item.title} title={item.title} icon={item.icon}>
            {item.description}
          </Card>
        ))}
      </Section>

      <Section eyebrow="Contribute" title="Help us build the next playbook" columns="two">
        <Card
          title="Suggest a topic"
          href="mailto:hello@abovethestack.com"
          cta="Submit an idea"
          icon={<Lightbulb aria-hidden="true" className={iconClass} strokeWidth={1.8} />}
        >
          Let us know which challenge you want solved next. We co-create outlines with members and invite operators to share their working documents.
        </Card>
        <Card
          title="Become a reviewer"
          href={`${portalUrl}/groups/reviewers`}
          cta="Join the reviewer group"
          icon={<PenLine aria-hidden="true" className={iconClass} strokeWidth={1.8} />}
        >
          Review drafts ahead of release, contribute examples, and receive shout-outs in the published editions.
        </Card>
      </Section>
    </div>
  )
}
