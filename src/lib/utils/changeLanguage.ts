import i18n from 'config/i18n'

const changeLanguage = (lang: 'es' | 'en') => {
  return i18n.changeLanguage(lang)
}

export default changeLanguage