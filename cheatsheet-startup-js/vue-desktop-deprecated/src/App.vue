<template>
  <a-locale-provider :locale="locale">
    <div id="root">
      <transition>
        <router-view/>
      </transition>
    </div>
  </a-locale-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { AppDeviceEnquire } from './mixins/app'

export default {
  name: 'app',
  mixins: [AppDeviceEnquire],
  data () {
    return {
      locale: zhCN
    }
  }
}
</script>
<style lang="less">
  #root {
    height: 100%;
  }
</style>
