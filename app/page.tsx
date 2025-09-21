import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import LatestThreads from '@/components/LatestThreads'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* What’s New Section */}
      <Section
        title="What’s New"
        subtitle="Fresh research, playbooks, events, and community discussions."
      >
        <Card
          title="European MSP Landscape 2025 — Preview"
          href="/research/european-msp-landscape-2025"
        >
          Early insights and trends shaping the European channel.
        </Card>
        <Card
          title="Playbook: Data Sovereignty & NIS2 Compliance"
          href="/playbooks/data-sovereignty"
        >
          Practical steps to align your services with Europe’s regulations.
        </Card>
        <Card
          title="Roundtable: MSP Pricing Strategies 2025"
          href="/events/pricing-2025"
        >
          Join peers to explore smarter pricing in a shifting market.
        </Card>
      </Section>

      {/* Forum Highlights */}
      <Section
        title="From the Community"
        subtitle="Join peers across Europe and beyond to share best practices."
      >
        <div className="md:col-span-3">
          <LatestThreads />
        </div>
      </Section>

      {/* Why ATS Section */}
      <Section title="Why Above The Stack?">
        <div className="card">
          <h3 className="font-semibold mb-1">Research</h3>
          <p className="muted">
            Independent analysis and benchmarks tailored for MSPs — built in
            Europe, relevant worldwide.
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-1">Playbooks</h3>
          <p className="muted">
            Actionable frameworks that help MSPs scale, stay compliant, and
            build trust.
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-1">Community</h3>
          <p className="muted">
            A trusted forum for MSPs and vendors to collaborate — launching in
            Europe, expanding globally.
          </p>
        </div>
      </Section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="h2">Ready to stay ahead?</h2>
        <p className="muted mt-2">
          Access our playbooks, join the conversation, and shape the future of
          the MSP ecosystem.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a className="btn-primary" href="/playbooks">
            Explore Playbooks
          </a>
          <a
            className="btn-ghost"
            href={process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'}
          >
            Join the Community
          </a>
          <a className="btn-ghost" href="/newsletter">
            Subscribe to Newsletter
          </a>
        </div>
      </section>
    </>
  )
}