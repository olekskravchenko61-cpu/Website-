import { Building2, Rocket, ShoppingCart, UtensilsCrossed } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal.jsx'
import './Services.css'

const SERVICES = [
  { key: 'business', icon: Building2 },
  { key: 'landing', icon: Rocket },
  { key: 'restaurant', icon: UtensilsCrossed },
  { key: 'shop', icon: ShoppingCart },
]

function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="services section">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map(({ key, icon: Icon }, index) => (
            <Reveal key={key} className="card services__card" delay={index * 90}>
              <div className="services__icon">
                <Icon size={22} />
              </div>
              <h3 className="services__title">{t(`services.${key}.title`)}</h3>
              <p className="services__desc">{t(`services.${key}.desc`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
