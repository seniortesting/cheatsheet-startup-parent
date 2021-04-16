<template>
  <page class="login">
    <ion-header v-show="showHeader">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="home"></ion-back-button>
        </ion-buttons>
        <ion-title>登录</ion-title>
      </ion-toolbar>
    </ion-header>
    <login-register></login-register>
  </page>
</template>

<script>
import ionic from '../mixins/ionic'
import LoginRegister from '../components/LoginRegister'
import Page from '../components/Page'

export default {
  name: 'home',
  components: { Page, LoginRegister },
  mixins: [ionic],
  data () {
    return {
      showHeader: false,
      buttonDisabled: true,
      login: {
        username: '',
        password: ''
      },
      password: ''
    }
  },
  methods: {
    showSecondModal: function () {
    },
    closeModal: function () {
      this.hideModal()
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
  .login-logo {
    padding: 5px 0;
    min-height: 100px;
    text-align: center;
  }

  .login-logo img {
    max-width: 150px;
  }
</style>
