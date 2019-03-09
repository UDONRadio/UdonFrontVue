<template>
  <v-layout>
    <v-card>
      <v-card-title>
        {{emission.titre}}
      </v-card-title>
      <v-card-text>
        {{emission.description}}
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: 'emissions',
  props: ['emission']
}
</script>

<style scoped>

</style>
