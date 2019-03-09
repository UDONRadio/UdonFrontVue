<template>
  <v-layout fill-height column align-space-between justify-end id="chat">
    <v-flex md11 id="chatbox" style="max-height:73vh;" v-chat-scroll>
      <v-card auto-scroll ma-0 pa-2 >
        <message  :messages="item" v-for="item in messages" :align="align" :key="item.auteur"></message>
      </v-card>
    </v-flex>
    <v-flex md1>
      <v-layout row fill-height justify-space-around aligne-space-between style="background-color: antiquewhite;">
        <v-flex md10 >
          <v-text-field
              v-model="texte"
              label="Exprime toi"
              color="grey"
              @keydown.enter="send"
              autofocus
            ></v-text-field>
        </v-flex>
        <v-flex md2 style="z-index:2;">
          <v-img :src="require('../assets/send.svg')" contain aspect-ratio="1" @click="send" />
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
      user: this.$store.state.user.username,
      messages: [],
      align: 'left'
    }
  },
  mounted () {
    if (this.user === undefined) this.user = this.naming()
    message.on('created', (message) => {
      console.log(message)
      this.messages.push(message)
    })
    console.log(this.user)
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
      console.log(this.user)
    },
    naming () {
      let a = Math.floor(Math.random() * Math.floor(9999))
      return `anon${a}`
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
