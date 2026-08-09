/* Inline SVG only — no icon font, no sprite request. */

export function JollyRoger({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="currentColor">
        <path d="M60 18c-19 0-34 12-34 28 0 9 5 17 13 22v9a6 6 0 0 0 6 6h30a6 6 0 0 0 6-6v-9c8-5 13-13 13-22 0-16-15-28-34-28Zm-13 30a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm26 0a7 7 0 1 1 0 14 7 7 0 0 1 0-14ZM49 76h22v6H49v-6Z" />
        <path d="M17 84c14 4 29 6 43 6s29-2 43-6l3 8c-15 5-31 7-46 7s-31-2-46-7l3-8Z" />
      </g>
    </svg>
  )
}

export function StrawHat({ className = '' }) {
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
      <ellipse cx="100" cy="82" rx="92" ry="26" fill="#f0d79b" />
      <ellipse cx="100" cy="78" rx="92" ry="26" fill="#e8c87e" />
      <path
        d="M42 74c0-30 26-52 58-52s58 22 58 52c0 0-26 10-58 10s-58-10-58-10Z"
        fill="#f2dda9"
      />
      <path d="M42 68c8 8 34 14 58 14s50-6 58-14v10c-8 8-34 14-58 14s-50-6-58-14V68Z" fill="#b3121f" />
      <ellipse cx="100" cy="80" rx="92" ry="26" fill="none" stroke="rgba(120,80,20,.35)" strokeWidth="2" />
    </svg>
  )
}

export function Compass({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".5" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".3" />
      <path d="M50 22l7 21 21 7-21 7-7 21-7-21-21-7 21-7 7-21Z" fill="currentColor" opacity=".85" />
      <circle cx="50" cy="50" r="3.5" fill="currentColor" />
    </svg>
  )
}

export function Anchor({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <circle cx="50" cy="20" r="9" />
        <path d="M50 29v52M30 44h40" />
        <path d="M22 62c0 16 13 24 28 24s28-8 28-24" />
      </g>
    </svg>
  )
}

export function Sun({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
        <path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9" />
      </g>
    </svg>
  )
}

export function Moon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.7 8.7 0 1 0 11.1 11.1Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Menu({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </g>
    </svg>
  )
}

export function Close({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </g>
    </svg>
  )
}

export function ArrowUp({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </g>
    </svg>
  )
}

const socialPaths = {
  github:
    'M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05 4 0 4.4 2.6 4.4 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z',
  instagram:
    'M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388 5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552 1.278.056 1.689.069 4.947.063 3.257-.006 3.668-.021 4.947-.082 1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388 5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912.056-1.28.07-1.69.063-4.948-.006-3.257-.02-3.667-.081-4.947-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123 5.9 5.9 0 0 0-2.128-1.38C19.074.322 18.202.12 16.924.066 15.647.009 15.236-.006 11.977 0 8.718.006 8.31.02 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895 3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.804.244 2.227.408.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848.005 3.204-.006 3.584-.061 4.848-.051 1.17-.245 1.805-.408 2.23-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442 1.44 1.44 0 0 0-1.437 1.442M5.839 12.012c.007 3.403 2.77 6.157 6.172 6.15s6.16-2.77 6.153-6.173-2.771-6.158-6.174-6.151-6.157 2.771-6.15 6.174M8 12.008A4 4 0 1 1 12.008 16 4 4 0 0 1 8 12.008',
  youtube:
    'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z',
}

export function SocialIcon({ name, className = '' }) {
  const d = socialPaths[name]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={d} fill="currentColor" />
    </svg>
  )
}

/**
 * Renders one entry from src/techStack.js. Handles the two shapes there:
 * a single path filled with the brand colour, or a list of {d, fill} layers
 * for the multi-colour marks (Goravel).
 */
export function TechIcon({ icon, dark = false, className = '' }) {
  const color = (dark && icon.dark) || icon.hex
  const layers = Array.isArray(icon.d) ? icon.d : [{ d: icon.d, fill: color }]

  return (
    <svg
      viewBox={icon.viewBox || '0 0 24 24'}
      className={className}
      aria-hidden="true"
    >
      {layers.map((layer) => (
        <path key={layer.d} d={layer.d} fill={layer.fill} />
      ))}
    </svg>
  )
}
