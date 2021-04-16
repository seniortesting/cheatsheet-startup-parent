import config from '../config'
// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (!config.production) {
  require('./services/weixin')
  require('./services/user')
  require('./services/feedback')
  console.log('mock mounted')
}
