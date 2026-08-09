import { useEffect } from 'react'
import About from './components/About'
import Certificates from './components/Certificates'
import Competitions from './components/Competitions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Navbar from './components/Navbar'
import ParallaxScene from './components/ParallaxScene'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useParallaxRoot, useReveal } from './hooks'

const MIN_BOOT_MS = 700

/** Fades out the inline preloader once React is mounted and fonts are ready. */
function useBootDismiss() {
  useEffect(() => {
    const boot = document.getElementById('boot')
    document.body.classList.remove('is-loading')
    if (!boot) return

    let timer = 0
    const start = performance.now()

    const hide = () => {
      const wait = Math.max(0, MIN_BOOT_MS - (performance.now() - start))
      timer = window.setTimeout(() => {
        boot.dataset.done = '1'
        boot.addEventListener('transitionend', () => boot.remove(), {
          once: true,
        })
        // Fallback in case the transition never fires (e.g. reduced motion).
        window.setTimeout(() => boot.remove(), 900)
      }, wait)
    }

    // Wait for webfonts so the hero does not swap typefaces after reveal.
    const fonts = document.fonts?.ready
    if (fonts) {
      let settled = false
      const once = () => {
        if (settled) return
        settled = true
        hide()
      }
      fonts.then(once)
      window.setTimeout(once, 2500)
    } else {
      hide()
    }

    return () => window.clearTimeout(timer)
  }, [])
}

export default function App() {
  useBootDismiss()
  useParallaxRoot()
  useReveal()

  return (
    <>
      <ParallaxScene />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Certificates />
        <Competitions />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
