<template>
  <v-layout column fill-height justify-end align-space-between id="left" >
    <v-flex md3 id="calendrier">
      <Calendar></Calendar>
    </v-flex>
    <v-flex md1 hidden="hidden-sm-down">

    </v-flex>
    <v-flex md1 >

    </v-flex>
    <v-flex md3 style="z-index:2">
      <Propos></Propos>
    </v-flex>
  </v-layout>
</template>

<script>
import Calendar from './calendar.vue'
import Propos from './propos.vue'
export default {
  name: 'left',
  components: {
    Calendar,
    Propos
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped lang="less">
#left {
  width: 100%;
}
</style>
