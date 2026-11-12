'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'

const navLinks: { href: string; label: string; roll?: string }[] = [
  { href: '/features', label: 'Features', roll: '25bc350' },
  { href: '/how-it-works', label: 'How it works', roll: '25bc364' },
  { href: '/how-it-works/faq', label: 'FAQ' },
  { href: '/customer-stories', label: 'Customer stories', roll: '25bc339' },
  { href: '/pricing', label: 'Pricing', roll: '25bc355' },
  { href: '/about', label: 'About us', roll: '25bc290' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo roll="25bc372" />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-[15px] text-muted-foreground xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex flex-col items-center leading-tight whitespace-nowrap transition-colors hover:text-foreground"
                >
                  {link.label}
                  {link.roll && <span className="text-xs">({link.roll})</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/contact" className="text-[15px] font-medium whitespace-nowrap hover:text-primary">
            Contact
          </Link>
          <Link
            href="/pricing"
            className="rounded-full bg-primary px-4 py-2 text-[15px] font-semibold whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get the app
          </Link>
        </div>
        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {[...navLinks, { href: '/contact', label: 'Contact' }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-1 text-muted-foreground hover:text-foreground">
                  {link.label}
                  {'roll' in link && link.roll && <span className="ml-1 text-xs">({link.roll})</span>}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/pricing"
            className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground"
          >
            Get the app
          </Link>
        </nav>
      )}
    </header>
  )
}
