import { useEffect, useRef } from 'react'
import { useApp } from '../store'
import { Close, Download } from './Icons'

/**
 * Full-width popup, shared by Projects, Certificates and Competitions. Mounted
 * only while an item is open, so the markup and the key/scroll listeners cost
 * nothing on the idle page.
 *
 * `item` needs a title plus either `image` or `file` (a PDF), and may carry an
 * optional `desc`. width/height are the intrinsic ratio of the image, so the
 * panel reserves space before it decodes instead of jumping. PDFs render in an
 * iframe with open/download links beside them, because inline PDF viewing is
 * browser-dependent and mobile browsers routinely refuse it.
 */
export default function Lightbox({ item, onClose, width = 1200, height = 675 }) {
  const { t } = useApp()
  const closeRef = useRef(null)
  const returnTo = useRef(null)

  useEffect(() => {
    returnTo.current = document.activeElement
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    const { body } = document
    const prev = body.style.overflow
    body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      body.style.overflow = prev
      returnTo.current?.focus?.()
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-100 grid place-items-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-sm sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl rounded-sm border-2 border-gold/45 bg-surface-2 p-3 shadow-2xl sm:p-4"
      >
        <div className="flex items-start justify-between gap-4 px-1 pb-3">
          <div>
            <h3 className="font-display text-base font-bold sm:text-lg">
              {item.title}
            </h3>
            {item.desc && (
              <p className="mt-0.5 text-xs text-ink-soft sm:text-sm">
                {item.desc}
              </p>
            )}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t.a11y.close}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-gold hover:text-gold"
          >
            <Close className="h-4 w-4" />
          </button>
        </div>

        {item.file ? (
          <>
            <iframe
              src={item.file}
              title={item.title}
              className="block h-[68vh] min-h-72 w-full rounded-sm border border-ink/20 bg-surface-3"
            />
            <div className="flex flex-wrap items-center gap-2 px-1 pt-3">
              <a
                href={item.file}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-line px-4 py-2 text-xs font-bold tracking-wide text-ink-soft transition-colors hover:border-gold hover:text-gold"
              >
                {t.pdf.open}
              </a>
              <a
                href={item.file}
                download
                className="inline-flex items-center gap-1.5 rounded-full bg-red px-4 py-2 text-xs font-bold tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Download className="h-3.5 w-3.5" />
                {t.pdf.download}
              </a>
            </div>
          </>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            width={width}
            height={height}
            decoding="async"
            className="block w-full rounded-sm border border-ink/20 bg-surface-3 object-contain"
          />
        )}
      </div>
    </div>
  )
}
