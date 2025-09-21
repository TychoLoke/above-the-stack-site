import Link from 'next/link'
import type { ReactNode } from 'react'

type CardProps = {
  title: string
  href?: string
  children?: ReactNode
  eyebrow?: string
  cta?: string
  className?: string
}

export default function Card({ title, href, children, eyebrow, cta, className }: CardProps) {
  const content = (
    <div className="space-y-3">
      {eyebrow && <span className="eyebrow text-[0.65rem] text-atsOcean/60">{eyebrow}</span>}
      <h3 className="text-lg font-semibold text-atsMidnight">{title}</h3>
      {children && <p className="muted text-sm leading-relaxed">{children}</p>}
      {cta && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-atsOcean">
          {cta}
          <span aria-hidden>→</span>
        </span>
      )}
    </div>
  )

  const baseClasses = ['card', 'h-full', className].filter(Boolean).join(' ')

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} block transition duration-200 hover:-translate-y-1`}
      >
        {content}
      </Link>
    )
  }

  return <div className={baseClasses}>{content}</div>
}
