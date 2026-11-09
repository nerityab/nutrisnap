import type { Metadata } from 'next'
import { HeartHandshake, FlaskConical, Lock, Globe } from 'lucide-react'
import { Initials, PageHero, PageShell, SectionHeading } from '@/components/site/page-parts'

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

const timeline = [
  { year: '2023', body: 'The idea arrives after a founder abandons calorie counting for the fifth time.' },
  { year: '2024', body: 'Our first vision model is trained on 2 million labelled food images.' },
  { year: '2025', body: 'Public launch on iOS and Android, reaching 100,000 users in six months.' },
  { year: '2026', body: 'The AI coach, restaurant mode and family plans arrive.' },
]

const team = [
  { name: 'Ananya Iyer', role: 'Co-founder & CEO' },
  { name: 'Marcus Chen', role: 'Co-founder & Head of AI' },
  { name: 'Dr. Leila Haddad', role: 'Lead Dietitian' },
  { name: 'Jonas Weber', role: 'Head of Design' },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About us" title="We believe knowing your food should be effortless.">
        NutriSnap began with one frustration: logging what you eat takes far too long. So we built an app where a
        photo is enough.
      </PageHero>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="Our mission" title="Make nutrition understandable for everyone.">
            Most people who start tracking give up within two weeks — not for lack of caring, but because logging is a
            chore. Combining computer vision with nutrition science removes that friction, so anyone can make informed
            choices about food.
          </SectionHeading>
        </div>
      </section>

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

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <SectionHeading eyebrow="Our story" title="From frustration to 1.2 million meals." />
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {timeline.map((t) => (
            <li key={t.year} className="border-t-2 border-primary pt-5">
              <p className="font-display text-3xl font-bold text-coral">{t.year}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Our team" title="The people behind the plate." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
    </PageShell>
  )
}
