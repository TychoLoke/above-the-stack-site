export const metadata = { title: "Newsletter — Above The Stack" };
export default function Page() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="h1 text-atsMidnight">Newsletter</h1>
      <p className="muted mt-3">Monthly insights. Concise. Practical. No spam.</p>
      <form className="card mt-6" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
        <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
        <input
          name="email"
          required
          type="email"
          className="w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-800 shadow-inner focus:border-atsOcean focus:outline-none focus:ring-2 focus:ring-atsOcean/70"
          placeholder="you@company.com"
        />
        <button className="btn-primary mt-4" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  )
}
