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

      <Divider />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Our values" title="What guides every decision we make." />
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
