'use client'

import { useCallback, useEffect, useId, useMemo, useRef, useState, type FocusEvent, type ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import { motion } from 'framer-motion'
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

const MOTION_VARIANTS = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export default function UpcomingHighlightsTimeline({
  items,
  autoplay = true,
  autoplayInterval = 6500,
  showControls = true,
}: UpcomingHighlightsTimelineProps) {
  const slideCount = items.length
  const hasMultipleSlides = slideCount > 1
  const generatedId = useId()
  const carouselDomId = generatedId.replace(/:/g, '')
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: hasMultipleSlides })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const autoplayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isPausedRef = useRef(false)

  const clearAutoplay = useCallback(() => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current)
      autoplayTimeoutRef.current = null
    }
  }, [])

  const requestAutoplay = useCallback(() => {
    if (!emblaApi || !autoplay || !hasMultipleSlides || isPausedRef.current) {
      return
    }

    clearAutoplay()

    autoplayTimeoutRef.current = setTimeout(() => {
      if (!emblaApi || isPausedRef.current) {
        return
      }

      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, autoplayInterval)
  }, [autoplay, autoplayInterval, clearAutoplay, emblaApi, hasMultipleSlides])

  const updateStateFromEmbla = useCallback(
    (api: EmblaCarouselType) => {
      setSelectedIndex(api.selectedScrollSnap())
      setScrollProgress(api.scrollProgress())
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const onSelect = () => {
      updateStateFromEmbla(emblaApi)
      requestAutoplay()
    }

    const onScroll = () => {
      setScrollProgress(emblaApi.scrollProgress())
    }

    const onReInit = () => {
      updateStateFromEmbla(emblaApi)
      requestAutoplay()
    }

    emblaApi.on('select', onSelect)
    emblaApi.on('scroll', onScroll)
    emblaApi.on('reInit', onReInit)

    onReInit()

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('scroll', onScroll)
      emblaApi.off('reInit', onReInit)
    }
  }, [emblaApi, requestAutoplay, updateStateFromEmbla])

  useEffect(() => {
    if (!emblaApi || !hasMultipleSlides) {
      clearAutoplay()
      return
    }

    if (!autoplay) {
      isPausedRef.current = true
      clearAutoplay()
      return
    }

    isPausedRef.current = false
    requestAutoplay()

    const onPointerDown = () => {
      isPausedRef.current = true
      clearAutoplay()
    }

    const onPointerUp = () => {
      isPausedRef.current = false
      requestAutoplay()
    }

    emblaApi.on('pointerDown', onPointerDown)
    emblaApi.on('pointerUp', onPointerUp)

    return () => {
      emblaApi.off('pointerDown', onPointerDown)
      emblaApi.off('pointerUp', onPointerUp)
      clearAutoplay()
    }
  }, [autoplay, clearAutoplay, emblaApi, hasMultipleSlides, requestAutoplay])

  useEffect(() => () => clearAutoplay(), [clearAutoplay])

  const pauseAutoplay = useCallback(() => {
    if (!autoplay || !hasMultipleSlides) {
      return
    }

    isPausedRef.current = true
    clearAutoplay()
  }, [autoplay, clearAutoplay, hasMultipleSlides])

  const resumeAutoplay = useCallback(() => {
    if (!autoplay || !hasMultipleSlides) {
      return
    }

    isPausedRef.current = false
    requestAutoplay()
  }, [autoplay, hasMultipleSlides, requestAutoplay])

  const handleFocusCapture = useCallback(() => {
    pauseAutoplay()
  }, [pauseAutoplay])

  const handleBlurCapture = useCallback(
    (event: FocusEvent<HTMLDivElement>) => {
      if (!autoplay || !hasMultipleSlides) {
        return
      }

      const nextFocusedElement = event.relatedTarget as HTMLElement | null
      if (nextFocusedElement && event.currentTarget.contains(nextFocusedElement)) {
        return
      }

      resumeAutoplay()
    },
    [autoplay, hasMultipleSlides, resumeAutoplay]
  )

  const scrollPrev = useCallback(() => {
    if (!emblaApi) {
      return
    }

    emblaApi.scrollPrev()
    requestAutoplay()
  }, [emblaApi, requestAutoplay])

  const scrollNext = useCallback(() => {
    if (!emblaApi) {
      return
    }

    emblaApi.scrollNext()
    requestAutoplay()
  }, [emblaApi, requestAutoplay])

  const progressValue = useMemo(() => {
    if (!hasMultipleSlides) {
      return 1
    }

    const basedOnIndex = (selectedIndex + 1) / slideCount
    return clamp(Math.max(scrollProgress, basedOnIndex), 0.05, 1)
  }, [hasMultipleSlides, scrollProgress, selectedIndex, slideCount])

  return (
    <div
      className="timeline"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <div className="timeline__top">
        <div className="timeline__progress" aria-hidden>
          <div className="timeline__progress-bar" style={{ transform: `scaleX(${progressValue})` }} />
        </div>
        {showControls && (
          <div className="timeline__controls" aria-label="Timeline controls">
            <button
              type="button"
              className="timeline__nav-button"
              onClick={scrollPrev}
              aria-controls={carouselDomId}
              aria-label="View previous highlight"
              disabled={!hasMultipleSlides || !canScrollPrev}
            >
              <ArrowLeft aria-hidden size={18} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              className="timeline__nav-button"
              onClick={scrollNext}
              aria-controls={carouselDomId}
              aria-label="View next highlight"
              disabled={!hasMultipleSlides || !canScrollNext}
            >
              <ArrowRight aria-hidden size={18} strokeWidth={1.8} />
            </button>
          </div>
        )}
      </div>

      <div
        className="timeline__viewport"
        ref={emblaRef}
        id={carouselDomId}
        aria-roledescription="carousel"
        aria-label="Upcoming highlights"
      >
        <div className="timeline__container">
          {items.map((item, index) => {
            const cardClassName = [item.className, 'shadow-glow'].filter(Boolean).join(' ')

            return (
              <motion.div
                key={item.title}
                className="timeline__slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`Highlight ${index + 1} of ${slideCount}`}
                variants={MOTION_VARIANTS}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="sr-only" aria-live={autoplay ? 'polite' : 'off'}>
        Highlight {selectedIndex + 1} of {slideCount}
      </div>
    </div>
  )
}
