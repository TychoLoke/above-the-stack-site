export const metadata = { title: "Nieuwsbrief — Above The Stack" };
export default function Page() {
  return (
    <div className="max-w-xl">
      <h1 className="h1">Nieuwsbrief</h1>
      <p className="muted mt-3">Maandelijks. Kort. Praktisch. Geen spam.</p>
      <form className="mt-6 card" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
        <label className="block text-sm mb-2">E‑mail</label>
        <input name="email" required type="email" className="w-full rounded-xl bg-neutral-950 border border-neutral-800 p-3" placeholder="jij@bedrijf.nl" />
        <button className="btn-primary mt-4" type="submit">Inschrijven</button>
      </form>
    </div>
  )
}
