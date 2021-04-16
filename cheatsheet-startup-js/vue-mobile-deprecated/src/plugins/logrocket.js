import Vue from 'vue'
import LogRocket from 'logrocket'
import cache from '../stores/cache.js'
import cachekeys from '../config/cachekeys'
// 初始化
LogRocket.init('hqfe93/best')
// 记录用户id
let userInfo = cache.getCache(cachekeys.LOGIN_INFO)
let openid = userInfo ? userInfo.openid : '匿名用户'
LogRocket.identify(openid, {})
// 查看详细日志记录： https://app.logrocket.com/hqfe93/best
// ---------------------------- 配置全局的异常处理
Vue.config.errorHandler = function (err, vm, info) {
  console.log(`全局的错误日志记录: ${JSON.stringify(err)},错误信息是: ${JSON.stringify(info)}`)
}
