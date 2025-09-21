export const metadata = { title: "Community — Above The Stack" };
export default function Page() {
  return (
    <div className="space-y-8 text-slate-700">
      <div className="space-y-4">
        <h1 className="h1 text-atsMidnight">Community</h1>
        <p>
          Our forum runs on Discourse so you can read, share, and collaborate with peers. Use the
          community portal to join the discussion and access member-only spaces.
        </p>
        <a className="btn-primary inline-flex" href={process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'}>
          Enter the community portal
        </a>
      </div>
      <div className="space-y-4">
        <h2 className="h2 text-atsMidnight">Latest topics</h2>
        <iframe
          className="h-[600px] w-full rounded-3xl border border-slate-200 bg-white shadow-[0_18px_40px_-20px_rgba(15,31,75,0.2)]"
          src={(process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com') + '/latest'}
          title="Above The Stack community"
        />
      </div>
    </div>
  )
}
