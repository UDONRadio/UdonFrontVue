<template>
  <v-layout fill-height row wrap>
    <v-flex md12 ma-1 pa-0 flexbox>
      <div :style="{ textAlign: align }" >
        <div style="padding-right: 3em;padding-left:3em;">
        <h2 class="red--text">{{messages.auteur}}</h2>
          <p style="padding-right: 1em;">{{messages.text}}</p>
        </div>
      </div>
      <div style="border-bottom: black solid 1px; margin-left: 2em;margin-right: 2em;">

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'messages',
  props: ['messages', 'align']
}
</script>

<style scoped>

</style>
