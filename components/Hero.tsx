export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/0 bg-white/80 px-6 py-16 text-center shadow-glow backdrop-blur-sm md:px-12 md:py-24">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-atsSky/40 blur-3xl" />
      <div className="absolute -bottom-36 left-0 h-80 w-80 -translate-x-1/2 rounded-full bg-atsCoral/30 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 translate-x-1/3 rounded-full bg-atsOcean/30 blur-3xl" />

      <h1 className="h1 bg-gradient-to-r from-atsSky via-atsOcean to-atsCoral bg-clip-text text-transparent">
        Above The Stack
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-700">
        Independent insights, practical playbooks, and a trusted community for Managed Service
        Providers. Launching in Europe with a focus on digital sovereignty — built to scale
        globally.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
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