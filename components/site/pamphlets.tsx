import Image from 'next/image'

const pamphlets = [
  {
    src: '/images/pamphlet-trifold.jpg',
    width: 1600,
    height: 1131,
    alt: 'NutriSnap tri-fold pamphlet covering what NutriSnap is, how it works, why NutriSnap, and a 14-day free trial.',
  },
  {
    src: '/images/pamphlet-poster.jpg',
    width: 1600,
    height: 1238,
    alt: 'NutriSnap poster showing AI food analysis, personalised insights and the Fitness Focus section.',
  },
]

const storiesPamphlets = [
  {
    src: '/images/stories-trifold.jpg',
    width: 1224,
    height: 864,
    alt: 'NutriSnap tri-fold pamphlet covering what NutriSnap is, how it works, why NutriSnap, and a 14-day free trial.',
    sizes: '(min-width: 1024px) 680px, 100vw',
  },
  {
    src: '/images/stories-poster.jpg',
    width: 896,
    height: 1200,
    alt: 'NutriSnap poster showing AI food analysis, personalised insights and the Fitness Focus section.',
    sizes: '(min-width: 1024px) 360px, 100vw',
  },
]

export function StoriesPamphlets() {
  return (
    <section aria-labelledby="stories-pamphlets-heading" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="rounded-3xl border bg-card p-6 md:p-10">
        <h2 id="stories-pamphlets-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
          Pamphlets
        </h2>
        {/* Column ratio matches the image aspect ratios so both sit at the same height on desktop. */}
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.9fr_1fr]">
          {storiesPamphlets.map((p) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes={p.sizes}
              className="h-auto w-full rounded-2xl border"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pamphlets() {
  return (
    <section aria-labelledby="pamphlets-heading" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="rounded-3xl border bg-card p-6 md:p-10">
        <h2 id="pamphlets-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
          Pamphlets
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {pamphlets.map((p) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full rounded-2xl border"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
