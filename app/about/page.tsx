import Card from '@/components/Card'
import Section from '@/components/Section'
import MemberCard from '@/components/MemberCard'
import { leadershipTeam } from '@/data/leadershipTeam'
import { Compass, FlaskConical, Scale, Sparkles, UsersRound } from 'lucide-react'

export const metadata = { title: 'About — Above The Stack' }


const iconClass = 'h-5 w-5'


const differentiators = [
  {
    title: 'MSP-first, always',
    description: 'Every programme, playbook, and decision is shaped by MSP operators. Partners participate in support of member outcomes.',
    iconAccent: 'midnight' as const,
    icon: <Compass aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Independent & neutral',
    description: 'No single vendor funds the agenda. Guardrails keep discussions transparent, accountable, and sales-neutral.',
    iconAccent: 'ocean' as const,
    icon: <Scale aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Practical & open',
    description: 'We ship research and playbooks iteratively with member feedback baked in, not theory written in a vacuum.',
    iconAccent: 'sky' as const,
    icon: <FlaskConical aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
  {
    title: 'Community-powered',
    description: 'Moderators curate, but members lead. Anyone can propose research, facilitate sessions, or contribute assets.',
    iconAccent: 'coral' as const,
    icon: <UsersRound aria-hidden="true" className={iconClass} strokeWidth={1.8} />,
  },
]

const membershipBenefits = [
  'Access to exclusive playbooks, expert sessions, roundtables, and peer learning.',
  'Be part of a trusted network of MSPs who want to grow without gatekeeping.',
  'Submit research ideas and vote on what ships next in Above Connect.',
]

const coreRules = [
  {
    title: 'No sales',
    description: 'Share expertise, not pitches. When partners contribute, they do so in service of member outcomes.',
  },
  {
    title: 'No ego',
    description: 'Bring candour and context. We celebrate wins, interrogate misses, and stay curious.',
  },
  {
    title: 'No exclusions',
    description: 'All managed service professionals are welcome. Diversity of background, region, and experience makes us sharper.',
  },
]

export default function Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <div className="space-y-24">
      <section className="glass-panel mx-auto max-w-5xl space-y-6 px-6 py-12 text-lg leading-relaxed text-slate-700 sm:px-10 sm:py-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/0 bg-atsOcean/10 px-4 py-1 text-sm font-semibold text-atsOcean/80">
          <Sparkles aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} /> Our mission
        </span>
        <h1 className="h1 text-balance text-atsMidnight">Building the independent, MSP-first community</h1>
        <p>
          Above The Stack exists so managed service providers and trusted partners can collaborate without agenda. We created a welcoming space where operators compare notes, surface the signal that matters, and build resources that keep MSPs ahead of the stack.
        </p>
        <p>
          Too often, MSPs land in rooms dominated by vendor pitches, or communities where transparency is optional. Above The Stack flips that script. Members show their work, debate respectfully, and document the lessons so the entire industry benefits.
        </p>
        <p>
          The initiative is stewarded by the Above The Stack Leadership Team — Ashley Schut, Tycho Löke, Pierre Kleine-Schaars, and Timon Bergsma. Their role is to ensure every member’s voice is heard, documented, and turned into action inside Above Connect.
        </p>
        <div className="grid gap-8 pt-6 sm:grid-cols-2 xl:gap-10">
          {leadershipTeam.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
        <p className="text-base">
          We officially launch on November 1st with our first in-person meetup in December. Join now to help shape the launch cohort and the programmes that follow.
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <a className="btn-primary w-full justify-center sm:w-auto" href={`${portalUrl}/signup`}>
            Become a Member
          </a>
          <a className="btn-secondary w-full justify-center sm:w-auto" href="mailto:hello@abovethestack.com">
            Talk to the team
          </a>
        </div>
      </section>

      <Section
        eyebrow="Membership"
        title="Designed for MSPs with room for partners"
        description="Membership is intentionally simple so teams can focus on learning, collaborating, and building better services."
        columns="two"
      >
        <div className="card space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-atsMidnight">MSP membership</h3>
            <p className="text-3xl font-semibold text-atsMidnight">€150 / $165 per year</p>
            <p className="text-xs uppercase tracking-[0.25em] text-atsOcean/70">
              Per company — all team members included, local currency equivalents available
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
        <div className="card space-y-4">
          <h3 className="text-lg font-semibold text-atsMidnight">Vendors &amp; ISVs</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Welcome through curated partnerships designed to stay sales-neutral and focused on knowledge sharing. Bring your expertise, share transparently, and collaborate with members on the programmes that matter.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            Email <a className="font-semibold text-atsOcean hover:underline" href="mailto:partnerships@abovethestack.com">partnerships@abovethestack.com</a> to explore opportunities.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="What makes us different"
        title="How we show up for the community"
        columns="two"
      >
        {differentiators.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            icon={item.icon}
            iconAccent={item.iconAccent}
          >
            {item.description}
          </Card>
        ))}
      </Section>

      <Section
        eyebrow="Our guardrails"
        title="The three rules every member signs up for"
        columns="one"
      >
        <div className="card space-y-5">
          <ol className="space-y-4 text-sm leading-relaxed text-slate-600">
            {coreRules.map((rule, index) => (
              <li key={rule.title} className="flex gap-4">
                <span className="text-sm font-semibold text-atsOcean">{index + 1}.</span>
                <div>
                  <p className="text-base font-semibold text-atsMidnight">{rule.title}</p>
                  <p className="text-sm text-slate-600">{rule.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm leading-relaxed text-slate-600">
            Above The Stack is where MSPs — and the partners who support them — can have the conversations that really matter. Together we’re building a community that is open, honest, and focused on helping MSPs succeed.
          </p>
        </div>
      </Section>
    </div>
  )
}
