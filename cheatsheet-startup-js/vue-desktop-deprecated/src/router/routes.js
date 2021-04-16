import { RouteView, PageView, ConsoleLayout, UserLayout } from '../layouts'
const staticRoutes = [
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    redirect: { name: 'login' },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Registration.vue')
      },
      {
        path: 'registerResult',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/RegistrationResult.vue')
      },
      {
        path: 'recover',
        name: 'recover',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Recover.vue')
      }
    ]
  }
]
// 根据权限动态加载的侧边栏
const asyncRoutes = [
  {
    path: '/',
    name: 'index',
    component: ConsoleLayout,
    redirect: { name: 'kanban' },
    meta: { title: '首页' },
    children: [
      // 下面的每个对象为导航的顶级菜单
      {
        path: 'dashboard',
        name: 'dashboard',
        component: RouteView,
        redirect: { name: 'kanban' },
        meta: { title: '仪表盘', keepAlive: true, icon: 'dashboard', permission: [ 'dashboard' ] },
        children: [
          {
            path: 'kanban',
            name: 'kanban',
            component: () => import(/* webpackChunkName: "dashboard" */ '../views/console/dashboard/Kanban'),
            meta: { title: '概述', keepAlive: false, permission: [ 'dashboard' ] }
          }
        ]
      },
      // 第二个菜单
      {
        path: 'account',
        name: 'account',
        component: PageView,
        redirect: { name: 'acenter' },
        meta: { title: '个人中心', icon: 'user', keepAlive: true, permission: [ 'dashboard' ] },
        children: [
          {
            path: 'acenter',
            name: 'acenter',
            component: () => import(/* webpackChunkName: "dashboard" */ '../views/console/account/AccountCenter'),
            meta: { title: '个人详情', keepAlive: false, permission: [ 'dashboard' ] }
          },
          {
            path: 'asetting',
            name: 'asetting',
            component: () => import(/* webpackChunkName: "dashboard" */ '../views/console/account/AccountSetting'),
            meta: { title: '个人设置', keepAlive: false, permission: [ 'dashboard' ] }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "error" */ '../views/exception/404.vue')
  }
]
export { staticRoutes, asyncRoutes }
