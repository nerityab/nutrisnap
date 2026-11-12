import type { Metadata } from 'next'
import { SiteVideo } from '@/components/site/site-video'
import { Button, CollapsibleGroup, HowItWorksSubnav, TableOfContents, TextWithImage } from '@/components/site/blocks'
import { HowItWorksPamphlet } from '@/components/site/pamphlets'
import { PageHero, PageShell, SectionHeading, TextLink } from '@/components/site/page-parts'

export const metadata: Metadata = {
  title: 'How it works · NutriSnap',
  description: 'Follow a meal from photo to full nutrition breakdown in five simple steps.',
}

const steps = [
  { title: 'Set up your profile', body: 'Share your age, height, weight, activity level and goal. NutriSnap turns that into personal calorie and macro targets in about a minute.' },
  { title: 'Snap your meal', body: 'Take a photo before your first bite. An angle of roughly 45° with the whole plate visible gives the best read.' },
  { title: 'AI identifies & measures', body: 'The vision model separates each food, estimates its volume from depth cues and matches it to verified nutrition data.' },
  { title: 'Review & adjust', body: 'Your breakdown appears instantly. Swap an item or nudge a portion — every fix teaches your personal model.' },
  { title: 'Track your progress', body: 'Rings, weekly trends and coach insights show how your meals add up against your goals.' },
]

const conditions = [
  { q: 'Type 2 Diabetes', a: 'The challenge: large portions and refined carbs push blood sugar up and down. How NutriSnap helps: shows the carbohydrate content of a meal so you can compare plates before you eat.' },
  { q: 'High Blood Pressure', a: 'The challenge: too much sodium, mostly from packaged and restaurant food. How NutriSnap helps: spot salty, processed meals so you can swap them for fresher options.' },
  { q: 'Heart Disease & Cholesterol', a: 'The challenge: hidden oil, ghee and saturated fat in everyday gravies and fried food. How NutriSnap helps: estimates fat content, including cooking oil, so heavy dishes stop hiding in plain sight.' },
  { q: 'Obesity & Weight Gain', a: 'The challenge: eating more than you burn, without noticing it. How NutriSnap helps: instant calorie estimates keep your daily intake visible, with no manual logging.' },
  { q: 'Anaemia', a: 'The challenge: low iron intake, especially common among young women. How NutriSnap helps: tracks key nutrients over time so gaps in your diet show up early.' },
  { q: 'PCOS', a: 'The challenge: diet quality can affect symptoms linked to insulin resistance. How NutriSnap helps: makes it easier to choose balanced, lower-sugar meals again and again.' },
]

const tips = [
  'Shoot in natural light when you can',
  'Fit the entire plate in the frame',
  'Spread out stacked or hidden items',
  'Add extras like cooking oil or butter',
]

export default function HowItWorksPage() {
  return (
    <PageShell>
      <HowItWorksSubnav current="how-it-works" />

      <PageHero eyebrow="How it works" title="From photo to full nutrition in seconds.">
        One tap kicks off a pipeline of computer vision and nutrition science. Here&apos;s what happens each time you
        photograph your plate.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <TableOfContents
          items={[
            { href: '#steps', label: 'The five steps' },
            { href: '#tips', label: 'Pro tips' },
            { href: '#why', label: 'Why NutriSnap' },
            { href: '#who', label: 'Who it is for' },
            { href: '#conditions', label: 'Conditions' },
            { href: '/how-it-works/faq', label: 'FAQ' },
          ]}
        />
      </section>

      <section id="steps" aria-label="Steps" className="mx-auto max-w-6xl px-6 pb-20">
        <ol className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4 rounded-3xl border bg-card p-6 sm:flex-row sm:items-start sm:gap-8 md:p-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h2 className="text-xl font-bold md:text-2xl">{step.title}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <TextWithImage
        eyebrow="Before your first bite"
        title="Frame the whole plate."
        body="An angle of roughly 45° with the whole plate visible gives the best read."
        photo={{ src: '/images/hero-scan.png', alt: 'A phone held over a salmon and quinoa bowl, showing a NutriSnap macro breakdown on screen' }}
      />

      <HowItWorksPamphlet />

      <SiteVideo />

      <section id="tips" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="Pro tips" title="Get the most accurate scan.">
            NutriSnap handles everyday photos well, and a few simple habits make it even sharper.
          </SectionHeading>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip, i) => (
              <li key={tip} className="rounded-3xl bg-card p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-coral">
                  Tip {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Why NutriSnap" title="Because you deserve more than numbers.">
          Calorie counts alone do not tell the whole story. NutriSnap is designed to help you make better choices with
          food you actually eat.
        </SectionHeading>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['Accurate & reliable', 'Advanced AI models for better food recognition and estimation.'],
            ['Indian & regional food focus', 'Built for the foods people actually eat at home and out.'],
            ['Easy & convenient', 'Snap, analyse and track in seconds, with no barcodes to find.'],
            ['Personalised insights', 'See your calories, macros and micronutrients against your goals.'],
            ['Expert support', 'Connect with a dietician for guidance that fits your condition and your life.'],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="scenarios" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Real situations" title="How to log the meals you actually have.">
          Not every meal comes on a clean white plate. Here is how to get a good read in common situations.
        </SectionHeading>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            ['Home-cooked dal and roti', 'Fit the whole thali in the frame. Mention ghee or oil if you added it while cooking, since it changes the fat total.'],
            ['Mixed plates and bowls', 'Take the photo from above with the bowl in full view. Use the review step to swap any item the scan missed.'],
            ['Packaged snacks', 'Scan the barcode instead of the photo. The label data is more precise than an estimate from a picture.'],
            ['Eating out', 'Photograph the dish before you start. Restaurant mode on Pro helps with the menu-style meals you order most.'],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="who" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="Who it is for" title="Designed for every food lover.">
            Whether you are studying, training, managing your diet or just curious about what is on your plate,
            NutriSnap is built for you.
          </SectionHeading>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Students', 'Eat well between classes, on a student budget.'],
              ['Fitness enthusiasts', 'Track protein and fuel your training with confidence.'],
              ['Health-conscious consumers', 'Understand the nutrition in everyday meals.'],
              ['People managing their diet', 'See carbs, sodium and fats at a glance.'],
              ['Working professionals', 'Log lunch in seconds, even on a busy day.'],
              ['Anyone curious about food', 'Learn what you eat, one photo at a time.'],
            ].map(([title, body]) => (
              <li key={title} className="rounded-3xl bg-card p-6">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="conditions" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <CollapsibleGroup title="Conditions NutriSnap can help you track" items={conditions} />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          NutriSnap is a food-information tool, not a medical device. It does not diagnose, treat or cure any disease.
          Always follow the advice of your doctor or dietician.
        </p>
        <div className="mt-8">
          <Button href="/pricing">Start free trial</Button>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pt-20">
        <SectionHeading title="Still have questions?">We&apos;ve covered the most common ones.</SectionHeading>
        <div className="mt-6">
          <TextLink href="/how-it-works/faq">Read the FAQ</TextLink>
        </div>
      </section>
    </PageShell>
  )
}
