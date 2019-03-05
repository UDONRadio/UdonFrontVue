<template>
  <v-list-tile
    :key="messages.auteur"
  >
    <v-list-tile-content class="justify-right">
      <v-list-tile-title style="color:purple;">
        {{messages.auteur}}
      </v-list-tile-title>
      {{messages.text}}
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'messages',
  props: ['messages']
}
</script>

<style scoped>

</style>
