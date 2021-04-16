<template>
  <div class="page">
    <div class="options">
      <ul class="list">
        <li class="item" @click="increaseVolumn">
          <button>音量调节</button>
        </li>
        <li class="item">
          <button>暂停</button>
        </li>
      </ul>
    </div>
    <d-player ref="player" class="player" :options="options" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      options: {}
    }
  },
  created () {
    this.initPlayer()
  },
  methods: {
    initPlayer () {
      this.options = {
        logo: 'https://i.loli.net/2019/06/06/5cf8c5d94521136430.png',
        video: {
          url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
          pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
          thumbnails: 'https://i.loli.net/2019/06/06/5cf8c5d9cec8510758.jpg',
          type: 'auto'
        },
        subtitle: {
          url: 'https://s-sh-17-dplayercdn.oss.dogecdn.com/hikarunara.vtt',
          type: 'webvtt',
          fontSize: '25px',
          bottom: '10%',
          color: '#b7daff'
        },
        danmaku: {
          id: '9E2E3368B56CDBB4',
          api: 'https://api.prprpr.me/dplayer/',
          token: 'tokendemo',
          maximum: 3000,
          user: 'DIYgod',
          bottom: '15%',
          unlimited: true
        }
      }
    },
    increaseVolumn () {
      this.$refs.player.dp.volume(5, true, true)
    }
  }
}
</script>

<style lang="scss" scoped>
  .player {
    height: 500px;
  }
.options {
  .list {
    display: flex;
    flex-direction: row;
    list-style: none;

    .item {
      padding: 10px 20px;
    }
  }
}
</style>
