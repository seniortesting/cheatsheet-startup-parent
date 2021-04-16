<template>
  <page-with-header :title="$t('usercenter.settings.language.title')" class="language">
    <ion-content padding>
      <ion-list>
        <ion-radio-group @ionChange="changeLanguage" :value="currentlang">
          <ion-list-header>
            <ion-label>{{$t('usercenter.settings.language.headertitle')}}</ion-label>
          </ion-list-header>
          <ion-item>
            <ion-label>English</ion-label>
            <ion-radio slot="end" color="primary" value="en-us"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>简体中文</ion-label>
            <ion-radio slot="end" color="primary" value="zh-cn"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
    </ion-content>
  </page-with-header>
</template>

<script>
import { getLangName, setLangName } from '../../../plugins/i18n.js'
import ionic from '../../../mixins/ionic'
import PageWithHeader from '../../../components/PageWithHeader'

export default {
  name: 'language',
  components: { PageWithHeader },
  mixins: [ionic],
  data () {
    return {
      title: '语言',
      currentlang: 'zh-cn'
    }
  },
  created () {
    this.currentlang = getLangName()
  },
  methods: {
    changeLanguage (event) {
      const lang = event.detail.value
      const notSwitch = this.currentlang === lang
      if (!notSwitch) {
        setLangName(lang)
      }
      this.showToastMessage('切换语言成功!')
    }
  }
}
</script>

<style scoped>

</style>
