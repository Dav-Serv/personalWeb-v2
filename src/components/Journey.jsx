import { useApp } from '../store'
import SectionTitle from './SectionTitle'

export default function Journey() {
  const { t, data } = useApp()

  return (
    <section id="voyage" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title={t.voyage.title} subtitle={t.voyage.subtitle} />

        <ol className="relative">
          {/* The route line */}
          <span
            className="absolute top-2 bottom-2 left-[15px] w-0.5 bg-gradient-to-b from-gold via-red to-transparent sm:left-[19px]"
            aria-hidden="true"
          />

          {data.timeline.map((item, i) => (
            <li
              key={item.year + item.island}
              className="reveal relative pb-10 pl-12 last:pb-0 sm:pl-16"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Island marker */}
              <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border-2 border-gold bg-surface-2 sm:h-10 sm:w-10">
                <span className="h-2.5 w-2.5 rotate-45 bg-red sm:h-3 sm:w-3" />
              </span>

              <div className="rounded-2xl card-surface p-5 transition-transform duration-300 hover:translate-x-1 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="rounded-full bg-red/12 px-3 py-1 font-display text-xs font-bold tracking-wider text-red uppercase">
                    {item.year === 'now' ? t.voyage.present : item.year}
                  </span>
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    {item.island}
                  </h3>
                </div>
                <p className="mt-2 font-display text-sm font-semibold text-gold sm:text-base">
                  {item.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
