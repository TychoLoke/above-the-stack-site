import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import LatestThreads from '@/components/LatestThreads'
import MemberCard from '@/components/MemberCard'
import { leadershipTeam } from '@/data/leadershipTeam'

const defaultPortalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

const upcomingHighlights = [
  {
    eyebrow: 'Research',
    title: 'Global MSP Landscape 2025 — Preview',
    description:
      'Signals, profitability benchmarks, and customer acquisition data crowdsourced from members across five regions.',
    href: '/research',
    cta: 'Read the outline',
    className: 'border-transparent bg-gradient-to-br from-white via-atsSky/15 to-atsOcean/10',
    icon: '📊',
  },
  {
    eyebrow: 'Playbook',
    title: 'Operationalising NIS2 in your service catalogue',
    description:
      'Implementation workflows, customer comms, and pricing guidance created by operators already living the directive.',
    href: '/playbooks',
    cta: 'See the chapters',
    icon: '🛡️',
  },
  {
    eyebrow: 'Roundtable',
    title: 'Pricing Strategy 2025: Seats, bundles & outcomes',
    description:
      'A live operator roundtable unpacking the pricing levers that resonate in mature and emerging markets.',
    href: '/events',
    cta: 'Reserve your seat',
    className: 'border-transparent bg-gradient-to-br from-white via-atsCoral/20 to-atsSky/10',
    icon: '🤝',
  },
]

const memberDesigned = [
  {
    title: 'Signals shaped by peers',
    description: 'Members vote on the research we publish, share data, and co-author playbooks that are reviewed in the open.',
    icon: '🗳️',
  },
  {
    title: 'Transparent collaboration',
    description: 'Every conversation happens under real names with context so operators can learn together, not in silos.',
    icon: '🔍',
  },
  {
    title: 'Global reach, local nuance',
    description: 'Chapters across EMEA, North America, and APAC compare regulation, pricing pressure, and service design.',
    icon: '🌍',
  },
]

const membershipBenefits = [
  {
    title: 'All employees included',
    description: 'One €150/year company membership covers your whole team with local currency equivalents.',
    icon: '👥',
  },
  {
    title: 'Guided onboarding',
    description: 'Meet moderators, get recommendations for lounges, and receive a personal Above Connect orientation.',
    icon: '🧭',
  },
  {
    title: 'Living library',
    description: 'Research, playbooks, and templates are refreshed as the community reports back on what works.',
    icon: '📚',
  },
  {
    title: 'Member-led programmes',
    description: 'Roundtables, office hours, and partner workshops run every month — all recorded inside Above Connect.',
    icon: '🎙️',
  },
]

const whyMsps = [
  {
    title: 'Managed Service Providers (MSPs)',
    description: 'Deliver the ongoing customer experience, run the stack, and keep clients productive. You sit at the heart of every decision we make.',
    icon: '💡',
  },
  {
    title: 'Managed Security Service Providers (MSSPs)',
    description: 'Bring deep security expertise, compliance stewardship, and incident response knowledge that strengthens the whole community.',
    icon: '🛡️',
  },
  {
    title: 'Managed Infrastructure Providers (MIPs)',
    description: 'Operate critical infrastructure, cloud, and connectivity that power digital businesses — your insights shape our playbooks.',
    icon: '🛰️',
  },
  {
    title: 'Service Providers (SPs)',
    description: 'From telecom to vertical IT specialists, your service delivery models keep customers connected and confident.',
    icon: '📡',
  },
  {
    title: 'Consultancies & advisors',
    description: 'Advisors who build managed offerings or guide MSPs on transformation are welcome. Bring your frameworks and learnings.',
    icon: '🧠',
  },
]

const testimonials = [
  {
    quote:
      'Above The Stack gives us a daily reason to revisit strategy with real operator data. It feels like sitting beside peers who actually ship.',
    name: 'Jamie N.',
    role: 'COO, UK-based MSP',
  },
  {
    quote:
      'The moderation keeps discussions brave but respectful. We have partners in the room, yet the tone stays vendor-neutral and useful.',
    name: 'Alicia R.',
    role: 'Head of Partnerships, EU MSSP',
  },
  {
    quote:
      'Playbooks go from idea to implementation fast because members co-create. It is the most practical MSP community we have joined.',
    name: 'Victor L.',
    role: 'Founder, North American MSP',
  },
]

const programs = [
  {
    title: 'Operator roundtables',
    description: '12-person rooms moderated by the editorial team to unpack pricing, delivery, and growth bets with peers.',
    href: '/events',
    cta: 'Explore sessions',
    icon: '🧩',
  },
  {
    title: 'Research briefings',
    description: 'Monthly walkthroughs of upcoming reports with the analysts and members who provided the data.',
    href: '/research',
    cta: 'Get notified',
    icon: '🛰️',
  },
  {
    title: 'Partner workshops',
    description: 'Neutral collaboration spaces where vendors, distributors, and MSPs stress test roadmaps.',
    href: '/community',
    cta: 'Request an invite',
    icon: '🤝',
  },
  {
    title: 'Office hours',
    description: 'Weekly clinics with members and moderators to debug tooling, share dashboards, and swap templates.',
    href: `${defaultPortalUrl}/latest`,
    cta: 'See schedule',
    icon: '🗓️',
  },
]

