import Vue from 'vue'
import Vuex from 'vuex'
import { client } from './services/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    message: []
  },
  mutations: {
    naming () {
      let a = Math.floor(Math.random() * Math.floor(9999))
      this.state.user = `anon${a}`
    },
    setterName () {
      let a = client.get('user')
      this.state.user = a.username
    }
  }
})
