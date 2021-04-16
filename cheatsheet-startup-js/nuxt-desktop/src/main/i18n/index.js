import fs from 'fs'
import path from 'path'
import { app, remote } from 'electron'
let loadedLanguage
const appLang = app || remote.app
const i18n = {
  init () {
    const language = appLang.getLocale()
    let langJsonFile = path.join(global.__resources, language + '.json')
    if (!fs.existsSync(langJsonFile)) {
      langJsonFile = path.join(global.__resources, 'en-US.json')
    }
    // console.log(`langFilePath is: ${langJsonFile}`)
    loadedLanguage = JSON.parse(fs.readFileSync(langJsonFile, 'utf-8'))
  },
  t (item) {
    let translation = loadedLanguage[item]
    if (translation === undefined) {
      translation = item
    }
    return translation
  }
}

export default i18n
