import { asyncRoutes, staticRoutes } from '../../router/routes'
import names from '../names'
const permission = {
  state: {
    state: {
      routes: staticRoutes,
      addRoutes: []
    }
  },
  mutations: {
    [names.UPDATE_ROUTES]: (state, routes) => {
      state.addRoutes = routes
      state.routes = staticRoutes.concat(routes)
    }
  },
  actions: {
    // 根据角色权限产生对应的路由，并将对应的路由信息保存在对应的两个state里面：
    // routes代表所有的路由，包含登录；addRoutes: 表示通过权限过滤的路由
    // 用户路由的钩子函数里面，
    [names.UPDATE_ROUTES]: ({ commit }, role) => {
      return new Promise(resolve => {
        // 根据用户的权限过滤掉用户可以访问的路由，然后返回对应的路由
        const canAccessedRoutes = filterAsyncRouter(asyncRoutes, role)
        commit(names.UPDATE_ROUTES, canAccessedRoutes)
        resolve()
      })
    }

  }
}

/**
 * 根据用户的角色过滤掉对应的路由，产生新的路由
 * @param asyncRoutes
 * @param roles
 * @returns {*}
 */
function filterAsyncRouter (asyncRoutes, role) {
  const accessedRouters = asyncRoutes.filter(route => {
    if (hasPermission(role.permissionList, route)) {
      // 递归遍历对应的children节点的route
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, role)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission (permission, route) {
  // 如果带有permission表示需要权限才能访问，否则不需要权限
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}
/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id)
  } else {
    return true
  }
}
export default permission
