import { Code2, Sparkles, Target, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal.jsx'
import './About.css'

const POINTS = [
  { key: 'point1', icon: Code2 },
  { key: 'point2', icon: Sparkles },
  { key: 'point3', icon: Target },
  { key: 'point4', icon: TrendingUp },
]

function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        <Reveal className="about__intro">
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="about__text">{t('about.text')}</p>
        </Reveal>

        <div className="about__points">
          {POINTS.map(({ key, icon: Icon }, index) => (
            <Reveal key={key} className="card about__point" delay={index * 90}>
              <div className="about__point-icon">
                <Icon size={19} />
              </div>
              <div>
                <h3 className="about__point-title">{t(`about.${key}.title`)}</h3>
                <p className="about__point-desc">{t(`about.${key}.desc`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
