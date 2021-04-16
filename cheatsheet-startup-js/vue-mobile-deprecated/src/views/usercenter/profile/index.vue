<template>
  <page-with-header title="个人资料" class="profile">
    <ion-content padding>
      <ion-row>
        <ion-col>
          <ion-label></ion-label>
        </ion-col>
      </ion-row>
      <ion-list>
        <ion-item button>
          <ion-label>头像</ion-label>
          <ion-avatar><img :src="userInfo.avatar"/></ion-avatar>
        </ion-item>
        <ion-item>
          <ion-label>昵称</ion-label>
          <ion-note>{{userInfo.nickName}}</ion-note>
        </ion-item>
        <ion-item button>
          <ion-label>性别</ion-label>
          <ion-note>{{userInfo.sex? userInfo.sex: '未填'}}</ion-note>
        </ion-item>
        <ion-item button>
          <ion-label>城市</ion-label>
          <ion-note>{{userInfo.address? userInfo.address: '未填'}}</ion-note>
        </ion-item>
        <ion-item button>
          <ion-label>简介</ion-label>
          <ion-note>{{userInfo.desc?userInfo.desc: '未填'}}</ion-note>
        </ion-item>
      </ion-list>
      <ion-list>
        <ion-list-header>认证信息</ion-list-header>
        <ion-item>
          <ion-label>实名认证</ion-label>
          <ion-button v-if="!identified" slot="end" color="primary" @click="identifiedNow">申请认证</ion-button>
          <ion-note v-else>已认证</ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  </page-with-header>
</template>

<script>
import PageWithHeader from '../../../components/PageWithHeader'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: { PageWithHeader },
  data () {
    return {
      identified: false
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    identifiedNow: function () {
      this.identified = !this.identified
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
