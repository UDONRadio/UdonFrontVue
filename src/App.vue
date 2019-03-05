<template>
  <v-app id="app" fixed>
    <v-content>
      <v-container fluid fill-height ma-0 pa-0>
        <v-layout row fill-height align-space-around justify-space-around>
          <v-flex md2 hidden-md-down>
            <Left/>
          </v-flex>
          <v-flex md8 sm12>
            <v-content transition="slide-x-transition" style="width: 100%;height: 100%;">
              <router-view></router-view>
            </v-content>
          </v-flex>
          <v-flex md2 hidden-md-down>
            <Right/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Left from './components/left.vue'
import Right from './components/right.vue'

export default {
  name: 'App',
  components: {
    Left,
    Right
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
  .container{
    height: 100%;
    background: url('./assets/pates-top.svg') top left no-repeat fixed ,url('./assets/pates-bottom.svg') no-repeat bottom left fixed ,url('./assets/bol.svg') no-repeat  bottom right fixed;
    background-size: 37% , 70% 20% , 30%;
  }
}

</style>
