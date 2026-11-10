import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AppDemo() {
  return (
    <section aria-labelledby="app-demo-heading" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">See it in action</p>
          <h2 id="app-demo-heading" className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            From plate to plan, on screen.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Watch a real scan in the app: snap the meal, let the analysis run, and see the breakdown land in your
            diary.
          </p>
          <Link
            href="/features"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore features <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px] overflow-hidden rounded-[2rem] shadow-2xl">
            <video
              className="block aspect-[9/16] w-full object-cover"
              src="/videos/app-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="NutriSnap app demo: scanning a meal and viewing its nutrition breakdown"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
