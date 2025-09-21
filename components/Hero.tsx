export default function Hero() {
  return (
    <section className="py-12 md:py-20 text-center">
      <h1 className="h1">Above The Stack</h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg muted">
        Independent insights, practical playbooks, and a trusted community for 
        Managed Service Providers. Launching in Europe with a focus on digital 
        sovereignty — built to scale globally.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
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
  )
}