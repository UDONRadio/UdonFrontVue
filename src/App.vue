<template>
  <v-app id="app">
    <v-content>
      <v-container fluid  fill-height id="container" ma-0 pa-0>
        <router-view></router-view>
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
  #container{
    z-index:1;
    position: absolute;
  }
}
</style>
