import { isWeixin } from '../utils/WeixinUtils'
import constants from '../config'
import keys from '../store/keys'
import storage from '../store/storage'
import names from '../store/names'
import Weixin from '../api/services/weixin'

export default {
  methods: {
    oAuthStoreWeixinOpenIdInfo: function () {
      const appid = constants.weixin.appId
      // http user info
      let _this = this
      const userInfo = storage.getItem(keys.LOGIN_INFO)
      if (!userInfo) { // 没有对应的该用户的oauth token,或者是过期了7200秒
        const code = this.$route.query.code
        // const state = this.$route.query.state
        if (!code || code === '') {
          const encodeUrl = encodeURIComponent(window.location.href)
          const oauth2RedirectUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeUrl}&response_type=code&scope=snsapi_userinfo&state=yanzhi#wechat_redirect`
          location.href = oauth2RedirectUrl
        } else {
          // const requestUrl = `${index.WEIXIN_OUATH_URL}?code=${code}`\
          const weixin = new Weixin()
          weixin.oauthCallback(code).then(response => {
            const responsecode = response.data.code
            if (responsecode === 1000) {
              const responsedata = response.data.data
              // 后面用于获取对应的用户头像的信息等
              // console.log(`已经正常换取到用户的信息,放在对应的vuex中:${JSON.stringify(responsedata)}`)
              _this.$store.dispatch(names.UPDATE_LOGIN_INFO, responsedata)
            } else {
              console.log(`CALLBACK异常: ${JSON.stringify(response.data)}`)
            }
          }).catch(error => {
            console.log(`调用oauth的callback回调失败: ${JSON.stringify(error)}`)
            // 任何异常的操作我们让他跳转到对应的404页面
            _this.$router.push({
              name: 'error'
            })
          })
        }
      } else {
        // 发现用户登录了
      }
    }
  },
  mounted () {
    const isPro = process.env.NODE_ENV === 'production'
    if (isPro && isWeixin()) {
      this.oAuthStoreWeixinOpenIdInfo()
    }
  }
}
