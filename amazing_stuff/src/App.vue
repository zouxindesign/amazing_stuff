<template>
  <div id="app">
    <router-view/>
    <!-- <myfooter/> -->
  </div>
</template>

<script>
import myfooter from '@/components/footer/footer'
export default {
  name: 'App',
  components:{
    myfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-bottom: 50px;
}
</style>
