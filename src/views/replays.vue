<template>
  <v-layout row fill-height align-space-around justify-space-around id="home">
    <v-flex md3 mr-3>
      <left/>
    </v-flex>
    <v-flex md9  ma-0>
      <v-layout column fill-height justify-start >

      </v-layout>
    </v-flex>
    <v-flex md3 ml-3>
      <right/>
    </v-flex>
  </v-layout>
</template>

<script>
import left from '../components/left.vue'
import right from '../components/right.vue'

export default {
  name: 'Home',
  components: {
    left,
    right
  },
  props: ['id'],
  mounted: function () {
    console.log(this.id)
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
