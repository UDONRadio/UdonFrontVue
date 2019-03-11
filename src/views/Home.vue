<template>
  <v-layout row fill-height align-space-around justify-space-around id="home">
    <div id='background' ></div>
    <v-flex md2 hidden-md-down>
      <Left></Left>
    </v-flex>
    <v-flex md8 sm12>
      <v-content align-content-space-around transition="slide-x-transition" style="width: 100%;height: 100%;">
        <v-layout column fill-height align-space-around justify-end >
          <v-flex md8>
            <v-layout row fill-height justify-space-between >
              <v-flex md7 pr-3>
                <v-layout column fill-height justify-space-between align-space-between>
                  <v-flex md1>
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
          <v-flex md2>
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
      </v-content>
    </v-flex>
    <v-flex md2 hidden-md-down>
      <Right/>
    </v-flex>
  </v-layout>
</template>

<script>
import Chat from '../components/chat.vue'
import Player from '../components/player.vue'
import Infobox from '../components/infobox.vue'
import Login from '../components/login.vue'
import Left from '../components/left.vue'
import Right from '../components/right.vue'

export default {
  name: 'Home',
  components: {
    Chat,
    Player,
    Infobox,
    Login,
    Right,
    Left
  },
  data () {
    return {
      username: ''
    }
  }
}
</script>

<style scoped lang="less">
#home{
  background-color: #def2fd;
}
#background{
  position: absolute;
  width:100%;
  height: 100%;
  background: url('../assets/pates-top.svg') top left no-repeat fixed ,url('../assets/pates-bottom.svg') no-repeat bottom left fixed ,url('../assets/bol.svg') no-repeat  bottom right fixed;
  background-size: 37% , 70% 20% , 30%;
  z-index: 1;
  pointer-events: none;
}
</style>
