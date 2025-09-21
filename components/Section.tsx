export default function Section({ title, subtitle, children }:{ title:string, subtitle?:string, children:React.ReactNode }) {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="h2">{title}</h2>
          {subtitle && <p className="muted mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {children}
      </div>
    </section>
  )
}
