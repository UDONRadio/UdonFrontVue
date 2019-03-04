<template>
  <v-layout column fill-height justify-start >
    <v-flex ma-0 md3>
      <navbar/>
    </v-flex>
    <v-flex md6 ma-0>
      <v-layout row fill-height shrink justify-space-between>
        <v-flex md5 pr-5>
          <infobox/>
        </v-flex>
        <v-flex md7 pl-3>
          <chat/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md3>
      <recre/>
    </v-flex>
  </v-layout>
</template>

<script>
import infobox from '../components/infobox.vue'
import chat from '../components/chat.vue'
import recre from '../components/recre.vue'
import navbar from './navbar.vue'

export default {
  name: 'Center',
  components: {
    infobox,
    chat,
    recre,
    navbar
  }
}
</script>

<style scoped lang="less">
.flex{
}
</style>
