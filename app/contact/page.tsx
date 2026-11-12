import type { Metadata } from 'next'
import { Building2, Clock, Mail, MessageCircle } from 'lucide-react'
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
          Looking for a quick answer? <TextLink href="/faq">Browse the FAQ</TextLink>
        </p>
      </section>
    </PageShell>
  )
}
