import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Camera, ChartLine, Sparkles } from 'lucide-react'

const stats = [
  { value: '3 sec', label: 'average scan-to-macros time' },
  { value: '1.2M+', label: 'meals analysed by our AI' },
  { value: '94%', label: 'portion accuracy vs. lab weighing' },
  { value: '4.8★', label: 'average app store rating' },
]

export function Stats() {
  return (
    <section aria-label="NutriSnap in numbers" className="border-y bg-card">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-1">
            <dt className="text-sm text-muted-foreground">{s.label}</dt>
            <dd className="font-display text-4xl font-bold">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

const steps = [
  {
    icon: Camera,
    title: 'Snap',
    body: 'Take a quick photo of whatever you’re eating — cooked at home, ordered in or eaten out.',
  },
  {
    icon: Sparkles,
    title: 'Analyse',
    body: 'Computer vision spots each ingredient on the plate and works out how much of it there is.',
  },
  {
    icon: ChartLine,
    title: 'Know',
    body: 'Calories, macros and micronutrients land in your diary and count toward today’s targets.',
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-wider text-coral">{children}</p>
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
      {children} <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  )
}

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <Eyebrow>How it works</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Three seconds from plate to plan.</h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Tedious logging is why most people quit tracking. So we removed the tedious part.
      </p>
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="rounded-3xl border bg-card p-7">
            <div className="flex items-start justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-5xl font-bold text-border" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <TextLink href="/how-it-works">Explore the full process</TextLink>
      </div>
    </section>
  )
}

const features = [
  'Multi-item plate detection',
  'Portion estimation with depth sensing',
  'Syncs with Apple Health & Google Fit',
]

export function RealLife() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/meal-breakfast.png"
            alt="Avocado toast with a poached egg, berries and coffee"
            fill
            sizes="(min-width: 1024px) 528px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <Eyebrow>Built for real life</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Works on the meals you actually eat.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Loaded plates, saucy dishes, market snacks, family recipes — our model has learned from over 40,000
            dishes across 120 cuisines, so it recognises food the way people really eat it.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 font-medium">
                <span className="size-2 rounded-full bg-coral" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/features"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            See all features <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Testimonial() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <figure>
        <blockquote className="font-display text-2xl font-semibold leading-snug text-balance md:text-4xl">
          {'“Every other tracker lost me within days. NutriSnap stuck, because logging a meal is now just taking a photo.”'}
        </blockquote>
        <figcaption className="mt-8 text-muted-foreground">
          <span className="font-semibold text-foreground">Priya Raman</span> — marathon runner, lost 8 kg in 5 months
        </figcaption>
      </figure>
      <div className="mt-10">
        <TextLink href="/customer-stories">Read more customer stories</TextLink>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="px-4 pb-20 pt-16 md:px-6">
      <div className="mx-auto flex max-w-[72rem] flex-col gap-8 rounded-3xl bg-primary px-8 py-12 text-primary-foreground md:px-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Your next meal is your first scan.</h2>
          <p className="mt-3 text-lg leading-relaxed text-primary-foreground/80">
            Try NutriSnap Pro free for 14 days. No card needed to get started.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Start free trial <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center rounded-full border border-primary-foreground/30 px-6 py-3 font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  )
}
