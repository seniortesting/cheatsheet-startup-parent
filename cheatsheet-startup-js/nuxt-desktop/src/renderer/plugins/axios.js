export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // console.log('Making request to ' + config.url)
  })
  $axios.onResponse((response) => {
    // 参考: https://github.com/nuxt-community/axios-module/issues/84
    // const originalRequest = response.config
    // console.log('Making request to ' + response.status, originalRequest)
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/404')
    }
  })
}
