export default function Section({ title, subtitle, children }:{ title:string, subtitle?:string, children:React.ReactNode }) {
  return (
    <section className="mt-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="h2 text-atsMidnight">{title}</h2>
          {subtitle && <p className="muted mt-1 max-w-2xl">{subtitle}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {children}
      </div>
    </section>
  )
}
