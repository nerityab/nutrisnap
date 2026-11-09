import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { PageHero, PageShell } from '@/components/site/page-parts'

export const metadata: Metadata = {
  title: 'FAQ · NutriSnap',
  description: 'Answers about accuracy, privacy, plans, billing and supported devices.',
}

const groups = [
  {
    title: 'Using NutriSnap',
    items: [
      { q: 'How accurate is NutriSnap?', a: 'Tested against lab-weighed meals, portion estimates landed within about 6% on average and foods were identified correctly 96% of the time. You can refine any result with a tap.' },
      { q: 'Does it work with home-cooked and mixed dishes?', a: 'Yes. It recognises more than 40,000 dishes from 120 cuisines and splits mixed plates into their parts. Save recipes you make often and re-log them in one tap.' },
      { q: 'What if the AI gets something wrong?', a: 'Tap the item to swap it or change the portion. Corrections train your personal model, so later scans get better.' },
      { q: 'Can I still log food manually or scan barcodes?', a: 'Of course. Manual search and barcode scanning are included for packaged foods and drinks.' },
    ],
  },
  {
    title: 'Privacy & data',
    items: [
      { q: 'What happens to my meal photos?', a: 'Photos are encrypted in transit, used to produce your nutrition data and kept only in your account. We never sell data or use photos for ads.' },
      { q: 'Can I delete my data?', a: 'Yes — export or permanently delete everything any time from Settings → Privacy.' },
    ],
  },
  {
    title: 'Plans & billing',
    items: [
      { q: 'Is there a free version?', a: 'Yes. Free includes 3 photo scans a day and unlimited manual logging. Pro adds unlimited scans, micronutrients and the AI coach.' },
      { q: 'How does the free trial work?', a: 'Pro includes a 14-day trial with no credit card. You only pick a plan when the trial ends.' },
      { q: 'Can I cancel anytime?', a: 'Yes, in one tap from account settings. Pro stays active until your billing period ends.' },
    ],
  },
  {
    title: 'Devices',
    items: [
      { q: 'Which devices are supported?', a: 'iPhone on iOS 16+ and Android 10+, plus a web dashboard for reviewing trends on a bigger screen.' },
      { q: 'Does it sync with my fitness apps?', a: 'Yes — Apple Health, Google Fit, Fitbit and Garmin work out of the box.' },
    ],
  },
]

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero eyebrow="FAQ" title="Frequently asked questions.">
        Everything you need to know about NutriSnap. Can&apos;t find your answer? Our team is happy to help.
      </PageHero>

      <div className="mx-auto flex max-w-4xl flex-col gap-14 px-6 pb-20">
        {groups.map((group) => (
          <section key={group.title} aria-labelledby={`faq-${group.title}`}>
            <h2 id={`faq-${group.title}`} className="text-2xl font-bold">
              {group.title}
            </h2>
            <div className="mt-5 divide-y rounded-3xl border bg-card">
              {group.items.map((item) => (
                <details key={item.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <ChevronDown
                      className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-3xl bg-secondary p-8 md:p-10">
          <h2 className="text-2xl font-bold">Still have a question?</h2>
          <p className="mt-2 text-muted-foreground">Our support team usually replies within one business day.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact us
          </Link>
        </section>
      </div>
    </PageShell>
  )
}
