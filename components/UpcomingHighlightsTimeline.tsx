'use client'

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FocusEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import Card from './Card'
import type { IconBadgeVariant } from './IconBadge'

export type UpcomingHighlight = {
  eyebrow: string
  title: string
  description: string
  href: string
  cta: string
  className?: string
  iconAccent: IconBadgeVariant
  icon: ReactNode
}

export type UpcomingHighlightsTimelineProps = {
  items: UpcomingHighlight[]
  autoplay?: boolean
  autoplayInterval?: number
  showControls?: boolean
}

type StaticTimelineProps = Pick<UpcomingHighlightsTimelineProps, 'items'>

function StaticHighlightsTimeline({ items }: StaticTimelineProps) {
  const itemCount = items.length
  const gridColumns = itemCount === 1 ? '' : itemCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
  const gridClassName = ['grid gap-6 sm:gap-8', gridColumns].filter(Boolean).join(' ')

  return (
    <div className={gridClassName}>
      {items.map((item) => {
        const cardClassName = [item.className, 'shadow-glow'].filter(Boolean).join(' ')

        return (
          <div key={item.title} className="h-full">
            <Card
              eyebrow={item.eyebrow}
              title={item.title}
              href={item.href}
              cta={item.cta}
              className={cardClassName}
              icon={item.icon}
              iconAccent={item.iconAccent}
            >
              {item.description}
            </Card>
          </div>
        )
      })}
    </div>
  )
}

type CarouselTimelineProps = {
  items: UpcomingHighlight[]
  autoplay: boolean
  autoplayInterval: number
  showControls: boolean
}

