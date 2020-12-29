<template>
  <div id="app">
    <div class="waterMarker" v-waterMarker="{text:'miss-tree技术提供',textColor:'rgba(180, 180, 180, 0.5)'}"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  p{
    line-height: 25px;
  }
  h3{
    text-align: center;
    font-size: 20px;
  }
  .waterMarker{
    pointer-events: none;
    width:  100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
  }
</style>
