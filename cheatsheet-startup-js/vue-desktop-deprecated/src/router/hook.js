import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { notification } from 'ant-design-vue'
import router from './index'
import store from '../store'
import config from '../config'
import names from '../store/names'
import User from '../api/services/user'

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const user = new User()
// 进入路由的钩子名称，对应的是route的name属性
const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${config.app.defaultTitle}`))
  // 判断当前的页面用户是否登录状态，只有登录状态才有access_token
  if (user.isAuthorization()) {
    if (to.name === 'login') {
      // 说明已经登录了,如果还是访问登录页面
      next({ name: 'dashboard' })
      NProgress.done()
    } else {
      // 直接进入该页面，单角色的用户此处是undefined，所以也是直接进入的
      if (store.getters.roles.length === 0) {
        // 刷新进入页面此时的用户信息为空,重新获取对应的该用户的相关信息
        user.getUserInfo().then((role) => {
          // 过滤 保存动态路由信息
          store.dispatch(names.UPDATE_ROUTES, role).then(() => {
            router.addRoutes(store.getters.addRoutes)
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              next({ ...to, replace: true })
            } else {
              // 跳转到目的路由
              next({ path: redirect })
            }
          })
        }).catch(() => {
          notification.error({
            message: '错误',
            description: '请求用户信息失败，请重试'
          })
          // 退出到登录页面
          user.logout().then(() => {
            next({ name: 'login', query: { redirect: to.fullPath } })
          })
        })
      } else {
        next()
      }
    }
  } else {
    // 没有登录，检查是否在白名单中
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ name: 'login', query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done() // finish progress bar
})

/**
 * 设置页面标题
 * @param title
 */
const setDocumentTitle = function (title) {
  document.title = title
  const ua = navigator.userAgent
  // eslint-disable-next-line
  const regex = /\bMicroMessenger\/([\d\.]+)/
  if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    const i = document.createElement('iframe')
    i.src = '/favicon.ico'
    i.style.display = 'none'
    i.onload = function () {
      setTimeout(function () {
        i.remove()
      }, 9)
    }
    document.body.appendChild(i)
  }
}
