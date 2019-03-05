<template>
  <v-layout ma-0 pa-0 row fill-height align-center justify-space-around id="navbar">
    <v-flex md10>
      <player/>
    </v-flex>
  </v-layout>
</template>

<script>
import player from '../components/player.vue'
export default {
  name: 'navbar',
  components: {
    player
  }
}
</script>

<style scoped lang="less">
#navbar{

}
</style>
