<template>
  <page class="home">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-text slot="start">{{$t('app.name')}}</ion-text>
        <ion-searchbar
          color="white"
          autocomplete
          mode="ios"
          showCancelButton
          :cancelButtonText="$t('app.cancel')"
          :placeholder="searchPlaceholder"
          :value="searchKeyword"
          @ionFocus="$router.push({name: 'search'})"
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>
  </page>
</template>

<script>
import { mapGetters } from 'vuex'
import { randomNumber } from '../../utils/NumberUtils'
import Page from '../../components/Page'

export default {
  name: 'Home',
  components: { Page },
  data () {
    return {
      searchPlaceholder: 'Reading',
      searchKeyword: '',
      searchKeywordInterval: null
    }
  },
  methods: {
    ...mapGetters(['roles']),
    keywords: function () {
      this.searchKeywordInterval = window.setInterval(() => {
        const keywordArray = ['Cooking', 'Reading', 'Moives', 'Testing', 'Eating', 'Sleeping', 'Working', 'Running', 'Dancing']
        this.searchPlaceholder = keywordArray[randomNumber(0, keywordArray.length - 1)]
      }, 5000)
    }
  },
  mounted () {
    this.keywords()
    console.log(this.roles())
  },
  destroyed () {
    window.clearInterval(this.searchKeywordInterval)
  }
}
</script>

<style scoped>
  .light {
    --background: #ffff;
    --color: #ffff;
  }
</style>
