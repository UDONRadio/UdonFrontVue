<template>
  <v-app id="app" fixed>
    <v-content>
      <v-container fluid fill-height ma-0 pa-0>
          <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { client } from './services/index.js'

export default {
  name: 'App',
  components: {
    //
  },
  data () {
    return {
      //
    }
  },
  created () {
    if (localStorage.jwt && localStorage.jwt !== 'null') {
      console.log('token jwt')
      client.authenticate({
        strategy: 'jwt',
        accessToken: localStorage.jwt
      })
        .then(response => {
          console.log('authentication in progress')
          return client.passport.verifyJWT(response.accessToken)
        })
        .then(payload => {
          console.log('authentication in progress')
          return client.service('users').get(payload.userId)
        })
        .then(user => {
          console.log('authentication in progress')
          localStorage.user = this.$store.state.user = user
          this.$store.state.user.logged = true
        })
        .catch((e) => {
          console.log(e)
        })
    } else if (localStorage.username) {
      console.log('anonymous user')
      this.$store.state.user = {
        username: localStorage.username,
        logged: false
      }
    } else {
      console.log('first connexion')
      let a = Math.floor(Math.random() * Math.floor(9999))
      this.$store.state.user = {
        username: `anon${a}`,
        logged: false
      }
      localStorage.username = `anon${a}`
    }
    client.on('authenticated', () => {
      console.log('authenticate')
    })
    client.on('logout', () => {
      console.log('logout')
      this.$store.state.user = null
      localStorage.jwt = null
      localStorage.user = null
      localStorage.username = null
      let a = Math.floor(Math.random() * Math.floor(9999))
      this.$store.state.user = {
        username: `anon${a}`,
        logged: false
      }
      localStorage.username = `anon${a}`
    })
  }
}
</script>

<style lang="less" scoped>
#app{
  width: 100%;
  overflow:hidden;

  .container{
    height: 100%;
  }

}

</style>
