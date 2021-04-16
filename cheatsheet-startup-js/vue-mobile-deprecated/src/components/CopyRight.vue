<template>
  <div class="footer">
    <ion-text>
      Copyright © {{new Date().getFullYear()}} {{$t('app.name')}}
    </ion-text>
  </div>
</template>

<script>
export default {
  name: 'CopyRight'
}
</script>

<style scoped>
  .footer {
    position: absolute;
    left: 0;
    text-align: center;
    bottom: 10px;
    font-size: 14px;
    color: #8e8e8e;
    width: 100%;
    padding: 0;
  }
</style>
