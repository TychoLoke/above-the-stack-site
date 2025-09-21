import Card from '@/components/Card'
import Section from '@/components/Section'
import MemberCard from '@/components/MemberCard'
import { leadershipTeam } from '@/data/leadershipTeam'

export const metadata = { title: 'About — Above The Stack' }

const differentiators = [
  {
    title: 'MSP-first',
    description: 'Decisions, content, and discussions are shaped by MSPs.',
  },
  {
    title: 'Independent & neutral',
    description: 'No single vendor sets the agenda inside Above The Stack.',
  },
  {
    title: 'Practical & open',
    description: 'Expect real stories, debates, and resources — not theory.',
  },
  {
    title: 'Community-driven',
    description: 'Everyone’s voice matters and healthy challenges are encouraged.',
  },
]

const membershipBenefits = [
  'Access to exclusive playbooks, expert sessions, roundtables, and peer learning.',
  'Be part of a trusted network of MSPs who want to grow without gatekeeping.',
]

const coreRules = ['No Sales', 'No Ego', 'No Exclusions']

export default function Page() {
  return (
    <div className="space-y-24">
      <section className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700">
        <span className="eyebrow">Our mission</span>
        <h1 className="h1 text-balance text-atsMidnight">Building the independent, MSP-first community</h1>
        <p>
          At Above The Stack, our mission is clear: to build the independent, MSP-first community
          where providers can openly share, learn, and grow stronger together.
        </p>
        <p>
          Too often, MSPs find themselves in spaces dominated by vendor agendas, sales pitches, or
          closed circles. We wanted to change that. Above The Stack is designed as a true home for
          MSPs — a place to discuss challenges, exchange experiences, and get access to practical
          knowledge without the noise.
        </p>
        <p>
          The initiative is stewarded by the Above The Stack Leadership Team — Ashley Schut, Tycho
          Löke, Pierre Kleine-Schaars, and Timon Bergsma. Their role is to ensure every member’s voice
          is heard, documented, and turned into action inside Above Connect.
        </p>
        <div className="grid gap-6 pt-4 sm:grid-cols-2">
          {leadershipTeam.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
        <p className="text-base">
          Our guiding principle is simple: the MSP is always at the center. We officially launch on
          November 1st, followed by our first in-person meetup in December.
        </p>
      </section>

      <Section
        eyebrow="Membership"
        title="Designed for MSPs with room for partners"
        description="Membership is intentionally simple so teams can focus on learning, collaborating, and building better services."
        columns="two"
      >
        <div className="card space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-atsMidnight">MSP membership</h3>
            <p className="text-sm font-semibold text-atsOcean">€150 per year</p>
            <p className="text-xs uppercase tracking-[0.2em] text-atsOcean/70">
              Per company — all team members included
            </p>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
            {membershipBenefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-atsOcean" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card space-y-3">
          <h3 className="text-lg font-semibold text-atsMidnight">Vendors &amp; ISVs</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Welcome through custom partnerships designed to be sales-neutral and focused on knowledge
            sharing.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            Collaborate with MSPs on programming that prioritises transparency, shared discovery, and
            joint problem-solving over pitches.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="What makes us different"
        title="What makes Above The Stack different?"
        columns="two"
      >
        {differentiators.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Our guardrails"
        title="The 3 core rules every member signs up for"
        columns="one"
      >
        <div className="card space-y-4">
          <ol className="space-y-3 text-sm leading-relaxed text-slate-600">
            {coreRules.map((rule, index) => (
              <li key={rule} className="flex gap-4">
                <span className="text-sm font-semibold text-atsOcean">{index + 1}.</span>
                <span className="font-medium text-atsMidnight">{rule}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm leading-relaxed text-slate-600">
            Above The Stack is where MSPs — and the partners who support them — can have the
            conversations that really matter. Together, we’re building a community that is open,
            honest, and always focused on helping MSPs succeed.
          </p>
        </div>
      </Section>
    </div>
  )
}
