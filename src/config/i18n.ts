import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

import BrowserLanguage from 'lib/utils/browserLanguaje'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV !== 'production',
    lng: BrowserLanguage.getDefaultLanguage(),
    fallbackLng: 'es',
    whitelist: ['es', 'en'],
    interpolation: {
      escapeValue: false
    },
    react: {
      bindI18n: 'languageChanged',
      transSupportBasicHtmlNodes: false,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p']
    },
    backend: {
      loadPath:'/locales/{{lng}}/{{ns}}.json'
    }
  }, function(err: any, t: any) {
    if (err) return console.error('Something went wrong loading i18n', err)
  })

export default i18n