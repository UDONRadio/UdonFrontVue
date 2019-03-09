<template>
  <v-layout fill-height column align-space-between justify-end id="chat">
    <v-flex md11 id="chatbox" style="max-height:49vh;" v-chat-scroll>
      <div auto-scroll ma-0 pa-2 >
        <message  :messages="item" v-for="item in $store.state.messages" :align="item.auteur === $store.state.user.username ? 'right' : 'left'" :key="item._id"></message>
      </div>
    </v-flex>
    <v-flex md1>
      <v-layout column fill-height justify-end aligne-space-around>
        <v-flex md9>

        </v-flex>
        <v-flex md3>
          <v-layout row fill-height justify-center aligne-center style="border-top: solid black 1px;">
              <v-flex md10>
                <v-text-field
                    solo
                    flat
                    v-model="texte"
                    label="Exprime toi"
                    color="grey"
                    @keydown.enter="send"
                    autofocus
                    height="10"
                  ></v-text-field>
              </v-flex>
              <v-flex md2>
                <v-img :src="require('../assets/send.svg')" contain aspect-ratio="1" @click="send" />
              </v-flex>
            </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Message from './messages.vue'
import { message } from '../services/index.js'

export default {
  name: 'chat',
  components: {
    Message
  },
  props: ['username'],
  data () {
    return {
      texte: '',
      align: 'left'
    }
  },
  mounted () {
    message.on('created', (message) => {
      console.log(message)
      this.$store.state.messages.push(message)
    })
  },
  methods: {
    send () {
      let messagebis = {
        auteur: this.$store.state.user.username,
        text: this.texte,
        align: 'right'
      }
      message.create(messagebis)
      this.texte = ''
    }
  }
}
</script>

<style scoped lang="less">
#chat{
  background-color: white;
  border: black 5px solid;
  border-radius: 2%;
}
#chatbox{
  overflow: auto;
}
</style>
