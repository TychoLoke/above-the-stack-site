export const metadata = { title: "Roundtable: MSP Pricing Strategies 2025 — Above The Stack" };
export default function Page() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate-700">
      <h1 className="h1 text-atsMidnight">Roundtable: MSP Pricing Strategies 2025</h1>
      <p>
        We are finalising the agenda for an operator-only conversation on packaging, value metrics,
        and outcome-based pricing. Registration opens soon.
      </p>
      <p>
        Join the newsletter or community to be the first to know when seats become available.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a className="btn-primary w-full justify-center sm:w-auto" href="/newsletter">
          Get event alerts
        </a>
        <a
          className="btn-ghost w-full justify-center sm:w-auto"
          href={process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'}
        >
          Discuss with peers
        </a>
      </div>
    </div>
  )
}