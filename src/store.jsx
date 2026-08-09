import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { content, dict } from './i18n'

const AppContext = createContext(null)

function readTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function readLang() {
  if (typeof document === 'undefined') return 'id'
  const stored = localStorage.getItem('lang')
  if (stored === 'id' || stored === 'en') return stored
  return document.documentElement.lang === 'en' ? 'en' : 'id'
}

export function AppProvider({ children }) {
  // Initial values come from the inline <head> script, so state matches first paint.
  const [theme, setTheme] = useState(readTheme)
  const [lang, setLang] = useState(readLang)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#050b18' : '#f5e7cd')
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  )
  const toggleLang = useCallback(
    () => setLang((l) => (l === 'id' ? 'en' : 'id')),
    [],
  )

  const value = useMemo(
    () => ({
      theme,
      lang,
      toggleTheme,
      toggleLang,
      t: dict[lang],
      data: content[lang],
    }),
    [theme, lang, toggleTheme, toggleLang],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>')
  return ctx
}
