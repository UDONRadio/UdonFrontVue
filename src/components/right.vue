<template>
  <v-layout column fill-height justify-start id="right" >
    <v-flex md2>
      <router-link to="/">
        <v-img :src="require('../assets/logo.svg')" contain aspect-ratio="2"/>
      </router-link>
    </v-flex>
    <v-flex md2>

    </v-flex>
    <v-flex md4>
      <router-link :to="{ path: 'replays', params: { userId: '123' } }">
        <v-img :src="require('../assets/cassette.svg')" contain aspect-ratio="1"/>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'right'
}
</script>

<style scoped lang="less">
.router-link-active{
  text-decoration: none;
  outline:none
}
</style>
