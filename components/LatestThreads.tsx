'use client'
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(r => r.json())

const formatDate = (value?: string) => {
  if (!value) return '—'
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return value.slice(0, 10)
  }
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function LatestThreads() {
  const { data, error, isLoading } = useSWR('/api/discourse/latest', fetcher, { revalidateOnFocus: false })
  const portal = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  if (error) {
    return (
      <div className="card text-sm text-slate-600">
        Unable to load the latest conversations right now. Jump into Above Connect directly to see
        what everyone is talking about.
        <div className="mt-4">
          <a className="btn-ghost" href={`${portal}/latest`}>
            Open Above Connect
          </a>
        </div>
      </div>
    )
  }

  if (isLoading) return <div className="card">Loading community updates…</div>

  const threads = Array.isArray(data) ? data : []

  if (!threads.length) {
    return (
      <div className="card">
        No community conversations yet. Be among the first to share insights in Above Connect.
        <div className="mt-4">
          <a className="btn-ghost" href={`${portal}/signup`}>Join Above Connect</a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {threads.map((t:any) => (
          <a
            key={t.id}
            href={`${portal}/t/${t.slug}/${t.id}`}
            className="card group flex h-full flex-col justify-between focus-visible:card-focus focus-visible:outline-none"
          >
            <div className="space-y-2">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-atsOcean/60">
                Discussion
              </div>
              <div className="font-semibold text-atsMidnight group-hover:text-atsOcean">
                {t.title}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
              <span>Last activity</span>
              <span className="font-medium text-atsMidnight/80">{formatDate(t.last_posted_at)}</span>
            </div>
          </a>
        ))}
      </div>
      <div>
        <a className="btn-ghost" href={`${portal}/latest`}>
          View all conversations in Above Connect
        </a>
      </div>
    </div>
  )
}
