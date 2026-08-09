import { useCallback, useEffect, useState } from 'react'
import { useApp } from '../store'
import { Close, JollyRoger, Menu, Moon, Sun } from './Icons'

const SECTIONS = [
  'home',
  'about',
  'crew',
  'voyage',
  'cert',
  'contest',
  'bounty',
  'contact',
]

export default function Navbar() {
  const { t, theme, lang, toggleTheme, toggleLang } = useApp()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('home')

  // Shrink/solidify the bar past the fold.
  useEffect(() => {
    let frame = 0
    const check = () => {
      frame = 0
      setSolid(window.scrollY > 60)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  // Highlight the section currently in view.
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length || !('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.6] },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Close the mobile sheet on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = useCallback((e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-line bg-card backdrop-blur-lg'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-18 sm:px-6">
        <a
          href="#home"
          onClick={(e) => go(e, 'home')}
          className="flex shrink-0 items-center gap-2 font-display text-base font-bold tracking-tight sm:text-lg"
        >
          <JollyRoger className="h-8 w-8 text-red transition-transform duration-300 hover:rotate-12" />
          <span className="hidden sm:inline">DavServ</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? 'text-red'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {t.nav[id]}
                {active === id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-red" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.a11y.toggleLang}
            className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-bold tracking-wide transition-colors hover:border-gold hover:text-gold"
          >
            <span className={lang === 'id' ? 'text-red' : 'opacity-45'}>ID</span>
            <span className="opacity-30">/</span>
            <span className={lang === 'en' ? 'text-red' : 'opacity-45'}>EN</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.a11y.toggleTheme}
            className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:border-gold hover:text-gold"
          >
            {theme === 'dark' ? (
              <Sun className="h-4.5 w-4.5" />
            ) : (
              <Moon className="h-4.5 w-4.5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-line bg-card backdrop-blur-lg transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                tabIndex={open ? 0 : -1}
                className={`block border-b border-line/50 py-3 text-sm font-medium last:border-0 ${
                  active === id ? 'text-red' : 'text-ink-soft'
                }`}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
