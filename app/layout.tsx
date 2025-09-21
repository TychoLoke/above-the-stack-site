import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

const navigation = [
  { href: '/research', label: 'Research' },
  { href: '/playbooks', label: 'Playbooks' },
  { href: '/events', label: 'Events' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
]

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
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <html lang="en">
      <body className="relative min-h-screen bg-slate-50 text-slate-900">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-atsSky/25 via-white to-transparent" />
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
          <div className="container flex h-20 items-center justify-between gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-semibold tracking-tight text-atsMidnight transition hover:text-atsOcean"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-atsSky via-atsOcean to-atsCoral text-base font-bold text-white shadow-glow">
                ATS
              </span>
              <span className="hidden sm:inline">Above The Stack</span>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-atsOcean/70 sm:hidden">
                ATS
              </span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
              {navigation.map((item) => (
                <Link key={item.href} className="transition hover:text-atsOcean" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link
                className="hidden text-sm font-medium text-slate-600 transition hover:text-atsOcean lg:inline-flex"
                href="/community"
              >
                Explore Above Connect
              </Link>
              <Link className="btn-primary text-sm shadow-none" href={portalUrl}>
                Log in to Above Connect
              </Link>
            </div>
          </div>
        </header>
        <main className="container pb-24 pt-16 lg:pt-24">{children}</main>
        <footer className="mt-24 border-t border-slate-200/80 bg-white/70 py-14">
          <div className="container grid gap-10 text-sm text-slate-600 md:grid-cols-[2fr_1fr_1fr]">
            <div className="space-y-4">
              <Link
                href="/"
                className="text-lg font-semibold text-atsMidnight transition hover:text-atsOcean"
              >
                Above The Stack
              </Link>
              <p className="max-w-sm leading-relaxed">
                Independent MSP research, actionable playbooks, and Above Connect — our private
                member portal for managed service leaders across Europe and beyond.
              </p>
              <div className="flex gap-4 text-xs uppercase tracking-[0.2em] text-atsOcean/70">
                <span>Vendor neutral</span>
                <span>Community powered</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-atsMidnight">Navigate</h3>
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link key={item.href} className="transition hover:text-atsOcean" href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-atsMidnight">Stay connected</h3>
              <div className="flex flex-col gap-2">
                <Link className="transition hover:text-atsOcean" href={portalUrl}>
                  Log in to Above Connect
                </Link>
                <Link className="transition hover:text-atsOcean" href="/contact">
                  Contact
                </Link>
                <Link className="transition hover:text-atsOcean" href="/privacy">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-10 flex flex-col gap-3 border-t border-slate-200/70 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Above The Stack. Launching from Europe for MSPs worldwide.</p>
            <p className="font-medium text-atsOcean/80">Built together with the community.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
