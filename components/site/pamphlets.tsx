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
    src: '/images/stories-pamphlet-1.jpg',
    width: 1224,
    height: 864,
    alt: 'Two NutriSnap pamphlet pages. The left reads "Let AI Read Your Plate" with a phone showing a meal analysis, and the right explains how it works in three steps with a 14-day free trial.',
  },
  {
    src: '/images/stories-pamphlet-2.jpg',
    width: 1224,
    height: 864,
    alt: 'Two NutriSnap pamphlet pages. The left reads "Decode Your Plate\'s Story" with a three-step process and an athlete section, and the right shows a health overview screen and a complimentary 14-day trial.',
  },
]

export function StoriesPamphlets() {
  return (
    <section aria-labelledby="stories-pamphlets-heading" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="rounded-3xl border bg-card p-6 md:p-10">
        <h2 id="stories-pamphlets-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
          Pamphlets
        </h2>
        {/* Both images share the same aspect ratio, so equal columns line up at the same height. */}
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          {storiesPamphlets.map((p) => (
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

const aboutPamphlets = [
  {
    src: '/images/about-pamphlet-india.jpg',
    width: 1671,
    height: 941,
    alt: 'NutriSnap banner titled "India\'s Food Heritage, Now Smarter" showing a phone that detects an Indian thali and lists its calories, protein, fibre and fats.',
  },
  {
    src: '/images/about-pamphlet-trifold.jpg',
    width: 1491,
    height: 1055,
    alt: 'NutriSnap tri-fold pamphlet covering what NutriSnap is, key features, why to choose it, how it works and a 14-day free trial.',
  },
]

export function AboutPamphlets() {
  return (
    <section aria-labelledby="about-pamphlets-heading" className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
      <div className="rounded-3xl border bg-card p-6 md:p-10">
        <h2 id="about-pamphlets-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
          Pamphlets
        </h2>
        <div className="mt-8 flex flex-col gap-6">
          {aboutPamphlets.map((p) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes="(min-width: 1152px) 1056px, 100vw"
              className="h-auto w-full rounded-2xl border"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
