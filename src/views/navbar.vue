<template>
  <v-layout ma-0 pa-0 row fill-height align-space-around justify-space-between id="navbar">
    <v-flex md3 mr-3 offset-md2>
      <img src="../assets/logo.svg" height="130%" width="100%"/>
    </v-flex>
    <v-flex md7 ml-2 pt-5 pb-2>
      <player/>
    </v-flex>
  </v-layout>
</template>

<script>
import player from'../components/player.vue'
export default {
  name: 'navbar',
  components:{
    player
  }
}
</script>

<style scoped lang="less">
#navbar{

}
</style>
