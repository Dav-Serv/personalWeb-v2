import { useEffect, useRef } from 'react'

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Publishes scroll position once per frame as a single CSS variable (--sy) on
 * <html>. Every parallax layer reads that one variable, so N layers still cost
 * one style write per frame instead of N.
 */
export function useParallaxRoot() {
  useEffect(() => {
    if (reduced()) return
    const root = document.documentElement
    let frame = 0

    const write = () => {
      frame = 0
      root.style.setProperty('--sy', String(window.scrollY))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(write)
    }

    write()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
      root.style.removeProperty('--sy')
    }
  }, [])
}

/**
 * Reveals children on first entry, then stops observing them — no lingering
 * observers, and no re-animation when scrolling back up.
 *
 * A single querySelectorAll would only ever see the nodes present on the first
 * render, so anything mounted later (or re-created when the locale switches)
 * would stay stuck at opacity 0. A MutationObserver keeps the set current.
 */
export function useReveal() {
  useEffect(() => {
    const collect = (root) =>
      root instanceof Element
        ? [
            ...(root.matches('.reveal:not(.is-in)') ? [root] : []),
            ...root.querySelectorAll('.reveal:not(.is-in)'),
          ]
        : []

    if (reduced() || !('IntersectionObserver' in window)) {
      const show = (root) => collect(root).forEach((n) => n.classList.add('is-in'))
      show(document.body)
      const mo = new MutationObserver((records) => {
        for (const r of records) r.addedNodes.forEach(show)
      })
      mo.observe(document.body, { childList: true, subtree: true })
      return () => mo.disconnect()
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    )

    const observe = (root) => collect(root).forEach((n) => io.observe(n))
    observe(document.body)

    const mo = new MutationObserver((records) => {
      for (const r of records) r.addedNodes.forEach(observe)
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [])
}

/** Pointer-driven tilt for the hero art. Skipped on touch and reduced motion. */
export function usePointerTilt(strength = 14) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let frame = 0
    let tx = 0
    let ty = 0

    const write = () => {
      frame = 0
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    }
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * strength
      ty = (e.clientY / window.innerHeight - 0.5) * strength
      if (!frame) frame = requestAnimationFrame(write)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
      el.style.transform = ''
    }
  }, [strength])

  return ref
}

/** Counts up to `to` once the node scrolls into view. */
export function useCountUp(to, duration = 1400) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduced() || !('IntersectionObserver' in window)) {
      el.textContent = String(to)
      return
    }

    let frame = 0
    let start = 0

    const step = (now) => {
      if (!start) start = now
      const p = Math.min((now - start) / duration, 1)
      // easeOutCubic
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        frame = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [to, duration])

  return ref
}
