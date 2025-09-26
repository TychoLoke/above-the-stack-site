'use client'

import type { ReactNode } from 'react'
import { useEffect, useId, useRef, useState } from 'react'

type AccentColor = 'ocean' | 'sky' | 'coral' | 'midnight' | 'slate'

type SectionProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  action?: ReactNode
  columns?: 'one' | 'two' | 'three'
  children: ReactNode
  className?: string
  accentColor?: AccentColor
  showConnector?: boolean
  parallaxOffset?: number
}

const accentClasses: Record<AccentColor, string> = {
  ocean: 'section-accent--ocean',
  sky: 'section-accent--sky',
  coral: 'section-accent--coral',
  midnight: 'section-accent--midnight',
  slate: 'section-accent--slate',
}

export default function Section({
  eyebrow,
  title,
  description,
  action,
  columns = 'three',
  children,
  className,
  accentColor,
  showConnector = false,
  parallaxOffset = 72,
}: SectionProps) {
  const paddingClasses = showConnector
    ? 'pt-[var(--space-section-connected)] pb-[var(--space-section-connected)]'
    : ''
  const spacingClasses = showConnector
    ? 'mt-[calc(var(--space-section-connected)*0.8)] first:mt-0'
    : ''

  const sectionClass = ['relative isolate', spacingClasses, paddingClasses, className]
    .filter(Boolean)
    .join(' ')

  const sectionRef = useRef<HTMLElement | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [accentOffset, setAccentOffset] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Sync state in case the preference changed between renders
    setPrefersReducedMotion(mediaQuery.matches)

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange)

      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }

    mediaQuery.addListener(handleChange)

    return () => {
      mediaQuery.removeListener(handleChange)
    }
  }, [])

  useEffect(() => {
    if (!accentColor) {
      setAccentOffset(0)
      return
    }

    if (prefersReducedMotion) {
      setAccentOffset(Math.max(0, parallaxOffset) / 2)
      return
    }

    const updateOffset = () => {
      const element = sectionRef.current
      if (!element) {
        setAccentOffset(0)
        return
      }

      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const totalDistance = rect.height + viewportHeight
      const progress = 1 - rect.bottom / totalDistance
      const clampedProgress = Math.min(Math.max(progress, 0), 1)
      const nextOffset = clampedProgress * Math.max(0, parallaxOffset)

      setAccentOffset((previous) => {
        if (Math.abs(previous - nextOffset) < 0.5) {
          return previous
        }

        return nextOffset
      })
    }

    updateOffset()

    const handleScroll = () => updateOffset()
    const handleResize = () => updateOffset()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [accentColor, parallaxOffset, prefersReducedMotion])

  const rawGradientId = useId().replace(/:/g, '')
  const gradientId = `section-divider-${rawGradientId}`

  const gridBase = 'grid gap-[var(--space-card-gap)]'
  const gridColumns =
    columns === 'one'
      ? gridBase
      : columns === 'two'
        ? `${gridBase} md:grid-cols-2`
        : `${gridBase} md:grid-cols-2 xl:grid-cols-3`

  const connectorTone = accentColor ?? 'ocean'
  const accentClassName = accentColor ? accentClasses[accentColor] : ''

  return (
    <section ref={sectionRef} className={sectionClass}>
      {accentColor && (
        <div
          aria-hidden="true"
          className={`section-accent ${accentClassName}`}
          style={{ transform: `translateY(${accentOffset - Math.max(0, parallaxOffset) / 2}px)` }}
        >
          <svg className="section-accent__divider" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="0.45" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 200 C240 120 480 120 720 200 C960 280 1200 280 1440 200"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="3"
            />
          </svg>
        </div>
      )}

      {showConnector && (
        <span
          aria-hidden="true"
          className={`section-connector section-connector--top section-connector--${connectorTone}`}
        />
      )}

      <div className="relative z-10">
        <div className="mb-[var(--space-section-header)] flex flex-col gap-[var(--space-section-stack)] sm:gap-[var(--space-section-stack)] md:flex-row md:items-end md:justify-between sm:mb-[calc(var(--space-section-header)*1.1)]">
          <div className="space-y-[calc(var(--space-section-stack)*0.85)]">
            {eyebrow && <span className="eyebrow text-xs text-atsOcean/70">{eyebrow}</span>}
            <h2 className="h2 text-balance text-atsMidnight">{title}</h2>
            {description && (
              <div className="muted max-w-3xl text-base leading-relaxed md:text-lg">{description}</div>
            )}
          </div>
          {action && (
            <div className="flex flex-col gap-[calc(var(--space-section-stack)*0.75)] sm:flex-row sm:flex-wrap sm:items-center md:flex-nowrap md:flex-shrink-0">
              {action}
            </div>
          )}
        </div>
        <div className={gridColumns}>{children}</div>
      </div>

      {showConnector && (
        <span
          aria-hidden="true"
          className={`section-connector section-connector--bottom section-connector--${connectorTone}`}
        />
      )}
    </section>
  )
}
