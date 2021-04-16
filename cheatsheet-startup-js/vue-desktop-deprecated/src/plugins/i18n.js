import Vue from 'vue'
import VueI18n from '../../node_modules/vue-i18n'
import storage from '../store/storage'
import keys from '../store/keys'
import messages from '../i18n'

Vue.use(VueI18n)

const getLang = function () {
  const simplifiedChinese = ['zh', 'zh-cn']
  let browserLang = navigator.userLanguage || window.navigator.language
  browserLang = browserLang.toLowerCase()
  return storage.getItem(keys.LANG_NAME) || (~simplifiedChinese.indexOf(browserLang) ? 'zh-cn' : 'zh-cn')
}

const setLang = function (lang) {
  storage.setItem(keys.LANG_NAME, lang)
  i18n.locale = lang
}

const i18n = new VueI18n({
  locale: getLang(),
  fallbackLocale: 'zh-cn',
  messages
})
export { getLang, setLang }
export default i18n
