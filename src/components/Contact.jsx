import { useState } from 'react'
import { useApp } from '../store'
import SectionTitle from './SectionTitle'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Contact() {
  const { t } = useApp()
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((prev) => (prev[key] ? { ...prev, [key]: null } : prev))
  }

  const submit = (e) => {
    e.preventDefault()

    const next = {}
    if (!values.name.trim()) next.name = t.contact.errName
    if (!EMAIL_RE.test(values.email)) next.email = t.contact.errEmail
    if (values.message.trim().length < 10) next.message = t.contact.errMessage

    setErrors(next)
    if (Object.keys(next).length) return

    // No backend wired up — swap this for your form endpoint.
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setValues({ name: '', email: '', message: '' })
    }, 900)
  }

  const field =
    'w-full rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink-soft/60 focus:border-gold'

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

        <form
          onSubmit={submit}
          noValidate
          className="reveal rounded-2xl card-surface p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-bold tracking-wider uppercase">
                {t.contact.name}
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={set('name')}
                placeholder={t.contact.namePh}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-err' : undefined}
                className={field}
              />
              {errors.name && (
                <p id="name-err" className="mt-1.5 text-xs text-red">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-bold tracking-wider uppercase">
                {t.contact.email}
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={set('email')}
                placeholder={t.contact.emailPh}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-err' : undefined}
                className={field}
              />
              {errors.email && (
                <p id="email-err" className="mt-1.5 text-xs text-red">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="mb-1.5 block text-xs font-bold tracking-wider uppercase">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={set('message')}
              placeholder={t.contact.messagePh}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-err' : undefined}
              className={`${field} resize-y`}
            />
            {errors.message && (
              <p id="message-err" className="mt-1.5 text-xs text-red">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full rounded-full bg-red px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-red/25 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
          >
            {status === 'sending' ? t.contact.sending : t.contact.send}
          </button>

          <p aria-live="polite" className="min-h-6 pt-3 text-center text-sm font-medium text-gold">
            {status === 'sent' ? t.contact.sent : ''}
          </p>
        </form>
      </div>
    </section>
  )
}
