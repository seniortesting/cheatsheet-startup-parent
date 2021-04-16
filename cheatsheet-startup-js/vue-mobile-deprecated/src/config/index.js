import { Capacitor } from '@capacitor/core'
// 基本接口路径地址
export default {
  production: process.env.NODE_ENV === 'production',
  isWeb: Capacitor.platform === 'web',
  isIOS: Capacitor.platform === 'ios',
  oauth: {
    CLIENT_ID: 'coreuser',
    CLIENT_SECRET: '2e50f5e00254420fac133a83e9b9f415'
  },
  serverUrls: {
    STATIC_BASE_URL: process.env.NODE_ENV === 'development' ? 'https://res.yitieyilu.com/' : 'https://res.yitieyilu.com/',
    AUTH_BASE_URL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8081/auth' : 'https://open.yitieyilu.com/auth',
    WEIXIN_BASE_URL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8083/wx' : 'https://open.yitieyilu.com/wx',
    API_BASE_URL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8082/core' : 'https://open.yitieyilu.com/core'
  },
  // 腾讯地图开发接口查看，用户地图查看
  QQMAPKEY: 'RV7BZ-3LAWX-26Q4T-ZWBNT-FSPSE-ZKB5K',
  mob: {
    srcUrl: 'http://f1.webshare.mob.com/code/mob-share.js',
    appkey: '2affafdc10b10'
  },
  weixin: {
    // 进入公众号查看对应的信息
    appId: process.env.NODE_ENV === 'development' ? 'wxed201bd318f3bec0' : 'wx9202ce6998bcc82c'
  }
}
