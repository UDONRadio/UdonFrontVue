<template>
  <v-layout column fill-height align-space-around justify-end id="home">
    <audio autoplay="true" id="media" preload="metadata" src="https://udonradio.fr:8080/udon.mp3?cache-buster=1551282691430" title="https://udonradio.fr:8080/udon.mp3?cache-buster=1551282691430"><p>Your browser does not support the <code>audio</code> element.</p></audio>
    <v-flex md10>
      <v-layout row fill-height justify-space-between >
        <v-flex md7 pr-3>
          <v-layout column fill-height justify-space-between align-space-between>
            <v-flex md1 pb-3>
              <Player></Player>
            </v-flex>
            <v-flex md11 pt-3>
              <Infobox></Infobox>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md5 pl-3>
          <Chat></Chat>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md1>
      <v-layout row fill-height align-space-around justify-center>
        <v-flex md1 offset-md5>
          <v-layout column fill-height align-space-around justify-end>
            <v-flex md6 >
              <Login></Login>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Chat from '../components/chat.vue'
import Player from '../components/player.vue'
import Infobox from '../components/infobox.vue'
import Login from '../components/login.vue'

export default {
  name: 'Home',
  components: {
    Chat,
    Player,
    Infobox,
    Login
  },
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style scoped lang="less">

</style>
