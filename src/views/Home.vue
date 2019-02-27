<template>
  <v-layout row fill-height align-space-around justify-space-around id="home">
    <v-flex md3 mr-3>
      <left/>
    </v-flex>
    <v-flex md9  ma-0>
      <Center/>
    </v-flex>
    <v-flex md3 ml-3>
      <right/>
    </v-flex>
  </v-layout>
</template>

<script>
import Center from './Center.vue'
import left from '../components/left.vue'
import right from '../components/right.vue'

export default {
  name: 'Home',
  components: {
    Center,
    left,
    right
  }
}
</script>

<style scoped lang="less">
#home{
  width: 100%;
  background: url('../assets/pâtes (haut).svg') top left no-repeat fixed ,url('../assets/pâtes (bas).svg') no-repeat bottom left fixed ,url('../assets/bol.svg') no-repeat  bottom right fixed;
  background-size: 37% , 70% 20% , 30%;
}
</style>
