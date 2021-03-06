import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import replays from './views/replays.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/replays',
      name: 'replays',
      component: replays,
      props: (route) => ({ em: route.params.em, ep: route.params.ep })
    }
  ]
})
