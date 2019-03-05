<template>
  <v-app id="app">
    <v-content>
      <v-container fluid  fill-height  ma-0 pa-0>
        <v-content transition="slide-x-transition" id="container">
          <audio autoplay="true" id="media" preload="metadata" src="https://udonradio.fr:8080/udon.mp3?cache-buster=1551282691430" title="https://udonradio.fr:8080/udon.mp3?cache-buster=1551282691430"><p>Your browser does not support the <code>audio</code> element.</p></audio>
          <router-view></router-view>
        </v-content>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    //
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="less" scoped>
#app{
  width: 100%;
  background-color: #def2fd;
  overflow:hidden;
  #container{
    height: 100%;
  }
}

</style>
