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
    if (localStorage.jwt !== 'null' && localStorage.jwt !== undefined) {
      console.log('already logged user trying to connect')
      let a = localStorage.jwt
      client.authenticate({
        strategy: 'jwt',
        accessToken: a
      })
        .then(response => {
          localStorage.jwt = response.accessToken
          return client.passport.verifyJWT(response.accessToken)
        })
        .then(payload => {
          return client.service('users').get(payload.userId)
        })
        .then(user => {
          client.set('user', user)
          this.$store.state.user = user
          this.$store.state.user.logged = true
        })
        .catch(error => {
          console.log('Error authenticating!', error)
        })
    } else if (localStorage.username) {
      console.log('user not logged but anon')
      this.$store.state.user.username = localStorage.username
      this.$store.state.user.logged = false
    } else {
      console.log('first connection')
      let a = Math.floor(Math.random() * Math.floor(9999))
      this.$store.state.user = {
        username: `anon${a}`
      }
      localStorage.username = this.$store.state.user.username
    }
    client.on('authenticated', () => {
      console.log('authenticated')
    })
    client.on('logout', () => {
      console.log('logout')
      localStorage.user = null
      localStorage.username = null
      localStorage.jwt = null
      let a = Math.floor(Math.random() * Math.floor(9999))
      this.$store.state.user = {
        username: `anon${a}`,
        logged: false
      }
      localStorage.username = this.$store.state.user.username
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
