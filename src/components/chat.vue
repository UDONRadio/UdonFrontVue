<template>
  <v-layout fill-height column id="chat" ma-0 pa-0 fixed >
    <v-flex md10 id="chatbox" fixed>
      <v-list two-line>
        <template  fill-height fixed>
          <message :messages="item" v-for="item in messages" :key="item.auteur"></message>
        </template>
      </v-list>
    </v-flex>
    <v-flex md2>
      <v-text-field
        label="Subject"
        v-model="message"
        placeholder="Vasy exprime toi "
        single-line
        full-width
        hide-details
        append-icon="send"
        @click:append="send"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
import message from './messages.vue'
export default {
  name: 'chat',
  components: {
    message
  },
  data: () => {
    return {
      message: '',
      user: 'Jean-mimi',
      messages: [
        {
          auteur: 'Jean-mimi',
          text: 'salut les potes'
        },
        {
          auteur: 'Test1',
          text: 'je suis un robot bip bip boup'
        },
        {
          auteur: 'Test1',
          text: 'je suis un robot bip bip boup'
        },
        {
          auteur: 'Test1',
          text: 'je suis un robot bip bip boup'
        }
      ]
    }
  },
  methods: {
    send () {
      alert(`promis le message "${this.message}" ete envoye`)
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
