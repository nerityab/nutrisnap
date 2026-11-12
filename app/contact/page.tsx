import type { Metadata } from 'next'
import { Building2, Clock, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from '@/components/site/blocks'
import { PageHero, PageShell, TextLink } from '@/components/site/page-parts'

export const metadata: Metadata = {
  title: 'Contact us · NutriSnap',
  description: 'Questions, feedback, partnerships or press — get in touch with the NutriSnap team.',
}

const channels = [
  { icon: Mail, title: 'Email', body: <a href="mailto:hello@nutrisnap.app" className="font-medium text-primary hover:underline">hello@nutrisnap.app</a> },
  { icon: MessageCircle, title: 'In-app chat', body: 'Settings → Help → Chat with us' },
  { icon: Clock, title: 'Support hours', body: 'Mon–Fri, 9am–6pm' },
  { icon: Building2, title: 'Office', body: 'NutriSnap Technologies Inc.' },
]

export default function ContactPage() {
  return (
    <PageShell cta={false}>
      <PageHero eyebrow="Contact" title="We'd love to hear from you.">
        Questions, feedback, partnership ideas or press enquiries — drop us a line and a real person will reply.
      </PageHero>

      <section aria-label="Ways to reach us" className="mx-auto max-w-6xl px-6 pb-12">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <li key={c.title} className="rounded-3xl border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <c.icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-lg font-bold">{c.title}</h2>
              <p className="mt-1 text-muted-foreground">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="quick-help" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 id="quick-help" className="text-3xl font-bold tracking-tight md:text-4xl">Quick help first</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Many questions are answered in the FAQ or in our how-it-works guide. Check there first and you may get your answer
          in a minute.
        </p>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ['Scan not recognised', '/how-it-works', 'Read the tips on lighting, framing and real-life situations.'],
            ['Account, plans & billing', '/how-it-works/faq', 'Trials, cancellations, discounts and refunds are covered in the FAQ.'],
            ['Data & privacy', '/how-it-works/faq', 'See how your photos are handled and how to export or delete your data.'],
          ].map(([title, href, body]) => (
            <li key={title}>
              <Link href={href} className="block h-full rounded-3xl border bg-card p-6 transition-colors hover:bg-secondary">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="who-to-contact" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 id="who-to-contact" className="text-3xl font-bold tracking-tight md:text-4xl">Who should you contact?</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            ['Support', 'Trouble with your account, a scan or billing? Start with in-app chat, or email us and we will help.'],
            ['Partnerships', 'Coaches, clinics and wellness teams can ask about client dashboards and bulk licences.'],
            ['Press & media', 'Writing about NutriSnap? Send us your deadline and questions and we will get back to you.'],
            ['Feedback & ideas', 'Tell us what would make NutriSnap more useful for the food you eat every day.'],
          ].map(([title, body]) => (
            <li key={title} className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-3xl bg-secondary p-8">
          <h3 className="text-xl font-bold">What to include in your message</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Your phone model and operating system, for technical questions</li>
            <li>The meal or screen you are asking about, described in a sentence or two</li>
            <li>The email address linked to your account, if you have one</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="contact-form-heading" className="mx-auto max-w-3xl px-6 pb-16">
        <h2 id="contact-form-heading" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Write to us</h2>
        <ContactForm />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col gap-6 rounded-3xl bg-primary px-8 py-12 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-14">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Send us a message.</h2>
            <p className="mt-2 text-primary-foreground/80">We usually reply within one business day.</p>
          </div>
          <a
            href="mailto:hello@nutrisnap.app"
            className="inline-flex justify-center rounded-full bg-lime px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Email hello@nutrisnap.app
          </a>
        </div>
        <p className="mt-8 flex flex-wrap items-center gap-2 text-muted-foreground">
          Looking for a quick answer? <TextLink href="/how-it-works/faq">Browse the FAQ</TextLink>
        </p>
      </section>
    </PageShell>
  )
}
