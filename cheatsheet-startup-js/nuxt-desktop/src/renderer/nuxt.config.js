const localForage = require('localforage')
module.exports = {
  // mode: 'universal',
  mode: 'spa',
  /**
   * 相关配置
   */
  buildDir: '.dist',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || ''
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/antd-ui',
    '@/plugins/router'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/axios', {
      progress: true,
      retry: false,
      credentials: false
    }],
    ['localforage-nuxt', {
      driver: [
        // 《存储方案对比： https://demo.agektmr.com/storage/》
        // IndexedDB是浏览器提供的本地数据库， 允许储存大量数据，提供查找接口，还能建立索引。
        localForage.INDEXEDDB,
        // LocalStorage 在 2.5MB 到 10MB 之间（各家浏览器不同），而且不提供搜索功能，不能建立自定义的索引
        localForage.LOCALSTORAGE
        // WebSQL也是一种在浏览器里存储数据的技术，跟IndexedDB不同的是，IndexedDB更像是一个NoSQL数据库，而WebSQL更像是关系型数据库，使用SQL查询数据。W3C已经不再支持这种技术
      ], // Force WebSQL; same as using setDriver()
      name: 'nuxt-electron',
      storeName: 'keyvaluepairs' // Should be alphanumeric, with underscores.
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
