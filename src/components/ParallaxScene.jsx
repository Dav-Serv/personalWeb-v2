import { memo } from 'react'

/**
 * Fixed, non-interactive scenery. Everything here is CSS gradients + inline SVG
 * so the whole scene costs zero network requests, and each layer moves via a
 * transform driven by the shared --sy variable.
 */
function ParallaxScene() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Sky / sea gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-2 to-surface-3 transition-colors duration-500" />

      {/* Sun / moon disc */}
      <div
        className="parallax absolute top-[8%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-[2px] sm:h-72 sm:w-72"
        style={{
          '--speed': '0.14',
          background:
            'radial-gradient(circle, var(--glow) 0%, transparent 68%)',
        }}
      />

      {/* Far clouds */}
      <div className="parallax absolute inset-x-0 top-[12%]" style={{ '--speed': '0.07' }}>
        <Cloud className="absolute left-[6%] w-40 opacity-45 sm:w-56" />
        <Cloud className="absolute right-[10%] top-16 w-32 opacity-35 sm:w-44" />
        <Cloud className="absolute left-[52%] top-28 w-28 opacity-25 sm:w-36" />
      </div>

      {/* Distant island silhouette */}
      <svg
        className="parallax absolute bottom-[26%] left-[8%] w-40 text-ink opacity-[0.12] sm:w-56"
        style={{ '--speed': '0.2' }}
        viewBox="0 0 200 90"
      >
        <path
          d="M0 90 L38 30 L62 56 L92 8 L128 56 L156 34 L200 90 Z"
          fill="currentColor"
        />
      </svg>

      {/* Sailing ship — floats and sways */}
      <div
        className="parallax absolute right-[8%] bottom-[30%] w-28 sm:w-40"
        style={{ '--speed': '0.3' }}
      >
        <div className="animate-float">
          <Ship className="w-full origin-bottom animate-sway text-ink opacity-25" />
        </div>
      </div>

      {/* Three wave bands, each drifting at its own rate */}
      <WaveBand bottom="0%" speed="0.34" opacity="0.5" height="150" duration={30} />
      <WaveBand bottom="-2%" speed="0.5" opacity="0.35" height="180" offset={9} duration={22} />
      <WaveBand bottom="-5%" speed="0.72" opacity="0.24" height="210" offset={16} duration={17} />

      {/* Vignette keeps text legible over the scene */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, transparent 42%, var(--scrim) 100%)',
        }}
      />
    </div>
  )
}

function Cloud({ className = '' }) {
  return (
    <svg viewBox="0 0 200 80" className={`${className} text-ink`}>
      <g fill="currentColor" opacity="0.35">
        <ellipse cx="60" cy="52" rx="48" ry="24" />
        <ellipse cx="104" cy="42" rx="38" ry="28" />
        <ellipse cx="146" cy="54" rx="42" ry="22" />
      </g>
    </svg>
  )
}

function Ship({ className = '' }) {
  return (
    <svg viewBox="0 0 120 130" className={className}>
      <g fill="currentColor">
        <path d="M58 8h4v92h-4z" />
        <path d="M62 16c16 6 26 14 30 22-12 6-22 8-30 8V16Z" />
        <path d="M58 48c-14 5-23 12-27 19 11 5 19 7 27 7V48Z" />
        <path d="M14 104h92c-6 12-18 18-46 18s-40-6-46-18Z" />
      </g>
    </svg>
  )
}

function WaveBand({ bottom, speed, opacity, height, offset = 0, duration = 28 }) {
  const wave =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='120' viewBox='0 0 1200 120'%3E%3Cpath d='M0 60c100-32 200-32 300 0s200 32 300 0 200-32 300 0 200 32 300 0v60H0Z' fill='%23000'/%3E%3C/svg%3E\")"

  return (
    <div
      className="parallax wave-band absolute inset-x-0 bg-ink"
      style={{
        bottom,
        height: `${height}px`,
        '--speed': speed,
        opacity,
        maskImage: wave,
        WebkitMaskImage: wave,
        maskRepeat: 'repeat-x',
        WebkitMaskRepeat: 'repeat-x',
        maskSize: '1200px 100%',
        WebkitMaskSize: '1200px 100%',
        // Negative delay starts each band mid-cycle so they never march in step.
        animationDelay: `-${offset}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

export default memo(ParallaxScene)
