<template>
    <v-layout fill-height>
      <v-flex md12 pa-4>
        <v-list>

        </v-list>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'replays',
  props: ['id'],
  mounted: function () {
    console.log(this.props.id)
  }
}
</script>

<style scoped>

</style>
