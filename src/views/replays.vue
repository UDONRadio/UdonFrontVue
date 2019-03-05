<template>
  <v-layout row fill-height align-space-around justify-space-around id="home">
    <v-flex md3 mr-3>
      <left/>
    </v-flex>
    <v-flex md9  ma-0>
      <v-layout column fill-height justify-start >
        <v-flex ma-0 md2>
          <navbar/>
        </v-flex>
        <v-flex md8 ma-0>
          replays
        </v-flex>
        <v-flex md2>
          <recre/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md3 ml-3>
      <right/>
    </v-flex>
  </v-layout>
</template>

<script>
import left from '../components/left.vue'
import navbar from './navbar.vue'
import recre from '../components/recre.vue'
import right from '../components/right.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    recre,
    left,
    right
  }
}
</script>

<style scoped lang="less">
  #home{
    width: 100%;
    height: 100%;
    background: url('../assets/pates-top.svg') top left no-repeat fixed ,url('../assets/pates-bottom.svg') no-repeat bottom left fixed ,url('../assets/bol.svg') no-repeat  bottom right fixed;
    background-size: 37% , 70% 20% , 30%;
  }
  .flex{
  }
</style>
