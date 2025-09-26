import Card from '@/components/Card'
import Section from '@/components/Section'
import {
  BarChart3,
  BrainCircuit,
  ClipboardList,
  Globe2,
  MicVocal,
  Rocket,
  ShieldCheck,
  Video,
} from 'lucide-react'

export const metadata = {
  title: 'Beyond The Stack Podcast — Above The Stack',
  description:
    'Beyond the Stack is the video podcast where hosts Tycho Löke and Ashley Schut unpack the strategy and security moves shaping the MSP and cybersecurity channel.',
}

const iconClass = 'h-5 w-5'

const topics = [
  {
    title: 'MSP evolution & growth',
    description: 'From VAR to Managed Intelligence Provider — real operators break down pricing, positioning, and delivery moves that scale.',
    iconAccent: 'midnight' as const,
    icon: <Rocket aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'AI in the channel',
    description: 'From enablement to Copilot readiness, we explore how AI augments services, skills, and customer experience.',
    iconAccent: 'sky' as const,
    icon: <BrainCircuit aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Cybersecurity trends',
    description: 'Understand emerging threats, resilience frameworks, and vendor-neutral best practices your teams can implement immediately.',
    iconAccent: 'coral' as const,
    icon: <ShieldCheck aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Business strategy',
    description: 'We unpack M&A, positioning, and service design so you can build future-proof, profitable managed offerings.',
    iconAccent: 'ocean' as const,
    icon: <BarChart3 aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Community & culture',
    description: 'Hear lessons from MSPs, vendors, and experts across the world to keep your teams aligned and resilient.',
    iconAccent: 'slate' as const,
    icon: <Globe2 aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const formatHighlights = [
  {
    title: 'Video-first storytelling',
    description:
      'Episodes are produced for video and audio, blending studio conversations with operator walkthroughs, dashboards, and live artefacts from the field.',
    iconAccent: 'ocean' as const,
    icon: <Video aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Operator playbooks on air',
    description:
      'We deconstruct an MSP or partner challenge every episode, giving you frameworks, templates, and benchmarks that translate straight into execution.',
    iconAccent: 'midnight' as const,
    icon: <ClipboardList aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Actionable follow-up',
    description:
      'Subscribers receive companion notes with links to research, community threads, and resources referenced on the show.',
    iconAccent: 'coral' as const,
    icon: <MicVocal aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const hosts = [
  {
    name: 'Tycho Löke',
    role: 'Co-founder & strategy lead, Above The Stack',
    description:
      'Tycho brings the growth lens from advising MSPs and vendors across EMEA. On the show he pressure-tests service positioning, GTM moves, and commercial strategy.',
  },
  {
    name: 'Ashley Schut',
    role: 'Co-founder & community lead, Above The Stack',
    description:
      'Ashley moderates the conversations with her trademark mix of operator empathy and cybersecurity rigor, keeping every discussion vendor-neutral and actionable.',
  },
]

export default function BeyondTheStackPodcastPage() {
  return (
    <div className="space-y-24">
      <section className="glass-panel space-y-6 px-6 py-12 text-lg leading-relaxed text-slate-700 sm:px-10 sm:py-14">
        <span className="tag">Podcast</span>
        <h1 className="h1 text-balance text-atsMidnight">Beyond The Stack: where strategy meets security</h1>
        <p>
          Beyond the Stack is the Above The Stack video podcast hosted by Tycho Löke and Ashley Schut. Each episode dives into the real challenges and opportunities shaping the MSP and cybersecurity channel.
        </p>
        <p>
          It’s vendor-neutral, fun, and conversational — giving MSPs, vendors, and industry leaders insights that go beyond tooling and into what really drives success in the channel.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn-primary w-full justify-center sm:w-auto" href="/newsletter">
            Get launch updates
          </a>
          <a className="btn-secondary w-full justify-center sm:w-auto" href="mailto:podcast@abovethestack.com">
            Pitch a story idea
          </a>
        </div>
      </section>

      <Section
        eyebrow="Themes"
        title="What we talk about"
        description="Operators, partners, and experts join to examine the shifts redefining managed services."
        columns="two"
      >
        {topics.map((topic) => (
          <Card key={topic.title} title={topic.title} icon={topic.icon} iconAccent={topic.iconAccent}>
            {topic.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Format"
        title="How each episode is built"
        description="Designed for busy MSP leaders — watch the video, listen on the go, or skim the companion notes."
        columns="three"
      >
        {formatHighlights.map((item) => (
          <Card key={item.title} title={item.title} icon={item.icon} iconAccent={item.iconAccent}>
            {item.description}
          </Card>
        ))}
      </Section>

      <Section eyebrow="Hosts" title="Meet the voices guiding the conversations" columns="two">
        {hosts.map((host) => (
          <Card key={host.name} title={host.name} eyebrow={host.role}>
            {host.description}
          </Card>
        ))}
      </Section>

      <section className="card gradient-border space-y-6 bg-white/90 p-10 text-center text-slate-700">
        <span className="eyebrow text-atsOcean/80">Stay in the loop</span>
        <h2 className="text-3xl font-semibold text-atsMidnight">Be first to access new episodes</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed">
          Subscribe to the Above The Stack newsletter and community updates to get recording drops, behind-the-scenes notes, and invitations to live tapings.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a className="btn-primary w-full justify-center sm:w-auto" href="/newsletter">
            Subscribe for updates
          </a>
          <a className="btn-secondary w-full justify-center sm:w-auto" href="/community">
            Join the community
          </a>
        </div>
      </section>
    </div>
  )
}
