import { communityCommitments } from '@/data/community'

export default function Hero() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <section className="relative overflow-hidden rounded-[2.75rem] border border-white/0 bg-white/80 px-8 py-16 shadow-glow backdrop-blur md:px-14 md:py-20">
      <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-atsSky/35 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-96 w-96 -translate-x-1/3 rounded-full bg-atsCoral/25 blur-3xl" />
      <div className="absolute -bottom-28 right-0 h-80 w-80 translate-x-1/4 rounded-full bg-atsOcean/30 blur-3xl" />

      <div className="relative grid items-start gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div className="space-y-8 text-left">
          <div className="space-y-3">
            <span className="eyebrow">Vendor-neutral knowledge for MSP leaders</span>
            <h1 className="h1 text-balance text-atsMidnight">
              Stay ahead of the stack with research, playbooks, and Above Connect — our private member portal
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
              Above The Stack distills the noise of the channel into practical direction. We work
              alongside MSPs and ecosystem partners worldwide to surface the market signals,
              regulation updates, and operating models that matter now.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href={portalUrl}>
              Log in to Above Connect
            </a>
            <a className="btn-ghost" href="/community">
              Tour the community
            </a>
            <a className="btn-ghost" href="/research">
              See upcoming research
            </a>
          </div>
          <dl className="grid gap-6 pt-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-atsOcean/70">
                Focus
              </dt>
              <dd className="mt-2 text-base font-semibold text-atsMidnight">
                Operator-led MSP growth
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-atsOcean/70">
                Format
              </dt>
              <dd className="mt-2 text-base font-semibold text-atsMidnight">
                Research × Playbooks
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-atsOcean/70">
                Community
              </dt>
              <dd className="mt-2 text-base font-semibold text-atsMidnight">
                Above Connect member portal
              </dd>
            </div>
          </dl>
        </div>
        <div className="card space-y-6 border-transparent bg-gradient-to-br from-white via-atsSky/20 to-atsOcean/10 text-slate-800 shadow-glow">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-atsMidnight">Community commitments</h2>
            <span className="hidden rounded-full border border-white/50 bg-white/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-atsOcean/80 md:inline-flex">
              Built with members
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {communityCommitments.map((item) => (
              <div
                key={item.title}
                className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/60 bg-white/75 p-5 text-sm leading-relaxed text-slate-600 shadow-[0_25px_55px_-32px_rgba(15,31,75,0.6)] backdrop-blur"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-[0.12] transition-opacity duration-300 group-hover:opacity-25`}
                />
                <span
                  className={`relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-[0.65rem] font-semibold uppercase tracking-wide text-white shadow-glow`}
                >
                  {item.label}
                </span>
                <h3 className="relative text-sm font-semibold text-atsMidnight">{item.title}</h3>
                <p className="relative">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}