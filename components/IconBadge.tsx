import type { ReactNode } from 'react'

export type IconBadgeVariant = 'ocean' | 'sky' | 'coral' | 'midnight' | 'slate'

const variantStyles: Record<IconBadgeVariant, string> = {
  ocean: 'from-atsSky/25 via-white to-atsOcean/30 text-atsMidnight',
  sky: 'from-white via-atsSky/30 to-atsOcean/15 text-atsMidnight',
  coral: 'from-atsCoral/25 via-white to-atsSky/20 text-atsMidnight',
  midnight: 'from-atsMidnight via-atsMidnight/80 to-atsOcean/60 text-white',
  slate: 'from-slate-100 via-white to-slate-200 text-atsMidnight',
}

const sizeStyles = {
  lg: 'h-12 w-12 rounded-2xl text-base',
  md: 'h-10 w-10 rounded-xl text-sm',
}

type IconBadgeProps = {
  children: ReactNode
  variant?: IconBadgeVariant
  size?: keyof typeof sizeStyles
  className?: string
}

export default function IconBadge({
  children,
  variant = 'ocean',
  size = 'lg',
  className,
}: IconBadgeProps) {
  const classes = [
    'inline-flex items-center justify-center bg-gradient-to-br shadow-[0_18px_40px_-32px_rgba(15,31,75,0.55)] ring-1 ring-inset ring-white/60',
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{children}</span>
}
