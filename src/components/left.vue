<template>
  <v-layout column fill-height justify-end id="left" >
    <v-flex md4 ml-5 pl-5 mb-0 pb-0 pt-3>
      <img src="../assets/calendrier.svg" height="70%" width="90%"/>
    </v-flex>
    <v-flex md4 pl-4 ml-3>
      <img src="../assets/propos.svg" height="98%" width="80%"/>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'left'
}
</script>

<style scoped lang="less">
#left{
  width:100%;
}
div.flex{
  width:100%;
}
</style>
