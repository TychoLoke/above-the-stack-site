import Link from 'next/link'
export default function Card({ title, href, children }:{ title:string, href:string, children?:React.ReactNode }) {
  return (
    <Link
      href={href}
      className="card block transition duration-200 hover:-translate-y-1 hover:border-atsOcean/40 hover:shadow-glow"
    >
      <h3 className="text-lg font-semibold text-atsMidnight">{title}</h3>
      {children && <p className="muted mt-2 line-clamp-3">{children}</p>}
    </Link>
  )
}
