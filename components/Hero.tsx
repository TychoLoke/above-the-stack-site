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
        <div className="card space-y-6 border-atsOcean/20 bg-gradient-to-br from-white via-white to-atsSky/10">
          <div className="space-y-2">
            <span className="tag">Next research drop</span>
            <h3 className="text-2xl font-semibold text-atsMidnight">Global MSP Landscape 2025</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Benchmarks, partner expectations, and pricing signals gathered from 120+ MSP leaders
              across multiple regions.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsOcean" />
              Comparative data on service mix, ARR per seat, and partner tooling stacks.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsCoral" />
              Regulation cheatsheets covering NIS2 and DORA implications for MSPs.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-atsSky" />
              Operator commentary sourced directly from the Above The Stack community.
            </li>
          </ul>
          <div className="flex flex-col gap-3 rounded-2xl bg-white/70 p-4 text-sm text-slate-600">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-atsOcean/70">
              <span>Members</span>
              <span>Early access</span>
            </div>
            <p>
              Community members receive chapters in-progress, prompts for peer reviews, and live
              read-outs before publication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}