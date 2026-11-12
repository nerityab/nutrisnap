import type { Metadata } from 'next'
import { SiteVideo } from '@/components/site/site-video'
import Image from 'next/image'
import { Initials, PageHero, PageShell } from '@/components/site/page-parts'
import { AppDemo } from '@/components/site/app-demo'
import { Button, ThreeColumnBlocks, TwoColumnBlocks } from '@/components/site/blocks'
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

      <TwoColumnBlocks
        items={[
          { photo: {'src': '/images/meal-breakfast.png', 'alt': 'Avocado toast with a poached egg, berries and coffee'}, title: 'Fuelling a marathon', body: 'Five months of snapping meals helped one runner eat enough, recover faster and set a personal best.' },
          { photo: {'src': '/images/hero-scan.png', 'alt': 'A phone held over a salmon and quinoa bowl, showing a NutriSnap macro breakdown on screen'}, title: 'Logging a busy day', body: 'One photo and the meal is logged, with no weighing, no searching and no estimating.' },
        ]}
      />

      <ThreeColumnBlocks
        items={[
          { photo: { src: '/images/features-pamphlet-1.jpg', alt: 'NutriSnap bottle-shaped pamphlet on the smart plate revolution and three steps to mindful eating.' }, title: 'Smart plate', body: 'Point, shoot, nourish: every photo becomes health data.' },
          { photo: { src: '/images/features-pamphlet-2.jpg', alt: 'NutriSnap red pamphlet with the AI food tracker and our AI story.' }, title: 'Our AI story', body: 'Smart AI scans built on advanced nutrition algorithms.' },
          { photo: { src: '/images/features-pamphlet-3.jpg', alt: 'NutriSnap green tri-fold pamphlet covering smart dining and intelligent insights.' }, title: 'Smart features', body: 'Multi-food capture, macro estimation and micronutrient tracking.' },
        ]}
      />

      <section aria-labelledby="example-days" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">Example days</p>
        <h2 id="example-days" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">What a day of logging can look like.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          These are illustrative examples, not real customer records. They show how a day might look when you use NutriSnap.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: 'A busy weekday',
              meals: ['Breakfast: poha with peanuts, snapped before leaving home', 'Lunch: packed dal, roti and salad, scanned at the desk', 'Dinner: paneer curry with rice, reviewed and adjusted'],
              note: 'Reviewing the day showed the protein target was close, with a fibre gap to close at breakfast the next day.',
            },
            {
              title: 'A weekend out',
              meals: ['Brunch: dosa with sambar, one photo from the table', 'Snack: barcode scan of a packaged drink', 'Dinner: a shared thali, logged item by item'],
              note: 'Splitting a shared plate is easy: correct the portion for each person and the totals stay accurate.',
            },
            {
              title: 'A training day',
              meals: ['Pre-workout: banana and toast, logged in seconds', 'Post-workout: eggs, curd and rice', 'Evening: a light meal, checked against the protein goal'],
              note: 'Seeing protein timing across the day made it easier to plan the next session’s fuel.',
            },
          ].map((day) => (
            <article key={day.title} className="flex flex-col gap-5 rounded-3xl border bg-card p-7">
              <h3 className="text-xl font-bold">{day.title}</h3>
              <ul className="flex flex-col gap-3 text-muted-foreground">
                {day.meals.map((m) => (
                  <li key={m} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-auto rounded-2xl bg-secondary p-4 text-sm leading-relaxed">{day.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="what-you-track" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">What you can track</p>
        <h2 id="what-you-track" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Everything on your plate, in one view.</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Calories', 'See the energy in each meal and how your day adds up against your target.'],
            ['Macros', 'Protein, carbs, fats and fibre, shown as a breakdown you can read at a glance.'],
            ['Micronutrients', 'Vitamins and minerals such as iron, so gaps show up early.'],
            ['Trends', 'Weekly views that show your habits, not just your best or worst meal.'],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="community-tips" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">Community tips</p>
        <h2 id="community-tips" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Habits that make the difference.</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['Log the first bite', 'A photo before you eat gives the most accurate read.'],
            ['Correct once, and it learns', 'Swap an item or nudge a portion. Each fix teaches your personal model.'],
            ['Look at the week, not the meal', 'Trends across your week show more than any single plate.'],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col gap-6 rounded-3xl bg-primary px-8 py-12 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-14">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Have a story to share?</h2>
            <p className="mt-2 max-w-xl text-primary-foreground/80">
              Tell us how NutriSnap has helped you eat with more confidence. We would love to hear from you.
            </p>
          </div>
          <Button href="/contact">Get in touch</Button>
        </div>
      </section>

      <AppDemo />

      <StoriesPamphlets />

      <SiteVideo />
    </PageShell>
  )
}
