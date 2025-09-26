"use client"

import {
  type PointerEvent,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface HeroBackgroundProps {
  className?: string
}

export default function HeroBackground({ children, className }: PropsWithChildren<HeroBackgroundProps>) {
  const [pointerPosition, setPointerPosition] = useState({ x: 50, y: 50 })
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleChange = () => {
      setIsReducedMotion(mediaQuery.matches)
    }

    handleChange()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange)

      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }

    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleChange)

      return () => {
        mediaQuery.removeListener(handleChange)
      }
    }

    return undefined
  }, [])

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (isReducedMotion) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const relativeX = ((event.clientX - bounds.left) / bounds.width) * 100
    const relativeY = ((event.clientY - bounds.top) / bounds.height) * 100

    const nextX = Math.min(100, Math.max(0, relativeX))
    const nextY = Math.min(100, Math.max(0, relativeY))

    setPointerPosition((previous) => {
      if (Math.abs(previous.x - nextX) < 0.2 && Math.abs(previous.y - nextY) < 0.2) {
        return previous
      }

      return { x: nextX, y: nextY }
    })
  }, [isReducedMotion])

  const handlePointerLeave = useCallback(() => {
    if (isReducedMotion) {
      return
    }

    setPointerPosition((previous) => {
      if (Math.abs(previous.x - 50) < 0.2 && Math.abs(previous.y - 50) < 0.2) {
        return previous
      }

      return { x: 50, y: 50 }
    })
  }, [isReducedMotion])

  const gradient = useMemo(() => {
    const x = isReducedMotion ? 50 : pointerPosition.x
    const y = isReducedMotion ? 50 : pointerPosition.y

    return `radial-gradient(160% 160% at ${x}% ${y}%, rgba(56, 156, 255, 0.34), transparent 62%),
      radial-gradient(120% 120% at calc(${x}% + 18%) calc(${y}% - 12%), rgba(255, 122, 89, 0.28), transparent 65%),
      linear-gradient(160deg, rgba(255, 255, 255, 0.92), rgba(241, 248, 255, 0.65) 45%, rgba(235, 244, 255, 0.92))`
  }, [isReducedMotion, pointerPosition.x, pointerPosition.y])

  const rotation = useMemo(
    () => (isReducedMotion ? 0 : ((pointerPosition.x - 50) / 50) * 4.8),
    [isReducedMotion, pointerPosition.x],
  )
  const tilt = useMemo(
    () => (isReducedMotion ? 0 : ((50 - pointerPosition.y) / 50) * 3.2),
    [isReducedMotion, pointerPosition.y],
  )

  const classes = ['relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 px-6 py-14 shadow-[0_55px_110px_-60px_rgba(15,31,75,0.65)] backdrop-blur-xl sm:px-10 sm:py-16 lg:rounded-[2.75rem] lg:px-16 lg:py-24', className]
    .filter(Boolean)
    .join(' ')

  const style = useMemo(
    () => ({
      backgroundImage: gradient,
      transform: `perspective(1400px) rotateX(${tilt}deg) rotateY(${rotation / 1.6}deg)`,
    }),
    [gradient, rotation, tilt],
  )

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`${classes} ${isReducedMotion ? 'transition-none' : 'transition-transform duration-700 ease-out'}`}
      style={style}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-atsSky/10 to-transparent opacity-80" />
      <div className="pointer-events-none hero-glow -z-10" aria-hidden />
      <div className="pointer-events-none hero-glow hero-glow--secondary -z-10" aria-hidden />
      <div className="pointer-events-none hero-grid" aria-hidden />
      <div className="pointer-events-none hero-noise" aria-hidden />

      <div className="relative z-10">{children}</div>
    </section>
  )
}
