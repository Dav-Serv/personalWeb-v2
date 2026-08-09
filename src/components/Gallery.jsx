import { useState } from 'react'
import Lightbox from './Lightbox'
import SectionTitle from './SectionTitle'

// Intrinsic ratio of the placeholder art — reserves space before decode.
const W = 1200
const H = 900

/**
 * Title-and-image cards that open the shared lightbox. Deliberately has no
 * description or tag slot: this is the layout used by both Sertifikat and
 * Kompetisi, where the image is the content.
 */
export default function Gallery({ id, title, subtitle, items }) {
  const [open, setOpen] = useState(null)

  return (
    <section id={id} className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={title} subtitle={subtitle} />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* The whole card is the trigger — there is nothing else on it. */}
              <button
                type="button"
                onClick={() => setOpen(item)}
                className="flex h-full w-full flex-col overflow-hidden rounded-2xl card-surface text-left transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="block aspect-[4/3] overflow-hidden border-b border-line bg-gradient-to-br from-surface-3 to-surface-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={W}
                    height={H}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="block p-4 font-display text-base font-bold sm:p-5 sm:text-lg">
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <Lightbox
          item={open}
          width={W}
          height={H}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}
