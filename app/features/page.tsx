import type { Metadata } from 'next'
import Link from 'next/link'
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { Activity, FileText, List, Sun } from 'lucide-react'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import s from './features.module.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'NutriSnap - Advanced Features',
  description:
    'NutriSnap analyzes food micro-structures to anticipate glycemic impact, optimize recovery windows, and adapt to your circadian metabolism.',
}

const stats = [
  { label: 'Predicted Glucose Volatility', value: 'Low (±18 mg/dL)', color: '#10B981' },
  { label: 'Digestive Rate Constant', value: '1.4 hrs to Glycogen', color: '#38BDF8' },
  { label: 'Thermic Effect of Food (TEF)', value: '+112 kcal expended', color: '#FACC15' },
  { label: 'Macro Bio-Availability', value: '94% Net Absorbed', color: '#FFFFFF' },
]

const metrics = [
  { value: '4.2M', label: 'Food Geometries', tone: '' },
  { value: '<12ms', label: 'Inference Latency', tone: s.sky },
  { value: '100%', label: 'Offline Core Run', tone: s.gold },
  { value: '34+', label: 'Micronutrients Tracked', tone: '' },
]

const pill = (rgb: string, hex: string) => ({
  background: `rgba(${rgb}, 0.1)`,
  border: `1px solid rgba(${rgb}, 0.3)`,
  color: hex,
  padding: '4px 12px',
  marginBottom: 8,
})

const features = [
  {
    icon: Activity,
    iconClass: s.iconMint,
    glow: '',
    badge: 'Predictive Bio-Simulation',
    badgeStyle: pill('16, 185, 129', '#10B981'),
    title: 'Glycemic Load Anticipation',
    body: 'Forecasts individual blood glucose spikes before ingestion by analyzing fiber-to-starch ratios, fat buffers, and food preparation methods.',
  },
  {
    icon: List,
    iconClass: s.iconSky,
    glow: s.glowSky,
    badge: 'Nutrient Timing',
    badgeStyle: pill('56, 189, 248', '#38BDF8'),
    title: 'Sequence-Order Optimizer',
    body: 'Instructs you which items on your plate to eat first (e.g. greens and fats prior to simple starches) to flatten insulin release curves by up to 35%.',
  },
  {
    icon: Sun,
    iconClass: s.iconGold,
    glow: '',
    badge: 'Chrono-Biology',
    badgeStyle: pill('250, 204, 21', '#FACC15'),
    title: 'Circadian Clock Sync',
    body: 'Dynamically recalculates digestive efficiency based on solar time, sleep wake cycles, and core body temperature drops to prevent late-night metabolic stalling.',
  },
  {
    icon: FileText,
    iconClass: s.iconMagenta,
    glow: s.glowMagenta,
    badge: 'Protein Synthesis',
    badgeStyle: pill('217, 70, 239', '#D946EF'),
    title: 'Complete Amino Breakdown',
    body: 'Profiles leucine thresholds and essential amino acid bioavailability for muscular protein synthesis (MPS) rather than reporting raw crude nitrogen numbers.',
    telemetry: true,
  },
]

const outdated = [
  ['Isolated Bomb Calorimetry:', 'Treats human digestive tracts like glass combustion chambers, ignoring gut microbiome variations.'],
  ['Rigid 24-Hour Windows:', 'Enforces artificial midnight resets regardless of circadian rhythms, shift work, or recovery phases.'],
  ['Macro Quantity Blindness:', 'Counts 50g of refined fructose identically to 50g of complex sweet potato fiber.'],
  ['Ignored Food Matrix Effects:', 'Overlooks whether raw vs. cooked preparation doubles or halves caloric uptake.'],
]

const engine = [
  ['Bio-Accessible Calorie Estimation:', 'Calculates actual energy yield based on cellular fiber density and thermal digestion costs.'],
  ['Fluid Metabolic Waves:', 'Tracks energy availability across dynamic multi-day rolling curves synced with actual biological sleep.'],
  ['Insulin & Glucose Profiling:', 'Evaluates hormone responses rather than just calculating inert total calories.'],
  ['Thermal Preparation Recognition:', 'Detects whether food is steamed, charred, fried, or raw to calculate exact true net absorption.'],
]

