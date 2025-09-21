import { NextResponse } from 'next/server'

export const revalidate = 600 // 10 min

export async function GET() {
  const base = process.env.DISCOURSE_URL || 'https://portal.abovethestack.com'
  const key = process.env.DISC_API_KEY
  const user = process.env.DISC_API_USERNAME || 'system'

  try {
    const r = await fetch(`${base}/latest.json`, {
      headers: key ? { 'Api-Key': key, 'Api-Username': user } : {},
      // Next.js cache hints:
      next: { revalidate }
    })
    if (!r.ok) throw new Error('Failed to fetch latest topics')
    const json = await r.json()

    const topics = (json?.topic_list?.topics || []).slice(0, 6).map((t:any) => ({
      id: t.id, title: t.title, slug: t.slug, last_posted_at: t.last_posted_at
    }))
    return NextResponse.json(topics)
  } catch (e:any) {
    // Graceful fallback if env not set or API blocked
    return NextResponse.json([
      { id: 1, title: 'Welkom bij Above The Stack', slug: 'welkom', last_posted_at: new Date().toISOString() },
      { id: 2, title: 'Stel jezelf voor', slug: 'stel-jezelf-voor', last_posted_at: new Date().toISOString() }
    ])
  }
}
