import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx'
import './Header.css'

const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'pricing', href: '#pricing' },
  { key: 'about', href: '#about' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'contact', href: '#contact' },
]

function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" onClick={() => setIsMenuOpen(false)}>
          Oleksandr<span className="gradient-text">.dev</span>
        </a>

        <nav className="header__nav header__nav--desktop" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href}>
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="header__actions header__actions--desktop">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn-primary">
            {t('nav.cta')}
          </a>
        </div>

        <button
          type="button"
          className="header__menu-toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`header__mobile ${isMenuOpen ? 'header__mobile--open' : ''}`}>
        <nav className="header__nav header__nav--mobile" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
        <div className="header__mobile-actions">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
