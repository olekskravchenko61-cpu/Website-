import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { contactInfo } from '../../config/contact.js'
import InstagramIcon from '../icons/InstagramIcon.jsx'
import './Footer.css'

const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'pricing', href: '#pricing' },
  { key: 'about', href: '#about' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'contact', href: '#contact' },
]

function Footer() {
  const { t } = useTranslation()
  const [year] = useState(() => new Date().getFullYear())

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              Oleksandr<span className="gradient-text">.dev</span>
            </span>
            <p>{t('footer.tagline')}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.key} href={item.href}>
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          <div className="footer__social">
            <a href={`mailto:${contactInfo.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={contactInfo.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
              <Send size={18} />
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} Oleksandr Kravchenko. {t('footer.rights')}
          </p>
          <div className="footer__legal">
            <a href="/impressum">{t('footer.legal.imprint')}</a>
            <a href="/datenschutz">{t('footer.legal.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
