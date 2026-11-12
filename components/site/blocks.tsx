import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6" aria-hidden="true">
      <hr className="border-t" />
    </div>
  )
}

export function Spacer({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const heights = { sm: 'h-8', md: 'h-16', lg: 'h-24' } as const
  return <div aria-hidden="true" className={heights[size]} />
}

export function Button({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
}) {
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground hover:opacity-90'
      : 'border bg-card hover:bg-muted'
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-opacity ${styles}`}
    >
      {children}
    </Link>
  )
}

export function ImageCarousel({
  label,
  slides,
}: {
  label: string
  slides: { src: string; alt: string; caption: string }[]
}) {
  return (
    <section aria-label={label} className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {slides.map((s) => (
          <li key={s.src} className="w-[85%] shrink-0 snap-center md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]">
            <figure className="flex h-full flex-col gap-3 rounded-3xl border bg-card p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image src={s.src} alt={s.alt} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 85vw" className="object-cover" />
              </div>
              <figcaption className="px-2 pb-2 font-medium">{s.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function CollapsibleGroup({
  title,
  items,
}: {
  title: string
  items: { q: string; a: string }[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {items.map((item) => (
        <details key={item.q} className="group rounded-2xl border bg-card p-5 open:shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {item.q}
            <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  )
}

export function TableOfContents({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="rounded-3xl border bg-card p-6 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-coral">On this page</p>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <li key={item.href}>
            <a href={item.href} className="flex items-center gap-3 rounded-xl px-3 py-2 font-medium hover:bg-secondary">
              <span className="text-sm text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function BarChart({
  title,
  source,
  bars,
}: {
  title: string
  source: string
  bars: { label: string; value: number }[]
}) {
  return (
    <figure className="rounded-3xl border bg-card p-6 md:p-10">
      <figcaption>
        <p className="text-xl font-bold md:text-2xl">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{source}</p>
      </figcaption>
      <ul className="mt-8 flex flex-col gap-6">
        {bars.map((b) => (
          <li key={b.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm font-medium">
              <span>{b.label}</span>
              <span className="font-display text-lg font-bold">{b.value}%</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${b.value}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  )
}

export function ContactForm() {
  const field = 'mt-2 w-full rounded-xl border bg-background px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-primary/30'
  return (
    <form
      action="mailto:hello@nutrisnap.app"
      method="post"
      encType="text/plain"
      className="grid gap-5 rounded-3xl border bg-card p-6 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label htmlFor="contact-name" className="block font-semibold">
          Name
          <input id="contact-name" name="Name" required autoComplete="name" className={field} />
        </label>
        <label htmlFor="contact-email" className="block font-semibold">
          Email
          <input id="contact-email" name="Email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label htmlFor="contact-topic" className="block font-semibold">
        Topic
        <select id="contact-topic" name="Topic" defaultValue="General question" className={field}>
          <option>General question</option>
          <option>Feedback</option>
          <option>Partnership</option>
          <option>Press</option>
        </select>
      </label>
      <label htmlFor="contact-message" className="block font-semibold">
        Message
        <textarea id="contact-message" name="Message" required rows={5} className={field} />
      </label>
      <div>
        <button type="submit" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Send message
        </button>
        <p className="mt-3 text-sm text-muted-foreground">This opens your email app with your message addressed to our team.</p>
      </div>
    </form>
  )
}

type Photo = { src: string; alt: string }

function Photograph({ photo, ratio, sizes }: { photo: Photo; ratio: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-muted ${ratio}`}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
    </div>
  )
}

/* Layout 1: one image beside a text block */
export function TextWithImage({
  eyebrow,
  title,
  body,
  photo,
  reverse = false,
}: {
  eyebrow: string
  title: string
  body: string
  photo: Photo
  reverse?: boolean
}) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-20 lg:grid-cols-2">
      <div className={reverse ? 'lg:order-2' : ''}>
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{body}</p>
      </div>
      <Photograph photo={photo} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 528px, 100vw" />
    </section>
  )
}

/* Layout 2: two columns, each an image above text */
export function TwoColumnBlocks({ items }: { items: { photo: Photo; title: string; body: string }[] }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 md:py-20">
      {items.map((item) => (
        <article key={item.title} className="overflow-hidden rounded-3xl border bg-card">
          <Photograph photo={item.photo} ratio="aspect-[16/10] rounded-none" sizes="(min-width: 768px) 560px, 100vw" />
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

/* Layout 3: two small images stacked beside one large image */
export function MosaicBlock({
  eyebrow,
  title,
  body,
  large,
  small,
}: {
  eyebrow: string
  title: string
  body: string
  large: Photo
  small: [Photo, Photo]
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-5 md:grid-cols-[1fr_1.4fr]">
        <div className="grid gap-5">
          {small.map((p) => (
            <Photograph key={p.src} photo={p} ratio="aspect-[4/3]" sizes="(min-width: 768px) 420px, 100vw" />
          ))}
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-3xl bg-muted">
          <Image src={large.src} alt={large.alt} fill sizes="(min-width: 768px) 640px, 100vw" className="object-cover" />
        </div>
      </div>
      <div className="mt-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </section>
  )
}

/* Layout 4: three columns, each an image above text */
export function ThreeColumnBlocks({ items }: { items: { photo: Photo; title: string; body: string }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <ul className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className="flex flex-col gap-4 rounded-3xl border bg-card p-4">
            <Photograph photo={item.photo} ratio="aspect-[4/3]" sizes="(min-width: 768px) 360px, 100vw" />
            <div className="p-2">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* Layout 5: two thumbnail-and-text rows side by side */
export function ThumbnailRows({ items }: { items: { photo: Photo; title: string; body: string }[] }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-5 px-6 py-12 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="flex items-center gap-5 rounded-3xl border bg-card p-5">
          <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-muted md:size-28">
            <Image src={item.photo.src} alt={item.photo.alt} fill sizes="112px" className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="mt-1 leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

/* Layout 6: a row of four captioned photo tiles */
export function PhotoRow({ items }: { items: { photo: Photo; caption: string }[] }) {
  return (
    <section aria-label="Gallery" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <li key={item.photo.src}>
            <figure>
              <Photograph photo={item.photo} ratio="aspect-[3/4]" sizes="(min-width: 768px) 280px, 50vw" />
              <figcaption className="mt-3 font-medium">{item.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function HowItWorksSubnav({ current }: { current: 'how-it-works' | 'faq' }) {
  const items = [
    { href: '/how-it-works', label: 'How it works', key: 'how-it-works' },
    { href: '/how-it-works/faq', label: 'FAQ', key: 'faq' },
  ] as const
  return (
    <nav aria-label="How it works section" className="mx-auto max-w-6xl px-6 pt-8">
      <ul className="inline-flex gap-1 rounded-full border bg-card p-1">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              aria-current={current === item.key ? 'page' : undefined}
              className={`inline-flex rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                current === item.key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
