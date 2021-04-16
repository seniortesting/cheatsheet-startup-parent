<template>
  <page class="usercenter">
    <ion-content no-padding>
      <ion-button
        v-if="!islogged"
        color="danger" expand="block" shape="round" @click="$router.push({name: 'login'})">
        {{$t('usercenter.loginButton')}}
      </ion-button>
      <ion-card v-else>
        <ion-card-header>
          <ion-item button @click="$router.push({name: 'profile'})">
            <ion-label>
              <h3>{{userInfo.nickName}}</h3>
              <p>性别：女</p>
              <p>浦东新区,民生路</p>
            </ion-label>
            <ion-avatar slot="end">
              <img :src="userInfo.avatar">
            </ion-avatar>
          </ion-item>
        </ion-card-header>
        <ion-card-content>

        </ion-card-content>
        <ion-grid text-center>
          <ion-row style="margin: 0px 10px">
            <ion-col>
              <h5>10</h5>
              <ion-text>点赞</ion-text>
            </ion-col>
            <ion-col>
              <h5>30</h5>
              <ion-text>关注</ion-text>
            </ion-col>
            <ion-col>
              <h5>50</h5>
              <ion-text>浏览</ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <ion-list>
        <ion-item button @click="$router.push({name: 'notification'})">
          <ion-label>
            {{$t('usercenter.options.notification')}}
          </ion-label>
        </ion-item>
        <ion-item button @click="$router.push({name: 'feedback'})">
          <ion-label>
            {{$t('usercenter.options.feedback')}}
          </ion-label>
        </ion-item>
        <ion-item button @click="shareApp">
          <ion-label>{{$t('usercenter.options.share')}}</ion-label>
        </ion-item>
        <ion-item button @click="$router.push({ name: 'setting' })">
          <ion-label>
            {{$t('usercenter.options.setting')}}
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </page>
</template>

<script>
import { mapGetters } from 'vuex'
import { Plugins } from '@capacitor/core'
import config from '../../config'
import Page from '../../components/Page'

const { Share } = Plugins
export default {
  name: 'UserCenter',
  components: { Page },
  data () {
    return {}
  },
  methods: {
    shareApp: async function () {
      if (config.isWeb) {

      } else {
        await Share.share({
          title: 'Share Beep!',
          text: 'Help others to keep safe',
          url: 'https://beep.modus.app/',
          dialogTitle: 'Spread the word'
        })
      }
    }
  },
  computed: {
    ...mapGetters(['islogged', 'userInfo'])
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
