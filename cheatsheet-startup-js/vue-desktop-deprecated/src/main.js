import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './router/hook'
import './plugins'
import i18n from './plugins/i18n'
import initializer from './plugins/core'
import './api-mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  created () {
    // 初始化相关配置
    initializer()
  },
  render: h => h(App)
}).$mount('#app')
