import { BarChart, Button, Divider, PhotoRow, Spacer } from '@/components/site/blocks'
import { Hero } from '@/components/site/hero'
import { Pamphlets } from '@/components/site/pamphlets'
import { FinalCta, HowItWorks, RealLife, Stats, Testimonial } from '@/components/site/sections'
import { SectionHeading } from '@/components/site/page-parts'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { SiteVideo } from '@/components/site/site-video'

const gallery = [
  { photo: {'src': '/images/hero-scan.png', 'alt': 'A phone held over a salmon and quinoa bowl, showing a NutriSnap macro breakdown on screen'}, caption: 'Scan a plate in seconds' },
  { photo: {'src': '/images/meal-breakfast.png', 'alt': 'Avocado toast with a poached egg, berries and coffee'}, caption: 'Log breakfast in one tap' },
  { photo: {'src': '/images/pamphlet-poster.jpg', 'alt': 'NutriSnap poster showing AI food analysis, personalised insights and the Fitness Focus section.'}, caption: 'Understand what you eat' },
  { photo: {'src': '/images/pamphlet-trifold.jpg', 'alt': 'NutriSnap tri-fold pamphlet covering what NutriSnap is, how it works, why NutriSnap, and a 14-day free trial.'}, caption: 'See the full picture' },
]

const research = [
  { label: "Don't use a nutrition-tracking app today", value: 54 },
  { label: 'Have already tried some form of AI food tracking', value: 56 },
  { label: 'Consider an AI food analyser very or extremely useful', value: 40 },
  { label: 'Are open to adopting the concept', value: 44 },
  { label: 'Are university students or young adults aged 18–30', value: 80 },
]

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Stats />
        <HowItWorks />
        <PhotoRow items={gallery} />
        <Divider />
        <RealLife />
        <Testimonial />
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading eyebrow="Our research" title="Young India is ready for AI food tracking.">
            A consumer survey shows how people already think about tracking what they eat.
          </SectionHeading>
          <div className="mt-10">
            <BarChart title="What our respondents told us" source="NutriSnap consumer research" bars={research} />
          </div>
          <div className="mt-10">
            <Button href="/customer-stories" variant="outline">Read customer stories</Button>
          </div>
        </section>
        <Spacer size="sm" />
        <FinalCta />
        <Pamphlets />
        <SiteVideo />
      </main>
      <SiteFooter />
    </>
  )
}
