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
  if (error) return <div className="card">Unable to load the latest threads.</div>
  if (isLoading) return <div className="card">Loading…</div>
  if (!data?.length) {
    return (
      <div className="card">
        No community conversations yet. Be among the first to share insights in the portal.
      </div>
    )
  }
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {data.map((t:any) => (
        <a
          key={t.id}
          href={`${process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'}/t/${t.slug}/${t.id}`}
          className="card transition duration-200 hover:-translate-y-1 hover:border-atsOcean/40 hover:shadow-glow"
        >
          <div className="font-medium text-atsMidnight">{t.title}</div>
          <div className="muted mt-1 text-xs">Last activity: {formatDate(t.last_posted_at)}</div>
        </a>
      ))}
    </div>
  )
}