export default function HomePage() {
  const portalUrl = defaultPortalUrl

  return (
    <>
      <Hero />

      <Section
        eyebrow="Fresh intelligence"
        title="What’s shipping to members next"
        description="Every release is shaped with community feedback before it goes live. Get a preview of the next drops the team is polishing."
      >
        {upcomingHighlights.map((item) => (
          <Card
            key={item.title}
            eyebrow={item.eyebrow}
            title={item.title}
            href={item.href}
            cta={item.cta}
            className={`${item.className ?? ''} shadow-glow`}
            icon={item.icon}
          >
            {item.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="By members, for members"
        title="The community runs on open contributions and peer accountability"
        description="Above The Stack is more than a portal — it’s a working studio for MSPs, MSSPs, and partners who believe in building together."
      >
        {memberDesigned.map((feature) => (
          <Card key={feature.title} title={feature.title} icon={feature.icon}>
            {feature.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Membership"
        title="One simple membership for your entire company"
        description="€150 per year per company. No per-seat math, no hidden tiers. Every teammate gets access to Above Connect and the resources the community is building."
        columns="two"
      >
        <div className="card gradient-border space-y-6 bg-white/90">
          <div>
            <span className="tag text-xs">Company plan</span>
            <h3 className="mt-4 text-3xl font-semibold text-atsMidnight">€150 / year</h3>
            <p className="text-sm font-semibold text-atsOcean">Local currency equivalents available</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Membership covers every employee. Partners join through the same flow — we simply confirm you can contribute in a sales-neutral capacity.
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2 text-atsMidnight">
              <span className="text-lg" aria-hidden>
                ✨
              </span>
              Your MSP community is waiting inside Above Connect.
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href={`${portalUrl}/signup`}>
                Become a Member
              </a>
              <a className="btn-secondary" href="mailto:partnerships@abovethestack.com">
                Talk to the team
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {membershipBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="card flex items-start gap-4 border-white/70 bg-white/90 p-5 text-left shadow-[0_25px_60px_-48px_rgba(15,31,75,0.6)]"
            >
              <span className="mt-1 text-2xl" aria-hidden>
                {benefit.icon}
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-atsMidnight">{benefit.title}</h4>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Community pulse"
        title="What members are unpacking inside Above Connect"
        description={
          <>
            Above Connect is the beating heart of Above The Stack — a moderated, searchable hub for MSP leaders and trusted partners. Here’s a look at the live signal this week.
          </>
        }
        columns="two"
        action={
          <a className="btn-secondary" href={`${portalUrl}/signup`}>
            Join the portal
          </a>
        }
      >
        <div className="card space-y-5">
          <h3 className="text-lg font-semibold text-atsMidnight">Inside the threads</h3>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-atsOcean" />
              Comparing AI-enabled support packages and how to price outcome-based bundles.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-atsSky" />
              Real-world NIS2 implementation steps, including contract updates and customer comms.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-atsCoral" />
              Benchmarks on tooling satisfaction across RMM, PSA, and customer success platforms.
            </li>
          </ul>
          <div className="rounded-2xl border border-atsOcean/10 bg-atsOcean/5 p-4 text-sm text-atsMidnight">
            Company membership is €150 / $165 per year. We verify MSP status, curate partner access, and keep every discussion sales-neutral.
          </div>
        </div>
        <LatestThreads />
      </Section>

      <Section
        eyebrow="Why MSPs matter"
        title="Inclusive by design: all managed service professionals belong here"
        description="Above The Stack serves the full spectrum of managed service providers. If you deliver ongoing value to customers, your insights move the community forward."
        columns="three"
      >
        {whyMsps.map((item) => (
          <Card key={item.title} title={item.title} icon={item.icon}>
            {item.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Programs & events"
        title="Connect live with peers and partners"
        description="We keep gatherings intimate so every voice is heard. Most sessions are capped at 12 participants and documented inside Above Connect."
        columns="two"
      >
        {programs.map((program) => (
          <Card key={program.title} title={program.title} href={program.href} cta={program.cta} icon={program.icon}>
            {program.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Member voices"
        title="What our members are saying"
        columns="three"
      >
        {testimonials.map((item) => (
          <div key={item.name} className="card flex h-full flex-col justify-between space-y-4 bg-white/90 p-7">
            <p className="text-lg font-semibold leading-relaxed text-atsMidnight/90">“{item.quote}”</p>
            <div className="text-sm font-medium text-atsOcean">
              {item.name}
              <span className="mt-1 block text-xs uppercase tracking-[0.3em] text-atsOcean/60">{item.role}</span>
            </div>
          </div>
        ))}
      </Section>

      <Section
        eyebrow="Leadership team"
        title="Meet the people stewarding Above The Stack"
        description="Ashley Schut, Tycho Löke, Pierre Kleine-Schaars, and Timon Bergsma ensure every member’s voice is heard and turned into action."
        columns="two"
      >
        {leadershipTeam.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </Section>

      <section className="mt-28">
        <div className="card bg-gradient-to-br from-atsMidnight via-atsOcean to-atsSky/80 text-white">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow text-white/70">Ready when you are</span>
              <h2 className="text-3xl font-semibold tracking-tight text-balance">Become part of the independent MSP community</h2>
              <p className="text-sm leading-relaxed text-white/80">
                Join Above The Stack to co-create research, access playbooks, and connect with peers in Above Connect. It’s the hub where managed service leaders keep each other sharp.
              </p>
            </div>
            <div className="space-y-3">
              <a className="btn-primary w-full justify-center bg-white text-atsMidnight hover:opacity-90" href={`${portalUrl}/signup`}>
                Become a Member
              </a>
              <a className="btn-secondary w-full justify-center border-white/40 bg-white/10 text-white hover:bg-white/20" href="/community">
                Preview the community
              </a>
              <a className="btn-secondary w-full justify-center border-white/40 bg-white/10 text-white hover:bg-white/20" href={portalUrl}>
                Log in to Above Connect
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
