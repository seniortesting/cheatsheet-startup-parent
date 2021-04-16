import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import VueMeta from 'vue-meta'
import { staticRoutes } from './routes'

Vue.use(IonicVueRouter)
Vue.use(VueMeta)

const router = new IonicVueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: staticRoutes
})

export default router
