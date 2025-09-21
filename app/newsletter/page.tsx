import Card from '@/components/Card'
import Section from '@/components/Section'

export const metadata = { title: 'Member Access — Above The Stack' }

export default function Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <div className="space-y-24">
      <section className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate-700">
        <span className="eyebrow">Member access</span>
        <h1 className="h1 text-balance text-atsMidnight">Log in to Above The Stack</h1>
        <p>
          The newsletter has evolved into our community digest. Log in to the member portal to access
          research drops, playbooks in progress, and the weekly summary of what happened inside the
          Discourse forum.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn-primary" href={portalUrl}>
            Member login
          </a>
          <a className="btn-ghost" href={`${portalUrl}/signup`}>
            Request an invite
          </a>
        </div>
      </section>

      <Section
        eyebrow="Stay informed"
        title="What you receive inside the portal"
        columns="three"
      >
        <Card title="Weekly digest">
          Highlights from the community, new research fragments, and prompts that you can act on in
          under five minutes.
        </Card>
        <Card title="Early research access">
          Chapters from upcoming reports drop first in Discourse — weigh in before the public release.
        </Card>
        <Card title="Event notifications">
          Get alerted to roundtables, workshops, and office hours. RSVP happens directly inside the
          forum.
        </Card>
      </Section>

      <Section
        eyebrow="Need help?"
        title="Our team is here for you"
        columns="two"
      >
        <Card title="Reset your password" href={`${portalUrl}/password-reset`} cta="Reset now">
          Use the Discourse password reset flow. The link expires after 10 minutes for your security.
        </Card>
        <Card title="Contact support" href="mailto:support@abovethestack.com" cta="Email support">
          Reach out if you’re experiencing login issues or want to confirm your membership status.
        </Card>
      </Section>
    </div>
  )
}
