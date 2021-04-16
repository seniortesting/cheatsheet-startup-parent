import router from './index'
import store from '../store'
import User from '../api/services/user'
import names from '../store/names'

const user = new User()
// 进入路由的钩子名称，对应的是route的name属性
const whiteList = ['login'] // no redirect whitelist

// 相关的路由拦截钩子
router.beforeEach((to, from, next) => {
  // 判断当前的页面用户是否登录状态，只有登录状态才有access_token
  if (user.isAuthorization()) {
    if (whiteList.includes(to.name)) {
      user.logout()
    } else {
      if (store.getters.roles.length === 0) {
        // 刷新进入页面此时的用户信息为空,重新获取对应的该用户的相关信息
        user.getUserInfo().then((role) => {
          // 过滤 保存动态路由信息
          store.dispatch(names.UPDATE_LOGGED, true)
        }).catch(() => {
          // 退出到登录页面
          user.logout().then(() => {
            next({ name: 'login', query: { redirect: to.fullPath } })
          })
        })
      }
    }
  }
  next()
})
router.afterEach((to, from) => {
})

// 刷新避免不能获取用户
if (user.isAuthorization()) {
  store.dispatch(names.UPDATE_LOGGED, true)
} else {
  store.dispatch(names.UPDATE_LOGGED, false)
}
