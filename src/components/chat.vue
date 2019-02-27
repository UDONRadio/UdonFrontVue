<template>
  <v-container fill-height>
    <v-layout fill-height id="chat">
      <v-flex md12>
        <v-card class="elevation-12" color="primary lighten-4" fill-height>
          <v-toolbar dark color="primary darken-1">
            <v-toolbar-title>Chat</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-list ref="chat" id="logs">
              <template v-for="(item, index) in logs">
                <v-subheader v-if="item" :key="index">{{ item }}</v-subheader>
              </template>
            </v-list>
          </v-card-text>
          <v-card-actions>
              <v-form @submit.prevent="submit">
                <v-layout justify-space-between row wrap>
                  <v-flex>
                    <v-text-field v-model="msg" label="Message" single-line solo-inverted></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-btn fab dark small color="primary" type="submit">
                      <v-icon dark>send</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'chat',
  data: () => ({
    logs: [],
    msg: null
  }),
  methods: {
    submit () {
      this.logs.push(this.msg)
      this.msg = ''
    }
  },
  watch: {
    logs () {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight
      }, 0)
    }
  }
}
</script>

<style scoped lang="less">
</style>
