import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// import createPersistedState from 'vuex-persistedstate'
// 各个业务逻辑模块
import user from './modules/user'
import permission from './modules/permission'

// import cache from './cache.js'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// const persistedState = createPersistedState({
//   storage: {
//     getItem: key => cache.getCache(key),
//     setItem: (key, value) => cache.setCache(key, value),
//     removeItem: key => cache.removeCache(key),
//     clear: () => cache.clear()
//   }
// })
const store = new Vuex.Store({
  modules: {
    permission, user
  },
  getters: {
    // 对应用户的token
    token: state => state.user.token,
    roles: state => state.user.roles,
    userInfo: state => state.user.userInfo,
    islogged: state => state.user.islogged,
    // 对应权限
    addRoutes: state => state.permission.addRoutes
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})

export default store
