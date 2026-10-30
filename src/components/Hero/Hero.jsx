import { Gauge, ShieldCheck, Sparkles, SquareCode } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './Hero.css'

const TAGS = [
  { key: 'tag1', icon: ShieldCheck },
  { key: 'tag2', icon: Gauge },
  { key: 'tag3', icon: Sparkles },
]

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="hero section">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">
            <Sparkles size={14} />
            {t('hero.eyebrow')}
          </span>

          <h1 className="hero__headline">
            {t('hero.headlineLine1')}
            <br />
            <span className="gradient-text">{t('hero.headlineLine2')}</span>
          </h1>

          <p className="hero__subtext">{t('hero.subtext')}</p>

          <div className="hero__cta-row">
            <a href="#contact" className="btn btn-primary">
              {t('hero.ctaPrimary')}
            </a>
            <a href="#services" className="btn btn-secondary">
              {t('hero.ctaSecondary')}
            </a>
          </div>

          <div className="hero__tags">
            {TAGS.map(({ key, icon: Icon }) => (
              <span key={key} className="hero__tag">
                <Icon size={15} />
                {t(`hero.${key}`)}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__window">
            <div className="hero__window-bar">
              <span />
              <span />
              <span />
              <SquareCode size={14} className="hero__window-icon" />
            </div>
            <div className="hero__window-body">
              <div className="hero__line hero__line--1">
                <span className="hc hc-key">const</span>
                <span className="hc hc-var"> site</span>
                <span className="hc"> = </span>
                <span className="hc hc-key">build</span>
                <span className="hc">(</span>
              </div>
              <div className="hero__line hero__line--2">
                <span className="hc hc-prop">design</span>
                <span className="hc">: </span>
                <span className="hc hc-str">'premium'</span>
                <span className="hc">,</span>
              </div>
              <div className="hero__line hero__line--3">
                <span className="hc hc-prop">speed</span>
                <span className="hc">: </span>
                <span className="hc hc-str">'fast'</span>
                <span className="hc">,</span>
              </div>
              <div className="hero__line hero__line--4">
                <span className="hc hc-prop">responsive</span>
                <span className="hc">: </span>
                <span className="hc hc-key">true</span>
                <span className="hc">,</span>
              </div>
              <div className="hero__line hero__line--5">
                <span className="hc">)</span>
              </div>
              <div className="hero__cursor" />
            </div>
          </div>
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
        </div>
      </div>
    </section>
  )
}

export default Hero
