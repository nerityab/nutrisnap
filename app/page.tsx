import { Hero } from '@/components/site/hero'
import { FinalCta, HowItWorks, RealLife, Stats, Testimonial } from '@/components/site/sections'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Stats />
        <HowItWorks />
        <RealLife />
        <Testimonial />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
