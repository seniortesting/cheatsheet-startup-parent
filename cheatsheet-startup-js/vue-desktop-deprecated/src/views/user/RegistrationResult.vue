<template>
  <result
    :isSuccess="true"
    :content="false"
    :title="title"
    :description="description">

    <template slot="action">
      <a-button size="large" type="primary" @click="openEmail">查收邮件激活账号</a-button>
      <a-button size="large" style="margin-left: 8px" @click="goHomeHandle">直接登录</a-button>
    </template>
    <template slot="default">
      <h3>没有收到激活邮件？</h3>
      <h5>1、请检查邮件是否在垃圾邮件或广告邮件中</h5>
      <div><h5>2、若您在30分钟后仍未收到激活邮件，请点击<a size="sm" type="primary">重发激活邮件</a></h5></div>
      <div><h5>3、如果仍未成功，请 <a>联系客服</a></h5></div>
    </template>
  </result>
</template>

<script>
import { Result } from '@/components'

export default {
  name: 'RegisterResult',
  components: {
    Result
  },
  data () {
    return {
      description: '激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。',
      form: {}
    }
  },
  computed: {
    title () {
      // eslint-disable-next-line
      const v = this.form && this.form.email || 'xxx'
      const title = `你的账户：${v} 注册成功`
      return title
    }
  },
  created () {
    this.form = this.$route.params
  },
  methods: {
    openEmail () {
      // eslint-disable-next-line
      const v = this.form && this.form.email || 'xxx'
      const url = v.substr(v.indexOf('@'))
      window.open(url, '_blank')
    },
    goHomeHandle () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>

</style>
