import type { ReactNode } from 'react'

type SectionProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  action?: ReactNode
  columns?: 'one' | 'two' | 'three'
  children: ReactNode
  className?: string
}

export default function Section({
  eyebrow,
  title,
  description,
  action,
  columns = 'three',
  children,
  className,
}: SectionProps) {
  const sectionClass = ['mt-28', className].filter(Boolean).join(' ')
  const gridColumns =
    columns === 'one'
      ? 'grid gap-8'
      : columns === 'two'
        ? 'grid gap-8 md:grid-cols-2'
        : 'grid gap-8 md:grid-cols-2 xl:grid-cols-3'

  return (
    <section className={sectionClass}>
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          {eyebrow && <span className="eyebrow text-xs text-atsOcean/70">{eyebrow}</span>}
          <h2 className="h2 text-balance text-atsMidnight">{title}</h2>
          {description && <div className="muted max-w-3xl text-base leading-relaxed md:text-lg">{description}</div>}
        </div>
        {action && <div className="flex flex-shrink-0 items-center gap-3">{action}</div>}
      </div>
      <div className={gridColumns}>{children}</div>
    </section>
  )
}
