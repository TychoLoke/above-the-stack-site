'use client'

import { FormEvent, useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

type ApiResponse = {
  error?: string
  missingConfig?: boolean
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('loading')
    setErrorMessage(null)

    const formData = new FormData(form)

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      company: String(formData.get('company') || ''),
      message: String(formData.get('message') || ''),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as ApiResponse

      if (!response.ok) {
        setStatus('error')
        if (data?.missingConfig) {
          setErrorMessage(
            'The contact form needs a CONTACT_WEBHOOK_URL environment variable (e.g. a Slack or Teams webhook). Once it is set, submissions will post there.'
          )
        } else {
          setErrorMessage(data?.error || 'We could not send your message just now. Please try again or email hello@abovethestack.com.')
        }
        return
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('Contact form submission failed', error)
      setStatus('error')
      setErrorMessage('We could not send your message just now. Please try again or email hello@abovethestack.com.')
    }
  }

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-atsMidnight" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="w-full rounded-2xl border border-atsOcean/20 bg-white/90 px-4 py-3 text-sm text-atsMidnight shadow-inner focus:outline-none focus:ring-2 focus:ring-atsSky/50"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-atsMidnight" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className="w-full rounded-2xl border border-atsOcean/20 bg-white/90 px-4 py-3 text-sm text-atsMidnight shadow-inner focus:outline-none focus:ring-2 focus:ring-atsSky/50"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-atsMidnight" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          name="company"
          placeholder="Where you work"
          className="w-full rounded-2xl border border-atsOcean/20 bg-white/90 px-4 py-3 text-sm text-atsMidnight shadow-inner focus:outline-none focus:ring-2 focus:ring-atsSky/50"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-atsMidnight" htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, challenge, or the resource you need."
          className="w-full rounded-2xl border border-atsOcean/20 bg-white/90 px-4 py-3 text-sm text-atsMidnight shadow-inner focus:outline-none focus:ring-2 focus:ring-atsSky/50"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
        >
          {isLoading ? 'Sending…' : 'Send message'}
        </button>
        {isSuccess && (
          <p className="text-sm font-semibold text-atsOcean">Thanks! We’ll reach out shortly.</p>
        )}
      </div>
      {status === 'error' && errorMessage && (
        <p className="rounded-2xl border border-atsCoral/30 bg-atsCoral/10 px-4 py-3 text-sm text-atsMidnight">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
