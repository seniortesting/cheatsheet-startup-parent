import http from '../../plugins/axios'
import constants from '../../config'
import urls from '../index'

export default class Weixin {
  /**
   * 发送请求oauth的回调函数
   * @param code
   * @returns {*}
   */
  oauthCallback (code) {
    // const requestUrl = `${urls.WEIXIN_OUATH_URL}?code=${code}`
    return http.get(urls.WEIXIN_OUATH_URL, { params: { code: code } })
  }

  /**
   * 产生对应的oauth token请求
   * @returns {*}
   */
  oauthToken () {
    const formdata = new FormData()
    formdata.append('client_id', constants.oauth.CLIENT_ID)
    formdata.append('client_secret', constants.oauth.CLIENT_SECRET)
    formdata.append('grant_type', 'client_credentials')
    return http.post(urls.TOKEN_URL, formdata)
  }

  /**
   * 配置jssdk参数
   * @param url
   * @returns {*}
   */
  jsConfig (url) {
    return http.get(urls.JSAPI_URL, { params: { url: url } })
  }
}
