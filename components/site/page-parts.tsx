import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FinalCta } from './sections'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function PageShell({ children, cta = true }: { children: React.ReactNode; cta?: boolean }) {
  return (
    <>
      <SiteHeader />
      <main id="main">
        {children}
        {cta && <FinalCta />}
      </main>
      <SiteFooter />
    </>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-wider text-coral">{children}</p>
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pb-16 md:pt-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{children}</p>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  )
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
      {children} <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  )
}

export function Initials({ name }: { name: string }) {
  const initials = name
    .replace(/^Dr\.\s*/, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
  return (
    <span
      aria-hidden="true"
      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary font-display font-bold text-primary"
    >
      {initials}
    </span>
  )
}
