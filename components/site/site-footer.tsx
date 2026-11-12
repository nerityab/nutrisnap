import Link from 'next/link'
import { Logo } from './logo'

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/how-it-works/faq', label: 'FAQ' },
      { href: '/customer-stories', label: 'Customer stories' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/contact', label: 'Contact us' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            AI food intelligence and visual macro tracking. Snap your plate, know your fuel.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-sm text-primary-foreground/80">
            <li>
              <a href="https://www.instagram.com/nutrisnap" className="hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">
                Instagram: @nutrisnap
              </a>
            </li>
            <li>
              <a href="https://www.nutrisnap.ai" className="hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">
                Website: nutrisnap.ai
              </a>
            </li>
            <li>
              <a href="mailto:hello@nutrisnap.app" className="hover:text-primary-foreground">
                Email: hello@nutrisnap.app
              </a>
            </li>
          </ul>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-lime">{col.title}</h2>
            <ul className="mt-4 space-y-3 text-[15px] text-primary-foreground/80">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/70 md:flex-row md:justify-between">
          <p>© 2026 NutriSnap Technologies Inc. All rights reserved.</p>
          <p>
            <span className="font-semibold text-primary-foreground">Academic notice:</span> Developed collaboratively
            as a Digital Marketing coursework project.
          </p>
        </div>
      </div>
    </footer>
  )
}
