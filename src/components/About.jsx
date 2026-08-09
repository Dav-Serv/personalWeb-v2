import { useCountUp } from '../hooks'
import { useApp } from '../store'
import { Anchor, Compass } from './Icons'
import SectionTitle from './SectionTitle'

function Stat({ value, label, suffix = '+' }) {
  const ref = useCountUp(value)
  return (
    <div className="text-center">
      <p className="font-display text-3xl font-bold text-gold sm:text-4xl">
        <span ref={ref}>0</span>
        {suffix}
      </p>
      <p className="mt-1 text-xs tracking-wider text-ink-soft uppercase sm:text-sm">
        {label}
      </p>
    </div>
  )
}

export default function About() {
  const { t } = useApp()

  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-12">
          <div
            className="parallax reveal mx-auto md:mx-0"
            style={{ '--speed': '-0.05' }}
          >
            <div className="relative grid h-36 w-36 place-items-center rounded-full border-2 border-gold/40 bg-card sm:h-44 sm:w-44">
              <Compass className="h-20 w-20 animate-spin-slow text-gold sm:h-24 sm:w-24" />
              <Anchor className="absolute -right-3 -bottom-3 h-11 w-11 rounded-full border border-line bg-surface-2 p-2 text-red" />
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '90ms' }}>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              {t.about.body}
            </p>

            <blockquote className="mt-7 border-l-4 border-red pl-5 font-display text-base italic sm:text-lg">
              “{t.about.quote}”
            </blockquote>

            <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl card-surface p-5 sm:p-6">
              <Stat value={5} label={t.about.stats.years} />
              <Stat value={42} label={t.about.stats.projects} />
              <Stat value={18} label={t.about.stats.clients} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
