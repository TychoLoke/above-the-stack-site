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
  const sectionClass = ['mt-24', className].filter(Boolean).join(' ')
  const gridColumns =
    columns === 'one'
      ? 'grid gap-6'
      : columns === 'two'
        ? 'grid gap-6 md:grid-cols-2'
        : 'grid gap-6 md:grid-cols-2 xl:grid-cols-3'

  return (
    <section className={sectionClass}>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="h2 text-balance text-atsMidnight">{title}</h2>
          {description && <div className="muted max-w-2xl text-base leading-relaxed">{description}</div>}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
      <div className={gridColumns}>{children}</div>
    </section>
  )
}
