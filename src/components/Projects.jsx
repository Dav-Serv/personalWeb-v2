import { useState } from 'react'
import { useApp } from '../store'
import Lightbox from './Lightbox'
import SectionTitle from './SectionTitle'

export default function Projects() {
  const { t, data } = useApp()
  const [open, setOpen] = useState(null)

  return (
    <section id="bounty" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={t.bounty.title} subtitle={t.bounty.subtitle} coming={t.bounty.coming}/>
        <ul className="grid gap-6 md:grid-cols-3">
          {/* {data.projects.map((p, i) => (
            <li
              key={p.title}
              className="reveal group relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <article className="flex h-full flex-col rounded-sm border-2 border-gold/40 bg-surface-2 p-4 shadow-xl transition-all duration-400 group-hover:-translate-y-2 group-hover:border-gold group-odd:-rotate-1 group-even:rotate-1 group-hover:rotate-0 sm:p-5">
                <div className="texture-paper absolute inset-0 rounded-sm" />

                <div className="relative flex h-full flex-col border-2 border-ink/20 p-4">
                  <p className="text-center font-pirate text-2xl tracking-[0.1em] sm:text-3xl">
                    Wanted
                  </p>

                  <div className="mt-3 aspect-video overflow-hidden border border-ink/15 bg-gradient-to-br from-surface-3 to-surface-2">
                    <img
                      src={p.image}
                      alt={p.title}
                      width="1200"
                      height="675"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {p.desc}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium tracking-wide text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setOpen(p)}
                    className="mt-4 w-full rounded-full bg-red px-3 py-2.5 text-center text-xs font-bold text-white transition-opacity hover:opacity-90"
                  >
                    {t.bounty.view}
                  </button>
                </div>
              </article>
            </li>
          ))} */}
        </ul>
      </div>

      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
