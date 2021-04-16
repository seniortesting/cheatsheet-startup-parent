import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import { staticRoutes } from './routes'

Vue.use(Router)
Vue.use(VueMeta)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: staticRoutes
})

export default router