const footerLinks = [
  { label: 'Features', href: '/features' },
  { label: 'The Science', href: '/how-it-works' },
  { label: 'Clinical Papers', href: '/about' },
  { label: 'Privacy Architecture', href: '/faq' },
  { label: 'Contact Lab', href: '/contact' },
]

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.89.04-2.02.6-2.66 1.34-.56.65-.98 1.72-.92 2.76.99.08 2.01-.54 2.57-1.23z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.22-.997V2.811c0-.36.08-.7.219-.997zm11.235 11.238l2.319-2.32-11.89-6.852 9.571 9.172zm0 1.896l-9.571 9.172 11.89-6.852-2.319-2.32zm1.414-1.414l3.18-1.833a1.912 1.912 0 0 0 0-3.302l-3.18-1.833-2.148 2.148 2.148 2.148z" />
    </svg>
  )
}

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className={`${jakarta.variable} ${jetbrains.variable} ${s.root}`}>
        <div className={s.nsWrapper}>
          <div className={s.ambientGlowTop} aria-hidden="true" />
          <div className={s.ambientGlowBottom} aria-hidden="true" />

          <header className={s.heroSection}>
            <div className={`${s.pillBadge} ${s.pillMint}`}>
              <span className={s.pulseDot} aria-hidden="true" />
              Physiological Intelligence Architecture
            </div>
            <h1 className={s.heroTitle}>
              Decode Your Biology.
              <br />
              <span className={s.gradientText}>Beyond Basic Calorie Counts.</span>
            </h1>
            <p className={s.heroSub}>
              NutriSnap analyzes food micro-structures to anticipate glycemic impact, optimize cellular recovery
              windows, and adapt to individual circadian metabolism.
            </p>

            <div className={s.metabolicPreview}>
              <div className={s.curveScreen}>
                <div className={s.scanBeamVertical} aria-hidden="true" />
                <div className={s.curveHeader}>
                  <span className={s.curveTag}>GLYCEMIC CURVE SIMULATION</span>
                  <span className={`${s.impactPill} ${s.impactOptimal}`}>Staggered Ingestion</span>
                </div>
                <svg
                  className={s.svgCurve}
                  viewBox="0 0 320 120"
                  fill="none"
                  role="img"
                  aria-label="Simulated glucose curve rising to a moderate peak at 45 minutes and returning to baseline by 120 minutes"
                >
                  <defs>
                    <linearGradient id="emeraldGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[30, 70, 110].map((y) => (
                    <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  ))}
                  <path
                    className={s.curveLine}
                    d="M10,105 C60,100 90,85 130,42 C160,12 210,35 250,75 C280,100 310,105 320,105"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10,105 C60,100 90,85 130,42 C160,12 210,35 250,75 C280,100 310,105 320,105 L320,120 L10,120 Z"
                    fill="url(#emeraldGlow)"
                  />
                </svg>
                <div className={s.mono} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#64748B' }}>
                  <span>T+00m (Meal Start)</span>
                  <span>T+45m (Anticipated Peak)</span>
                  <span>T+120m (Baseline Recovery)</span>
                </div>
              </div>

              <dl className={s.metabolicData}>
                {stats.map((stat) => (
                  <div key={stat.label} className={s.metabolicStatBox}>
                    <dt>
                      <span>{stat.label}</span>
                    </dt>
                    <dd>
                      <strong style={{ color: stat.color }}>{stat.value}</strong>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={s.metricsBar}>
              {metrics.map((m) => (
                <div key={m.label} className={s.metricItem}>
                  <span className={`${s.metricVal} ${m.tone}`}>{m.value}</span>
                  <span className={s.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </header>

          <section className={s.bentoGrid} aria-label="Engine capabilities">
            {features.map((f) => (
              <article key={f.title} className={`${s.bentoCard} ${f.glow}`}>
                <div>
                  <div className={`${s.cardIcon} ${f.iconClass}`}>
                    <f.icon size={22} aria-hidden="true" />
                  </div>
                  <div className={s.pillBadge} style={f.badgeStyle}>
                    {f.badge}
                  </div>
                  <h2 className={s.cardTitle}>{f.title}</h2>
                  <p className={s.cardDesc}>{f.body}</p>
                </div>
                {f.telemetry && (
                  <div className={s.telemetryRow}>
                    <div className={s.telemetryItem}>
                      <span className={s.telemetryVal}>3.2g Leucine</span>
                      <span className={s.telemetryLbl}>MPS Trigger Met</span>
                    </div>
                    <div className={s.pulseMeter} aria-hidden="true">
                      <div className={s.pulseFill} />
                    </div>
                  </div>
                )}
              </article>
            ))}
          </section>

          <section className={s.comparisonContainer} aria-labelledby="comparison-title">
            <div className={s.comparisonHead}>
              <div className={s.pillBadge} style={{ ...pill('56, 189, 248', '#38BDF8'), padding: '6px 16px', marginBottom: 20 }}>
                The Biological Reality
              </div>
              <h2 id="comparison-title" className={s.sectionTitle}>
                Static Math vs. Dynamic Human Physiology
              </h2>
            </div>

            <div className={s.comparisonGrid}>
              <div className={s.matrixCard}>
                <div className={s.matrixHeader}>
                  <h3 className={`${s.matrixTitle} ${s.bad}`}>Outdated Calorie Math</h3>
                  <span className={`${s.matrixTag} ${s.badTag}`}>19th CENTURY</span>
                </div>
                <ul className={s.matrixList}>
                  {outdated.map(([title, body]) => (
                    <li key={title} className={s.matrixItem}>
                      <span className={`${s.matrixItemIcon} ${s.cross}`} aria-hidden="true">
                        ✕
                      </span>
                      <span>
                        <strong>{title}</strong> {body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${s.matrixCard} ${s.winner}`}>
                <div className={s.matrixHeader}>
                  <h3 className={`${s.matrixTitle} ${s.good}`}>NutriSnap Neural Physiology</h3>
                  <span className={`${s.matrixTag} ${s.goodTag}`}>ACTIVE ENGINE</span>
                </div>
                <ul className={s.matrixList}>
                  {engine.map(([title, body]) => (
                    <li key={title} className={s.matrixItem}>
                      <span className={`${s.matrixItemIcon} ${s.check}`} aria-hidden="true">
                        ✓
                      </span>
                      <span>
                        <strong>{title}</strong> {body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="cta" className={s.ctaBanner} aria-labelledby="cta-title">
            <div className={`${s.pillBadge} ${s.pillMint}`}>
              <span className={s.pulseDot} aria-hidden="true" />
              Biometric Beta Enrollment
            </div>
            <h2 id="cta-title" className={s.ctaTitle}>
              Upgrade from Calorie Guessing to Real Biology
            </h2>
            <p className={s.ctaDesc}>
              Experience cellular-level nutrition insights designed for athletes, biohackers, and anyone seeking
              sustainable metabolic clarity.
            </p>
            <div className={s.ctaActions}>
              <Link href="/contact" className={`${s.btnPill} ${s.btnEmerald}`}>
                <AppleIcon />
                Request iOS TestFlight Access
              </Link>
              <Link href="/contact" className={`${s.btnPill} ${s.btnOutline}`}>
                <PlayIcon />
                Join Android Beta Fleet
              </Link>
            </div>
          </section>

          <footer className={s.nsFooter}>
            <div className={s.footerBrand}>NUTRISNAP • Advanced Bio-Spectral Food Intelligence</div>
            <ul className={s.footerLinks}>
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className={s.footerCopy}>© 2026 NUTRISNAP Technologies Inc. All rights reserved.</div>
          </footer>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
