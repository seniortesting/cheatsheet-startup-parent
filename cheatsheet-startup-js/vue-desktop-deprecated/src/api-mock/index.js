// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production') {
  require('./services/weixin')
  require('./services/user')
  require('./services/feedback')
  console.log('mock mounted')
}
