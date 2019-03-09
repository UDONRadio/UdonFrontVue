<template>
  <div>
    <v-img :src="require('../assets/calendrier.png')" contain aspect-ratio="1.25" @click.stop="dialog = !dialog" />
    <v-dialog
      v-model="dialog"
      max-width="315"
    >
      <v-card>
        <h1>En cours de construction</h1>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'propos',
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>

</style>
