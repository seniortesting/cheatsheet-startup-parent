module.exports = {
  mode: 'universal',
  /*
    ** Headers of the page
    */
  buildDir: '.dist',
  srcDir: 'src/',
  head: {
    title: 'nuxt demo'
  },
  /*
    ** loading
    */
  loading: { color: '#ff1a1a', height: '3px' },
  // loading
  loadingIndicator: {
    name: '~/static/loading.html',
    color: '#3B8070',
    background: 'white'
  },
  css: [
    '~/assets/css/app.scss'
  ],
  plugins: [
    // { src: '~/plugins/nuxt-axios', ssr: false },
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  modules: [],
  build: {}
}
