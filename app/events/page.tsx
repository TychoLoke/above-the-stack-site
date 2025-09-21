import Card from '@/components/Card'
import Section from '@/components/Section'

export const metadata = { title: 'Events & Roundtables — Above The Stack' }

const sessions = [
  {
    title: 'Pricing Strategy 2025',
    date: 'February 27',
    description:
      'A 90-minute operator roundtable comparing per-seat, per-device, and value-based models with real pricing sheets.',
  },
  {
    title: 'Service Blueprint Clinics',
    date: 'March 14',
    description:
      'Workshop where members bring their delivery workflows and map improvements with peers and Above The Stack facilitators.',
  },
  {
    title: 'Vendor Co-Lab: Security Stack',
    date: 'April 9',
    description:
      'MSPs and security vendors co-design onboarding journeys, success metrics, and joint marketing plays.',
  },
]

export default function Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <div className="space-y-24">
      <section className="space-y-6 text-lg leading-relaxed text-slate-700">
        <span className="eyebrow">Programs</span>
        <h1 className="h1 text-balance text-atsMidnight">Events, briefings, and working sessions for builders</h1>
        <p>
          Above The Stack events are intentionally small. We curate the room so every participant can
          contribute, pressure test ideas, and leave with something immediately usable. Recordings and
          notes live inside the community for members who cannot attend live.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href={`${portalUrl}/latest`}>
            View schedule in the forum
          </a>
          <a className="btn-ghost" href="mailto:events@abovethestack.com">
            Suggest a topic
          </a>
        </div>
      </section>

      <Section
        eyebrow="Upcoming"
        title="Next sessions"
        description="All sessions are hosted on Zoom with collaborative workspace tools. Members receive access links in Discourse."
        columns="three"
      >
        {sessions.map((session) => (
          <div key={session.title} className="card space-y-3">
            <span className="tag text-xs">{session.date} · Virtual</span>
            <h3 className="text-lg font-semibold text-atsMidnight">{session.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{session.description}</p>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-atsOcean"
              href={`${portalUrl}/latest`}
            >
              Save your seat <span aria-hidden>→</span>
            </a>
          </div>
        ))}
      </Section>

      <Section
        eyebrow="Formats"
        title="Choose how you want to collaborate"
        columns="three"
      >
        <Card title="Operator roundtables">
          Curated rooms of 10–12 MSP leaders facilitated by Above The Stack. Expect candid discussions
          and shared documents.
        </Card>
        <Card title="Research briefings">
          Live walkthroughs of upcoming reports with the analysts who produced them, plus access to the
          working datasets.
        </Card>
        <Card title="Partner workshops">
          Co-creation sessions pairing MSPs with vendors to stress test roadmaps and improve GTM
          motions.
        </Card>
      </Section>

      <Section
        eyebrow="Host with us"
        title="Bring your topic to the Above The Stack community"
        columns="two"
      >
        <Card title="Submit a session idea" href="mailto:events@abovethestack.com" cta="Share your proposal">
          We welcome ideas from members and partners. Tell us the challenge you want to unpack, the
          audience you hope to gather, and what success looks like.
        </Card>
        <Card title="Partner opportunities" href="mailto:partnerships@abovethestack.com" cta="Discuss collaboration">
          Vendors can co-host educational sessions. We work with you to keep the content practical and
          bias-free.
        </Card>
      </Section>
    </div>
  )
}