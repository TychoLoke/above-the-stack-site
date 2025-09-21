import Image from 'next/image'
import type { LeadershipMember } from '@/data/leadershipTeam'

type MemberCardProps = {
  member: LeadershipMember
}

export default function MemberCard({ member }: MemberCardProps) {
  const hasHeadshot = Boolean(member.headshot)
  const headshotSrc = member.headshot
  const isDataUriHeadshot = Boolean(headshotSrc?.startsWith('data:image/'))

  return (
    <article className="card space-y-4">
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full bg-atsOcean/10 ring-1 ring-atsOcean/20">
          {hasHeadshot && headshotSrc ? (
            <Image
              src={headshotSrc}
              alt={`${member.name} headshot`}
              fill
              sizes="80px"
              className="object-cover"
              unoptimized={isDataUriHeadshot}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-atsOcean/60">
              Add headshot
            </span>
          )}
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-atsMidnight">{member.name}</h3>
          <p className="text-sm font-medium text-atsOcean">{member.role}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-atsOcean/60">Region: {member.region}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{member.bio}</p>
    </article>
  )
}