function CarouselHighlightsTimeline({
  items,
  autoplay,
  autoplayInterval,
  showControls,
}: CarouselTimelineProps) {
  const slideCount = items.length
  const hasMultipleSlides = slideCount > 1
  const generatedId = useId()
  const carouselDomId = generatedId.replace(/:/g, '')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)
  const pointerStartRef = useRef<number | null>(null)
  const pointerActiveRef = useRef(false)

  useEffect(() => {
    setCurrentIndex(0)
  }, [slideCount])

  useEffect(() => {
    if (!autoplay || !hasMultipleSlides || isPaused) {
      return
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % slideCount)
    }, autoplayInterval)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [autoplay, autoplayInterval, hasMultipleSlides, isPaused, slideCount])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((previous) => (previous - 1 + slideCount) % slideCount)
  }, [slideCount])

  const goToNext = useCallback(() => {
    setCurrentIndex((previous) => (previous + 1) % slideCount)
  }, [slideCount])

  const handleMouseEnter = useCallback(() => {
    if (!autoplay || !hasMultipleSlides) {
      return
    }

    setIsPaused(true)
  }, [autoplay, hasMultipleSlides])

  const handleMouseLeave = useCallback(() => {
    if (!autoplay || !hasMultipleSlides) {
      return
    }

    setIsPaused((previous) => (isManuallyPaused ? previous : false))
  }, [autoplay, hasMultipleSlides, isManuallyPaused])

  const handleFocusCapture = useCallback(() => {
    if (!hasMultipleSlides) {
      return
    }

    setIsPaused(true)
  }, [hasMultipleSlides])

  const handleBlurCapture = useCallback(
    (event: FocusEvent<HTMLDivElement>) => {
      if (!hasMultipleSlides) {
        return
      }

      const nextFocusedElement = event.relatedTarget as HTMLElement | null
      if (nextFocusedElement && event.currentTarget.contains(nextFocusedElement)) {
        return
      }

      setIsPaused((previous) => (isManuallyPaused ? previous : false))
    },
    [hasMultipleSlides, isManuallyPaused],
  )

  const finalizePointer = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!pointerActiveRef.current) {
        return
      }

      const start = pointerStartRef.current
      pointerActiveRef.current = false
      pointerStartRef.current = null

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }

      if (start !== null) {
        const delta = event.clientX - start
        const threshold = Math.max(event.currentTarget.clientWidth * 0.12, 48)

        if (delta > threshold) {
          goToPrevious()
        } else if (delta < -threshold) {
          goToNext()
        }
      }

      if (autoplay && hasMultipleSlides) {
        setIsPaused((previous) => (isManuallyPaused ? previous : false))
      }
    },
    [autoplay, goToNext, goToPrevious, hasMultipleSlides, isManuallyPaused],
  )

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      pointerActiveRef.current = true
      pointerStartRef.current = event.clientX

      if (event.currentTarget.setPointerCapture) {
        event.currentTarget.setPointerCapture(event.pointerId)
      }

      if (autoplay && hasMultipleSlides) {
        setIsPaused(true)
      }
    },
    [autoplay, hasMultipleSlides],
  )

  const handlePointerUp = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      finalizePointer(event)
    },
    [finalizePointer],
  )

  const handlePointerCancel = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      finalizePointer(event)
    },
    [finalizePointer],
  )

  const progressValue = useMemo(() => {
    if (!hasMultipleSlides) {
      return 1
    }

    return (currentIndex + 1) / slideCount
  }, [currentIndex, hasMultipleSlides, slideCount])

  const containerStyle = useMemo(() => ({ transform: `translateX(-${currentIndex * 100}%)` }), [currentIndex])

  const handlePauseToggle = useCallback(() => {
    setIsManuallyPaused((previous) => {
      const next = !previous
      setIsPaused(next)
      return next
    })
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <div
      className="timeline"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <div className="timeline__top">
        <div className="timeline__progress" aria-hidden>
          <div className="timeline__progress-bar" style={{ transform: `scaleX(${progressValue})` }} />
        </div>
        {showControls && hasMultipleSlides && (
          <div className="timeline__controls" aria-label="Timeline controls">
            <button
              type="button"
              className="timeline__nav-button"
              onClick={goToPrevious}
              aria-controls={carouselDomId}
              aria-label="View previous highlight"
              disabled={!hasMultipleSlides}
            >
              <ArrowLeft aria-hidden size={18} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              className="timeline__nav-button timeline__playback-button"
              onClick={handlePauseToggle}
              aria-controls={carouselDomId}
              aria-pressed={isManuallyPaused}
              aria-label={isManuallyPaused ? 'Resume automatic highlight rotation' : 'Pause automatic highlight rotation'}
            >
              {isManuallyPaused ? 'Play' : 'Pause'}
            </button>
            <button
              type="button"
              className="timeline__nav-button"
              onClick={goToNext}
              aria-controls={carouselDomId}
              aria-label="View next highlight"
              disabled={!hasMultipleSlides}
            >
              <ArrowRight aria-hidden size={18} strokeWidth={1.8} />
            </button>
          </div>
        )}
      </div>

      <div
        className="timeline__viewport"
        id={carouselDomId}
        aria-roledescription="carousel"
        aria-label="Upcoming highlights"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <div className="timeline__container" style={containerStyle}>
          {items.map((item, index) => {
            const cardClassName = [item.className, 'shadow-glow'].filter(Boolean).join(' ')

            return (
              <div
                key={item.title}
                className="timeline__slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`Highlight ${index + 1} of ${slideCount}`}
              >
                <Card
                  eyebrow={item.eyebrow}
                  title={item.title}
                  href={item.href}
                  cta={item.cta}
                  className={`${cardClassName} timeline__card`}
                  icon={item.icon}
                  iconAccent={item.iconAccent}
                >
                  {item.description}
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      <div className="sr-only" aria-live={autoplay ? 'polite' : 'off'}>
        Highlight {currentIndex + 1} of {slideCount}
      </div>

      {hasMultipleSlides && (
        <ol className="timeline__indicator-list" aria-label="Select highlight">
          {items.map((item, index) => {
            const isActive = index === currentIndex

            return (
              <li key={item.title} className="timeline__indicator-item">
                <button
                  type="button"
                  className={`timeline__indicator-button${isActive ? ' timeline__indicator-button--active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`View highlight ${index + 1}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="sr-only">{`Highlight ${index + 1}`}</span>
                </button>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}

export default function UpcomingHighlightsTimeline({
  items,
  autoplay = true,
  autoplayInterval = 6500,
  showControls = true,
}: UpcomingHighlightsTimelineProps) {
  if (items.length <= 3) {
    return <StaticHighlightsTimeline items={items} />
  }

  return (
    <CarouselHighlightsTimeline
      items={items}
      autoplay={autoplay}
      autoplayInterval={autoplayInterval}
      showControls={showControls}
    />
  )
}
