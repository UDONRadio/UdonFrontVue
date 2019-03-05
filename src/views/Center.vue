<template>
  <v-layout row fill-height justify-space-around align-space-around mt-5 pb-5>
    <v-flex md6 pb-5>
      <v-layout column fill-height justify-space-around align-space-around>
        <v-flex md8>
          <infobox/>
        </v-flex>
        <v-flex md3>
          <navbar/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md5 pb-5>
      <chat/>
    </v-flex>
  </v-layout>
</template>

<script>
import infobox from '../components/infobox.vue'
import chat from '../components/chat.vue'
import navbar from './navbar.vue'

export default {
  name: 'Center',
  components: {
    infobox,
    chat,
    navbar
  }
}
</script>

<style scoped lang="less">
.flex{
}
</style>
