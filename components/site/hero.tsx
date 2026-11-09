import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

const macros = [
  { label: 'Protein', value: 38, width: '76%', color: 'bg-primary' },
  { label: 'Carbs', value: 52, width: '58%', color: 'bg-coral' },
  { label: 'Fat', value: 21, width: '44%', color: 'bg-lime' },
]

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:py-20 lg:grid-cols-2">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium">
          <span className="size-1.5 rounded-full bg-coral" aria-hidden="true" />
          AI Food Intelligence &amp; Visual Macro Tracking
        </p>
        <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-7xl">
          Snap your plate. <span className="text-coral">Know your fuel.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          One photo is all it takes. NutriSnap reads your meal and returns a full nutrition picture in
          seconds — no barcodes, no endless food searches, no estimating.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start free trial <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center rounded-full border bg-card px-6 py-3 font-semibold transition-colors hover:bg-muted"
          >
            See how it works
          </Link>
        </div>
        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex text-coral" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <span>Loved by 250,000+ mindful eaters</span>
        </div>
      </div>

      <div className="relative pb-10 lg:pb-0">
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/images/hero-scan.png"
            alt="A phone held over a salmon and quinoa bowl, showing a NutriSnap macro breakdown on screen"
            fill
            priority
            sizes="(min-width: 1024px) 528px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-4 w-64 rounded-2xl border bg-card p-5 shadow-xl lg:-left-8 lg:bottom-[-24px]">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Salmon power bowl
            </p>
            <span className="rounded-full bg-secondary px-2 py-1 text-[11px] font-medium text-primary">
              98% match
            </span>
          </div>
          <p className="mt-3 font-display text-3xl font-bold">
            612 <span className="font-sans text-base font-normal text-muted-foreground">kcal</span>
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {macros.map((m) => (
              <li key={m.label}>
                <div className="flex justify-between">
                  <span className="font-medium">{m.label}</span>
                  <span className="text-muted-foreground">{m.value}g</span>
                </div>
                <div className="mt-1.5 h-1.5 rounded-full bg-muted">
                  <div className={`h-full rounded-full ${m.color}`} style={{ width: m.width }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
