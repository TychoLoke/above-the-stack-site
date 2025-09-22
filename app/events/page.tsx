import Card from '@/components/Card'
import Section from '@/components/Section'
import { Handshake, Lightbulb, Presentation, UsersRound } from 'lucide-react'

export const metadata = { title: 'Events & Roundtables — Above The Stack' }

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

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

const iconClass = 'h-5 w-5'

const formats = [
  {
    title: 'Operator roundtables',
    description: 'Curated rooms of 10–12 MSP leaders facilitated by Above The Stack. Expect candid discussions and shared documents.',
    iconAccent: 'midnight' as const,
    icon: <UsersRound aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Research briefings',
    description: 'Live walkthroughs of upcoming reports with the analysts who produced them, plus access to the working datasets.',
    iconAccent: 'ocean' as const,
    icon: <Presentation aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Partner workshops',
    description: 'Co-creation sessions pairing MSPs with vendors to stress test roadmaps and improve go-to-market motions.',
    iconAccent: 'coral' as const,
    icon: <Handshake aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

export default function Page() {
  return (
    <div className="space-y-24">
      <section className="glass-panel space-y-6 px-6 py-12 text-lg leading-relaxed text-slate-700 sm:px-10 sm:py-14">
        <span className="tag">Programs</span>
        <h1 className="h1 text-balance text-atsMidnight">Events, briefings, and working sessions for builders</h1>
        <p>
          Above The Stack events are intentionally small. We curate the room so every participant can contribute, pressure test ideas, and leave with something immediately usable. Recordings and notes live inside the community for members who cannot attend live.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn-primary w-full justify-center sm:w-auto" href={`${portalUrl}/latest`}>
            View schedule in Above Connect
          </a>
          <a className="btn-secondary w-full justify-center sm:w-auto" href="mailto:events@abovethestack.com">
            Suggest a topic
          </a>
        </div>
      </section>

      <Section
        eyebrow="Upcoming"
        title="Next sessions"
        description="All sessions are hosted on Zoom with collaborative workspace tools. Members receive access links inside Above Connect."
      >
        {sessions.map((session) => (
          <div key={session.title} className="card space-y-3">
            <span className="tag text-xs">{session.date} · Virtual</span>
            <h3 className="text-lg font-semibold text-atsMidnight">{session.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{session.description}</p>
            <a className="inline-flex items-center gap-2 text-sm font-semibold text-atsOcean" href={`${portalUrl}/latest`}>
              Save your seat <span aria-hidden>→</span>
            </a>
          </div>
        ))}
      </Section>

      <Section eyebrow="Formats" title="Choose how you want to collaborate">
        {formats.map((format) => (
          <Card
            key={format.title}
            title={format.title}
            icon={format.icon}
            iconAccent={format.iconAccent}
          >
            {format.description}
          </Card>
        ))}
      </Section>

      <Section eyebrow="Host with us" title="Bring your topic to the Above The Stack community" columns="two">
        <Card
          title="Submit a session idea"
          href="mailto:events@abovethestack.com"
          cta="Share your proposal"
          icon={<Lightbulb aria-hidden="true" className={iconClass} strokeWidth={1.8} />}
         iconAccent="sky"
        >
          We welcome ideas from members and partners. Tell us the challenge you want to unpack, the audience you hope to gather, and what success looks like.
        </Card>
        <Card
          title="Partner opportunities"
          href="mailto:partnerships@abovethestack.com"
          cta="Discuss collaboration"
          icon={<Handshake aria-hidden="true" className={iconClass} strokeWidth={1.8} />}
          iconAccent="coral"
        >
          Vendors can co-host educational sessions. We work with you to keep the content practical and bias-free.
        </Card>
      </Section>
    </div>
  )
}
