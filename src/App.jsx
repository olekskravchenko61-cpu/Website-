import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import About from './components/About/About.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'))
    }
  }, [t, i18n.language])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
