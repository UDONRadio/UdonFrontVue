<template>
  <v-layout column fill-height align-space-around justify-space-around id="replays" >
    <v-flex md8>
      <v-layout row fill-height justify-space-between >
        <v-flex md7 pr-3>
          <v-layout column fill-height justify-space-between align-space-between>
            <v-flex md11 mb-1>
              <Emissions v-for="item in $store.state.emission" :key="item._id" :emission="item"></Emissions>
            </v-flex>
            <v-flex md1 mt-2>
              <Mixcloud></Mixcloud>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md5 pl-3>
          <Emission></Emission>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Mixcloud from '../components/mixcloud.vue'
import Emissions from '../components/emissions.vue'
import Emission from '../components/emission.vue'
import { emission } from '../services/index.js'

export default {
  name: 'Home',
  components: {
    Mixcloud,
    Emission,
    Emissions
  },
  data () {
    return {
      //
    }
  },
  props: ['ep', 'em'],
  beforeRouteEnter (to, from, next) {
    emission.find({
      query: {
        $limit: 1000,
        $sort: {
          name: 1
        }
      }
    }).then((response) => {
      next((vm) => {
        vm.setEmmision(response.data)
      })
    }).catch((e) => {
      console.log(e)
      next({ name: 'home' })
    })
  },
  methods: {
    setEmmision (emissions) {
      this.$store.state.emission = emissions
    }
  }
}
</script>

<style scoped lang="less">
  #replays{
  }
  .flex{
    border: solid black 1px;
  }
</style>
