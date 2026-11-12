import type { Metadata } from 'next'
import { SiteVideo } from '@/components/site/site-video'
import { HeartHandshake, FlaskConical, Lock, Globe } from 'lucide-react'
import { Divider, MosaicBlock } from '@/components/site/blocks'
import { Initials, PageHero, PageShell, SectionHeading } from '@/components/site/page-parts'
import { AboutPamphlets } from '@/components/site/pamphlets'

export const metadata: Metadata = {
  title: 'About us · NutriSnap',
  description: 'Meet the team behind NutriSnap and learn why we are making nutrition tracking effortless.',
}

const values = [
  { icon: HeartHandshake, title: 'Health without obsession', body: 'Tracking should inform rather than stress. We design for a healthy relationship with food.' },
  { icon: FlaskConical, title: 'Science first', body: 'Numbers come from verified nutrition databases and are reviewed by registered dietitians.' },
  { icon: Lock, title: 'Privacy by default', body: 'Your meals are personal. We never sell data and you stay in control of it.' },
  { icon: Globe, title: 'Every cuisine counts', body: 'We train on food from all over the world so the app works for every plate.' },
]

const team = [
  { name: 'Manas Arora', role: '25BC339' },
  { name: 'Khushboo Yadav', role: '25BC290' },
  { name: 'Megha', role: '25BC350' },
  { name: 'Namandeep Singh', role: '25BC372' },
  { name: 'Messiah', role: '25BC355' },
  { name: 'Monika Jain', role: '25BC364' },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About us" title="We believe knowing your food should be effortless.">
        NutriSnap began with one frustration: logging what you eat takes far too long. So we built an app where a
        photo is enough.
      </PageHero>

      <section className="mx-auto max-w-3xl px-6 pb-16 md:pb-20">
        <SectionHeading eyebrow="Our story" title="A simple idea, built with care.">
          NutriSnap started from a question many of us ask every day: what is actually on my plate? Logging meals by
          hand felt like a chore, so we set out to make understanding food as easy as taking a photo. Every feature
          starts from that goal.
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <SectionHeading eyebrow="Our team" title="The people behind the plate." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <li key={m.name} className="flex items-center gap-4 rounded-3xl border bg-card p-6">
              <Initials name={m.name} />
              <div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="Our mission" title="Make nutrition understandable for everyone.">
            Most people who start tracking give up within two weeks — not for lack of caring, but because logging is a
            chore. Combining computer vision with nutrition science removes that friction, so anyone can make informed
            choices about food.
          </SectionHeading>
        </div>
      </section>

      <MosaicBlock
        eyebrow="Our approach"
        title="Real food, real plates."
        body="Our model has learned from over 40,000 dishes across 120 cuisines, so it recognises food the way people really eat it."
        large={{ src: '/images/meal-breakfast.png', alt: 'Avocado toast with a poached egg, berries and coffee' }}
        small={[{ src: '/images/hero-scan.png', alt: 'A phone held over a salmon and quinoa bowl, showing a NutriSnap macro breakdown on screen' }, { src: '/images/pamphlet-poster.jpg', alt: 'NutriSnap poster showing AI food analysis, personalised insights and the Fitness Focus section.' }]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Working with experts" title="AI gives you the numbers. A dietician helps with the plan.">
              NutriSnap shows you what is in your food. For guidance that fits your condition, your food and your life, you
              can connect with a qualified dietician.
            </SectionHeading>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              NutriSnap is a food-information tool, not a medical device. It does not diagnose, treat or cure any disease.
              Always follow the advice of your doctor or dietician.
            </p>
          </div>
          <div className="rounded-3xl border bg-card p-8">
            <h3 className="text-xl font-bold">Our commitments</h3>
            <ul className="mt-5 space-y-4 text-muted-foreground">
              <li><strong className="text-foreground">Honest estimates.</strong> We tell you when a result is an estimate, and you can correct any item with a tap.</li>
              <li><strong className="text-foreground">Your data, your choice.</strong> You can export or delete your data at any time.</li>
              <li><strong className="text-foreground">Food as people eat it.</strong> We design for home cooking, street food and everything in between.</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Privacy" title="Your meals are personal. We treat them that way.">
          Photos of your food say a lot about you. We keep that data in your account, and we are clear about what we do and
          do not do with it.
        </SectionHeading>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Encrypted in transit', 'Your photos are protected while they travel to our servers.'],
            ['Kept in your account', 'Meal photos are used to produce your nutrition data and stay in your account.'],
            ['No ads from your photos', 'We never use your meal photos to sell advertising.'],
            ['We never sell your data', 'Your information is not sold to third parties.'],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading eyebrow="About us" title="Questions people ask about us." />
          <dl className="divide-y rounded-3xl border bg-card">
            {[
              ['Who builds NutriSnap?', 'A team of students who wanted an easier way to understand everyday food, including Indian meals.'],
              ['Is NutriSnap a medical device?', 'No. It is a food-information tool. It does not diagnose, treat or cure any disease, so follow your doctor or dietician.'],
              ['How do I reach the team?', 'Email hello@nutrisnap.app or use the contact page. Our support team usually replies within one business day.'],
              ['Can I delete my data?', 'Yes. You can export or permanently delete everything any time from Settings → Privacy.'],
            ].map(([q, a]) => (
              <div key={q} className="p-6">
                <dt className="font-semibold">{q}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="How we think"  title="Nutrition is about patterns, not perfect plates.">
          One meal rarely decides how you feel or how your body responds. Over days and weeks, patterns matter more. That
          is why NutriSnap focuses on trends, balance and everyday choices rather than judging each plate.
        </SectionHeading>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['Trends over moments', 'Weekly views show where your intake is steady and where it drifts.'],
            ['Balance, not bans', 'No food is off limits. We help you see how a plate fits your goals.'],
            ['Your food, your culture', 'Dal, rice, street food and family recipes count as much as any other meal.'],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Our values"  title="What guides every decision we make." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-3xl border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <v.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <AboutPamphlets />

      <SiteVideo />
    </PageShell>
  )
}
