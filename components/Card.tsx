import Link from 'next/link'
export default function Card({ title, href, children }:{ title:string, href:string, children?:React.ReactNode }) {
  return (
    <Link href={href} className="card block hover:border-neutral-700 transition">
      <h3 className="font-semibold">{title}</h3>
      {children && <p className="muted mt-2 line-clamp-3">{children}</p>}
    </Link>
  )
}
