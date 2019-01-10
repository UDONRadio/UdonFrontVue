<template>
  <v-app id="app">
    <v-container fluid id="comtainer">
      <v-layout column fill-height>
        <v-flex sm1 md1 >
        </v-flex>
        <v-flex sm10 md10 >
          <v-layout row fill-height>
            <v-flex md2 class="hidden-sm-and-down" >
              <Left/>
            </v-flex>
            <v-flex sm12 md8 >
              <v-layout column fill-height id="carre">
                <v-flex xs3>
                  <Nav></Nav>
                </v-flex>
                <v-flex xs9>
                  <router-view></router-view>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex md2 class="hidden-sm-and-down">
              <Right />
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md1 >  
        </v-flex>
      </v-layout>
      <v-btn fab fixed bottom right icon>
        <v-icon large>account_circle</v-icon>
      </v-btn>
    </v-container>
  </v-app>
</template>

<script>

import Left from './views/Left.vue'
import Right from './views/Right.vue'
import Nav from './views/Nav.vue'

export default {
  name: 'App',
  components: {
    Left,
    Right,
    Nav
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
  background-image: url("assets/bgCybernet.jpg");
  .container{
    padding: 0px;
    margin : 0px;
  }
  #carre{
    .flex{
      margin: 5px;
    }
  }
}
</style>

