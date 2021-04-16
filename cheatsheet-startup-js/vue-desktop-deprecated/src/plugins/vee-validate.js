import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import i18n from './i18n'
import en from 'vee-validate/dist/locale/en'
import zhCN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate, {
  // type=number 错误： The issue was caused by vee-validate not properly identifying the number type of inputs as a textual type
  // which caused it to use the change event instead of the default input event. The fix should be out with the next release this week.
  // https://baianat.github.io/vee-validate/guide/inferred-rules.html#inferred-rules-reference
  useConstraintAttrs: false,
  i18nRootKey: 'validations', // 对应i18n中的根节点名称
  i18n,
  dictionary: {
    'en-us': en,
    'zh-cn': zhCN
  }
})

// 全局的设置一些自定义的规则
Validator.extend('mobile', {
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})
// 密码
Validator.extend('pwd', {
  validate: value => {
    return value.length >= 6
  }
})
// 重复密码
Validator.extend('checkpwd', {
  validate: (value, [otherValue]) => {
    return value.length >= 6 && otherValue === value
  }
})
