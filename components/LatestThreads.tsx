'use client'
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(r => r.json())

export default function LatestThreads() {
  const { data, error, isLoading } = useSWR('/api/discourse/latest', fetcher, { revalidateOnFocus: false })
  if (error) return <div className="card">Kan threads niet laden.</div>
  if (isLoading) return <div className="card">Laden…</div>
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {data.map((t:any) => (
        <a key={t.id} href={`${process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'}/t/${t.slug}/${t.id}`} className="card hover:border-neutral-700">
          <div className="font-medium">{t.title}</div>
          <div className="muted mt-1 text-xs">Laatste activiteit: {t.last_posted_at?.slice(0,10) || '—'}</div>
        </a>
      ))}
    </div>
  )
}
