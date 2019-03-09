<template>
  <v-layout fill-height row wrap>
    <v-flex md12 ma-1 pa-0 flexbox>
      <v-card ripple color="blue-grey darken-2" class="white--text" :style="{ textAlign: align }">
        <h3>{{messages.auteur}}</h3>
        {{messages.text}}
      </v-card>
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
