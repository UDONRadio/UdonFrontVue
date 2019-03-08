<template>
  <v-layout fill-height justify-space-around align-space-around>
    <v-flex md12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="emission.img"
          height="200px"
          width="200px"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ emission.title }}</h3>
            <div>{{ emission.description }}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'emission',
  props: ['emission']
}
</script>

<style scoped>

</style>
