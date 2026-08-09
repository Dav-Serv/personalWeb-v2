import { usePointerTilt } from '../hooks'
import { socials } from '../i18n'
import { useApp } from '../store'
import { Compass, SocialIcon } from './Icons'

export default function Hero() {
  const { t } = useApp()
  const tilt = usePointerTilt(22)

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pt-24 pb-20 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* Copy */}
        <div className="parallax text-center lg:text-left" style={{ '--speed': '-0.06' }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-red/30 bg-red/10 px-4 py-1.5 font-display text-[11px] font-bold tracking-[0.22em] text-red uppercase sm:text-xs">
            <span className="inline-block h-1.5 w-1.5 animate-shine rounded-full bg-red" />
            {t.hero.eyebrow}
          </p>

          <h1 className="font-pirate text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            {t.hero.name}
          </h1>

          <p className="mt-4 font-display text-lg font-semibold text-gold sm:text-xl md:text-2xl">
            {t.hero.role}
          </p>

          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
            {t.hero.tagline}
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <a
              href="#bounty"
              className="group relative overflow-hidden rounded-full bg-red px-7 py-3.5 text-center text-sm font-bold tracking-wide text-white shadow-lg shadow-red/25 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-ink/25 px-7 py-3.5 text-center text-sm font-bold tracking-wide transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="mt-7 flex justify-center gap-3 lg:justify-start">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:text-gold"
                >
                  <SocialIcon name={s.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 flex items-center justify-center gap-2 text-[11px] tracking-[0.28em] text-ink-soft uppercase lg:justify-start">
            <span className="inline-block h-8 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
            {t.hero.scroll}
          </p>
        </div>

        {/* Wanted poster */}
        <div className="parallax relative mx-auto w-full max-w-sm" style={{ '--speed': '0.1' }}>
          <div ref={tilt} className="relative">
            <Compass className="absolute -top-8 -left-6 h-16 w-16 animate-spin-slow text-gold opacity-45 sm:h-20 sm:w-20" />

            <div className="relative -rotate-2 rounded-sm border-2 border-gold/45 bg-surface-2 p-4 shadow-2xl transition-transform duration-500 hover:rotate-0 sm:p-5">
              <div className="texture-paper absolute inset-0" />

              <div className="relative border-2 border-ink/25 p-3 sm:p-4">
                <p className="text-center font-pirate text-3xl tracking-[0.12em] text-ink sm:text-4xl">
                  Wanted
                </p>
                <p className="mb-3 text-center font-display text-[10px] font-bold tracking-[0.3em] text-ink-soft uppercase">
                  Dead or Alive
                </p>

                <div className="relative aspect-4/5 overflow-hidden border border-ink/20 bg-gradient-to-b from-surface-3 to-surface-2">
                  <img
                    src="/images/profile.jpeg"
                    alt={t.hero.name}
                    width="800"
                    height="1000"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/15 to-transparent" />
                </div>

                <p className="mt-3 text-center font-pirate text-2xl tracking-wide sm:text-3xl">
                  {t.hero.name}
                </p>

                <div className="mt-1 flex items-baseline justify-center gap-1.5">
                  <span className="font-display text-xs font-bold text-ink-soft">
                    {t.hero.bounty}
                  </span>
                  <span className="font-display text-xl font-bold text-red sm:text-2xl">
                    ฿ 1.500.000.000
                  </span>
                </div>

                <p className="mt-2 text-center text-[9px] tracking-[0.2em] text-ink-soft uppercase">
                  Marine HQ · World Government
                </p>
              </div>
            </div>

            {/* Tape corners */}
            <span className="absolute -top-2 -left-3 h-7 w-16 -rotate-45 bg-gold/25 backdrop-blur-sm" />
            <span className="absolute -right-3 -bottom-2 h-7 w-16 -rotate-45 bg-gold/25 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
