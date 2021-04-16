import { BlankLayout, TabLayout } from '../layouts'
/**
 * 需要登录才能访问的路由
 * @param to
 * @param from
 * @param next
 */
import User from '../api/services/user'

// eslint-disable-next-line no-unused-vars
const loginRequired = (to, from, next) => {
  const user = new User()
  if (!user.isAuthorization()) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const staticRoutes = [
  {
    path: '/',
    component: TabLayout,
    redirect: { name: 'home' },
    children: [
      {
        path: 'home',
        name: 'home',
        components: { home: () => import(/* webpackChunkName: "home" */ '@/views/tabs/Home') }
      },
      {
        path: 'discover',
        name: 'discover',
        components: { discover: () => import(/* webpackChunkName: "home" */ '@/views/tabs/Discover') }
      },
      {
        path: 'contact',
        name: 'contact',
        components: { contact: () => import(/* webpackChunkName: "home" */ '@/views/tabs/Contact') }
      },
      {
        path: 'usercenter',
        name: 'usercenter',
        components: { usercenter: () => import(/* webpackChunkName: "home" */ '@/views/tabs/UserCenter') },
        beforeEnter: loginRequired
      }
    ]
  },
  {
    path: '/search',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/search')
      }
    ]
  },
  {
    path: '/notification',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'notification',
        component: () => import(/* webpackChunkName: "notification" */ '@/views/notification')
      }
    ]
  },
  {
    path: '/profile',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/usercenter/profile')
      }
    ]
  },
  {
    path: '/setting',
    component: BlankLayout,
    children: [
      {
        path: '',
        name: 'setting',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/usercenter/setting')
      },
      {
        path: 'language',
        name: 'language',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/usercenter/setting/Language')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/usercenter/setting/About')
      }
    ]
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import(/* webpackChunkName: "feedback" */ '@/views/usercenter/Feedback')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "error" */ '@/components/NotFound')
  }
]

// 根据权限动态加载的侧边栏
const asyncRoutes = []

export { staticRoutes, asyncRoutes }
