import { useEffect, useState } from 'react'
import { useApp } from '../store'
import { ArrowUp, JollyRoger } from './Icons'

export default function Footer() {
  const { t } = useApp()
  const [show, setShow] = useState(false)

  useEffect(() => {
    let frame = 0
    const check = () => {
      frame = 0
      setShow(window.scrollY > 600)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const toTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })

  return (
    <>
      <footer className="relative border-t border-line px-4 py-10 text-center sm:px-6">
        <JollyRoger className="mx-auto h-10 w-10 text-red opacity-80" />
        <p className="mt-4 text-sm text-ink-soft">
          {t.footer.made} <span className="text-red">♥</span> {t.footer.and}
        </p>
        <p className="mt-1 text-xs text-ink-soft/70">
          © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
        </p>
      </footer>

      <button
        type="button"
        onClick={toTop}
        aria-label={t.a11y.toTop}
        className={`fixed right-4 bottom-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold hover:text-gold sm:right-6 sm:bottom-6 ${
          show
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  )
}
