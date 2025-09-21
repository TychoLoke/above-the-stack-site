import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Above The Stack — Research, Playbooks & Community for MSPs',
  description: 'Vendor-neutral insights, playbooks and a peer community that help MSPs grow.',
  openGraph: {
    title: 'Above The Stack',
    description: 'Vendor-neutral insights, playbooks and a peer community that help MSPs grow.',
    url: 'https://www.abovethestack.com',
    siteName: 'Above The Stack',
  },
  twitter: { card: 'summary_large_image', title: 'Above The Stack' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <header className="sticky top-0 z-50 border-b border-neutral-800 backdrop-blur bg-neutral-950/60">
          <div className="container flex items-center justify-between h-14">
            <Link href="/" className="font-semibold">Above The Stack</Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/research">Research</Link>
              <Link href="/playbooks">Playbooks</Link>
              <Link href="/events">Events</Link>
              <Link href="/community">Community</Link>
              <Link href="/about">Over</Link>
              <Link href="/newsletter" className="btn-primary">Nieuwsbrief</Link>
            </nav>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t border-neutral-800 mt-10">
  <div className="container py-10 text-sm text-neutral-400">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p>
        © {new Date().getFullYear()} Above The Stack. Launching in Europe. Built for the world.
      </p>
      <div className="flex gap-4">
        <a href="/privacy">Privacy</a>
        <a href="/contact">Contact</a>
        <a href={process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'}>
          Community
        </a>
      </div>
    </div>
  </div>
</footer>
      </body>
    </html>
  )
}
