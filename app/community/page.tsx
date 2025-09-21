export const metadata = { title: "Community — Above The Stack" };
export default function Page() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Community</h1>
      <p>Ons forum draait op Discourse. Je kunt meelezen en deelnemen via het portaal.</p>
      <p><a className="btn-primary" href={process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'}>Ga naar het forum</a></p>
      <h2>Laatste topics</h2>
      <iframe className="w-full h-[600px] rounded-2xl border border-neutral-800" src={(process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com') + '/latest'} />
    </div>
  )
}
