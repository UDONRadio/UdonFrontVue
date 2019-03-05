<template>
  <v-layout column fill-height justify-center >
    <v-flex md10>
      <v-layout row fill-height justify-space-around align-space-around >
        <v-flex md6 >
          <v-layout column fill-height justify-space-between align-space-between>
            <v-flex md1>
              <navbar/>
            </v-flex>
            <v-flex md8>
              <infobox/>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md5 >
          <chat/>
        </v-flex>
      </v-layout>
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
