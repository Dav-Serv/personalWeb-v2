import { useApp } from '../store'
import { techStack } from '../techStack'
import { TechIcon } from './Icons'
import SectionTitle from './SectionTitle'

export default function Skills() {
  const { t, theme } = useApp()
  const dark = theme === 'dark'

  return (
    <section id="crew" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title={t.crew.title} subtitle={t.crew.subtitle} />

        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
          {techStack.map((icon, i) => (
            <li
              key={icon.name}
              className="reveal"
              // Short stagger: 24 tiles at 70ms each would take 1.7s to finish.
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <div className="flex h-full flex-col items-center justify-start gap-2.5 rounded-2xl card-surface p-3 transition-transform duration-300 hover:-translate-y-1 sm:p-4">
                <TechIcon
                  icon={icon}
                  dark={dark}
                  className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
                />
                <span className="text-center text-[11px] leading-tight font-medium text-ink-soft sm:text-xs">
                  {icon.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
