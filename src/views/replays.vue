<template>
  <v-layout row fill-height align-space-around justify-space-around id="replays" >
    <div id='background' ></div>
    <v-flex md2 hidden-md-down>
      <Left></Left>
    </v-flex>
    <v-flex md8 sm12>
      <v-content align-content-space-around transition="slide-x-transition" style="width: 100%;height: 100%;">
        <v-layout column fill-height align-space-around justify-space-around >
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
          <v-flex md2>
            <v-layout row fill-height align-space-around justify-center>
              <v-flex md1 offset-md5>
                <v-layout column fill-height align-space-around justify-end>
                  <v-flex md6 >
                    <Login></Login>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-content>
    </v-flex>
    <v-flex md2 hidden-md-down>
      <Right/>
    </v-flex>
  </v-layout>
</template>

<script>
import Mixcloud from '../components/mixcloud.vue'
import Emissions from '../components/emissions.vue'
import Emission from '../components/emission.vue'
import { emission } from '../services/index.js'
import Left from '../components/left.vue'
import Right from '../components/right.vue'
import Login from '../components/login.vue'


export default {
  name: 'Home',
  components: {
    Mixcloud,
    Emission,
    Emissions,
    Right,
    Left,
    Login
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
    background-color: #def2fd;
  }
  .flex{
    border: solid black 1px;
  }
  #background{
    position: absolute;
    width:100%;
    height: 100%;
    background: url('../assets/pates-top.svg') top left no-repeat fixed ,url('../assets/pates-bottom.svg') no-repeat bottom left fixed ,url('../assets/bol.svg') no-repeat  bottom right fixed;
    background-size: 37% , 70% 20% , 30%;
    z-index: 1;
    pointer-events: none;
  }
</style>
