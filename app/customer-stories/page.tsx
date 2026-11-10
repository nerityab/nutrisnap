import type { Metadata } from 'next'
import Image from 'next/image'
import { Initials, PageHero, PageShell } from '@/components/site/page-parts'
import { AppDemo } from '@/components/site/app-demo'
import { StoriesPamphlets } from '@/components/site/pamphlets'

export const metadata: Metadata = {
  title: 'Customer stories · NutriSnap',
  description: 'How runners, parents, students and coaches use NutriSnap to understand what they eat.',
}

const featuredStats = [
  { label: 'Weight lost', value: '8 kg' },
  { label: 'Meals logged', value: '612' },
  { label: 'New PB', value: '3:18' },
]

const stories = [
  { name: 'Daniel Okafor', role: 'Software engineer', result: '+6 kg lean mass', quote: 'Hitting my protein target used to need a spreadsheet. Now I photograph lunch and the coach tells me what to add at dinner.' },
  { name: 'Mei Lin', role: 'Mum of two', result: 'Back to pre-pregnancy weight', quote: 'There’s no time to weigh anything in my house. One photo and I’m done — and I can log the kids’ meals too.' },
  { name: 'Carlos Mendes', role: 'Living with type 2 diabetes', result: 'HbA1c down 1.4 points', quote: 'Seeing carbs at a glance changed how I build a plate. I bring my export to every doctor’s visit.' },
  { name: 'Aisha Bello', role: 'University student', result: '300+ days logged', quote: 'Other apps had no idea what campus food was. NutriSnap even recognises the jollof from the food truck.' },
  { name: 'Tom Hughes', role: 'Personal trainer', result: '40 clients onboarded', quote: 'My clients finally send me their logs. Compliance jumped from about a third to well over three quarters.' },
  { name: 'Sofia Rossi', role: 'Vegetarian foodie', result: 'Iron levels normalised', quote: 'The micronutrient view flagged that my iron was always low. A few swaps later my bloodwork is back in range.' },
]

export default function CustomerStoriesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Customer stories" title="Real people. Real plates. Real results.">
        More than 250,000 people use NutriSnap to understand what they eat. Here are a few of them.
      </PageHero>

      <section aria-label="Featured story" className="mx-auto max-w-6xl px-6 pb-20">
        <article className="grid overflow-hidden rounded-3xl bg-primary text-primary-foreground lg:grid-cols-2">
          <div className="relative min-h-72">
            <Image
              src="/images/hero-scan.png"
              alt="A phone scanning a meal with the NutriSnap app"
              fill
              sizes="(min-width: 1024px) 576px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
            <h2 className="text-2xl font-bold leading-snug text-balance md:text-3xl">
              {'“Fuelling properly took 12 minutes off my marathon.”'}
            </h2>
            <p className="leading-relaxed text-primary-foreground/80">
              Priya Raman had abandoned four trackers before NutriSnap. Training for marathons, she needed to eat
              enough without weighing rice every evening. Five months of snapping meals later she was 8 kg lighter,
              recovering faster and setting a personal best in Berlin.
            </p>
            <dl className="grid grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-6">
              {featuredStats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-sm text-primary-foreground/70">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold text-lime md:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </section>

      <section aria-label="More stories" className="mx-auto max-w-6xl px-6 pb-8">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <li key={s.name}>
              <figure className="flex h-full flex-col justify-between gap-8 rounded-3xl border bg-card p-7">
                <blockquote className="text-lg leading-relaxed">{`“${s.quote}”`}</blockquote>
                <figcaption className="flex items-center gap-3">
                  <Initials name={s.name} />
                  <div className="text-sm">
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-muted-foreground">{s.role}</p>
                    <p className="mt-1 font-semibold text-coral">{s.result}</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <AppDemo />

      <StoriesPamphlets />
    </PageShell>
  )
}
