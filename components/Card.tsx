import Link from 'next/link'
import type { ReactNode } from 'react'
import IconBadge, { type IconBadgeVariant } from './IconBadge'

type CardProps = {
  title: string
  href?: string
  children?: ReactNode
  eyebrow?: string
  cta?: string
  className?: string
  icon?: ReactNode
  iconAccent?: IconBadgeVariant
}

export default function Card({
  title,
  href,
  children,
  eyebrow,
  cta,
  className,
  icon,
  iconAccent,
}: CardProps) {
  const baseClasses = ['card', 'h-full', 'group', className].filter(Boolean).join(' ')

  const iconMarkup =
    typeof icon === 'string' ? (
      <span className="text-xl leading-none">{icon}</span>
    ) : (
      icon
    )

  const content = (
    <div className="space-y-5">
      {icon && (
        <IconBadge variant={iconAccent}>{iconMarkup}</IconBadge>
      )}
      {eyebrow && <span className="eyebrow text-[0.65rem] text-atsOcean/60">{eyebrow}</span>}
      <h3 className="text-lg font-semibold text-atsMidnight md:text-xl">{title}</h3>
      {children && <div className="muted space-y-3 text-sm leading-relaxed md:text-base">{children}</div>}
      {cta && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-atsOcean transition group-hover:translate-x-1">
          {cta}
          <span aria-hidden>→</span>
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} block transform transition-transform duration-300 hover:-translate-y-1.5`}>
        {content}
      </Link>
    )
  }

  return <div className={baseClasses}>{content}</div>
}
