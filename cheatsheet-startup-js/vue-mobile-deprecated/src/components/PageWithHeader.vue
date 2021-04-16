<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="home"></ion-back-button>
        </ion-buttons>
        <ion-title>{{title}}</ion-title>
        <ion-label v-if="showText" slot="end" @click="clickItem">{{rightText}}</ion-label>
      </ion-toolbar>
    </ion-header>
    <slot></slot>
  </ion-page>
</template>

<script>
export default {
  name: 'PageWithHeader',
  props: {
    // 标题
    title: {
      type: String,
      require: true,
      default: ''
    },
    showText: {
      type: Boolean,
      require: false,
      default: false
    },
    rightText: {
      type: String,
      require: true,
      default: ''
    }
  },
  methods: {
    clickItem: function () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
