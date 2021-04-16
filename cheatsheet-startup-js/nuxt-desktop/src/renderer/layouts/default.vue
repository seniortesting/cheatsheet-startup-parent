<template>
  <div class="app">
    <div class="content">
      <nuxt />
    </div>
    <StatusBar />
  </div>
</template>
<script>
import StatusBar from '@/components/StatusBar'
export default {
  components: { StatusBar }
}
</script>
<style>
  body,html {
    height: 100%
  }
  div#__nuxt, #__layout, #__layout>div { min-height: 100vh; }
  .app {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .content {
    flex: auto 1 1;
    height: 100%;
    overflow: hidden;
  }

</style>
