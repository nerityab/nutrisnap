import { BarChart, Button, Divider, ImageCarousel, Spacer } from '@/components/site/blocks'
import { Hero } from '@/components/site/hero'
import { Pamphlets } from '@/components/site/pamphlets'
import { FinalCta, HowItWorks, RealLife, Stats, Testimonial } from '@/components/site/sections'
import { SectionHeading } from '@/components/site/page-parts'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { SiteVideo } from '@/components/site/site-video'

const gallery = [
  { src: '/images/hero-scan.png', alt: 'A phone held over a salmon and quinoa bowl, showing a NutriSnap macro breakdown on screen', caption: 'Scan a plate in seconds' },
  { src: '/images/meal-breakfast.png', alt: 'Avocado toast with a poached egg, berries and coffee', caption: 'Breakfast, logged in one tap' },
  { src: '/images/pamphlet-poster.jpg', alt: 'NutriSnap poster showing AI food analysis, personalised insights and the Fitness Focus section.', caption: 'AI food analysis at a glance' },
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
        <ImageCarousel label="NutriSnap in action" slides={gallery} />
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
