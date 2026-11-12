import type { Metadata } from 'next'
import { SiteVideo } from '@/components/site/site-video'
import Link from 'next/link'
import { Check, GraduationCap, ShieldCheck, Stethoscope } from 'lucide-react'
import { Button, CollapsibleGroup } from '@/components/site/blocks'
import { PricingPamphlet } from '@/components/site/pamphlets'
import { PageHero, PageShell, TextLink } from '@/components/site/page-parts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing · NutriSnap',
  description: 'Start free, then upgrade to Pro or Family. Every paid plan includes a 14-day free trial.',
}

const plans = [
  {
    name: 'Free',
    tagline: 'Get started with photo logging.',
    price: '$0',
    period: 'forever',
    cta: 'Download free',
    items: ['3 AI photo scans per day', 'Unlimited manual & barcode logging', 'Calorie & macro tracking', 'Weekly summary'],
  },
  {
    name: 'Pro',
    tagline: 'For people serious about their goals.',
    price: '$79.99',
    period: '/ year',
    cta: 'Start 14-day free trial',
    popular: true,
    items: ['Unlimited AI photo scans', '30+ micronutrients', 'AI nutrition coach', 'Restaurant mode', 'Health app sync', 'Data export (CSV / PDF)'],
  },
  {
    name: 'Family',
    tagline: 'Everything in Pro for up to 5 people.',
    price: '$119.99',
    period: '/ year',
    cta: 'Start 14-day free trial',
    items: ['Everything in Pro', 'Up to 5 profiles', 'Shared family recipes', 'Kid-friendly goals', 'Priority support'],
  },
]

const comparison = [
  { feature: 'AI photo scans', free: '3 per day', pro: 'Unlimited', family: 'Unlimited' },
  { feature: 'Manual & barcode logging', free: 'Included', pro: 'Included', family: 'Included' },
  { feature: 'Calorie & macro tracking', free: 'Included', pro: 'Included', family: 'Included' },
  { feature: 'Weekly summary', free: 'Included', pro: 'Included', family: 'Included' },
  { feature: '30+ micronutrients', free: '—', pro: 'Included', family: 'Included' },
  { feature: 'AI nutrition coach', free: '—', pro: 'Included', family: 'Included' },
  { feature: 'Restaurant mode', free: '—', pro: 'Included', family: 'Included' },
  { feature: 'Health app sync', free: '—', pro: 'Included', family: 'Included' },
  { feature: 'Data export (CSV / PDF)', free: '—', pro: 'Included', family: 'Included' },
  { feature: 'Profiles', free: '—', pro: '—', family: 'Up to 5' },
  { feature: 'Shared family recipes & kid-friendly goals', free: '—', pro: '—', family: 'Included' },
  { feature: 'Priority support', free: '—', pro: '—', family: 'Included' },
]

const planFaq = [
  { q: 'Is there a free version?', a: 'Yes. Free includes 3 photo scans a day and unlimited manual logging. Pro adds unlimited scans, micronutrients and the AI coach.' },
  { q: 'How does the free trial work?', a: 'Pro includes a 14-day trial with no credit card. You only pick a plan when the trial ends.' },
  { q: 'Can I cancel anytime?', a: 'Yes, in one tap from account settings. Pro stays active until your billing period ends.' },
]

const extras = [
  { icon: GraduationCap, title: 'Student discount', body: 'Half price on Pro with a valid student email.' },
  { icon: Stethoscope, title: 'For coaches & clinics', body: 'Client dashboards and bulk licences on request.' },
  { icon: ShieldCheck, title: 'Money-back guarantee', body: 'Not happy within 30 days? Get a full refund.' },
]

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Pricing" title="Simple plans. Serious results.">
        Start free and upgrade when you&apos;re ready. Every paid plan comes with a 14-day trial — no credit card
        required.
      </PageHero>

      <section aria-label="Plans" className="mx-auto max-w-6xl px-6 pb-16">
        <ul className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-3xl border p-8',
                plan.popular ? 'border-primary bg-primary text-primary-foreground' : 'bg-card',
              )}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most popular
                </span>
              )}
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className={cn('mt-1', plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                {plan.tagline}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{plan.price}</span>
                <span className={plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}>{plan.period}</span>
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className={cn('mt-0.5 size-5 shrink-0', plan.popular ? 'text-lime' : 'text-primary')} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  'mt-8 inline-flex justify-center rounded-full px-6 py-3 font-semibold transition-opacity hover:opacity-90',
                  plan.popular ? 'bg-lime text-accent-foreground' : 'bg-primary text-primary-foreground',
                )}
              >
                {plan.cta}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Compare plans" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="overflow-x-auto rounded-3xl border bg-card">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="px-6 pt-6 text-left text-xl font-bold md:px-8">Compare plans</caption>
            <thead>
              <tr className="border-b text-sm uppercase tracking-wider text-muted-foreground">
                <th scope="col" className="px-6 py-4 font-semibold md:px-8">Feature</th>
                <th scope="col" className="px-6 py-4 font-semibold">Free</th>
                <th scope="col" className="px-6 py-4 font-semibold">Pro</th>
                <th scope="col" className="px-6 py-4 font-semibold">Family</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.feature} className={i % 2 ? 'bg-secondary/40' : ''}>
                  <th scope="row" className="px-6 py-4 font-medium md:px-8">{row.feature}</th>
                  <td className="px-6 py-4 text-muted-foreground">{row.free}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.pro}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.family}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-label="More options"
 className="mx-auto max-w-6xl px-6">
        <ul className="grid gap-5 md:grid-cols-3">
          {extras.map((e) => (
            <li key={e.title} className="flex gap-4 rounded-3xl bg-secondary p-6">
              <e.icon className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-bold">{e.title}</h2>
                <p className="mt-1 text-muted-foreground">{e.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 flex flex-wrap items-center gap-2 text-muted-foreground">
          Questions about billing? <TextLink href="/faq">Read the FAQ</TextLink>
        </p>
      </section>

      <section aria-label="Plan questions" className="mx-auto max-w-6xl px-6 pb-16">
        <CollapsibleGroup title="Plan questions" items={planFaq} />
        <div className="mt-8">
          <Button href="/faq" variant="outline">Read the full FAQ</Button>
        </div>
      </section>

      <PricingPamphlet />

      <SiteVideo />
    </PageShell>
  )
}
