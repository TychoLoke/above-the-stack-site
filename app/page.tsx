import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import LatestThreads from '@/components/LatestThreads'
import MemberCard from '@/components/MemberCard'
import { leadershipTeam } from '@/data/leadershipTeam'

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
          Join Above Connect, our moderated member portal where MSPs work through shared challenges
          in public while vendors and ISVs contribute as sales-neutral partners.
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
            Become a Member
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
            Company membership is €150 per year with space for every teammate. Verified MSPs receive
            direct access to Above Connect, while vendors participate by requesting partner lounges
            and sharing knowledge without a sales pitch.
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
        <Card title="Partner workshops" href="/community" cta="Request an Invite">
          Vendors collaborate with MSPs on real go-to-market motions, stress testing value props and
          co-selling agreements.
        </Card>
        <Card title="Office hours" href={`${portalUrl}/latest`} cta="See schedule">
          Weekly drop-in clinics with fellow members to debug tooling, share dashboards, and trade
          lessons.
        </Card>
      </Section>

      <Section
        eyebrow="By Members, For Members"
        title="The community runs on open contributions and peer-driven growth"
        description="Every company member can propose research, shape playbooks, and host sessions that keep the MSP agenda front and centre — every voice is welcomed and respected."
        columns="three"
      >
        <Card title="Open contributions">
          Share briefs, templates, and questions directly inside Above Connect. The community votes on
          what ships next, and leadership turns the most-requested ideas into programmes.
        </Card>
        <Card title="Peer accountability">
          Members challenge each other in the open, report back on outcomes, and elevate the playbooks
          with real-world proof so everyone keeps growing faster together.
        </Card>
        <Card title="Neutral guardrails">
          Our rules keep discussions fair and sales-neutral. Everyone participates under their company
          name and earns trust by respecting time, context, and transparency.
        </Card>
      </Section>

      <Section
        eyebrow="Channel Context"
        title="Putting MSPs at the heart of the IT channel"
        description={
          <>
            In our eyes, the MSP is the most important player in the channel because they are closest
            to the customer and deliver the services that make everything work.
          </>
        }
        columns="two"
      >
        <Card title="What the channel means here">
          We cover the entire ecosystem of vendors, distributors, marketplaces, consultants, and the
          service providers connecting it all. Above The Stack tracks how these forces converge around
          the customer.
        </Card>
        <Card title="Who we call an MSP">
          MSPs, MSSPs, MIPs, SPs, and consultancies building managed offerings are welcome. If your
          team delivers ongoing services that keep customers secure, productive, and informed, you
          belong inside Above Connect.
        </Card>
      </Section>

      <Section
        eyebrow="Leadership Team"
        title="Meet the Above The Stack Leadership Team"
        description="Ashley Schut, Tycho Löke, Pierre Kleine-Schaars, and Timon Bergsma ensure every member’s voice is heard and turned into action."
        columns="two"
      >
        {leadershipTeam.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </Section>

      <section className="mt-24">
        <div className="card bg-gradient-to-r from-atsMidnight via-atsOcean to-atsSky/80 text-white">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-4">
              <span className="eyebrow text-white/70">Launch cohort</span>
              <h2 className="text-3xl font-semibold tracking-tight text-balance">
                Join Above The Stack as a member
              </h2>
              <p className="text-sm leading-relaxed text-white/80">
                Membership is €150 per year per company, and every team member is included. Vendors
                and ISVs can request partner access as long as they contribute in a sales-neutral,
                knowledge-sharing role.
              </p>
            </div>
            <div className="space-y-3">
              <a
                className="btn-primary w-full justify-center bg-white text-atsMidnight hover:opacity-90"
                href={`${portalUrl}/signup`}
              >
                Become a Member
              </a>
              <a
                className="btn-ghost w-full justify-center border-white/30 bg-white/10 text-white hover:bg-white/20"
                href="mailto:partnerships@abovethestack.com"
              >
                Request an Invite
              </a>
              <a
                className="btn-ghost w-full justify-center border-white/30 bg-white/10 text-white hover:bg-white/20"
                href={portalUrl}
              >
                Log in to Above Connect
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}