export default {
  // 此处是对应的vee-validate中的字段的汉化
  validations: {
    attributes: {
      login: {
        username: '用户名',
        passwd: '密码'
      },
      forget: {
        phone: '手机号',
        code: '验证码',
        passwd: '密码'
      },
      register: {
        username: '用户名',
        code: '短信验证码',
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
    name: 'Vue Mobile',
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
  login: {
    title: '登录'
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
  discover: {
    name: '发现',
    title: '发现'
  },
  contact: {
    name: '联系人',
    title: '联系人'
  },
  usercenter: {
    name: '我的',
    title: '我的',
    notlogged: '未登录',
    loginButton: '登录',
    options: {
      notification: '消息通知',
      feedback: '用户反馈',
      share: '分享',
      setting: '系统设置'
    },
    profile: {
      title: '资料',
      avatar: '头像',
      name: '昵称',
      gender: '性别',
      location: '位置'
    },
    feedback: {
      title: '反馈',
      send: '保存',
      success: '提交成功,感谢您的反馈结果!',
      headertitle: '请输入你要反馈的内容',
      placeholder: '输入内容...',
      empty: '内容不能为空!'
    },
    notification: {
      title: '我的消息',
      empty: '您当前没有任何消息!'
    },
    settings: {
      headertitle: '基本设置',
      title: '设置',
      options: {
        receive_notification: '消息通知',
        language: '语言',
        about: '关于'
      },
      language: {
        title: '语言',
        headertitle: '切换语言'
      },
      about: {
        title: '关于',
        version: '版本',
        website: '网站',
        email: '邮箱',
        wechat: '微信公众号'
      }
    }
  }
}
