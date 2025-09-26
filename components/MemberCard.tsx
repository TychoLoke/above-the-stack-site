import Image from 'next/image'
import type { LeadershipMember } from '@/data/leadershipTeam'

type MemberCardProps = {
  member: LeadershipMember
}

function getInitials(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (parts.length >= 2) {
    const [firstName] = parts
    const lastName = parts[parts.length - 1]
    return `${firstName[0]}${lastName[0]}`.toUpperCase()
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }

  return ''
}

export function MemberInitialsBadge({ name }: { name: string }) {
  const initials = getInitials(name)

  return (
    <div className="flex h-full w-full items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-atsOcean/65 via-atsSky/50 to-atsCoral/65 text-lg font-semibold uppercase tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
      <span>{initials}</span>
    </div>
  )
}

export default function MemberCard({ member }: MemberCardProps) {
  const hasHeadshot = Boolean(member.headshot)
  const headshotSrc = member.headshot
  const isDataUriHeadshot = Boolean(headshotSrc?.startsWith('data:image/'))

  return (
    <article className="card h-full overflow-hidden">
      <div className="flex h-full flex-col gap-6 rounded-[2.25rem] bg-gradient-to-br from-atsOcean/5 via-white to-atsSky/5 px-6 py-7 sm:gap-8 sm:px-8 sm:py-9">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative aspect-square w-24 shrink-0 rounded-[1.85rem] bg-gradient-to-br from-atsOcean/40 via-atsSky/25 to-atsCoral/30 p-[3px] shadow-[0_18px_32px_-18px_rgba(15,31,75,0.45)] sm:w-28">
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
              {hasHeadshot && headshotSrc ? (
                <Image
                  src={headshotSrc}
                  alt={`${member.name} headshot`}
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover object-center"
                  unoptimized={isDataUriHeadshot}
                />
              ) : (
                <MemberInitialsBadge name={member.name} />
              )}
            </div>
          </div>
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-xl font-semibold text-atsMidnight">{member.name}</h3>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-atsOcean/80">{member.region}</p>
            <p className="text-base font-medium text-atsOcean">{member.role}</p>
          </div>
        </div>
        <blockquote className="relative rounded-[1.85rem] border border-atsOcean/10 bg-gradient-to-br from-white/90 via-atsOcean/10 to-atsSky/10 px-6 py-5 text-sm font-medium text-atsMidnight/90 shadow-[0_16px_40px_-30px_rgba(15,31,75,0.45)]">
          <span className="absolute left-5 top-3 text-3xl text-atsOcean/30" aria-hidden>
            “
          </span>
          <p className="pl-6 leading-relaxed">{member.quote}</p>
        </blockquote>
        <p className="text-sm leading-relaxed text-slate-600">{member.bio}</p>
      </div>
    </article>
  )
}
