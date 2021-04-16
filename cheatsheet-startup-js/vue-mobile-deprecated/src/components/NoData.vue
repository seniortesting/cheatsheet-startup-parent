<template>
  <div>
    <br><br><br><br><br><br><br>
    <div class="text-align-center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-nodata"></use>
      </svg>
      <div class="text">{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoData',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .icon {
    width: 8em;
    height: 8em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
