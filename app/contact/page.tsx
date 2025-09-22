import ContactForm from '@/components/ContactForm'
import { Mail, MessageCircle, PhoneCall } from 'lucide-react'

export const metadata = { title: 'Contact — Above The Stack' }

const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'https://portal.abovethestack.com'

export default function Page() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-atsSky/30 via-white to-atsOcean/20 px-6 py-12 shadow-[0_50px_120px_-80px_rgba(15,31,75,0.65)] sm:rounded-[3rem] sm:px-10 sm:py-16">
        <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-atsOcean/25 blur-3xl" aria-hidden />
        <div className="absolute -right-24 bottom-0 h-60 w-60 rounded-full bg-atsCoral/20 blur-3xl" aria-hidden />
        <div className="relative space-y-6 text-slate-700">
          <span className="tag bg-atsOcean/15 text-atsMidnight">Let’s talk</span>
          <h1 className="h1 max-w-3xl text-balance text-atsMidnight">Tell us what you want to build with the Above The Stack community</h1>
          <p className="max-w-2xl text-lg leading-relaxed">
            Share the challenge you’re solving, the research you’d like to influence, or the playbook you want to see. We read every message and route it to the right people on the leadership team.
          </p>
          <div className="flex flex-col gap-3 pt-2 text-sm text-atsMidnight/80 sm:flex-row sm:flex-wrap">
            <a className="btn-secondary w-full justify-center sm:w-auto" href={portalUrl}>
              Log in to Above Connect
            </a>
            <a className="btn-ghost w-full justify-center sm:w-auto" href="mailto:hello@abovethestack.com">
              Email hello@abovethestack.com
            </a>
          </div>
        </div>
      </section>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="card h-full space-y-8 bg-gradient-to-br from-white via-white to-atsSky/5">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-atsMidnight">Send us a note</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              You’ll hear from us within two business days. Mention if you prefer email, a quick call, or a message inside Above Connect.
            </p>
          </div>
          <ContactForm />
        </div>
        <aside className="card space-y-6 bg-gradient-to-br from-atsOcean/10 via-white to-atsCoral/10">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-atsMidnight">Other ways to reach us</h2>
            <ul className="space-y-4 text-sm leading-relaxed text-slate-600">
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 text-atsOcean" strokeWidth={1.8} />
                <div>
                  <p className="font-semibold text-atsMidnight">Direct email</p>
                  <a className="text-atsOcean hover:underline" href="mailto:hello@abovethestack.com">
                    hello@abovethestack.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle aria-hidden="true" className="mt-1 h-5 w-5 text-atsOcean" strokeWidth={1.8} />
                <div>
                  <p className="font-semibold text-atsMidnight">Above Connect DM</p>
                  <p>Ping Ashley Schut or Tycho Löke directly once you’re logged in.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall aria-hidden="true" className="mt-1 h-5 w-5 text-atsOcean" strokeWidth={1.8} />
                <div>
                  <p className="font-semibold text-atsMidnight">Schedule a call</p>
                  <a className="text-atsOcean hover:underline" href="mailto:hello@abovethestack.com?subject=Book%20a%20call">
                    Request a 20 minute intro
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-atsOcean/20 bg-white/70 p-6 text-sm leading-relaxed text-slate-600">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-atsOcean/80">Form setup</h3>
            <p className="mt-3">
              To receive submissions instantly, set the <code className="rounded-md bg-slate-100 px-1 py-0.5 text-[0.75rem] text-atsMidnight">CONTACT_WEBHOOK_URL</code> environment variable to a Slack, Teams, or other webhook URL. We send a JSON payload with the message details.
            </p>
            <p className="mt-3">
              Prefer email delivery? Swap the webhook for an automation platform (Zapier, Make, n8n) and forward messages to your inbox.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
