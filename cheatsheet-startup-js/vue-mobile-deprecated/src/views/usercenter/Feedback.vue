<template>
  <page class="feedback">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="home"></ion-back-button>
        </ion-buttons>
        <ion-title>{{$t('usercenter.feedback.title')}}</ion-title>
        <ion-spinner v-if="pendingSubmit" slot="end"></ion-spinner>
        <ion-label v-else slot="end" @click="sendFeedback">{{$t('usercenter.feedback.send')}}</ion-label>
      </ion-toolbar>
    </ion-header>
    <ion-content no-padding>
      <ion-list>
      <ion-list-header>{{$t('usercenter.feedback.headertitle')}}</ion-list-header>
      <ion-textarea style="margin: 15px 15px;color: #444;height: 300px;box-sizing: border-box;background-color: #fff;"
                    rows="9"
                    autofocus
                    :value="content"
                    @ionChange="content = $event.target.value"
                    :placeholder="$t('usercenter.feedback.placeholder')"></ion-textarea>
      </ion-list>
    </ion-content>
  </page>
</template>

<script>

import storage from '../../store/storage'
import keys from '../../store/keys'
import Feedback from '../../api/services/feedback'
import ionic from '../../mixins/ionic'
import Page from '../../components/Page'

const feedback = new Feedback()
export default {
  name: 'index',
  components: { Page },
  mixins: [ionic],
  data () {
    return {
      pendingSubmit: false,
      content: ''
    }
  },
  methods: {
    sendFeedback: function () {
      const self = this
      if (self.content.length > 0) {
        self.pendingSubmit = true
        const userInfos = storage.getItem(keys.LOGIN_INFO)
        const data = {
          openid: userInfos ? userInfos.openid : '',
          content: this.content
        }
        this.showLoading('提交中...').then(loading => {
          loading.present()
          feedback.submitFeedback(data).then((res) => {
            loading.dismiss()
            self.pendingSubmit = false
            const resCode = res.data.code
            if (resCode === 1000) {
              const data = res.data.data
              // 返回上一个页面
              self.$router.go(-1)
              self.showToastMessage(data.message)
            }
          }).catch(error => {
            console.log(`提交反馈失败: ${JSON.stringify(error)}`)
            loading.dismiss()
            self.pendingSubmit = false
          })
        })
      } else {
        this.showToastMessage(this.$t('usercenter.feedback.empty'))
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .feedback {
    .block-title {
      margin: 15px 15px;
    }
  }
</style>
