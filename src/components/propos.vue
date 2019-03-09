<template>
  <div ma=-0 pa-0>
    <v-img :src="require('../assets/propos.svg')" contain aspect-ratio="1" @click.stop="dialog = !dialog"/>
    <v-dialog
      v-model="dialog"
      max-width="450"
    >
      <div>
        <v-img :src="require('../assets/propos.svg')" contain aspect-ratio="1"></v-img>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  props: ['dialogue'],
  data () {
    return {
      dialog: this.dialogue
    }
  },
  mounted: function () {
    this.dialog = this.dialogue
  }
}
</script>

<style scoped>

</style>
