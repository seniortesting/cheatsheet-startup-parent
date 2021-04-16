const pkg = require('../../package.json')
const config = {
  production: process.env.NODE_ENV === 'production',
  app: {
    defaultTitle: pkg.description,
    primaryColor: '#1890FF', // primary color of ant design
    navTheme: 'dark', // theme for nav menu
    layout: 'topmenu', // nav menu position: sidemenu or topmenu
    contentWidth: 'Fixed', // layout of content: Fluid or Fixed, only works when layout is topmenu
    fixedHeader: false, // sticky header
    fixSiderbar: false, // sticky siderbar
    autoHideHeader: false, //  auto hide header
    colorWeak: false,
    multiTab: false
  },
  oauth: {
    CLIENT_ID: 'coreuser',
    CLIENT_SECRET: '2e50f5e00254420fac133a83e9b9f415'
  },
  serverUrls: {
    ICONFONT_URL: '//at.alicdn.com/t/font_1069363_mqex440wzb9.js',
    STATIC_BASE_URL: process.env.NODE_ENV !== 'development' ? 'https://res.yitieyilu.com/' : 'https://res.yitieyilu.com/',
    AUTH_BASE_URL: process.env.NODE_ENV !== 'development' ? 'http://127.0.0.1:8081/auth' : 'https://open.yitieyilu.com/auth',
    WEIXIN_BASE_URL: process.env.NODE_ENV !== 'development' ? 'http://127.0.0.1:8082/wx' : 'https://open.yitieyilu.com/wx',
    API_BASE_URL: process.env.NODE_ENV !== 'development' ? 'http://127.0.0.1:8082/core' : 'https://open.yitieyilu.com/core2'
  },
  // 腾讯地图开发接口查看，用户地图查看
  QQMAPKEY: 'RV7BZ-3LAWX-26Q4T-ZWBNT-FSPSE-ZKB5K',
  weixin: {
    // 进入公众号查看对应的信息
    appId: process.env.NODE_ENV !== 'development' ? 'wxed201bd318f3bec0' : 'wx9202ce6998bcc82c'
  }
}

export default config
