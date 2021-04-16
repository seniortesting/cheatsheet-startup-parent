import store from '../store'
import storage from '../store/storage'
import keys from '../store/keys'
import names from '../store/names'
import config from '../config'
// 初始化系统的相关配置
const initializer = function () {
  console.log(`init app...`)
  store.commit(names.SET_SIDEBAR_TYPE, storage.getItem(keys.SIDEBAR_TYPE, true))
  store.commit(names.TOGGLE_THEME, storage.getItem(keys.DEFAULT_THEME, config.app.navTheme))
  store.commit(names.TOGGLE_LAYOUT_MODE, storage.getItem(keys.DEFAULT_LAYOUT_MODE, config.app.layout))
  store.commit(names.TOGGLE_FIXED_HEADER, storage.getItem(keys.DEFAULT_FIXED_HEADER, config.app.fixedHeader))
  store.commit(names.TOGGLE_FIXED_SIDERBAR, storage.getItem(keys.DEFAULT_FIXED_SIDEMENU, config.app.fixSiderbar))
  store.commit(names.TOGGLE_CONTENT_WIDTH, storage.getItem(keys.DEFAULT_CONTENT_WIDTH_TYPE, config.app.contentWidth))
  store.commit(names.TOGGLE_FIXED_HEADER_HIDDEN, storage.getItem(keys.DEFAULT_FIXED_HEADER_HIDDEN, config.app.autoHideHeader))
  store.commit(names.TOGGLE_WEAK, storage.getItem(keys.DEFAULT_COLOR_WEAK, config.app.colorWeak))
  store.commit(names.TOGGLE_COLOR, storage.getItem(keys.DEFAULT_COLOR, config.app.primaryColor))
  store.commit(names.TOGGLE_MULTI_TAB, storage.getItem(keys.DEFAULT_MULTI_TAB, config.app.multiTab))
  store.commit(names.UPDATE_LOGIN_TOKEN, storage.getItem(keys.LOGIN_TOKEN))
}

export default initializer
