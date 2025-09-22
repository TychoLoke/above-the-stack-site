'use client'

import type { ReactNode } from 'react'
import { useEffect, useId, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
  const marginClasses = showConnector
    ? 'mt-28 md:mt-32 lg:mt-36'
    : 'mt-24 md:mt-28 lg:mt-32'

  const paddingClasses = showConnector ? 'pt-12 md:pt-16 pb-12 md:pb-16' : ''

  const sectionClass = ['relative isolate first:mt-0', marginClasses, paddingClasses, className]
    .filter(Boolean)
    .join(' ')

  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const parallaxDistance = Math.max(0, parallaxOffset)
  const accentParallax = useTransform(scrollYProgress, [0, 1], [0, parallaxDistance])
  const accentY = hasMounted ? accentParallax : 0

  const rawGradientId = useId().replace(/:/g, '')
  const gradientId = `section-divider-${rawGradientId}`

  const gridColumns =
    columns === 'one'
      ? 'grid gap-6 sm:gap-8'
      : columns === 'two'
        ? 'grid gap-6 sm:gap-8 md:grid-cols-2'
        : 'grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3'

  const connectorTone = accentColor ?? 'ocean'
  const accentClassName = accentColor ? accentClasses[accentColor] : ''

  return (
    <section ref={sectionRef} className={sectionClass}>
      {accentColor && (
        <motion.div
          aria-hidden="true"
          className={`section-accent ${accentClassName}`}
          style={{ y: accentY }}
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
        </motion.div>
      )}

      {showConnector && (
        <span
          aria-hidden="true"
          className={`section-connector section-connector--top section-connector--${connectorTone}`}
        />
      )}

      <div className="relative z-10">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            {eyebrow && <span className="eyebrow text-xs text-atsOcean/70">{eyebrow}</span>}
            <h2 className="h2 text-balance text-atsMidnight">{title}</h2>
            {description && (
              <div className="muted max-w-3xl text-base leading-relaxed md:text-lg">{description}</div>
            )}
          </div>
          {action && (
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:flex-nowrap md:flex-shrink-0">
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
