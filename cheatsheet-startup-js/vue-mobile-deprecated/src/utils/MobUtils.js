import config from '../config'
import { loadScript } from './DomUtils'

const shareConfig = function () {
  // eslint-disable-next-line no-undef
  const scriptUrl = 'http://f1.webshare.mob.com/code/mob-share.js'
  loadScript(global.mobShare, scriptUrl)
}

const weixinShare = function (url, title, description, pic, reason) {
  // eslint-disable-next-line no-undef
  mobShare.config({
    appkey: config.mob.appkey, // appkey
    params: {
      url: url, // 分享链接
      title: title, // 分享标题
      description: description, // 分享内容
      pic: pic, // 分享图片，使用逗号,隔开
      reason: reason// 自定义评论内容，只应用与QQ,QZone与朋友网
    },
    /**
     * 分享时触发的回调函数
     * 分享是否成功，目前第三方平台并没有相关接口，因此无法知道分享结果
     * 所以此函数只会提供分享时的相关信息
     *
     * @param {String} plat 平台名称
     * @param {Object} params 实际分享的参数 { url: 链接, title: 标题, description: 内容, pic: 图片连接 }
     */
    callback: function (plat, params) {
    }

  })
  // eslint-disable-next-line no-undef
  const weixin = mobShare('weixin')
  weixin.send()
}

export { shareConfig, weixinShare }
