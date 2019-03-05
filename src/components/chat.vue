<template>
  <v-layout fill-height column id="chat" ma-0 pa-0 fixed >
    <v-flex md10 id="chatbox" fixed>
      <v-list two-line>
        <template v-for="item in messages" fill-height fixed>
          <v-list-tile
            :key="item.auteur"
          >
            <v-list-tile-content style="text-align: right;">
              <v-list-tile-title style="color:purple;">
                {{item.auteur}}
              </v-list-tile-title>
                {{item.text}}
            </v-list-tile-content>
          </v-list-tile>
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
        @click:append="test"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'chat',
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
        },
        {
          auteur: 'Test1',
          text: 'je suis un robot bip bip boup'
        },
        {
          auteur: 'Test1',
          text: 'je suis un robot bip bip boup boup bip boup bip bip boup bip bip'
        }
      ]
    }
  },
  methods: {
    test () {
      alert(`promis le message "${this.message}" ete envoye`)
    }
  }
}
</script>

<style scoped lang="less">
#chat{
  background-color: white;
  border: black 5px solid;
  max-height: 80vh;
  border-radius: 2%;
}
#chatbox{
  overflow: auto;
}
</style>
