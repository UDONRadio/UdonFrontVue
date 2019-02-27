<template>
  <v-layout column fill-height justify-start >
    <v-flex mb-0 mt-5 md3>
      <navbar/>
    </v-flex>
    <v-flex md6 >
      <v-layout row fill-height justify-space-between>
        <v-flex md5 pr-5>
          <infobox/>
        </v-flex>
        <v-flex md7 pl-3>
          <chat/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md3>
      <v-layout row fill-height justify-space-between>
        <v-flex md offset-md8 >
          <recre/>
        </v-flex>
      </v-layout>
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

<style scoped>

</style>
