import keys from '../keys.js'
import storage from '../storage'
import names from '../names'

const user = {
  state: {
    token: '',
    userInfo: {},
    roles: []
  },
  // 2. local mutations 业务独立
  mutations: {
    [names.UPDATE_LOGIN_INFO]: (state, userInfo) => {
      state.userInfo = userInfo
      storage.setItem(keys.LOGIN_INFO, userInfo)
    },
    // 配置oauth token信息
    [names.UPDATE_LOGIN_TOKEN]: (state, token) => {
      state.token = token
      if (token) {
        storage.setItem(keys.LOGIN_TOKEN, token)
      }
    },
    [names.UPDATE_ROLES]: (state, roles) => {
      state.roles = roles
    },
    [names.UPDATE_LOGOUT]: (state) => {
      state.token = ''
      state.userInfo = {}
      state.roles = []
      storage.removeItem(keys.LOGIN_INFO)
      storage.removeItem(keys.LOGIN_TOKEN)
    }
  },
  // 3. user Actions
  actions: {
    [names.UPDATE_LOGIN_INFO]: ({ commit, state }, userInfo) => {
      commit(names.UPDATE_LOGIN_INFO, userInfo)
    },
    [names.UPDATE_LOGIN_TOKEN]: ({ commit, state }, token) => {
      commit(names.UPDATE_LOGIN_TOKEN, token)
    },
    [names.UPDATE_ROLES]: ({ commit, state }, roles) => {
      commit(names.UPDATE_ROLES, roles)
    },
    [names.UPDATE_LOGOUT]: ({ commit, state }) => {
      commit(names.UPDATE_LOGOUT)
    }
  }
}
export default user
