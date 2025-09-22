import Link from 'next/link'
import type { ReactNode } from 'react'

type CardProps = {
  title: string
  href?: string
  children?: ReactNode
  eyebrow?: string
  cta?: string
  className?: string
  icon?: ReactNode
}

export default function Card({ title, href, children, eyebrow, cta, className, icon }: CardProps) {
  const baseClasses = ['card', 'h-full', 'group', className].filter(Boolean).join(' ')

  const iconMarkup =
    typeof icon === 'string' ? (
      <span className="text-xl leading-none">{icon}</span>
    ) : (
      icon
    )

  const content = (
    <div className="space-y-4">
      {icon && (
        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-atsSky/15 via-white to-atsOcean/15 text-atsMidnight shadow-[0_12px_30px_-18px_rgba(15,31,75,0.45)]">
          {iconMarkup}
        </div>
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
