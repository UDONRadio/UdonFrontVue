<template>
  <v-app id="app" fixed>
    <v-content>
      <v-container fluid fill-height ma-0 pa-0>
        <v-layout row fill-height align-space-around justify-space-around>
          <div id='background' ></div>
          <v-flex md2 hidden-md-down>
            <Left/>
          </v-flex>
          <v-flex md8 sm12>
            <v-content align-content-space-around transition="slide-x-transition" style="width: 100%;height: 100%;">
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
import { client } from './services/index.js'

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
  },
  created () {
    client.on('authenticated', () => {
      console.log('authenticate')
      this.$store.state.user = client.get('user')
    })
    client.on('logout', () => {
      console.log('logout')
      this.$store.state.user = null
    })
    client.authenticate()
      .then(response => {
        console.log('authentication in progress')
        return client.passport.verifyJWT(response.accessToken)
      })
      .then(payload => {
        console.log('authentication in progress')
        return client.service('users').get(payload.userID)
      })
      .then(user => {
        console.log('authentication in progress')
        client.set('user', user)
        console.log(client.get('user'))
      })
      .catch((e) => {
        this.$store.commit('naming')
        console.log(e)
      })
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
  }
  #background{
    position: absolute;
    width:100%;
    height: 100%;
    background: url('./assets/pates-top.svg') top left no-repeat fixed ,url('./assets/pates-bottom.svg') no-repeat bottom left fixed ,url('./assets/bol.svg') no-repeat  bottom right fixed;
    background-size: 37% , 70% 20% , 30%;
    z-index: 1;
    pointer-events: none;
  }
}

</style>
