import { useState } from 'react'
import { Info, Mail, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { contactInfo } from '../../config/contact.js'
import InstagramIcon from '../icons/InstagramIcon.jsx'
import Reveal from '../Reveal.jsx'
import './Contact.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_FORM = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: '',
}

function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }))
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    }
  }

  function validate() {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = t('contact.form.errorRequired')
    if (!form.email.trim()) {
      nextErrors.email = t('contact.form.errorRequired')
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = t('contact.form.errorEmail')
    }
    if (!form.message.trim()) nextErrors.message = t('contact.form.errorRequired')
    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setStatus('ready-not-connected')
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__channels">
            <h3 className="contact__channels-title">{t('contact.channelsTitle')}</h3>

            <a className="card contact__channel" href={`mailto:${contactInfo.email}`}>
              <span className="contact__channel-icon">
                <Mail size={19} />
              </span>
              <span>
                <strong>{t('contact.email')}</strong>
                <span className="contact__channel-value">{contactInfo.email}</span>
              </span>
            </a>

            <a
              className="card contact__channel"
              href={contactInfo.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__channel-icon">
                <Send size={19} />
              </span>
              <span>
                <strong>{t('contact.telegram')}</strong>
                <span className="contact__channel-value">{contactInfo.telegram}</span>
              </span>
            </a>

            <a
              className="card contact__channel"
              href={contactInfo.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__channel-icon">
                <InstagramIcon size={19} />
              </span>
              <span>
                <strong>{t('contact.instagram')}</strong>
                <span className="contact__channel-value">{contactInfo.instagram}</span>
              </span>
            </a>
          </Reveal>

          <Reveal className="card contact__form-wrap" delay={100}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="name">{t('contact.form.name')} *</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span className="contact__error" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="email">{t('contact.form.email')} *</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span className="contact__error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact__field-row">
                <div className="contact__field">
                  <label htmlFor="projectType">{t('contact.form.projectType')}</label>
                  <input
                    id="projectType"
                    type="text"
                    placeholder={t('contact.form.projectTypePlaceholder')}
                    value={form.projectType}
                    onChange={handleChange('projectType')}
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="budget">{t('contact.form.budget')}</label>
                  <input
                    id="budget"
                    type="text"
                    placeholder={t('contact.form.budgetPlaceholder')}
                    value={form.budget}
                    onChange={handleChange('budget')}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">{t('contact.form.message')} *</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t('contact.form.messagePlaceholder')}
                  value={form.message}
                  onChange={handleChange('message')}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span className="contact__error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                {t('contact.form.submit')}
              </button>

              {status === 'ready-not-connected' && (
                <div className="contact__notice" role="status">
                  <Info size={18} />
                  <div>
                    <strong>{t('contact.form.notConnectedTitle')}</strong>
                    <p>{t('contact.form.notConnectedText')}</p>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
