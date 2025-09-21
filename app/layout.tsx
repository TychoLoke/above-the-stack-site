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
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold text-atsMidnight transition hover:text-atsOcean"
            >
              Above The Stack
            </Link>
            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
              <Link className="transition hover:text-atsOcean" href="/research">
                Research
              </Link>
              <Link className="transition hover:text-atsOcean" href="/playbooks">
                Playbooks
              </Link>
              <Link className="transition hover:text-atsOcean" href="/events">
                Events
              </Link>
              <Link className="transition hover:text-atsOcean" href="/community">
                Community
              </Link>
              <Link className="transition hover:text-atsOcean" href="/about">
                About
              </Link>
              <Link className="btn-primary text-sm shadow-none" href="/newsletter">
                Newsletter
              </Link>
            </nav>
          </div>
        </header>
        <main className="container py-16">{children}</main>
        <footer className="mt-16 border-t border-slate-200/80 bg-white/80">
          <div className="container py-10 text-sm text-slate-600">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p>
                © {new Date().getFullYear()} Above The Stack. Launching in Europe. Built for the
                world.
              </p>
              <div className="flex gap-4">
                <a className="transition hover:text-atsOcean" href="/privacy">
                  Privacy
                </a>
                <a className="transition hover:text-atsOcean" href="/contact">
                  Contact
                </a>
                <a
                  className="transition hover:text-atsOcean"
                  href={
                    process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'
                  }
                >
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
