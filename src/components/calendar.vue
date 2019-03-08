<template>
  <div>
    <v-img :src="require('../assets/calendrier.png')" contain aspect-ratio="1.25" @click.stop="dialog = !dialog" />
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        test
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
