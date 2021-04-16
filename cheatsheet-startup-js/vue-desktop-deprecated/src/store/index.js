import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// 各个业务逻辑模块
import app from './modules/app'
import permission from './modules/permission'
import user from './modules/user'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    app, permission, user
  },
  state: {
  },
  getters: {
    device: state => state.app.device,
    theme: state => state.app.theme,
    color: state => state.app.color,
    multiTab: state => state.app.multiTab,
    // 对应用户的token
    token: state => state.user.token,
    roles: state => state.user.roles,
    userInfo: state => state.user.userInfo,
    // 对应权限
    addRoutes: state => state.permission.addRoutes
  },
  mutations: {
  },
  actions: {
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})

export default store
