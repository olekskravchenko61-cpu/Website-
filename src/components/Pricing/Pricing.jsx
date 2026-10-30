import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal.jsx'
import './Pricing.css'

const PLANS = [
  { key: 'basic', featured: false },
  { key: 'business', featured: true },
  { key: 'custom', featured: false },
]

function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{t('pricing.eyebrow')}</span>
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">{t('pricing.subtitle')}</p>
        </Reveal>

        <div className="pricing__grid">
          {PLANS.map(({ key, featured }, index) => {
            const features = t(`pricing.${key}.features`, { returnObjects: true })
            return (
              <Reveal
                key={key}
                delay={index * 90}
                className={`card pricing__card ${featured ? 'pricing__card--featured' : ''}`}
              >
                {featured && <span className="pricing__badge">{t('pricing.popular')}</span>}
                <h3 className="pricing__name">{t(`pricing.${key}.name`)}</h3>
                <div className="pricing__price">{t(`pricing.${key}.price`)}</div>
                <p className="pricing__desc">{t(`pricing.${key}.desc`)}</p>
                <ul className="pricing__features">
                  {Array.isArray(features) &&
                    features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
                <a
                  href="#contact"
                  className={`btn ${featured ? 'btn-primary' : 'btn-secondary'} pricing__cta`}
                >
                  {t('pricing.cta')}
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="pricing__note" delay={270}>
          <p>{t('pricing.note')}</p>
        </Reveal>
      </div>
    </section>
  )
}

export default Pricing
