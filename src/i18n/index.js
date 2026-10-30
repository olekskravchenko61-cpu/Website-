import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from './locales/de.json'
import en from './locales/en.json'
import ru from './locales/ru.json'

export const STORAGE_KEY = 'oleksandr-website-lang'
export const supportedLanguages = ['de', 'en', 'ru']

function getInitialLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && supportedLanguages.includes(stored)) return stored
  } catch {
    // localStorage unavailable (private mode, blocked storage, etc.)
  }
  return 'de'
}

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'de',
  supportedLngs: supportedLanguages,
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lng)
  } catch {
    // ignore
  }
  document.documentElement.lang = lng
})

document.documentElement.lang = i18n.language

export default i18n
