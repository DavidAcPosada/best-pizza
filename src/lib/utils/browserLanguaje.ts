import CONSTANT from 'config/CONSTANT'

const BrowserLanguage = {
  getBrowserLanguage() {
    return navigator.language ?? 'es'
  },
  getPrevLanguage() {
    return localStorage ? localStorage.getItem(CONSTANT.LOCAL_STORAGE_LANG_KEY) : null
  },
  setLanguage(lang: 'es' | 'en') {
    if (localStorage) {
      localStorage.setItem(CONSTANT.LOCAL_STORAGE_LANG_KEY, lang)
      return true
    }
    return false
  },
  getDefaultLanguage() {
    const langSet = this.getPrevLanguage()
    if (langSet) {
      return langSet
    }

    const browserLang = this.getBrowserLanguage()

    if (browserLang) {
      var language = ''
      for (let lang of CONSTANT.LANGUAGES) {
        if (browserLang.includes(lang.key)) {
          language = lang.key
        }
      }
      return language || 'es'
    }
  }
}

export default BrowserLanguage