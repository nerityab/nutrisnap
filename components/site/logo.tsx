import Link from 'next/link'
import { Aperture } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
      <span
        className={cn(
          'flex size-8 items-center justify-center rounded-lg',
          inverted ? 'bg-lime text-primary' : 'bg-primary text-lime',
        )}
      >
        <Aperture className="size-5" aria-hidden="true" />
      </span>
      <span className={inverted ? 'text-primary-foreground' : 'text-foreground'}>
        Nutri<span className={inverted ? 'text-lime' : 'text-coral'}>Snap</span>
      </span>
    </Link>
  )
}
