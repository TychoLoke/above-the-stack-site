import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import LatestThreads from '@/components/LatestThreads'
import MemberCard from '@/components/MemberCard'
import { foundingMembers } from '@/data/foundingMembers'

export default function HomePage() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <>
      <Hero />

      <Section
        eyebrow="Fresh intelligence"
        title="The next drops shipping to Above The Stack members"
        description="From market maps to regulation playbooks, every release is developed with MSP operators and partner managers inside our community."
      >
        <Card
          eyebrow="Research"
          title="European MSP Landscape 2025 — Preview"
          href="/research"
          cta="Read the outline"
        >
          Early signals, customer acquisition data, and tooling benchmarks gathered from leaders
          across 14 countries.
        </Card>
        <Card
          eyebrow="Playbook"
          title="Operationalising NIS2 inside your service catalogue"
          href="/playbooks"
          cta="See the chapters"
        >
          Practical workflows that help MSPs align with sovereignty requirements without derailing
          margins or delivery velocity.
        </Card>
        <Card
          eyebrow="Roundtable"
          title="Pricing Strategy 2025: Seats, bundles & outcomes"
          href="/events"
          cta="Reserve your seat"
        >
          Live operator session exploring the pricing levers that resonate with European buyers this
          year.
        </Card>
      </Section>

      <Section
        eyebrow="Designed for members"
        title="Why the community keeps Above The Stack open on a second screen"
        columns="three"
      >
        <Card title="Always-on market radar">
          Access research briefs, curated signal reports, and quick analysis drops covering vendor
          movements, regulation updates, and investment trends.
        </Card>
        <Card title="Actionable blueprints">
          Download playbooks that translate research into go-to-market sequences, service design
          templates, customer messaging, and board-ready metrics.
        </Card>
        <Card title="Peer accountability">
          Join Above Connect, our moderated member portal where MSPs, vendors, and ecosystem
          partners work through similar challenges in public.
        </Card>
      </Section>

      <Section
        eyebrow="Community pulse"
        title="What members are unpacking in Above Connect this week"
        description={
          <>
            Above Connect is the member portal of Above The Stack — the independent, MSP-first
            community. It’s where providers, vendors, and ISVs connect to exchange ideas, challenge
            assumptions, and build the future of managed services together. Here’s a taste of the
            latest signal.
          </>
        }
        columns="two"
        action={
          <a className="btn-ghost" href={`${portalUrl}/signup`}>
            Become a member
          </a>
        }
      >
        <div className="card space-y-4">
          <h3 className="text-lg font-semibold text-atsMidnight">Inside Above Connect</h3>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsOcean" />
              Service catalogue swaps between security-first and AI-enabled bundles.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsSky" />
              Shared tooling reviews covering RMM, PSA, and customer success platforms.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsCoral" />
              Real-world adaptations to NIS2, DORA, and GDPR enforcement trends.
            </li>
          </ul>
          <div className="rounded-2xl bg-atsOcean/5 p-4 text-sm text-atsMidnight">
            Verified MSPs get instant access to Above Connect. Vendors can request participation to
            collaborate in dedicated partner lounges.
          </div>
        </div>
        <LatestThreads />
      </Section>

      <Section
        eyebrow="Programs & events"
        title="We run small, high-signal sessions with people building the future stack"
        columns="two"
      >
        <Card title="Operator roundtables" href="/events" cta="Explore sessions">
          12-person digital rooms moderated by Above The Stack editors to unpack pricing shifts,
          service design, and customer success.
        </Card>
        <Card title="Research briefings" href="/research" cta="Get notified">
          Monthly broadcast deep dives reviewing our latest datasets, with Q&A directly inside the
          community afterwards.
        </Card>
        <Card title="Partner workshops" href="/community" cta="Request an invite">
          Vendors collaborate with MSPs on real go-to-market motions, stress testing value props and
          co-selling agreements.
        </Card>
        <Card title="Office hours" href={`${portalUrl}/latest`} cta="See schedule">
          Weekly drop-in clinics with fellow members to debug tooling, share dashboards, and trade
          lessons.
        </Card>
      </Section>

      <Section
        eyebrow="Founding members"
        title="Meet the Above Connect founding cohort"
        description="These community builders steward Above Connect and keep the experience grounded in MSP reality."
        columns="two"
      >
        {foundingMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </Section>

      <section className="mt-24">
        <div className="card bg-gradient-to-r from-atsMidnight via-atsOcean to-atsSky/80 text-white">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow text-white/70">Launch cohort</span>
              <h2 className="text-3xl font-semibold tracking-tight text-balance">
                Join Above The Stack as a founding member
              </h2>
              <p className="text-sm leading-relaxed text-white/80">
                Membership is free for MSPs. Vendors and partners can request access to collaborate
                transparently. Log in to Above Connect or request an invite and we’ll set you up.
              </p>
            </div>
            <div className="space-y-3">
              <a className="btn-primary w-full justify-center bg-white text-atsMidnight hover:opacity-90" href={portalUrl}>
                Member login
              </a>
              <a className="btn-ghost w-full justify-center border-white/30 bg-white/10 text-white hover:bg-white/20" href={`${portalUrl}/signup`}>
                Request an invite
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}