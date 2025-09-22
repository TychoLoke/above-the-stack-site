import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { type PropsWithChildren, useCallback } from 'react'

interface HeroBackgroundProps {
  className?: string
}

export default function HeroBackground({ children, className }: PropsWithChildren<HeroBackgroundProps>) {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25, mass: 0.6 })
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25, mass: 0.6 })

  const rotate = useTransform(smoothX, [0, 100], [-5, 5])

  const gradient = useMotionTemplate`
    radial-gradient(160% 160% at ${smoothX}% ${smoothY}%, rgba(56, 156, 255, 0.34), transparent 62%),
    radial-gradient(120% 120% at calc(${smoothX}% + 18%) calc(${smoothY}% - 12%), rgba(255, 122, 89, 0.28), transparent 65%),
    linear-gradient(160deg, rgba(255, 255, 255, 0.92), rgba(241, 248, 255, 0.65) 45%, rgba(235, 244, 255, 0.92))
  `

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const bounds = event.currentTarget.getBoundingClientRect()
      const x = ((event.clientX - bounds.left) / bounds.width) * 100
      const y = ((event.clientY - bounds.top) / bounds.height) * 100

      mouseX.set(Math.min(100, Math.max(0, x)))
      mouseY.set(Math.min(100, Math.max(0, y)))
    },
    [mouseX, mouseY],
  )

  const handlePointerLeave = useCallback(() => {
    mouseX.set(50)
    mouseY.set(50)
  }, [mouseX, mouseY])

  const classes = ['relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 px-6 py-14 shadow-[0_55px_110px_-60px_rgba(15,31,75,0.65)] backdrop-blur-xl sm:px-10 sm:py-16 lg:rounded-[2.75rem] lg:px-16 lg:py-24', className]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={classes}
      style={{ backgroundImage: gradient, rotate }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-atsSky/10 to-transparent opacity-80" />
      <div className="pointer-events-none hero-glow -z-10" aria-hidden />
      <div className="pointer-events-none hero-glow hero-glow--secondary -z-10" aria-hidden />
      <div className="pointer-events-none hero-grid" aria-hidden />
      <div className="pointer-events-none hero-noise" aria-hidden />

      <div className="relative z-10">{children}</div>
    </motion.section>
  )
}
