export default {
  // 此处是对应的vee-validate中的字段的汉化
  validations: {
    attributes: {
      login: {
        username: '用户名',
        passwd: '密码',
        passwd2: '确认密码'
      }
    },
    // 参考 ： https://github.com/baianat/vee-validate/blob/482c643b99546173845c01d4b0af651ae494c050/locale/en.js#L14-L18
    // https://github.com/baianat/vee-validate/issues/1607
    messages: {
      mobile: '{0}必须是11位合法手机号码',
      pwd: '{0}长度最小6位',
      checkpwd: '两次输入的密码不相同'
    }
  },
  app: {
    name: 'Vue Desktop',
    back: '',
    close: '关闭',
    save: '保存',
    ok: '确定',
    cancel: '取消',
    male: '男',
    female: '女',
    unknown: '未知',
    loading: '数据加载中...',
    nodata: '没有数据',
    message: {
      success: '成功!'
    }
  },
  notfound: {
    title: '没有找到你要访问的资源'
  },
  home: {
    name: '首页',
    title: '首页',
    like: '赞',
    comment: '评论',
    share: '分享',
    empty: '没有数据',
    feedback: '感谢您的反馈，我们将会尽快处理!'
  },
  login: {
    title: '登录'
  }
}
