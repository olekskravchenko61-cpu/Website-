import { FolderGit2, Hammer } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Reveal from '../Reveal.jsx'
import './Portfolio.css'

function Portfolio() {
  const { t } = useTranslation()

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{t('portfolio.eyebrow')}</span>
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="section-subtitle">{t('portfolio.subtitle')}</p>
        </Reveal>

        <Reveal className="portfolio__empty" delay={90}>
          <div className="portfolio__empty-icon">
            <Hammer size={26} />
          </div>
          <h3>{t('portfolio.emptyTitle')}</h3>
          <p>{t('portfolio.emptyText')}</p>
        </Reveal>

        <div className="portfolio__ghosts">
          {[0, 1, 2].map((item) => (
            <Reveal key={item} className="portfolio__ghost" delay={160 + item * 90}>
              <FolderGit2 size={20} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
