export default function SectionTitle({ title, subtitle, coming, align = 'center' }) {
  const centered = align === 'center'
  return (
    <div className={`reveal mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-pirate text-4xl tracking-wide sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <div
        className={`mt-3 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
        <span className="h-1.5 w-1.5 rotate-45 bg-red" />
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
      </div>
      {subtitle && (
        <p className="mb-30 text-base text-ink-soft sm:text-lg">{subtitle}</p>
      )}
      <h2 className="font-pirate text-4xl tracking-wide sm:text-5xl md:text-6xl">
        {coming}
      </h2>
    </div>
  )
}
