import { useEffect, useRef, useState } from 'react'
import { FilePdf } from './Icons'
import { drawPdfCover } from '../pdfCover'

/**
 * Page 1 of a PDF, drawn to fill the card cover, with the document glyph as the
 * placeholder — and as the fallback if the render fails.
 *
 * The draw waits until the card is near the viewport. These are real scanned
 * certificates (~900 kB each), so rendering them eagerly would spend megabytes
 * on a section most visitors never scroll to.
 */
export default function PdfCover({ file, label, className = '' }) {
  const box = useRef(null)
  const canvas = useRef(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    let cancelled = false
    setDrawn(false)

    const draw = () => {
      const host = box.current
      const cv = canvas.current
      if (cancelled || !host || !cv) return

      const rect = host.getBoundingClientRect()
      drawPdfCover(file, cv, rect.width, rect.height)
        .then(() => !cancelled && setDrawn(true))
        .catch(() => {})
    }

    const host = box.current
    if (!host || !('IntersectionObserver' in window)) {
      draw()
      return () => {
        cancelled = true
      }
    }

    // One screen of lead time, so the cover is usually painted by the time the
    // card is actually looked at.
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        draw()
      },
      { rootMargin: '100% 0px' },
    )
    io.observe(host)

    return () => {
      cancelled = true
      io.disconnect()
    }
  }, [file])

  return (
    <span ref={box} className={`relative block h-full w-full ${className}`}>
      <canvas
        ref={canvas}
        role="img"
        aria-label={label}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          drawn ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!drawn && (
        <span className="absolute inset-0 grid place-items-center text-red/70">
          <FilePdf className="h-16 w-16" />
        </span>
      )}
    </span>
  )
}
