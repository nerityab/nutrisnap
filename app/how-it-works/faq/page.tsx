import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { HowItWorksSubnav } from '@/components/site/blocks'
import { PageHero, PageShell, TextLink } from '@/components/site/page-parts'

export const metadata: Metadata = {
  title: 'FAQ · How it works · NutriSnap',
  description: 'Answers about accuracy, privacy, plans, billing and supported devices.',
}

const groups = [
  {
    title: 'Getting started',
    items: [
      { q: 'What should I do first?', a: 'Set up your profile with your age, height, weight, activity level and goal. NutriSnap turns that into personal calorie and macro targets in about a minute.' },
      { q: 'What is the best way to take a photo?', a: 'Shoot in natural light, fit the whole plate in the frame and try an angle of roughly 45°. Spread out stacked or hidden items, and mention extras like cooking oil or butter, since they add up.' },
    ],
  },
  {
    title: 'Using NutriSnap',
    items: [
      { q: 'How accurate is NutriSnap?', a: 'Tested against lab-weighed meals, portion estimates landed within about 6% on average and foods were identified correctly 96% of the time. You can refine any result with a tap.' },
      { q: 'Does it work with home-cooked and mixed dishes?', a: 'Yes. It recognises more than 40,000 dishes from 120 cuisines and splits mixed plates into their parts. Save recipes you make often and re-log them in one tap.' },
      { q: 'What if the AI gets something wrong?', a: 'Tap the item to swap it or change the portion. Corrections train your personal model, so later scans get better.' },
      { q: 'Can I still log food manually or scan barcodes?', a: 'Of course. Manual search and barcode scanning are included for packaged foods and drinks.' },
      { q: 'Does it recognise Indian food?', a: 'Yes. NutriSnap is built for everyday Indian meals, from dal and roti to biryani, regional thalis and home-cooked dishes. If a dish is not recognised, you can still search for it or log it manually.' },
      { q: 'How do I correct a wrong result?', a: 'Tap the item and swap it for the right food, or change the portion. Your correction is saved to your meal and helps your personal model learn.' },
      { q: 'Can I scan packaged food instead of a photo?', a: 'Yes. Scan the barcode for packaged snacks and drinks. Barcode data is usually more precise than an estimate from a photo.' },
      { q: 'Can I see what my meal is missing?', a: 'Yes. The breakdown shows your protein, carbs, fats and fibre, so you can see whether a plate is balanced before or after you eat.' },
    ],
  },
  {
    title: 'Health & safety',
    items: [
      { q: 'Can NutriSnap give medical advice?', a: 'No. NutriSnap is a food-information tool, not a medical device. It does not diagnose, treat or cure any disease. Always follow the advice of your doctor or dietician.' },
      { q: 'Can I use NutriSnap if I have a condition like diabetes or high blood pressure?', a: 'Yes, as a way to understand your food. For example, you can see the carbohydrate content of a meal or spot salty, processed dishes. Share your results with your doctor or dietician when you plan changes to your diet.' },
      { q: 'Can I connect with a dietician?', a: 'Yes. Dietician connection is available for guidance that fits your condition, your food and your life. Contact us to find out how to get started.' },
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
      { q: 'Do students get a discount?', a: 'Yes. Students get half price on Pro with a valid student email address.' },
      { q: 'Do coaches or clinics have special options?', a: 'Yes. Client dashboards and bulk licences are available on request. Contact us to discuss your needs.' },
      { q: 'Is there a money-back guarantee?', a: 'Yes. If you are not happy within 30 days, you can get a full refund.' },
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
      <HowItWorksSubnav current="faq" />

      <PageHero eyebrow="FAQ" title="Frequently asked questions.">
        Everything you need to know about NutriSnap. Can&apos;t find your answer? Our team is happy to help.
      </PageHero>

      <div className="mx-auto flex max-w-4xl flex-col gap-14 px-6 pb-20">
        <p className="-mb-6 text-muted-foreground">
          <TextLink href="/how-it-works">Back to How it works</TextLink>
        </p>

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
