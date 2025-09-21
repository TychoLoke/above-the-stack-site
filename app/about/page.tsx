import Card from '@/components/Card'
import Section from '@/components/Section'

export const metadata = { title: 'About — Above The Stack' }

const principles = [
  {
    title: 'Independence first',
    description:
      'We are not tied to a single vendor or investor agenda. Our editorial line is shaped with the operators inside our community.',
  },
  {
    title: 'Evidence over noise',
    description:
      'Every report and playbook is grounded in data, interviews, and peer validation before it reaches the broader channel.',
  },
  {
    title: 'Community powered',
    description:
      'The Discourse forum is where drafts are stress-tested, tool stacks are benchmarked, and programs are co-designed.',
  },
]

const team = [
  {
    name: 'Merel Van den Berg',
    role: 'Research & Editorial',
    bio: 'Former MSP operator turned analyst. Leads our market intelligence and writes the Above The Stack research briefs.',
  },
  {
    name: 'Jamie Carter',
    role: 'Community & Programs',
    bio: 'Ex-vendor partnerships lead. Curates roundtables, office hours, and makes sure every discussion is actionable.',
  },
  {
    name: 'Elias Martín',
    role: 'Product & Platform',
    bio: 'Built tooling for several European MSPs. Oversees our Discourse implementation and integrates community feedback into playbooks.',
  },
]

export default function Page() {
  return (
    <div className="space-y-24">
      <section className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700">
        <span className="eyebrow">Our story</span>
        <h1 className="h1 text-balance text-atsMidnight">Above The Stack exists to help MSPs build with confidence</h1>
        <p>
          We started Above The Stack after years of watching MSPs wade through vendor hype cycles and
          fragmented guidance. The operators we speak with asked for independent data, actionable
          frameworks, and a place to compare notes with peers. So we built a platform that combines
          all three.
        </p>
        <p>
          Today we are headquartered in Amsterdam and collaborate with contributors across the
          continent. Our members include founders, service delivery leads, partner managers, and the
          vendors who support them. Together we benchmark the European market, share working playbooks,
          and co-create the partnerships that move the channel forward.
        </p>
      </section>

      <Section eyebrow="Principles" title="How we show up for the community" columns="three">
        {principles.map((principle) => (
          <Card key={principle.title} title={principle.title}>
            {principle.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Team"
        title="Meet the editors and facilitators behind Above The Stack"
        columns="three"
      >
        {team.map((member) => (
          <div key={member.name} className="card space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-atsMidnight">{member.name}</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-atsOcean/70">{member.role}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">{member.bio}</p>
          </div>
        ))}
      </Section>

      <Section
        eyebrow="Collaborators"
        title="Advisors, data partners, and contributors"
        description="Our research and programming is enriched by practitioners who open their playbooks and by vendors who share transparent metrics."
        columns="two"
      >
        <Card title="Operator council">
          A rotating group of MSP founders from Benelux, Nordics, DACH, and the UK who review drafts,
          sense-check pricing analysis, and highlight regional nuances.
        </Card>
        <Card title="Vendor partners">
          Security, cloud, and SaaS providers participate in workshops and provide anonymised data so
          we can publish unbiased, comparable benchmarks.
        </Card>
        <Card title="Academic network">
          We collaborate with universities and independent analysts on methodology, ensuring our
          research meets rigorous standards.
        </Card>
        <Card title="Community moderators">
          Veteran operators and vendor leads who facilitate discussions, ensure psychological safety,
          and surface themes for deeper dives.
        </Card>
      </Section>

      <section className="card mx-auto max-w-4xl space-y-4 bg-white/90">
        <h2 className="text-2xl font-semibold text-atsMidnight">We would love to hear from you</h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Want to contribute research, request a briefing, or explore a partnership? Reach out and we’ll
          get back to you within two business days.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href="mailto:hello@abovethestack.com">
            Email the team
          </a>
          <a className="btn-ghost" href="/community">
            Explore the community
          </a>
        </div>
      </section>
    </div>
  )
}