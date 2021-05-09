<template>
  <div id="app">
    <div class="waterMarker" v-waterMarker="{text:'miss-tree技术提供',textColor:'rgba(180, 180, 180, 0.5)'}"></div>
    <router-view />
  </div>
</template>

<script>
import { setToken } from '@/utils/auth' // get token from cookie
export default {
  name: 'App',
  created(){
    let adminToken={
      roles: ['admin'],  name: 'Super Admin',
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    }
    setToken('admin',adminToken)
  }
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
