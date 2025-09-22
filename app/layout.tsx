import type { Metadata, Viewport } from 'next'
import './globals.css'
import Link from 'next/link'
import { MobileNavigation } from '@/components/mobile-navigation'

const publicNavigation = [
  { href: '/insights', label: 'Insights' },
  { href: '/events', label: 'Events' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/company/abovethestack', label: 'LinkedIn' },
  { href: 'https://www.youtube.com/@abovethestack', label: 'YouTube' },
  { href: 'https://x.com/above_stack', label: 'X (Twitter)' },
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <html lang="en">
      <body className="relative min-h-screen bg-slate-50 text-slate-900">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-atsSky/15 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-gradient-to-t from-atsOcean/5 via-transparent to-transparent" />

        <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
          <div className="container flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full items-center justify-between gap-6">
              <Link
                href="/"
                className="flex items-center gap-3 text-lg font-semibold tracking-tight text-atsMidnight transition hover:text-atsOcean"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-atsSky via-atsOcean to-atsCoral text-base font-bold text-white shadow-glow">
                  ATS
                </span>
                <span className="hidden sm:inline">Above The Stack</span>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-atsOcean/70 sm:hidden">ATS</span>
              </Link>
              <MobileNavigation items={publicNavigation} portalUrl={portalUrl} />
            </div>
            <div className="hidden w-full lg:flex lg:items-center lg:justify-between lg:gap-12">
              <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600 sm:-mx-2 sm:flex-nowrap lg:mx-0 lg:gap-8">
                {publicNavigation.map((item) => (
                  <Link
                    key={item.href}
                    className="rounded-full px-3 py-1.5 transition hover:bg-atsOcean/5 hover:text-atsOcean"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <div className="flex flex-col text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-atsOcean/60">
                  <span>Above Connect</span>
                </div>
                <div className="hidden h-8 w-px bg-slate-200/70 lg:block" aria-hidden />
                <Link className="btn-secondary" href={portalUrl}>
                  Log in
                </Link>
                <Link className="btn-primary" href={`${portalUrl}/signup`}>
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="container pb-20 pt-14 sm:pt-16 lg:pt-24">{children}</main>

        <footer className="mt-24 border-t border-white/70 bg-white/80 py-16 backdrop-blur">
          <div className="container grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
            <div className="space-y-6">
              <Link href="/" className="text-xl font-semibold text-atsMidnight transition hover:text-atsOcean">
                Above The Stack
              </Link>
              <p className="max-w-md text-sm leading-relaxed text-slate-600">
                Independent MSP research, actionable playbooks, and Above Connect — our private member portal for managed service
                leaders around the globe.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your work email"
                  className="w-full rounded-full border border-white/0 bg-white/90 px-5 py-3 text-sm text-atsMidnight shadow-inner focus:outline-none focus:ring-2 focus:ring-atsOcean/50"
                />
                <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-slate-500">Monthly digest. No noise — just highlights from the community.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-atsMidnight">Explore</h3>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                {publicNavigation.map((item) => (
                  <Link key={item.href} className="transition hover:text-atsOcean" href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-atsMidnight">Above Connect</h3>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <Link className="transition hover:text-atsOcean" href={`${portalUrl}/signup`}>
                  Become a Member
                </Link>
                <Link className="transition hover:text-atsOcean" href={portalUrl}>
                  Log in
                </Link>
                <Link className="transition hover:text-atsOcean" href="mailto:partnerships@abovethestack.com">
                  Partner with us
                </Link>
                <Link className="transition hover:text-atsOcean" href="mailto:hello@abovethestack.com">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="container mt-12 flex flex-col gap-6 border-t border-white/70 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Above The Stack. Built together with the MSP community.</p>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((item) => (
                <Link key={item.href} className="text-slate-500 transition hover:text-atsOcean" href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
