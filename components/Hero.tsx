"use client"

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

import { communityCommitments } from '@/data/community'
import HeroBackground from './hero/HeroBackground'

const heroStats = [
  { value: '18+', label: 'Countries represented' },
  { value: '40+', label: 'Member-led sessions' },
  { value: '6', label: 'Playbooks in motion' },
]

export default function Hero() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

  return (
    <HeroBackground>
      <div className="relative grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div className="space-y-10 text-left">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/0 bg-atsOcean/10 px-4 py-1 text-sm font-semibold text-atsOcean/80 shadow-inner">
              <Sparkles aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} /> Welcome to Above The Stack
            </span>
            <h1 className="h1 text-balance text-atsMidnight">
              Your MSP community is waiting
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl">
              Independent research, living playbooks, and Above Connect — a trusted portal where MSPs, MSSPs, and partners work out the future of managed services together. Stay ahead of regulation, pricing, and customer expectations with peers who share openly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              className="btn-primary btn-kinetic w-full justify-center transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atsOcean/40 sm:w-auto"
              href={`${portalUrl}/signup`}
            >
              Join the Community
            </a>
            <Link
              className="btn-secondary btn-kinetic w-full justify-center transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-atsOcean/40 sm:w-auto"
              href="/research"
            >
              Explore Research
            </Link>
            <span className="text-sm text-slate-500 sm:text-left">
              Already a member?{' '}
              <a className="font-semibold text-atsOcean hover:underline" href={portalUrl}>
                Log in
              </a>
            </span>
          </div>
          <dl className="grid gap-3 pt-4 sm:grid-cols-3 sm:gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-[0_18px_40px_-28px_rgba(15,31,75,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <dt className="text-sm font-semibold uppercase tracking-[0.35em] text-atsOcean/70">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-atsMidnight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="card gradient-border space-y-6 bg-white/85 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-atsMidnight">Community commitments</h2>
              <p className="mt-1 text-sm text-slate-600">How we keep Above Connect welcoming, trusted, and useful for every member.</p>
            </div>
            <span className="hidden rounded-full border border-white/50 bg-white/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-atsOcean/70 md:inline-flex">
              Member-led
            </span>
          </div>
          <div className="space-y-4">
            {communityCommitments.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_22px_50px_-36px_rgba(15,31,75,0.5)] transition hover:-translate-y-1"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 transition-opacity duration-300 group-hover:opacity-25`}
                />
                <div className="relative flex items-center gap-5">
                  <span
                    className={`inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-glow`}
                  >
                    {item.label}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-atsMidnight">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:items-center">
            <Link className="font-semibold text-atsOcean hover:underline" href="/community">
              Tour Above Connect
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-atsOcean/40 md:inline-block" aria-hidden />
            <p className="sm:text-left">Membership is €150/year per company. Every teammate is included.</p>
          </div>
        </div>
      </div>
    </HeroBackground>
  )
}
