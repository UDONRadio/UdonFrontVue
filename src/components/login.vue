<template>
  <div class="text-center-md" id="login">
    <v-btn
      color="red lighten-2"
      @click.stop="logout()"
      v-if="$store.state.user.logged"
    >
      {{$store.state.user.username}}
    </v-btn>
    <v-btn
      color="red lighten-2"
      @click.stop="dialog = true"
      v-else
    >
      {{$store.state.user.username}}
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card
        class="mx-auto"
        max-width="500"
      >
        <v-card-title class="title font-weight-regular justify-left">
          <span>{{ tittle }}</span>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>

              <v-text-field
                label="email"
                v-model="email"
                type="email"
              ></v-text-field>
              <v-text-field
                label="password"
                v-model="password"
                type="password"
              ></v-text-field>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn
                  flat
                  @click="step++"
                >
                  Signup
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  depressed
                  @click="login"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-window-item>
          <v-window-item :value="2">
            <v-card-text>
              <v-text-field
                label="email"
                v-model="email"
                type="email"
              ></v-text-field>
              <v-text-field
                label="username"
                v-model="username"
                type="email"
              ></v-text-field>
              <v-text-field
                label="password"
                v-model="pass2"
                type="password"
              ></v-text-field>
              <v-text-field
                label="Confirmation password"
                type="password"
              ></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                flat
                @click="step--"
              >
                Login
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                depressed
                @click="signup"
              >
                Signup
              </v-btn>
            </v-card-actions>
          </v-window-item>
        </v-window>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { client, user } from '../services/index.js'

export default {
  name: 'login',
  data () {
    return {
      dialog: false,
      step: 1,
      password: null,
      pass2: null,
      email: null,
      username: null
    }
  },
  methods: {
    login () {
      client.authenticate({
        strategy: 'local',
        email: this.email,
        password: this.password
      })
        .then((response) => {
          localStorage.jwt = response.accessToken
          return client.passport.verifyJWT(response.accessToken)
        })
        .then((payload) => {
          return client.service('users').get(payload.userId)
        })
        .then((user) => {
          client.set('user', user)
          localStorage.user = this.$store.state.user = user
          this.$store.state.user.logged = true
          console.log(this.$store.state.user)
          this.dialog = false
        })
        .catch((e) => {
          console.log(e)
        })
    },
    signup () {
      user.create({ username: this.username, email: this.email, password: this.pass2 })
      this.email = this.password = this.username = this.pass2 = ''
      this.step++
    },
    logout () {
      client.logout()
    }
  },
  computed: {
    tittle () {
      switch (this.step) {
        case 1: return 'Login'
        case 2: return 'Signup'
        default: return 'Bienvenue dans la radio'
      }
    }
  }
}
</script>

<style scoped lang="less">
#login{
}
</style>
