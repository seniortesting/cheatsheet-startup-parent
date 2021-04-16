<template>
  <page-with-header :title="$t('usercenter.settings.title')" class="setting">
    <ion-content padding>
      <ion-list>
        <ion-item>
          <ion-label>消息通知</ion-label>
          <ion-toggle slot="end"></ion-toggle>
        </ion-item>
        <ion-item button @click="$router.push({name: 'language'})">
          <ion-label>语言设置</ion-label>
        </ion-item>
        <ion-item button @click="$router.push({name: 'about'})">
          <ion-label>关于</ion-label>
        </ion-item>
      </ion-list>
      <ion-button v-show="islogged" expand="block" color="danger" @click="logout">退出登录</ion-button>
    </ion-content>
  </page-with-header>
</template>

<script>
import PageWithHeader from '../../../components/PageWithHeader'
import User from '../../../api/services/user'
import { mapGetters } from 'vuex'

const user = new User()
export default {
  name: 'SHome',
  components: { PageWithHeader },
  methods: {
    logout: function () {
      user.logout().then(() => {
        this.$router.push({ name: 'home' })
      })
    }
  },
  computed: {
    ...mapGetters(['islogged'])
  },
  beforeRouteLeave (to, from, next) {
    // 保存页面相关信息
    console.log(`即将离开当前页面`)
    next()
  }
}
</script>

<style scoped>

</style>
